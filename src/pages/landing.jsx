import React from 'react';
import Radium from 'radium';

@Radium
export default class Landing extends React.Component {
  render() {
    return (
      <div className="Landing" style={[landing.div]}>
				<h2>Helllo World</h2>
      </div>
     )
  }
}

var landing = {
  div: {
    background: "#00FF88",
  }
}
