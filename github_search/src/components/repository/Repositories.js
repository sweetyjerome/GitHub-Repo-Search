import React, { useState, useEffect } from "react";
import style from './style';
import axios from 'axios';
import Cards from '../cards/Cards'

function RepositoriesPage(props) {
    const fetchReposUrl = props.repoUrl;
    const [filteredData, setFilteredData] = useState([]); //state variable to control the rendering of searched repos
    const [publicRepos, setPublicRepos] = useState([]); //state variable to hold all the repos fetched from github API

    useEffect(() => {
        axios.get(fetchReposUrl, { headers: {'Authorization' : `token ${process.env.REACT_APP_PTA}`}})
        .then(res => {
            setPublicRepos(res.data);       
        }).catch( error => console.log(error.message));
   },[])

    const handleChange = (event) => {
        const searchedWord = event.target.value;
        const filteredWords = publicRepos.filter((item) => {
            return item.name.toLowerCase().includes(searchedWord.toLowerCase())
        });
        setFilteredData(filteredWords)
        // searchedWord === '' ? setFilteredData([]) :
    }


    return (
        <div>
            <div style={style.searchBar}>
                <input style={style.textInput} type='text' placeholder='Find a Repository...' onChange={handleChange} />
            </div>
  
                <div style={style.displayList}>
                    {filteredData.map((value, key) => {
                        return (
                            <Cards data = {value} key={value.id}/>
                        )
                    })}
                </div>
        </div>
    )
}

export default RepositoriesPage;