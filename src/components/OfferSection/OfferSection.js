import "./OfferSection.css";
const OfferSection = () => {
  return (
    <div className="frame-parent">
      <div className="what-do-we-offer-parent">
        <div>What do we offer</div>
      </div>
      <div className="frame-group">
        <div className="frame-container">
          <div className="mingcutecar-fill-parent">
            <img
              className="mingcutecar-fill-icon"
              alt=""
              src="/mingcutecarfill.svg"
            />
            <div className="free-parking">Free parking</div>
          </div>
          <div className="fluentfood-egg-24-filled-parent">
            <img
              className="mingcutecar-fill-icon"
              alt=""
              src="/fluentfoodegg24filled.svg"
            />
            <div className="free-parking">Fabulous breakfast</div>
          </div>
        </div>
        <div className="frame-container">
          <div className="fluentfood-egg-24-filled-parent">
            <img
              className="mingcutecar-fill-icon"
              alt=""
              src="/streamlinetravelhotelbellserviceconciergeportercallringbellhopbellreception.svg"
            />
            <div className="free-parking">24-hour front desk</div>
          </div>
          <div className="carbonlocation-filled-parent">
            <img
              className="mingcutecar-fill-icon"
              alt=""
              src="/carbonlocationfilled.svg"
            />
            <div className="free-parking">Central location</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferSection;
