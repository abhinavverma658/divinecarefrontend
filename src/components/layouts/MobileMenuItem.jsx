import { useState } from 'react';
import { Link } from "react-router";
import { FaMinus, FaPlus } from 'react-icons/fa6';
const menuItems = [{
  title: 'Home',
  links: [{
    path: '/home',
    label: 'Home One'
  }, {
    path: '/multi-page/animal-rescue',
    label: 'Home Two'
  }, {
    path: '/multi-page/water-aid',
    label: 'Home Three'
  }, {
    path: '/multi-page/senior-citizen',
    label: 'Home Four'
  }, {
    path: '/multi-page/human-rights',
    label: 'Home Five'
  }]
}, {
  title: 'About',
  path: '/about'
}, {
  title: 'Events',
  links: [{
    path: '/event',
    label: 'Events'
  }, {
    path: '/event-left',
    label: 'Events Left'
  }, {
    path: '/event-right',
    label: 'Events Right'
  }, {
    path: '/event-single',
    label: 'Events Single'
  }]
}, {
  title: 'Blogs',
  links: [{
    path: '/blog',
    label: 'Blog'
  }, {
    path: '/blog-left',
    label: 'Blog Left'
  }, {
    path: '/blog-right',
    label: 'Blog Right'
  }, {
    path: '/blog-single',
    label: 'Blog Single'
  }]
}, {
  title: 'Pages',
  links: [{
    path: '/pages/service',
    label: 'Our Services'
  }, {
    path: '/pages/team',
    label: 'Our Volunteers'
  }, {
    path: '/pages/faq',
    label: 'FAQ'
  }, {
    path: '/pages/contact',
    label: 'Contact'
  }, {
    path: '/pages/error-404',
    label: '404'
  }]
}, {
  title: 'Causes',
  links: [{
    path: '/cause',
    label: 'Causes'
  }, {
    path: '/cause/cause-left',
    label: 'Cause Left'
  }, {
    path: '/cause/cause-right',
    label: 'Cause Right'
  }, {
    path: '/cause/cause-single',
    label: 'Cause Single'
  }]
}];
const MobileMenuItem = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const toggleMenu = index => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return <ul className="mobile-nav-list nav-list1">
            {menuItems.map((item, index) => <li key={index} className={`has-sub ${openIndex === index ? 'submenu-opened' : ''}`}>
                    {item.links ? <>
                            <div className="d-flex align-items-center justify-content-between" onClick={() => toggleMenu(index)}>
                                <a href="#">{item.title}</a>
                                <span>{openIndex === index ? <FaMinus /> : <FaPlus />}</span>
                            </div>
                            <ul className={`sub-menu ${openIndex === index ? 'open-sub sub-menu-active d-block' : ''}`}>
                                {item.links.map((link, linkIndex) => <li key={linkIndex}><Link to={link.path}>{link.label}</Link></li>)}
                            </ul>
                        </> : <Link to={item.path}>{item.title}</Link>}
                </li>)}
        </ul>;
};
export default MobileMenuItem;