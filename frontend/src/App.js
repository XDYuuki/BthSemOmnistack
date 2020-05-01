import React from 'react';
//import Logon from './pages/Logon'; //importando uma pasta ele procura automaticamente o arquivo index
import Routes from './routes'; //Componente com a primeira letra maiúscula, senão não funciona

import './global.css';

// Quando o HTML é escrito dentro de um arquivo javaScript é chamado de JSX (JavaScript XML)

function App() {
	return (
		<Routes />
	);
}

export default App;
