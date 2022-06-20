import axios from 'axios'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import CAddAutor from '../components/CAddAutor.js'

export default function cadastrarAutor() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tetelestai</title>Will
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.menu}>
        <div className={styles.menu1}>
          <Link href="/">
            <a><b className={styles.nome}>
            Tetelestai
            </b></a>
        </Link>
        </div>
        <div className={styles.menu2}>
          <Link href="autores"><a className={styles.menuselect}>
            Autores</a></Link>
          <Link href="livros"><a className={styles.menuopc}>
            Livros</a></Link>
        </div>
      </div>

      <main className={styles.main}>
        <div className={styles.selectDiv}>
          <a className={styles.selectTxt}>
            <Link href="autores">Visualizar</Link></a>
          <a className={styles.selectSelect}>
            <Link href="createautor">Cadastrar</Link></a>
        </div>

        <div className={styles.card}>
          <CAddAutor />
        </div>
        
      </main>
    </div>
  )
}
