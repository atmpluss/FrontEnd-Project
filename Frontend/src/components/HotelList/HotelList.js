import { useState } from 'react'
import { useFetch } from '../../hooks/useFetch'
import './HotelList.css'

export default function TripList() {

  const [url, setUrl] = useState('http://localhost:3000/hotels')
  const { data: hotels, isPending, error } = useFetch(url)


  return (
    <div className="hotel-list">
      <ul>
        {isPending && <div> data is loading...</div>}
        {error && <div> error in fetching data...</div>}
        {hotels && hotels.map(hotel => (
          <li key={hotel.id}>
            <h3>{hotel.name}</h3>
            <p>{hotel.city}</p>
            <p>{hotel.location}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}