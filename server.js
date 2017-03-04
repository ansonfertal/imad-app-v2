var express = require('express');
var morgan = require('morgan');
var path = require('path');
var Pool = require('pg').Pool;

var config = {
    user: 'ansonfertal',
    database: 'ansonfertal',
    host: 'db.imad.hasura-app.io',
    port: '5432',
    password: process.env.DB_PASSWORD
};

var app = express();
app.use(morgan('combined'));

var articles = {
    'article-one': {
        title: 'Article One by Anson',
        heading: 'Article One',
        date: 'Feb 5, 2017',
        content:  `<p>
                        First Paragraph 
                    </p>
                    <p>
                        Second Paragraph
                    </p>
                    
                    <p>
                        Third Paragraph
                    </p>`
    },
    'article-two': {
        title: 'Article Two by Anson',
        heading: 'Article Two',
        date: 'Feb 6, 2017',
        content:  `<p>
                        First Paragraph 
                    </p>
                    <p>
                        Second Paragraph
                    </p>
                    
                    <p>
                        Third Paragraph
                    </p>`
    },
    'article-three': {
        title: 'Article Three by Anson',
        heading: 'Article Three',
        date: 'Feb 7, 2017',
        content:  `<p>
                        First Paragraph 
                    </p>
                    <p>
                        Second Paragraph
                    </p>
                    
                    <p>
                        Third Paragraph
                    </p>`
    }
};

function createTemplate(data) {
    
    var title = data.title;
    var date = data.date;
    var heading = data.heading;
    var content = data.content;
    
    var htmlTemplate = `
    <html>
        <head>
            <title>
                ${title}
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

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/test-db', function(req, res) {
    //make a select request
    //return the response with the results
    
    var pool = new Pool(config);
pool.query('SELECT * FROM test', function(err, result) {
    if(err) {
        res.status(500).send(err.toString());
    } else {
        res.send(JSON.stringify(result));
    }
});
    
});

app.get('/:articleName', function (req, res) {
    var articleName = req.params.articleName;
  res.send(createTemplate(articles[articleName]));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
  
app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
