import { Card, Container, Row, Col } from "react-bootstrap";
import selfie from "./img/selfie.jpeg";

export function AboutPage() {
    return (
        <>
            <Container className="my-3">
                <Card className="shadow bg-dark-subtle border-0 p-4">
                    <h2 className="text-center">About Me</h2>

                    <hr />

                    <Container as={Row} className="mt-3">
                        <Col md={10} xs={8} className="text-justify">
                            Stuff
                        </Col>
                        <Col md={2} xs={4}>
                            <img
                                src={selfie}
                                alt="A photo of me"
                                className="img-fluid rounded-3 float-end"
                            />
                        </Col>
                    </Container>
                </Card>
            </Container>
        </>
    );
}
