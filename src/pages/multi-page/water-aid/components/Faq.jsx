import { faqData } from '../data';
import faqUp from '@/assets/img/icons/vl-arrow-faq-up.svg';
import { Accordion, AccordionBody, AccordionHeader, AccordionItem, Col, Container, Row } from 'react-bootstrap';
const Faq = () => {
  return <section id="faq" className="vl-faq3 sp2">
            <Container>
                <Row>
                    <Col lg={7} className="mx-auto">
                        <div className="vl-section-title3 mb-60 text-center">
                            <h4 className="subtitle" data-aos="fade-up" data-aos-duration={800} data-aos-delay={300}>FAQ
                                Question</h4>
                            <h2 className="title text-anime-style-3">Frequently Asked Question</h2>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col lg={10} className="mx-auto">
                        <div className="vl-accordion3">
                            <Accordion defaultActiveKey={'1'} id="accordionExample">
                                {faqData.map((item, idx) => <AccordionItem eventKey={`${idx + 1}`} key={idx}>
                                            <AccordionHeader id="headingOne">
                                                {item.question} <span><img src={faqUp} alt='faqUp' /></span>
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