import { create } from "zustand";

const UseGlobalStore = create((set, get) => ({
    variables: {
        test: "Hello World",
        person: {},
        usuario: {},
        token: localStorage.getItem("token"),
        userId: localStorage.getItem("userId"),
        singleBookItem: {},

        allNonBooks: [],

        getCrearUsuario: async (email, password) => {
            const myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");

            const raw = JSON.stringify({
                email: email,
                password: password,
            });

            const requestCrearUsuario = {
                method: "POST",
                headers: myHeaders,
                body: raw,
                redirect: "follow",
            };

            await fetch(
                "https://noveltradeback.onrender.com/users/signup",
                requestCrearUsuario
            )
                .then((response) => response.json())
                .then((result) => set({ usuario: result }))
                .catch((error) => console.log("error", error));
        },

        getLogin: async (email, password) => {
            const myHeaders = new Headers();
            myHeaders.append("Content-Type",
                "application/json");

            const raw = JSON.stringify({
                email: email,
                password: password,

            });

            const requestLogin = {
                method: "POST",
                headers: myHeaders,
                body: raw,
                redirect: "follow",
            };

            await fetch(
                "https://noveltradeback.onrender.com/users/login/",
                requestLogin
            )
                .then((response) => {
                    if (!response.ok) {
                        throw new Error("La solicitud no fue exitosa");
                    }
                    return response.json();
                })
                .then((result) => {
                    localStorage.setItem("token", result.token);
                    localStorage.setItem("userId", result.userId);
                    console.log(get().variables.userId);
                })
                .catch((error) => {
                    console.log("error", error);
                    alert("Hubo un error al procesar la solicitud");
                });
        },
        getBooks: async () => {
            await fetch(`https://noveltradeback.onrender.com/books/all/${get().variables.userId}`, {
                headers: {
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


        editBook: async (bookId, title, type, state, publishedYear, genre, author, size) => {
            await fetch(`https://noveltradeback.onrender.com/book/${bookId}`, {
                method: "PATCH",
                headers: {
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
                    size: size
                })
            })
                .then(response => response.json())
                .then(data => console.log(data))
                .catch(error => console.log('Error: ', error));
        },

        deleteBook: async (bookId) => {
            await fetch(`https://noveltradeback.onrender.com/books/book/${bookId}`, {
                method: "DELETE",
                headers: {
                    'Authorization': `Bearer ${get().variables.token}`
                },
            })
                .then(response => {
                    if (response.status === 200) {
                        get().variables.getUserBooks();
                    }
                    return response.json()})
                .then(data => console.log(data))
                .catch(error => console.log('Error: ', error));
        },

        getUserBooks: async () => {
            await fetch(`https://noveltradeback.onrender.com/books/${get().variables.userId}`, {
                headers: {
                    'Authorization': `Bearer ${get().variables.token}`
                }
            })
                .then(response => response.json())
                .then(data => set(state => ({ variables: { ...state.variables, userBooks: data } })))
                .catch(error => console.log('Error: ', error));
        },


        createUserBook: async (title, type, state, publishedYear, genre, author, size) => {
            await fetch(`https://noveltradeback.onrender.com/books/${get().variables.userId}`, {
                method: 'POST',
                headers: {
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
                    size: size
                })
            })
                .then(response => response.json())
                .then(data => console.log(data))
                .catch(error => console.log('Error: ', error));
        },
        getProfileInfo: async () => {
            fetch(`https://noveltradeback.onrender.com/users/user/${localStorage.getItem("userId")}`, {
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

        editUser: async (email, password, name, city, phoneNumber) => {
            await fetch(`https://noveltradeback.onrender.com/users/user/${get().variables.userId}`, {
                method: "PATCH",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${get().variables.token}`
                },
                body: JSON.stringify({
                    email: email,
                    password: password,
                    name: name,
                    city: city,
                    phoneNumber: phoneNumber
                })
            })
                .then(response => response.json())
                .then(data => console.log(data))
                .catch(error => console.log('Error: ', error));
        },
    },
}));

export default UseGlobalStore;
