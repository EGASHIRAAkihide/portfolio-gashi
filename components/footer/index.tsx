import { Footer as FlowbiteFooter } from "flowbite-react";
import { BsFacebook, BsInstagram, BsTwitter, BsGithub } from "react-icons/bs";

export const Footer = () => {
  return (
    <FlowbiteFooter container={true}>
      <div className="w-full">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div>
            <FlowbiteFooter.Brand
              href="https://portfolio-gashi.vercel.app/"
              src="https://flowbite.com/docs/images/logo.svg"
              alt="GASHI Logo"
              name="GASHI"
            />
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <FlowbiteFooter.Title title="Sitemap" />
              <FlowbiteFooter.LinkGroup col={true}>
                <FlowbiteFooter.Link href="#">Home</FlowbiteFooter.Link>
                <FlowbiteFooter.Link href="#">About</FlowbiteFooter.Link>
                <FlowbiteFooter.Link href="#">Works</FlowbiteFooter.Link>
                <FlowbiteFooter.Link href="#">Contact</FlowbiteFooter.Link>
              </FlowbiteFooter.LinkGroup>
            </div>
            <div>
              <FlowbiteFooter.Title title="Follow us" />
              <FlowbiteFooter.LinkGroup col={true}>
                <FlowbiteFooter.Link href="https://github.com/EGASHIRAAkihide">
                  Github
                </FlowbiteFooter.Link>
                <FlowbiteFooter.Link href="https://www.instagram.com/gashi_japan/">
                  Instagram
                </FlowbiteFooter.Link>
              </FlowbiteFooter.LinkGroup>
            </div>
            {/* <div>
              <FlowbiteFooter.Title title="Legal" />
              <FlowbiteFooter.LinkGroup col={true}>
                <FlowbiteFooter.Link href="#">
                  Privacy Policy
                </FlowbiteFooter.Link>
                <FlowbiteFooter.Link href="#">
                  Terms & Conditions
                </FlowbiteFooter.Link>
              </FlowbiteFooter.LinkGroup>
            </div> */}
          </div>
        </div>
        <FlowbiteFooter.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <FlowbiteFooter.Copyright href="#" by="GASHI LABO" year={2022} />
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
        </div>
      </div>
    </FlowbiteFooter>
  );
};
