import css from "styled-jsx/css";
import data from "content/gold";
import Layout from "components/Layout";
import GoldCard from "components/GoldCard";

const GoldPage = () => (
  <Layout
    title="Gold"
    subtitle="A collection of some of my favourite things."
    description="A collection of some of my favourite things."
    image="/images/about/hero.jpg"
  >
    <section>
      <div className="gold-container">
        {data.map((card) => (
          <GoldCard key={card.title} card={card} />
        ))}
      </div>
    </section>
    <style jsx>{styles}</style>
  </Layout>
);

const styles = css`
  .gold-container {
    display: flex;
    flex-wrap: wrap;
    margin: 20px 50px 0 50px;
  }

  @media screen and (max-width: 1000px) {
    .gold-container {
      margin: 20px 20px 0 20px;
    }
  }
`;

export default GoldPage;
