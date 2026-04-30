import { Link } from "react-router-dom";
import "./Legal.css";

export default function Terms() {
    return (
        <main className="legal-page">
            <section className="legal-card">
                <Link className="legal-back" to="/">← Back to Home</Link>

                <h1>Terms and Conditions</h1>
                <p className="legal-date">Effective Date: August 25, 2025</p>

                <p>
                    These Terms and Conditions govern your access to and use of the LDS Taste Buds
                    website, mobile application, and related services. By accessing or using the
                    Service, you agree to be bound by these Terms. If you do not agree, you must not
                    use the Service.
                </p>

                <h2>1. Eligibility and Account Registration</h2>
                <p>
                    You must be at least 18 years old to use the Service. You agree to provide
                    accurate, current, and complete information during registration and to maintain
                    its accuracy. You are responsible for all activity under your account.
                </p>

                <h2>2. User Conduct</h2>
                <p>
                    You agree to use the Service only for lawful purposes and in accordance with our
                    community guidelines. You agree to abide by LDS-aligned standards of conduct at
                    LDS Taste Buds meetings or groups.
                </p>
                <ul>
                    <li>No alcohol consumption at LDS Taste Buds dinners.</li>
                    <li>No smoking, vaping, illegal drugs, or conduct contrary to the Word of Wisdom.</li>
                    <li>No harassment, threats, stalking, abuse, deception, or illegal activity.</li>
                    <li>No commercial solicitation without written consent.</li>
                </ul>

                <h2>3. User Interactions and Assumption of Risk</h2>
                <p>
                    You are solely responsible for your interactions with other users, whether online
                    or offline, including dinner groups and in-person meetings. LDS Taste Buds does
                    not conduct background checks, criminal screenings, or identity verification.
                </p>
                <p>
                    You understand that other users may provide inaccurate information or act with
                    harmful intent. All interactions are at your own risk.
                </p>

                <h2>4. Disclaimers</h2>
                <p>
                    The Service is provided “as is” and “as available” without warranties of any
                    kind. LDS Taste Buds does not guarantee that the Service will be uninterrupted,
                    secure, error-free, or free from harmful conduct by users.
                </p>

                <h2>5. Limitation of Liability</h2>
                <p>
                    To the fullest extent permitted by law, LDS Taste Buds and its affiliates,
                    officers, directors, employees, and agents are not liable for damages, injuries,
                    emotional distress, property damage, business losses, or harm arising from your
                    use of the Service or your interactions with other users.
                </p>

                <h2>6. Indemnification</h2>
                <p>
                    You agree to indemnify, defend, and hold LDS Taste Buds harmless from claims,
                    damages, losses, liabilities, costs, and expenses arising from your use of the
                    Service, your interactions with users, or your violation of these Terms.
                </p>

                <h2>7. Termination</h2>
                <p>
                    We may suspend or terminate your account at any time for any reason, without
                    notice or liability. Upon termination, your right to use the Service ends
                    immediately.
                </p>

                <h2>8. Governing Law and Dispute Resolution</h2>
                <p>
                    These Terms are governed by the laws of the State of Utah. Any disputes shall be
                    resolved through binding arbitration in Pleasant Grove, Utah, except for small
                    claims court matters.
                </p>

                <h2>9. Changes to Terms</h2>
                <p>
                    We may update these Terms at any time. Continued use of the Service after changes
                    constitutes acceptance.
                </p>

                <h2>10. Contact</h2>
                <p>
                    For questions, contact us at <strong>LDSTasteBuds@gmail.com</strong>.
                </p>
            </section>
        </main>
    );
}