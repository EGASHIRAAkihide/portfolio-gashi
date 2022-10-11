import { Navbar as FlowbiteNavbar } from "flowbite-react";

type Props = {
  link?: string,
}

export const Navbar = ({
  link = 'https://flowbite.com/',
}: Props) => {
  return (
    <FlowbiteNavbar
      fluid={true}
      rounded={true}
    >
      <FlowbiteNavbar.Brand href={link}>
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Flowbite
        </span>
      </FlowbiteNavbar.Brand>
      <FlowbiteNavbar.Toggle />
      <FlowbiteNavbar.Collapse>
        <FlowbiteNavbar.Link
          href="#"
          active={true}
        >
          Home
        </FlowbiteNavbar.Link>
        <FlowbiteNavbar.Link href="#">
          About
        </FlowbiteNavbar.Link>
        <FlowbiteNavbar.Link href="#">
          Services
        </FlowbiteNavbar.Link>
        <FlowbiteNavbar.Link href="#">
          Pricing
        </FlowbiteNavbar.Link>
        <FlowbiteNavbar.Link href="#">
          Contact
        </FlowbiteNavbar.Link>
      </FlowbiteNavbar.Collapse>
    </FlowbiteNavbar>
  )
}