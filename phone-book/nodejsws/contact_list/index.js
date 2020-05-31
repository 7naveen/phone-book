
const express = require('express');
const port = 8000;
const path = require('path');
const db = require('./config/mongoose');
const Contact = require('./models/contact');
const app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded());
app.use(express.static('assests'));
var contactList = [

    {
        name: "Rahul",
        phone: "9877390440"
    },
    {
        name: "Naveen",
        phone: "7009302313"
    },
    {
        name: "Muskaan",
        phone: "7009036179"
    }
]
app.get("/", function(req, res) {
    Contact.find({}, function(err, contacts) {
        if (err) {
            console.log("error in fetching the contact");
            return;
        }
        return res.render('home', {
            title: "Conatct List",
            contact_list: contacts
        });
    });
});
app.get("/delete-contact/:id", function(req, res) {
    let id = req.params.id;
    Contact.findByIdAndDelete(id, function(err) {
        if (err) {
            console.log("error in deleting a contact");
            return;
        }
        return res.redirect("back");
    });
});
app.post('/create-contact', function(req, res) {
    Contact.create(req.body, function(err, newContact) {
        if (err) {
            console.log('error in creating a contact');
            return;
        }
        console.log('******', newContact);
        return res.redirect("back");
    });
});
app.listen(port, function(err) {
    if (err) {
        console.log('Error is running in server');
        return;
    }
    console.log('yup!my express is running');
});