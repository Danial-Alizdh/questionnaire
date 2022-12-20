const express = require('express');
const bodyParser = require('body-parser');
const pg = require('pg');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 8080;

function queryDatabase(tableName, question1 , question2, question3, question4, question5, res) {
    var client = new pg.Client('postgres://***');

    client.connect(err => {
        if (err) {
            throw err;
            return;
        }
    });
    const query = `INSERT INTO ` + tableName + ` (question1 , question2, question3, question4, question5) VALUES (` + (question1 === undefined ? 0 : question1) + `, ` + (question2 === undefined ? 0 : question2) + `, ` + (question3 === undefined ? 0 : question3) + `, ` + (question4 === undefined ? 0 : question4) + `, ` + (question5 === undefined ? 0 : question5) + `);`;

    client.query(query)
        .then(() => {
            console.log('Data inserted successfully!');
            client.end(console.log('Closed client connection'));
        })
        .catch(err => {
            console.log(err);
            res.status(400).send({data: 'Error'});
        })
        .then(() => {
            console.log('Finished execution, exiting now');
            res.status(200).send({data: 'Ok'});
        });
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({
    origin: '*',
    methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']
}));

app.listen(PORT, () => {
    console.log('Server Started');
});

app.post("/insertGolestan", cors(), (req, res) => {
    let GA1 = req.body.Gq1;
    let GA2 = req.body.Gq2;
    let GA3 = req.body.Gq3;
    let GA4 = req.body.Gq4;
    let GA5 = req.body.Gq5;
    queryDatabase('golestan', GA1, GA2, GA3, GA4, GA5, res);
});

app.post("/insertViana", cors(), (req, res) => {
    let VA1 = req.body.Vq1;
    let VA2 = req.body.Vq2;
    let VA3 = req.body.Vq3;
    let VA4 = req.body.Vq4;
    let VA5 = req.body.Vq5;
    queryDatabase('viana', VA1, VA2, VA3, VA4, VA5, res);
});
