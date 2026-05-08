import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const body = await request.json();
    const { email } = body;

    if (!email) {
      return Response.json(
        { error: "Email is required." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return Response.json(
        { error: "Please enter a valid email." },
        { status: 400 }
      );
    }

    // Notify you of new subscriber
    await resend.emails.send({
      from: "YPark <onboarding@resend.dev>",
      to: process.env.CONTACT_EMAIL,
      subject: `New subscriber — ${email}`,
      html: `
        <div style="font-family: sans-serif; max-width: 480px; margin: 0 auto; padding: 2rem; background: #0D1B2A; border-radius: 12px;">
          <div style="background: #1565C0; padding: 1.25rem 1.5rem; border-radius: 8px 8px 0 0; margin: -2rem -2rem 1.5rem;">
            <div style="font-size: 1rem; font-weight: 800; color: white;">YPark</div>
            <div style="font-size: 0.75rem; color: rgba(255,255,255,0.7);">New Newsletter Subscriber</div>
          </div>
          <p style="font-size: 0.875rem; color: #8BA8C8;">
            <strong style="color: #E8F4FD;">${email}</strong> just subscribed on ypark.in
          </p>
          <div style="margin-top: 1rem; font-size: 0.75rem; color: #506A84; border-top: 1px solid #1A3048; padding-top: 1rem;">
            Add to your mailing list for future updates.
          </div>
        </div>
      `,
    });

    // Welcome email to subscriber
    await resend.emails.send({
      from: "YPark <onboarding@resend.dev>",
      to: email,
      subject: "You're subscribed — YPark updates",
      html: `
        <div style="font-family: sans-serif; max-width: 480px; margin: 0 auto; padding: 2rem; background: #f4f9ff; border-radius: 12px;">
          <div style="background: #1565C0; padding: 1.25rem 1.5rem; border-radius: 8px 8px 0 0; margin: -2rem -2rem 1.5rem;">
            <div style="font-size: 1rem; font-weight: 800; color: white;">YPark</div>
            <div style="font-size: 0.75rem; color: rgba(255,255,255,0.7);">India's Organized Parking Marketplace</div>
          </div>
          <p style="font-size: 0.95rem; color: #2C3E50; line-height: 1.7; margin-bottom: 1rem;">
            You are now subscribed to YPark updates.
          </p>
          <p style="font-size: 0.875rem; color: #506A84; line-height: 1.7; margin-bottom: 1.5rem;">
            We will notify you when new cities go live, new features launch
            and when the YPark driver app is ready.
            No spam. Ever.
          </p>
          <div style="border-top: 1px solid #E2EBF6; padding-top: 1.25rem; margin-top: 1.25rem;">
            <a
              href="https://ypark.in/partners"
              style="display: inline-block; background: #1565C0; color: white; font-size: 0.85rem; font-weight: 700; padding: 0.75rem 1.5rem; border-radius: 8px; text-decoration: none;"
            >
              List Your Parking Area →
            </a>
          </div>
          <div style="margin-top: 1.5rem; font-size: 0.72rem; color: #8BA8C8; text-align: center;">
            YPark · A product of Prothom Analytica India Pvt. Ltd.
            <br />
            To unsubscribe reply with "unsubscribe".
          </div>
        </div>
      `,
    });

    return Response.json(
      { success: true, message: "Subscribed successfully." },
      { status: 200 }
    );

  } catch (error) {
    console.error("Subscribe error:", error);
    return Response.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}