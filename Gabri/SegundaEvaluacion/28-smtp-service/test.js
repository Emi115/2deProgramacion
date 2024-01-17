 const nodemailer = require("nodemailer");

 async function main() {
 let transporter = nodemailer.createTransport({
 host: "127.0.0.1",
 port: 1025,
 secure: false,
 });

 let info = await transporter.sendMail({
 from: 'its@me.com',
 to: "nose@cual.es",
 subject: "Mensaje de prueba",
 text: "Este es el texto",
 html: "<h1 style='color: blue'>Este es el HTML</h1>",
 });

 console.log("Message sent: %s", info.messageId);
 }

 main().catch(console.error);
