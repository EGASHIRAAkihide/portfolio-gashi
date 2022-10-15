import { HeadingGradient } from "../../../components/heading/gradient";
import { Image } from "../../../components/image/index";

export const TopSection = () => {
  return (
    <section className="relative w-full">
      <Image alt="gashi top image" height="100" src="/dummy.png" width="100" />
      <div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
        <HeadingGradient title="GASHI" subtitle="portfolio" />
      </div>
    </section>
  );
};

export default TopSection;
