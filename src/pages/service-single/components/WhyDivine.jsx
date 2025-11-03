import { Col, Container, Row } from 'react-bootstrap';
import { FaHome, FaHandsHelping, FaUsers, FaHeart, FaLeaf, FaPhone } from 'react-icons/fa';
import { FaCheck } from 'react-icons/fa6';

const WhyDivine = () => {
  const services = [
    "Community Living",
    "Community Development Services", 
    "Personal Supports",
    "Supported Living",
    "Respite"
  ];

  const offerings = [
    {
      icon: <FaCheck />,
      title: "Safe & Comfortable Homes",
      description: "Well-maintained, accessible, fully-furnished homes designed to meet each resident's needs and health requirements."
    },
    {
      icon: <FaCheck />,
      title: "Individualized Support", 
      description: "From daily tasks to personal goals, we provide tailored assistance to promote independence and active lives."
    },
    {
      icon: <FaCheck />,
      title: "Supportive Environment",
      description: "We encourage social interaction and self-expression, as a service offering residents a enriching community."
    },
    {
      icon: <FaCheck />,
      title: "Respite Care",
      description: "Our trained staff allows family members and supervisors to take a break from daily support responsibilities and know that their loved ones are in good hands."
    }
  ];

  const benefits = [
    {
      icon: <FaHome />,
      title: "A Home, Not Just Housing",
      description: "Our Community Living programs offer a housing development to feel like family - not a facility. Residents enjoy private rooms, shared living areas, and a home they can call their space."
    },
    {
      icon: <FaHandsHelping />,
      title: "24/7 Compassionate Support",
      description: "Our trained support staff are available around the clock to assist with daily living skills, medication management and personal care, ensuring safety and comfort in the homes we provide."
    },
    {
      icon: <FaLeaf />,
      title: "Independence with Guidance", 
      description: "We encourage residents to take their own initiatives - from meal preparations to basic financial while offering up the right level of support to promote self-reliance."
    },
    {
      icon: <FaHeart />,
      title: "Personalized Care Plans",
      description: "Each individual's needs, goals, and preferences are carefully considered in our customized support plan to ensure the best possible quality of life."
    },
    {
      icon: <FaUsers />,
      title: "Engaging Community Life",
      description: "We help our participants discover and pursue meaningful activities that expand their social capabilities, enhance self-confidence, and expand all life."
    }
  ];

  return (
    <section className="vl-sidebar-area sp2">
      <Container>
        <Row>
          <Col lg={4}>
            <div className="vl-sidebar">
              <div className="vl-widget">
                <div className="vl-widget-title">
                  <h4 className="widget-title">The Services We Provide</h4>
                </div>
                <div className="vl-widget-content">
                  <ul className="vl-service-category">
                    {services.map((service, idx) => (
                      <li key={idx} className={idx === 0 ? 'active' : ''}>
                        <a href="#">{service}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="vl-widget vl-contact-widget">
                <div className="vl-contact-info">
                  <div className="icon">
                    <FaPhone />
                  </div>
                  <div className="content">
                    <h4>About Here Or Questions?</h4>
                    <h3>24/7 Contact Us</h3>
                    <p>301-281-2285</p>
                  </div>
                </div>
              </div>
            </div>
          </Col>

          <Col lg={8}>
            <div className="vl-service-details">
              <div className="vl-service-content">
                <h2 className="title">Why Divine Care?</h2>
                <p className="para">
                  Divine Care stands apart through our person-centered approach — we see every resident as an individual with unique 
                  dreams and goals. Our mission is to help each person live their best life, surrounded by care, comfort, and connection.
                </p>

                <div className="vl-service-offering">
                  <h3 className="sub-title">What We Offer?</h3>
                  <div className="vl-offering-list">
                    {offerings.map((item, idx) => (
                      <div key={idx} className="vl-single-offering">
                        <div className="icon">
                          {item.icon}
                        </div>
                        <div className="content">
                          <h5 className="title">{item.title}</h5>
                          <p className="para">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="vl-service-benefits">
                  <h3 className="sub-title">Discover the Benefits of Choosing Us</h3>
                  <div className="vl-benefits-list">
                    {benefits.map((benefit, idx) => (
                      <div key={idx} className="vl-single-benefit">
                        <div className="icon">
                          {benefit.icon}
                        </div>
                        <div className="content">
                          <h5 className="title">{benefit.title}</h5>
                          <p className="para">{benefit.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default WhyDivine;