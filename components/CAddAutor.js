import axios from 'axios'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router'
import { useState } from 'react'

export const getStaticProps = async () => {
const responseAutores = await axios.get('https://atividade-final-ptas-2.juancw205.repl.co/autores')
const autores = await responseAutores.data
  return {
    props: {
      autores
    }
  }
}

export default function AddAutor({ autores, livros }) {
  const [values, setValues] = useState({
    nome: "",
    sobrenome: "",
    dataNasc: "",
  });

  let router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const emptyFieldCheck = Object.values(values).some(
      (element) => element === ""
    )
    if (emptyFieldCheck) {
      alert("Preencha todos os campos!");
      return
    }
    const data = {
      ...values
    }

    const response = await axios.post("https://atividade-final-ptas-2.juancw205.repl.co/autores", data)

    if (!response.statusText === "OK") {
      alert("Erro ao adicionar post!");
    } else {
      alert("Autor cadastrado.");
      router.push('/autores');
    }
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setValues({ ...values, [id]: value });
  };

  const { nome, sobrenome, dataNasc } = values;
  return(
  
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nome">Nome </label>
          <input
            id="nome"
            type="text"
            value={nome}
            onChange={handleInputChange}
          /><br />

          <label htmlFor="sobrenome">Sobrenome </label>
          <input
            id="sobrenome"
            type="text"
            value={sobrenome}
            onChange={handleInputChange}
          /><br />

          <label htmlFor="dataNasc">Data de Nascimento </label>
          <input
            id="dataNasc"
            type="date"
            value={dataNasc}
            onChange={handleInputChange}
          /><br />
          
        </div>
        <button className={styles.btnCard} type="submit">Cadastrar Autor</button>
      </form>
    </>
  )
}