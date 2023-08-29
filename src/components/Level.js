import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSteam, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faDownload, faX } from "@fortawesome/free-solid-svg-icons";

export default function Level({ map }) {
  const mapKey = `map_${map.num}`; // num 값을 기반으로 키 생성
  const [isDone, setIsDone] = useState(() => {
    const savedIsDone = localStorage.getItem(mapKey);
    return savedIsDone === "true";
  });

  const [isNameHovered, setIsNameHovered] = useState(false);

  useEffect(() => {
    localStorage.setItem(mapKey, isDone.toString());
  }, [mapKey, isDone]);

  const isDownload = map.download.includes("https://www.youtube.com");
  const isPreviewEmpty = !map.preview.trim();

  return (
    <tr
      className={isDone ? "off" : ""}
      onMouseEnter={() => setIsNameHovered(true)}
      onMouseLeave={() => setIsNameHovered(false)}
    >
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
      <td>
        {map.name}
        {isNameHovered && <p className="tooltip">{map.description}</p>}
      </td>
      <td id="td-download">
        <button onClick={() => window.open(map.download)} id="btn-download">
          <FontAwesomeIcon
            icon={isDownload ? faDownload : faSteam} // 아이콘 변경
            id="icon-download"
          />
        </button>
      </td>
      <td>
        <button
          onClick={() => map.preview && window.open(map.preview)}
          id="btn-preview"
        >
          <div className={isPreviewEmpty ? "div-preview-none" : "div-preview"}>
            ▶︎
          </div>
          <FontAwesomeIcon
            icon={isPreviewEmpty ? faX : faYoutube} // 아이콘 변경
            id="icon-preview"
          />
        </button>
      </td>
    </tr>
  );
}
