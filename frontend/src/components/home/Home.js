import { Container } from "react-bootstrap";
import Hero from "./Hero";

function Home() {
    return (
        <div>
            <section className="hero d-flex">
                <Hero />
            </section>
        </div>
    )
}

export default Home;