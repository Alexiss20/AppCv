import { useState } from 'react';
import '../styles/education.css';

function Education() {
  const [isEditing, setIsEditing] = useState(true);

  const [education, setEducation] = useState({
    schoolName: '',
    titleOfStudy: '',
    dateOfStudy: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEducation({ ...education, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditing(false);
  };

  return (
    <div className="section-container education-section">
      <h2>Experiencia Educativa</h2>

      {isEditing ? (
        <form onSubmit={handleSubmit} className="cv-form">
          <label>
            Nombre de la escuela:
            <input
              type="text"
              name="schoolName"
              value={education.schoolName}
              onChange={handleChange}
              placeholder="Ej. Universidad de React"
            />
          </label>
          
          <label>
            Título de estudio:
            <input
              type="text"
              name="titleOfStudy"
              value={education.titleOfStudy}
              onChange={handleChange}
              placeholder="Ej. Licenciatura en Sistemas"
            />
          </label>
          
          <label>
            Fecha de estudio:
            <input
              type="text" 
              name="dateOfStudy"
              value={education.dateOfStudy}
              onChange={handleChange}
              placeholder="Ej. 2018 - 2022"
            />
          </label>
          
          <button type="submit">Guardar Educación</button>
        </form>
      ) : (
        /* --- MODO VISTA --- */
        <div className="cv-view">
          <p><strong>Escuela:</strong> {education.schoolName}</p>
          <p><strong>Título:</strong> {education.titleOfStudy}</p>
          <p><strong>Fecha:</strong> {education.dateOfStudy}</p>
          <button onClick={() => setIsEditing(true)}>Editar</button>
        </div>
      )}
    </div>
  );
}

export default Education;