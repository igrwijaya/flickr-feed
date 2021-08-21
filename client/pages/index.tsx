import type { NextPage } from 'next'
import Image from 'next/image'
import DefaultLayout from "../layouts/DefaultLayout";
import {Col, Container, Row} from "react-bootstrap";
import {useEffect, useState} from "react";
import InfiniteScroll from "react-infinite-scroll-component";

interface Image {
  url: string
  alt: string
}

const Home: NextPage = () => {

  const [images, setImages] = useState<Image[]>([])

  useEffect(() => {
    const images: Image[] = []

    images.push({
      url: '/assets/images/logo-aia-insurance_169.png',
      alt: 'AIA Finance'
    })
    images.push({
      url: '/assets/images/logo-aia-insurance_169.png',
      alt: 'AIA Finance'
    })
    images.push({
      url: '/assets/images/logo-aia-insurance_169.png',
      alt: 'AIA Finance'
    })
    setImages(images)

  }, [])

  const fetchMoreData = () => {

  }

  return (
    <DefaultLayout>
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
            <h4>Hi, I'm Gede.</h4>
            <p>igrwijaya@gmail.com</p>
          </Col>
        </Row>
        <hr/>
        <InfiniteScroll
            dataLength={images.length}
            next={fetchMoreData}
            hasMore={images.length > 12}
            loader={<h4>Loading...</h4>}
        >
          <Row className="mr-0 ml-0">
            {images.map((image, index) => (
                <Col key={index} sm={6} md={4} className="text-center mb-2 p-1">
                  <Image src={image.url} width={150} height={150} alt={image.alt} />
                </Col>
            ))}
          </Row>
        </InfiniteScroll>
      </Container>
    </DefaultLayout>
  )
}

export default Home
