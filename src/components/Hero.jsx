import "./Hero.css";
import heroImage from "../assets/share_tastebuds.png";

const Hero = () => {
    return (
        <section className="hero-section">
            <div className="hero-content">
                <p className="hero-eyebrow">LDS Taste Buds Dinner Groups</p>

                <h1>It’s not dating; it’s connecting.</h1>

                <p className="hero-subtitle">
                    Join curated dinner groups designed for real conversations, shared
                    values, and new friendships.
                </p>

                <div className="hero-actions">
                    <a href="#join" className="primary-btn">Reserve a Seat</a>
                    <a href="#how-it-works" className="secondary-btn">How It Works</a>
                </div>
            </div>

            <div className="hero-image-card">
                <img src={heroImage} alt="LDS Taste Buds shared values message" />
            </div>
        </section>
    );
};

export default Hero;