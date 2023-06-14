import "./DiscountSection.css";

const DiscountSection = () => {
  return (
    <div className="we-love-discounts-we-hope-you-parent">
      <div className="input-discount-section">
        <div className="we-love-discounts-container">
          <span className="we-love-discounts-container1">
            <p className="we-love-discounts">
              We love discounts.
              <br />
              We hope you do too.
            </p>
          </span>
        </div>
        <div className="at-park-45">
          At Park 45, we understand the thrill of finding great deals, and we
          want to share that excitement with you. By joining our newsletter
          community, you'll gain access to a world of savings, promotions, and
          insider perks.
        </div>
        <div className="e-mail-address-wrapper">
          <input type="text" className="input-field" placeholder="Email" />
        </div>
      </div>
      <div className="links">
        <div className="support-parent">
          <div className="support">Support</div>
          <div className="faqs">FAQs</div>
          <div className="legal">Legal</div>
          <div className="legal">Privacy Policy</div>
        </div>
        <div className="pages-parent">
          <div className="support">Pages</div>
          <div className="legal">Rooms</div>
          <div className="legal">Facilities</div>
          <div className="legal">Reviews</div>
          <div className="legal">About Us</div>
          <div className="legal">Contact</div>
        </div>
      </div>
    </div>
  );
};

export default DiscountSection;
