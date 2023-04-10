import { Row, Col, Button, Form } from "react-bootstrap";
import { useState } from "react";
import ExhibitorBooth from "./ExhibitorBooth";

function LoginModule() {
    // Login value
    const [isLoggedIn, setLoginValue] = useState(false);
    const toggleLogin = () => setLoginValue(!isLoggedIn);

    // Form content
    const [username, setUsername] = useState('');
    const updateUsername = (event) => setUsername(event.target.value);
    const [password, setPassword] = useState('');
    const updatePassword = (event) => setPassword(event.target.value)
    const [confPassword, setConfPassword] = useState('')
    const updateConfPassword = (event) => setConfPassword(event.target.value)

    const resetForm = () => {
        setUsername('');
        setPassword('');
        setConfPassword('');
    }
    const [boothContent, setBoothContent] = useState({
        boothTitle: '',
        boothNumber: 0,
        biography: '',
        logoUrl: '',
        contactInfo: {
            contactName: '',
            contactEmail: ''
        },
        website: '',
        article: {
            articleTitle: '',
            articleUrl: ''
        }
    })

    // Content displayed in login module
    const [loginContent, setContent] = useState("login");
    const moduleDisplay = (value) => {
        setContent(value);
        setMessage("")
        resetForm();
    }

    const [errorMessage, setMessage] = useState("");

    // Create a new account
    const createAccount = async (event) => {
        event.preventDefault();
        const exhibitorDetails = {
            username: username,
            password: password,
            confirmPassword: confPassword
        }

        const response = await fetch('/create-account', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(exhibitorDetails)
        });
        const data = await response.json();

        console.log(data);

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
        }

        const response = await fetch('/login', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(exhibitorDetails)
        });

        const data = await response.json();

        if (response.status === 200) {
            getContent();
        } else {
            setMessage(data.message)
        };
    };

    // Get exhibitor form content
    const getContent = async () => {
        const response = await fetch('/exhibition-booths/edit', {
            method: "GET",
            headers: { "Content-Type": "application/json" }
        })

        const data = await response.json();
        setBoothContent(data);
        toggleLogin();
        setMessage("");
        resetForm();
    }

    const moduleContent = () => {
        if (isLoggedIn === false) {
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
                )
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
                )
            } else if (loginContent === "success") {
                return (
                    <>
                        <h3>Account created</h3>
                        <p>Thank you for making an account, you can now login</p>
                        <Button value="login" onClick={(e) => moduleDisplay(e.target.value)}>Back to login page</Button>
                    </>
                )
            }
        } else if (isLoggedIn === true) {
            return (
                <>
                    <h4>Welcome back!</h4>
                    <Button variant="primary" onClick={toggleLogin}>Logout</Button>
                </>
            );
        };
    };

    const content = moduleContent();
    if (!isLoggedIn){
        return (
            <>
                <Col lg={3} className='pe-5'>
                    {content}
                </Col>
                <Col lg={9}>
                    <h4>Login or create an account to edit your booth!</h4>
                </Col>
            </>
        );
    } else {
        return (
            <>
                <Col lg={3} className='pe-5'>
                    {content}
                </Col>
                <Col lg={9}>
                    <ExhibitorBooth isLoggedIn={isLoggedIn} formContent={boothContent}/>
                </Col>
            </>
        );
    }
};

export default LoginModule;