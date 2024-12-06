import Banner from "./components/Main/Banner";
import Navbar from "./components/Navbar";
import Skill from "./components/Main/Skill";
import { ItemPortfolio, ItemServices, MySkills } from "./components/MyData";
import AboutMe from "./components/Main/AboutMe";
import MyServices from "./components/Main/MyServices";
import ProjectsMe from "./components/Main/ProjectsMe";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Skill mySkills={MySkills()} />
      <AboutMe mySkills={MySkills()} />
      <MyServices itemServices={ItemServices()} />
      <ProjectsMe itemPortfolio={ItemPortfolio()} />
      <Footer />
    </div>
  );
};

export default App;
