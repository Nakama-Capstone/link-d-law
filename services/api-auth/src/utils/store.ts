import { cache } from "@/utils/cache"

export const storeUserToken = async (id: number, token: string, ttl: number) => {
  const expiryTime = Math.floor(Date.now() / 1000) + ttl
  await cache.hSet(`user:${id}:tokens`, token, expiryTime.toString());
}

export const removeUserToken = async (id: number, token: string) => {
  const tokenHashKey = `user:${id}:tokens`;
  await cache.hDel(tokenHashKey, token);
}

export const isUserTokenValid = async (id: number, token: string) => {
  const tokenHashKey = `user:${id}:tokens`;
  const expiryTimeStr = await cache.hGet(tokenHashKey, token);
  if (!expiryTimeStr) return false;
  
  const expiryTime = parseInt(expiryTimeStr, 10);
  const currentTime = Math.floor(Date.now() / 1000);

  if (!expiryTimeStr || expiryTime < currentTime) {
      await removeUserToken(id, token);
      return false;
  }

  return true;
}