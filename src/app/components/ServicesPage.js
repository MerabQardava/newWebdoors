import React from 'react';
import styles from "./ServicesPage.module.css"
import Service from "@/app/components/Service";

function ServicesPage(props) {
    return (<section id={styles["servicesSection"]} className={styles.paddedSection}>
        <header>
            <img src="lineDecoration.svg" alt=""/>
            <p>Services</p>
        </header>

        <main>
            <div id={styles["lineContainer"]}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>

            <section id={styles["services"]}>

                <Service color="#9ddcfa" img="brain.svg" num={1} title="Analysis">We work with our clients to gather the
                    requirements, use cases, process specifications and
                    conduct in-depth research on demographics, behavior patterns, and target audiences to refine
                    your idea and create a strong app foundation</Service>
                <Service color="#1fb0f3" img="ruler.svg" num={2} title="Wireframing">Our experienced UI/UX designers will create
                    wireframes to visualize the client’s concept and ideas that clearly define the user journey
                </Service>
                <Service color="#7b5dfa" img="cube.svg" num={3} title="Prototyping">We lead the industry with best in class prototype
                    design techniques that give you an earlier heads up on the look and feel, during the development
                    cycle.</Service>
                <Service color="#f3cc1f" img="computer.svg" num={4} title="Design & code">We use Human Interface Guidelines and follow
                    industry
                    best practices during our design and coding process. Our capabilities deliver sleek and responsive
                    apps to give you a competitive edge.
                </Service>
                <Service color="#fb634f" img="target.svg" num={5} title="Testing & QA">We rigorously test the performance app performance
                    to
                    Industry standards to evaluate its scalability, responsiveness, and stability.
                </Service>
                <Service color="#f31f46" img="up.svg" num={6} title="Deployment">Once the app fulfills our client’s requirements and
                    expectations, we deploy the app according to the launch plan.</Service>


            </section>
        </main>


    </section>);
}

export default ServicesPage;