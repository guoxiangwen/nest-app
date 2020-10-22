import axios from 'axios';
import * as cheerio from 'cheerio';

const COOKIE = `_zap=951aecc3-255e-47ad-a88a-b749aa2ce108; _xsrf=c9eec33f-0b83-410a-a2a5-2237a2c31f0c; d_c0="ADAWlNhaCBKPTmiJrkaku3A-onjoCju7YKo=|1602578330"; q_c1=0ed819591b224ca693ca7c390e175105|1602579213000|1602579213000; Hm_lvt_98beee57fd2ef70ccdd5ca52b9740c49=1602494718,1602579213,1602582895,1602583160; capsion_ticket="2|1:0|10:1602583266|14:capsion_ticket|44:ZGRlYWZkMzA3YjA3NGIzNGIxNThlYjlhNWE5ODU0ZjM=|f63b2f42dcd255712f1097ce95e8477b7e4e1454e2089a5aa12f8aa1028d5b1a"; z_c0="2|1:0|10:1602583266|4:z_c0|92:Mi4xOXVNQkFRQUFBQUFBTUJhVTJGb0lFaVlBQUFCZ0FsVk40c2h5WUFCeTUyQWVxZ1gzaGd4Mml6Nk41bk9SS29rSlpB|7703d939b1cd4f473d202f20fa70cc727228334c1ca1031f6fcb0b2d3971b37d"; tst=r; Hm_lpvt_98beee57fd2ef70ccdd5ca52b9740c49=1602583269; KLBRSID=af132c66e9ed2b57686ff5c489976b91|1602583270|1602582892`;

axios
  .get('https://www.zhihu.com/hot', {
    headers: {
      cookie: COOKIE,
    },
  })
  .then((res) => {
    const $ = cheerio.load(res.data);
    const c = $('.HotList-list > section > div.HotItem-content > a');
    // change to array
    const c_arr = Array.from(c);
    const result = c_arr.map((i) => ({
      title: i.attribs.title,
      href: i.attribs.href,
    }));
    console.log(result);
  });
