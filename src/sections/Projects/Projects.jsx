
import styles from './ProjectsStyles.module.css'
import viberr from '../../assets/tin-dog.png'
import ProjectCard from '../../common/ProjectCard'
import freshBurger from '../../assets/spotify_1.png'
import hipster from '../../assets/drum_kit.png'

function Projects() {
  return (
    <div section id="projects" className={styles.container}>
    <h1 className='sectionTitle'>Projects</h1>
    <div className={styles.projectsContainer}>
        <ProjectCard 
        src={viberr}
        link="https://github.com/AR1608/tindog.github.io"
        h3="tinDog" 
        p="Tinder for Dogs"

        />
        <ProjectCard 
        src={freshBurger}
        link="https://github.com/AR1608/SpotifyClone"
        h3="Spotify Clone" 
        p="Clone App"

        />
        <ProjectCard 
        src={hipster}
        link="https://github.com/AR1608/Drum-kit-game"
        h3="Drum-Kit-Game" 
        p="Game"

        />
         
        



       


    </div>
    </div>
  )
}

export default Projects