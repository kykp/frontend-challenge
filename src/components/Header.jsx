import { NavLink } from "react-router-dom"

export const Header = () => {

  return (
    <section className='header'>
        <nav className='header__nav'>
          <ul className='header__nav_ul'>
            <li><NavLink 
              to="/frontend-challenge" 
              className='header__nav_a' 
              activeclassname="active"
              >
                Все котики</NavLink></li>
                <li><NavLink to="/favourites" 
              className='header__nav_a'
              activeclassname="active"
              >
                Любимые котики</NavLink>
                </li>
          </ul>
        </nav>
    </section>
  )
}
