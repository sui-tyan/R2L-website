import image from "@/images/resources/work-pkg4-img1.jpg";
import image2 from "@/images/resources/work-pkg4-img2.jpg";
import image3 from "@/images/resources/work-pkg4-img3.jpg";
import cherryCabarrubias from "@/images/team/anon.png";

const text1 =
  "The competencies and moral fiber of individuals who play key roles in promoting the rule of law and human rights will be developed.";

const summaryText =
  "The focus will be the students, the faculty members, and then the  criminal justice movers like the police. Competence will be developed through education, research and outreach involvement. Continuing education will be part of the outreach activities.";

const workPackage4Details = {
  raised: "25,270",
  goal: "30,000",
  category: "Medical",
  title:
    "Competent criminal justice movers among the faculty members, students and the community",

  images: [image, image2, image3],
  texts: [text1],
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
        image: "recent-donation-img-2.jpg",
        amount: "October 23, 2022",
        name: "Lecture-Workshop on Learning Resources and Delivery Techniques of Human Rights Courses",
        // time: "3 hours ago",
        text: "Prof Tine Destrooper shared her experience to about 20 faculty...",
      },
      {
        id: 2,
        image: "recent-donation-img-2.jpg",
        amount: "October 23, 2022",
        name: "Ghent University Study Visit Re-echo Session",
        text: "Ghent University Study Visit Re-Echo Session, led by...",
      },
    ],
    lead: {
      image: cherryCabarrubias,
      name: "Cherry Ann A. Cabarrubias",
      education: "CCJE",
      location: "University of the Cordilleras",
    },
  },
};

export default workPackage4Details;
