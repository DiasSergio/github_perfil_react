import { useState, useEffect } from "react";

const Formulario = () => {
    const [materiaA, setMateriaA] = useState(0);
    const [materiaB, setMateriaB] = useState(0);
    const [materiaC, setMateriaC] = useState(0);
    const [nome, setNome] = useState('');

    // Conteudo será executado sempre que houver uma mudança no estado  
    useEffect(() => {
        console.log('O componente iniciou')

        return () => {
            console.log('O componente foi finalizado')
        }
    }, [])

    useEffect(() => {
        console.log('O estado mudou')
    }, [materiaA, materiaB, materiaC])

    useEffect(() => {
        console.log('O nome mudou')
    }, [nome])

    const alteraNome = ({ target }) => {
        // Basicamente a estrutura do set no useState 
        // retornando o ultimo valor antes da última alteração
        setNome(nomeAnterior => {
            return target.value
        })

        // setNome(target.value)
    }

    const renderizaResultado = () => {
        const soma = materiaA + materiaB + materiaC;
        const media = soma / 3;

        return media >= 7 ? <p>{nome} foi aprovado</p> : <p>{nome} foi reprovado</p>
    }

    return (
        <form>
            <ul>
                {[1, 2, 3, 4, 5].map(item => (
                    <li key={item}>{item}</li>
                ))}
            </ul>

            <input type="text" placeholder="Insira seu nome" onChange={alteraNome} />
            <input type="number" placeholder="Nota matéria A" onChange={e => setMateriaA(parseInt(e.target.value))} />
            <input type="number" placeholder="Nota matéria B" onChange={({ target }) => setMateriaB(parseInt(target.value))} />
            <input type="number" placeholder="Nota matéria C" onChange={({ target }) => setMateriaC(parseInt(target.value))} />
            {renderizaResultado()}
        </form>
    )
}

export default Formulario; 