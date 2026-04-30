import { Link } from "react-router-dom";
import "./Legal.css";

export default function NoAffiliation() {
    return (
        <main className="legal-page">
            <section className="legal-card">
                <Link className="legal-back" to="/">← Back to Home</Link>

                <h1>No Affiliation with The Church of Jesus Christ of Latter-day Saints</h1>

                <p>
                    LDS Taste Buds is not affiliated with, endorsed by, sponsored by, or officially
                    connected to The Church of Jesus Christ of Latter-day Saints or any of its
                    affiliates or subsidiaries.
                </p>

                <p>
                    The use of “LDS” in our name refers to the cultural or community context of
                    individuals who share values or interests common among members of The Church of
                    Jesus Christ of Latter-day Saints, but it does not imply any official relationship,
                    approval, sponsorship, or endorsement.
                </p>

                <p>
                    All activities, events, dinner groups, and services provided by LDS Taste Buds are
                    independently operated and are not sanctioned or supported by The Church of Jesus
                    Christ of Latter-day Saints.
                </p>
            </section>
        </main>
    );
}