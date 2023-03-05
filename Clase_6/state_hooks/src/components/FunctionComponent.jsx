import React from "react";
import { useState } from "react";
import { ButtonOperation, ContainerCounter, SpanCounter, TitleCounter } from "../styles/StyledComponents";

const FunctionCounter = () => {

    const [contador, setContador] = useState(0);

    const sumar = () => {
        setContador(contador + 1);
    }
    const restar = () => {
        setContador(contador - 1);
    }

    return (
        <div>
            <TitleCounter>Function Counter</TitleCounter>
            <ContainerCounter>
                <ButtonOperation operation="subtract" onClick={restar}>-</ButtonOperation>
                <SpanCounter>{contador}</SpanCounter>
                <ButtonOperation onClick={ sumar } operation="add">+</ButtonOperation> 
            </ContainerCounter>
        </div>
    )
}

export default FunctionCounter;