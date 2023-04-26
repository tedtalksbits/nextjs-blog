import Link from 'next/link';
import styled from 'styled-components';
import { useRouter } from 'next/router';

const SidePanel = styled.nav`
  grid-area: sidebar;
  background-color: #f5f5f5;
  border-right: 1px solid #eaeaea;
  padding: 1rem;
`;

const Links = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const LinkItem = styled.li`
  border-bottom: 1px solid #eaeaea;
  &:last-child {
    border-bottom: none;
  }
`;

const NavLink = styled(Link)`
  padding: 0.5rem 1rem;
  text-decoration: none;
  display: block;
  color: #000000;
  &:hover {
    background-color: #eaeaea;
    cursor: pointer;
    text-decoration: none;
  }
  background-color: ${({ active }) => (active ? '#eaeaea' : 'transparent')};
  border-radius: 0.25rem;
`;

const Navigation = () => {
  const router = useRouter();
  return (
    <SidePanel>
      <Links>
        <LinkItem>
          <NavLink href='/' active={router.asPath === '/'}>
            Blogs
          </NavLink>
        </LinkItem>
      </Links>
    </SidePanel>
  );
};

export default Navigation;
