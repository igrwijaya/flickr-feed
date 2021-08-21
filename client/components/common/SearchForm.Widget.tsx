import React, {useState} from 'react';
import {Button, FormControl, InputGroup} from "react-bootstrap";
import {useDispatch} from "react-redux";
import {fetchFlickrImage} from "../../infrastructure/stores/flickr/flickr.action";

export const SearchFormWidget = () => {
    const dispatch = useDispatch()
    const [searchKeyword, setSearchKeyword] = useState<string>('')

    const onSearchBtnPressed = () => {
        dispatch(fetchFlickrImage(searchKeyword))
    }

    return (
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
    );
};
