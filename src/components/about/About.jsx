import html from '../../assets/icons/html.svg';
import css from '../../assets/icons/css.svg';
import js from '../../assets/icons/js.svg';
import react from '../../assets/icons/react.svg';
import sass from '../../assets/icons/sass.svg';
import vsCode from '../../assets/icons/vs-code.svg';
import nodejs from '../../assets/icons/nodejs.svg';
import typescript from '../../assets/icons/typescript.svg';
import git from '../../assets/icons/git.svg';
import figma from '../../assets/icons/figma.svg';
import express from '../../assets/icons/express.svg';
import '../../style/about/about.css';

const About = () => {
  return (
    <section className="about-wrapper">
        <div className="about-container">
            <div className="about-content">
                <h2 className="heading">
                    About <span>me</span>
                </h2>
                <p className="info">
                I am always been a creative person, in this moment of life i like to create beautifull webpage 
                from scratch or Figma Design. After attending few course in Java i figured out that i wanted 
                to do something more "visual", so i started approaching front end development 
                through on line resource and soon i was able to create and style simple webpages.
                Taking advanced course, followed by mentor and being part of a community of developer,
                 helped me to discover and learn more advanced technology and than just HTML. 
                 I like to write my website in <span>React</span> and style with <span>Sass</span>. 
                When creating a new web application i take into consideration the user experience.
                I combine good design, technology and innovation in all my project. 
                Currently i am focused in learning <span>Typescript</span> and undestand more Back end development.
                </p>
                <h2 className="heading">
                    Tech
                </h2>
                <p className="info">
                    Using a combination of cutting-edge technologies and reliable open-source software I build user-focused, 
                    performant websites for smartphones, tablets, and desktops.
                </p>
                <div className="icon-container">
                    <img className="icon" src={html} alt="html icon" />
                    <img className="icon" src={css} alt="css icon" />
                    <img className="icon" src={js} alt="javascript icon" />
                    <img className="icon" src={react} alt="react icon"/>
                    <img className="icon" src={typescript} alt="typescript icon" />
                    <img className="icon" src={sass} alt="Sass icon" />
                    <img className="icon" src={nodejs} alt="node js icon" />
                    <img className="icon" src={express} alt="express js icon" />
                    <img className="icon" src={vsCode} alt="vs code editor icon" />
                    <img className="icon" src={git} alt="git icon" />
                    <img className="icon" src={figma} alt="figma icon" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default About
