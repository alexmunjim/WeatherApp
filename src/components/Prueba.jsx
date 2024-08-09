import React from 'react'
import useData from '../hooks/useDataWeather'

export default function Prueba() {

  const { datos, ciudad, setCiudad } = useData();

  const handleSearch = () => {
    setCiudad(ciudad)
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
      <input
        type='texr'
        value={ciudad}
        onChange={(e)=>setCiudad(e.target.value)}
        placeholder='Bucar ciudad'
      />
      <button onClick={handleSearch}>Buscar</button>
    </div>
  )
}
