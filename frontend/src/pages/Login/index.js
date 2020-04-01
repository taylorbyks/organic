import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi'
import './styles.css'
import logo from '../../assets/logo.png'
import api from '../../services/api';

export default function Login() {
    const  [id, setId] = useState('')
    const history = useHistory()

    async function handleLogin(e){
        e.preventDefault()

        try {
            const response = await api.post('sessions', { id })
            
            localStorage.setItem('empresaName', response.data.name)
            localStorage.setItem('empresaId', id)

            history.push('/profile')
        } catch (err) {
            alert('Falha no login, tente novamente')
        }
    }

    return(
        <div className="login-container">
            <section className="form">
                <img src={logo} alt="audicon" />
                <form onSubmit={handleLogin}>
                    <h1>Bem vindo!</h1>
                    <input type="text" placeholder="ID da Empresa" value={id} onChange={e => setId(e.target.value)}/>
                    <button className="button" type="submit">Entrar</button>
                    <Link className="back-link" to="/register"><FiLogIn size={16} color="#00000" />Cadastrar uma nova empresa</Link>
                </form>
            </section>
            <img src={logo} alt="audicon" />
        </div>
    )
}