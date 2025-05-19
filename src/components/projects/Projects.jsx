import Architect from '../../assets/images/architect.webp';
import BurgerLab from '../../assets/images/burger-lab.webp';
import RideReady from '../../assets/images/ride-ready.webp';
import VirtualPet from '../../assets/images/virtual-pet.webp';
import '../../style/project/project.css';

const Projects = () => {

    const projectData = [
        {
            img: Architect,
            title: 'Architect',
            info: 'I built this website in HTML and CSS. It showcases the work of a young architect. The website is responsive for all mobile devices and tablets, and includes Font Awesome icons for connecting with the architect.',
            linkLive: 'https://carmelo85s.github.io/architect_website/',
            linkGitHub: 'https://github.com/Carmelo85S/architect_website'
        },
        {
            img: BurgerLab,
            title: 'Burger Lab',
            info: 'Welcome to BurgerLab, a modern, responsive restaurant website built with React and Tailwind CSS. It features dynamic menu tabs, animated sections, a contact form, and smooth scroll-based interactions. Perfect for burger joints or any restaurant wanting a clean digital presence.',
            linkLive: 'https://carmelo85s.github.io/burger-lab/',
            linkGitHub: 'https://github.com/Carmelo85S/burger-lab'
        },
        {
            img: RideReady,
            title: 'RideReady',
            info: 'A luxury rent-a-car website built from scratch using React and Sass. It features car galleries with available cars categorized by type. Each car has a dedicated page with information, video reviews, and a contact form for booking.',
            linkLive: 'https://carmelo85s.github.io/ride-ready-react/',
            linkGitHub: 'https://github.com/Carmelo85S/ride-ready-react'
        },
        {
            img: VirtualPet,
            title: 'Virtual Pet Lars',
            info: 'A game made as a final project in a front-end development course. It’s inspired by Tamagotchi, where the user takes care of a pet (Lars). I developed all the functionality for updating the pet’s status. Another version includes login and registration, with data saved in local storage.',
            linkLive: 'https://carmelo85s.github.io/game/',
            linkGitHub: 'https://github.com/Carmelo85S/game'
        },
    ];

    return (
        <section className="projects-wrapper" id="project">
            <div className="projects-heading-container">
                    <h1 className="project-heading">My projects</h1>
                </div>
            <section className="projects-container">
            {projectData.map((project) => (
                <article key={project.title} className="project-card">
                    <img
                        src={project.img}
                        alt={project.title}
                        className="project-image"
                    />
                    <section className="info-container">
                        <h3 className="project-title">{project.title}</h3>
                        <p className="project-info">{project.info}</p>
                        <section className="cta-container">
                            <a href={project.linkLive} target="_blank" rel="noopener noreferrer">
                                <button className="cta" aria-label={`View ${project.title} live`}>Live</button>
                            </a>
                            <a href={project.linkGitHub} target="_blank" rel="noopener noreferrer">
                                <button className="cta" aria-label={`View ${project.title} on GitHub`}>GitHub</button>
                            </a>
                        </section>
                    </section>
                </article>
            ))}
            </section>
        </section>
    );
}

export default Projects;
