import { useState } from "react";

import Perfil from "./components/Perfil";
// import Formulario from "./components/Formulario";
import RepoList from "./components/RepoList";

import './global.css'

function App() {

  // const [renderizaFormulario, setRenderizaFormulario] = useState(true);
  const [userNameGit, setUserNameGit] = useState('DiasSergio')

  return (
    <div>
      <form className="input">
        <h1>
          Enter a valid Github user account
        </h1>
        <input type="text" onBlur={({ target }) => setUserNameGit(target.value)} placeholder="User name" />
      </form>
      {userNameGit.length >= 4 && (
        <>
          <Perfil userName={userNameGit} />
          <RepoList userName={userNameGit} />
        </>
      )}

      {/* {renderizaFormulario && (
        <Formulario />
      )}
      <button onClick={() => setRenderizaFormulario(!renderizaFormulario)} type="button">toggle form</button> */}
    </div>
  )
}

export default App
