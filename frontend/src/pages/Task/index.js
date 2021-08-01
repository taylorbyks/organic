import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'

import api from '../../services/api'
import './styles.css'
import logo from '../../assets/logo.png'

export default function Task() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [value, setValue] = useState('')
  const companyId = localStorage.getItem('companyId')

  const history = useHistory()

  async function handleTask(e) {
    e.preventDefault()

    const data = {
      title,
      description,
      value,
    }


    console.log(companyId);


    try {
      await api.post('tasks', data, {
        headers: {
          Authorization: companyId,
        }
      })
      history.push('/company')
    } catch (err) {
      alert('Erro tente novamente')
    }
  }

  return (
    <div className="new-task">
      <div className="content">
        <section>
          <img src={logo} alt="audicon" />

          <h1>Cadastrar nova task</h1>
          <p>Faça o cadastro de uma nova task</p>
          <Link className="back-link" to="/company">
            <FiArrowLeft size={16} color="#00000" />
            Voltar para a pagina inicial
          </Link>
        </section>
        <form onSubmit={handleTask}>
          <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Nome" />
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Descrição" />
          <input value={value} onChange={(e) => setValue(e.target.value)} placeholder="Valor" />

          <button className="button" type="submit">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  )
}
