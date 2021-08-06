import { ProjectModel } from "utils/models";

const films: ProjectModel = {
  id: "films",
  image: "hero.jpg",
  title: "Film Projects",
  subtitle: "Collection",
  type: "Film",
  date: "2014 - Present",
  description: "",
  body: [
    {
      title: "Springwood Health",
      description:
        "Click on the Springwood Health card to learn more about this project (or [here](/projects/springwood) to open it in a new tab).",
      media: ["vimeo/376173005"],
    },
    {
      title: "Blocks Smartwatch",
      description:
        "Click on the Blocks Modular Smartwatch card to learn more about this project (or [here](/projects/blocks) to open it in a new tab).",
      media: ["vimeo/278540247"],
    },
    {
      title: "Studio INTO",
      description:
        "[Studio INTO](http://studio-into.com/) is a research and design consultancy based in London. While working there I was responsible for creating a film introducing a new division of the company; **Cultural Guides**. Cultural Guides are a global network of professionals (ranging from architects to ethnographers) who assist the INTO Research Team on international projects by providing local cultural knowledge and help deconstruct insights and trends. Sound design and composition by [Theo Koustas](https://www.facebook.com/tkoustas).",
      media: ["vimeo/278538953"],
    },
    {
      title: "CSM Degree Show",
      description:
        "A teaser film promoting the 2015 BA Product Design degree show at [Central Saint Martins](https://www.arts.ac.uk/colleges/central-saint-martins). Co-produced with [Charlie Humble Thomas](https://charliehumblethomas.co.uk/).",
      media: ["vimeo/124244430"],
    },
  ],
};

export default films;
