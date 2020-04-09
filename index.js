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

app.get('/', function (req, res) {
  console.log("进来了");


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






  fs.writeFileSync(path.resolve(__dirname, 'data.json'), JSON.stringify(window.getAreaStat));
     res.send(JSON.stringify(window.getAreaStat))
  })


})




app.listen(3000, function () {
  console.log('app is listening at port 3000');
});