import { createStore } from 'vuex'

export default createStore({
  state: {


    contact : [



    ],

    appel :[
        

    ]

    
  },
  getters: {
  },
  mutations: {

    ajoutContact(state, contact){
      
      state.contact.push(contact)

    },

    appelContacts(state, contact){
      
      state.appel.push(contact)
      
    },

   

  },
  actions: {
  },
  modules: {
  }
})
