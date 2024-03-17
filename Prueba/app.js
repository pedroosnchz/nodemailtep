const nodemailer = require("nodemailer");

const config = {
  host: "smtp.gmail.com",
  port: 587,
  auth: {
    user: "peter4allin@gmail.com",
    pass: "mnic relg kmsb ppxi",
  },
};

const mensaje = {
  from: "peter4allin@gmail.com",
  to: "peter4allin@gmail.com",
  subject: "Primer correo",
  text: "Va Pedro que lo sacas",
};
enviarMail = async () => {
  const transport = nodemailer.createTransport(config);

  const info = await transport.sendMail(mensaje);

  console.log(info);
};

// document.getElementById('send-mail').addEventListener('click', function(){
//     var receptor = document.getElementById('user-mail').value;

// });

enviarMail();
