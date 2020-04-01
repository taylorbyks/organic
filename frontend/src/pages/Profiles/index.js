import React, {useEffect, useState}  from 'react'
import { Link, useHistory } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi'

import api from '../../services/api'

import './styles.css'
import logo from '../../assets/logo.png'

export default function Profiles() {
    const [tarefas, setTask] = useState([])

    const history = useHistory()

    const empresaId = localStorage.getItem('empresaId')
    const empresaName = localStorage.getItem('empresaName')

    useEffect(()=> {api.get('profile', {headers: { Authorization: empresaId,}}).then(response =>{ setTask(response.data) })}, [empresaId])
    
    async function handleDeleteIncident(id){
        try {
            await api.delete(`tarefas/${id}`, {
                headers: {
                    Authorization: empresaId,
                }
            })

            setTask(tarefas.filter(tarefas => tarefas.id !== id))
        } catch (err){
            alert('Erro ao deletar caso, tente novamente')
        }

    }

    function handleLogout(){
        localStorage.clear()
        history.push('/')
    }

    return(
        <div className="profile-container">
            <header>
                <img src={logo} alt="audicon" />
                <span>{empresaName}</span>
                <Link className="button" to="/task/new" >Cadastrar nova tarefa</Link>
                <button type="button" onClick={handleLogout}><FiPower size={18} color="#0DA41C" /></button>
            </header>
            <h1>Tarefas Cadastradas</h1>
            <ul>
               {tarefas.map(tarefas => ( 
               <li key={tarefas.id}>
                    <strong>TAREFA:</strong>
                    <p>{tarefas.title}</p>

                    <strong>DESCRIÇÃO:</strong>
                    <p>{tarefas.description}</p>

                    <strong>VALOR:</strong>
                    <p>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(tarefas.value)}</p>

                    <button onClick={() => handleDeleteIncident(tarefas.id)} type="button"><FiTrash2 size={20} color=" rgb(25, 77, 141) " /></button>
                </li>
                ))}
            </ul>
        </div>
    )
}