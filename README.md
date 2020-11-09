# Stro Portfolio
This project was build using [NextJS](https://nextjs.org/) and Typescript.

## NextJS 
* Install: `npm install`
* Run: `npm run dev`
* Build: `npm run build` 
* Deploy: Push to `main` (since the [Vercel](https://vercel.com/) handles the CI/CD)


## Guide
1. Add a new project to `content/projects/PROJECT_NAME.ts`
2. Create a new object and type check it using the `ProjectModel`
3. Compress the project images on [TinyJPG](https://tinyjpg.com/)
4. Add the images to `public/images/PROJECT_NAME/`


## Todos
* Full implementation of `next/image`
* Add Tests
* Gold: Use sketches instead of images. Create OG Image
* CMS (on Prismic or similar provider)