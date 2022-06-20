import axios from 'axios'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
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
          <Link href="autores"><a className={styles.menuopc}>Autores</a></Link>
          <Link href="livros"><a className={styles.menuopc}>Livros</a></Link>
        </div>
      </div>
      
      <main className={styles.main}>
          <p className={styles.indexTxt}>
            Uma biblioteca completa ao alcançe da sua tela</p>
          <Link href="livros"><div className={styles.btnG}>
          <b>Acesse Agora</b>
          </div></Link>
        <Image
       src="/img.svg"
       width={620}
       height={420}
       alt="Index Image"
     />
      </main>
    </div>
  )
}
