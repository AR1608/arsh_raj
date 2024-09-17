import styles from './SkillsStyles.module.css'
import checkMarkIcon from '../../assets/checkmark-dark.svg'
import SkillList from '../../common/SkillList'

function Skills() {
  return(
     <section id="skills" className={styles.container}>
     <h1 className="sectionTitle">Skills</h1>
     <div className={styles.skillList}>
        <SkillList 
        src={checkMarkIcon}
         skill="HTML"

         />
          <SkillList 
        src={checkMarkIcon}
         skill="CSS"
            
         />
          <SkillList 
        src={checkMarkIcon}
         skill="JavaScript"
            
         />
          <SkillList 
        src={checkMarkIcon}
         skill="React"
            
         />
     </div>
     <hr/>
     <div className={styles.skillList}>
        <SkillList 
        src={checkMarkIcon}
         skill="Git"

         />
          <SkillList 
        src={checkMarkIcon}
         skill="Java"
            
         />
          
     </div>
     <hr/>
     <div className={styles.skillList}>
        <SkillList 
        src={checkMarkIcon}
         skill="MATLAB"

         />
          <SkillList 
        src={checkMarkIcon}
         skill="ORCAD"
            
         />
         <SkillList 
        src={checkMarkIcon}
         skill="LtSpice"
            
         /><SkillList 
        src={checkMarkIcon}
         skill="Keil"
            
         />
         <SkillList 
        src={checkMarkIcon}
         skill="CADENCE"
            
         />
         <SkillList 
        src={checkMarkIcon}
         skill="MODELSIM"
            
         />
         <SkillList 
        src={checkMarkIcon}
         skill="MULTISIM"
            
         />
          
     </div>
     <hr/>

  </section>
  )
}

export default Skills