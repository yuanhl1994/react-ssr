import Koa from 'koa';
import Router from 'koa-router';
import React from 'react';
import path from 'path'
import { renderToString } from 'react-dom/server';
import { StaticRouter, matchPath } from 'react-router-dom';
import serve from 'koa-static'
import { Provider } from 'react-redux';
import createStore, { init } from '../store';
import axios from 'axios'
import routes from './route';

import App from './components/App.jsx';
import "@babel/polyfill" 
const app = new Koa()
const router = new Router()
const conf = {
    PORT: 9999,
  };

  const generateHtmlStr = (reactDom,reduxState) => `
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <title>Document</title>
      <meta name="referrer" content="no-referrer" />
  </head>
  <body>
  
      <div id="app">${reactDom}</div>
      <script>
        window.REDUX_DATA = ${JSON.stringify(reduxState)}
      </script>
      <script src="/dist/bundle.js"></script>
  </body>
  </html>
  `;
function getData(){
  return new Promise (function(resolve,reject){
    axios({
      url:'https://movie.douban.com/j/new_search_subjects?sort=U&range=0,10&tags=&start=0',
      method:'GET',
      header:{
        referer:'https://movie.douban.com/tag/',
        'Cookie':'ll="118172"; bid=NWXc69JB2Tk; __utmc=30149280; __utmc=223695111; __yadk_uid=k78Bzv8fXxoTdQif5r5gPAbQSHYQq8Et; trc_cookie_storage=taboola%2520global%253Auser-id%3D63e078d0-04ab-4a4c-a0f3-d46c22e825e9-tuct484bf67; douban-fav-remind=1; _vwo_uuid_v2=DFE07ADE3189FC6DC01AD27A8828FD986|8fd054c56cb496035b53287aeac2f0dd; gr_user_id=e43132e6-2d61-4b46-abff-68055abea000; UM_distinctid=16fc167e5b30-0b8ae97e1cbc66-39627c0f-13c680-16fc167e5b42c; __gads=ID=32e959531ccd8412:T=1579955336:S=ALNI_MYUX-CCPX6vWsWOHEF0XrAxxlDxzQ; viewed="1764843_3990022_5351500_34958774_33461466"; __utmz=30149280.1589270887.60.50.utmcsr=baidu|utmccn=(organic)|utmcmd=organic; __utmz=223695111.1589270887.45.38.utmcsr=baidu|utmccn=(organic)|utmcmd=organic; _pk_ref.100001.4cf6=%5B%22%22%2C%22%22%2C1589338327%2C%22https%3A%2F%2Fwww.baidu.com%2Flink%3Furl%3DdTWBgFMj6lUpyPI_n2kjgIYH56AkIByr9TgjMuD32coOF4Q35kyo99nYFTXmKtPt3SoeN_LglfHb3phsDfXMYq%26wd%3D%26eqid%3Dc18dffef0000091a000000045eba595c%22%5D; _pk_id.100001.4cf6=d98a5343d697fb86.1569405413.46.1589338327.1589270887.; __utma=30149280.293834327.1569405413.1589270887.1589338327.61; __utma=223695111.23610479.1569405413.1589270887.1589338327.46'
      }
    }).then(res=>{
      resolve(res.data.data)
      // data =
    })
  })
}
router.get('*',async (ctx)=>{
    const context = {};
    const { url } = ctx.req;
    const store = createStore();
    store.dispatch(init());
    // 获取首屏情况下的状态
    const reduxState = store.getState();
    //可以不用
    // const dataRequireMents = routes.filter(page => matchPath(ctx.req.url, page))
    //   // 把路由匹配的结果对应的组件拿出来
    //   .map(page => page.component)
    //   // 把定义了 serverFetch 静态方法的组件过滤出来
    //   .filter(comp => comp.serverFetch)
    //   // 嗯哼...
    //   .map(comp => store.dispatch(comp.serverFetch()));

    // // 等...
    // if (dataRequireMents.length) await Promise.all(dataRequireMents);
    if(url == '/j/new_search_subjects?sort=U&range=0,10&tags=&start=0'){
         
      // let data = 
      // console.log(data)
      
      
      ctx.body = await getData()
    }else{
      const rNode = renderToString(
        <Provider store={store}>
          <StaticRouter location={url} context={context}>
            <App />
          </StaticRouter>
        </Provider>,
      );
        const domString = generateHtmlStr(rNode,reduxState);
        ctx.body = domString 
    }
  
})
app.use(serve(path.resolve(__dirname,'../')))
app.use(router.routes(),router.allowedMethods())
app.listen(conf.PORT, () => {
    console.log(`The Server is listening on ${conf.PORT} now, enjoy`);
  });