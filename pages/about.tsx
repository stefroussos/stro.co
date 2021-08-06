import Image from "next/image";
import css from "styled-jsx/css";
import ReactMarkdown from "react-markdown";
import about from "content/about";
import Layout from "components/Layout";

const AboutPage = () => (
  <Layout
    title="About"
    subtitle="My bio"
    description="I’m a designer and software developer passionate about technology, startups, healthcare, film and environmentalism."
    image="/images/about/hero.jpg"
  >
    <section>
      <div className="about-container">
        <Image
          priority
          placeholder="blur"
          src={`/images/about/${about.image}`}
          blurDataURL={`/images/about/${about.image}`}
          alt={`about`}
          width={1280}
          height={620}
        />
        <div className="about-content">
          <ReactMarkdown
            source={about.description}
            linkTarget={() => "_blank"}
          />
        </div>
      </div>
    </section>
    <style jsx>{styles}</style>
  </Layout>
);

const styles = css`
  .about-container {
    color: var(--text);
    background: #fff;
    margin: 20px 50px 0 50px;
    transition: var(--ease-in-out);
  }

  .about-content {
    padding: 30px 60px 60px 60px;
  }

  @media screen and (max-width: 1000px) {
    .about-container {
      margin: 20px 20px 0 20px;
    }

    .about-content {
      padding: 20px 20px 30px 20px;
    }
  }
`;

export default AboutPage;
