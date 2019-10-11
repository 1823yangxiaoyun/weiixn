#!/usr/bin/node

const http = require("http");

var routeTable = {
    '/' : (req, res) => {
        res.end('Hey, This is home page');
    },

    '/help' : (req, res) => {
        res.end('there is no help');
    }
};

http.createServer((req, res) => {
      console.log(req.url);

      let path_split = req.url.split('?');
      let path = path_split[0];

      if (routeTable[path] === undefined) {
        res.statusCode = 404;
        res.end('page not found');
        return ;
    }
    routeTable[path](req, res);
    }).listen(8002)

