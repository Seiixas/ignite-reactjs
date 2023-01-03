import { Post } from './components/Post';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';

import './global.css';

import styles from './App.module.css';

const posts = [
  {
    id: 1,
    author: {
      url: 'https://github.com/Seiixas.png',
      name: 'Mateus Seixas',
      role: 'FullStack Web Developer'
    },
    content: [
      {
        type: 'paragraph',
        content: 'Fala galera 👋',
      },
      {
        type: 'paragraph',
        content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'
      },
      {
        type: 'link',
        content: '👉 jane.design/doctorcare'
      }
    ],
    publishedAt: new Date('2023-01-03 18:55:00')
  },
  {
    id: 2,
    author: {
      url: 'https://github.com/alessandrovpa.png',
      name: 'Alessandro Victor',
      role: 'Front-end Web Developer'
    },
    content: [
      {
        type: 'paragraph',
        content: 'Fala galera 👋',
      },
      {
        type: 'paragraph',
        content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'
      },
      {
        type: 'link',
        content: '👉 jane.design/doctorcare'
      }
    ],
    publishedAt: new Date('2023-01-01 18:55:00')
  }
];

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar>aside</Sidebar>
        <main>
          { posts.map((post) => (
            <Post
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
          ))}
        </main>
      </div>
    </div>
  )
}