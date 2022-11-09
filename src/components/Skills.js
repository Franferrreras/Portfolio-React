import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import sixtycent from "../assets/img/six.svg";
import seventycent from "../assets/img/sevencent.svg";
import eighty from "../assets/img/eight.svg";
import colorSharp from "../assets/img/color-sharp.png";
// import { render } from "@testing-library/react";
//Images Stact develop
import javasvg from "../assets/img/OtherSVG/java-4-logo-svgrepo-com.svg"
import javascriptsvg from "../assets/img/OtherSVG/javascript-1.svg"
import mysqlsvg from "../assets/img/OtherSVG/mysql-png.png"
import angularsvg from "../assets/img/OtherSVG/angular-icon-1.svg"
import reactsvg from "../assets/img/OtherSVG/react-2.svg"
import typescriptsvg from "../assets/img/OtherSVG/typescript-2.svg"

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };  

    let itemList = [];
    const map1 = new Map();

    map1.set('Java', meter2);
    map1.set('JavaScript', meter2);
    map1.set('MySql', meter1);
    map1.set('Angular', seventycent);
    map1.set('React', sixtycent);
    map1.set('Css', meter1);
    map1.set('HTML5', meter1);
    map1.set('Scss', eighty);

    let cont = 0;
    for (let [key, value] of map1) {
        cont++;
        itemList.push(
            <div className="item" key={cont}>
                <img src={value} alt=""/>
                <h5>{key}</h5>
            </div>
        )
    }

    return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col className="col-12">
                        <div className="skill-bx wow zoomIn">
                            <h2>Skills</h2>
                            <p>These are all my skills I have learnt for two years.
                            </p>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider owl-carousel owl-theme">
                                <div className="item" key={cont}>
                                    <img src={meter2} alt=""/>
                                    <h5><span className="stack-item stack-item--java"><img src={javasvg} alt=""/></span>Java</h5>
                                </div>
                                <div className="item" key={cont}>
                                    <img src={sixtycent} alt=""/>
                                    <h5><span className="stack-item stack-item--reactt"><img src={reactsvg} alt=""/></span>React</h5>
                                </div>
                                <div className="item" key={cont}>
                                    <img src={seventycent} alt=""/>
                                    <h5><span className="stack-item"><img src={angularsvg} alt=""/></span>Angular</h5>
                                </div>
                                <div className="item" key={cont}>
                                    <img src={meter2} alt=""/>
                                    <h5><span className="stack-item"><img src={typescriptsvg} alt=""/></span>TypeScript</h5>
                                </div>
                                <div className="item" key={cont}>
                                    <img src={meter1} alt=""/>
                                    <h5><span className="stack-item"><img src={javascriptsvg} alt=""/></span>JavaScript</h5>
                                </div>
                                <div className="item" key={cont}>
                                    <img src={meter1} alt=""/>
                                    <h5><span className="stack-item stack-item--mysql"><img src={mysqlsvg} alt=""/></span>MySql</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={colorSharp} alt=""/>
        </section>
    )
    
}
