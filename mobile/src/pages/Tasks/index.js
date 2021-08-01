import React, { useState, useEffect } from 'react'
import { View, FlatList, Image, Text, TouchableOpacity } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

import logoTXT from '../../assets/logoTXT.png'
import styles from './styles'
import api from '../../services/api'

export default function tasks() {
  const [tasks, setTasks] = useState([])
  const [total, setTotal] = useState(0)
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(false)

  const navigation = useNavigation()

  function navigateToDetail(tasks) {
    navigation.navigate('Detail', { tasks })
  }

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
        <Text style={styles.headerText}>
          Total de <Text style={styles.headerTextBold}>{total} tasks</Text>.
        </Text>
      </View>

      <Text style={styles.title}>Tarefas</Text>

      <FlatList
        data={tasks}
        style={styles.tasksList}
        keyExtractor={(task) => String(task.id)}
        showsVerticalScrollIndicator={false}
        onEndReached={loadTasks}
        onEndReachedThreshold={0.2}
        renderItem={({ item: task }) => (
          <View style={styles.tasks}>
            <Text style={styles.tasksProperty}>EMPRESA:</Text>
            <Text style={styles.tasksValue}>{task.name}</Text>

            <Text style={styles.tasksProperty}>TAREFA:</Text>
            <Text style={styles.tasksValue}>{task.title}</Text>

            <Text style={styles.tasksProperty}>VALOR:</Text>
            <Text style={styles.tasksValue}>
              {Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(task.value)}
            </Text>

            <TouchableOpacity style={styles.detailsButton} onPress={() => navigateToDetail(task)}>
              <Text style={styles.detailsButtonText}>Ver mais detalhes</Text>
              <Feather name="arrow-right" size={16} color="#0DA41C" />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  )
}
