// types.ts
export type RedisConfig = {
  host: string;
  port: number;
  password?: string;
  db: number;
  options?: RedisOptions;
};

export type RedisOptions = {
  socketTimeout?: number;
  retryTimeout?: number;
  retryAttempts?: number;
  retryDelayOnFail?: number;
  retryDelayOnSuccess?: number;
  retryOnFailure?: boolean;
};

export type CacheConfig = {
  prefix: string;
  defaultTtl?: number;
  redis: RedisConfig;
};

export type Config = {
  cache: CacheConfig;
  redis: RedisConfig;
};