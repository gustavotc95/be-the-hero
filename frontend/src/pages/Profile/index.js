import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';

import api from '../../services/api';

import './styles.scss';

import logoImg from '../../assets/logo.svg';

export default function Profile() {
  const [incidents, setIncidents] = useState([]);

  const ongId = localStorage.getItem('ongId');
  const ongName = localStorage.getItem('ongName');

  const history = useHistory();

  useEffect(() => {
    api.get('profile', {
      headers: {
        Authorization: ongId,
      }
    }).then(response => {
      setIncidents(response.data);
    })
  }, [ongId]);

  function handleLogout ( ) {
    localStorage.clear();

    history.push('/')
  }

  async function handleDeleteIncident (id) {
    if(window.confirm("Deseja excluir?")){
      try {
        await api.delete(`incidents/delete/${id}`, {
          headers: {
            Authorization: ongId
          }
        });

        setIncidents(incidents.filter(incident => incident.id !== id))
      } catch (error) {
        alert('Erro ao deletar, tente novamente.');
      }
    }
  }

  return (
    <div className="profile-container">
      <header>
        <img src={logoImg} alt="Be The Heroe"/>
        <span>Bem vinda, {ongName}</span>

        <Link to="/incidents/new" className="btn btn-red">
          Casdatrar novo caso 
        </Link>
        <button onClick={handleLogout}>
          <FiPower size={18} color="#e02041" />
          Sair
        </button>
      </header>

      <h1>Casos Cadastrados</h1>

      <ul className="casos">
        {incidents.map(incident => (
          <li className="caso" key={incident.id}>
            <span>Caso:</span>
            <p>{incident.title}</p>
  
            <span>Descrição:</span>
            <p>{incident.description}</p>
  
            <span>Valor:</span>
            <p>{Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(incident.value)}</p>
  
            <button type="button" onClick={ () => handleDeleteIncident(incident.id)}>
              <FiTrash2 size={20} color="#a8a8b3" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
