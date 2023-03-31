const { HeaderList, HeaderLink, HeaderText } = require('./Header.styled');

const navItems = [
  { href: '/', text: 'Home' },
  { href: 'movies', text: 'Movies' },
];
export const Header = () => {
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
