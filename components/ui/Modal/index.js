import { useSetModalContext } from '../../../contexts/modal';
import styles from './Modal.module.css';

export default function Modal({ children }) {
  const setModal = useSetModalContext();

  return (
    <div className={styles.background} onClick={() => setModal(null)}>
      <main onClick={(e) => e.stopPropagation()}>
        {children}
      </main>
    </div>
  )
}