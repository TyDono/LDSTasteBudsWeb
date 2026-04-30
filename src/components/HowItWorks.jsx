import "./HowItWorks.css";

import reserveSeat from "../assets/reserve_seat.png";
import matchCrew from "../assets/match_crew.png";
import noMoreWeeks from "../assets/no_more_weeks.png";

const steps = [
    {
        title: "Reserve a Seat",
        description:
            "Choose your preferred dinner group, reserve your seat, and get ready for a meaningful social experience.",
        image: reserveSeat,
    },
    {
        title: "We Match You to Your Crew",
        description:
            "We thoughtfully group participants based on shared values, age range, and interests for better real-world connections.",
        image: matchCrew,
    },
    {
        title: "No More Weeks of No Matches",
        description:
            "Skip endless swiping. Book your dinner and meet new people in person through curated social dining experiences.",
        image: noMoreWeeks,
    },
];

const HowItWorks = () => {
    return (
        <section className="how-section" id="how-it-works">
            <h2>How LDS Taste Buds Works</h2>

            <p className="how-subtitle">
                Real connections. Shared meals. Lasting friendships.
            </p>

            <div className="steps">
                {steps.map((step, index) => (
                    <div className="step-card" key={index}>
                        <img src={step.image} alt={step.title} />
                        <h3>{step.title}</h3>
                        <p>{step.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default HowItWorks;