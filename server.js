// module import 부분
const { Nuxt, Builder } = require('nuxt');
const bodyParser = require('body-parser');
const app = require('express')();

// 설정정보
const host = process.env.HOST || '127.0.0.1';
const port = process.env.PORT || '3000';

// 모듈적용 
app.use(bodyParser.json());
// app.use(session({
//   secret: 'nuxt-test',
//   resave: false,
//   saveUninitialized: false,
//   cookie: { maxAge: 60000 }
// }))

let config = require('./nuxt.config.js')
config.dev = !(process.env.NODE_ENV === 'production')
const nuxt = new Nuxt(config)

if (config.dev) {
  const builder = new Builder(nuxt)
  builder.build()
}
app.use(nuxt.render)


// 라우팅 설정
// require('./server/routes')(app);

// 서버 시작 
app.listen(port, host)
console.log('Server listening on ' + host + ' : ' + port);