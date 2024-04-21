import { create } from 'zustand'

const useGlobalStore = create((set) => ({
    variables:{
        test: 'Hello World',
        person: {},

        allNonBooks: [],

        singleBookItem:
            {
                "_id": "661bbcb2ab493d375ee92a97",
                "title": "harry potter",
                "type": "string",
                "state": "string",
                "publishedYear": 0,
                "genre": "string",
                "author": "string",
                "size": "string",
                "picture": "string",
                "owner": "661a9a8cea642e54e378c519",
                "__v": 0
            },

            setAllNonBooks: (data) => set({ allNonBooks: data }),


        getBooks: async (id, token) => {

            fetch(`https://noveltradeback.onrender.com/books/all/${id}`, {
                headers: {
                    "Authorization": `Bearer ${token}`,
                }
            })
            .then(response => response.json())
            .then(data => {
                
                console.log(data)
                return data
            })
            .catch(error => console.log('Error: ', error));


        },


        /* getSingleContact: (id) => {
            fetch(`https://playground.4geeks.com/apis/fake/contact/${id}`) 
                .then(response => response.json())
                .then(data => setStore({contact:data}))
                .catch(error => console.log('Error: ', error))
            
        },  */
       

            }
        }))  

        /*
        getProfileInfo: (id) => {
            fetch(`https://noveltradeback.onrender.com/users/user/${userId}`)
                .then(response => response.json())
                .then(data => setStore({ person: }))
                .catch(error => console.log('Error', error));
        }
        */

   
  









export default useGlobalStore;