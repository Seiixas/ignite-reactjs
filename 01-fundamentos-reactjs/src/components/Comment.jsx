import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';

export function Comment() {
  return (<div className={styles.comment}>
    <img src="https://github.com/Seiixas.png" alt="" />

    <div className={styles.commentBox}>
      <div className={styles.commentContent}>
        <header>
          <div className={styles.authorAndTime}>
            <strong>Mateus Seixas</strong>
            <time
              title="11 de Maio as 08:13h"
              dateTime="2022-05-11 08:13:24"
            >
              Cerca de 1h atras
            </time>
          </div>

          <button title="Deletar comentario">
            <Trash size={24} />
          </button>
        </header>
        <p>Muito bom Devon, parabens!</p>
      </div>
      <footer>
        <button><ThumbsUp /> Aplaudir<span>20</span></button>
      </footer>      
    </div>
  </div>)
}