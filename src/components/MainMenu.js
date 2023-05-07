import { Link } from 'react-router-dom';
import { MOTHERBOARD } from '../helper/constants';

const MainMenu = () => {
  return (
    <ul>
      <li>
        <Link to='/'>Home</Link>
        <Link to='/add'>Add</Link>
        <Link to={`/parts?type=${MOTHERBOARD}`}>Parts</Link>
        <Link to='/sign'>Sign</Link>
      </li>
    </ul>
  );
};

export default MainMenu;
