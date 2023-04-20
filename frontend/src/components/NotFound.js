import { Container } from 'react-bootstrap';

function NotFound() {

    return (
        <Container>
            <section className='heading'>
                <h1 className='title'>Whoops!</h1>
            </section>
            <section className='not-found-body'>
                <h4>You're not supposed to be here!
                    Go on, scram! Get out of here!
                </h4>
                <p>Go back <a href='/'>home!</a></p>
            </section>
        </Container>
    )
}

export default NotFound;