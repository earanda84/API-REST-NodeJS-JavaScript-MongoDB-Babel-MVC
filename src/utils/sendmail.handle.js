import transporter from "../config/mailer.config";

// HTML CONTENT
const html = (name, lastname, token) => {
    return `
    <div>
        <h1>${name.toUpperCase()} ${lastname.toUpperCase()} - Te haz registrado exitosamente.</h1>
        <br/>
        <div>
            <p>Gracias por registrarte en nuestra aplicación. Por favor, haz clic en el siguiente enlace para validar tu registro: <a href="${process.env.VALIDATION_LINK}/validations/${token}">Validar registro</a> </p>
        </div>
    </div>
`;
};


const sendMailer = async (email, name, lastname, token) => {

    const htmlContent = html(name, lastname, token);

    try {
        console.log(email)
        const info = await transporter.sendMail({
            from: `"Botillería el Chispa" <${transporter.auth}>`,
            to: email,
            subject: `Hola ${name} ${lastname}! Debes validar tú registro en Botillería El Chispa.`,
            html: htmlContent,
        });

        console.log(info)
        if (info.rejected.length > 1) {
            console.log(`Error to send email to: ${email}.`)
            return {
                error_sent_mail: info.rejected,
            }
        } else {
            console.log(`Email sent succesfully to: ${email}. `)
            return {
                status: "ok",
                mail_to_accepted: info.accepted,
                mail_sent_id: info.messageId.split("<")[1].split("@").shift()
            };
        }
    } catch (error) {
        console.log(error)
        return error;
    }
};


export {
    sendMailer
}