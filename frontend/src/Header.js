import React from 'react'; // A importação do react é obrigatória para se utilizar a notaçaõ de JSX

export default function Header({children}){  //notação de export direto na function
    //O componente [ Header(props) ] recebe como padrão uma propridade chamada props.children, que recebe tudo que esta contido dentro dele na chamada. Ex.: <Header>Teste</Header>, props.childre = Teste
    return(
        <header>
            <h1>{children}</h1>
        </header>
    )
}

//export default Header;