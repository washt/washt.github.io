import React from 'react';
import styled from 'styled-components';
import colors from '../assets/styles/colors';
import { FaBriefcase, FaGithub, FaTwitter, FaKey, FaLineChart } from 'react-icons/lib/fa';
import Stats from './stats.jsx';

export default class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hidden: false,
    };
    this.drawGraph = this.drawGraph.bind(this)
    this.goBack = this.goBack.bind(this)
  }

  drawGraph () {
    this.setState({ hidden: true })
  }

  goBack() {
    this.setState({ hidden: false })
  }

  render () {
    if (!this.state.hidden) {
      return (
        <LandingWrapper>
          <h2>Tucker Wash</h2>
          <p>Software Engineer @<Link color="hopinblue" href="https://hopin.to/">Hopin</Link></p>
          <p>❤️'s:</p>
          <p>computing 👨‍💻</p>
          <p>trail running 🏔🏃‍♂️🏔</p>
          <p>& dance music 💃</p>
          <Link color="green" href="https://www.github.com/washt"><FaGithub/></Link>
          <Link color="blue" href="https://www.twitter.com/tttuckerrr"><FaTwitter/></Link>
          <Link color="red" href="https://www.keybase.io/tucker"><FaKey/></Link>
          <Link color="yellow" onClick={this.drawGraph} href="#"><FaLineChart/></Link>
        </LandingWrapper>
      )
    };
    return (
        <Stats goBack={this.goBack}/>
    )
  }
}

const LandingWrapper = styled.section`
  margin-top: 20%;
  background: #363636;
  color: #FFFFFF;
  font-family: Source Code Pro;
  text-align: center;
`;

const Link = styled.a`
  text-decoration: none;
  color: ${props => colors[props.color] ? colors[props.color] : colors.blue};
  padding: 5px;
`;

