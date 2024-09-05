const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			//Al refrescarse la pagina, el store vuelve a su estado inical
			message: null,
			usersList: [],
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
						alert(`Account created successfully! Welcome ${dataForm.name}!`)
					} else {
						alert("Something went wrong")
					}
				} catch (error) {
					console.error(error)
				}
			},
			//Ingresando datos del usuario (Inicio de sesion de usuarios)
			login: async (dataLogin) => {
				try {
					let response = await fetch("https://sturdy-space-potato-g4x5vq4rjjqxfpgpp-3001.app.github.dev/api/login", {
						method:"POST",
						body: JSON.stringify(dataLogin),
						headers:{"content-type":"application/json"}
					})
					let data = await response.json()
					console.log(data)
					//Es mejor guardar los datos en el local storage para luego acceder a ellos
					if (data.access_token) {
						alert(`Welcome ${data.name}`)
						localStorage.setItem('token', data.access_token)
						localStorage.setItem('name', data.name)
						localStorage.setItem('email', data.email)
					} else {
						alert("Something went wrong")
					}
				} catch (error) {
					console.error(error)
				}
			},
			//Obteniendo Lista de usuarios desde un usuario logueado
			getUsersList: async() => {
				let token = localStorage.getItem('token')
				if (!token) {
					alert("First log in to get a token")
					return
				}
				try {
					let response = await fetch("https://sturdy-space-potato-g4x5vq4rjjqxfpgpp-3001.app.github.dev/api/users", {
						headers:{
							Authorization: `Bearer ${token}`,
						}
					})
					let data = await response.json()
					console.log(data)
					if (data.users_list) {
						setStore({...getStore(), usersList: data.users_list})
					} else {
						alert("Something went wrong")
					}
				} catch (error) {
					console.error(error)
				}
			},
			//Funcion para cerrar sesion
			logout: () => {
				localStorage.removeItem('token')
				setStore({})
				console.log("Logged out successfully!");
			},


			// Use getActions to call a function within a fuction
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
			
		}
	};
};

export default getState;
