var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');                          //视图加载引擎EJs

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));                                     //加载日志中间件
app.use(bodyParser.json());                                 //加载解析json中间件
app.use(bodyParser.urlencoded({ extended: false }));        //加载解析urlencoded请求体的中间件
app.use(cookieParser());                                    //加载解析cookie的中间件
app.use(express.static(path.join(__dirname, 'public')));    //设置public文件夹为存放静态文件的目录

app.use('/', index);                                        //路由控制
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {                         //捕获404错误，并转发到错误处理器
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {                    //开发环境下的错误处理器，将错误信息渲染error模板并显示到浏览器
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;                                    //导出APP实例供其他模块调用
