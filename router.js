function route(handle, pathName, response, request) {
  // body...
  console.log(pathName + '的路由逻辑!');
  if (typeof handle[pathName] === 'function') {
    handle[pathName](response, request);
  } else {
    console.log('没有这个路由的处理办法' + pathName);
    response.writeHead(404, {'Content-Type': 'text/html'});
    response.write('404 Not Found');
    response.end();
  }
}

exports.route = route;