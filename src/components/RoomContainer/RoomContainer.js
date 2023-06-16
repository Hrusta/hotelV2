import { useMemo } from "react";
import "./RoomContainer.css";
const RoomContainer = ({
  roomDescription,
  roomType,
  roomAccommodationDescript,
  propWidth,
  propHeight,
  propDisplay,
  propAlignItems,
}) => {
  const image11IconStyle = useMemo(() => {
    return {
      width: propWidth,
      height: propHeight,
    };
  }, [propWidth, propHeight]);

  const standardSingleRoomStyle = useMemo(() => {
    return {
      display: propDisplay,
      alignItems: propAlignItems,
    };
  }, [propDisplay, propAlignItems]);

  return (
    <div className="frame-parent1">
      <div className="image-11-wrapper">
        <img
          className="image-11-icon"
          alt=""
          src={"." + roomDescription}
          style={image11IconStyle}
        />
      </div>
      <div className="standard-single-room-parent">
        <div className="standard-single-room" style={standardSingleRoomStyle}>
          {roomType}
        </div>
        <div className="perfect-for-solo">{roomAccommodationDescript}</div>
        <div className="book-now-parent">
          <div className="book-now">Book now</div>
          <img className="vector-icon" alt="" src="./vector.svg" />
        </div>
      </div>
    </div>
  );
};

export default RoomContainer;
