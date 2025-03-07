import HomeContact from "@/components/contact/homecontact";
import ContactLocation from "@/components/contact/Location";
import Layout from "@/components/layout";
import PageHeader from "@/components/pageheader/PageHeader";

const ContactPage = () => {
  return (
    <Layout>
      <PageHeader title="Contact us" />
      <HomeContact />
      <ContactLocation />
    </Layout>
  );
};
export default ContactPage;
