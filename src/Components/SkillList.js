import Skill from "./Skill";

const skills = [
    { skill: "Web Design", level: "Professional", color: "#7FFF09"},
    { skill: "React Js", level: "Intermediate", color: "#4dffc3" },
    { skill: "OOP", level: "Advanced", color: "#ffb326" },
    { skill: "Graphic Design", level: "Intermediate", color: "#4dffc3" },
    { skill: "UI & UX", level: "Intermediate", color: "#4dffc3"},
    { skill: "System Analysis", level: "beginner", color: "skyblue"}
    
  ];

  export default function SkillList() {
    return (
      <div className="skill-list">
        {skills.map((skill, index) => (
          <Skill 
          key={index}
          skill={skill.skill} 
          level={skill.level.toLowerCase()} 
          color={skill.color} 
          hoverColor={skill.hoverColor}/>
        ))}
      </div>
    );
  }