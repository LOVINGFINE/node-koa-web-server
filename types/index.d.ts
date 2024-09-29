interface ResData<T> {
  msg: string;
  code: number;
  data: T;
}

interface DbSchema {
  id: string;
  createTime: string;
  updateTime: string;
}
