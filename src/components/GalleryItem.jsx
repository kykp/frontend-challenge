import React, {useState} from 'react'
import heart from "../images/heart.png"
import heartFilled from "../images/fullHeart.png"

export const GalleryItem = ({data,
   addCats = Function.prototype,
    deleteCats = Function.prototype
  }) => {
  const {url, favorite} = data;

  const [hoveredOnBlock, setHovered] = useState(false)
  const [hoveredHeart, setHoverdHeart] = useState(false);
  const [clickedHeart, setClickedHeart] = useState(false);


  const heartStatuse = () => {
    if (clickedHeart) {
      return "card-like_active"
    }
    else if (hoveredHeart || hoveredOnBlock) {
      return "card-like_active"
    } else {
      return "card-like"
    }
  }

  const heartStatuseIMG = () => {
    if (clickedHeart || hoveredHeart || favorite) {
      return heartFilled
    } else {
      return heart
    }
  }

  const onHandleClick = (clickedHeart) =>{
    if (clickedHeart) {
      deleteCats(data)
      setClickedHeart(false)
    } else {
      addCats(data)
      setClickedHeart(true)
    }
  }

  return (
    <div 
      className="card" 
      onMouseEnter={() => setHovered(true)} 
      onMouseLeave={() => setHovered(false)}
      >
    <div className="card-image">
      <img loading="lazy" src={url} alt={url} className="card-image-a"/>
    </div>
    <img 
      onMouseEnter={() => setHoverdHeart(true)} 
      onMouseLeave={() => setHoverdHeart(false)} 
      onClick={() => onHandleClick(clickedHeart)} 
      src={heartStatuseIMG()} 
      alt="heart" 
      className={heartStatuse()}
      />
  </div>
  )
}
