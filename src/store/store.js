import { create } from 'zustand'

const useGlobalStore = create((set) => ({
    variables:{
        test: 'Hello World',
        person: {}

    },
    functions: {

        /*
        getProfileInfo: (id) => {
            fetch(`https://noveltradeback.onrender.com/users/user/${userId}`)
                .then(response => response.json())
                .then(data => setStore({ person: }))
                .catch(error => console.log('Error', error));
        }
        */

    }
  
}))








export default useGlobalStore;