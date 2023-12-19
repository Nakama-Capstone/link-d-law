export const exceptObjectKeys = (obj: object, keys: string[]) => {
  const newObj = { ...obj }
  keys.forEach(key => {
    delete (newObj as any)[key]
  })
  return newObj
}