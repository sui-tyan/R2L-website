import image from '@/images/resources/event-details-img-1.jpg';
import ateneo from '@/images/resources/events-wp5-ateneo.jpg';

const text1 =
  'Attended by key representatives from two state schools, three private schools, the Philippine National Police Human Rights Office, and the Office for the Presidential Adviser for Peace, Reconciliation and Unity, the consultation confirmed the willingness of key Criminal Justice movers in the Cordillera Administrative Region to willingly work with the University of the Cordilleras. This is towards the establishment of a Consortium for Peace, Justice and Security, and for the operationalization of the Peace and Justice Innovation Center towards promoting human rights education, research and outreach in the Cordillera region.';

const text2 =
  'Seven members of the Righst2LIFE team led by Dr. Darlyn Tagarino visited the Ateneo Human Rights Center on May 8, 2023 at Rockwell, Makati. Atty. Ray Paolo Santiago, the Center Director and Atty. Marianne Agunoy, the Internship Director, briefed the team on the Center’s operations. Possible areas of partnerships were explored especially on the mentorship of the Ateneo Human Rights Center to the University of the Cordilleras on the enrichment of its Human Rights curriculum.';

const text3 =
  'P/COL. Marites B. Villacarlos, Chief Of The Regional Forensic Unit-Cordillera shared the value and various roles of women in nation building, emphasizing the vast opportunity that the world may offer women despite their gender. She emphasized that women in Philippine society may not be physically equal to men but they are capable of doing more to solve things and achieve more. She ends with the line, “hindi ka babae lang (You are not a mere woman),you are more than enough.”';
// const text4 =
//   'It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum ley of type and scrambled it to make a type specimen book.';

const eventsDetailsWP5 = [
  {
    id: 1,
    image,
    date: '04/25/2023',
    title: 'Stakeholder Consultation kicks off on April 25, 2023',
    texts: [text1],
  },
  {
    id: 2,
    image:ateneo,
    date: '05/08/23',
    title: 'First benchmarking with the Ateneo Human Rights Center',
    texts: [text2],
  },
  // {
  //   id: 3,
  //   image,
  //   date: '5/16/23',
  //   title: 'WE for gender equality and inclusive society": Womens’ Month Forum',
  //   texts: [text3],
  // },
];
export default eventsDetailsWP5;
