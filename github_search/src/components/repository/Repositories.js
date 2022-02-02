import React, { useState, useEffect } from "react";
import style from './style';
import axios from 'axios';
import mockData from '../Data.json';
import Cards from '../cards/Cards'

function RepositoriesPage(props) {
    const data = mockData;
    const fetchReposUrl = props.repoUrl;
    const [filteredData, setFilteredData] = useState([]);
    const [publicRepos, setPublicRepos] = useState([]);

    useEffect(() => {
        axios.get(fetchReposUrl)
        .then(res => {
            console.log('data', res.data);
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
            {filteredData.length != 0 && (
                <div style={style.displayList}>
                    {filteredData.map((value, key) => {
                        return <Cards data = {value} key={value.id}/>
                    })}
                </div>
            )}
        </div>
    )
}

export default RepositoriesPage;