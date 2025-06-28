import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
    try {
        const body = await req.json();
        const { firstname, lastname, email, phone, service, message } = body;

        if (!firstname || !email || !message) {
            return new Response(JSON.stringify({ message: 'Missing required fields.' }), { status: 400 });
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            return new Response(JSON.stringify({ message: 'Invalid email format.' }), { status: 400 });
        }

        const data = await resend.emails.send({
            from: 'Contact Form <noreply@loumie-portfolio.vercel.app>',
            to: 'iamloumie234@gmail.com',
            subject: 'New Contact Form Submission from your website portfolio',
            html: `
                <h1>New Contact Form Submission</h1>
                <p><strong>First Name:</strong> ${firstname}</p>
                <p><strong>Last Name:</strong> ${lastname || 'Not provided'}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
                <p><strong>Service:</strong> ${service || 'Not specified'}</p>
                <p><strong>Message:</strong> ${message}</p>
            `,
            reply_to: email,
        });

        return new Response(JSON.stringify({ 
            message: 'Form submitted successfully!',
            id: data.id 
        }), { status: 200 });

    } catch (error) {
        console.error("Error in send-form API:", error);
        return new Response(JSON.stringify({ message: 'An error occurred on the server.' }), { status: 500 });
    }
}