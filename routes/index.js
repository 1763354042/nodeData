var express = require('express');
var router = express.Router();
var request=require('request')
/* GET home page. */
router.get('/', function(req, res, next) {                  //生成一个路由实例用来捕获访问主页的get请求，导出这个路由并在app.js通过app..use('/',routes);加载。这样，当访问主页时，就会调用res.render('index',{title:'Express'});渲染views/index.ejs模板并显示到浏览器中。
  res.render('index', { title: 'Express' });
});
router.get('/test', function(req, res, next) {               //生成一个路由实例用来捕获访问主页的get请求，导出这个路由并在app.js通过app..use('/',routes);加载。这样，当访问主页时，就会调用res.render('index',{title:'Express'});渲染views/index.ejs模板并显示到浏览器中。
    res.render('test');
});
router.get('/t', function(req, res, next) {               //生成一个路由实例用来捕获访问主页的get请求，导出这个路由并在app.js通过app..use('/',routes);加载。这样，当访问主页时，就会调用res.render('index',{title:'Express'});渲染views/index.ejs模板并显示到浏览器中。
    res.render('t');
});
router.post('/nodeAjax',function (req,res,next) {
       console.log(req.body);
    request({
        url: 'http://58.87.72.177:8080/datapeer/requestJson.action',
        method: "POST",
        json: true,
        headers: {
            "content-type": "application/json;charset=utf-8"
        },
        body:req.body
    }, function(error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(body);
        }
    })
      res.send('123');
});
router.get('/page',function(req,res,next){
    // console.log(req.body);
    // request({
    //     url: 'http://58.87.72.177:8080/datapeer/requestJson.action',
    //     method: "POST",
    //     json: true,
    //     headers: {
    //         "content-type": "application/json;charset=utf-8"
    //     },
    //     body:req.body
    // }, function(error, response, body) {
    //     if (!error && response.statusCode == 200) {
    //         console.log(body);
    //     }
    // })
    res.render('page');
});
router.get('/post', function(req, res, next) {               //生成一个路由实例用来捕获访问主页的get请求，导出这个路由并在app.js通过app..use('/',routes);加载。这样，当访问主页时，就会调用res.render('index',{title:'Express'});渲染views/index.ejs模板并显示到浏览器中。
    res.render('post');
});
router.get('/top', function(req, res, next) {               //生成一个路由实例用来捕获访问主页的get请求，导出这个路由并在app.js通过app..use('/',routes);加载。这样，当访问主页时，就会调用res.render('index',{title:'Express'});渲染views/index.ejs模板并显示到浏览器中。
    res.render('top');
});
router.get('/analysis', function(req, res, next) {               //生成一个路由实例用来捕获访问主页的get请求，导出这个路由并在app.js通过app..use('/',routes);加载。这样，当访问主页时，就会调用res.render('index',{title:'Express'});渲染views/index.ejs模板并显示到浏览器中。
    res.render('analysis');
});
router.get('/Recommend', function(req, res, next) {               //生成一个路由实例用来捕获访问主页的get请求，导出这个路由并在app.js通过app..use('/',routes);加载。这样，当访问主页时，就会调用res.render('index',{title:'Express'});渲染views/index.ejs模板并显示到浏览器中。
    res.render('Recommend');
});
module.exports = router;
