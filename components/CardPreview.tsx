import Image from 'next/image'
import css from 'styled-jsx/css'
import { MdArrowDownward, MdClose } from 'react-icons/md';
import { ProjectModel } from 'utils/models'


interface Props {
  active: boolean
  project: ProjectModel
  onClick: any
}

const CardPreview = ({ active, project, onClick }: Props) => {
  return (
    <div className={active ? '' : 'pointer'}>
      <Image 
        src={`/images/${project.id}/${project.image}`}
        alt={`${project.id} hero`}
        width={1280}
        height={620}
        quality={100}
      />
      <div className={active ? 'description card-active' : 'description'}>
        <div>
          <h1>{project.title}</h1>
          <h2>{project.subtitle}</h2>
        </div>
        {active ? (
          <MdClose size="20" className="pointer" onClick={() => onClick('')} />
        ) : (
          <MdArrowDownward size="20"  />
        )}
      </div>
      <style jsx>{styles}</style>
    </div>
  )
}

const styles = css`
  .description {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 40px 15px 40px;
    transition: var(--ease-in-out);
  }

  .card-active {
    align-items: flex-start;
    padding: 40px 80px 20px 80px;
  }

  img {
    width: 100%;
  }

  @media screen and (max-width: 1000px) {
    .description {
      padding: 8px 20px;
    }

    .card-active {
      padding: 20px 20px;
    }
  }
`

export default CardPreview