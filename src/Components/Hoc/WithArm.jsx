import React, { Component } from 'react'
const Army = (Men, shots) => {
    class NewMan extends Component {
        state={
            gunshots:0
        }
        handleGunshots = () => {
            this.setState({gunshots:this.state.gunshots+shots})
        }

        render() {
            return <Men 
                hocgunname="AK47"
                hocgunshots={this.state.gunshots}
                hochandleGunshots={this.handleGunshots}
                // camp1={this.props.camp1}
                // camp2={this.props.camp2}
                {...this.props}
                />
            }
    }
    return NewMan;
}
export default Army;     