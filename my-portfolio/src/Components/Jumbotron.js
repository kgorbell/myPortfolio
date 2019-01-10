import React, { Component } from 'react';
//jumbotron images
import Cloud1 from '../images/cloud1.png';
import Cloud2 from '../images/cloud2.png';
import Sun from '../images/sun.png';
import Tree from '../images/tree.png';
import Mtns_left from '../images/mountains_left.png';
import Mtns_right from '../images/mountains_right.png';

class Jumbotron extends Component {
    constructor() {
        super();
        this.state = {

        }
    }

    render() {
        return (
            <div className='jumbotron'>
                {/* <Cloud1 /> */}
                <img src={Cloud1} alt='cloud'/>
                <img src={Cloud2} alt='cloud'/>
                <img src={Sun} alt='sun'/>
                <img src={Tree} alt='tree'/>
                <img src={Mtns_left} alt='mountains'/>
                <img src={Mtns_right} alt='mountains'/>
            </div>
        )
    }
}

export default Jumbotron;