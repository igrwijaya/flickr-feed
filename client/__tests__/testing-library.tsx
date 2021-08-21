import React from 'react'
import {render} from '@testing-library/react'
import Home from '../pages/index'
import {useMockStore} from "../infrastructure/stores/store.mock";
import {Provider} from "react-redux";
import {FlickrState} from "../infrastructure/stores/flickr/flickr.state";
import {FlickrStatus} from "../infrastructure/stores/flickr/flickr.constant";
import {SearchFormWidget} from "../components/common/SearchForm.Widget";

describe('App', () => {
    it('should render search box', () => {
        const flickrState: FlickrState = {
            status: FlickrStatus.ready,
            publicImages: []
        }

        const preloadedState: any = {
            flickr: flickrState
        }

        const store = useMockStore(preloadedState)
        const { getByRole } = render(<Provider store={store}><SearchFormWidget /></Provider>)

        const searchBox = getByRole('textbox')
        const searchButton = getByRole('button')

        expect(searchBox).toBeInTheDocument()
        expect(searchButton).toBeInTheDocument()
    })

    it('should render shimmer', () => {
        const flickrState: FlickrState = {
            status: FlickrStatus.searching,
            publicImages: []
        }

        const preloadedState: any = {
            flickr: flickrState
        }

        const store = useMockStore(preloadedState)
        const { getAllByRole } = render(<Provider store={store}><Home /></Provider>)

        const shimmers = getAllByRole('shimmer')

        expect(shimmers[0]).toBeInTheDocument()
    })

    it('should render Flickr images', () => {
        const flickrState: FlickrState = {
            status: FlickrStatus.ready,
            publicImages: [
                {
                    title: 'Unit Test',
                    imageUrl: 'https://live.staticflickr.com/65535/51391134672_ddab86e349_m.jpg'
                }
            ]
        }

        const preloadedState: any = {
            flickr: flickrState
        }

        const store = useMockStore(preloadedState)
        const { getAllByRole } = render(<Provider store={store}><Home /></Provider>)

        const flickrImages = getAllByRole('flickr-images')

        expect(flickrImages[0]).toBeInTheDocument()
        expect(flickrImages).toHaveLength(1)
    })
})
