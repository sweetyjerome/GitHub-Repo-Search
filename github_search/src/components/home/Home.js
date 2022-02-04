import React, {useEffect, useState }from 'react'
import Style from './style';
import CenteredTabs from '../tab/Tab';
import axios from 'axios';
import FollowersIcon from '@mui/icons-material/GroupOutlined';
import CircleIcon from '@mui/icons-material/Circle';
import Link from '@mui/material/Link';

function HomePage () {
    const [userData, setUserData] = useState({});

    //fetching the user deatils using github API and setting the state variable to the response data.

    useEffect(() => {
        axios.get('https://api.github.com/users/farhankn', { headers: {'Authorization' : `token ${process.env.REACT_APP_PTA}` }}
        )
        .then(res => {
            setUserData(res.data);
      }).catch(error => console.log(error));
    },[])
    
    return(
    <div>
        <div style={Style.main}>
            <CenteredTabs data={userData.repos_url}/> {/** pass the repo url to the next page as props**/}
            
        </div>
        <div style={Style.menu}> 
            <div style={Style.pictureBox}>
                <img src = {userData.avatar_url} style={Style.picture}/>
            </div>
            {/** display the details of the user **/}
            <div style={Style.aboutBox}> 
                <h2>{userData.name}</h2>
                <h3 style={Style.login}>{userData.login}</h3>
                <div>
                    {userData.bio}
                </div>
                 {/* rendering the additional details of the user such as followers and following count. */}
                <div style={Style.info}>
                    <FollowersIcon style={Style.followersIcon}/>
                    {userData.followers}
                    <Link href={userData.followers_url} color='inherit' underline='hover' style={Style.link}> followers </Link> 
                    <CircleIcon style={Style.circleIcon}/>
                    {userData.following} 
                    <Link href={userData.following_url} color='inherit' underline='hover' style={Style.link}> following </Link> 
                </div>

               
            </div>

        </div>   
    </div>
    )
}
export default HomePage;