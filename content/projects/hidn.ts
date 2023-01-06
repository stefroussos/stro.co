import { ProjectModel } from "utils/models";

const hidn: ProjectModel = {
  id: "hidn",
  title: "Hidn",
  subtitle: "UI, UX, Branding & Fullstack Development",
  type: "Crypto",
  date: "2022",
  image: "hero.jpg",
  description:
    "Hidn was a data-driven NFT research application designed to enable users to explore, analyze, and compare different NFTs across multiple platforms. Its features included a comprehensive search engine to quickly locate specific NFTs and a NFT visualizer to help users better understand the composition of different NFTs. My role entailed designing and developing the User Interface and building the brand.",
  body: [
    {
      title: "Brand Ideation",
      description:
        "My objective was to construct a unique brand that included carefully disguised components of the brand 'hidn' implemented in imaginative ways - inspired by the phrase hidden in plain sight.",
      media: ["concepts_1.jpg", "concepts_2.jpg"],
    },
    {
      title: "Brand Develoment",
      description: "The concept chosen was to create a layered structure of HIDN in Morse Code, with each element having its own specific meaning.",
      media: ["final_1.jpg", "final_2.jpg", "final_3.jpg"],
    },
    {
      title: "NFT Asset UI",
      description: "",
      media: ["asset_ui.jpg"],
    },
    {
      title: "NFT Collection UI",
      description: "",
      media: ["collection_ui_1.jpg", "collection_ui_2.jpg"],
    },
  ],
};

export default hidn;
