// import { createAsyncThunk } from "@reduxjs/toolkit";
// import axios from 'axios';
// import Swal from 'sweetalert2'; // Importa SweetAlert2



// // Acción para autenticar usuario
// export const authenticateUser = createAsyncThunk("authenticateUser", async (user, { rejectWithValue }) => {
//     try {
//         const response = await axios.post('http://localhost:8080/api/auth/login', user);
//         console.log("Respuesta de login:", response);

//         const token = response.data;
//         console.log("Token recibido:", token);

//         localStorage.setItem('token', token);
//         console.log("Token almacenado en localStorage:", localStorage.getItem('token'));  // Verifica que el token se almacena correctamente

//         // Mostrar alerta de éxito directamente en la acción
//         Swal.fire({
//             title: 'Login Successful!',
//             text: 'You have been logged in successfully.',
//             icon: 'success',
//             confirmButtonText: 'OK',
//         });

//         // navigate("/")
//         return token;

//     } catch (error) {

//         console.log("entro por el catch y este es el error del back", error);

//         const errorBack = error.response.data
//         console.log("este es el string del error del back", errorBack);


//         // Swal.fire({
//         //     title: 'Authentication Failed',
//         //     text: 'The email o password you entered is incorrect,Please try again.',
//         //     icon: 'error',
//         //     confirmButtonText: 'Ok'
//         // });

//         return rejectWithValue(errorBack);
//     }
// });

// export const loadUser = createAsyncThunk("loadUser", async (_, { rejectWithValue }) => {

//     try {

//         const token = localStorage.getItem('token');
//         if (token) {

//             console.log("Token enviado en loadUser:", token);

//             // Realizamos la solicitud GET a la API con el token del usuario
//             const response = await axios.get('http://localhost:8080/api/auth/current', {

//                 headers: {
//                     Authorization: `Bearer ${token}`,  // El token correcto del usuario
//                 },

//             });

//             console.log("Respuesta de loadUser:", response);

//             const responseData = response.data;
//             console.log("Datos del usuario:", responseData);

//             // Creamos el objeto usuario a partir de la respuesta de la API
//             let usuario = {
//                 email: responseData.email,
//                 name: responseData.firstName + " " + responseData.lastName,
//                 token: token,  // Aquí el token viene del argumento `token`
//                 isLoggedIn: true,


//             };
//             console.log("Usuario cargado:", usuario);

//             // Retornamos el objeto usuario para almacenarlo en el estado global
//             return usuario;
//         }

//     } catch (error) {
//         console.error("Error loading user:", error);

//         Swal.fire({
//             title: 'Error Loading User',
//             text: error.response ? error.response.data.message : 'Error loading user',
//             icon: 'error',
//             confirmButtonText: 'Ok'
//         });

//         // Si el token es inválido o expirado, eliminamos el token de localStorage
//         if (error.response && error.response.status === 401) {
//             localStorage.removeItem('token');  // Eliminamos el token
//         }
//         return rejectWithValue(error.response ? error.response.data : error.message);
//     }
// });