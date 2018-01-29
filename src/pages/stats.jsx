import React from 'react';
import styled from 'styled-components';
import { VictoryChart  } from 'victory';
import colors from '../assets/styles/colors';
import { FaArrowLeft } from 'react-icons/lib/fa';

export default class Stats extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hidden: false,
      data: {},
    };
    this.goBack = this.goBack.bind(this)
  }

  componentWillMount() {
      const myheaders = new Headers();
      fetch('https://willowlabs.io', { method: 'GET', headers: myheaders, mode: 'cors' })
      .then(resp => resp.json())
      .then(resp => {
        this.setState({data: {time : resp.time, ip: resp.xForwardedFor}})
      })
      .catch(e => this.state.data = e)
  }

  goBack() {
    this.setState({ hidden: true })
    this.props.goBack()
  }

  render() {
    if(!this.state.hidden) {
        return (
          <GraphWrapper>
            Just a test.
            <p>Here's some data tho:</p>
            <p>Your IP: {this.state.data.ip}</p>
            <p>Timestamp: {this.state.data.time}</p>
            <Link onClick={this.goBack} href="#"><FaArrowLeft/> Go Back</Link>
            <Graph><VictoryChart/>Some Graph 1</Graph>
            <Graph><VictoryChart/>Some Graph 2</Graph>
            <Graph><VictoryChart/>Some Graph 3</Graph>
          </GraphWrapper>
        )
    }
    return null
  }
}

const Link = styled.a`
  text-decoration: none;
  color: ${props => colors[props.color] ? colors[props.color] : colors.blue};
  padding: 10px;
`;

const Graph = styled.section`
  margin: 20%;
  border-style: solid;
  background: #363636;
  color: #FFFFFF;
  font-family: Source Code Pro;
  text-align: center;
`;

const GraphWrapper = styled.section`
  margin: 20%;
  border-style: solid;
  background: #363636;
  color: #FFFFFF;
  font-family: Source Code Pro;
  text-align: center;
`;