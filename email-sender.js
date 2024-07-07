import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "lukagambo622@gmail.com",
    pass: "",
  },
});

var mailOptions = {
  from: "lukagambo622@gmail.com",
  to: "omomarian15@gmail,com",
  subject: "Sending Email test",
  text: "That is how it is!",
};

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent: " + info.response);
  }
});
