import React from 'react';

import { ContainerHeader } from './styles';


function Header(props){
    return(
        <ContainerHeader>
            <header>
                <h1>Blog</h1>

                {props.children}
            </header>
        </ContainerHeader>
    );
}

export default Header;