import createRequest from '@/utils/request';

const request = createRequest({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

const userApi = {
  /** @登录 */
  login(data: LoginParam) {
    return request<AuthRes>({
      url: '/login',
      method: 'post',
      data,
    });
  },
  /** @获取个人信息 */
  getMyInfo() {
    return request<UserInfo>({
      url: '/myInfo',
    });
  },
};

export default userApi;
