const { HeaderList, HeaderLink, HeaderText } = require('./Header.styled');

const navItems = [
  { href: '/', text: 'Home' },
  { href: 'movies', text: 'Movies' },
];
 const Header = () => {
  return (
    <HeaderList>
      {navItems.map(({ href, text }) => (
        <HeaderText key={href}>
          <HeaderLink to={href}>{text}</HeaderLink>
        </HeaderText>
      ))}
    </HeaderList>
  );
};
export default Header;