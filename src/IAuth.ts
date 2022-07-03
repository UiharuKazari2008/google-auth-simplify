export interface IAuth {
  generateAuthUrl(scope: Array<string>): string;
  getAuthToken(code: string): Promise<any>;
  getUserInfo(token: string): Promise<any>;
}
