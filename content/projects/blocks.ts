import { ProjectModel } from 'utils/models'

const blocks: ProjectModel = {
  id: "blocks",
  title: "Blocks Modular Smartwatch",
  subtitle: "Digital, Industrial & Visual Design",
  type: "Hardware Startup",
  date: "2015",
  image: "hero.jpg",
  description: "[Blocks](https://www.kickstarter.com/projects/2106691934/blocks-the-worlds-first-modular-smartwatch) was a UK startup creating the world’s first modular smartwatch. As Digital Design Lead, I was responsible for the software design and visual identity of the company while simultaneously supporting the industrial and marketing teams. During my time at the company we managed to raise $1.6 million on [Kickstarter](https://www.kickstarter.com/projects/2106691934/blocks-the-worlds-first-modular-smartwatch), win a Reddot Award, and get featured on [Forbes](https://www.forbes.com/sites/antonyleather/2015/11/18/blocks-the-modular-smartwatch-that-could-crush-all-other-wearables/), [BBC](https://www.bbc.com/news/av/technology-34832480/build-your-own-smartwatch-raises-15m), [Wired](https://www.wired.co.uk/article/blocks-smartwatch-kickstarter-qualcomm-android), [The Verge](https://www.theverge.com/2015/10/13/9517797/the-blocks-modular-smartwatch-just-launched-on-kickstarter), [TechCrunch](https://techcrunch.com/2015/06/02/blocks-modular-smartwatch-in-the-making-will-run-on-android/) and other media outlets.",
  body: [
    {
      title: "Blocks Teaser Film",
      description: "A film about the product, its ecosystem and its potential. Directed and produced by [Dogfella](http://dogfella.co.uk/) and myself.",
      media: ["vimeo/278540247"]
    },
    {
      title: "Developing the UI & UX",
      description: "",
      media: ["ui.jpg", "flowchart.jpg"]
    },
    {
      title: "Web Design",
      description: "",
      media: ["web.jpg", "store.jpg"]
    },
    {
      title: "Future Blockstore",
      description: "The Blockstore is hardware & software marketplace for people to purchase modules & apps for their watch.",
      media: ["blockstore.jpg"]
    },
    {
      title: "Marketing Content",
      description: "",
      media: ["ad_kickstarter.jpg", "ad_engadget.jpg", "render.jpg", "scatter.jpg"]
    }
  ]
}

export default blocks