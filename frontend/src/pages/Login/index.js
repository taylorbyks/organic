import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FiLogIn } from 'react-icons/fi'

import api from '../../services/api'
import './styles.css'
import logo from '../../assets/logo.png'
import logotext from '../../assets/text.png'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const history = useHistory()
  const [companyId, setCompanyId] = useState('')

  useEffect(() => {
    async function loginID() {
      try {
        setCompanyId(localStorage.getItem('companyId'))
      } catch (error) {
        alert('Erro ao carregar informações. Favor tente mais tarde')
      }
    }
    loginID()
  }, [companyId])

  async function handleLogin(e) {
    e.preventDefault()

    try {
      const response = await api.post('sessions', { email, password })

      localStorage.setItem('companyName', response.data.name)
      localStorage.setItem('companyId', response.data.id)

      history.push('/company')
    } catch (err) {
      alert('Falha no login, tente novamente')
    }
  }

  return (
    <div className="login-container">
      <section className="form">
        <img src={logo} alt="Organic"/>
        <form onSubmit={handleLogin}>
          <h1>Bem vindo!</h1>
          <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="password" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)} />
          <button className="button" type="submit">
            Entrar
          </button>
          <Link className="back-link" to="/register">
            <FiLogIn size={16} color="#00000" />
            Criar uma conta
          </Link>
        </form>
      </section>
      <img src={logotext} alt="Organic"/>
    </div>
  )
}
