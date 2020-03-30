import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';

import './styles.scss';

import logoImg from '../../assets/logo.svg';

export default function NewIncident() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');

  const ongId = localStorage.getItem('ongId');

  const history = useHistory();

  async function handleNewIncident (e) {
    e.preventDefault();

    const data = {
      title, 
      description, 
      value
    };

    try {
      await api.post('incidents', data, {
        headers: {
          Authorization: ongId
        }
      });
      
      history.push('/profile');
      
    } catch(err) {
      alert(`Erro no cadastro, por favor tente novamente.`);
    }
  }

  return (
    <div className="new-incident-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Be The Heroe"/>

          <h1>Cadastrar novo caso</h1>
          
          <p>Descreva o caso detalhadamente para encontar um herói para resolver isso.</p>

          <Link to="/profile" className="link-icon">
            <FiArrowLeft size={16} color="#e02041"/>
            Voltar
          </Link>
        </section>

        <form onSubmit={handleNewIncident}>
          <input 
            type="text" 
            placeholder="Título do caso"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
          <textarea 
            placeholder="Descrição" 
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
          <input 
            type="text" 
            placeholder="Valor em reais"
            value={value}
            onChange={e => setValue(e.target.value)}
          />

          <button type="submit" className="btn btn-red">Cadastrar</button>
        </form>
      </div>
    </div>
  );
}
