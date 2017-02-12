var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

    

var articles = {

    'article-one': {
        tit: 'Article One by Anson',
        heading: 'Article One',
        date: 'Feb 8, 2017',
        content:  `
            <p>
                Getting Started is the first step
            </p>
            <p>
                Once you do that you are on your way to acheiving your goal!!!
            </p>
                
            <p>
                Make sure you have all the tools to help you in your journey!
            </p>`},
        
    'article-two': {
        tit: 'Article Two by Anson',
        heading: 'Article Two',
        date: 'Feb 9, 2017',
        content:  `
            <p>
                Getting Started is the second step
            </p>
            <p>
                Once you do that you are on your way to acheiving your goal!!!
            </p>
                
            <p>
                Make sure you have all the tools to help you in your journey!
            </p>`},
            
    'article-three': {
        tit: 'Article Three by Anson',
        heading: 'Article Three',
        date: 'Feb 10, 2017',
    content:  `
            <p>
                Getting Started is the third step
            </p>
            <p>
                Once you do that you are on your way to acheiving your goal!!!
            </p>
                
            <p>
                Make sure you have all the tools to help you in your journey!
            </p>`},
    
};  

function createTemplate (data) {
    var tit = data.tit;
    var date = data.date;
    var heading = data.heading;
    var content = data.content;


var htmlTemplate = `
<html>
    <head>
        <title>
                ${tit}
        </title>
        <link href="/ui/style.css" rel="stylesheet" />
    </head>
    
    <body>
        <div class="container">
            <div>
                <a href="/">Home</a>
            </div>
            <hr/>
            <h3>
                ${heading}
            </h3>
            <div>
                ${date}
            </div>
            <div>
                ${content}
            </div>
        </div>
    </body>
</html> 
`;
return htmlTemplate;
}

var counter = 0;
app.get('/counter', function(req, res) {
    counter = counter + 1;
    res.send(counter.toString());
    
});
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName', function(req, res) {
    var articleName = req.param.articleName;
    res.send(createTemplate(articleName));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
  
  app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
