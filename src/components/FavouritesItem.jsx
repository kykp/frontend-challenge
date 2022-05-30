import React, {useState} from 'react'
import heart from "../images/heart.png"
import heartFilled from "../images/fullHeart.png"

export const FavouritesItem = ({data,
   addCats = Function.prototype,
    deleteCats = Function.prototype
  }) => {
  const {url} = data;

  const [hoveredOnBlock, setHovered] = useState(false)
  const [hoveredHeart, setHoverdHeart] = useState(false);
  const [clickedHeart, setClickedHeart] = useState(true);

  const showLikeOnHovered = () => {
    if (clickedHeart) {
      return "card-like_active"
    }
    else if (hoveredHeart || hoveredOnBlock) {
      return "card-like_active"
    } else {
      return "card-like"
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

  const picturesLikeVisions = () => {
    if (hoveredHeart || clickedHeart) {
      return heartFilled
    } else {
      return heart
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
      src={picturesLikeVisions()} 
      alt="heart" 
      className={showLikeOnHovered()}
      />
  </div>
  )
}
