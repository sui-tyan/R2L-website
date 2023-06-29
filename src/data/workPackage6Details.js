import image2 from "@/images/resources/causes-details-images-1.jpg";
import image3 from "@/images/resources/causes-details-images-2.jpg";
import image from "@/images/resources/causes-details-img.jpg";
import thelmaPalaoag from "@/images/team/thelma-palaoag.jpg";

const text1 =
  "The needed equipment towards modernization will be identified as research exposure and activities will be done with the Ghent University. This will involve not just the criminology and forensic laboratories but the ICT laboratories to support the development of advanced applications in the field.";
const text2 =
  "However, the limited project budget will not enable the purchase of specialized equipment needed but start the process of conceptualizing what it takes to have well-equipped laboratories. ";

const summaryText =
  "This will enable UC to allocate and/or source funds strategically for the purpose. Library resources will be made accessible for achieving higher quality education and research. ";

const workPackage6Details = {
  raised: "25,270",
  goal: "30,000",
  category: "Medical",
  title:
    "Well-equipped laboratories and library resources for advanced criminal justice education and research",

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
        amount: "Date here",
        name: "Event Title Here",
        // time: "3 hours ago",
        text: "Some texts",
      },
      {
        id: 2,
        image: "recent-donation-img-2.jpg",
        amount: "Date here",
        name: "Event Title Here",
        // time: "3 hours ago",
        text: "Some texts",
      },
      {
        id: 3,
        image: "recent-donation-img-3.jpg",
        amount: "Date here",
        name: "Event Title Here",
        // time: "3 hours ago",
        text: "Some texts",
      },
      {
        id: 4,
        image: "recent-donation-img-4.jpg",
        amount: "Date here",
        name: "Event Title Here",
        // time: "3 hours ago",
        text: "Some texts",
      },
    ],
    lead: {
      image: thelmaPalaoag,
      name: "Dr. Thelma D. Palaoag",
      education: "CITCS",
      location:
        "University of the Cordilleras. Governor Pack Road, Baguio City 2600, Philippines",
    },
  },
};

export default workPackage6Details;