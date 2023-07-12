import React from 'react'
import "./body.css";

import Sobre from "./about/index";
import Projetos from "./project/index";
import Habilidades from "./skill/index";
import Contato from "./contact/index";
import Trabalho from "./work/index";



function Body() {
    return <div className="body">

        <section id="about">
        <Sobre/>
    </section>

    <section id="project">
        <Projetos/>
    </section>

    <section id="skill">
        <Habilidades/>
    </section>

    <section id="contact">
        <Contato/>
    </section>

    <section id="work">
        <Trabalho/>
    </section>

</div>;

}

export default Body;