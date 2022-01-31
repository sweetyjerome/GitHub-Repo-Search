import React from 'react'
import Style from './style';
import BasicTabs from '../../components/Tab';
import {profilePicture} from '../../assets/index'


function HomePage () {
    return(
    <div>
        <div style={Style.main}>
            <BasicTabs></BasicTabs>        
        </div>
        <div style={Style.menu}>
            <div>
                <img src={profilePicture} style={Style.picture}/>
            </div>
        </div>   
    </div>
    )
};

export default HomePage;