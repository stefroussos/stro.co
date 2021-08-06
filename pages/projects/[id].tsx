import { GetStaticProps, GetStaticPaths } from "next";
import { projects } from "content/projects";
import Layout from "components/Layout";
import Cards from "components/Cards";

interface Props {
  id: string;
}

const ProjectPage = ({ id }: Props) => {
  const project = projects.find((project) => project.id === id);

  return (
    <Layout title={project?.title} image={`/images/${project?.id}/hero.jpg`}>
      <Cards projects={projects} activeProjectId={id} />
    </Layout>
  );
};

export default ProjectPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = projects.map((project) => ({
    params: { id: project.id },
  }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = params?.id;
  return { props: { id } };
};
