import styles from './Perfil.module.css';

const Perfil = ({ userName }) => {
    // const user = {
    //     nome: 'Sergio',
    //     avatar: 'https://github.com/DiasSergio.png'
    // };

    return (
        <header className={styles.header}>
            <img className={styles.avatar} src={`https://github.com/${userName}.png`} alt="Foto de perfil" />
            <h1 className={styles.name}>
                {userName}
            </h1>
        </header>
    )
}

export default Perfil; 
