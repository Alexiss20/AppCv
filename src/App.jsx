
import Education from './components/Formularios/Education';
import Experience from './components/Formularios/Experience';
import GeneralInfo from './components/Formularios/GeneralInfo';

import './index.css'; 

function App() {
  return (
    <div className="cv-container">
      <h1 className="cv-title">Currículum Vitae</h1>
      
      <GeneralInfo />
      <Education />
      <Experience />
      
    </div>
  );
}

export default App;