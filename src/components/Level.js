import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSteam } from "@fortawesome/free-brands-svg-icons";

export default function Level({ map }) {
  const mapKey = `map_${map.num}`; // num 값을 기반으로 키 생성
  const [isDone, setIsDone] = useState(() => {
    const savedIsDone = localStorage.getItem(mapKey);
    return savedIsDone === "true";
  });

  useEffect(() => {
    localStorage.setItem(mapKey, isDone.toString());
  }, [mapKey, isDone]);

  return (
    <tr className={isDone ? "off" : ""}>
      <td id="td-check">
        <input
          type="checkbox"
          id="check-map"
          onChange={() => setIsDone(!isDone)}
          checked={isDone}
        />
      </td>
      <td id="td-level">{map.level} </td>
      <td>{map.artist} </td>
      <td>{map.name}</td>
      <td id="td-workshop">
        <button onClick={() => window.open(map.workshop)} id="btn-workshop">
          <FontAwesomeIcon icon={faSteam} id="icon-workshop" />
        </button>
      </td>
      <td id="td-youtube">
        <button id="btn-youtube" onClick={() => window.open(map.youtube)}>
          ▶
        </button>
      </td>
    </tr>
  );
}
