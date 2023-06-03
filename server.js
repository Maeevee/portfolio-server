require('dotenv').config();
const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");
const path = require("path");


// server used to send send emails
const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.use(express.static(path.join(__dirname, 'build')));
app.listen(process.env.PORT || 5000, () => console.log("Server Running"));

const contactEmail = nodemailer.createTransport({
service: 'gmail',
auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
},
});

contactEmail.verify((error) => {
if (error) {
    console.log(error);
} else {
    console.log("Ready to Send");
}
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


router.post("/contact", (req, res) => {
const name = req.body.firstName;
const email = req.body.email;
const message = req.body.message;
const phone = req.body.phone;
const mail = {
    from: email,
    to: process.env.EMAIL_USER,
    subject: "Contact Form Submission - Portfolio",
    html: `<p>Name: ${name}</p>
        <p>Email: ${email}</p>
        <p>Phone: ${phone}</p>
        <p>Message: ${message}</p>`,
};
contactEmail.sendMail(mail, (error) => {
    if (error) {
    res.json(error);
    } else {
    res.json({ code: 200, status: "Message Sent" });
    }
});
});
