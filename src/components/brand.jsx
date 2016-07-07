import React from 'react';
import ReactTHREE from 'react-three';
import THREE from 'three';

export default class Brand extends React.Component {
  render() {
    var Renderer = ReactTHREE.Renderer;
    var Scene = ReactTHREE.Scene;
    var PerspectiveCamera = ReactTHREE.PerspectiveCamera;
    var Cupcake = ReactTHREE.Cupcake;
 
    var aspectratio = this.props.width / this.props.height;
    var cameraprops = {fov : 75, aspect : aspectratio, 
                       near : 1, far : 5000, 
                       position : new THREE.Vector3(0,0,600), 
                       lookat : new THREE.Vector3(0,0,0)};
    return ( <Renderer width={this.props.width} height={this.props.height}>
      <Scene width={this.props.width} height={this.props.height} camera="maincamera">
      <PerspectiveCamera name="maincamera" {...cameraprops} />
      <Cupcake {...this.props.cupcakedata} />
      </Scene>
      </Renderer>	
   )
  }
}
