import { Container } from "react-bootstrap";
import Hero from "./Hero";
import KeyThemes from "./KeyThemes";

function Home() {
    return (
        <div>
            <section className="hero d-flex">
                <Hero />
            </section>
            <section>
                <KeyThemes />
            </section>
        </div>
    )
}

export default Home;