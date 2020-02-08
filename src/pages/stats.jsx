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
    const myheaders = new Headers();

    fetch('https://api.github.com/users/washt/events', { method: 'GET', headers: myheaders, mode: 'cors' })
    .then(resp => resp.json())
    .then(resp => {
      const starEvents = resp
                          .filter(r => r.type === "WatchEvent")
                          .map(r => ({name: r.repo.name, url: r.repo.url.replace("api.", "").replace("repos/", "")}))
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
              <p>Recent Activity</p>
              { this.state.data.github_starred ? this.state.data.github_starred.map(item => <StyledGridItem url={item.url} name={item.name}/>) : null}
              <Link onClick={this.goBack} href="#" color="yellow"><FaArrowLeft/>Home</Link>
            </GraphWrapper>
          </div>
       )
    }
    return null
  }
}


const GridItem = (props) => (
  <div className="flex mb-4">
    <div className="w-full bg-gray-500 h-12">
      <Link href={props.url}>Starred {props.name}</Link>
    </div>
  </div>
);

const StyledGridItem = styled(GridItem)`
  a {
    text-decoration: none;
    color: inherit;
  };
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