import '../components/style/skills.css'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png";
import html5 from "../assets/img/html.png";
import css from "../assets/img/css.png";
import js from "../assets/img/js.png";
import react from "../assets/img/react.png";
import redux from '../assets/img/redux.png'
import node from '../assets/img/node.png'
import sql from '../assets/img/sql.webp'
import mongo from '../assets/img/Mongodb.png'
import firebase from '../assets/img/firebase.png'
import next from '../assets/img/next.png'
import rnative from '../assets/img/reactNative.png'

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>
               Estas son algunas de las tecnologías con las que he estado trabajando
              </p>
              {/* <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              > */}
                <div className="item">
                  <div>
                    <img className="w-20 h-20 mx-auto" src={html5} alt="html" />
                    <p className="my-4">Html</p>
                  </div>
                  <div>
                    <img className="w-20 h-20 mx-auto" src={css} alt="css" />
                    <p className="my-4">Css</p>
                  </div>
                  <div>
                    <img
                      className="w-20 h-20 mx-auto"
                      src={js}
                      alt="javaScript"
                    />
                    <p className="my-4">JavaScript</p>
                  </div>
                  <div>
                  <img
                      className="w-20 h-20 mx-auto"
                      src={react}
                      alt="react"
                    />
                    <p className="my-4">React</p>
                  </div>
                  <div>
                  <img
                      className="w-20 h-20 mx-auto"
                      src={redux}
                      alt="redux"
                    />
                    <p className="my-4">Redux</p>
                  </div>
                  <div>
                  <img
                      className="w-20 h-20 mx-auto"
                      src={node}
                      alt="NODE"
                    />
                    <p className="my-4">Node - Express</p>
                  </div>
                  <div>
                  <img
                      className="w-20 h-20 mx-auto"
                      src={sql}
                      alt="postgreSQL"
                    />
                    <p className="my-4">PostgreSQL</p>
                  </div>
                  <div>
                  <img
                      className="w-20 h-20 mx-auto"
                      src={mongo}
                      alt="mongoDB"
                    />
                    <p className="my-4">MongoDB</p>
                  </div>
                  <div>
                  <img
                      className="w-20 h-20 mx-auto"
                      src={rnative}
                      alt="firebase"
                    />
                    <p className="my-4">React Native</p>
                  </div>
                  <div>
                  <img
                      className="w-20 h-20 mx-auto"
                      src={next}
                      alt="next.js"
                    />
                    <p className="my-4">Next.js</p>
                  </div>
                </div>
              {/* </Carousel> */}
            </div>



          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};
