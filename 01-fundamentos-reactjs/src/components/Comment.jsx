import { useState } from 'react';
import { ThumbsUp, Trash } from 'phosphor-react';

import styles from './Comment.module.css';

import { Avatar } from './Avatar';

export function Comment({ content, onDeleteComment }) {
  const [likeCount, setLikeCount] = useState(0);

  function handleDeleteComment() {
    onDeleteComment(content);
  }

  function handleLikeComment() {
    setLikeCount(likeCount + 1);
  }

  return (<div className={styles.comment}>
    <Avatar
      hasBorder={false}
      src="https://github.com/Seiixas.png"
      alt=""
    />

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

          <button onClick={handleDeleteComment} title="Deletar comentario">
            <Trash size={24} />
          </button>
        </header>
        <p>{content}</p>
      </div>
      <footer>
        <button onClick={handleLikeComment}>
          <ThumbsUp /> Aplaudir
          <span>{likeCount}</span>
        </button>
      </footer>      
    </div>
  </div>)
}