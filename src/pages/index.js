import MainAbout from "@/components/about/mainabout";
import Benefits from "@/components/benefits";
import HomeBlog from "@/components/blog/homeblog";
import CourseCategory from "@/components/category";
import Corousel from "@/components/client-carousel";
import HomeContact from "@/components/contact/homecontact";
import HomeCourses from "@/components/courses/HomeCourses";
import Cta from "@/components/cta";
import FunFact from "@/components/funfact";
import Hero from "@/components/hero";
import Layout from "@/components/layout";
import HomeServices from "@/components/service/homeservices";
import Skill from "@/components/skill";
import Testimonial from "@/components/testimonial";
import WorkProcess from "@/components/work-process";
import Link from "next/link";

const Home = () => {
  return (
    <Layout>
      <Hero />
      <CourseCategory />
      <MainAbout />
      <FunFact />
      <HomeServices />
      {/* <Skill /> */}
      <Cta />
      {/* <Benefits /> */}
    </Layout>
  );
};
export default Home;
