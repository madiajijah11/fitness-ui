import Image from "../images/values.jpg";
import SectionHead from "./SectionHead";
import { FaDiamond } from "react-icons/fa6";
import { values } from "../data";
import Card from "../UI/Card";

function Values() {
  return (
    <section className="values">
      <div className="container values__container">
        <div className="values__left">
          <img src={Image} alt="Values Image" className="values__image" />
        </div>
        <div className="values__right">
          <SectionHead icon={<FaDiamond />} title="Values" className="" />
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            vitae aut repudiandae consectetur, aliquid velit ipsa eligendi fuga
            labore veritatis non inventore distinctio atque voluptatibus. Nisi
            praesentium fugit nemo doloremque.
          </p>
          <div className="values__wrapper">
            {values.map(({ id, icon, title, desc }) => {
              return (
                <Card className="values__value" key={id}>
                  <span>{icon}</span>
                  <h4>{title}</h4>
                  <small>{desc}</small>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Values;
