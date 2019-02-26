import React, { Component } from 'react';
//jumbotron images
import Cloud1 from '../images/cloud1.png';
import Cloud2 from '../images/cloud2.png';
import Sun from '../images/sun.png';
import Mtns_left from '../images/mountains_left.png';
import Mtns_right from '../images/mountains_right.png';
import Waves_lt from '../images/waves_light.png';
import Waves_med from '../images/waves_med.png';
import Waves_dark from '../images/waves_dark.png';
import Lake from '../images/lake.png';
import Ground from '../images/ground.png';
import { TimeLineLite } from 'gsap';

class Jumbotron extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    animate = () => {
        let animation = new TimeLineLite()
        animation
            .to(this.box, 1, { x:200 })
    }

    componentDidMount() {
        
    }

    render() {
        return (
            <div className='jumbotron'>
                <div className='scenery'>
                    <div className='air'>
                        <img src={Sun} alt='sun' className='sun'/>
                        <div className='clouds'>
                            <img src={Cloud1} alt='cloud' className='cloud 1'/>
                            <img src={Cloud1} alt='cloud' className='cloud 2'/>
                            <img src={Cloud1} alt='cloud' className='cloud 3'/>
                            <img src={Cloud2} alt='cloud' className='cloud 4'/>
                            <img src={Cloud2} alt='cloud' className='cloud 5'/>
                            <img src={Cloud2} alt='cloud' className='cloud 6'/>
                        </div>
                    </div>
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
                <img src={Ground} alt='ground' className='ground' />
                </div>
            </div>
        )
    }
}

export default Jumbotron;