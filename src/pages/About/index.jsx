import React from "react";
import Banner from '../../components/Banner';
import aboutJson from '../../Data/about.json';
import Collapse from '../../components/Collapse';
import './style.css';

function About() {
    return (
        <main>
            <Banner page='about' />
            <section className="collapse">
                {aboutJson.map(({ title, description}, index) => (
                    <Collapse key={`${title}-${index}`}
                    collapseTitle={<h2 className="title-about">{title}</h2>}
                    collapseDescription={description}
                    />
                ))}
            </section>
        </main>
    );
};

export default About