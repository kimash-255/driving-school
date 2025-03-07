import Courses from "@/components/courses";
import Layout from "@/components/layout";
import PageHeader from "@/components/pageheader/PageHeader";

const CoursePage = () => {
  return (
    <Layout>
      <PageHeader title="Our Courses" />
      <Courses />
    </Layout>
  );
};
export default CoursePage;
