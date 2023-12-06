export class AuthUnauthorizedError extends Error {
  constructor(message?: string) {
    super(message || "unauthorized")
    this.name = "AuthUnauthorizedError"
  }
}