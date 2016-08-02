import React from 'react';
import Radium from 'radium';
import fa from 'react-fontawesome';

@Radium
export default class Landing extends React.Component {
  render() {
    return (
      <div className="Landing" style={[landing.div]}>
        <h2 style={[landing.brand]}>Tucker Wash</h2>
	<p style={[landing.message]}>
	Polyglot Programmer interested in startups, AI, and The Web.</p>
	<div className="Links" style={[landing.brand]}>
	  <a style={[landing.link,
		     landing.yellow]} 
		   href="../../assets/pub/TuckerWash.pdf"
		   download="TuckerWashResume.pdf">
		   <fa className="fa fa-briefcase"></fa> CV </a>
	  <a style={[landing.link,
		     landing.green]}
		   href="https://www.github.com/washt">
		   <fa className="fa fa-github"></fa> Github </a>
	  <a style={[landing.link,
		     landing.blue]}
		   href="https://www.twitter.com/ducktuckgo">
		   <fa className="fa fa-twitter"></fa> Twitter </a>
	  <a style={[landing.link,
		     landing.red]}
		   href="https://www.keybase.io/tucker">
		   <fa className="fa fa-key"></fa> Keybase </a>
        </div>
      </div>
     )
  }
}

var landing = {
  div: {
    marginTop: "20%",
    background: "#363636",
    color: "#FFFFFF",
    fontFamily: "Source Code Pro",
  },
  brand: {
    textAlign: "center",
  },
  message: {
    textAlign: "center",
  },
  link: {
    textDecoration: "none",
  },
  green: {
    color: "#45F297",
  },
  blue: {
    color: "#179FE5",
  },
  red: {
    color: "#F25645",
  },
  yellow: {
    color: "#E3EB1F",
  }

}
