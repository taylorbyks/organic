import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FiPower, FiTrash2, FiEdit2 } from 'react-icons/fi'

import api from '../../services/api'
import './styles.css'
import logo from '../../assets/logo.png'

export default function Profiles() {
  const [tasks, setTask] = useState([])

  const history = useHistory()

  const companyId = localStorage.getItem('companyId')
  const companyName = localStorage.getItem('companyName')

  useEffect(() => {
    api.get('company', { headers: { Authorization: companyId } }).then((response) => {
      setTask(response.data)
    })
  }, [companyId])

  async function handleDeleteIncident(id) {
    try {
      await api.delete(`tasks/${id}`, {
        headers: {
          Authorization: companyId,
        },
      })

      setTask(tasks.filter((tasks) => tasks.id !== id))
    } catch (err) {
      alert('Erro ao deletar caso, tente novamente')
    }
  }

  function handleGoPageUpdate(id) {
    history.push(`/tasks/update/${id}`)
  }

  function handleLogout() {
    localStorage.clear()
    history.push('/')
  }

  return (
    <div className="profile-container">
      <header>
        <img src={logo} alt="audicon" />
        <span>{companyName}</span>
        <Link className="button" to="/tasks/nova">
          Cadastrar nova task
        </Link>
        <button type="button" onClick={handleLogout}>
          <FiPower size={18} color="#0DA41C" />
        </button>
      </header>
      <h1>Tarefas Cadastradas</h1>
      <ul>
        {tasks.map((tasks) => (
          <li key={tasks.id}>
            <strong>TAREFA:</strong>
            <p>{tasks.title}</p>

            <strong>DESCRIÇÃO:</strong>
            <p>{tasks.description}</p>

            <strong>VALOR:</strong>
            <p>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(tasks.value)}</p>

            <button onClick={() => handleDeleteIncident(tasks.id)} type="button">
              <FiTrash2 size={20} color="#0DA41C" />
            </button>
            <button onClick={() => handleGoPageUpdate(tasks.id)} className="button-update" type="button">
              <FiEdit2 size={20} color="#0DA41C" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
