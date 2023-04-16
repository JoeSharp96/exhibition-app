import { Container } from "react-bootstrap";
import Hero from "./Hero";
import KeyThemes from "./KeyThemes";
import Slider from "./Slider";
import Testimonial from "./Testimonial";

function Home() {
    return (
        <div>
            <section className="hero d-flex">
                <Hero />
            </section>
            <section className="mb-5 pb-3">
                <KeyThemes />
            </section>
            <section className="py-5 mb-5">
                <Testimonial />
            </section>
            <section className="mb-5">
                <Slider />
            </section>
        </div>
    )
}

export default Home;