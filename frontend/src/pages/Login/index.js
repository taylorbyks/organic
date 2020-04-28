import React, {useState, useEffect} from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FiLogIn } from 'react-icons/fi'

import api from '../../services/api'
import './styles.css'
import logo from '../../assets/logo.png'
import logotext from '../../assets/text.png'

export default function Login() {
    const  [id, setId] = useState('')
    const  [name, setName] = useState('')
    const  [password, setPassword] = useState('')
    const history = useHistory()
    const [empresaId, setEmpresaId] = useState('');

    useEffect(() => {
        async function loginID() {
    
            try {  
                setEmpresaId(localStorage.getItem('empresaId'));
            
            } catch (error) {
                alert('Erro ao carregar informações. Favor tente mais tarde');
            }
        }
        loginID();
    }, [empresaId]);

    async function handleLogin(e){
        e.preventDefault()

        try {
            const response = await api.post('sessions', { id })
            
            localStorage.setItem('empresaName', response.data.name)
            localStorage.setItem('empresaId', response.data.id)

            history.push('/empresa')
        } catch (err) {
            alert('Falha no login, tente novamente')
        }
    }

    return(
        <div className="login-container">
            <section className="form">
                <img src={logo} />
                <form onSubmit={handleLogin}>
                    <h1>Bem vindo!</h1>
                    <input type="text" placeholder="Nome da Empresa" value={id} onChange={e => setId(e.target.value)}/>
                    <input type="text" placeholder="Senha" value={id} onChange={e => setPassword(e.target.value)}/>
                    <button className="button" type="submit">Entrar</button>
                    <Link className="back-link" to="/register"><FiLogIn size={16} color="#00000" />Cadastrar uma nova empresa</Link>
                </form>
            </section>
            <img src={logotext} />
        </div>
    )
}