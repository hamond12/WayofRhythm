import Header from "../components/Header";
import "../styles/guidePage.css";
import { ReactComponent as Rabbits } from "../images/guidePage/rabbits.svg";
import { ReactComponent as Content1 } from "../images/guidePage/content1.svg";
import { ReactComponent as Content2 } from "../images/guidePage/content2.svg";
import { ReactComponent as Content3 } from "../images/guidePage/content3.svg";
import { ReactComponent as Contents } from "../images/guidePage/contents.svg";
import { ReactComponent as ToContent } from "../images/guidePage/toContent.svg";

export default function GuidePage() {
  console.log(window.scrollY);
  return (
    <>
      <div className="guide-header">
        <Header />
      </div>
      <div className="guide-background1">
        <div className="rabbits">
          <Rabbits />
        </div>
        <div>
          <div className="content1" onClick={() => window.scrollTo(0, 740)}>
            <Content1 />
          </div>
          <div className="content2" onClick={() => window.scrollTo(0, 1430)}>
            <Content2 />
          </div>
          <div className="content3" onClick={() => window.scrollTo(0, 2410)}>
            <Content3 />
          </div>
        </div>
        <p className="text-content">CONTENTS</p>
      </div>
      <div className="guide-background2">
        <div className="contents">
          <Contents />
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
