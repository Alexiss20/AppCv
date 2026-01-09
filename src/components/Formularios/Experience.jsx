import { useState } from 'react';
import '../styles/general.css'; 

function Experience() {
  const [isEditing, setIsEditing] = useState(true);


  const [experience, setExperience] = useState({
    companyName: '',
    positionTitle: '',
    mainResponsibilities: '',
    dateFrom: '',
    dateUntil: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setExperience({ ...experience, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditing(false);
  };

  return (
    <div className="section-container experience-section">
      <h2>Experiencia Práctica</h2>

      {isEditing ? (
        <form onSubmit={handleSubmit} className="cv-form">
          <label>
            Nombre de la empresa:
            <input
              type="text"
              name="companyName"
              value={experience.companyName}
              onChange={handleChange}
            />
          </label>

          <label>
            Título del puesto:
            <input
              type="text"
              name="positionTitle"
              value={experience.positionTitle}
              onChange={handleChange}
            />
          </label>

          <label>
            Responsabilidades principales:
            <textarea
              name="mainResponsibilities"
              value={experience.mainResponsibilities}
              onChange={handleChange}
              rows="4"
            />
          </label>

          <div className="date-group">
            <label>
              Desde:
              <input
                type="date"
                name="dateFrom"
                value={experience.dateFrom}
                onChange={handleChange}
              />
            </label>
            
            <label>
              Hasta:
              <input
                type="date"
                name="dateUntil"
                value={experience.dateUntil}
                onChange={handleChange}
              />
            </label>
          </div>

          <button type="submit">Guardar Experiencia</button>
        </form>
      ) : (
        <div className="cv-view">
          <h3>{experience.positionTitle} en {experience.companyName}</h3>
          <p><strong>Duración:</strong> {experience.dateFrom} - {experience.dateUntil}</p>
          <p><strong>Responsabilidades:</strong></p>
          <p className="responsibilities-text">{experience.mainResponsibilities}</p>
          
          <button onClick={() => setIsEditing(true)}>Editar</button>
        </div>
      )}
    </div>
  );
}

export default Experience;