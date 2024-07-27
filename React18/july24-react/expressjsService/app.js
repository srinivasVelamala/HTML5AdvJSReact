var express = require('express');
var app = express();
app.get('/sample1', function (req, res) {
  res.send('Welcome to expressjs world.');
});
app.get('/getPersons', function (req, res) {
    const person ={name:'Venkat' , age:12}
    const categories = ["Groceries", "Utilities", "Entertainment"]
    res.send(categories);
  });
  app.get('/getBugs', function (req, res) {
    const bugs = [
        {id:1, title:"Bug1", fixed:false},
        {id:2, title:"Bug2", fixed:false}
    ];
    res.send(bugs);
  });
  app.get('/getUsers', function (req, res) {
    const users = [
        {
            "id": 1,
            "name": "Leanne Graham",
            "username": "Bret",
            "email": "Sincere@april.biz",
            "phone": "1-770-736-8031 x56442",
            "website": "hildegard.org",
            "company": {
              "name": "Romaguera-Crona",
              "catchPhrase": "Multi-layered client-server neural-net",
              "bs": "harness real-time e-markets"
            }
          },
          {
            "id": 2,
            "name": "Ervin Howell",
            "username": "Antonette",
            "email": "Shanna@melissa.tv",
            "phone": "010-692-6593 x09125",
            "website": "anastasia.net",
            "company": {
              "name": "Deckow-Crist",
              "catchPhrase": "Proactive didactic contingency",
              "bs": "synergize scalable supply-chains"
            }
          }
    ];
    res.header("Access-Control-Allow-Origin", "*");
    console.log('getUsers called.....');
    res.send(users);
  });

 
app.listen(3001, function () {
  console.log('Example app listening on port 3001!');
});

