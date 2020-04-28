import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi'

import api from '../../services/api'
import './styles.css'
import logo from '../../assets/logo.png'

export default function Register() {
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [whatsapp, setWhatsApp] = useState('')
    const [city, setCity] = useState('')
    const [uf, setUf] = useState('')
    
    const history = useHistory()

    async function handleRegister(e){
        e.preventDefault()

        const data = {
            name, password, email, whatsapp, city, uf
        }

        const response = await api.post('empresas', data)
        try {
            const response = await api.post('empresas', data)

            alert(`Cadastro Efetuado, seu ID de acesso: ${response.data.id}`)
            history.push('/')
        } catch (err) {
        alert('Erro no cadastro, tente novamente')
        }
    }
    
    return(
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logo} alt="audicon" />
                
                    <h1>Cadastro</h1>
                    <p>Faça o cadastro de uma nova empresa</p>
                    <Link className="back-link" to="/"><FiArrowLeft size={16} color="#00000" />Ja tenho cadastro</Link>
                 </section> 
                 <form onSubmit={handleRegister}>
                    <input placeholder="Nome da empresa"  value={name} onChange={e => setName(e.target.value)}/>
                    <input placeholder="Senha"  value={password} onChange={e => setPassword(e.target.value)}/>
                    <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)}/>
                    <input placeholder="WhatsApp" value={whatsapp} onChange={e => setWhatsApp(e.target.value)}/>
                    
                    <div className="input-group">
                        <input placeholder="Cidade" value={city} onChange={e => setCity(e.target.value)}/>
                        <input placeholder="UF" style={{ width: 80 }} value={uf} onChange={e => setUf(e.target.value)}/>
                    </div>
                    <button className="button" type="submit">Cadastrar</button>
                 </form>
            </div>
        </div>
    )
}