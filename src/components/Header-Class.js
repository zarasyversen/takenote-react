import React from 'react';

class Header extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      status: 'You are Online 😎'
    };
  }

  checkOnlineStatus() {
    if (!navigator.onLine) {
      this.setState({
        status: 'You are Offline 😩'
      })
    } 
  }

  componentDidMount() {
   this.checkOnlineStatus()
  }

  render() {
    return (
      <header className="take-note__header">
        <div className="take-note__header-wrapper take-note__wrapper">
          <h1>Take A Note</h1>
          <h2>{this.state.status}</h2>
        </div>
      </header>
    );
  }
}

export default Header;