"use client"
import { motion } from "framer-motion"

export default function Header() {
  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="header-container"
    >
      <div className="header-logo">
        Randerson de Sá
      </div>
      <nav className="header-nav">
        <a href="#sobre">Sobre</a>
        <a href="#projetos">Projetos</a>
        <a href="#habilidades">Habilidades</a>
        <a href="#experiencia">Experiência</a>
        <a href="#formacao">Formação</a>
        <a href="#contato">Contato</a>
      </nav>
    </motion.header>
  )
}