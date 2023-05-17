import { Card, Container, Row, Col, Button } from "react-bootstrap";
import selfie from "./img/selfie.jpeg";

export function AboutPage() {
    return (
        <>
            <Card className="shadow bg-dark-subtle border-0 p-4">
                <h2 className="text-center">About Me</h2>

                <hr />

                <Row className="mt-3 mb-4">
                    <Col md={10} xs={7}>
                        <p>
                            My name is David Basile Filho, a brazilian High School student. I have
                            known how to code since I was 11 and I have just decided to learn React.{" "}
                            <br /> I know how to code in C#, C++, PHP, Python and I'm learning to
                            code in JavaScript.
                        </p>
                    </Col>
                    <Col md={2} xs={5}>
                        <img
                            src={selfie}
                            alt="A photo of me"
                            className="img-fluid rounded-4 float-end"
                        />
                    </Col>
                </Row>
                <Button href="https://davidbasilefilho.github.io/">Go back to my Website</Button>
            </Card>
        </>
    );
}
