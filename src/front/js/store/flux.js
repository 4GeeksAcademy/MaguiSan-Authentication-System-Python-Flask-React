const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			//Al refrescarse la pagina, el store vuelve a su estado inical
			message: null,
			
		},
		actions: {
			//Agregando usuarios nuevos (Registro de usuarios)
			signUp: async (dataForm) => {
				try {
					let response = await fetch("https://sturdy-space-potato-g4x5vq4rjjqxfpgpp-3001.app.github.dev/api/signup", {
						method:"POST",
						body: JSON.stringify(dataForm),
						headers:{"content-type":"application/json"}
					})
					let data = await response.json()
					console.log(data)
					if (data.ok) {
						alert(`Welcome ${dataForm.name}`)
					} else {
						alert("Algo salio mal")
					}
				} catch (error) {
					console.error(error)
				}
			},
			//Agregando informacion para ingresar al usuario (Inicio de sesion de usuarios)
			login: async (dataLogin) => {
				try {
					let response = await fetch("https://sturdy-space-potato-g4x5vq4rjjqxfpgpp-3001.app.github.dev/api/login", {
						method:"POST",
						body: JSON.stringify(dataLogin),
						headers:{"content-type":"application/json"}
					})
					let data = await response.json()
					console.log(data)
					//Es mejor guardar los datos en el local storage
					if (data.access_token) {
						alert(`Welcome ${data.name}`)
						localStorage.setItem('token', data.access_token)
						localStorage.setItem('name', data.name)
						localStorage.setItem('token', data.email)
					} else {
						alert("Algo salio mal")
					}
				} catch (error) {
					console.error(error)
				}
			},

			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			getMessage: async () => {
				try{
					// fetching data from the backend
					const resp = await fetch(process.env.BACKEND_URL + "/api/hello")
					const data = await resp.json()
					setStore({ message: data.message })
					// don't forget to return something, that is how the async resolves
					return data;
				}catch(error){
					console.log("Error loading message from backend", error)
				}
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
