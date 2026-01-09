import { useState } from 'react';
import '../styles/general.css'; 

function GeneralInfo() {
  const [isEditing, setIsEditing] = useState(true);

  const [person, setPerson] = useState({
    name: '',
    email: '',
    phone: ''
  });

  // Función para manejar cambios en los inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setPerson({ ...person, [name]: value });
  };

  // Función para guardar (Enviar)
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditing(false); // Cambiamos a modo "Vista"
  };

  // Función para editar de nuevo
  const handleEdit = () => {
    setIsEditing(true); // 
  };

  return (
    <div className="general-info-container">
      <h2>Información General</h2>
      
      {isEditing ? (
        <form onSubmit={handleSubmit} className="cv-form">
          <label>
            Nombre:
            <input 
              type="text" 
              name="name" 
              value={person.name} 
              onChange={handleChange} 
            />
          </label>
          <label>
            Email:
            <input 
              type="email" 
              name="email" 
              value={person.email} 
              onChange={handleChange} 
            />
          </label>
          <label>
            Teléfono:
            <input 
              type="tel" 
              name="phone" 
              value={person.phone} 
              onChange={handleChange} 
            />
          </label>
          <button type="submit">Enviar</button>
        </form>
      ) : (
        <div className="cv-view">
          <p><strong>Nombre:</strong> {person.name}</p>
          <p><strong>Email:</strong> {person.email}</p>
          <p><strong>Teléfono:</strong> {person.phone}</p>
          <button onClick={handleEdit}>Editar</button>
        </div>
      )}
    </div>
  );
}

export default GeneralInfo;