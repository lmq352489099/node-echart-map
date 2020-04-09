let requests = require('requests')
var express = require('express');
let fs = require('fs')
let path = require('path')
const cheerio = require('cheerio')
var app = express();


app.all('*', function (req, res, next) {
  //设为指定的域
  res.header('Access-Control-Allow-Origin', "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header('Access-Control-Allow-Credentials', true);
  res.header("X-Powered-By", ' 3.2.1');
  next();
});
// app.use(express.static("./map.html"));
app.use('/js', express.static(__dirname + '/js'));
app.use('/node_modules', express.static(__dirname + '/node_modules'));

app.get('/123', function (req, res) {
  console.log("进来了");

  //response.writeHead(响应状态码，响应头对象): 发送一个响应头给请求。
  // res.writeHead(200, { 'Content-Type': 'text/html' })
  // 如果url=‘/’ ,读取指定文件下的html文件，渲染到页面。
  fs.readFile('./map.html', 'utf-8', function (err, data) {
    if (err) {
      throw err;
    }

    res.send(data);
  })

})




app.get('/', function (req, res) {
  console.log("进来了");
  // res.render('./map.html');
  requests('https://ncov.dxy.cn/ncovh5/view/pneumonia?from=timeline&isappinstalled=0').on('data', (chunk) => {

    let window = {}
    const $ = cheerio.load(chunk);
    eval($('#getAreaStat').html())
    console.log(window);

    // res.send(JSON.stringify(window.getAreaStat))
    // fs.writeFile(path.resolve(__dirname, 'data.json'), JSON.stringify(window.getAreaStat), (err) => {
    //   // if (err) {
    //   //   res.send('失败')
    //   // } else {
    //   //   res.send('成功')
    //   // }

    // })






    // fs.writeFileSync(path.resolve(__dirname, 'data.json'), JSON.stringify(window.getAreaStat));
    res.send(JSON.stringify(window.getAreaStat))
  })


})




app.listen(3000, function () {
  console.log('app is listening at port 3000');
});