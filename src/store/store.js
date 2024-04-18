import { create } from 'zustand'

const useGlobalStore = create((set) => ({
    variables:{
        test: 'Hello World',
        person: {},

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
            }
        ]
    },
    functions: {

        /*
        getProfileInfo: (id) => {
            fetch(`https://noveltradeback.onrender.com/users/user/{userId}`)
                .then(response => response.json())
                .then(data => set({ person: data.}))
                .catch(error => console.log('Error', error));
        }
        
*/

getProfileInfo: (id) => {
    const myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjY2MjE2MjliOGZiNGRmZmExYzc3MzBmZCIsImVtYWlsIjoia3NqZGhmanNoZGZqayIsInBhc3N3b3JkIjoiYXNkZkFGQVNERkdBU1FGRyIsIl9fdiI6MH0sImlhdCI6MTcxMzQ2NDAwMiwiZXhwIjoxNzEzNTUwNDAyfQ.cKhgIGCWUZcGDX7UqDRfdGlKf3uYeoW2YfpT3zMLSck");
    myHeaders.append("Content-Type", "application/json");
    
    const raw = JSON.stringify({
        // email: email, // Assuming this comes from somewhere
        // id: id, // Assuming this is provided as a parameter
    });

    const requestInfo = {
        method: 'PATCH',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    fetch(`https://noveltradeback.onrender.com/users/user/${id}`, requestInfo)
    .then(response => response.json())
    .then(result => {
        console.log('Response from server:', result);
        set({ person: result });
    })
    .catch(error => console.log('error', error));
}
}
}));


export default useGlobalStore;