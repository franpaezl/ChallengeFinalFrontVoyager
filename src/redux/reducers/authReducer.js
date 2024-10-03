// import { createReducer } from '@reduxjs/toolkit';

// const initialState = {

//     isLoggedIn: !!localStorage.getItem('token'), // Si hay un token en localStorage, el usuario está logueado
//     token: localStorage.getItem('token') || null, // Si hay un token en localStorage, lo cargamos al estado inicial
//     email:null,
//     name:null,
//     status: 'idle', // Estado inicial de la solicitud
//     loading: false,
//     error: null,
// }


// const authReducer = createReducer(initialState,(builder)=> {
//     builder

//     // .addCase(registerUser.pending,(state)=>{

//     //     return{
//     //         ...state,
//     //         loading:true,
//     //         error:null
//     //     }
//     // })
//     // .addCase(registerUser.fulfilled,(state,action) =>{

//     //     return{
//     //         ...state,
//     //         isLoggedIn:false,
//     //         loading: false,
//     //         error: null,

//     //     }
//     // })
//     // .addCase(registerUser.rejected,(state,action)=>{

//     //     return {
//     //         ...state,
//     //         loading: false,
//     //         error: action.payload || 'Error during registration',
//     //     }
//     // })

//     .addCase(authenticateUser.fulfilled, (state, action) => {
//         console.log("Autenticación exitosa, token:", action.payload);
//         return {
//             ...state,
//             isLoggedIn: true,
//             token: action.payload,
//             status: "succeeded",
//             loading: false,
//         };
//     })
//     .addCase(authenticateUser.rejected, (state, action) => {
//         console.log(action.payload)

//         return {
//             ...state,
//             status: "failed",
//             loading: false,

//             error: action.error?.message || 'Error during authentication'
//         };

//     })
//     .addCase(loadUser.fulfilled, (state, action) => {
//         console.log("Usuario cargado:", action.payload);
//         const newState = {
//             ...state, // Mantenemos el estado anterior
//             isLoggedIn: true,
//             token: action.payload.token,  // Asignamos el nuevo token
//             email: action.payload.email,  // Asignamos el email del usuario
//             name: action.payload.name,    // Asignamos el nombre del usuario
//             accounts: action.payload.accounts,  // Añadimos las cuentas al estado
//             cards: action.payload.cards,
//             loans: action.payload.loans,
//             status: "succeeded",          // La solicitud fue exitosa
//             loading: false,
//             // Ya no está cargando
//         };

//         console.log("Estado actualizado (fulfilled):", newState)

//         return newState
//     })

//     .addCase(logoutUser.pending, (state) => {
//         return {
//             ...state,
//             status: "pending",
//             loading: true,
//             error: null,
//         };
//     })

//     // Estado cuando el cierre de sesión es exitoso (fulfilled)
//     .addCase(logoutUser.fulfilled, (state) => {
//         return {
//             ...state,
//             isLoggedIn: false,
//             token: null,
//             email: null,
//             name: null,
//             accounts: [],
//             status: "succeeded",
//             loading: false,
//         };
//     })
//     // Estado cuando el cierre de sesión falla (rejected)
//     .addCase(logoutUser.rejected, (state, action) => {
//         return {
//             ...state,
//             status: "failed",
//             loading: false,
//             error: action.payload || 'Error logging out',
//         };
//     });

// })