import React, { useState, useEffect } from 'react'
import { View, FlatList, Image, Text, TouchableOpacity } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

import logoTXT from '../../assets/logoTXT.png'
import styles from './styles'
import api from '../../services/api'

export default function empresas() {
    const [empresas, setTasks] = useState([])
    const [total, setTotal] = useState(0)
    const [page, setPage] = useState(1)
    const [loading, setLoading] = useState(false)

    const navigation = useNavigation()

    function navigateToDetail(empresas) {
        navigation.navigate('Detail', {empresas})
    }

    async function loadTasks() {
        if(loading){
            return 
        }

        if(total > 0 && empresas.length === total){
            return 
        }
        setLoading(true)

        const response = await api.get('empresas', {
            params: { page }
        })
        setTasks([...empresas,...response.data])
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
                    Total de <Text style={styles.headerTextBold}>{total} empresas</Text>.
                </Text>
            </View>

            <Text style={styles.title}>Empresas</Text>

            <FlatList
                data={empresas}
                style={styles.tasksList}
                keyExtractor={empresa => String(empresa.id)}
                showsVerticalScrollIndicator={false}
                onEndReached={loadTasks}
                onEndReachedThreshold={0.2}
                renderItem={({ item: empresa }) => (
                    <View style={styles.tasks}>
                        <Text style={styles.tasksProperty}>EMPRESA:</Text>
                        <Text style={styles.tasksValue}>{empresa.name}</Text>

                        <Text style={styles.tasksProperty}>EMAIL:</Text>
                        <Text style={styles.tasksValue}>{empresa.email}</Text>

                        <Text style={styles.tasksProperty}>CIDADE:</Text>
                        <Text style={styles.tasksValue}>{empresa.city})}</Text>

                        <TouchableOpacity
                            style={styles.detailsButton}
                            onPress={ () => navigateToDetail(empresa)}
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