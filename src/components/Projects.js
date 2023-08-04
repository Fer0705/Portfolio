import { Container, Row, Col, Tab } from "react-bootstrap";
import { Card } from './Card'
import projImg1 from "../assets/img/dogsApp.png";
import projImg2 from "../assets/img/kaloApp.png";
import projImg3 from "../assets/img/refrigeracion.png";
import projImg4 from '../assets/img/magicna.png'
import projImg5 from '../assets/img/tateti.PNG'
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "MagicNa - Tienda Magica",
      description:
      "En este proyecto, desarrollé una tienda virtual enfocada en ofrecer guías espirituales y recursos para el crecimiento personal. Utilizando Vite, JavaScript, React y Chakra UI, creé una experiencia intuitiva y atractiva para los usuarios. Mi objetivo fue proporcionar una plataforma donde los entusiastas de la espiritualidad puedan explorar y adquirir recursos para su camino personal. ",
      imgUrl: projImg4,
      link: "https://magicna.vercel.app/",
    },
    {
      title: "Refrigeración SJG",
      description:
      "Desarrollé un sitio corporativo para una empresa especializada en mantenimiento y reparación de sistemas de refrigeración. Utilicé Next.js, TypeScript y Chakra UI para crear un sitio web moderno y de alto rendimiento",
      imgUrl: projImg3,
      link: "https://refrigeracionsjg.vercel.app/",
    },
    {
      title: "Kalo",
      description:
      "¡Descubre Kalo, el Market Place diseñado pensando en ti! Este emocionante proyecto fue el resultado de 5 semanas de trabajo en grupo durante el bootcamp de Henry. Desarrollamos Kalo utilizando las últimas tecnologías y lo modulamos cuidadosamente para lograr un rendimiento excepcional y garantizar la reutilización del código. Además, nos dedicamos a crear una experiencia de usuario inigualable con un diseño UX/UI que cautiva. ¡Únete a la experiencia Kalo y encuentra lo que necesitas con facilidad!",
      imgUrl: projImg2,
      link: "https://kalo-arg.vercel.app/",
    },
    {
      title: "Ta-Te-Ti",
      description:
        "Disfruta del clásico juego Tic Tac Toe en esta versión digital desarrollada con una interfaz intuitiva y amigable, utilizando JavaScript y React. La aplicación cuenta con una lógica implementada para determinar al ganador y detectar empates, brindando una experiencia divertida. Juega contra un amigo y demuestra tus habilidades en esta experiencia frontend interactiva.",
      imgUrl: projImg5,
      link:"https://tic-tac-toe-fer0705.vercel.app"
    },
    {
      title: "Dogs App",
      description:
        "Descubre este emocionante proyecto de SPA centrado en el fascinante mundo de las razas de perros. Utilizando JavaScript, React y Redux, junto con una base de datos PostgreSQL, he desarrollado esta aplicación que consume una API para obtener una amplia variedad de perros. Los estilos están implementados con CSS puro para una experiencia visual atractiva. Explora diversas razas filtrando por nombre, temperamento y origen, y ordénalas alfabéticamente o por peso para encontrar la raza perfecta. Además, podrás obtener información detallada de cada raza o crear tu propio perro y guardarlo en la base de datos integrada. Sumérgete en esta experiencia canina única y disfruta de la diversidad de los perros en el sitio.",
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
