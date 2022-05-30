import { NavLink } from "react-router-dom"

export const Header = () => {

  return (
    <section className='header'>
        <nav className='header__nav'>
          <ul className='header__nav_ul'>
            <li><NavLink to="/" 
              className='header__nav_a' 
              exact activeClassName="active"
              >
                Все котики</NavLink></li>
                <li><NavLink to="/favourites" 
              className='header__nav_a'
              activeClassName="active"
              >
                Любимые котики</NavLink>
                </li>
          </ul>
        </nav>
    </section>
  )
}
