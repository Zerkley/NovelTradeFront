import { create } from 'zustand'

const useGlobalStore = create((set,get) => ({
    variables:{
        test: 'Hello World',
        person: {},
        token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjY2MWE5YThjZWE2NDJlNTRlMzc4YzUxOSIsImVtYWlsIjoidGVzdEB0ZXN0LmNvbSIsInBhc3N3b3JkIjoiMTI0NDQ0NCIsIl9fdiI6MCwib2ZmZXJzIjoiNjYxYmMwZWZkOWIwZGM0NDczYmY1MGYwIn0sImlhdCI6MTcxMzg3MjEyMiwiZXhwIjoxNzEzOTU4NTIyfQ.bgrifNYXvJdJRMjeNTLIPkAyWWvYRcOeObJv1j2oWAk',
        userBooks: [],
        userId: '661a9a8cea642e54e378c519',

        allNonBooks: [
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
            {
                "_id": "661bf35b7e3850be609a9035",
                "title": "ESDLA",
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

            {
                "_id": "661bbcb2ab493d375ee92a97",
                "title": "100 años de soledad",
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
            {
                "_id": "661bbcb2ab493d375ee92a97",
                "title": "La reina libertad",
                "type": "string",
                "state": "string",
                "publishedYear": 0,
                "genre": "string",
                "author": "string",
                "size": "string",
                "picture": "string",
                "owner": "661a9a8cea642e54e378c519",
                "__v": 0
            }], 
    
            getProfileInfo: async (userEmail) => {
                    fetch(`https://noveltradeback.onrender.com/users/user/${userEmail}`, {
                        headers: {
                            "Authorization": `Bearer ${get().variables.token}`,
                        }
                    })
                    .then(response => response.json())
                    .then(data => {
                        set(state => ({ variables: { ...state.variables, person: data } }))
                        console.log(get().variables.person)
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
}));


export default useGlobalStore;