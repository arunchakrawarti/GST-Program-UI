import React from "react";
import MarketsHero from "./MarketsHero";
import MarketsCategories from "./MarketsCategories";
import MarketsOverview from "./MarketsOverview";
import WhyTradeDhan from "./WhyTradeDhan";

const MarketsMain = () => {
  return (
    <div>
      <MarketsHero />
      <MarketsCategories />
      {/* <MarketsOverview /> */}
      <WhyTradeDhan />
    </div>
  );
};

export default MarketsMain;
