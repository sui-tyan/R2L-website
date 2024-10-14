import image from '@/images/resources/work-pkg4-img1.jpg';
import image2 from '@/images/resources/work-pkg4-img2.jpg';
import image3 from '@/images/resources/work-pkg4-img3.jpg';
import cherryCabarrubias from '@/images/team/anon.png';

const text1 =
  'The competencies and moral fiber of individuals who play key roles in promoting the rule of law and human rights will be developed.';

const summaryText =
  'The focus will be the students, the faculty members, and then the  criminal justice movers like the police. Competence will be developed through education, research and outreach involvement. Continuing education will be part of the outreach activities.';

const workPackage4Details = {
  raised: '25,270',
  goal: '30,000',
  category: 'Medical',
  title:
    'Competent criminal justice movers among the faculty members, students and the community',

  images: [image, image2, image3],
  texts: [text1],
  summaryText,
  summaryList: [
    'Developing key competencies.',
    'Focus on students, faculty.',
    'Empowering criminal justice.',
    'Education, research, outreach.',
    'Continuing education emphasis.',
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
      //{
      //  id: 1,
      //  image: "recent-donation-img-1.jpg",
      //  amount: "June 1, 2023",
      //  name: "Criminological Research Design Training",
      //  // time: "3 hours ago",
      //  text: "A series of training on Criminological Research Design Formulation...",
      //},
      {
        id: 1,
        image: 'recent-donation-img-2.jpg',
        amount: 'October 23, 2022',
        name: 'Lecture-Workshop on Learning Resources and Delivery Techniques of Human Rights Courses',
        // time: "3 hours ago",
        text: 'Prof Tine Destrooper shared her experience to about 20 faculty...',
      },
      {
        id: 2,
        image: 'recent-donation-img-2.jpg',
        amount: 'October 23, 2022',
        name: 'Ghent University Study Visit Re-echo Session',
        text: 'Ghent University Study Visit Re-Echo Session, led by...',
      },
      {
        id: 3,
        image: 'recent-donation-img-2.jpg',
        amount: 'August 30, 2023',
        name: 'Training-Workshop on Human Rights-Based Curriculum with the Ateneo Human Rights Center - Day 1',
        text: 'Dr. Ariel Nimo B. Pumecha giving the rationale of the activity...',
      },
      {
        id: 4,
        image: 'recent-donation-img-2.jpg',
        amount: 'August 31, 2023',
        name: 'Training-Workshop on Human Rights-Based Curriculum with the Ateneo Human Rights Center - Day 2',
        text: 'The Director of AHRC, Atty. Ray Paolo Santiago, discussing the Philippine Bill of Rights...',
      },
      {
        id: 5,
        image: 'recent-donation-img-2.jpg',
        amount: 'June 27, 2024',
        name: 'A Collaborative Interaction with UGHENT Professors',
        text: 'A knowledge transfer method known between UGhent Professors and Faculty Members from...',
      },
      {
        id: 6,
        image: 'recent-donation-img-2.jpg',
        amount: 'July 10-14, 2024',
        name: '14th National Forensic Science Specialization Training CL 2024-14',
        text: 'The 14th National Forensic Science Specialization Training was held from July 10...',
      },
      {
        id: 7,
        image: 'recent-donation-img-2.jpg',
        amount: 'August 8-10, 2024',
        name: '15th Annual Conference of the Asian Criminological Society',
        text: "The Asian Criminological Society's 15th Annual Conference took place in Pasay, Manila...",
      },
      {
        id: 8,
        image: 'recent-donation-img-2.jpg',
        amount: 'September 30, 2024',
        name: 'Training in Research and Teaching of Human Rights',
        text: 'The UC-Rights2LIFE, in collaboration with the University of the Philippines Law Center...',
      },
    ],
    lead: {
      image: cherryCabarrubias,
      name: 'Cherry Ann A. Cabarrubias',
      education: 'CCJE',
      location: 'University of the Cordilleras',
    },
  },
};

export default workPackage4Details;
