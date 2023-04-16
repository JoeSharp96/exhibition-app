import { Row, Col, Container } from "react-bootstrap";

const content = [
    {
        title: "First title with some information",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In luctus massa sit amet malesuada fermentum. Duis pulvinar maximus nunc eget tincidunt. Curabitur tempus lectus sed nibh vehicula, sed semper diam ornare.",
        hyperlink: {
            copy: "Link text",
            url: "http://localhost:3000/exhibition"
        }
    },
    {
        title: "Second title with some information",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In luctus massa sit amet malesuada fermentum. Duis pulvinar maximus nunc eget tincidunt.",
        hyperlink: {
            copy: "Link text but longer",
            url: "http://localhost:3000/exhibition"
        }
    },
    {
        title: "Third title with some information",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In luctus massa sit amet malesuada fermentum. Curabitur tempus lectus sed nibh vehicula, sed semper diam ornare.",
        hyperlink: {
            copy: "Link text",
            url: "http://localhost:3000/exhibition"
        }
    }
]

function KeyThemes() {

    const themes = content.map((theme, index) => {
        return(
            <Col key={index} id={index} md={4} className="kf-content">
                <div className="p-4">
                    <Row>
                        <Col sm={1}>
                            <h3>{(index+1)}</h3>
                        </Col>
                        <Col sm={11}>
                            <h5>{theme.title}</h5>
                        </Col>
                    </Row>
                    <p>{theme.body}</p>
                    <a href={theme.hyperlink.url}>{theme.hyperlink.copy}</a>
                </div>
            </Col>
        )
    })


    return(
        <Container>
            <div className="headline">
                <h4 className="title">You need leads, and we have a way of getting those leads for you.
                Get them by having a silly little booth. You know, like a real booth, but it's all fake. Like
                Santa Claus or the Queen</h4>
            </div>
            <Row className="key-themes">
                {themes}
            </Row>
        </Container>    
    );
};

export default KeyThemes;

