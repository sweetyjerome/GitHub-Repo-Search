import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import style from './style';
import Link from '@mui/material/Link';
import BalanceIcon from '@mui/icons-material/Balance';

function Cards (props) {
    const [license, setLicense] = useState('');
    const repo= props.data;

    useEffect(() => {
        Axios.get(`https://api.github.com/repos/${repo.owner.login}/${repo.name}/license`,{ headers: {'Authorization' : `token ${process.env.REACT_APP_PTA}`}})
        .then(res => {
            setLicense(res.data.license.name)
        })
        .catch(error => console.log(error))
    }, [])

    return(
        <div style={style.mainDiv}> 
        <hr></hr>
        <Link href={repo.html_url} underline='hover' variant="h6" > {repo.name} </Link>
        <p>{repo.description}</p>

        {license && 
        <div style={style.licenseDiv}> 
            <BalanceIcon style={style.icon}/>
            <p style={style.license}> {license} </p>
        </div>  
        }
    </div>
    )
}

export default Cards;