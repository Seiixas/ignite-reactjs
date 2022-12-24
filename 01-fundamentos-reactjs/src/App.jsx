import { Post } from './Post';

export function App() {
  return (
    <div>
      <Post
        author="Mateus Seixas"
        content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus itaque fugit vitae accusamus amet perspiciatis quibusdam! Tempore culpa quae, alias nisi totam adipisci debitis porro unde quos voluptatem, iusto maxime?"
      />
      <Post
        author="Usuário Anonimo"
        content="Novo post muito legal"
      />
    </div>
  )
}