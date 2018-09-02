var express = require('express');
var router = express.Router();
var request=require('request');
var url = require('url')
var keyWord='python';
/* GET home page. */
router.get('/', function(req, res, next) {                  //生成一个路由实例用来捕获访问主页的get请求，导出这个路由并在app.js通过app..use('/',routes);加载。这样，当访问主页时，就会调用res.render('index',{title:'Express'});渲染views/index.ejs模板并显示到浏览器中。
  res.render('index', { title: 'Express' });
});
router.get('/test', function(req, res, next) {               //生成一个路由实例用来捕获访问主页的get请求，导出这个路由并在app.js通过app..use('/',routes);加载。这样，当访问主页时，就会调用res.render('index',{title:'Express'});渲染views/index.ejs模板并显示到浏览器中。
    res.render('test',{title:['ergouzi','houzi']});
});
router.get('/t', function(req, res, next) {               //生成一个路由实例用来捕获访问主页的get请求，导出这个路由并在app.js通过app..use('/',routes);加载。这样，当访问主页时，就会调用res.render('index',{title:'Express'});渲染views/index.ejs模板并显示到浏览器中。
    res.render('t',{title:['ergouzi','houzi']});
});
router.get('/page',function(req,res,next){
    res.render('page',{keyWord:keyWord});
});
router.get('/pageAx',function (req,res,next) {
    var queryObj=url.parse(req.url,true);
    var keyWord=queryObj.query.keyWord;
    console.log(keyWord);
    var key_value;
    var getUrl = 'http://58.87.72.177:8080/datapeer/salaryrange/getInfoByKey.action';
    console.log(getUrl);
    request.post({url:getUrl,form:{keyWord:keyWord}
        },
        function(error, response, body) {
        if (!error && response.statusCode == 200) {                              //将前端需要的数据返回给前端（工资的阶梯分布）
            res.send(response.body);
        }
        if(error){
            console("error");
        }
    })
})
router.get('/pageAx2',function (req,res,next) {
    var queryObj=url.parse(req.url,true);
    var keyWord=queryObj.query.keyWord;
    console.log(keyWord);
    var key_value;
    var getUrl = 'http://58.87.72.177:8080/datapeer/citysalary/getInfoByKey.action';
    console.log(getUrl);
    request.post({url:getUrl,form:{keyWord:keyWord}
        },
        function(error, response, body) {
            if (!error && response.statusCode == 200) {                              //将前端需要的数据返回给前端（工资的阶梯分布）
                res.send(response.body);
            }
            if(error){
                console("error");
            }
        })
})
router.get('/cityList',function (req,res,next) {
    var queryObj=url.parse(req.url,true);
    var keyWord=queryObj.query.keyWord;
    console.log(keyWord);
    var key_value;
    var getUrl = 'http://58.87.72.177:8080/datapeer/citylist/getCityList.action';
    console.log(getUrl);
    request.post({url:getUrl,form:{keyWord:keyWord}
        },
        function(error, response, body) {
            if (!error && response.statusCode == 200) {                              //将前端需要的数据返回给前端（工资的阶梯分布）
                res.send(response.body);
            }
            if(error){
                console("error");
            }
        })
})
router.get('/avgSalary',function (req,res,next) {
    var queryObj=url.parse(req.url,true);
    var keyWord=queryObj.query.keyWord;
    console.log(keyWord);
    var key_value;
    var getUrl = 'http://58.87.72.177:8080/datapeer/avgSalary/getSalaryByKey.action';
    console.log(getUrl);
    request.post({url:getUrl,form:{keyWord:keyWord}
        },
        function(error, response, body) {
            if (!error && response.statusCode == 200) {                              //将前端需要的数据返回给前端（工资的阶梯分布）
                res.send(response.body);
            }
            if(error){
                console("error");
            }
        })
})

router.get('/keyWord', function(req, res, next) {//生成一个路由实例用来捕获访问主页的get请求，导出这个路由并在app.js通过app..use('/',routes);加载。这样，当访问主页时，就会调用res.render('index',{title:'Express'});渲染views/index.ejs模板并显示到浏览器中。
    var queryObj=url.parse(req.url,true);
    keyWord=queryObj.query.keyWord;
    console.log(keyWord);
    res.send('successful');
});
router.get('/post', function(req, res, next) {               //生成一个路由实例用来捕获访问主页的get请求，导出这个路由并在app.js通过app..use('/',routes);加载。这样，当访问主页时，就会调用res.render('index',{title:'Express'});渲染views/index.ejs模板并显示到浏览器中。
   console.log(keyWord);
    res.render('post',{keyWord:keyWord});
});
router.get('/top', function(req, res, next) {               //生成一个路由实例用来捕获访问主页的get请求，导出这个路由并在app.js通过app..use('/',routes);加载。这样，当访问主页时，就会调用res.render('index',{title:'Express'});渲染views/index.ejs模板并显示到浏览器中。
    res.render('top');
});
router.get('/analysis', function(req, res, next) {               //生成一个路由实例用来捕获访问主页的get请求，导出这个路由并在app.js通过app..use('/',routes);加载。这样，当访问主页时，就会调用res.render('index',{title:'Express'});渲染views/index.ejs模板并显示到浏览器中。
    console.log(keyWord);
    res.render('analysis',{keyWord:keyWord});
});
router.get('/Recommend', function(req, res, next) {               //生成一个路由实例用来捕获访问主页的get请求，导出这个路由并在app.js通过app..use('/',routes);加载。这样，当访问主页时，就会调用res.render('index',{title:'Express'});渲染views/index.ejs模板并显示到浏览器中。
    res.render('Recommend');
});
router.get('/data', function(req, res, next) {               //生成一个路由实例用来捕获访问主页的get请求，导出这个路由并在app.js通过app..use('/',routes);加载。这样，当访问主页时，就会调用res.render('index',{title:'Express'});渲染views/index.ejs模板并显示到浏览器中。
    res.render('data',{keyWord:keyWord});
});
module.exports = router;
