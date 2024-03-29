import { ReactNode } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Header from "./Header";
import Footer from "./Footer";
import styles from "styles/global";

interface Props {
  children?: ReactNode;
  title?: string;
  subtitle?: string;
  description?: string;
  image?: string;
}

const Layout = ({ children, title, subtitle, description, image }: Props) => {
  const path = useRouter().asPath;
  const defaultTitle = "Stef Roussos";
  const defaultDescription =
    "A collection of my design, technology and film projects.";
  const defaultURL = "https://stro.co";
  const defaultSubtitle =
    subtitle === undefined ? defaultDescription : subtitle;
  const defaultImage = defaultURL + "/images/springwood/hero.jpg";
  const OGTitle =
    title === undefined ? defaultTitle : `${defaultTitle} | ${title}`;
  const OGDescription =
    description === undefined ? defaultDescription : description;
  const OGURL = defaultURL + path;
  const OGImage = image === undefined ? defaultImage : defaultURL + image;

  return (
    <>
      <Head>
        <title>{OGTitle}</title>
        <meta name="description" content={OGDescription} />
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:url" content={OGURL} />
        <meta property="og:title" content={OGTitle} />
        <meta property="og:description" content={OGDescription} />
        <meta property="og:image" content={OGImage} />
        <meta name="twitter:site" content={OGURL} />
        <meta name="twitter:image" content={OGImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
      </Head>
      <main>
        <Header subtitle={defaultSubtitle} />
        {children}
        <Footer />
      </main>
      <style jsx global>
        {styles}
      </style>
    </>
  );
};

export default Layout;
