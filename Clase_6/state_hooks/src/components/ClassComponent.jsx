import React, {Component} from 'react'
import { ButtonOperation, ContainerCounter, SpanCounter, TitleCounter } from "../styles/StyledComponents";

class ClassComponent extends Component {

    state = {
        contador: 0
    }

    sumar = () => {
        this.setState({contador: this.state.contador + 1})
    }
    restar = () => {
        this.setState({contador: this.state.contador - 1})
    }
    
    render(){
        return (
            <div>
                <TitleCounter>Class Counter</TitleCounter>
                <ContainerCounter>
                    <ButtonOperation onClick={this.restar} operation="subtract">-</ButtonOperation>
                    <SpanCounter>{this.state.contador}</SpanCounter>
                    <ButtonOperation onClick={this.sumar} operation="add">+</ButtonOperation> 
                </ContainerCounter>
            </div>
        )
    }

}

export default ClassComponent;