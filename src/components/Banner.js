import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap"
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerimg from "../assets/img/header-img.svg";

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Front Developer", "BacKend Developer", "FullStack developer"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;

    // useEffect(() => {
    //     let ticker = setInterval(() => {
    //         tick();
    //     },delta)
    // })
    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        },delta)

        return () => {clearInterval(ticker)};
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length-1) : fullText.substring(0, text.length+1);
        
        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta /2)
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText) {
            setIsDeleting(false)
            setLoopNum(loopNum + 1)
            setDelta(500);
        }
    }

    const styles = {
        span1: "--i:1;",
        span2: "--i:2;",
        span3: "--i:3;",
        div1: "--x:-1;--y:0;",
        div2: "--x:0;--y:0;",
        div3: "--x:1;--y:0;"
    }

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={7} xl={7}>
                        <span className="tagline">Welcome to my Portfolio</span>
                        <h1>{`Hi I'm Fran Ferreras `}<span className="wrap txt-rotate">{text}</span></h1>
                        <p>Advanced technician in web application development with the ability to develop, implement and maintain web application in different models and specific technologies, guaranteeing data acces in a secure manner and complying wit accessibility, usability and quality criteria.</p>
                        <button onClick={() => console.log('conecct')}>Lets's connect <ArrowRightCircle size={25}></ArrowRightCircle></button>
                    </Col>
                    {/* <Col xs={12} md={7} xl={5}>
                        <img src={headerimg} alt="Header Img" />
                    </Col> */}
                    <Col xs={12} md={7} xl={5} className="cube__container">
                        <div className="cube">
                            <div style={styles.div1}>
                                <span style={styles.span1}></span>
                                <span style={styles.span2}></span>
                                <span style={styles.span3}></span>
                            </div>
                            <div style={styles.div2}>
                                <span style={styles.span1}></span>
                                <span style={styles.span2}></span>
                                <span style={styles.span3}></span>
                            </div>
                            <div style={styles.div3}>
                                <span style={styles.span1}></span>
                                <span style={styles.span2}></span>
                                <span style={styles.span3}></span>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}