export interface HttpClientInterface {
  get: (url: string) => Promise<Response>;
  post: (url: string, data: Object) => Promise<Response>;
  put: (url: string, data: Object) => Promise<Response>;
  delete: (url: string) => Promise<Response>;
};
