import Header from "../../components/Header";
import "./about.css";
import HeaderImage from "../../images/header_bg_1.jpg";
import StoryImage from "../../images/about1.jpg";
import VisionImage from "../../images/about2.jpg";
import MissionImage from "../../images/about3.jpg";

function About() {
  return (
    <>
      <Header title="About" image={HeaderImage}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, ipsum
        perferendis laborum voluptatibus porro magni amet expedita nulla itaque
        possimus explicabo sequi commodi esse fugit eveniet minus ab pariatur.
        Incidunt.
      </Header>
      <section className="about__story">
        <div className="container about__story-container">
          <div className="about__section-image">
            <img src={StoryImage} alt="About Story Image" />
          </div>
          <div className="about__section-content">
            <h1>Our Story</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi
              doloribus ratione sed amet, aut obcaecati vel sequi laudantium
              dolorum temporibus reiciendis impedit, animi itaque aliquid
              pariatur reprehenderit corporis minus quibusdam.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
              soluta nemo inventore, minima asperiores consequatur aliquid
              cupiditate totam dolorem est, hic odio mollitia error, ut
              perspiciatis commodi possimus ipsam dolorum.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et,
              deserunt quibusdam harum laudantium reiciendis excepturi? Eligendi
              aliquid cum repellat optio mollitia autem illum culpa
              voluptatibus, beatae iusto ab, quisquam vel.
            </p>
          </div>
        </div>
      </section>
      <section className="about__vision">
        <div className="container about__vision-container">
          <div className="about__section-content">
            <h1>Our Vision</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi
              doloribus ratione sed amet, aut obcaecati vel sequi laudantium
              dolorum temporibus reiciendis impedit, animi itaque aliquid
              pariatur reprehenderit corporis minus quibusdam.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
              soluta nemo inventore, minima asperiores consequatur aliquid
              cupiditate totam dolorem est, hic odio mollitia error, ut
              perspiciatis commodi possimus ipsam dolorum.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et,
              deserunt quibusdam harum laudantium reiciendis excepturi? Eligendi
              aliquid cum repellat optio mollitia autem illum culpa
              voluptatibus, beatae iusto ab, quisquam vel.
            </p>
          </div>
          <div className="about__section-image">
            <img src={VisionImage} alt="About Vision Image" />
          </div>
        </div>
      </section>
      <section className="about__mission">
        <div className="container about__mission-container">
          <div className="about__section-image">
            <img src={MissionImage} alt="About Mission Image" />
          </div>
          <div className="about__section-content">
            <h1>Our Mission</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi
              doloribus ratione sed amet, aut obcaecati vel sequi laudantium
              dolorum temporibus reiciendis impedit, animi itaque aliquid
              pariatur reprehenderit corporis minus quibusdam.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
              soluta nemo inventore, minima asperiores consequatur aliquid
              cupiditate totam dolorem est, hic odio mollitia error, ut
              perspiciatis commodi possimus ipsam dolorum.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et,
              deserunt quibusdam harum laudantium reiciendis excepturi? Eligendi
              aliquid cum repellat optio mollitia autem illum culpa
              voluptatibus, beatae iusto ab, quisquam vel.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
