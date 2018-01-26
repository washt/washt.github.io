import React from 'react';
import styled from 'styled-components';

export default class Stats extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hidden: false,
      data: null,
    };
  }
  componentDidMount() {
      fetch('https://willowlabs.io/', { method: 'GET', mode: 'cors' })
      .then(resp => console.log(resp))
      .catch(e => this.data = e)
  }

  render() {
    if(!this.state.hidden) {
        return <GraphWrapper>
        Just a test.
        <p>Here's some data tho:</p>
        {this.state.data}
        </GraphWrapper>
    }
    return null
  }
}

const GraphWrapper = styled.section`
  margin-top: 20%;
  background: #363636;
  color: #FFFFFF;
  font-family: Source Code Pro;
  text-align: center;
`;