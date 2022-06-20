import axios from 'axios'
import Head from 'next/head'
import Link from 'next/link'
import styles from '../../styles/Home.module.css'
import { useRouter } from "next/router";

export async function getServerSideProps(context) {
  const id = context.params.id
  const response1 = await axios.get(`https://Atividade-Final-PTAS-2.juancw205.repl.co/autores/${id}`)
  const autor = response1.data
  const response2 = await axios.get(`https://Atividade-Final-PTAS-2.juancw205.repl.co/autores/${id}/livros`)
  const livro = response2.data
 return{
   props: {
     autor,
     livro
   }
 }
}


export default function autores({ autor, livro }) {
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Tetelestai</title>Will
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.menu}>
        <div className={styles.menu1}>
          <Link href="/"><a><b className={styles.nome}>Tetelestai</b></a></Link>
        </div>
        <div className={styles.menu2}>
          <Link href="../autores"><a className={styles.menuselect}>Autores</a></Link>
          <Link href="../livros"><a className={styles.menuopc}>Livros</a></Link>
        </div>
      </div>
      
      <main className={styles.main}>

        {livro.map((livro) => {
          return (

              <div className={styles.card}>
                <div key={livro.id}>
                <p>
                  <b className={styles.titleCard}>
                    {livro.titulo}
                  </b><br />
                  Autor: {livro.autorId}<br />
                  Editora: {livro.editora}<br />
                  Data de publicação: {livro.dataPublic}<br />
                  ID: {livro.id}
                </p>
                </div>
              </div>
    )})}
      </main>
    </div>
  )
}
