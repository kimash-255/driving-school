import MainAbout from "@/components/about/mainabout";
import Benefits from "@/components/benefits";
import HomeCourses from "@/components/courses/HomeCourses";
import FunFact from "@/components/funfact";
import Layout from "@/components/layout";
import PageHeader from "@/components/pageheader/PageHeader";
import HomeServices from "@/components/service/homeservices";
import Skill from "@/components/skill";
import WorkProcess from "@/components/work-process";
import Link from "next/link";

const AboutPage = () => {
  return (
    <Layout>
      <PageHeader title="About us" />
      <MainAbout />
      {/* <HomeServices /> */}
      <Skill />
      <HomeCourses />
      <FunFact />
      <WorkProcess />
      <Benefits />
    </Layout>
  );
};
export default AboutPage;
