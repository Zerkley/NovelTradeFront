import { create } from "zustand";

const UseGlobalStore = create((set, get) => ({
    variables: {
        test: "Hello World",
        person: {},
        usuario: {},
        token: "",
        userBooks: [],
        userId: '',

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
                    set(state => ({ variables: { ...state.variables, token: result.token, userId: result.userId } }))
                    console.log(get().variables.token);
                })
                .catch((error) => {
                    console.log("error", error);
                    alert("Hubo un error al procesar la solicitud");
                });
        },
    },
}));

export default UseGlobalStore;
