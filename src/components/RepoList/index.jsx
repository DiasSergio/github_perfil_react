import { useEffect, useState } from "react"
import styles from './RepoList.module.css'


const ReposList = ({ userName }) => {
    const [repos, setRepos] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setError(false);

        fetch(`https://api.github.com/users/${userName}/repos`)
            .then((res) => {
                if (!res.ok) {
                    throw new Error(`Please enter a valid user name.`);
                }
                return res.json();
            })
            .then((resJson) => {
                setTimeout(() => {
                    setIsLoading(false)
                    setRepos(resJson)
                }, 1000);
            })
            .catch((e) => {
                setIsLoading(false);
                setError(true);
                console.log(e.message) // Show the error message on the console
            })
    }, [userName])

    return (
        <div className="container">
            {isLoading ? (
                <h1>Loading...</h1>
            ) : error ? (
                <h1>Username not found!</h1>
            ) : (
                < ul className={styles.list}>
                    {repos.length === 0 ? (
                        <h2>None repositories found for {userName}.</h2>
                    ) : repos.map(({ id, name, language, html_url }) => (
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
                </ul>
            )}
        </div >
    )
}

export default ReposList