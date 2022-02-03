import React, { useState, useEffect } from "react";
import style from './style';
import axios from 'axios';
import Cards from '../cards/Cards'

function RepositoriesPage(props) {
    const fetchReposUrl = props.repoUrl;
    const [filteredData, setFilteredData] = useState([]);
    const [publicRepos, setPublicRepos] = useState([]);

    useEffect(() => {
        axios.get(fetchReposUrl)
        .then(res => {
            setPublicRepos(res.data);        
        }).catch( error => console.log(error.message));
   },[])

    const handleChange = (event) => {
        const searchedWord = event.target.value;
        const filteredWords = publicRepos.filter((item) => {
            return item.name.toLowerCase().includes(searchedWord.toLowerCase())
        });
        searchedWord === '' ? setFilteredData([]) : setFilteredData(filteredWords)
    }


    return (
        <div>
            <div style={style.searchBar}>
                <input style={style.textInput} type='text' placeholder='Find a Repository...' onChange={handleChange} />
            </div>
            {filteredData.length !== 0 && (
                <div style={style.displayList}>
                    {filteredData.map((value, key) => {
                        return (
                            <Cards data = {value} key={value.id}/>
                        )
                    })}
                </div>
            )}
        </div>
    )
}

export default RepositoriesPage;