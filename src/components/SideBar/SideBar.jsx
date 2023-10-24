import { NavLink } from './SideBar.styled';


const SideBar = () => {
  return (
    <div>
      <NavLink to="/kitchen">Для кухні</NavLink>
      <NavLink to="/bathroom">Для ванни</NavLink>
      <NavLink to="/bedroom">Для спальні</NavLink>
      <NavLink to="/living-room">Для вітальні</NavLink>
      <NavLink to="/garden">Для саду</NavLink>
      <NavLink to="/office">Для офісу</NavLink>
      <NavLink to="/kids">Для дітей</NavLink>
      <NavLink to="/lighting">Освітлення</NavLink>
      <NavLink to="/decor">Декор</NavLink>
      <NavLink to="/textile">Текстиль</NavLink>
      <NavLink to="/sale">Розпродаж</NavLink>
      {/* інше */}
    </div>
  );
};

export default SideBar;
