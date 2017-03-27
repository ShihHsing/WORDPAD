var querystring = require('querystring'),
  fs = require('fs'),
  formidable = require('formidable');

function start (response) {
  // body...
  console.log('进入start处理逻辑');

  var body = '<html>'+
    '<head>'+
    '<meta http-equiv="Content-Type" content="text/html; '+
    'charset=UTF-8" />'+
    '</head>'+
    '<body>'+
    '<form action="/upload" enctype="multipart/form-data" '+
    'method="post">'+
    '<input type="file" name="upload" multiple="multiple">'+
    '<input type="submit" value="Upload file" />'+
    '</form>'+
    '</body>'+
    '</html>';

    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(body);
    response.end();
}

function upload (response, request) {
  // body...
  console.log('进入upload处理逻辑');

  var form = new formidable.IncomingForm();
  console.log("开始解析");
  form.parse(request, function(error, fields, files) {
    console.log("解析完成");
    fs.renameSync(files.upload.path, "/tmp/test.png");
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write("received image:<br/>");
    response.write("<img src='/show' />");
    response.end();
  });
}

function show(response) {
  // body...
  console.log('进入Show处理逻辑');
  fs.readFile('/tmp/test.png','binary',function(error, file) {
      if (error) {
        response.writeHead(500, {'Content-Type': 'text/plain'});
        response.write(error + '\n');
        response.end();
      } else {
        response.writeHead(200, {'Content-Type': 'image/png'});
        response.write(file, 'binary');
        response.end();
      }
  });
}

exports.start = start;
exports.upload = upload;
exports.show = show;