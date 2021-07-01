import React, { useState, useEffect } from 'react'
import logo from '../../assets/logo.png'
import { Link, useHistory } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'
import api from '../../services/api'

import './styles.css'

export default function UpdateTask({ match }) {
  const [tasks, setTasks] = useState([])
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [value, setValue] = useState('')

  const history = useHistory()
  const companyId = localStorage.getItem('companyId')
  const paramsId = match.params.id

  async function loadTasksForUpdates() {
    try {
      const response = await api.get(`/tasks/${paramsId}`)
      setTitle(response.data.title)
      setDescription(response.data.description)
      setValue(response.data.value)
    } catch (err) {
      alert('Erro ao carregar informações. Favor tente mais tarde')
    }
  }

  useEffect(() => {
    loadTasksForUpdates()
  }, [])

  async function handleUpdateTasks(e) {
    e.preventDefault()

    try {
      await api.put(`tasks/${paramsId}`, {
        title,
        description,
        value,
        companyId,
      })

      setTasks(tasks.filter((tasks) => tasks.id !== paramsId))
      history.push('/company')
    } catch (err) {
      alert('Erro ao editar registro, tente novamente')
    }
  }

  return (
    <div className="update-task-container">
      <div className="content">
        <section>
          <img src={logo} alt="Organic"/>

          <h1>Atualizar task</h1>

          <Link className="back-link" to="/company">
            <FiArrowLeft size={16} color="0DA41C" />
            Voltar
          </Link>
        </section>
        <form onSubmit={handleUpdateTasks}>
          <input placeholder="Título da task" value={title} onChange={(e) => setTitle(e.target.value)} />
          <textarea placeholder="Descrição" value={description} onChange={(e) => setDescription(e.target.value)} />
          <input placeholder="Valor" value={value} onChange={(e) => setValue(e.target.value)} />

          <button className="button" type="submit">
            Salvar
          </button>
        </form>
      </div>
    </div>
  )
}
