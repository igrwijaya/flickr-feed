import {Card, Container} from "react-bootstrap";
import React, {ReactNode} from "react";
import {SearchFormWidget} from "../components/common/SearchForm.Widget";

const DefaultLayout = ({children} : {children: ReactNode}) => {
    return (
        <>
            <Card>
                <Card.Body>
                    <Container className="d-flex flex-row justify-content-between align-items-center">
                        <span>
                            Flickr Feed App
                        </span>
                        <SearchFormWidget />
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
