import './App.css'
import { useState } from 'react'
import ImageGallery from './components/ImageGallery/ImageGallery'
import SearchBar from './components/SearchBar/SearchBar'
import Loader from './components/Loader/Loader'
import ErrorMessage from './components/ErrorMessage/ErrorMessage'
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn'
import axios from "axios";
import { useEffect } from 'react'

const ACCESS_KEY = 'MH2Cl9dmlA6VCRuYzTv_4n326c2Mp_C0YuB8hGEMPRo'

function App() {
  const [query, setQuery] = useState('')
  const [images, setImages] = useState([])

  const handleChange = (event) => {
    event.preventDefault();
    setQuery(event.target.value)
    console.log(query)
  }

  // useEffect(() => {
  //   async function fetchImages() {
  //     const response = await axios.get(
  //       `https://api.unsplash.com/search/photos/?client_id=${ACCESS_KEY}&query=${query}`
  //     );
  //     console.log(response.data.results);
  //     setImages(response.data.results)
  //   }

  //   fetchImages();
  // }, [query]);

  return (
    <>
      <SearchBar  onSubmit={setQuery} handleChange={handleChange}/>
      <ErrorMessage/>
      <Loader/>
      <ImageGallery images={images}/>
      <LoadMoreBtn/>
    </>
  )
}

export default App
