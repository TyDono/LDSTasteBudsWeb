import { Link } from "react-router-dom";
import "./Legal.css";

export default function PrivacyPolicy() {
    return (
        <main className="legal-page">
            <section className="legal-card">
                <Link className="legal-back" to="/">← Back to Home</Link>

                <h1>Privacy Policy</h1>
                <p className="legal-date">Effective Date: August 25, 2025</p>

                <p>
                    LDS Taste Buds respects your privacy and is committed to protecting your personal
                    information. This Privacy Policy explains how we collect, use, share, and protect
                    your data when you use our website, mobile application, and related services.
                </p>

                <h2>1. Information We Collect</h2>
                <ul>
                    <li>Account and profile data, including name, email, age, location, preferences, and photos.</li>
                    <li>Usage data, including interactions with the Service, messages, events, device data, and IP address.</li>
                    <li>Third-party data if you link external accounts.</li>
                    <li>Approximate location data if enabled to support group event matching.</li>
                </ul>

                <h2>2. How We Use Your Information</h2>
                <p>
                    We use information to provide and improve the Service, match users for dinner
                    groups, communicate with users, provide support, improve safety, prevent fraud,
                    analyze usage, and comply with legal obligations.
                </p>

                <h2>3. Sharing Your Information</h2>
                <p>
                    Profile details may be visible to other users as part of the Service. We may also
                    share information with service providers for hosting, analytics, payment
                    processing, marketing, legal compliance, and business operations.
                </p>

                <h2>4. Data Security</h2>
                <p>
                    We use reasonable administrative, technical, and physical safeguards to protect
                    personal information. However, no system is completely secure, and we cannot
                    guarantee absolute security.
                </p>

                <h2>5. Your Rights and Choices</h2>
                <p>
                    You may request access, updates, or deletion of your data, subject to legal,
                    safety, payment, and fraud-prevention obligations. You may also opt out of
                    marketing communications.
                </p>

                <h2>6. Data Retention and Transfers</h2>
                <p>
                    We retain data as needed for the purposes described in this policy or as required
                    by law. Data may be stored or processed in the United States or other countries.
                </p>

                <h2>7. Third-Party Links</h2>
                <p>
                    The Service may contain links to third-party sites. We are not responsible for
                    their privacy practices.
                </p>

                <h2>8. Changes to This Policy</h2>
                <p>
                    We may update this Privacy Policy. Continued use of the Service after updates
                    constitutes acceptance.
                </p>

                <h2>9. Contact</h2>
                <p>
                    For privacy questions, contact <strong>LDSTasteBuds@gmail.com</strong>.
                </p>
            </section>
        </main>
    );
}