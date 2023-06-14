import Header from "../components/Header/Header";
import OfferSection from "../components/OfferSection/OfferSection";
import RoomSection from "../components/RoomSection/RoomSection";
import PeopleCommentsSection from "../components/PeopleCommentsSection/PeopleCommentsSection";
import BookingSection from "../components/BookingSection/BookingSection";
import UpperTownSection from "../components/UpperTownSection/UpperTownSection";
import DiscountSection from "../components/DiscountSection/DiscountSection";
import "./Homepage.css";
import StartSection from "../components/StartSection/StartSection";
import HomepageinnerSection from "../components/HomepageinnerSection/HomepageinnerSection";
const Homepage = () => {
  return (
    <div className="homepage">
      <Header />
      <StartSection />
      <OfferSection />
      <RoomSection />
      <PeopleCommentsSection />
      <BookingSection />
      <UpperTownSection />
      <DiscountSection />
      <HomepageinnerSection />
    </div>
  );
};

export default Homepage;
