import lecture from '@/images/resources/events-wp4-lecture.jpg';
import echo from '@/images/resources/events-wp4-echo.jpg';
import image3 from '@/images/resources/workpackage-4/aug-30-2023/training-workshop-day1-2.webp';
import image4 from '@/images/resources/workpackage-4/aug-31-2023/training-workshop-day2-3.webp';
import image5 from '@/images/resources/workpackage-4/jun-27-2024/WP4-06272024.jpg';

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
];
export default eventsDetailsWP4;
