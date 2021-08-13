import React, {  PureComponent } from 'react'

export class Pure extends PureComponent {
    constructor(props) {
        super(props)
    
        this.state = {
             value:10
        }
    }
    
    render() {
        console.log(this.state)
        return (
            <div>
                <h1>Pure Compoent {this.state.value} </h1>
                <button onClick={() => {this.setState({value:20})}}>click Me</button>
            </div>
        )
    }
}

export default Pure
