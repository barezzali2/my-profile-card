import React from "react";
import Photo from "./Components/Photo";
import Information from "./Components/Information";
import SkillList from "./Components/SkillList";
import SocialMedia from "./Components/SocialMedia";

export default function App() {
  return (
    <div className="card">
      <div className="cardHeader"></div>
      <Photo />
      <div className="data">
        <Information />
        <SkillList />
        <SocialMedia />
      </div>
    </div>
  );
}


