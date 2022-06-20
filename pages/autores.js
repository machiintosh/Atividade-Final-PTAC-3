import axios from 'axios'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { useRouter } from "next/router";

export const getStaticProps = async () => {
  const response = await axios.get('https://Atividade-Final-PTAS-2.juancw205.repl.co/autores')
  const autor = await response.data
  return {
    props: {
      autor
    }
  }
}

export default function autores({autor}) {

let router = useRouter();
  
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
          <Link href="autores"><a className={styles.menuselect}>Autores</a></Link>
          <Link href="livros"><a className={styles.menuopc}>Livros</a></Link>
        </div>
      </div>
      
      <main className={styles.main}>
        <div className={styles.selectDiv}>
          <a className={styles.selectSelect}>
            <Link href="autores">Visualizar</Link></a>
          <a className={styles.selectTxt}>
            <Link href="createautor">Cadastrar</Link></a>
        </div>

        <div className={styles.grid}>

          
      {autor.map((autor)=>{
      function botaoAutor(){
        router.push(`./autores/${autor.id}`)
        console.log(autor.id)
      }
      
      async function deletarAutor(){
      let alerta = confirm("Você deseja deletar esse autor?");
      if(alerta == true){
      const response = await axios.delete
      ("https://Atividade-Final-PTAS-2.juancw205.repl.co/autores/" + parseInt(autor.id))
      alert("Autor excluido com sucesso.") 
      router.push('/')
      }else{
      alert("O livro não foi deletado.")
      }
      } 
          return (

              <div className={styles.card}>
                <div key={autor.id}>
                <p>
                  <b className={styles.titleCard}>
                  {autor.nome} {autor.sobrenome}
                  </b><br />
                  ID: {autor.id}<br />
                  Data de Nascimento: {autor.dataNasc}<br />
                </p>
                </div>
                <button
                  className={styles.btnCard}
                  onClick={botaoAutor}
                >
                  Livros</button>
                <button
                  className={styles.btnCard}
                  onClick={deletarAutor}
                >
                    Excluir
                </button>
              </div>
          )}
        )}
           
        </div>
      </main>
    </div>
  )
}
