interface RedisConfig {
  host: string;
  port: number;
  password?: string;
  db: number;
  family?: 4 | 6;
}

interface CacheConfig {
  enabled: boolean;
  type: 'redis';
  redis: RedisConfig;
}

interface LoggerOptions {
  level: 'debug' | 'info' | 'warn' | 'error' | 'fatal';
}

interface Options {
  cache: CacheConfig;
  logger: LoggerOptions;
}