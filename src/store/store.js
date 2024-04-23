import { create } from 'zustand'

const useGlobalStore = create((set,get) => ({
    variables:{
        test: 'Hello World',
        person: {},
        token: '',

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
            },
            {
                getProfileInfo: async (id) => {
                    fetch(`https://noveltradeback.onrender.com/users/user/{userEmail}`, {
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
                
            }
        }

    ]
}
}));


export default useGlobalStore;