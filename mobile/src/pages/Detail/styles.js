import { StyleSheet } from 'react-native'
import Constants from 'expo-constants'

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight + 10,
  },

  img: {
    width: 73,
    height: 63,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  tasks: {
    padding: 24,
    borderRadius: 8,
    backgroundColor: '#FFF',
    marginBottom: 16,
    marginTop: 28,
  },

  tasksProperty: {
    fontSize: 14,
    color: '#41414d',
    fontWeight: 'bold',
  },

  tasksValue: {
    marginTop: 8,
    fontSize: 15,
    marginBottom: 24,
    color: '#737380',
  },

  contactbox: {
    padding: 24,
    borderRadius: 8,
    backgroundColor: '#FFF',
    marginBottom: 16,
  },

  funcTitle: {
    fontWeight: 'bold',
    fontSize: 20,
    lineHeight: 30,
  },

  funcDescription: {
    fontSize: 15,
    color: '#737380',
    marginTop: 16,
  },

  actions: {
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  action: {
    backgroundColor: '#0DA41C',
    borderRadius: 8,
    height: 50,
    width: '48%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  actionText: {
    color: '#FFF',
    fontSize: 15,
    fontWeight: 'bold',
  },
})
