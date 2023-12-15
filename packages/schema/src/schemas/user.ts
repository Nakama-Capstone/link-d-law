import zod from 'zod'

export const userRegisterSchema = zod.object({
  firstName: zod.string().min(1).max(255),
  middleName: zod.string().min(1).max(255).optional(),
  lastName: zod.string().min(1).max(255),

  email: zod.string().email(),
  password: zod.string().min(8),
  passwordConfirmation: zod.string().min(8),
})

export const userLoginSchema = zod.object({
  email: zod.string().email(),
  password: zod.string().min(8),
})

export const userUpdateSchema = zod.object({
  firstName: zod.string().min(1).max(255),
  middleName: zod.string().min(1).max(255).optional(),
  lastName: zod.string().min(1).max(255),

  email: zod.string().email(),
  password: zod.string().min(8).optional(),
})