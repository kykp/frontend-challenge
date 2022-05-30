import React, {useState} from 'react'
import { FavouritesItem } from './FavouritesItem'

export const Favourites = ({favorite, deleteCats = Function.prototype}) => {

  const[noOfElements, setNoOfElements] = useState(15);
 
 const loadMore = () => {
  setNoOfElements(noOfElements+ 10)
 }
  const slice = favorite.slice(0, noOfElements);

  return (<>
    <section className='gallery'>
       {slice.map(data => (
          <FavouritesItem 
              key={data.id} 
              data={data} 
              deleteCats={deleteCats}
              />))} 
    </section>
    <div className="loadMore"  onClick={() => loadMore()}>... загружаем еще котиков ...</div>
    </>
  )
}
