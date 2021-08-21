import {Button, Card, Container, FormControl, InputGroup} from "react-bootstrap";
import React, {ReactNode} from "react";

const DefaultLayout = ({children} : {children: ReactNode}) => {
    return (
        <>
            <Card>
                <Card.Body>
                    <Container className="d-flex flex-row justify-content-between align-items-center">
                        <span>
                            Flickr Feed App
                        </span>
                        <InputGroup className="w-auto">
                            <FormControl
                                placeholder="keyword"
                            />
                            <InputGroup.Append>
                                <Button variant="outline-secondary">Search</Button>
                            </InputGroup.Append>
                        </InputGroup>
                    </Container>
                </Card.Body>
            </Card>
            <Container>
                {children}
            </Container>
        </>
    )
}

export default DefaultLayout
