import React, { useState, useEffect } from 'react'
import { View, FlatList, Image, Text, TouchableOpacity } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

import logoTXT from '../../assets/logoTXT.png'
import styles from './styles'
import api from '../../services/api'

export default function tarefass() {
    const [tarefas, setTasks] = useState([])
    const [total, setTotal] = useState(0)
    const [page, setPage] = useState(1)
    const [loading, setLoading] = useState(false)

    const navigation = useNavigation()

    function navigateToDetail(tarefas) {
        navigation.navigate('Detail', {tarefas})

    }

    async function loadTasks() {
        if(loading){
            return
        }

        if(total > 0 && tarefas.length === total){
            return
        }

        setLoading(true)

        const response = await api.get('tarefas', {
            params: { page }
        })
        setTasks([ ... tarefas, ... response.data])
        setTotal(response.headers['x-total-count'])
        setPage(page + 1 )
        setLoading(false)
    }

    useEffect(() => {
        loadTasks()
    }, [])

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoTXT} style={styles.img}/>
                <Text style={styles.headerText}>
                    Total de <Text style={styles.headerTextBold}>{total} tarefas</Text>.
                </Text>
            </View>

            <Text style={styles.title}>Tarefas</Text>

            <FlatList
                data={tarefas}
                style={styles.tasksList}
                keyExtractor={tarefa => String(tarefa.id)}
                showsVerticalScrollIndicator={false}
                onEndReached={loadTasks}
                onEndReachedThreshold={0.2}
                renderItem={({ item: tarefa }) => (
                    <View style={styles.tasks}>
                        <Text style={styles.tasksProperty}>EMPRESA:</Text>
                        <Text style={styles.tasksValue}>{tarefa.name}</Text>

                        <Text style={styles.tasksProperty}>TAREFA:</Text>
                        <Text style={styles.tasksValue}>{tarefa.title}</Text>

                        <Text style={styles.tasksProperty}>VALOR:</Text>
                        <Text style={styles.tasksValue}>{Intl.NumberFormat
                            ('pt-BR', { style: 'currency', currency: 'BRL' }).format(tarefa.value)}</Text>

                        <TouchableOpacity
                            style={styles.detailsButton}
                            onPress={ () => navigateToDetail(tarefa)}
                        >
                            <Text style={styles.detailsButtonText}>Ver mais detalhes</Text>
                            <Feather name="arrow-right" size={16} color="#0DA41C" />
                        </TouchableOpacity>
                    </View>
                )}
            />
        </View>
    );
}