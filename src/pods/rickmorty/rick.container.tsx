import React, { useEffect, useState } from 'react';
import { RickMortyComponent, getResource } from '@/pods';

export const RickMortyContainer: React.FC = () => {

    const [characters, setCharacters] = useState([])
  
    useEffect(() => {
      const fetchData = async () => {
        const response = await getResource();
          setCharacters(response.results);
      }
  
      fetchData();
    }, [])
  
    return (
        <RickMortyComponent characters={characters} />
      
    )

}

