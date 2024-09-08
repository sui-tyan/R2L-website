import image from '@/images/resources/work-pkg3-img1.jpg';
import image2 from '@/images/resources/work-pkg3-img2.jpg';
import image3 from '@/images/resources/work-pkg3-img3.jpg';
import scyldSegundo from '@/images/team/scyld-segundo.jpg';

const text1 = `Research results will be disseminated to the communities, at the same time,
  building local government and community capabilities to overcome hurdles that
  prevail.`;

const text2 = `The project will develop a model of going to the communities appropriately
  prepared and equipped with the required knowledge and skills. Immersion and
  community consultations will help identify the approaches to take. `;

const summaryText = `The project
  envisions an outreach model that actively involves the local governments and
  the community folks in disseminating and effecting change. Moreover, it hopes
  to follow through and not just do one-shot visits in order to bring about
  deeper impact. `;

const workPackage3Details = {
  raised: '25,270',
  goal: '30,000',
  category: 'Medical',
  title: 'Enlightened and empowered communities through intensified outreach',

  images: [image, image2, image3],
  texts: [text1, text2],
  summaryText,
  summaryList: [
    'Research to communities.',
    'Building local capabilities.',
    'Community consultations.',
    'Active involvement for change.',
    'Long-term impact focus.',
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
        amount: 'April 26, 2023',
        name: 'Loakan, Tocmo, Itogon Community Outreach',
        // time: "3 hours ago",
        text: 'The community outreach in Barangay Loacan, Sitio Tocmo in Itogon, Benguet went full gear...',
      },
      {
        id: 2,
        image: 'recent-donation-img-1.jpg',
        amount: 'December 04, 2023',
        name: 'TOCMO INTEGRATED SCHOOL Information, Education and Communication Drive and Sports Clinic',
        // time: "3 hours ago",
        text: 'Principal Rinan Bruno and UCcontingents led by Dr. Ariel...',
      },
      {
        id: 3,
        image: 'recent-donation-img-1.jpg',
        amount: 'February 23, 2024',
        name: 'Revisit and Donation of Books to TOCMO Integrated School & Human Rights Awareness to Parents',
        // time: "3 hours ago",
        text: 'Mr. Scyld C. Segundo discussing the partnership and the Rights2LIFE project...',
      },
      {
        id: 4,
        image: 'recent-donation-img-1.jpg',
        amount: 'July 18, 2024',
        name: 'Innovative Strategies for Community Engagement, The Belgian Way',
        // time: "3 hours ago",
        text: 'Professor Dr. Jelle Janssens of Ghent University led a Community Outreach Training in which...',
      },
      {
        id: 5,
        image: 'recent-donation-img-1.jpg',
        amount: 'August 22, 2024',
        name: 'Research Capacity Building for Community Partners',
        // time: "3 hours ago",
        text: 'Dr. Nica D. Togana supervised a research discussion with faculty members at the Tocmo...',
      },
    ],
    lead: {
      image: scyldSegundo,
      name: 'Scyld C. Segundo',
      education: 'CCJE',
      location: 'University of the Cordilleras',
    },
  },
};

export default workPackage3Details;
