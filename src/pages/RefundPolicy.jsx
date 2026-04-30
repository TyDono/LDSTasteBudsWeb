import { Link } from "react-router-dom";
import "./Legal.css";

export default function RefundPolicy() {
    return (
        <main className="legal-page">
            <section className="legal-card">
                <Link className="legal-back" to="/">← Back to Home</Link>

                <h1>Refund and Cancellation Policy</h1>
                <p className="legal-date">Effective Date: August 25, 2025</p>

                <h2>1. Event Booking Refunds</h2>
                <p>
                    You may cancel a dinner group booking up to 24 hours before the event for a full
                    refund of the booking fee, minus transaction costs. Cancellations within 24 hours
                    are non-refundable.
                </p>

                <h2>2. Cancellations by LDS Taste Buds</h2>
                <p>
                    If we cancel an event due to low attendance, venue issues, or other operational
                    reasons, you may receive a refund or credit for a future event at our discretion.
                </p>

                <h2>3. No-Shows</h2>
                <p>
                    No refunds are issued for failure to attend an event.
                </p>

                <h2>4. Subscriptions</h2>
                <p>
                    Monthly subscriptions may be canceled at any time through account settings.
                    Refunds are not issued for the current billing cycle, and prorated refunds are not
                    provided for partial months.
                </p>

                <h2>5. Refund Requests</h2>
                <p>
                    Submit refund requests to <strong>LDSTasteBuds@gmail.com</strong>. Approved
                    refunds are generally processed within 7–10 business days.
                </p>

                <h2>6. External Issues</h2>
                <p>
                    LDS Taste Buds is not responsible for refunds or losses caused by venue-related
                    issues, restaurant closures, attendee actions, meal costs, or third-party conduct.
                    Participants are responsible for paying for their own meals.
                </p>
            </section>
        </main>
    );
}