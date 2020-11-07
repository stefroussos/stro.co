import { ProjectModel } from 'utils/models'

const springwood: ProjectModel = {
  id: "springwood",
  image: "hero.jpg",
  title: "Springwood Health",
  subtitle: "Digital Design & Full Stack Development",
  type: "Healthcare Startup",
  date: "2017 - 2020",
  description: "Personal health records are often difficult to access, manage and interpret for patients, that's why I founded Springwood. Its a cross-platform application that enables patients to easily consolidate their records and engage with their medical data. In a matter of minutes, patients can digitise their records and watch them transform from raw data into a refined rendering of their health, that’s intuitive, aggregated and contextual.",
  body: [
    {
      title: "Springwood Film",
      description: "A introductory film explaining the application. This film was shot with the Canon EOS C300, edited on Premiere and After Effects on a €200 budget. Credits: Sound design and composition by [Theo Koustas](https://www.facebook.com/tkoustas), voice-over by Alex Sears.",
      media: ["vimeo/376173005"]
    },
    {
      title: "Value Propositions",
      description: "",
      media: ["value_propositions.jpg"]
    },
    {
      title: "Initial Ideation",
      description: "",
      media: ["concepts.jpg"]
    },
    {
      title: "User Interface",
      description: "",
      media: ["ui.jpg", "spotlight.jpg", "upload_labs.jpg"]
    },
    {
      title: "Branding",
      description: "",
      media: ["branding.jpg"]
    }
  ]
}

export default springwood