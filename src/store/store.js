import { create } from 'zustand'

const useGlobalStore = create((set) => ({
    variables:{
        test: 'Hello World',
        allNonBooks: [
            {
                "_id": "661bbcb2ab493d375ee92a97",
                "title": "string",
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
                "title": "string",
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
    }
  
}))

export default useGlobalStore;