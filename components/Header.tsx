import Link from 'next/link'
import { useRouter } from 'next/router'
import css from 'styled-jsx/css'


interface Props {
  subtitle: string
}

const Header = ({ subtitle }: Props) => {
  const { pathname } = useRouter()

  function isPageActive(page: string) {
    if (page === 'index') {
      return pathname.includes('projects') || pathname === '/' ? 'active' : 'inactive'
    } else {
      return pathname.includes(page) ? 'active' : 'inactive'
    }
  }

  return (
    <header>
      <div>
        <div className="title">Stef Roussos</div>
        <div className="subtitle">{subtitle}</div>
      </div>
      <nav>
        <Link href="/">
          <a className={isPageActive('index')}>Projects</a>
        </Link>
        <Link href="/about">
          <a className={isPageActive('about')}>About</a>
        </Link>
        <a className="inactive" href="https://alburn.co/?ref=stro" target="_blank" rel="noopener noreferrer">
          Alburn Studio
        </a>
      </nav>
      <style jsx>{styles}</style>
    </header>
  )
}

const styles = css`
  header {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    width: 1000px;
    padding: 40px 50px 10px 50px;
  }

  .title {
    font-size: 18px;
    font-weight: 600;
    padding-bottom: 8px;
  }

  .subtitle {
    opacity: 0.7;
  }

  a {
    color: #FFF !important;
    margin-left: 15px;
  }

  .active {
    opacity: 1;
  }

  .inactive {
    opacity: 0.5;
  }

  @media screen and (max-width: 1000px) {
    header {
      flex-direction: column-reverse;
      justify-content: flex-start;
      align-items: flex-start;
      width: 100%;
      padding: 0px;
    }

    nav {
      padding-bottom: 10px;
      width: 100%;
      margin-bottom: 15px;
      padding: 15px 20px;
      background: #222222;
      box-shadow: 0 3px 10px 0 rgba(0,0,0,0.4);
    }

    .title {
      padding: 2px 20px 5px 20px;
    }

    .subtitle {
      font-size: 14px;
      padding: 0 20px;
    }

    a {
      margin: 0 20px 0 0;
      color: #FFF !important
    }
  }
`


export default Header