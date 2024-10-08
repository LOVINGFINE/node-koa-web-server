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

interface ResAuth {
  token: string;
  dateTime: string;
}
