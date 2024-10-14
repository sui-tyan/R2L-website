import lecture from '@/images/resources/events-wp4-lecture.jpg';
import echo from '@/images/resources/events-wp4-echo.jpg';
import image3 from '@/images/resources/workpackage-4/aug-30-2023/training-workshop-day1-2.webp';
import image4 from '@/images/resources/workpackage-4/aug-31-2023/training-workshop-day2-3.webp';
import image5 from '@/images/resources/workpackage-4/jun-27-2024/WP4-06272024.jpg';
import image6 from '@/images/resources/workpackage-4/july-10_14-2024/WP4-0710142024.png';
import image7 from '@/images/resources/workpackage-4/aug-8_10-2024/WP4-088102024.jpg';
import image8 from '@/images/resources/workpackage-4/sep-30-2024/WP4-09302024.JPG';

const text1 =
  'Presentations were given by each speaker of their experiences, thoughts, opportunities, and learnings from the activities of their trip to Belgium. There was an active exchange of questions, views, and ideas from the participants to the eager speakers. Dr. Pumecha also expressed his desire to move forward with plans that could help.';
const text2 =
  'On November 23, 2023, Prof Tine Destrooper shared her experience to about 20 faculty members of the College of Criminal Criminal Justice and the College of Arts and Sciences of the University of the Cordilleras who were receptive to ways in which various courses with aspects of human rights may be better taught.';
const text3 =
  'Dr. Ariel Nimo B. Pumecha giving the rationale of the activity and Atty. facilitating the introduction of participants and expectations from the activity';
const text4 =
  'The Director of AHRC, Atty. Ray Paolo Santiago, discussing the Philippine Bill of Rights and Atty. Discussing the “Participatory Approach” on Human Rights';
const text5 =
  'A knowledge transfer method known between UGhent Professors and Faculty Members from the College of Criminal Justice Education.';
const text6 =
  "The Asian Criminological Society's 15th Annual Conference took place in Pasay, Manila, from August 8 to 10, 2024. Four academic members from the College of Criminal Justice Education attended the conference: Dr. Leah M. Donato, Dr. Nica D. Togana, Dr. Debbie Karyle F. Arquero, and Ms. Joy Nicole C. Canutab. \nDuring the event, two faculty members received special recognition. Dr. Debbie Karyle F. Arquero received the Best Paper and Best Presenter awards for her research on post-conviction DNA testing in the Philippine Criminal Justice System, while Ms. Joy Nicole Canutab was named Best Presenter for her research on police officers' perceptions and treatment of the LGBTQIA+ community.";
const text7 =
  'The 14th National Forensic Science Specialization Training was held from July 10 to 14, 2024, at Brentwood Apartelle in Baguio City. The gathering drew attendees from around the country, particularly from academic institutions and law enforcement organizations.';
const text8 =
  'The UC-Rights2LIFE, in collaboration with the University of the Philippines Law Center - Institute of Human Rights, hosted a two-day training session for faculty members from the Colleges of Criminal Justice Education and Arts and Sciences, as well as attendees from other institutions. The two-day training focuses on various aspects of human rights and relevant research topics.';

const eventsDetailsWP4 = [
  {
    id: 1,
    image: lecture,
    date: '10/23/22',
    title:
      'Lecture-Workshop on Learning Resources and Delivery Techniques of Human Rights Courses',
    texts: [text2],
  },
  {
    id: 2,
    image: echo,
    date: '06/24/23',
    title: 'Ghent University Study Visit Re-echo Session',
    texts: [text1],
  },
  {
    id: 3,
    image: image3,
    date: '08/30/23',
    title:
      'Training-Workshop on Human Rights-Based Curriculum with the Ateneo Human Rights Center - Day 1',
    texts: [text3],
  },
  {
    id: 4,
    image: image4,
    date: '08/31/23',
    title:
      'Training-Workshop on Human Rights-Based Curriculum with the Ateneo Human Rights Center - Day 2',
    texts: [text4],
  },
  {
    id: 5,
    image: image5,
    date: '06/27/24',
    title: 'A Collaborative Interaction with UGHENT Professors',
    texts: [text5],
  },
  {
    id: 6,
    image: image6,
    date: '07/10-14/24',
    title: '14th National Forensic Science Specialization Training CL 2024-14',
    texts: [text6],
  },
  {
    id: 7,
    image: image7,
    date: '08/8-10/24',
    title: '15th Annual Conference of the Asian Criminological Society',
    texts: [text7],
  },
  {
    id: 8,
    image: image8,
    date: '09/30/24',
    title: 'Training in Research and Teaching of Human Rights',
    texts: [text8],
  },
];
export default eventsDetailsWP4;
