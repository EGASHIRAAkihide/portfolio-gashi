import { Navbar as NextUiNavbar, Text } from "@nextui-org/react";
import Link from 'next/link'

export default function Navbar() {  
  return (
    <NextUiNavbar isBordered variant="floating">
      <NextUiNavbar.Brand>
        <Text b color="inherit">
          GASHI
        </Text>
      </NextUiNavbar.Brand>
      <NextUiNavbar.Content>
        <Link href="#">About</Link>
        <Link href="#">Works</Link>
        <Link href="#">Contact</Link>
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