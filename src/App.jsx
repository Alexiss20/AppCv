// src/App.jsx

import Education from './components/Formularios/Education';
import Experience from './components/Formularios/Experience';
import GeneralInfo from './components/Formularios/GeneralInfo';


function App() {
  return (
    <div className="app">
      <header>
        <h1>Generador de CV</h1>
      </header>
      
      <main>
        <GeneralInfo />
        <hr />
        <Education />
        <hr />
        <Experience />
      </main>
    </div>
  );
}

export default App;