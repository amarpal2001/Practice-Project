import React, { Component } from 'react'
import Army from './WithArm'
export class Rahul extends Component {
    render() {
        return (
            <>
                <h2>Camp:{this.props.camp}</h2>
                <h4 onMouseOver={this.props.hochandleGunshots}>Rahul {this.props.hocgunname} gunshots:{this.props.hocgunshots}</h4>
            </>
        )
    }
}

export default Army(Rahul, 5);
 