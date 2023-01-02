import React,{useState, useEffect} from 'react'

const Search  = () => {
const [articles, setArticles] = useState([])
const [search, setSearch] = useState('')


const URL = 'https://fakestoreapi.com/products'

const showData = async () => {
    const response = await fetch(URL)
    const data = await response.json()
    console.log(data)
}

showData()




return (
    <div>Search</div>
)
}

export default Search;