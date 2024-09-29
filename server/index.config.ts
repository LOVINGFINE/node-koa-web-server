import { getIPAdress } from "@/utils/os";

// 统一前缀
export const path_prefix = "/api";

// 端口
export const port = 9999;

// 当前服务的ip地址
export const ip = getIPAdress();

// 上传文件大小限制 | 5MB
export const max_file_size = 5 * 1024 * 1024;
