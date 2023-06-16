import "./BookingSection.css";
const BookingSection = () => {
  return (
    <div className="circle-5-parent">
      <div className="guests-who-found">
        Guests who found us on Booking.com were delighted with their stay at our
        hotel.
      </div>
      <div className="sec">
        <div className="sec1">
          <b className="hotel-park-45">Hotel Park 45</b>

          <div className="sec2">
            <img
              className="icostarfilled-icon"
              alt=""
              src="./icostarfilled.svg"
            />
            <img
              className="icostarfilled-icon"
              alt=""
              src="./icostarfilled.svg"
            />
            <img
              className="icostarfilled-icon"
              alt=""
              src="./icostarfilled.svg"
            />
            <img
              className="icostarfilled-icon"
              alt=""
              src="./icostarfilled.svg"
            />
            <img
              className="icostarfilled-icon"
              alt=""
              src="./icostarfilled.svg"
            />
            <div className="sec3">
              <img className="icostarfilled-icon" alt="" src="./icoearth.svg" />
              <div className="travel-sustainable">Travel Sustainable</div>
            </div>
          </div>
        </div>
        <div className="sec4">
          <div className="travel-sustainable">9.1</div>
        </div>
      </div>
    </div>
  );
};

export default BookingSection;
