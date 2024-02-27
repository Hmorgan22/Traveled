import { useNavigate, useSearchParams } from "react-router-dom";
import styles from "./Map.module.css";

function Map() {
  //allows to navigate to different routes
  const navigate = useNavigate();

  //gets the params from the url
  const [searchParams, setSearchParams] = useSearchParams();
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");

  return (
    <div
      className={styles.mapContainer}
      onClick={() => {
        navigate("form");
      }}
    >
      Map
      <h1>
        position: {lat}, {lng}
      </h1>
    </div>
  );
}

export default Map;
