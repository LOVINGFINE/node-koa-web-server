interface LoginParam {
  email: string;
  passed: string;
}

interface UserInfo extends DbSchema {
  email: string;
  username: string;
  nickname: string;
  createTime: string;
}

interface AuthRes {
  token: string;
  dateTime: string;
}
