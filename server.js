const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  const basePath = path.join(__dirname, 'public');
  let filePath = path.join(basePath, req.url);

  // Исправление пути для корневого запроса
  if (req.url === '/') filePath = path.join(basePath, 'index.html');

  const extname = path.extname(filePath);
  const mimeTypes = {
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'text/javascript'
  };

  fs.readFile(filePath, (err, data) => {
    if (err) {
      // Обработка ошибок (404 и т.д.)
      res.writeHead(404);
      res.end('404');
      return;
    }

    // Установка правильного Content-Type
    res.writeHead(200, {
      'Content-Type': mimeTypes[extname] || 'text/plain'
    });
    res.end(data);
  });
});

server.listen(3000, () => {
  console.log('Server running on port 3000');
});