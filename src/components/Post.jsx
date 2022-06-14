import { Avatar } from './Avatar'
import { Comment } from './Comment'
import styles from './Post.module.css'

export function Post(){
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
            <Avatar src="https://github.com/cfcamargo.png"/>
            <div className={styles.authorInfo}>
              <strong>Cristian Camargo</strong>
              <span>Web Developer</span>
            </div>
        </div>

        <time title="11 de maio as 08:13" dateTime="2022-05-11 08:00">Publicado há 1h</time>
        
      </header>

      <div className={styles.content}>
        <p>Fala galera 💅🏼</p>
        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da rocket</p>
        <p><a href="https://camargodev.com.br" target="_blank">camargodev.com.br</a></p>
        <p>
          <a>#novoprojeto</a>{' '}
          <a>#nlw</a> {' '}
          <a>#rocket</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea  placeholder='Deixe um comentário'/>

        <footer>
          <button type='submit'>Publicar</button>
        </footer>

      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />

      </div>

    </article>
  )
}