import React from 'react';
import styled from 'styled-components';

export default class Landing extends React.Component {
  render() {
    return (
      <LandingWrapper>
        <h2>Tucker Wash</h2>
        <p>Polyglot Programmer interested in startups, AI, and The Web.</p>
        <div className="Links">
          <a href="../../assets/pub/TuckerWash.pdf" download="TuckerWashResume.pdf">CV</a>
          <a href="https://www.github.com/washt">Github</a>
          <a href="https://www.twitter.com/ducktuckgo">Twitter</a>
          <a href="https://www.keybase.io/tucker">Keybase</a>
          <a href="/stats">Stats</a>
        </div>
      </LandingWrapper>
     )
  }
}

const LandingWrapper = styled.section`
  margin-top: "20%",
  background: "#363636",
  color: "#FFFFFF",
  font-family: "Source Code Pro",
  text-align: "center"
`;
const landing = {
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
  },
  purple: {
    color: "#743DFF"
  }

}
