import { Header } from './components/Header'
import './components/global.css'

import styles from '../src/components/App.module.css'
import { Sidebar } from './components/sidebar'
  

function App() {


  return (
    <>
      <Header />

        <div className={styles.wrapper}>

           <Sidebar />
        
        <main>
          <h2>post</h2>
        </main>

      </div>
    </>
  )
}

export default App
