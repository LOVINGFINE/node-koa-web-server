interface DefConfig {
  prefix?: string;
  port?: number;
  publicDir?: string;
  upload?: {
    maxFileSize?: number;
    rootDir?: string;
  };
}

interface ConfigInfo {
  prefix: string;
  publicDir: string;
  toFilePath(p: string): string;
  port: number;
  ip: string;
  upload: {
    maxFileSize: number;
    rootDir: string;
  };
}
