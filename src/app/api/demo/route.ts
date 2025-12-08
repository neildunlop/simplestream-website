import { NextResponse } from 'next/server';
import { z } from 'zod';

const demoSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  company: z.string().min(1, 'Company name is required'),
  phone: z.string().optional(),
  website: z.string().url().optional().or(z.literal('')),
  industry: z.string().min(1, 'Please select an industry'),
  currentSolution: z.string().optional(),
  monthlyRevenue: z.string().optional(),
  message: z.string().optional(),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const data = demoSchema.parse(body);

    // In production, you would:
    // 1. Send email notification to sales team
    // 2. Store the lead in a database / CRM
    // 3. Schedule calendar invite
    // 4. Send confirmation email to the user
    // 5. Add to marketing automation

    // Example with Resend (uncomment and configure in production):
    // const resend = new Resend(process.env.RESEND_API_KEY);
    //
    // await resend.emails.send({
    //   from: 'noreply@thesimplestream.com',
    //   to: 'sales@thesimplestream.com',
    //   subject: `New Demo Request from ${data.company}`,
    //   html: `
    //     <h2>New Demo Request</h2>
    //     <p><strong>Name:</strong> ${data.name}</p>
    //     <p><strong>Email:</strong> ${data.email}</p>
    //     <p><strong>Company:</strong> ${data.company}</p>
    //     <p><strong>Phone:</strong> ${data.phone || 'Not provided'}</p>
    //     <p><strong>Website:</strong> ${data.website || 'Not provided'}</p>
    //     <p><strong>Industry:</strong> ${data.industry}</p>
    //     <p><strong>Current Solution:</strong> ${data.currentSolution || 'Not provided'}</p>
    //     <p><strong>Monthly Revenue:</strong> ${data.monthlyRevenue || 'Not provided'}</p>
    //     <p><strong>Additional Notes:</strong></p>
    //     <p>${data.message || 'None'}</p>
    //   `,
    // });
    //
    // // Confirmation email to user
    // await resend.emails.send({
    //   from: 'hello@thesimplestream.com',
    //   to: data.email,
    //   subject: 'Thanks for requesting a The Simple Stream demo!',
    //   html: `
    //     <h2>Thanks for your interest in The Simple Stream!</h2>
    //     <p>Hi ${data.name},</p>
    //     <p>We've received your demo request and will be in touch within 24 hours to schedule a time that works for you.</p>
    //     <p>In the meantime, here are some resources to learn more:</p>
    //     <ul>
    //       <li><a href="https://thesimplestream.com/features">Explore Features</a></li>
    //       <li><a href="https://thesimplestream.com/how-it-works">How It Works</a></li>
    //       <li><a href="https://thesimplestream.com/pricing">View Pricing</a></li>
    //     </ul>
    //     <p>Looking forward to speaking with you!</p>
    //     <p>The The Simple Stream Team</p>
    //   `,
    // });

    console.log('Demo request submission:', data);

    return NextResponse.json({
      success: true,
      message: 'Thank you for your interest! We will contact you within 24 hours to schedule your demo.',
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Validation failed', details: error.issues },
        { status: 400 }
      );
    }

    console.error('Demo request error:', error);
    return NextResponse.json(
      { error: 'Failed to submit request. Please try again.' },
      { status: 500 }
    );
  }
}
