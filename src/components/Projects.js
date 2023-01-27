import { Container, Row, Col, Tab } from "react-bootstrap";
import { Card } from './Card'
import projImg1 from "../assets/img/dogsApp.png";
import projImg2 from "../assets/img/kaloApp.png";
import projImg3 from "../assets/img/refrigeracion.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "Refrigeración SJG",
      description:
      "Desarrollo de sitio corporativo para una empresa dedicada al mantenimiento/reparación de sistemas de refrigeración. Realizado con Next.js, TypeScript y Chakra UI",
      imgUrl: projImg3,
      link: "https://refrigeracionsjg.vercel.app/",
    },
    {
      title: "Kalo",
      description:
      "¡Bienvenido a Kalo! ¡Un Market Place diseñado para ti!. Logrado en 5 semanas de trabajo en grupo como prueba final para el bootcamp de Henry. Desarrollado con las últimas tecnologías y modulado para mejorar la efectividad en el rendimiento y garantizar que el código sea reutilizable y desarrollado con una gran experiencia UX/UI.",
      imgUrl: projImg2,
      link: "https://kalo-arg.vercel.app/",
    },
    {
      title: "Dogs App",
      description:
        "Desarrollo de una SPA, en la cual se consume información de una API de razas de perros. Se pueden filtrar las razas de perros por nombre, temperamento, y creación. También se pueden ordenar alfabéticamente y por peso, buscar una raza específica y obtener su información detallada o crear su propio perro en una base de datos.",
      imgUrl: projImg1,
      link:"https://pi-dogs-fer0705.vercel.app/"
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Proyectos</h2>
                  {/* <p>
                    Estos son los proyectos en los que trabaje desde que decidi
                    dedicarme por completo al desarrollo web
                  </p> */}
                  <br/>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    {/* <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav> */}
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <Card key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      {/* <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane> */}
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="bg"></img>
    </section>
  );
};
