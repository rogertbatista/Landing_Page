import styles from './Header.module.css';

function Header(){
    return(
        <header className={styles.header}>
            <div>
                <h1><span>Desafio</span>Front</h1>
            </div>
            <div>
                <button>COMPRAR EBOOK</button>
            </div>
        </header>
    );
}

export default Header;