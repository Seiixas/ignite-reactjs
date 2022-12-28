import { PencilLine } from 'phosphor-react';

import styles from './Sidebar.module.css';

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1665686374006-b8f04cf62d57?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
      />
      <div className={styles.profile}>
        <img
          className={styles.avatar}
          src="https://media.licdn.com/dms/image/C4D03AQE588UevlTM6w/profile-displayphoto-shrink_800_800/0/1660260219825?e=1677715200&v=beta&t=GNO6Y8WKVVggjg_HrG0kHwIZh1BRMeJpoZgwULFgSno"
         />
        <strong>Mateus Seixas</strong>
        <span>FullStack Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  )
}