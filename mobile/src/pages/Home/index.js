import React, { useState, useEffect } from 'react'
import { View, FlatList, Image, Text, TouchableOpacity } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'

import styles from './styles'
import logoTXT from '../../assets/logoTXT.png'
import api from '../../services/api'

export default function Detail() {
  const [tasks, setTasks] = useState([])
  const [total, setTotal] = useState(0)
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(false)
  const navigation = useNavigation()

  async function loadTasks() {
    if (loading) {
      return
    }

    if (total > 0 && tasks.length === total) {
      return
    }
    setLoading(true)

    const response = await api.get('tasks', {
      params: { page },
    })
    setTasks([...tasks, ...response.data])
    setTotal(response.headers['x-total-count'])
    setPage(page + 1)
    setLoading(false)
  }

  useEffect(() => {
    loadTasks()
  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoTXT} style={styles.img} />
      </View>
      <View style={styles.containerButton}>
        <TouchableOpacity style={styles.listButtonMax} onPress={() => navigation.navigate('Tasks')}>
          <Text style={styles.tasksProperty}>Tarefas</Text>
          <Text style={styles.tasksValue}>{total} tarefas</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.listButton} onPress={() => navigation.navigate('ListProfile')}>
          <Text style={styles.tasksProperty}>Empresas</Text>
          <Text style={styles.tasksValue}>{total} empresas</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
