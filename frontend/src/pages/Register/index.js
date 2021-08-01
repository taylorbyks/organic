import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'

import api from '../../services/api'
import './styles.css'
import logo from '../../assets/logo.png'

export default function Register() {
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [cnpj, setCnpj] = useState('')
  const [whatsapp, setWhatsApp] = useState('')
  const [city, setCity] = useState('')
  const [uf, setUf] = useState('')

  const history = useHistory()

  async function handleRegister(e) {
    e.preventDefault()

    const data = {
      name,
      password,
      email,
      cnpj,
      whatsapp,
      city,
      uf,
    }

    try {
      await api.post('companies', data)

      alert(`Cadastro Efetuado`)
      history.push('/')
    } catch (err) {
      alert('Erro no cadastro, tente novamente')
    }
  }

  return (
    <div className="register-container">
      <div className="content">
        <section>
          <img src={logo} alt="audicon" />

          <h1>Cadastro</h1>
          <p>Faça o cadastro de uma nova empresa</p>
          <Link className="back-link" to="/">
            <FiArrowLeft size={16} color="#00000" />
            Ja tenho cadastro
          </Link>
        </section>
        <form onSubmit={handleRegister}>
          <input placeholder="Nome da empresa" value={name} onChange={(e) => setName(e.target.value)} />
          <input type="password" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)} />
          <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="cnpj" placeholder="Cnpj" value={cnpj} onChange={(e) => setCnpj(e.target.value)} />
          <input placeholder="WhatsApp" value={whatsapp} onChange={(e) => setWhatsApp(e.target.value)} />

          <div className="input-group">
            <input placeholder="Cidade" value={city} onChange={(e) => setCity(e.target.value)} />
            <input placeholder="UF" style={{ width: 80 }} value={uf} onChange={(e) => setUf(e.target.value)} />
          </div>
          <button className="button" type="submit">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  )
}
