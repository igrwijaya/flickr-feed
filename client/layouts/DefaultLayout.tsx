import {Button, Card, Container, FormControl, InputGroup} from "react-bootstrap";
import React, {ReactNode, useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {fetchFlickrImage} from "../infrastructure/stores/flickr/flickr.action";

const DefaultLayout = ({children} : {children: ReactNode}) => {

    const dispatch = useDispatch()
    const [searchKeyword, setSearchKeyword] = useState<string>('')

    const onSearchBtnPressed = () => {
        dispatch(fetchFlickrImage(searchKeyword))
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
                                <Button onClick={onSearchBtnPressed} variant="outline-secondary">Search</Button>
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
