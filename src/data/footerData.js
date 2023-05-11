import bg from '@/images/backgrounds/footer-uc.jpg';
import footerImage from '@/images/resources/footer-logo.jpg';
import { contact } from './contactData';

const footerData = {
  ...contact,
  link: 'Halpes',
  copyrightYear: new Date().getFullYear(),
  about:
    'Rights2LIFE: Towards a Responsive Criminal Justice System in the Philippines Achieving a responsive criminal justice system will usher the dream of reaching the sustainable development goal of peace, security and strong institutions.', bottomLogo: footerImage.src,
  footerBg: bg.src,
  social: [
    {
      id: 1,
      href: '#',
      icon: 'fa-twitter',
    },
    {
      id: 2,
      href: '#',
      icon: 'fa-facebook-square',
    },
    // {
    //   id: 3,
    //   href: "#",
    //   icon: "fa-dribbble"
    // },
    {
      id: 3,
      href: '#',
      icon: 'fa-instagram',
    },
  ],
  exploreList: [
    {
      id: 1,
      href: '#',
      title: 'Home',
    },
    {
      id: 2,
      href: '#',
      title: 'Meet the Team',
    },
    {
      id: 3,
      href: '#',
      title: 'Work Packages',
    },
    {
      id: 4,
      href: '#',
      title: 'Contact Us',
    },
    // {
    //   id: 5,
    //   href: '#',
    //   title: 'Sponsors',
    // },
    // {
    //   id: 6,
    //   href: '#',
    //   title: 'Fundraising',
    // },
    // {
    //   id: 7,
    //   href: '#',
    //   title: 'Contact',
    // },
    // {
    //   id: 8,
    //   href: '#',
    //   title: 'Help',
    // },
    // {
    //   id: 9,
    //   href: '#',
    //   title: 'Faqs',
    // },
  ],
};

export default footerData;
