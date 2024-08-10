import React, { useState } from 'react'
import useData from '../hooks/useDataWeather'

export default function Prueba() {

  const { datos, setCiudad } = useData();
  const [searchCity, setSearchCity] = useState('');

  const handleSearch = (e) => {
    e.preventDefault(); 
    setCiudad(searchCity)
  }

  return (
    <div>
      {datos.city ?(
        <>
          <h1>{datos.city.name}</h1>
          <p>Temperatura mínima: {datos.list[0].main.temp_min}</p>
          <p>Temperatura maxima: {datos.list[0].main.temp_max}</p>
          <p>Humedad: {datos.list[0].main.humidity}</p>
          <p>Fecha: {datos.list[0].dt_txt}</p>
        </>
      ) : (
        <p>Cargando datos...</p>
      )}
      <br/>
      <div className="container">
        <h1>Buscar Ciudad</h1>
        <form onSubmit={handleSearch}>
          <div className="input-group">
            <input 
              type="text" 
              id="search"  
              className="form-control"
              value={searchCity}
              onChange={(e) => setSearchCity(e.target.value)}
            />
            <button type="submit" className="btn btn-secondary">Buscar</button>
          </div> 
        </form>

    </div>

    </div>
  )
}
