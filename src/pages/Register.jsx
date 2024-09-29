import React from 'react'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

function Register() {

    const inputVariants = {
        hidden: { y: -20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 24
            }
        },
        focus: { scale: 1.02, transition: { duration: 0.2 } },
    }

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3
            }
        }
    }
    return (

        <div className="flex items-center justify-center min-h-screen bg-gray-900">
            <motion.div
                className="w-full max-w-2xl p-8 bg-gray-800 rounded-lg shadow-lg"
                initial="hidden"
                animate="visible"
                variants={containerVariants}
            >
                <motion.h2
                    className="text-2xl font-bold text-center text-yellow-500 mb-2"
                    variants={inputVariants}
                >
                    Te estamos esperando
                </motion.h2>
                <motion.h1
                    className="text-3xl font-bold text-center text-white mb-2"
                    variants={inputVariants}
                >
                    Registrate en VOYAGER
                </motion.h1>
                <Link to="/login" >
                <motion.p
                    className="text-center text-gray-400 mb-6"
                    variants={inputVariants}
                >
                    <span className="mr-1">¿Ya tenes una cuenta?</span>
                    <button
                        // onClick={onSwitchToLogin}
                        className="text-yellow-500 hover:text-yellow-400 transition-colors duration-200"
                    >
                        Ingresá
                    </button>
                </motion.p>
                </Link>
                <form className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                        <motion.input
                            variants={inputVariants}
                            whileFocus="focus"
                            type="text"
                            placeholder="Nombre"
                            className="w-full p-3 bg-gray-700 text-white rounded transition-all duration-200 focus:ring-2 focus:ring-yellow-500 focus:outline-none"
                        />
                        <motion.input
                            variants={inputVariants}
                            whileFocus="focus"
                            type="text"
                            placeholder="Apellido"
                            className="w-full p-3 bg-gray-700 text-white rounded transition-all duration-200 focus:ring-2 focus:ring-yellow-500 focus:outline-none"
                        />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <motion.input
                            variants={inputVariants}
                            whileFocus="focus"
                            type="tel"
                            placeholder="Teléfono con código de área"
                            className="w-full p-3 bg-gray-700 text-white rounded transition-all duration-200 focus:ring-2 focus:ring-yellow-500 focus:outline-none"
                        />
                        <motion.input
                            variants={inputVariants}
                            whileFocus="focus"
                            type="tel"
                            placeholder="Teléfono alternativo"
                            className="w-full p-3 bg-gray-700 text-white rounded transition-all duration-200 focus:ring-2 focus:ring-yellow-500 focus:outline-none"
                        />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
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
                    </div>
                    <motion.button
                        variants={inputVariants}
                        className="relative w-full p-3 bg-gray-700 text-yellow-500 rounded font-bold overflow-hidden group"
                    >
                        <span className="relative z-10 flex items-center justify-center">
                            Registrarse
                            <ArrowRight size={20} className="ml-2" />
                        </span>
                        <span className="absolute bottom-0 left-0 w-full h-0 bg-yellow-500 transition-all duration-300 group-hover:h-full"></span>
                        <span className="absolute bottom-0 left-0 w-full h-0 bg-yellow-400 transition-all duration-500 delay-100 group-hover:h-full"></span>
                    </motion.button>
                </form>
                <style jsx>{`
          .group:hover span {
            color: #1F2937;
          }
        `}</style>
            </motion.div>
        </div>
    )
}

export default Register