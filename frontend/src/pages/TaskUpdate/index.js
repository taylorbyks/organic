import React, { useState, useEffect } from 'react'
import logo from '../../assets/logo.png'
import { Link, useHistory } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'
import api from '../../services/api'

import './styles.css'

export default function UpdateTask({ match }) {
    const [tarefas, setTarefas] = useState([])
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [value, setValue] = useState('')


    const history = useHistory()
    const empresaId = localStorage.getItem('empresaId')
    const paramsId = match.params.id

async function loadTarefasForUpdates() {
            
            try {
                const response = await api.get(`/tarefas/${paramsId}`)
                setTitle(response.data.title)
                setDescription(response.data.description)
                setValue(response.data.value)
            } catch (err) {
                alert('Erro ao carregar informações. Favor tente mais tarde')
            }
        }

    useEffect(() => {
        loadTarefasForUpdates()
    }, [])

    async function handleUpdateTarefas(e) {
        e.preventDefault()

        try {
            

            await api.put(`tarefas/${paramsId}`, {  
                title,
                description,
                value,
                empresaId
            })

            setTarefas(tarefas.filter(tarefas => tarefas.id !== paramsId));
            history.push('/empresa')
        } catch (err) {
            alert('Erro ao editar registro, tente novamente')
        }


    }

    return (
        <div className="update-tarefa-container">
            <div className="content">
                <section>
                    <img src={logo} />

                    <h1>Atualizar tarefa</h1>
                    
                    <Link className="back-link" to="/empresa">
                        <FiArrowLeft size={16} color="0DA41C" />
                        Voltar
                    </Link>
                </section>
                <form onSubmit={handleUpdateTarefas} >
                    <input
                        placeholder="Título da tarefa"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                    />
                    <textarea
                        placeholder="Descrição"
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    />
                    <input
                        placeholder="Valor"
                        value={value}
                        onChange={e => setValue(e.target.value)}
                    />

                    <button className="button" type="submit">Salvar</button>
                </form>
            </div>
        </div>
    );
}