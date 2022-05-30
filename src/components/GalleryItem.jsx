import React, {useState} from 'react'
import heart from "../images/heart.png"
import heartFilled from "../images/fullHeart.png"

export const GalleryItem = ({data,
   addCats = Function.prototype
  }) => {
  const {url, like} = data;

  const [hoveredOnBlock, setHovered] = useState(false)
  const [hoveredHeart, setHoverdHeart] = useState(false);


  const showLikeOnHovered = () => {
    if (hoveredHeart || hoveredOnBlock) {
      return "card-like_active"
    } else {
      return "card-like"
    }
  }



  const picturesLikeVisions = () => {
    if (hoveredHeart || like) {
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
      onClick={() => addCats(data)} 
      src={picturesLikeVisions()} 
      alt="heart" 
      className={showLikeOnHovered()}
      />
  </div>
  )
}
