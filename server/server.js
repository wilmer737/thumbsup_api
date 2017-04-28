const express = require('express');
const bodyParser = require('body-parser');

const {mongoose} = require('./db/mongoose');
const {Submission} = require('./models/submission');

const app = express();
const port = process.env.PORT || 3000;

app.use(function (req, res, next) {
    if (req.headers['x-forwarded-proto'] === 'https') {
        res.redirect('http://' + req.hostname + req.url);
    } else {
        next();
    }
});

app.use(bodyParser.json());

app.post('/submission', (req, res) => {
    const submission = new Submission({
        comment: req.body.comment,
        about: req.body.about
    });

    submission.save().then((doc) => {
        res.send(doc);
    }, (err) => {
        res.status(400).send(err);
    });
});


app.use(express.static('app'));

app.listen(port, () => {
   console.log(`Server Running On ${port}`);
});
