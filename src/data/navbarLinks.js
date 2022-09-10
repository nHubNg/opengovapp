export const navbarLinks = [
  {
    id: 1,
    name: "Home",
    link: "/",
    dropdown: false,
  },
  {
    id: 2,
    name: "About us",
    link: "/about-us",
    dropdown: true,
    dropDownMenu: [
      {
        pathname: "Our Principles",
        path: "principle",
      },
      {
        pathname: "Our Governance",
        path: "governance",
      },
      {
        pathname: "Economic Advisory Council",
        path: "advisory-council",
      },
      {
        pathname: "Client Character",
        path: "client-character",
      },
      {
        pathname: "MDA partners",
        path: "partners",
      },
    ],
  },
  {
    id: 3,
    name: "Invest in Plateau",
    link: "/invest",
    dropdown: false,
  },
  {
    id: 4,
    name: "Industries",
    link: "/industries",
    dropdown: true,
    dropDownMenu: [
      {
        pathname: "Investment Resources",
        path: "investment-resources",
      },
      {
        pathname: "Investors Highlight",
        path: "investors-highlight",
      },
    ],
  },
  {
    id: 5,
    name: "Media and Events",
    link: "/media",
    dropdown: true,
    dropDownMenu: [
      {
        pathname: "News",
        path: "news",
      },
      {
        pathname: "Events",
        path: "events",
      },
      {
        pathname: "Gallery",
        path: "gallery",
      },
    ],
  },
  {
    id: 6,
    name: "Contact",
    link: "/ContactPage",
    dropdown: true,
    dropDownMenu: [
      {
        pathname: "Enquiries",
        path: "enquiries",
      },
      {
        pathname: "Feedback",
        path: "feedback",
      },
      {
        pathname: "Survey",
        path: "survey",
      },
      {
        pathname: "Contact",
        path: "contact",
      },
      {
        pathname: "FAQs",
        path: "faqs",
      },
    ],
  },
];
