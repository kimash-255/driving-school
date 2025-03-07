import Layout from "@/components/layout";
import PageHeader from "@/components/pageheader/PageHeader";
import HomeServices from "@/components/service/homeservices";

const ServicePage = () => {
  return (
    <Layout>
      <PageHeader title="Our Services" />
      <HomeServices />
    </Layout>
  );
};
export default ServicePage;
