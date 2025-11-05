import { Link } from "react-router";

const menuItems = [{
  title: 'Home',
  path: '/'
}, {
  title: 'About Us',
  path: '/about'
}, {
  title: 'Events',
  path: '/event'
}, {
  title: 'Services',
  path: '/pages/service'
}, {
  title: 'Careers',
  path: '/career'
}, {
  title: 'Stories',
  path: '/blog'
}, {
  title: 'Contact Us',
  path: '/pages/contact'
}];

const MobileMenuItem = () => {
  return <ul className="mobile-nav-list nav-list1">
            {menuItems.map((item, index) => <li key={index}>
                    <Link to={item.path}>{item.title}</Link>
                </li>)}
        </ul>;
};
export default MobileMenuItem;