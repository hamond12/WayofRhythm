import Header from "../components/Header";
import "../styles/guidePage.css";
import Content1 from "../svg/guidePage/Content1";
import Content2 from "../svg/guidePage/Content2";
import Rabbits from "../svg/guidePage/Rabbits";
import ToContent from "../svg/guidePage/ToContent";

export default function GuidePage() {
  console.log(window.scrollY);
  return (
    <>
      <div className="guide-header">
        <Header />
      </div>
      <div className="guide-background">
        <div className="rabbits">
          <Rabbits />
        </div>
        <div>
          <div className="content1" onClick={() => window.scrollTo(0, 850)}>
            <Content1 />
          </div>
          <div className="content2" onClick={() => window.scrollTo(0, 1670)}>
            <Content2 />
          </div>
        </div>
      </div>
      <div
        onClick={() => {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        }}
        className="to-content"
      >
        <ToContent />
      </div>
    </>
  );
}
