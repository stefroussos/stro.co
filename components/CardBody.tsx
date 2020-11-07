import css from 'styled-jsx/css'
import ReactMarkdown from 'react-markdown'
import { ProjectBodyModel } from 'utils/models'
import Media from './Media'


interface CardBodyProps {
  id: string
  content: ProjectBodyModel
}

const CardBody = ({ content, id }: CardBodyProps) => {
  return (
    <div className="card-body-container">
      <h3>{content.title}</h3>
      <div className="card-body-description">
        <ReactMarkdown 
          source={content.description}
          linkTarget={() => "_blank"}
        />
      </div>
      {content.media.map((medium, index) => <Media key={id+index} medium={medium} id={id} />)}
      <style jsx>{styles}</style> 
    </div>
  )
}

const styles = css`
  .card-body-container {
    padding: 20px 0;
  }

  .card-body-description {
    padding: 5px 0 20px 0;
  }
`

export default CardBody