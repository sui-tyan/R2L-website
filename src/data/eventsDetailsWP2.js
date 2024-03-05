import image from '@/images/resources/events-wp2-webdev.jpg';
import image2 from '@/images/resources/workpackage-2/nov-7-2023/research-proposal-presentation-4.webp';
import image3 from '@/images/resources/workpackage-2/nov-11-2023/research-process-1.webp';
import image4 from '@/images/resources/workpackage-2/nov-20-2023/human-rights-research-2.webp';
import image5 from '@/images/resources/workpackage-2/jan-30-2024/research-grants-recipients-orientation-2.jpg';
import image6 from '@/images/resources/workpackage-2/feb-12-2024/research-design-and-methodology-2.webp';

const text1 =
  'The Rights2Life team has embarked on an exciting journey of website development to empower individuals and promote the fundamental right to life. This ambitious project aims to create an inclusive digital platform that serves as a catalyst for positive change, fostering awareness and activism for human rights issues around the globe.';
// const text2 =
//   'Hon. Jose M. Molintas, a Baguio City Counselor and Atty. Joel Dizon, a faculty member of the Faculty of Law of the University of the Cordilleras (UC), led the forum on March 9, 2023 at the UC Auditorium. They emphasized to more than 200 students that the circumstances of the past should empower change Filipinos to unify and be involved, in order to achieve true freedom and democracy for all.';
// const text3 =
//   'P/COL. Marites B. Villacarlos, Chief Of The Regional Forensic Unit-Cordillera shared the value and various roles of women in nation building, emphasizing the vast opportunity that the world may offer women despite their gender. She emphasized that women in Philippine society may not be physically equal to men but they are capable of doing more to solve things and achieve more. She ends with the line, “hindi ka babae lang (You are not a mere woman),you are more than enough.”';
// const text4 =
//   'It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum ley of type and scrambled it to make a type specimen book.';

const text2 =
  'Research Proponents from various colleges and offices presenting their research proposal as part of the process of the research grant';
/**
 * TODO: Edit this text5 or its image
 */
const text3 =
  'Right photo shows Dr. Thelma Palaoag discussing the research process Left photo shows the participants for the module 1 research amplification.';
const text4 =
  'A research collaboration between faculty, criminology interns, and student leaders. Right photo shows Dr. Ariel Nimo Pumecha providing overview of the research activity';
const text5 =
  'Project leader Dr. Ariel Nimo B. Pumecha discussing the guidelines in implementing the research subsidy.';
const text6 =
  'Dr. Thelma Palaoag discussing the research design and methodology. Participants having a fruitful collaboration and shared their possible research proposals angled towards human rights. Research grantees were also present during the activity.';

const eventsDetailsWP2 = [
  {
    id: 1,
    image: image,
    date: '07/22',
    title: 'Rights2Life Website Development Journey',
    texts: [text1],
  },
  // {
  //   // content aalready here
  //   id: 2,
  //   image: image,
  //   date: '5/09/23',
  //   title:
  //     'Remembering EDSA: Implications of the EDSA Revolution to Political and Civil Rights',
  //   texts: [text2],
  // },
  // {
  //   id: 3,
  //   image: image,
  //   date: '5/16/23',
  //   title: 'WE for gender equality and inclusive society": Womens’ Month Forum',
  //   texts: [text3],
  // }, //end
  {
    id: 2,
    image: image2,
    date: '11/07/23',
    title: 'Research Proposal Presentation',
    texts: [text2],
  },
  {
    id: 3,
    image: image3,
    date: '11/11/23',
    title: 'Amplifying Research Capability MODULE 1: Research Process',
    texts: [text3],
  },
  {
    id: 4,
    image: image4,
    date: '11/20/23',
    title: 'Human Rights Research',
    texts: [text4],
  },
  {
    id: 5,
    image: image5,
    date: '1/30/24',
    title:
      'Research Grants Recipients Orientation and Distribution of the Memorandum of Agreement',
    texts: [text5],
  },
  {
    id: 6,
    image: image6,
    date: '2/12/23',
    title:
      'Amplifying Research Capability MODULE 2: Research Design and Methodology',
    texts: [text6],
  },
];
export default eventsDetailsWP2;
