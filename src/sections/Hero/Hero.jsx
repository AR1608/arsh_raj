import styles from './HeroStyles.module.css'
import heroImg from '../../assets/Screenshot 2024-09-06 001845.png'
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import twitterLight from '../../assets/twitter-light.svg';
import twitterDark from '../../assets/twitter-dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import CV from '../../assets/cv.pdf'
import {useTheme} from '../../common/ThemeContext'
function Hero() { 
    const{theme,toggleTheme}=useTheme();

    const themeIcon = theme === 'light' ? sun : moon;
    const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
    const githubIcon = theme === 'light' ? githubLight : githubDark;
    const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;
  return (
    <section id='hero' className={styles.container}>
    <div className={styles.colorModeContainer}>
    <img 
        className={styles.hero}
        src={heroImg}
        alt="Profile picture of Arsh Raj"
    />
   
    <img 
        className={styles.colorMode}
        src={themeIcon}
        alt="Color mode Icon"
        onClick={toggleTheme}
    />
    
</div>
<div id="intro" className={styles.info}>
<h1>
    Arsh
    <br/>
    Raj
</h1>
<h2>
    Frontend Developer
</h2>
<span>
    
    <a href="https://github.com/AR1608" target="_blank">
        <img src={githubIcon} alt="Twitter Icon"/>
    </a>
    <a href="https://www.linkedin.com/in/arshraj1608/" target="_blank">
        <img src={linkedinIcon} alt="Twitter Icon"/>
    </a>
</span>
<p  className={styles.description}>I’m Arsh Raj, a final-year B.Tech student in Electronics and Communication Engineering at VIT University. My academic journey is fueled by a passion for technology and innovation, with a strong foundation in both hardware and software. Having honed my programming skills in languages like Java, HTML, CSS, and JavaScript, I enjoy blending creativity and logic in web development. </p>
<a href={CV} download>
    <button className="hover" >
        Resume
    </button>
</a>
</div>
    </section>
    
  )
}

export default Hero