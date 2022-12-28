import { Post } from './Post';
import { Header } from './components/Header';

import './global.css';

import styles from './App.module.css';
import { Sidebar } from './components/Sidebar';

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar>aside</Sidebar>
        <main>
          <Post
            author="Mateus Seixas"
            content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus itaque fugit vitae accusamus amet perspiciatis quibusdam! Tempore culpa quae, alias nisi totam adipisci debitis porro unde quos voluptatem, iusto maxime?"
          />
          <Post
            author="Usuário Anonimo"
            content="Novo post muito legal"
          />
        </main>
      </div>
    </div>
  )
}