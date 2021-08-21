import {Button, Card, Container, FormControl, InputGroup} from "react-bootstrap";
import React, {ReactNode, useEffect, useState} from "react";

const DefaultLayout = ({children} : {children: ReactNode}) => {

    const [searchKeyword, setSearchKeyword] = useState<string>('')

    useEffect(() => {
        console.log(searchKeyword)
    }, [searchKeyword])

    const onSearchBtnPressed = () => {

    }

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
                                value={searchKeyword}
                                onChange={e => setSearchKeyword(e.target.value)}
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
