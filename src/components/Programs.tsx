import { FaCircleChevronRight, FaCrown } from "react-icons/fa6";
import SectionHead from "./SectionHead";
import { programs } from "../data";
import Card from "../UI/Card";
import { Link } from "react-router-dom";

function Programs() {
  return (
    <section className="programs">
      <div className="container programs__container">
        <SectionHead icon={<FaCrown />} title="Programs" className={true} />
        <div className="programs__wrapper">
          {programs.map(({ id, icon, title, info, path }) => {
            return (
              <Card key={id} className="programs__program">
                <span>{icon}</span>
                <h4>{title}</h4>
                <small>{info}</small>
                <Link to={path} className="btn sm">
                  More Info <FaCircleChevronRight />
                </Link>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Programs;
