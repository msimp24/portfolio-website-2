const { Resend } = require('resend')
const resend = new Resend(process.env.RESEND_API_KEY)

const sendContactEmail = async (
  userEmail,
  subject,
  firstName,
  lastName,
  message
) => {
  try {
    await resend.emails.send({
      from: `${firstName} ${lastName}<noreply@${process.env.MAIL_DOMAIN}>`,
      to: 'mark.simpson4@gmail.com',
      subject: `Email from ${userEmail} - Subject ${subject}`,
      html: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Portfolio Contact Email</title>
  </head>

  <body style="margin:0; padding:0; font-family: Arial, Helvetica, sans-serif; background:#f5f6f7;">
    <table width="100%" cellpadding="0" cellspacing="0" style="background:#f5f6f7; padding:20px 0;">
      <tr>
        <td align="center">

          <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff; border-radius:6px; padding:20px; border:1px solid #e1e4e8;">
            
            <tr>
              <td style="padding-bottom:15px;">
                <h1 style="margin:0; font-size:20px; color:#111;">
                  Email from ${firstName} ${lastName}
                </h1>
                <p style="margin:6px 0 0 0; font-size:14px; color:#555;">
                  Sender Email: <a href="mailto:${userEmail}" style="color:#0066cc; text-decoration:none;">${userEmail}</a>
                </p>
              </td>
            </tr>

            <tr>
              <td style="padding:15px 0; border-top:1px solid #e5e5e5;">
                <h2 style="margin:0; font-size:18px; color:#222;">
                  ${subject}
                </h2>
              </td>
            </tr>

            <tr>
              <td style="padding-top:10px;">
                <p style="font-size:15px; color:#333; line-height:1.5; white-space:pre-wrap; margin:0;">
                  ${message}
                </p>
              </td>
            </tr>

          </table>

        </td>
      </tr>
    </table>
  </body>
</html>`,
    })
  } catch (err) {
    console.error('❌ Failed to send partner notification email:', err)
  }
}

module.exports = { sendContactEmail }
