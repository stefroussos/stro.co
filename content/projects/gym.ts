import { ProjectModel } from "utils/models";

const gym: ProjectModel = {
  id: "gym",
  title: "On-Demand Gym",
  subtitle: "Service, Digital & Industrial Design",
  type: "University Project",
  date: "2014",
  image: "hero.jpg",
  description:
    "The ‘On Demand Gym’ project is a conceptual university project exploring the prospect of a cash-free & internet driven gym service. The aim of the project was to challenge the conventional gym business model; that of long term contracts, locked memberships and hidden fees. 'Gyms have built their business model around us not showing up.' [Stacy Vanek Smith, NPR](https://www.npr.org/sections/money/2014/12/30/373996649/why-we-sign-up-for-gym-memberships-but-don-t-go-to-the-gym). Utilising mobile and cloud technologies, an unconventional 'pay-per-minute' model can be designed, transforming the monthly contract to an on-demand membership. With the death of the contract, members are incentivised to keep training in multiple innovative ways: dynamic pricing (cheaper per minute rates during off-peak hours), ‘gamified’ loyalty programs (giving cheaper rates to the most active members), a commerce platform (allowing members to purchase personal training, supplements and gear - instantly) and access to smart hardware products like bluetooth enabled lockers / activity trackers (as pictured above).\n\n **‘Quartz' is a hardware and software platform for gyms offering a time based business model for its customers with a reimagined user experience offering smart lockers / activity trackers, on demand personal training and loyalty programs.**",
  body: [
    {
      title: "How it Works",
      description:
        "A condensed user journey from sign up to the first workout.",
      media: ["how_it_works.jpg"],
    },
    {
      title: "Key Features",
      description: "",
      media: ["key_features.jpg"],
    },
    {
      title: "User Experience",
      description: "",
      media: ["user_experience.jpg"],
    },
    {
      title: "Research",
      description: "",
      media: ["research.jpg", "quote.jpg"],
    },
    {
      title: "Brand Development",
      description:
        "The name ‘Quartz’ is derived from the central role that quartz crystals play in mechanical time keeping. This alludes to the service’s core function - keeping track of time (within the relative ‘gym' context).",
      media: ["brand.jpg"],
    },
    {
      title: "Service Development",
      description: "",
      media: ["service_blueprint.jpg"],
    },
    {
      title: "App Development",
      description:
        "Developing the service's UI design language, & user experience. Part of the UX, the loyalty program, is designed to extend the quartz crystal metaphor, in which user membership tiers are presented as different crystals (as opposed to the hackneyed silver, gold, etc system).",
      media: ["tiers.jpg", "app_ui.jpg"],
    },
    {
      title: "Design Development - Locker / Tracker",
      description:
        "Iterating on the ergonomics, accessibility and affordances of the product. Certain aspects of the product were designed to be purely mechanical (as opposed to electronic), like rotating the outer bezel to engage the lock and the ‘press to eject’ mechanism for the tracker, creating familiar tangible interaction.",
      media: [["sketches_1.jpg", "sketches_2.jpg"], "model_development.jpg"],
    },
    {
      title: "Exploded View",
      description: "",
      media: ["exploded_view.jpg"],
    },
    {
      title: "3D Printed Prototype",
      description: "",
      media: ["prototype.jpg"],
    },
    {
      title: "Prototype In Context",
      description: "",
      media: ["prototype_context.jpg"],
    },
  ],
};

export default gym;
