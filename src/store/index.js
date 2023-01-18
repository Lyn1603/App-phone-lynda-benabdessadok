import { createStore } from 'vuex'

export default createStore({
  state: {


    contact : [



    ]

    
  },
  getters: {
  },
  mutations: {

    ajoutContact(state, contact){
      
      state.contact.push(contact)

    }
  },
  actions: {
  },
  modules: {
  }
})
