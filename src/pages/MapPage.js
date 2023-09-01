import { Link } from "react-router-dom";
import "../styles/mapPage.css";
import data from "../db/data.json";
import Header from "../components/Header";

export default function MapPage() {
  return (
    <>
      <div className="mapBackground1">
        <div className="map-header">
          <Header />
        </div>
        <div className="div-userLevel-explain">
          실력에 맞는 맵풀을 골라보세요!
        </div>
        <div>
          <ul className="user-level">
            {data.levels.map((level) => (
              <li key={level.id}>
                <Link to={`id/${level.id}`} id={`a${level.id}`}>
                  {level.player}
                </Link>
                <div>{level.explain}</div>
              </li>
            ))}
          </ul>
        </div>
        <div className="link-guide">
          <Link to="/guide">맵 다운로드 방법을 잘 모르겠다면?</Link>
        </div>
      </div>
    </>
  );
}
