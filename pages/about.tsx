import Image from 'next/image'
import css from 'styled-jsx/css'
import Layout from 'components/Layout'


const AboutPage = () => (
  <Layout title="About" description="Bio" image="/images/about.jpg">
    <section>
      <div className="about-container">
        <Image 
          src="/images/about.jpg"
          alt={`about`}
          width={1280}
          height={620}
          quality={100}
        />
        <p>I’m a designer and developer passionate about technology, startups, healthcare and environmentalism. I studied Product Design at the University of the Arts London (Central Saint Martins) for my bachelor's, and then went to graduate school at the Royal College of Art and Imperial College London to study Healthcare and Design. I recently founded a new product and information design studio called <a href="https://alburn.co/?ref=stro" target="_blank" rel="noopener noreferrer">Alburn Studio</a>. Feel free to reach out at <strong>info@alburn.co</strong> - my full resume is available on <a href="https://www.linkedin.com/in/stef-roussos/" target="_blank" rel="noopener noreferrer">Linkedin</a>.</p>
      </div>
    </section>
    <style jsx>{styles}</style> 
  </Layout>
)

const styles = css`
  .about-container {
    color: var(--text);
    background: #FFF;
    margin: 20px 50px 0 50px;
    transition: var(--ease-in-out); 
  }

  .about-container p {
    padding: 30px 60px 60px 60px;
  }

  .about-container img {
    width: 100%;
  }

  @media screen and (max-width: 1000px) {
    .about-container {
      margin: 20px 20px 0 20px;
    }

    .about-container p {
      padding: 20px 20px 30px 20px;
    }
  }
`

export default AboutPage
