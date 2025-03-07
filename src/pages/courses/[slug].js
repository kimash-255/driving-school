import CourseDetail from "@/components/courses/Detail";
import Layout from "@/components/layout";
import PageHeader from "@/components/pageheader/PageHeader";

const CourseDetailPage = () => {
  return (
    <Layout>
      <PageHeader title="Our Courses" />
      <CourseDetail />
    </Layout>
  );
};
export default CourseDetailPage;
