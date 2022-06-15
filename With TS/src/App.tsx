import { Header } from './components/Header'
import { Sidebar } from './components/sidebar'
import { Post } from './components/Post'

import './components/global.css'
import styles from './App.module.css'

const posts = [
  {
    id : 1,
    author : {
      avatarUrl : 'http://github.com/cfcamargo.png',
      name : 'Cristian Camargo',
      role: 'Web Developer',
    },
    content: [
      {type : 'paragraph',  content: 'Fala galera'},
      {type : 'paragraph', content: 'Acabei de subir um projeto no meu portfólio, É um projeto feito durante a NlW Return da Rocketseat' },
      {type : 'link' , content: 'https://camargodev.com.br' }
    ],

    publishedAt: new Date('2022-05-19 20:00:00')
  },
  {
    id : 2,
    author : {
      avatarUrl : 'http://github.com/maykbrito.png',
      name : 'Mayk Brito',
      role: 'Educator @Rocketseat',
    },
    content: [
      {type : 'paragraph',  content: 'Fala galera'},
      {type : 'paragraph', content: 'Acabei de subir um projeto no meu portfólio, É um projeto feito durante a NlW Return da Rocketseat' },
      {type : 'link' , content: 'https://camargodev.com.br' }
    ],

    publishedAt: new Date('2022-06-12 20:00:00')
  }
]
  

function App() {
  return (
    <>
      <Header />
        <div className={styles.wrapper}>
           <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
              key={post.id}  
              author={post.author}
              content= {post.content}
              publishedAt = {post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </>
  )
}
export default App
