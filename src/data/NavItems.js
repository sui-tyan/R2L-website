const navItems = [
  {
    id: 1,
    name: 'Home',
    href: '/',
    subNavItems: [
      //Don't remove subNavItems array to prevent error
      // {
      //   id: 1,
      //   name: 'Home One',
      //   href: '/',
      // },
      // {
      //   id: 2,
      //   name: 'Home Two',
      //   href: '/home2',
      // },
      // {
      //   id: 3,
      //   name: 'Home Three',
      //   href: '/home3',
      // },
      // {
      //   id: 4,
      //   name: 'Header Styles',
      //   href: '/',
      //   subItems: [
      //     {
      //       id: 1,
      //       name: 'Header One',
      //       href: '',
      //     },
      //     { id: 2, name: 'Header Two', href: '' },
      //     { id: 3, name: 'Header Three', href: '' },
      //   ],
      // },
    ],
  },
  {
    id: 2,
    name: 'Meet the Team',
    href: '/team',
    subNavItems: [
      // { id: 1, name: "About", href: "/about" },
      // { id: 2, name: "Volunteers", href: "/volunteers" },
      // { id: 3, name: "Gallery", href: "/gallery" },
      // { id: 4, name: "Become a Volunteer", href: "/become-volunteer" },
    ],
  },
  {
    id: 3,
    name: 'Work Packages',
    href: '/work-packages',
    // href: "/404",
    subNavItems: [
      // {
      //   id: 1,
      //   name: "Work Packages",
      //   href: "/work-packages",
      //   // subItems: [
      //   //   {
      //   //     id: 1,
      //   //     name: "Work Package 1",
      //   //     href: "/workpackage-one",
      //   //   },
      //   //   { id: 2, name: "Work Package 2", href: "/workpackage-two" },
      //   //   { id: 3, name: "Work Package 3", href: "/workpackage-three" },
      //   //   { id: 4, name: "Work Package 4", href: "/workpackage-four" },
      //   //   { id: 5, name: "Work Package 5", href: "/workpackage-five" },
      //   //   { id: 6, name: "Work Package 6", href: "/workpackage-six" },
      //   // ],
      // },
      // { id: 2, name: "Publications", href: "/publications" },
      // { id: 3, name: "News and Events", href: "/news-and-events" },
      // { id: 4, name: "News Details", href: "/news-details" },

    ],
  },
  {
    id: 4,
    name: 'Contact Us',
    href: '/contact',
    subNavItems: [
      // { id: 1, name: 'Events', href: '/events' },
      // { id: 2, name: 'Event Details', href: '/event-details' },
    ],
  },
  // {
  //   id: 5,
  //   name: "News",
  //   href: "/news",
  //   subNavItems: [
  //     { id: 1, name: "News", href: "/news" },
  //     { id: 2, name: "News Details", href: "/news-details" },
  //   ],
  // },
  // {
  //   id: 6,
  //   name: "Contact",
  //   href: "/contact",
  //   subNavItems: [],
  // },
];

export default navItems;

export const social = [
  { icon: 'fa-twitter', link: '' },
  { icon: 'fa-facebook-square', link: '' },
  // { icon: "fa-dribbble", link: "" },
  { icon: 'fa-instagram', link: '' },
];
