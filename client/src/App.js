import React from 'react';

class App extends React.Component {
  handleClick = async () => {
    try {
      const response = await fetch('https://full-stack-vercel-server.vercel.app/', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await response.text();
      console.log(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Fetch Data</button>
      </div>
    );
  }
}

export default App;