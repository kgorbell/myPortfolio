import React, { Component } from 'react';
//jumbotron images
import Cloud1 from '../images/cloud1.png';
import Cloud2 from '../images/cloud2.png';
import Sun from '../images/sun.png';
import Tree from '../images/tree.png';
import Mtns_left from '../images/mountains_left.png';
import Mtns_right from '../images/mountains_right.png';
import Waves_lt from '../images/waves_light.png';
import Waves_med from '../images/waves_med.png';
import Waves_dark from '../images/waves_dark.png';
import Lake from '../images/lake.png';

class Jumbotron extends Component {
    constructor() {
        super();
        this.state = {

        }
    }

    render() {
        return (
            <div className='jumbotron'>
                {/* <img src={Cloud1} alt='cloud'/>
                <img src={Cloud2} alt='cloud'/>
                <img src={Sun} alt='sun'/>
                <img src={Tree} alt='tree'/> */}
                <div className='scenery'>
                    <div className='mountains'>
                        <img src={Mtns_left} alt='mountains' className='mtns_left'/>
                        <img src={Mtns_right} alt='mountains' className='mtns_right'/>
                    </div>
                    <div>
                        <img src={Waves_lt} alt='waves' className='wave lt'/>
                        <img src={Waves_med} alt='waves' className='wave med'/>
                        <img src={Waves_dark} alt='waves' className='wave dark'/>
                    </div>
                    <div className='grass'>
                        <img src={Lake} alt='lake' className='lake'/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Jumbotron;