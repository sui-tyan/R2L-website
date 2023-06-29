import image2 from "@/images/resources/causes-details-images-1.jpg";
import image3 from "@/images/resources/causes-details-images-2.jpg";
import image from "@/images/resources/causes-details-img.jpg";

const text1 =
  "This will see the formulation of a new curriculum that puts together the minds of Criminal Justice education providers in the region, in the country, and from Belgium. This revised curriculum will provide maximum exposure to Criminology students on understanding the principles, the issues, and the value of Human Rights to themselves, the communities, to the nation and the world. Not only Criminology students will be targeted but all tertiary level and Sen-ior High School students will be exposed to principles of Human Rights through their general education courses.";
const text2 =
  "The project will also aim to integrate Human Rights in the selected general education courses. Education is the best avenue to inculcate the value of Human Rights as all opportunities to exhaustively discuss issues about it, and see its value will be explored. For the duration of the project, the seeds will be planted to the students to value Human Rights as it should be valued. Education is the peaceful way to transform thinking and beliefs without resorting to force, and brings about lasting reform. Alongside the stu-dents, the teachers concerned who will be delivering the courses will be encouraged to ex-tend the knowledge and the value of respecting Human Rights to not only the students, but to their other spheres of influence as well. More importantly, through the project, UC will become a center for education, research, outreach and networking, promoting peace, justice and security in the region, and eventually in the country.";
const summaryText =
  "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing.";

const workPackage1Details = {
  raised: "25,270",
  goal: "30,000",
  category: "Medical",
  title:
    "A human-rights based education is in place: curriculum review and revision",

  images: [image, image2, image3],
  texts: [text1, text2],
  summaryText,
  summaryList: [
    "Making this first true generator",
    "Many desktop publish packages",
    "Lorem Ipsum is not simply",
    "If you are going to passage",
    "It has roots in a piece",
  ],
  comments: [
    {
      id: 1,
      image: "comment-1-1.jpg",
      message:
        "Sending love. My nephews Nick and Anthony Salaber are your teammates, so I know the caliber person you are. Our whole family is sending our best to you and your family.",
      sender: "David Marks",
      time: "3 hours ago",
    },
    {
      id: 2,
      image: "comment-1-2.jpg",
      message:
        "Sending love. My nephews Nick and Anthony Salaber are your teammates, so I know the caliber person you are. Our whole family is sending our best to you and your family.",
      sender: "Christine Eve",
      time: "3 hours ago",
    },
  ],
  sidebar: {
    activities: [
      {
        id: 1,
        image: "recent-donation-img-1.jpg",

        amount: "October 24, 2022",
        name: "A Lecture-Forum On Transitional Justice",
        // time: "3 hours ago",
        text: "Prof. Dr. Tine Destrooper from the Faculty of Law, Department of Criminology, Criminal Law and Social Law spoke... ",
      },
      {
        id: 2,
        image: "recent-donation-img-2.jpg",
        amount: "May 9, 2023",
        name: "Remembering EDSA: Implications of the EDSA Revolution to Political and Civil Rights",
        // time: "3 hours ago",
        text: "Hon. Jose M. Molintas, a Baguio City Counselor and Atty. Joel Dizon a faculty member of the Faculty of...",
      },
      {
        id: 3,
        image: "recent-donation-img-3.jpg",
        amount: "May 16, 2023",
        name: 'WE for gender equality and inclusive society": Womens’ Month Forum ',
        // time: "3 hours ago",
        text: "P/COL. Marites B. Villacarlos, Chief Of The Regional Forensic Unit-Cordillera shared the...",
      },
      {
        id: 4,
        image: "recent-donation-img-4.jpg",
        amount: "June 28, 2023",
        name: "Labor Rights Seminar",
        // time: "3 hours ago",
        text: "One of the objectives of the seminar is to give awareness as well as to educate students on their...",
      },
    ],
    lead: {
      image: image,
      name: "Dr. Robino D. Cawi",
      education: "CCJE",
      location: "University of the Cordilleras",
    },
  },
};

export default workPackage1Details;
