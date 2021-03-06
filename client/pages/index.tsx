import type {NextPage} from 'next'
import Image from 'next/image'
import DefaultLayout from "../layouts/DefaultLayout";
import {Col, Container, Row} from "react-bootstrap";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchFlickrImage} from "../infrastructure/stores/flickr/flickr.action";
import {FlickrState} from "../infrastructure/stores/flickr/flickr.state";
import Head from 'next/head'
import {FlickrStatus} from "../infrastructure/stores/flickr/flickr.constant";
import {Shimmer} from "../components/common/Shimmer";

const Home: NextPage = () => {

  const flickrData = useSelector(
      (state: any) => state.flickr as FlickrState
  )

  const dispatch = useDispatch()

  useEffect(() => {
    if(flickrData.status !== FlickrStatus.ready) {
      dispatch(fetchFlickrImage())
    }
  }, [])

  return (
    <DefaultLayout>
      <Head>
        <title>Flickr Feed App</title>
        <meta name="description" content="Flickr Feed" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container className="mt-3">
        <Row>
          <Col sm={3}>
            <Image
                src="/assets/images/logo-aia-insurance_169.png"
                className="rounded-circle"
                width={150}
                height={150}
                alt="AIA Finance" />
          </Col>
          <Col className="align-self-center">
            <h4>Hi, I&apos;m Gede.</h4>
            <p>igrwijaya@gmail.com</p>
          </Col>
        </Row>
        <hr/>
        <Row className="mr-0 ml-0">
          {flickrData.status === FlickrStatus.searching && (
              <>
                  {Array(16).fill('', 0, 15).map((value, index) =>
                      <Col key={index} sm={6} md={3} className="text-center mb-2 p-1">
                        <Shimmer width={200} height={200}/>
                      </Col>
                  )}
              </>
          )}

          {flickrData.status === FlickrStatus.ready && flickrData.publicImages.map((image, index) => (
              <Col key={index} sm={6} md={3} className="text-center mb-2 p-1">
                <Image role="flickr-images" src={image.imageUrl} width={200} height={200} alt={image.title} />
              </Col>
          ))}
        </Row>
      </Container>
    </DefaultLayout>
  )
}

export default Home
