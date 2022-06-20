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
  const responseLivros = await axios.get('https://atividade-final-ptas-2.juancw205.repl.co/livros')
  const livros = await responseLivros.data
  return {
    props: {
      autores,
      livros
    }
  }
}

export default function AddLivro({ autores, livros }) {
  const [values, setValues] = useState({
    autorId: 0,
    titulo: "",
    editora: "",
    dataPublic: "",
    preco: ""
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

    const response = await axios.post("https://atividade-final-ptas-2.juancw205.repl.co/livros", data)

    if (!response.statusText === "OK") {
      alert("Erro ao adicionar post!");
    } else {
      alert("Livro cadastrado.");
      router.push('/livros');
    }
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setValues({ ...values, [id]: value });
  };

  const { titulo, editora, dataPublic, preco, autorId} = values;
  return(
  
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="titulo">Titulo </label>
          <input
            id="titulo"
            type="text"
            value={titulo}
            onChange={handleInputChange}
          /><br />

          <label htmlFor="editora">Editora </label>
          <input
            id="editora"
            type="text"
            value={editora}
            onChange={handleInputChange}
          /><br />

          <label htmlFor="dataPublic">Data de Publicação </label>
          <input
            id="dataPublic"
            type="date"
            value={dataPublic}
            onChange={handleInputChange}
          /><br />

          <label htmlFor="preco">Preço </label>
          <input
            id="preco"
            type="number"
            value={preco}
            onChange={handleInputChange}
          /><br />

          <div>
          <label htmlFor="autorId">ID do autor </label>
          <input
            id="autorId"
            type="number"
            value={autorId}
            onChange={handleInputChange}
          />
          </div><br />
          
        </div>
        <button className={styles.btnCard} type="submit">Cadastrar Livro</button>
      </form>
    </>
  )
}