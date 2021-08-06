import { ProjectModel } from "utils/models";

const costakis: ProjectModel = {
  id: "costakis",
  image: "hero.jpg",
  title: "Costakis Collection",
  subtitle: "UI, UX & Full Stack Development",
  type: "Web App",
  date: "2021",
  description:
    "[Costakiscollection.com](https://costakiscollection.com/) is the official website of the George Costakis archive and collection, the most renowned collection of Russian avant-garde. This project was created in partnership with the [AZ Museum](https://museum-az.com/). The wep app was built using NextJS, Firebase (Firestore, Function, Storage and Authentication) and Algolia (Search).",
  body: [
    {
      title: "Landing page",
      description: "",
      media: ["main.jpg", "categories.jpg", "about.jpg"],
    },
    {
      title: "Search",
      description: "",
      media: ["collection.jpg", "archive.jpg"],
    },
    {
      title: "Custom Content Management System",
      description: "",
      media: ["cms-1.jpg", "cms-2.jpg", "cms-3.jpg", "cms-4.jpg"],
    },
  ],
};

export default costakis;
