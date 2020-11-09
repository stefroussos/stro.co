import { ProjectModel } from 'utils/models'

const bitcoin: ProjectModel = {
  id: "bitcoin",
  image: "hero.jpg",
  title: "A Visual Guide to Bitcoin",
  subtitle: "Information Design & Full Stack Development",
  type: "Web App",
  date: "2020",
  description: "You can view this interactive guide on [bitcoin.alburn.co](https://bitcoin.alburn.co/?ref=stro)\n\n Bitcoin is a breakthrough innovation. Unfortunately most people struggle to understand the technology that drives it. This is a non-technical guide that unravels Bitcoin’s core concepts by using real-time data and interactive visualisations. I used [Airbnb's Lottie](https://airbnb.design/lottie/) for the animations, [NextJS](https://nextjs.org/) for the web app and [Firebase](https://firebase.google.com/) Firestore & Functions to get real-time Bitcoin data.",
  body: [
    {
      title: "Playback Video",
      description: "",
      media: ["vimeo/476655128"]
    }
  ]
}

export default bitcoin