const http = require('http');
const qs = require('querystring');

http.createServer((req, res) => {
           let body = '';
           let hasBody = false;
           if(req.method == 'POST' || req.method == 'PUT') {
           hasBody = true;
           req.on('data', (data) =>{
               body += data.toString('utf8');
               });
                                        } else {
                                                req.on('data', (data) => {});
                                                    }

                                                        req.on('end', () => {
                                                                    if (hasBody) {
                                                                                if (req.headers['content-type'] === 'application/x-www-form-urlencoded') {
                                                                                          
                                                                                                console.log(qs.parse(body));
                                                                                                            }
                                                                                                                        res.end(body);
                                                                                                                                } else {
                                                                                                                                            res.end('ok');
                                                                                                                                                   }
                                                                                                                                                        });})
.listen(8002, 'localhost');
