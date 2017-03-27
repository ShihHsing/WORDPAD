var http = require('http');
var url = require('url')
function start(route, handle) {
  // body...
  function onRequest (request, response) {
    // body...
    var pathName = url.parse(request.url).pathname;
    if (pathName != '/favicon.ico') {
      console.log('监听到有浏览器从 '+ pathName +' 访问!');
      route(handle, pathName, response, request);
    }
  }
  http.createServer(onRequest).listen(8888);
  console.log('服务启动!')
}

exports.start = start;