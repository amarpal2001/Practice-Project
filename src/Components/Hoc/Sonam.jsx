import React, { Component } from 'react'
import Army from './WithArm'

export class Sonam extends Component {
    render() {
        return (
            <>
                <h2>Camp:{this.props.camp}</h2>
                <h4 onMouseOver={this.props.hochandleGunshots}>Sonam {this.props.hocgunname} gunshots:{this.props.hocgunshots}</h4>
            </>
        )
    }
}

export default Army(Sonam, 8);
