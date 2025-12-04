// types.ts

export enum CacheMode {
  READ_ONLY = 'READ_ONLY',
  READ_WRITE = 'READ_WRITE',
  READ_WRITE_BLOCKING = 'READ_WRITE_BLOCKING',
  READ_WRITE_UNBLOCKING = 'READ_WRITE_UNBLOCKING',
}

export enum TimeType {
  SECONDS = 'SECONDS',
  MILLISECONDS = 'MILLISECONDS',
  MICROSECONDS = 'MICROSECONDS',
  NANOSECONDS = 'NANOSECONDS',
}

export enum TTLUnit {
  SECONDS = 'SECONDS',
  MILLISECONDS = 'MILLISECONDS',
  MICROSECONDS = 'MICROSECONDS',
  NANOSECONDS = 'NANOSECONDS',
}

export interface ICacheConfig {
  enabled: boolean;
  host: string;
  port: number;
  password?: string;
  timeout?: number;
  retryCount?: number;
  retryTimeout?: number;
  database?: number;
  auth?: string;
  redisConfig: {
    host: string;
    port: number;
    password?: string;
    timeout?: number;
    retryCount?: number;
    retryTimeout?: number;
    database?: number;
  };
}

export interface ICacheOptions {
  mode: CacheMode;
  db?: number;
  ttl?: number;
  ttlUnit?: TTLUnit;
  prefix?: string;
  loggerLevel?: string;
  loggerOutput?: string;
}

export interface ICacheItem {
  key: string;
  value: any;
  expiresAt?: Date;
  ttl?: number;
  ttlUnit?: TTLUnit;
}