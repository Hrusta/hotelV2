import RoomContainer from "../RoomContainer/RoomContainer";
import "./RoomSection.css";

const RoomSection = () => {
  return (
    <div className="frame-parent2">
      <div className="choose-a-room-type-parent">
        <div className="choose-a-room">Choose a room type</div>
        <div className="explore-our-range">
          Explore our range of luxurious room types, each designed to suit your
          unique preferences and elevate your stay to new heights of comfort and
          elegance.
        </div>
      </div>
      <div className="frame-parent3">
        <RoomContainer
          roomDescription="/image-11@2x.png"
          roomType="Standard Single Room"
          roomAccommodationDescript="Perfect for solo travelers or for business guests."
          propWidth="421.48px"
          propHeight="280.88px"
          propDisplay="inline-block"
        />
        <RoomContainer
          roomDescription="/image-10@2x.png"
          roomType="Standard Double or Twin Room"
          roomAccommodationDescript="Really comfortable room for couples."
          propWidth="460.68px"
          propHeight="307px"
          propDisplay="flex"
          propAlignItems="center"
        />
        <RoomContainer
          roomDescription="/image-8@2x.png"
          roomType="Superior Double or Twin Room"
          roomAccommodationDescript="For the ones that fancy a bit more space."
          propWidth="523px"
          propHeight="348.94px"
          propDisplay="flex"
          propAlignItems="center"
        />
      </div>

      <img className="arrow-icon" alt="" src="/arrow.svg" />
      <img className="arrow-icon1" alt="" src="/arrow1.svg" />
    </div>
  );
};

export default RoomSection;
