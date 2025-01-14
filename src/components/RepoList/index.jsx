import { useEffect, useState } from "react"

import styles from './RepoList.module.css'
import '../../global.css'

const ReposList = ({ userName }) => {

    const [repos, setRepos] = useState([]);
    const [estaCarregando, setEstaCarregando] = useState(true);

    useEffect(() => {
        setEstaCarregando(true)
        fetch(`https://api.github.com/users/${userName}/repos`)
            .then(res => res.json())
            .then(resJson => {
                setTimeout(() => {
                    setEstaCarregando(false)
                    setRepos(resJson)
                }, 500);
            })
    }, [userName])

    return (
        <div className="container">
            {estaCarregando ? (<h1>
                Carregando...
            </h1>) :
                <ul className={styles.list}>
                    {/* {repos.map((repo) => ( */}
                    {repos.map(({ id, name, language, html_url }) => (
                        <li className={styles.listItem} key={id}>
                            <div className={styles.itemName}>
                                <b>Repositório:</b> {name}
                            </div>
                            <div className={styles.itemLanguage}>
                                <b>Linguagem:</b> {language}
                            </div>
                            <a className={styles.itemLink} href={html_url} target="_blank">Visitar no Github</a>
                        </li>
                    ))}
                </ul>}
        </div>
    )
}

export default ReposList