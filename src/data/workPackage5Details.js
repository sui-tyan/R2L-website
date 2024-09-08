import image from '@/images/team/darlyn-tagarino.jpg';
import image3 from '@/images/resources/work-pkg5-img3.jpg';
import image2 from '@/images/resources/work-pkg5-img2.jpg';
import image1 from '@/images/resources/work-pkg5-img1.jpg';

const text1 =
  'Various joint programs between and among the academe, government, international bodies, and civil society will be identified and implemented that will heighten the awareness and advocacy for human rights in respective spaces. The end in view is a unified effort that is structured and systemic.';
const text2 =
  'The project hopes to see this come about in the form of a consortium that will strive not only towards integration but on synergy as well among the members.';
const summaryText =
  "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing.";

const workPackage5Details = {
  raised: '25,270',
  goal: '30,000',
  category: 'Medical',
  title:
    'A system-transformation multi-stakeholder partnership in human rights advocacy',

  images: [image1, image2, image3],
  texts: [text1, text2],
  summaryText,
  summaryList: [
    'Joint programs for awareness.',
    'Academe, government, civil society.',
    'Unified and structured effort.',
    'Consortium for integration.',
    'Synergy among members.',
  ],
  comments: [
    {
      id: 1,
      image: 'comment-1-1.jpg',
      message:
        'Sending love. My nephews Nick and Anthony Salaber are your teammates, so I know the caliber person you are. Our whole family is sending our best to you and your family.',
      sender: 'David Marks',
      time: '3 hours ago',
    },
    {
      id: 2,
      image: 'comment-1-2.jpg',
      message:
        'Sending love. My nephews Nick and Anthony Salaber are your teammates, so I know the caliber person you are. Our whole family is sending our best to you and your family.',
      sender: 'Christine Eve',
      time: '3 hours ago',
    },
  ],
  sidebar: {
    activities: [
      {
        id: 1,
        image: 'recent-donation-img-1.jpg',
        amount: 'April 25, 2023',
        name: 'Stakeholder Consultation kicks off on April 25, 2023',
        // time: "3 hours ago",
        text: 'Attended by key representatives from two state schools, three private schools, the Philippine National Police Human Rights Office...',
      },
      {
        id: 2,
        image: 'recent-donation-img-2.jpg',
        amount: 'May 8, 2023',
        name: 'First benchmarking with the Ateneo Human Rights Center',
        // time: "3 hours ago",
        text: 'Seven members of the Righst2LIFE team led by Dr. Darlyn Tagarino visited the Ateneo Human Rights Center on May 8, 2023 at Rockwell, Makati...',
      },
      {
        id: 3,
        image: 'recent-donation-img-2.jpg',
        amount: 'June 24, 2024',
        name: "A Visit at King Mongkut's Institute of Technology Ladkrabang (KMITL)",
        // time: "3 hours ago",
        text: 'Dr. Ariel Nimo B. Pumecha, Dr. Robino D. Cawi, and Dr. Darlyn D. Tagarino, selected members of the Rights2LIFE Project...',
      },
      {
        id: 4,
        image: 'recent-donation-img-2.jpg',
        amount: 'June 25, 2024',
        name: 'Study Visit at Thailand Universities',
        // time: "3 hours ago",
        text: "The Rights2LIFE Project's selected members, Dr. Ariel Nimo B. Pumecha, Dr. Robino D. Cawi, and Dr. Darlyn D. Tagarino, visited...",
      },
      {
        id: 5,
        image: 'recent-donation-img-2.jpg',
        amount: 'August 14, 2024',
        name: 'Training on Promoting a Human Rights Based Approach in Criminology Education',
        // time: "3 hours ago",
        text: 'Ranjana Thapa of the UNJP and PMAJ Angelita Nastor, Chief Education and Capability Development at the Human...',
      },
      {
        id: 6,
        image: 'recent-donation-img-2.jpg',
        amount: 'August 15, 2024',
        name: 'Strategic Planning Workshop on CPJS',
        // time: "3 hours ago",
        text: 'Dr. Darlyn D. Tagarino organized the session on the Consortium for Peace, Justice, and Security. The Deans of the College...',
      },
    ],
    lead: {
      image,
      name: 'Dr. Darlyn D. Tagarino',
      education: 'CBA',
      location: 'University of the Cordilleras',
    },
  },
};

export default workPackage5Details;
