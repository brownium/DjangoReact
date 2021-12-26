import React, { Component } from "react";

class Footer extends Component{

    state = {
        name: '',
        age: 35,
        isLogin: true,
        }

    componentDidMount(){
        this.setState({name: 'MyName'});
    }

    changed = evt => {
        this.setState({name: evt.target.value});
        console.log(this.state.name);
    }

    render() {
        return (
            <div>
                { this.state.isLogin ? (
                    <React.Fragment>
                        <h2 onClick={this.props.myalert}>
                                {this.props.trademark}
                        </h2>
                        <input value={this.state.name}
                            onChange={this.changed} type="text"/>
                    </React.Fragment>
                ) : (
                    <React.Fragment>
                        <h2>You can't see this</h2>
                        <h2>You must be logged in</h2>
                        <input value={this.state.name}
                            onChange={this.changed} type="text"/>
                    </React.Fragment>
                    )
    
                }
            </div>
        )
    }
}

export default Footer;