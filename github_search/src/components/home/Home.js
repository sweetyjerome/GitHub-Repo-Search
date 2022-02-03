import React, {useEffect, useState }from 'react'
import Style from './style';
import CenteredTabs from '../tab/Tab';
import axios from 'axios';

function HomePage () {
    const [userData, setUserData] = useState({});

    useEffect(() => {
        axios.get('https://api.github.com/users/farhankn', { headers: {'Authorization' : 'token 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'} }
        )
        .then(res => {
            setUserData(res.data);
            console.log(res.data);
      }).catch(error => console.log(error));
    },[])
    
    return(
    <div>
        <div style={Style.main}>
            <CenteredTabs data={userData.repos_url}/> 
        </div>
        <div style={Style.menu}>
            <div style={Style.pictureBox}>
                <img src = {userData.avatar_url} style={Style.picture}/>
            </div>
            <div style={Style.aboutBox}>
                <h2>{userData.name}</h2>
                <h3 style={Style.login}>{userData.login}</h3>
            </div>
        </div>   
    </div>
    )
}
export default HomePage;