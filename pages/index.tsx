import type { NextPage } from 'next'
import Image from 'next/image'
import DefaultLayout from "../layouts/DefaultLayout";
import {Col, Container, Row} from "react-bootstrap";

const Home: NextPage = () => {
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
        <Row>
          <Col sm={6} md={4} className="text-center mb-2 p-1">
            <Image src="/assets/images/logo-aia-insurance_169.png" width={150} height={150} alt="AIA Finance" />
          </Col>
          <Col sm={6} md={4} className="text-center mb-2 p-1">
            <Image src="/assets/images/logo-aia-insurance_169.png" width={150} height={150} alt="AIA Finance" />
          </Col>
          <Col sm={6} md={4} className="text-center mb-2 p-1">
            <Image src="/assets/images/logo-aia-insurance_169.png" width={150} height={150} alt="AIA Finance" />
          </Col>
          <Col sm={6} md={4} className="text-center mb-2 p-1">
            <Image src="/assets/images/logo-aia-insurance_169.png" width={150} height={150} alt="AIA Finance" />
          </Col>
          <Col sm={6} md={4} className="text-center mb-2 p-1">
            <Image src="/assets/images/logo-aia-insurance_169.png" width={150} height={150} alt="AIA Finance" />
          </Col>
          <Col sm={6} md={4} className="text-center mb-2 p-1">
            <Image src="/assets/images/logo-aia-insurance_169.png" width={150} height={150} alt="AIA Finance" />
          </Col>
          <Col sm={6} md={4} className="text-center mb-2 p-1">
            <Image src="/assets/images/logo-aia-insurance_169.png" width={150} height={150} alt="AIA Finance" />
          </Col>
          <Col sm={6} md={4} className="text-center mb-2 p-1">
            <Image src="/assets/images/logo-aia-insurance_169.png" width={150} height={150} alt="AIA Finance" />
          </Col>
        </Row>
      </Container>
    </DefaultLayout>
  )
}

export default Home
