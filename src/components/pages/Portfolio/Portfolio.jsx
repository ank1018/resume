import React from "react";
import image1 from "../../../images/portfolio/swoosh.png";
import PortfolioItem from "./PortfolioItem";

const portfolioData = [
  {
    id: 1,
    image: image1,
    title: "Fancode by Dreamsports",
    link: "https://www.fancode.com/",
    technologies: "ReactJS, React Native, Redux, Javascript, Node.js, Graphql",
    description:
      "Fancode is a company that provides various services for sports fans. They offer live stream matches, e-commerce, videos, and match stats for their customers. Their web application is built using ReactJS and their mobile application is built using React Native, both using the Elm architecture. Fancode uses GraphQL, SQL, and Java for their backend development. Their goal is to provide the best possible user experience for sports enthusiasts by delivering high-quality content and seamless user interface across all their platforms"
  },
  {
    id: 2,
    image: null,
    title: "Dreampay by Dreamsports",
    link: null,
    technologies: null,
    description: "DreamPay is a payment solution in the form of Wrapper and Recon that online merchants can integrate seamlessly and can be hosted across categories. A one-stop platform for payment functions like deposits, settlements and withdrawals; DreamPay is also equipped with multiple user-centric tools that ensure positive growth with consistent performance."
  },
  {
    id: 3,
    image: null,
    title: "Bajaj Partner Portal (Bajaj Finance)",
    link: null,
    technologies: "Angular 9, Angular Material, Bootstrap, HTML5, CSS3",
    description:
      "This is a web application designed for all channel partners/ vendors where the user will have a digital experience to measure result. The partner portal wiil make it easier to interact with the channel partners with communaication occuring on one platform and the ability to access it from anywhere.",
  },
  {
    id: 3,
    image: null,
    title: "Gonogo product- Loan Origination System (HDFC Bank, ABFL)",
    link: null,
    technologies: "Angular 5, Bootstrap, HTML5, CSS3",
    description:
      "This is a product for origination of loan. The bank is offering various types of loan such as personal loan, business loan, to the customer using this application. The application is being used for branch banking as well as in remote areas.",
  },
  {
    id: 4,
    image: null,
    title: "IDNM, MRDN (Yes Bank)",
    link: null,
    technologies: "Angular 6, HTML 5, Bootstrap",
    description:
      "This is a web based application used by a very large private bank for business process automation. \n" +
        "It is an internal web application for property sourcing. This application is used to find, shortlist, approve the properties for a bank. The properties can be added by brokers and property managers. The bank officials have the authority to shortlist the properties based on their selection criterias.",
  },
  {
    id: 5,
    image: null,
    title: "Liabilities System (Yes Bank)",
    link: null,
    technologies: "Angular 6, HTML 5, Bootstrap",
    description: "This application is used for automating the process of on-boarding of customers of the bank. The bank is using this application to sell their products to their old as well as new customers."
  },
  {
    id: 6,
    image: null,
    title: "Reed- Recruitment Firm",
    link: null,
    technologies: "Angular 4, Bootstrap, HTML5, CSS3",
    description: "This is a web application for training and placement of job seekers."
  },
  {
    id: 7,
    image: null,
    title: "Help Desk Ticketing System",
    link: null,
    technologies: "Angular 4, HTML 5, Bootstrap",
    description: "It is an internal web application which is made to address customer issues by raising new tickets for each complaint."
  },
  {
    id: 8,
    image: null,
    title: "Inventory Management System",
    link: null,
    technologies: "Angular 2, HTML, CSS",
    description: "Worked as Front End developer to develop and design the UI for inventory module used for buying and selling of buidling material. It is an internal application made for a Dubai based company."
  }
];

const Portfolio = () => {
  return (
    <section className="pb-10">
      <div className="flex flex-col flex-wrap md:px-4">
        {portfolioData.map((portfolio, id) => (
          <PortfolioItem portfolio={portfolio} key={id} />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;