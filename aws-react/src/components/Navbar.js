import React from 'react';

class Navbar extends React.Component {
    state = {
        dev: true
    }
    handleClick = (e) => {
        e.preventDefault()
        this.setState({
            dev: !this.state.dev
        })
    }
    render() {
        return (
            <div style={{ background: 'white', boxShadow: '0px 2px 6px #888888'}}>
                <nav className="navbar navbar-expand-sm navbar-light">
                    <a className="navbar-brand" href="#">LOOKUP<b>DEV</b></a>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav mx-auto">
                            <li className={this.state.dev ? "nav-item active" : "nav-item"}>
                                <button className="nav-link" type="button" onClick={this.handleClick} style={{ background: 'none', border: 'none', outline: '0'}}>DEVELOPERS </button>
                            </li>
                            <li className="divider-vertical" style={{ width: '1px', background: 'rgba(0,0,0,0.2' }}></li>
                            <li className={!this.state.dev ? "nav-item active" : 'nav-item'}>
                                <button className="nav-link" type="button" onClick={this.handleClick} style={{ background: 'none', border: 'none', outline: '0'}}>EMPLOYERS</button>
                            </li>
                        </ul>
                    </div>
                    <div className="navbar">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="#">Log In</a>
                            </li>
                            <li className="nav-item" style={{ background: '#2680EB', borderRadius: '7%'}}>
                                <a className="nav-link" href="#" style={{color: 'white'}}>Register</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar