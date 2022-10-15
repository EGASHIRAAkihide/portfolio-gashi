import { Navbar as FlowbiteNavbar } from "flowbite-react";

type Props = {
  link?: string;
};

export const Navbar = ({ link }: Props) => {
  return (
    <FlowbiteNavbar fluid={true} rounded={true}>
      <FlowbiteNavbar.Brand href={link}>
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          GASHI LABO
        </span>
      </FlowbiteNavbar.Brand>
      <FlowbiteNavbar.Toggle />
      <FlowbiteNavbar.Collapse>
        <FlowbiteNavbar.Link href="#" active={true}>
          Home
        </FlowbiteNavbar.Link>
        <FlowbiteNavbar.Link href="#">About</FlowbiteNavbar.Link>
        <FlowbiteNavbar.Link href="#">Works</FlowbiteNavbar.Link>
        <FlowbiteNavbar.Link href="#">Contact</FlowbiteNavbar.Link>
      </FlowbiteNavbar.Collapse>
    </FlowbiteNavbar>
  );
};
