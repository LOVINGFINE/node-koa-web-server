import Koa from 'koa';
import koaBody from 'koa-body';
import koaJwt from 'koa-jwt';
import staticFiles from 'koa-static';
import config from '@/index.config';
import { useController } from './middleware/controller';

const App = new Koa();

App.use(staticFiles(config.upload.rootDir));

// 使用中间件处理 post 传参 和上传图片
App.use(
  koaBody({
    multipart: true,
    formidable: {
      maxFileSize: config.upload.maxFileSize,
    },
  })
);

useController(App, {
  root: 'router',
  prefix: config.prefix,
}).then(({ whitelist }) => {
  App.use(
    koaJwt({ secret: 'shared-secret' }).unless({
      path: [/^\/public/, ...whitelist],
    })
  );
  App.listen(config.port, () => {
    const suffix = config.port + config.prefix;
    // console.clear()
    console.log('server running:');
    console.log(
      ` - Local:   \x1B[36m http://localhost:\x1B[0m\x1B[96m${suffix} \x1B[0m`
    );
    console.log(
      ` - Network: \x1B[36m http://${ip}:\x1B[0m\x1B[96m${suffix} \x1B[0m`
    );
  });
});
