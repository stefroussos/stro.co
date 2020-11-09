import css from 'styled-jsx/css'
import { GoldModel } from 'utils/models'


interface Props {
  card: GoldModel
}

const GoldCard = ({ card }: Props) => {
  return (
    <a className="gold-card" href={card.url} target="_blank" rel="noopener noreferrer">
      <img src={`/images/gold/${card.image}`} />
      <div className="gold-content">
        <div>
          <h1>{card.title}</h1>
          <p>{card.subtitle}</p>
        </div>
        <div className="gold-url">{card.url}</div>
        
      </div>
      <style jsx>{cardStyles}</style> 
    </a>
  )
}

const cardStyles = css`
  .gold-card {
    align-items: center;
    width: 215px;
    margin: 0 10px 10px 0px;
    background: #FFF;
    color: var(--text);
  }

  .gold-url {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: var(--blue);
    font-size: 12px;
  }

  .gold-content {
    padding: 15px 20px;
  }

  .gold-content h1 {
    font-size: 14px;
    line-height: 140%;
    padding-bottom: 8px;
  }

  .gold-content p {
    font-weight: 400;
    font-size: 12px;
    padding-bottom: 5px;
    line-height: 140%;
  }

  img {
    width: 100%;
  }

  @media screen and (max-width: 490px) {
    .gold-card {
      max-width: 100%;
      min-width: 100%;
    }
  }
`

export default GoldCard