import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

export const config = {
  api: {
    bodyParser: {
      sizeLimit: "15mb",
    },
  },
};

async function sendEmail(req, res) {
  try {
    await sendgrid.send({
      to: process.env.TO_EMAIL,
      from: process.env.FROM_EMAIL,
      subject: req.body.subject,
      text: req.body.message,
      attachments: req.body.attachment,
      html: `
        <strong>Contact info:</strong> <p>${req.body.fullname} - ${req.body.phone} - ${req.body.email}</p>
        
      <strong>Budget:</strong> <p>${req.body.budget}</p>
      
      <strong>Message:</strong> <p>${req.body.message}</p>
      <strong>Extra:</strong> <p>${req.body.extra}</p>
      `,
    });
  } catch (error) {
    console.error(error);
    if (error.response) {
      console.error(error.response.body);
    }
    return res.status(error.statusCode || 500).json({ error: error.message });
  }

  return res.status(200).json({ error: "" });
}

export default sendEmail;
