const { Resend } = require('resend')
const resend = new Resend(process.env.RESEND_API_KEY)

const sendContactEmail = async (email, subject, name, text) => {
  try {
    await resend.emails.send({
      from: `${invoice.business.name}<noreply@${process.env.MAIL_DOMAIN}>`,
      to: customerEmail,
      subject: `Invoice ${invoiceNumber}`,
      html: html,
    })
  } catch (err) {
    console.error('❌ Failed to send partner notification email:', err)
  }
}
