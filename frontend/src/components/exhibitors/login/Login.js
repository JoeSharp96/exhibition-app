import { Row, Button, Form, Container } from "react-bootstrap";
import { useState } from "react";

function Login() {
    // Form content
    const [username, setUsername] = useState('');
    const updateUsername = (event) => setUsername(event.target.value);
    const [password, setPassword] = useState('');
    const updatePassword = (event) => setPassword(event.target.value);
    const [confPassword, setConfPassword] = useState('');
    const updateConfPassword = (event) => setConfPassword(event.target.value);

    const resetForm = () => {
        setUsername('');
        setPassword('');
        setConfPassword('');
    }

    // Content displayed in login module
    const [loginContent, setContent] = useState("login");
    const moduleDisplay = (value) => {
        setContent(value);
        setMessage("")
        resetForm();
    };

    const [errorMessage, setMessage] = useState("");

    // Create a new account
    const createAccount = async (event) => {
        event.preventDefault();
        const exhibitorDetails = {
            username: username,
            password: password,
            confirmPassword: confPassword
        };

        const response = await fetch('/create-account', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(exhibitorDetails)
        });
        const data = await response.json();

        if (response.status === 201) {
            moduleDisplay('success');
        } else {
            setMessage(data.message);
        };
    };

    // Login
    const login = async (event) => {
        event.preventDefault();
        const exhibitorDetails = {
            username: username,
            password: password
        };

        const response = await fetch('/login', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(exhibitorDetails)
        });

        const data = await response.json();

        if (response.status === 200) {
            const loggedIn = {
                value: true
            }
            localStorage.setItem("isLoggedIn", JSON.stringify(loggedIn));
            window.location.replace("/booth")
        } else {
            setMessage(data.message);
        };
    };

    const loadContent = () => {
        if (loginContent === "login") {
            return (
                <Form>
                    <Form.Group className='mb-3' controlId='username'>
                        <Form.Label>Username</Form.Label>
                        <Form.Control type='email' placeholder='example@gmail.com' value={username} onChange={updateUsername}></Form.Control>
                    </Form.Group>
                    <Form.Group className='mb-3' controlId='password'>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type='password' value={password} onChange={updatePassword}></Form.Control>
                    </Form.Group>
                    <p>{errorMessage}</p>
                    <Row>
                        <Button variant='primary' onClick={login}>Login</Button>
                        <Button variant='secondary' value="create" onClick={(e) => moduleDisplay(e.target.value)}>Sign up</Button>
                    </Row>
                </Form>
            );
        } else if (loginContent === "create") {
            return (
                <Form>
                    <Form.Group className='mb-3' controlId='username'>
                        <Form.Label>Username</Form.Label>
                        <Form.Control type='email' placeholder='example@gmail.com' value={username} onChange={updateUsername}></Form.Control>
                    </Form.Group>
                    <Form.Group className='mb-3' controlId='password'>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type='password' value={password} onChange={updatePassword}></Form.Control>
                    </Form.Group>
                    <Form.Group className='mb-3' controlId='password'>
                        <Form.Label>Confirm password</Form.Label>
                        <Form.Control type='password' value={confPassword} onChange={updateConfPassword}></Form.Control>
                    </Form.Group>
                    <p>{errorMessage}</p>
                    <Row>
                        <Button variant="primary" onClick={createAccount}>Create account</Button>
                        <Button variant="secondary" value="login" onClick={(e) => moduleDisplay(e.target.value)}>Back</Button>
                    </Row>
                </Form>
            );
        } else if (loginContent === "success") {
            return (
                <>
                    <h3>Account created</h3>
                    <p>Thank you for making an account, you can now login</p>
                    <Button value="login" onClick={(e) => moduleDisplay(e.target.value)}>Back to login page</Button>
                </>
            );
        };
    }

    const content = loadContent()

    return (
        <div className="alt-bg">
            <Container className="py-5">
                <div className="login-module d-flex my-5 px-5 py-3">
                    {content}
                </div>
            </Container>
        </div>
    )
};

export default Login;