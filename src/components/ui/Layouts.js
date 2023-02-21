import React from 'react'
import { Outlet } from 'react-router-dom'

import { Col, Row } from 'react-bootstrap'
import Header from './Header'
import Footer from './Footer'
import Aside from './Aside'

export default function Layouts() {

    return (
        <>
            <Header />
            <main>
                    <Row className="h-100">
                        <Col sm={2} className="a_tbdr h-100">
                            <Aside />
                        </Col>
                        <Col sm={10} className="a_tbdr h-100">
                            <Outlet />
                        </Col>
                    </Row>
                </main> 
            <Footer />
        </>
    )
}
