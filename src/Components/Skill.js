export default function Skill({ skill, level, color }) {
    return (
      <div className="skill" style={{ backgroundColor: color }}>
        <span>{skill}</span>
        <span>
          {(level.toLowerCase() === "advanced" && "🚀") ||
            (level.toLowerCase() === "professional" && "😎") ||
            (level.toLowerCase() === "intermediate" && "🤞") ||
            (level.toLowerCase() === "beginner" && "👨‍💻")
            }
        </span>
      </div>
    );
  }