import { create } from 'zustand'

const useGlobalStore = create((set, get) => ({
    variables:{
        test: 'Hello World',
        person: {},
        token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjY2MWE5YThjZWE2NDJlNTRlMzc4YzUxOSIsImVtYWlsIjoidGVzdEB0ZXN0LmNvbSIsInBhc3N3b3JkIjoiMTI0NDQ0NCIsIl9fdiI6MCwib2ZmZXJzIjoiNjYxYmMwZWZkOWIwZGM0NDczYmY1MGYwIn0sImlhdCI6MTcxMzg3MjEyMiwiZXhwIjoxNzEzOTU4NTIyfQ.bgrifNYXvJdJRMjeNTLIPkAyWWvYRcOeObJv1j2oWAk',
        userBooks: [],
        userId: '661a9a8cea642e54e378c519',
        userEmail: 'test@test.com',
        bookId: '6621116eb11a848e5598c437',

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

            /* setAllNonBooks: (data) => set({ allNonBooks: data }), */
        

        getBooks: async () => {
                await fetch(`https://noveltradeback.onrender.com/books/all/${get().variables.userId}`,{
                    headers:{
                        'Authorization': `Bearer ${get().variables.token}`
                    }
                })
                .then(response => response.json())
                .then(data => set(state => ({ variables: { ...state.variables, allNonBooks: data } })))
                .catch(error => console.log('Error: ', error));
            },


         getBookInfo: async (bookId) => {
                fetch(`https://noveltradeback.onrender.com/books/book/${get().variables.book_id}`, {
                    headers: {
                        "Authorization": `Bearer ${get().variables.token}`,
                    }
                })
                .then(response => response.json())
                .then(data => {
                    set(state => ({ variables: { ...state.variables, singleBookItem: data } }))
                    console.log(get().variables.singleBookItem)
                })
                .catch(error => console.log('Error: ', error));
            
        }, 



        getUserBooks: async () => {
            await fetch(`https://noveltradeback.onrender.com/books/${get().variables.userId}`,{
                headers:{
                    'Authorization': `Bearer ${get().variables.token}`
                }
            })
            .then(response => response.json())
            .then(data => set(state => ({ variables: { ...state.variables, userBooks: data } })))
            .catch(error => console.log('Error: ', error));
        },

        createUserBook: async (title, type, state, publishedYear, genre, author, size) => {
            await fetch(`https://noveltradeback.onrender.com/books/${get().variables.userId}`,{
                method: 'POST',
                headers:{
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${get().variables.token}`
                },
                body: JSON.stringify({
                    title: title,
                    type: type,
                    state: state,
                    publishedYear: publishedYear,
                    genre: genre,
                    author: author,
                    size: size })
            })
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.log('Error: ', error));
        }
       

            }
        }))  

        

   
  









export default useGlobalStore;