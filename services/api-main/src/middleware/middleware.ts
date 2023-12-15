import express from "express"

// TODO: move this to middlewares folder
// middleware
const AuthMiddleware = async (req: any, res: any, next: any) => {
  // CHECK FROM GATEWAY
  // check is authorized
  let authErrorsResponse
  try {
    authErrorsResponse = JSON.parse(req.headers["x-gateway-auth-response"])
  } catch (error) {
    // did not found auth response
  }
  const isAuthorized = req.headers['x-gateway-auth-authorized'] == "true" 
  if (!isAuthorized) return res.status(401).json({
    ok: false,
    message: 'Unauthorized',
    errors: [
      {
        message: 'need valid token'
      },
      ...(authErrorsResponse?.errors || [])
    ]
  })
  // get auth user data
  const authDataRaw = req.headers['x-gateway-auth-data']
  if (!authDataRaw) return res.status(401).json({
    ok: false,
    message: 'Unauthorized',
    errors: [
      {
        message: 'user not found'
      }
    ]
  })
  let authData
  try {
    authData = JSON.parse(authDataRaw)
  } catch (error) {
    return res.status(401).json({
      ok: false,
      message: 'Unauthorized',
      errors: [
        {
          message: 'invalid user auth data'
        }
      ]
    }) 
  }
  

  // parse data
  Object.defineProperty(req, 'auth', {
    value: authData,
    writable: false,
    enumerable: true,
    configurable: false
  })

  // next request
  next()
}

interface RequestAuthMiddleware extends express.Request {
  auth: {
    user: {
      id: number
      email: string
      firstName: string
      lastName: string
      middleName?: string
      createdAt: string
      updatedAt: string
    }
    expired_at: number
    expired_in_human: string
  }
}

export { AuthMiddleware, RequestAuthMiddleware }