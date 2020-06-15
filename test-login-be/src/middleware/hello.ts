import {MiddlewareContext} from '@loopback/rest';

export const helloMiddleware = (context: MiddlewareContext) => {
  console.log('🍊 hello from the hello middleware');
  // console.log(
  //   '🍊 context.request.headers.cookie: ',
  //   context.request.headers.cookie,
  // );
  const rawCookie = context.request.headers.cookie;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let token: String[] | undefined;
  if (rawCookie !== undefined) {
    token = rawCookie.split('=', 2);
    console.log('🍊 token: ', token[1]);
  }
  // context.request.headers.cookie = '';

  // @ts-ignore
  console.log('🍊 context.request.user: ', context.request.user);
  // return context;
};
// export const helloMiddleware = (context: RequestContext) => {
//   console.log('🍊 hello from the hello middleware');
//   console.log('🍊 context: ', context.request);
//   return context;
// };
