import React, { useState, useEffect } from 'react'
import { View, FlatList, Image, Text, TouchableOpacity } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

import logoTXT from '../../assets/logoTXT.png'
import styles from './styles'
import api from '../../services/api'

export default function companies() {
  const [companies, setTasks] = useState([])
  const [total, setTotal] = useState(0)
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(false)

  const navigation = useNavigation()

  function navigateToDetail(companies) {
    navigation.navigate('Detail', { companies })
  }

  async function loadTasks() {
    if (loading) {
      return
    }

    if (total > 0 && companies.length === total) {
      return
    }
    setLoading(true)

    const response = await api.get('companies', {
      params: { page },
    })
    setTasks([...companies, ...response.data])
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
          Total de <Text style={styles.headerTextBold}>{total} empresas</Text>.
        </Text>
      </View>

      <Text style={styles.title}>Empresas</Text>

      <FlatList
        data={companies}
        style={styles.tasksList}
        keyExtractor={(company) => String(company.id)}
        showsVerticalScrollIndicator={false}
        onEndReached={loadTasks}
        onEndReachedThreshold={0.2}
        renderItem={({ item: company }) => (
          <View style={styles.tasks}>
            <Text style={styles.tasksProperty}>EMPRESA:</Text>
            <Text style={styles.tasksValue}>{company.name}</Text>

            <Text style={styles.tasksProperty}>EMAIL:</Text>
            <Text style={styles.tasksValue}>{company.email}</Text>

            <Text style={styles.tasksProperty}>CIDADE:</Text>
            <Text style={styles.tasksValue}>{company.city})</Text>

            <TouchableOpacity style={styles.detailsButton} onPress={() => navigateToDetail(company)}>
              <Text style={styles.detailsButtonText}>Ver mais detalhes</Text>
              <Feather name="arrow-right" size={16} color="#0DA41C" />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  )
}
