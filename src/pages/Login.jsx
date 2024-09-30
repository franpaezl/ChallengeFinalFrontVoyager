import React from 'react'
import { useState } from 'react'
import { X, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'


function Login() {

    const [activeTab, setActiveTab] = useState('login')

    const inputVariants = {
        focus: { scale: 1.02, transition: { duration: 0.2 } },
    }

    const buttonVariants = {
        hover: { scale: 1.05, transition: { duration: 0.2 } },
        tap: { scale: 0.95, transition: { duration: 0.2 } },
    }
    return (

        <div className="flex items-center justify-center min-h-screen bg-gray-900">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-md p-8 bg-gray-800 rounded-lg shadow-lg relative"
            >
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="absolute top-2 right-2 text-gray-400 hover:text-white transition-colors duration-200"
                >
                    <X size={24} />
                </motion.button>
                <h2 className="text-2xl font-bold text-center text-yellow-500 mb-2">Te estamos esperando</h2>
                <h1 className="text-3xl font-bold text-center text-white mb-6">Reservá en VOYAGER</h1>
                <div className="flex justify-center space-x-4 mb-6">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`text-sm transition-colors duration-200 ${activeTab === 'login' ? 'text-yellow-500' : 'text-gray-400'}`}
                        onClick={() => setActiveTab('login')}
                    >
                        ¿Ya tenes cuenta? Ingresá
                    </motion.button>
                    <Link to="/register">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`text-sm transition-colors duration-200 ${activeTab === 'register' ? 'text-yellow-500' : 'text-gray-400'}`}
                        // onClick={() => setActiveTab('/register')}
                    >
                        ¿Aún no tenes una cuenta? Registrate
                    </motion.button>
                    </Link>
                </div>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                >
                    {activeTab === 'login' ? (
                        <form className="space-y-4">
                            <motion.input
                                variants={inputVariants}
                                whileFocus="focus"
                                type="email"
                                placeholder="Email"
                                className="w-full p-3 bg-gray-700 text-white rounded transition-all duration-200 focus:ring-2 focus:ring-yellow-500 focus:outline-none"
                            />
                            <motion.input
                                variants={inputVariants}
                                whileFocus="focus"
                                type="password"
                                placeholder="Contraseña"
                                className="w-full p-3 bg-gray-700 text-white rounded transition-all duration-200 focus:ring-2 focus:ring-yellow-500 focus:outline-none"
                            />
                            <button
                                className="relative w-full p-3 bg-gray-700 text-yellow-500 rounded font-bold overflow-hidden group"
                            >
                                <span className="relative z-10 flex items-center justify-center">
                                    Ingresar
                                    <ArrowRight size={20} className="ml-2" />
                                </span>
                                <span className="absolute bottom-0 left-0 w-full h-0 bg-yellow-500 transition-all duration-300 group-hover:h-full"></span>
                                <span className="absolute bottom-0 left-0 w-full h-0 bg-yellow-400 transition-all duration-500 delay-100 group-hover:h-full"></span>
                            </button>
                            <p className="text-sm text-center text-gray-400 hover:text-white transition-colors duration-200 cursor-pointer">¿Olvidaste tu contraseña?</p>
                        </form>
                    ) : (
                        ""
                    )
                    }
                </motion.div>
            </motion.div>
            <style jsx>{`
                .group:hover span {
                  color: #1F2937;
                }
              `}</style>
        </div>
    )
}

export default Login