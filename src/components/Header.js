
import Logo from '../robinhood.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './Header.css'

function Header() {
  return (
    <div className="Header">
      <div className="Header-logo">
        <img src={Logo} />
      </div>
      <div className="Header-search">
        <div className="searchContainer">
          {/* Search Icon */}
          <FontAwesomeIcon icon={faSearch} />
          <input className="searchInput" type="text"  placeholder="Search"/>
        </div>
      </div>
      <div className="Header-links">
        <a href="/">Free Stocks</a>
        <a href="/">Portfolio</a>
        <a href="/">Cash</a>
        <a href="/">Messages</a>
        <a href="/">Account</a>
      </div>
    </div>
  );
}

export default Header;