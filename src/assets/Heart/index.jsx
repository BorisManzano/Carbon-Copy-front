import axios from "axios";
import React, { useState } from "react";
import { useSelector } from "react-redux";

function Heart({ editorValue }) {
  const email = useSelector((state) => state.user.email);

  const addFav = () => {
    if (!editorValue) {
      console.error("El valor del editor es nulo o indefinido");
      return;
    }
    axios
      .post("http://localhost:3001/api/favorites/add", {
        email: email,
        value: editorValue,
      })
      .then((response) => {
        console.log("Añadido a favoritos:", response.data);
      })
      .catch((error) => {
        console.error("Error al añadir a favoritos:", error);
      });
  };

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseOver = () => {
    setIsHovered(true);
  };

  const handleMouseOut = () => {
    setIsHovered(false);
  };

  const handleMouseDown = () => {
    setIsHovered(false);
  };

  return (
    <div
      onClick={addFav}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      onMouseDown={handleMouseDown}
      style={{
        cursor: "pointer",
        backgroundColor: isHovered ? "#2865ff" : "transparent",
        borderRadius: "10px",
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="35"
        height="35"
        viewBox="0 0 30 30"
        fill="none"
      >
        <path
          d="M0.5 10C0.5 4.75329 4.75329 0.5 10 0.5H20C25.2467 0.5 29.5 4.75329 29.5 10V20C29.5 25.2467 25.2467 29.5 20 29.5H10C4.75329 29.5 0.5 25.2467 0.5 20V10Z"
          stroke="white"
        />
        <path
          d="M6.8277 7.82771C9.05494 5.60145 12.6176 5.5267 14.9343 7.60344L15.0011 7.66332L15.0678 7.60339C17.3775 5.52965 20.9471 5.59855 23.1722 7.8276C25.396 10.0573 25.4732 13.6076 23.4063 15.9243L14.999 24.3435L6.59375 15.9243C4.52677 13.6076 4.60505 10.0513 6.8277 7.82771ZM6.8277 7.82771L6.75701 7.75698L6.8277 7.82771ZM21.8978 9.09934L21.8978 9.09932C20.3602 7.55968 17.8797 7.49707 16.2702 8.94258L15.002 10.0807L13.7328 8.94352C12.1182 7.49606 9.64285 7.55972 8.1013 9.10127C6.57409 10.6285 6.49712 13.0731 7.90461 14.6887L7.90443 14.6888L7.90924 14.6936L14.9292 21.7246L15 21.7955L15.0708 21.7246L22.0908 14.6946L22.0909 14.6948L22.0954 14.6897C23.504 13.073 23.4268 10.6315 21.8978 9.09934Z"
          fill="white"
          stroke="#0047FF"
          strokeWidth="0.2"
        />
      </svg>
    </div>
  );
}

export default Heart;
