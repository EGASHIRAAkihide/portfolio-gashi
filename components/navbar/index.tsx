import { Navbar as NextUiNavbar, Button, Link, Text } from "@nextui-org/react";

export default function Navbar() {  
  return (
    <NextUiNavbar isBordered variant="floating">
      <NextUiNavbar.Brand>
        <Text b color="inherit">
          GASHI
        </Text>
      </NextUiNavbar.Brand>
      <NextUiNavbar.Content>
        <NextUiNavbar.Link href="#">About</NextUiNavbar.Link>
        <NextUiNavbar.Link isActive href="#">Works</NextUiNavbar.Link>
        <NextUiNavbar.Link href="#">Contact</NextUiNavbar.Link>
      </NextUiNavbar.Content>
      {/* TODO: authentication付与 */}
      {/* <NextUiNavbar.Content>
        <NextUiNavbar.Link href="#">
          Login
        </NextUiNavbar.Link>
        <NextUiNavbar.Item>
          <Button auto flat as={Link} href="#">
            Sign Up
          </Button>
        </NextUiNavbar.Item>
      </NextUiNavbar.Content> */}
    </NextUiNavbar>
  )
}