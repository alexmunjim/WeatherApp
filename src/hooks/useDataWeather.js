import { useState, useEffect } from 'react';

const apiKey = 'a3890157ed8626e855791bd45391b86c';

const useData = () => {
  const [datos, setDatos] = useState({});
  const [error, setError] = useState(null);
  const [ciudad, setCiudad] = useState('bogota')

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${ciudad}&appid=${apiKey}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data);
        setDatos(data);
        
      } catch (err) {
        console.error('Fetch error:', err);
        setError(err);
      }
    };
    
      fetchData();
    
    
  }, [ciudad]);

  return { datos, error, ciudad, setCiudad };
}

export default useData;

