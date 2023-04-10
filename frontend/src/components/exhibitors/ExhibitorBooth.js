import { Row, Button, Form, Modal } from "react-bootstrap";
import { useState } from "react";
import ModalContent from "../ModalContent";

function ExhibitorBooth(props) {
    // Object used to create preview of exhibitor booth before going live.
    const [previewContent, setContent] = useState({
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

    // Modal control
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleOpen = () => setShow(true);

    // Form content
    const [boothTitle, setBoothTitle] = useState(props.formContent.boothTitle);
    const [boothNumber, setBoothNumber] = useState(props.formContent.boothNumber);
    const [biography, setBiography] = useState(props.formContent.biography);
    const [logoUrl, setLogoUrl] = useState(props.formContent.logoUrl);
    const [contactName, setContactName] = useState(props.formContent.contactInfo.contactName);
    const [contactEmail, setContactEmail] = useState(props.formContent.contactInfo.contactEmail);
    const [website, setWebsite] = useState(props.formContent.website);
    const [articleTitle, setArticleTitle] = useState(props.formContent.article.articleTitle);
    const [articleUrl, setArticleUrl] = useState(props.formContent.article.articleUrl);

    // Exhibitor booth preview set values of form content states
    const previewBooth = () => {
        setContent({
            boothTitle: boothTitle,
            boothNumber: boothNumber,
            biography: biography,
            logoUrl: logoUrl,
            contactInfo: {
                contactName: contactName,
                contactEmail: contactEmail
            },
            website: website,
            article: {
                articleTitle: articleTitle,
                articleUrl: articleUrl
            }
        })
        handleOpen();
    }

    // Update exhibitor booth details
    const updateBooth = async (event) => {
        event.preventDefault();
        let published;

        // Depending on if the user clicked "Save as draft" or "Publish", the exhibitor booth published value is set true or false
        if (event.target.value === 'published') {
            published = true;
        } else {
            published = false;
        }

        const boothContent = {
            boothTitle: boothTitle,
            boothNumber: boothNumber,
            biography: biography,
            logoUrl: logoUrl,
            contactInfo: {
                contactName: contactName,
                contactEmail: contactEmail
            },
            website: website,
            article: {
                articleTitle: articleTitle,
                articleUrl: articleUrl
            },
            published: published
        };

        const response = await fetch('/exhibition-booths/update', {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(boothContent)
        })

        const data = await response.json()
        alert(data.message);
    }


    return (
        <>
            <h4>Welcome to your booth!</h4>
            <p>This is your personal exhibition booth. Please complete the below form and click publish to make the booth live. 
                Not ready to go live yet? You can save the booth as a draft and comeback later!</p>
            <Form>
                <Form.Group className="mb-3" controlId="boothTitle">
                    <Form.Label>Title</Form.Label>
                    <Form.Control value={boothTitle} onChange={(e) => setBoothTitle(e.target.value)} type="input" placeholder="Company name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="boothNumber">
                    <Form.Label>Booth number</Form.Label>
                    <Form.Control value={boothNumber} onChange={(e) => setBoothNumber(e.target.value)} type="number" placeholder="Select a booth number" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="biography">
                    <Form.Label>Biography</Form.Label>
                    <Form.Control value={biography} onChange={(e) => setBiography(e.target.value)} as="textarea" rows={6} placeholder="A short description of your company" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="logoUrl">
                    <Form.Label>Logo URL</Form.Label>
                    <Form.Control value={logoUrl} onChange={(e) => setLogoUrl(e.target.value)} type="input" placeholder="Enter the URL of your logo" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="contactInfo.contactName">
                    <Form.Label>Contact name</Form.Label>
                    <Form.Control value={contactName} onChange={(e) => setContactName(e.target.value)} type="input" placeholder="Enter your full name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="contactInfo.contactEmail">
                    <Form.Label>Contact email</Form.Label>
                    <Form.Control value={contactEmail} onChange={(e) => setContactEmail(e.target.value)} type="input" placeholder="This can be different to your login email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="website">
                    <Form.Label>Website</Form.Label>
                    <Form.Control value={website} onChange={(e) => setWebsite(e.target.value)} type="input" placeholder="Enter the URL of your website" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="article.articleTitle">
                    <Form.Label>Article title</Form.Label>
                    <Form.Control value={articleTitle} onChange={(e) => setArticleTitle(e.target.value)} type="input" placeholder="Enter the title of your article" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="article.articleURL">
                    <Form.Label>Article URL</Form.Label>
                    <Form.Control value={articleUrl} onChange={(e) => setArticleUrl(e.target.value)} type="input" placeholder="Enter the URL of your article" />
                </Form.Group>
                <Row>
                    <Button variant="primary" value="published" onClick={updateBooth}>Publish</Button>
                    <Button variant="primary" value="draft" onClick={updateBooth}>Save as draft</Button>
                    <Button variant="secondary" onClick={previewBooth}>Preview</Button>
                </Row>
            </Form>
            <Modal show={show} onHide={handleClose} size="lg"
    aria-labelledby="contained-modal-title-vcenter"
    centered>
                <ModalContent exhibitor={previewContent} />
            </Modal>
        </>
    )
}

export default ExhibitorBooth; 