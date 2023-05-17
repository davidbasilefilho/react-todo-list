import { Card, Container, Row, Col, Button } from "react-bootstrap";
import photoOfMe from "./img/selfie.jpeg";

export function AboutPage() {
    return (
        <>
            <Card className="shadow bg-dark-subtle border-0 p-3">
                <h2 className="text-center">About</h2>

                <hr />

                <Container>
                    <p className="float-start">
                        <img
                            src={photoOfMe}
                            className="float-end img-fluid col-6 col-md-2 ms-3 mb-1 rounded-4"
                            alt="A photo of me"
                        />
                        My name is David Basile Filho, a brazilian High School student. I have known
                        how to code since I was 11 years old and I have just decided to learn React.
                        I know how to code in C#, C++, PHP, Python and I'm learning JavaScript.
                        <br />
                        This website was created with Vite and uses React, React Router and React
                        Bootstrap. I learned important React concepts like hooks, routing and
                        functions that can be exported to JSX tags.
                    </p>
                </Container>

                <Button href="https://davidbasilefilho.github.io/">Go back to my website</Button>
            </Card>
        </>
    );
}
