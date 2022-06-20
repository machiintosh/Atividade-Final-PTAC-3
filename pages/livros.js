import axios from 'axios'
import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { useRouter } from "next/router";

export const getStaticProps = async () => {
  const response = await axios.get('https://Atividade-Final-PTAS-2.juancw205.repl.co/livros')
  const livro = await response.data
  return {
    props: {
      livro
    }
  }
}


export default function livros({livro}) {
  
let router = useRouter();
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Tetelestai</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.menu}>
        <div className={styles.menu1}>
          <Link href="/"><a><b className={styles.nome}>Tetelestai</b></a></Link>
        </div>
        <div className={styles.menu2}>
          <Link href="autores"><a className={styles.menuopc}>Autores</a></Link>
          <Link href="livros"><a className={styles.menuselect}>Livros</a></Link>
        </div>
      </div>
      
      <main className={styles.main}>

        <div className={styles.selectDiv}>
          <a className={styles.selectSelect}>
            <Link href="livros">Visualizar</Link></a>
          <a className={styles.selectTxt}>
            <Link href="createlivro">Cadastrar</Link></a>
        </div>

        <div className={styles.grid}>
          
      {livro.map((livro) => {
        function botaoLivro(){
        router.push(`./livros/${livro.id}`)
        console.log(livro.id)
      }
      async function deletarLivro(){
      let alerta = confirm("Você deseja deletar esse livro?");
      if(alerta == true){
      const response = await axios.delete("https://Atividade-Final-PTAS-2.juancw205.repl.co/livros/"+ parseInt(livro.id))
      alert("Livro excluido com sucesso") 
      router.push('/')
      }else{
      alert("O livro não foi deletado")
      }
}
          return (

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
                  <button className={styles.btnCard} onClick={botaoLivro}>Detalhes</button>
                  <button className={styles.btnCard} onClick={deletarLivro}>
                    Excluir</button>
                </div>
              </div>
            
          )
        })}
           
        </div>
      </main>
    </div>
  )
}
