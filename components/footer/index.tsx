import { Footer as FlowbiteFooter } from "flowbite-react";
import { BsFacebook, BsInstagram, BsTwitter, BsGithub } from "react-icons/bs";

export const Footer = () => {
  return (
    <FlowbiteFooter container={true} style={{ position: "fixed", bottom: 0 }}>
      <FlowbiteFooter.Copyright href="#" by="GASHI LABO" year={2022} />
      <FlowbiteFooter.LinkGroup>
        <FlowbiteFooter.Link href="#">About</FlowbiteFooter.Link>
        <FlowbiteFooter.Link href="#">Privacy Policy</FlowbiteFooter.Link>
        <FlowbiteFooter.Link href="#">Licensing</FlowbiteFooter.Link>
        <FlowbiteFooter.Link href="#">Contact</FlowbiteFooter.Link>
      </FlowbiteFooter.LinkGroup>
      <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
        <FlowbiteFooter.Icon
          href="https://www.facebook.com/akihide.egashira.1"
          icon={BsFacebook}
        />
        <FlowbiteFooter.Icon
          href="https://www.instagram.com/gashi_japan/"
          icon={BsInstagram}
        />
        <FlowbiteFooter.Icon
          href="https://twitter.com/gashi_nagasaki"
          icon={BsTwitter}
        />
        <FlowbiteFooter.Icon
          href="https://github.com/EGASHIRAAkihide"
          icon={BsGithub}
        />
      </div>
    </FlowbiteFooter>
  );
};
