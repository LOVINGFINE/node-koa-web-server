import os from 'os';
import path from 'path';
function getIPAdress() {
  const interfaces = os.networkInterfaces();
  for (const key in interfaces) {
    const iface = interfaces[key];
    if (iface) {
      for (let i = 0; i < iface.length; i++) {
        const alias = iface[i];
        if (
          alias.family === 'IPv4' &&
          alias.address !== '127.0.0.1' &&
          !alias.internal
        ) {
          return alias.address;
        }
      }
    }
  }
  return '127.0.0.1';
}

export function defineConfig(p: DefConfig): ConfigInfo {
  const ip = getIPAdress();

  const { port = 9999, upload = {}, prefix = '', publicDir = '' } = p;
  // 上传文件大小限制 | 5MB
  const { maxFileSize = 5 * 1024 * 1024, rootDir = '' } = upload;

  return {
    prefix,
    ip,
    port,
    publicDir,
    toFilePath(p: string) {
      const url = path.resolve(prefix, publicDir, p);
      return `${ip}${url}`;
    },
    upload: {
      maxFileSize,
      rootDir,
    },
  };
}
