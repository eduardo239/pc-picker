import { Link } from 'react-router-dom';

const MainMenu = () => {
  return (
    <ul>
      <li>
        <Link to='/'>Home</Link>
        <Link to='/add'>Add</Link>
        <Link to='/parts'>Parts</Link>
        <Link to='/sign'>Sign</Link>
      </li>
    </ul>
  );
};

export default MainMenu;
