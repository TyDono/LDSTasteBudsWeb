import "./Testimonials.css";

const testimonials = [
    {
        title: "Less Pressure, More Fun!",
        body:
            "This experience was much less pressure than online dating. I had a blast meeting new people and enjoying great food!",
        name: "Emily Davis",
    },
    {
        title: "A Great Way to Connect!",
        body:
            "I was a bit shy at first, but the atmosphere was so welcoming. I made new friends and had a wonderful time!",
        name: "Sarah Johnson",
    },
    {
        title: "A Life-Changing Experience!",
        body:
            "Joining this dinner group was one of the best decisions I’ve made. I met my best friend here, and we still hang out regularly!",
        name: "Sam Lee",
    },
    {
        title: "Food and Fun Combined!",
        body:
            "I had a fantastic time at the dinner! The food was delicious, and I loved the laughs we shared. It felt so natural and enjoyable!",
        name: "Jordan Smith",
    },
];

const Testimonials = () => {
    return (
        <section className="testimonials-section">
            <h2>What Our Participants Say</h2>

            <div className="testimonial-grid">
                {testimonials.map((testimonial, index) => (
                    <div className="testimonial-card" key={index}>
                        <h3>{testimonial.title}</h3>
                        <p>{testimonial.body}</p>
                        <div className="stars">★★★★★</div>
                        <strong>{testimonial.name}</strong>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Testimonials;