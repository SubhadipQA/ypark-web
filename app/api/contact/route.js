import { connectDB } from "@/lib/mongodb";
import Contact from "@/lib/models/Contact";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^[0-9]{10}$/;

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, phone, subject = "", message } = body;

    // Validate required fields
    if (!name?.trim() || !email?.trim() || !phone?.trim() || !message?.trim()) {
      return Response.json(
        { error: "Name, email, phone, and message are required." },
        { status: 400 }
      );
    }

    if (!emailRegex.test(email)) {
      return Response.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    if (!phoneRegex.test(phone.trim())) {
      return Response.json(
        { error: "Please enter a valid 10-digit phone number." },
        { status: 400 }
      );
    }

    await connectDB();

    await Contact.create({
      name:    name.trim(),
      email:   email.trim().toLowerCase(),
      phone:   phone.trim(),
      subject: subject.trim(),
      message: message.trim(),
    });

    return Response.json(
      { success: true, message: "Message received. We'll be in touch soon." },
      { status: 201 }
    );
  } catch (err) {
    console.error("[contact/route] error:", err);
    return Response.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
