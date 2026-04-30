import "./CTA.css";

const CTA = () => {
    return (
        <section className="cta-section" id="join">
            <h2>Take a Break from the Fake.</h2>

            <p>
                We match you on shared values and fun facts — not filtered selfies.
            </p>

            <a
                href="https://apps.apple.com"
                target="_blank"
                rel="noopener noreferrer"
                className="primary-btn"
            >
                Ready to Join?
            </a>
        </section>
    );
};

export default CTA;