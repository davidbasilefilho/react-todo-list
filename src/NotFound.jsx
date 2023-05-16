import { Card, Container } from "react-bootstrap";

export function NotFound() {
    return (
        <>
            <Container className="my-3">
                <Card className="shadow bg-dark-subtle border-0 text-center p-4">
                    <h1>404</h1>
                    <h3>Not Found</h3>
                    <p>The requested file could not be found.</p>
                </Card>
            </Container>
        </>
    );
}
