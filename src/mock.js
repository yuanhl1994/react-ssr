import axios from 'axios';

export default () => axios({
  url:'/j/new_search_subjects?sort=U&range=0,10&tags=&start=0',
  method:'GET',
  header:{
    referer:'https://movie.douban.com/tag/',
    'Cookie':'ll="118172"; bid=NWXc69JB2Tk; __utmc=30149280; __utmc=223695111; __yadk_uid=k78Bzv8fXxoTdQif5r5gPAbQSHYQq8Et; trc_cookie_storage=taboola%2520global%253Auser-id%3D63e078d0-04ab-4a4c-a0f3-d46c22e825e9-tuct484bf67; douban-fav-remind=1; _vwo_uuid_v2=DFE07ADE3189FC6DC01AD27A8828FD986|8fd054c56cb496035b53287aeac2f0dd; gr_user_id=e43132e6-2d61-4b46-abff-68055abea000; UM_distinctid=16fc167e5b30-0b8ae97e1cbc66-39627c0f-13c680-16fc167e5b42c; __gads=ID=32e959531ccd8412:T=1579955336:S=ALNI_MYUX-CCPX6vWsWOHEF0XrAxxlDxzQ; viewed="1764843_3990022_5351500_34958774_33461466"; __utmz=30149280.1589270887.60.50.utmcsr=baidu|utmccn=(organic)|utmcmd=organic; __utmz=223695111.1589270887.45.38.utmcsr=baidu|utmccn=(organic)|utmcmd=organic; _pk_ref.100001.4cf6=%5B%22%22%2C%22%22%2C1589338327%2C%22https%3A%2F%2Fwww.baidu.com%2Flink%3Furl%3DdTWBgFMj6lUpyPI_n2kjgIYH56AkIByr9TgjMuD32coOF4Q35kyo99nYFTXmKtPt3SoeN_LglfHb3phsDfXMYq%26wd%3D%26eqid%3Dc18dffef0000091a000000045eba595c%22%5D; _pk_id.100001.4cf6=d98a5343d697fb86.1569405413.46.1589338327.1589270887.; __utma=30149280.293834327.1569405413.1589270887.1589338327.61; __utma=223695111.23610479.1569405413.1589270887.1589338327.46'
  }
})
  .then(({ data }) => {console.log(data);return data});
