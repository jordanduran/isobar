import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <nav className='navbar'>
        <div className='navbar-title'>isobar</div>
        <div className='navbar-links'>
          <ul>
            <li>
              <Link to='/states'>States</Link>
            </li>
            <li>
              <Link to='/guess'>Guess</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
