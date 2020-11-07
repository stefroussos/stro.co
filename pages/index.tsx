import { projects } from 'content'
import Layout from 'components/Layout'
import Cards from 'components/Cards'


const IndexPage = () => {
  return (
    <Layout title="Projects">
      <Cards projects={projects} />
    </Layout>
  )
}

export default IndexPage