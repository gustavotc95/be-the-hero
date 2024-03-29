import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';

import './styles.scss';

import logoImg from '../../assets/logo.svg';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsApp] = useState('');
  const [city, setCity] = useState('');
  const [uf, setUf] = useState('');

  const history = useHistory();

  async function handleRegister(e) {
    e.preventDefault();

    const data = {
      name, 
      email, 
      whatsapp, 
      city, 
      uf
    };

    try {
      const response =  await api.post('ongs', data);

      alert(`Seu ID de acesso é ${response.data.id}`);
      
      history.push('/')
    } catch(err) {
      alert(`Erro no cadastro, por favor tente novamente.`);
    }


  }

  return (
    <div className="register-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Be The Heroe"/>

          <h1>Cadastro</h1>
          
          <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG</p>

          <Link to="/" className="link-icon">
            <FiArrowLeft size={16} color="#e02041"/>
            Voltar para o Login
          </Link>
        </section>

        <form onSubmit={handleRegister}>
          <input 
            type="text" 
            placeholder="Nome da ONG"
            value={name}
            onChange={ e => setName(e.target.value) }
          />
          <input 
            type="email" 
            placeholder="E-mail"
            value={email}
            onChange={ e => setEmail(e.target.value) }
          />
          <input 
            type="text" 
            placeholder="WhatsApp"
            value={whatsapp}
            onChange={ e => setWhatsApp(e.target.value) }
          />

          <div className="input-group">
            <input 
              type="text" 
              placeholder="Cidade" 
              value={city}
              onChange={ e => setCity(e.target.value) }
            />
            <input 
              type="text" 
              placeholder="UF" 
              style={ {width: 80} } 
              value={uf}
              onChange={ e => setUf(e.target.value) }
            />
          </div>

          <button type="submit" className="btn btn-red">Cadastrar</button>
        </form>
      </div>
    </div>
  );
}