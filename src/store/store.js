import { create } from "zustand";

const UseGlobalStore = create((set) => ({
  variables: {
    test: "Hello World",
    person: {},
    usuario: {},
    token: "",

    allNonBooks: [
      {
        _id: "661bbcb2ab493d375ee92a97",
        title: "harry potter",
        type: "string",
        state: "string",
        publishedYear: 0,
        genre: "string",
        author: "string",
        size: "string",
        picture: "string",
        owner: "661a9a8cea642e54e378c519",
        __v: 0,
      },
      {
        _id: "661bf35b7e3850be609a9035",
        title: "ESDLA",
        type: "string",
        state: "string",
        publishedYear: 0,
        genre: "string",
        author: "string",
        size: "string",
        picture: "string",
        owner: "661a9a8cea642e54e378c519",
        __v: 0,
      },
      {
        _id: "661bbcb2ab493d375ee92a97",
        title: "100 años de soledad",
        type: "string",
        state: "string",
        publishedYear: 0,
        genre: "string",
        author: "string",
        size: "string",
        picture: "string",
        owner: "661a9a8cea642e54e378c519",
        __v: 0,
      },
      {
        _id: "661bbcb2ab493d375ee92a97",
        title: "La reina libertad",
        type: "string",
        state: "string",
        publishedYear: 0,
        genre: "string",
        author: "string",
        size: "string",
        picture: "string",
        owner: "661a9a8cea642e54e378c519",
        __v: 0,
      },
    ],
  },
  functions: {
    getCrearUsuario: (email, password) => {
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

      fetch(
        "https://noveltradeback.onrender.com/users/signup",
        requestCrearUsuario
      )
        .then((response) => response.json())
        .then((result) => set({ usuario: result }))
        .catch((error) => console.log("error", error));
    },

    getLogin: (email, password) => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
      
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
      
        fetch(
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
            set({ token: result.token });
            console.log(token); 
          })
          .catch((error) => {
            console.log("error", error);
            alert("Hubo un error al procesar la solicitud");
          });
      },
  },
}));

export default UseGlobalStore;
