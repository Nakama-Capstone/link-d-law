export namespace Password {
  export function hash(
    password: string,
  ) {
    // bcrypt bunjs
    return Bun.password.hashSync(password, {
      algorithm: "bcrypt",
      cost: 12,
    })
  }

  export function compare(
    password: string,
    hash: string,
  ) {
    return Bun.password.verifySync(password, hash)
  }
}