import { ProjectModel } from 'utils/models'

const desk: ProjectModel = {
  id: "desk",
  image: "hero.jpg",
  title: "Autonomous Standing Desk",
  subtitle: "Industrial Design & Hardware Prototyping",
  type: "Furniture / Hardware Prototype",
  date: "2016",
  description: "I wanted a standing desk that would take willpower and motivation off the table. If I bought a conventional standing desk, I would probably overuse it for a week or two and then it would stay in the sit position for ever. That's why I decided to build my own using an Arduino, two linear actuators and the [Fogg Behavior Model](https://behaviormodel.org/). I designed a 'training program', that would start off small, 10 minutes per day, and ramp-up to a daily 50:50 sit:stand ratio. At the beginning of the day I would initialise the program and the Arduino would automatically cycle through the current program.",
  body: [
    {
      title: "Arduino Prototyping",
      description: "I connected my Arduino to a pair of relays that controlled two linear actuators. For safety, I added a couple of manual control buttons, but the main idea was to build a desk with no hardware interface - only a digital one (the Arduino IDE to start with).",
      media: ["arduino.jpg"]
    },
    {
      title: "Ikea Prototype",
      description: "The first prototype was a 'hacked' Ikea table, which worked quite well but wasn't very stable during motion.",
      media: ["prototype_1.jpg"]
    },
    {
      title: "Prototype 2",
      description: "The second prototype was built using lazer-cut plywood, which was more functional and stable during motion, but less stable at rest.",
      media: ["sketches.jpg", "lazer_diagram.jpg", "lazer_panels.jpg", "prototype_2.jpg"]
    }
  ]
}

export default desk