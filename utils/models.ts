export interface ProjectModel {
  id: string
  title: string
  subtitle: string
  type: string
  date: string
  image: string
  description: string
  body: Array<ProjectBodyModel>
}

export interface ProjectBodyModel {
  title: string
  description: string
  media: Array<string | [string, string]> // Supports vimeo and youtube videos using "provider/videoId" schema. The nested array enables 2x grid of images
}

export interface GoldModel {
  title: string
  subtitle: string
  image: string
  url: string
}