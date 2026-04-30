import { Link } from "react-router-dom";
import "./Legal.css";

export default function CommunityGuidelines() {
    return (
        <main className="legal-page">
            <section className="legal-card">
                <Link className="legal-back" to="/">← Back to Home</Link>

                <h1>Community Guidelines</h1>
                <p className="legal-date">Effective Date: August 25, 2025</p>

                <p>
                    LDS Taste Buds connects individuals for dinner groups and social events in a
                    welcoming, respectful community. By using the Service, you agree to follow these
                    guidelines.
                </p>

                <h2>1. Our Mission and Values</h2>
                <p>
                    LDS Taste Buds aims to foster meaningful connections through shared meals and
                    social experiences rooted in respect, kindness, and community.
                </p>

                <h2>2. Be Respectful and Kind</h2>
                <ul>
                    <li>Treat users with respect.</li>
                    <li>Use positive, constructive communication.</li>
                    <li>No harassment, bullying, discrimination, threats, or demeaning behavior.</li>
                </ul>

                <h2>3. Prioritize Safety</h2>
                <p>
                    You are responsible for your interactions with other users online and at events.
                    Do not engage in harassment, intimidation, stalking, physical or verbal assault,
                    sexual misconduct, fraud, scams, violence, or illegal activity.
                </p>

                <h2>4. Be Authentic</h2>
                <p>
                    Provide truthful information. Do not impersonate others, create fake accounts, or
                    misrepresent your identity, intentions, or affiliations.
                </p>

                <h2>5. Respect Privacy</h2>
                <p>
                    Do not share another user’s personal information, photos, messages, or contact
                    details without explicit consent.
                </p>

                <h2>6. Use the Service Appropriately</h2>
                <p>
                    The Service is for personal, non-commercial social connection. Do not use it for
                    spam, trolling, explicit content, hate speech, or commercial solicitation without
                    written consent.
                </p>

                <h2>7. Reporting Violations</h2>
                <p>
                    Report violations at <strong>LDSTasteBuds@gmail.com</strong>. We may remove
                    content, issue warnings, suspend accounts, terminate accounts, or report illegal
                    activity to law enforcement.
                </p>

                <h2>8. Updates</h2>
                <p>
                    We may update these guidelines at any time. Continued use of the Service
                    constitutes acceptance.
                </p>
            </section>
        </main>
    );
}