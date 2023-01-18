import { createStore } from 'vuex'

export default createStore({
  state: {
    journal: [

    ],
    contacts: [
      {
        numero: '0601010101',
        pseudo: 'Jean-Quentin'
          
      },
      {
        numero: '0601010102',
        pseudo: 'Jean-Oumar'
      },
      {
        numero: '0601010103',
        pseudo: 'Jean-Victor'
      }
    ]
  },
  getters: {
  },
  mutations: {
    ajoutJournal(state, contact){
      state.journal.push(contact)
    }
  },
  actions: {
  },
  modules: {
  }
})
