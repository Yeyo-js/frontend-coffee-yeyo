import { HomeBanner } from "../organisms/homeBanner";
import { Tendencies } from "../organisms/homeTendencies";
import { VenefitionsCoffee } from "../organisms/homeVenefitionsCoffee";
import { MyTemplate } from "../templates/myTemplate";
import { Line } from "../molecules/homeLine";

function HomePage() {
  return (
    <MyTemplate>
      <HomeBanner />
      <VenefitionsCoffee />
      <Tendencies />
      <Line/>
    </MyTemplate>
  );
}

export { HomePage };
