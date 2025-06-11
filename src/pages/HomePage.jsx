import { AboutUs, Hero, Events } from "../components";
import Programs from "../components/programs/Programs";
import News from "../components/news/News";
import Team from "../components/team/Team";

const HomePage = () => {
  return (
    <>
      <div id="content" className="site-content">
        <Hero />
        <AboutUs />
        <Programs />
        <Events />
        <Team />
        <News />
      </div>
    </>
  );
};

export default HomePage;
