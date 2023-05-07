# Stro Portfolio
This project was build using [NextJS](https://nextjs.org/) with Typescript.

## NextJS 
* Install: `npm install`
* Run: `npm run dev`
* Build: `npm run build` 
* Deploy: Push to `main` (since the [Vercel](https://vercel.com/) handles the CI/CD)

### Performance
![pagespeed insights desktop](/public/other/pagespeed-insights-desktop.png)
![pagespeed insights mobile](/public/other/pagespeed-insights-mobile.png)

## Guide
1. Add a new project to `content/projects/PROJECT_NAME.ts`
2. Create a new content object and type check it using the `ProjectModel`
3. Create a hero image (2560 * 1240)
4. Compress the project images on [TinyJPG](https://tinyjpg.com/) or [Image Compressor](https://imagecompressor.com/)
5. Add the images to `public/images/PROJECT_NAME/`


## Todos
* Full implementation of `next/image`
* Add Tests
* CMS (on Prismic or similar provider)