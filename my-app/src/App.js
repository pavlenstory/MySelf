import React from 'react';
import Skills from './skills/Skills';
import SkillCard from './skillCard/SkillCard';
import Name from './name/Name';

function App() {
  return (
    <div className="App">
      <Name/>
      <Skills/>
      <SkillCard/>
    </div>
  );
}

export default App;
