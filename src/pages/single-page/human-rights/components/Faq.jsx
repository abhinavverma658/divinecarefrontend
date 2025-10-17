import { faqData } from '../data';
import { Accordion, AccordionBody, AccordionHeader, AccordionItem, Col, Container, Row } from 'react-bootstrap';
import arrow1 from '@/assets/img/icons/vl-faq-up-arrow-5.1.svg';
const Faq = () => {
  return <section id="faq" className="vl-faq5 sp2">
            <Container>
                <Row>
                    <Col lg={7} className="mx-auto">
                        <div className="vl-section-title5 text-center mb-60">
                            <h5 className="subtitle" data-aos="fade-up" data-aos-duration={800} data-aos-delay={300}>FAQ
                                Question</h5>
                            <h2 className="title text-anime-style-3">Frequently Asked Question</h2>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col lg={10} className="mx-auto">
                        <div className="vl-accordion3">
                            <Accordion defaultActiveKey={'0'} id="accordionExample">
                                {faqData.map((item, idx) => <AccordionItem eventKey={`${idx}`} key={idx}>
                                            <AccordionHeader as={'h2'} id="headingOne">
                                                {item.question} <span><img src={arrow1} alt='arrow1' /></span>
                                            </AccordionHeader>
                                            <AccordionBody>
                                                <p>{item.answer}</p>
                                            </AccordionBody>
                                        </AccordionItem>)}
                            </Accordion>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>;
};
export default Faq;