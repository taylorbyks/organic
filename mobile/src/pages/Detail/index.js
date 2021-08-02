import React from 'react'
import { View, Text, Image, TouchableOpacity, Linking } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { useNavigation, useRoute } from '@react-navigation/native'
import * as MailComposer from 'expo-mail-composer'

import styles from './styles'
import logoImg from '../../assets/logo.png'

export default function Detail() {
  const navigation = useNavigation()
  const route = useRoute()

  const tasks = route.params.tasks
  const message = `Olá ${tasks.name} estou entrando em contato, pois gostaria de ajudar na tarefa "${tasks.title}"`

  function navigateBack() {
    navigation.goBack()
  }

  function sendMail() {
    MailComposer.composeAsync({
      subject: `Funcionario: ${tasks.title}`,
      recipients: [tasks.email],
      body: message,
    })
  }

  function sendWhatsapp() {
    Linking.openURL(`whatsapp://send?phone=${tasks.whatsapp}&text=${message}`)
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg} style={styles.img} />
        <TouchableOpacity onPress={navigateBack}>
          <Feather name="arrow-left" size={28} color="#0DA41C" />
        </TouchableOpacity>
      </View>
      <View style={styles.tasks}>
        <Text style={[styles.tasksProperty, { margin: 0 }]}>EMPRESA:</Text>
        <Text style={styles.tasksValue}>
          {tasks.name} de {tasks.city}/{tasks.uf}{' '}
        </Text>

        <Text style={styles.tasksProperty}>TAREFA:</Text>
        <Text style={styles.tasksValue}>{tasks.title}</Text>

        <Text style={styles.tasksProperty}>DESCRIÇÃO:</Text>
        <Text style={styles.tasksValue}>{tasks.description}</Text>

        <Text style={styles.tasksProperty}>VALOR:</Text>
        <Text style={styles.tasksValue}>
          {Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(tasks.value)}
        </Text>
      </View>

      <View style={styles.contactbox}>
        <Text style={styles.funcTitle}>Aceitar Tarefa!</Text>

        <Text style={styles.funcDescription}>Entre em contato:</Text>
        <View style={styles.actions}>
          <TouchableOpacity style={styles.action} onPress={sendWhatsapp}>
            <Text style={styles.actionText}>WhatsApp</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.action} onPress={sendMail}>
            <Text style={styles.actionText}>Email</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}
