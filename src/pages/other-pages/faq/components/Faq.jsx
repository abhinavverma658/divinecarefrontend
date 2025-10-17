import { Accordion, AccordionBody, AccordionHeader, AccordionItem, Col, Container, Nav, NavItem, NavLink, Row, TabContainer, TabContent, TabPane } from 'react-bootstrap';
import { faq2Data, faqData } from '../data';
const Faq = () => {
  return <section className="vl-faq-inner sp2">
            <Container>
                <Row>
                    <Col lg={6} className="mx-auto">
                        <h2 className="title mb-60 text-center">Frequently Asked Questions</h2>
                    </Col>
                </Row>
                <TabContainer defaultActiveKey={'pills-home'}>
                    <Row>
                        <Col lg={4} className="mx-auto">
                            <div className="vl-tab-item">
                                <Nav className="nav-pills" id="pills-tab" role="tablist">
                                    <NavItem className="nav-item" role="presentation">
                                        <NavLink as={'button'} className=" mrf-16" eventKey='pills-home' data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">All</NavLink>
                                    </NavItem>
                                    <NavItem className="nav-item" role="presentation">
                                        <NavLink as={'button'} className=" mrf-16" eventKey='pills-profile' data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Business</NavLink>
                                    </NavItem>
                                    <NavItem className="nav-item" role="presentation">
                                        <NavLink as={'button'} eventKey='pills-contact' data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Finance</NavLink>
                                    </NavItem>
                                </Nav>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={12}>
                            <div className="vl-faq-accordion">
                                <Row>
                                    <TabContent id="pills-tabContent">
                                        <TabPane className="fade" eventKey="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabIndex={0}>
                                            <Row>
                                                <Col lg={6}>
                                                    <Accordion defaultActiveKey={'1'} id="accordionExample">
                                                        {faqData.map((item, idx) => <AccordionItem eventKey={`${idx + 1}`} className="vl-accordion-item" key={idx}>
                                                                    <AccordionHeader as={'h2'} id="headingOne">
                                                                        {item.question}
                                                                    </AccordionHeader>
                                                                    <AccordionBody className="accordion-body">
                                                                        <p>{item.answer}</p>
                                                                    </AccordionBody>
                                                                </AccordionItem>)}
                                                    </Accordion>
                                                </Col>
                                                <Col lg={6}>
                                                    <Accordion id="accordionExample1">
                                                        {faq2Data.map((item, idx) => <AccordionItem eventKey={`${idx + 1}`} className="vl-accordion-item" key={idx}>
                                                                    <AccordionHeader as={'h2'} id="heading8">
                                                                        {item.question}
                                                                    </AccordionHeader>
                                                                    <AccordionBody className="accordion-body">
                                                                        <p>{item.answer}</p>
                                                                    </AccordionBody>
                                                                </AccordionItem>)}
                                                    </Accordion>
                                                </Col>
                                            </Row>
                                        </TabPane>
                                        <TabPane className="fade" eventKey="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabIndex={0}>
                                            <Row>
                                                <Col lg={6}>
                                                    <Accordion defaultActiveKey={'1'} id="accordionExample">
                                                        {faqData.map((item, idx) => <AccordionItem eventKey={`${idx + 1}`} className="vl-accordion-item" key={idx}>
                                                                    <AccordionHeader as={'h2'} id="headingOne">
                                                                        {item.question}
                                                                    </AccordionHeader>
                                                                    <AccordionBody className="accordion-body">
                                                                        <p>{item.answer}</p>
                                                                    </AccordionBody>
                                                                </AccordionItem>)}
                                                    </Accordion>
                                                </Col>
                                                <Col lg={6}>
                                                    <Accordion id="accordionExample1">
                                                        {faq2Data.map((item, idx) => <AccordionItem eventKey={`${idx + 1}`} className="vl-accordion-item" key={idx}>
                                                                    <AccordionHeader as={'h2'} id="heading8">
                                                                        {item.question}
                                                                    </AccordionHeader>
                                                                    <AccordionBody className="accordion-body">
                                                                        <p>{item.answer}</p>
                                                                    </AccordionBody>
                                                                </AccordionItem>)}
                                                    </Accordion>
                                                </Col>
                                            </Row>
                                        </TabPane>
                                        <TabPane className="fade" eventKey="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab" tabIndex={0}>
                                            <Row>
                                                <Col lg={6}>
                                                    <Accordion defaultActiveKey={'1'} id="accordionExample">
                                                        {faqData.map((item, idx) => <AccordionItem eventKey={`${idx + 1}`} className="vl-accordion-item" key={idx}>
                                                                    <AccordionHeader as={'h2'} id="headingOne">
                                                                        {item.question}
                                                                    </AccordionHeader>
                                                                    <AccordionBody className="accordion-body">
                                                                        <p>{item.answer}</p>
                                                                    </AccordionBody>
                                                                </AccordionItem>)}
                                                    </Accordion>
                                                </Col>
                                                <Col lg={6}>
                                                    <Accordion id="accordionExample1">
                                                        {faq2Data.map((item, idx) => <AccordionItem eventKey={`${idx + 1}`} className="vl-accordion-item" key={idx}>
                                                                    <AccordionHeader as={'h2'} id="heading8">
                                                                        {item.question}
                                                                    </AccordionHeader>
                                                                    <AccordionBody className="accordion-body">
                                                                        <p>{item.answer}</p>
                                                                    </AccordionBody>
                                                                </AccordionItem>)}
                                                    </Accordion>
                                                </Col>
                                            </Row>
                                        </TabPane>
                                    </TabContent>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </TabContainer>
            </Container>
        </section>;
};
export default Faq;