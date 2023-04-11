import { Modal, Row, Col, Button } from 'react-bootstrap'

// Modal content used to generate exhibitor booth.
function ModalContent(props) {
    const exhibitor = props.exhibitor
    const mailTo = `mailto:${exhibitor.contactInfo.contactEmail}`
    return (
        <>
            <Modal.Body>
                <Row className='mb-3'>
                    <Col lg={3}>
                        <div className='booth-logo d-flex'>
                            <img className='modal-logo' src={exhibitor.logoUrl} alt="Logo"></img>
                        </div>
                    </Col>
                    <Col lg={9}>
                        <h1 className='exhibitor-name'>{exhibitor.boothTitle}</h1>
                        <h2 className='booth-number'>Booth: {exhibitor.boothNumber}</h2>
                    </Col>
                </Row>
                <Row>
                    <Col lg={8}>
                        <p className='description'>{exhibitor.biography}</p>
                        <h4>Latest News</h4>
                        <p className='article-title'><a href={exhibitor.article.articleUrl} target="_blank">{exhibitor.article.articleTitle}</a></p>
                    </Col>
                    <Col lg={4}>
                        <Button className='modal-button mb-2' variant='primary' href={exhibitor.website} target="_blank">Visit website</Button>
                        <Button className='modal-button mb-2' variant='primary' href={mailTo}>Get in touch</Button>
                    </Col>
                </Row>
            </Modal.Body>
        </>
    )
}

export default ModalContent;