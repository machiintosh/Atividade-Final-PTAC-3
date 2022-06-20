import axios from 'axios'
import Head from 'next/head'
import Link from 'next/link'
import styles from '../../styles/Home.module.css'
import { useRouter } from "next/router";

export async function getServerSideProps(context) {
  const id = context.params.id
  const response = await axios.get(`https://Atividade-Final-PTAS-2.juancw205.repl.co/livros/${id}`)
  const livro = response.data
 return{
   props: {
     livro
   }
 }
}


export default function livros({livro}) {
  
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
          <Link href="../autores"><a className={styles.menuopc}>Autores</a></Link>
          <Link href="../livros"><a className={styles.menuselect}>Livros</a></Link>
        </div>
      </div>
      
      <main className={styles.main}>

                <div className={styles.card}>
                  <div key={livro.id}>
                  <p>
                    <b className={styles.titleCard}>
                      {livro.titulo}
                    </b><br />
                    Editora: {livro.editora}<br />
                    Data de publicação: {livro.dataPublic}<br />
                    ID: {livro.id}
                  </p>
                </div>
                </div>

      </main>
    </div>
  )
}
