import css from 'styled-jsx/css'
import { IoLogoGithub, IoLogoLinkedin, IoLogoVimeo } from 'react-icons/io'


const Footer = () => {
  return (
    <footer>
      <p>© {new Date().getFullYear()} Stef Roussos</p>
      <div className="social-icons">
        <a href="https://www.linkedin.com/in/stef-roussos/" aria-label="Linkedin" target="_blank" rel="noopener noreferrer">
          <IoLogoLinkedin size="20" />
        </a>
        <a href="https://vimeo.com/user39048142" aria-label="Vimeo" target="_blank" rel="noopener noreferrer">
          <IoLogoVimeo size="20" />
        </a>
        <a href="https://github.com/stefroussos" aria-label="Github" target="_blank" rel="noopener noreferrer">
          <IoLogoGithub size="20" />
        </a>
      </div>
      <style jsx>{styles}</style>
    </footer>
  )
}

const styles = css`
  footer {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    width: 1000px;
    padding: 30px 50px;
  }

  a {
    color: #FFF !important;
    padding: 0 10px;
  }

  @media screen and (max-width: 1000px) {
    footer {
      width: 100%;
      padding: 20px 20px 40px 20px;
    }
  }
`

export default Footer