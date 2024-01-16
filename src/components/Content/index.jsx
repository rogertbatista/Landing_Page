import Form from '../Form';
import styles from './Content.module.css';

function Content() {
    
    return (
        <div className={styles.content}>
            <div className={styles.text}>
                <h1>Seja bem-vindo a <br /> sua melhor newsletter</h1>
                <h2>Fique por dentro de todas as novidades</h2>
                <p>Preencha os campos para receber as notícias <br /> sobre programação</p>
            </div>
            <div><Form/></div>
        </div>
    );
}

export default Content;
