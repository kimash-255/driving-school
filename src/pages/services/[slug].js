import Layout from "@/components/layout";
import PageHeader from "@/components/pageheader/PageHeader";
import ServiceDetail from "@/components/service/Detail";

const ServiceDetailPage = () => {
  return (
    <Layout>
      <PageHeader title="Our Services" />
      <ServiceDetail />
    </Layout>
  );
};
export default ServiceDetailPage;
