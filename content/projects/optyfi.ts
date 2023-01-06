import { ProjectModel } from "utils/models";

const optyfi: ProjectModel = {
  id: "optyfi",
  title: "OptyFi",
  subtitle: "UI, UX & Fullstack Development",
  type: "Crypto",
  date: "2022",
  image: "hero.jpg",
  description:
    "The [OptyFi](https://opty.fi/) Protocol facilitates simplified access to optimized yield throughout the Decentralized Finance (DeFi) domain, through the evaluation of thousands of yield strategies across multiple liquidity pools, protocols and blockchains. One of the principal projects that I worked on was a new design system (Method UI) for the parent company (Capital Methods), which served as a basis for the core app and forthcoming projects.",
  body: [
    {
      title: "Method UI Design System",
      description:
        "The Method UI Design System is a dynamic and functional system created for the development of web3 and data visualization applications, and was constructed using Figma's Component Library and developed using ReactJS.",
      media: [
        "method_ui_logo.jpg",
        "method_ui_figma_1.jpg",
        "dark_light_mode.jpg",
      ],
    },
    {
      title: "OptyFi Website",
      description: "The implementation of Method UI on the new Optyfi website.",
      media: ["ui_long.jpg", "ui_snippet.jpg"],
    },
  ],
};

export default optyfi;
