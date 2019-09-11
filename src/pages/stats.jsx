import React from 'react';
import styled from 'styled-components';
import colors from '../assets/styles/colors';
import { FaArrowLeft } from 'react-icons/lib/fa';

export default class Stats extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hidden: false,
      data: {
        ip: this.props.ip ? this.props.ip : "localhost",
        time: null,
        github_starred: []
      },
    };
    this.goBack = this.goBack.bind(this)
  }

  componentDidMount() {
      const myheaders = new Headers();
      fetch('https://willowlabs.io', { method: 'GET', headers: myheaders, mode: 'cors' })
      .then(resp => resp.json())
      .then(resp => {
        this.setState({data: {time : resp.time, ip: resp.xForwardedFor}})
      })
      .catch(e => this.state.data = e)

      fetch('https://api.github.com/users/washt/events', { method: 'GET', headers: myheaders, mode: 'cors' })
      .then(resp => resp.json())
      .then(resp => {
        const starEvents = resp
                            .filter(r => r.type === "WatchEvent")
                            .map(r => ({name: r.repo.name, url: r.repo.url}))
        this.setState({data: {github_starred: starEvents}})
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
          <div>
            <GraphWrapper>
              Just a test.
              <p>Here's some data:</p>
              <p>Your IP: {this.state.ip}</p>
              <p>Timestamp: {this.state.time}</p>
              <Link onClick={this.goBack} href="#"><FaArrowLeft/> Go Back</Link>
            </GraphWrapper>
            { this.state.data.github_starred ? this.state.data.github_starred.map(item => <StyledGridItem url={item.url} name={item.name}/>) : null}
  
          </div>
       )
    }
    return null
  }
}


const GridItem = (props) => (
  <div className="grid-item">
    <p>Name: {props.name}</p>
    <a href={props.url}>{props.url}</a>
  </div>
);

const StyledGridItem = styled(GridItem)`
  text-decoration: none;
  color: ${props => colors[props.color] ? colors[props.color] : colors.blue};
  padding: 10px;
`;

const Link = styled.a`
  text-decoration: none;
  color: ${props => colors[props.color] ? colors[props.color] : colors.blue};
  padding: 10px;
`;

const GraphWrapper = styled.section`
  margin: 20%;
  border-style: solid;
  background: #363636;
  color: #FFFFFF;
  font-family: Source Code Pro;
  text-align: center;
`;