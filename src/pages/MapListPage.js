import data from "../db/data.json";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

import "../styles/mapListPage.css";
import Level from "../components/Level";
import Header from "../components/Header";

export default function MapListPage() {
  const { id } = useParams();
  const mapList = data.maps.filter((map) => map.id === Number(id));
  const levelList = data.levels.filter((level) => level.id === Number(id));
  return (
    <>
      <div className="mapBackground2">
        <div className="map-header">
          <Header />
        </div>
        <ul className="show-level">
          {levelList.map((level) => (
            <li key={level.id}>
              <div>Level: {level.level}</div>
            </li>
          ))}
        </ul>
        <table border="1">
          <tbody>
            <tr>
              <td>Clear</td>
              <td>Level</td>
              <td>Artist</td>
              <td>Song</td>
              <td>Download</td>
              <td>Preview</td>
            </tr>
            {mapList.map((map) => (
              <Level map={map} key={map.id}></Level>
            ))}
          </tbody>
        </table>
        <div className="link-map">
          <Link to="/map">다 깼다면? </Link>
        </div>
      </div>
    </>
  );
}
