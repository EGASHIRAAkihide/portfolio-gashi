import { HiChartPie, HiInbox, HiUser, HiViewBoards } from "react-icons/hi";
import SettingsAccessibilityIcon from "@mui/icons-material/SettingsAccessibility";
import { Sidebar as FlowbiteSidebar } from "flowbite-react";
import SvgIcon from "@mui/icons-material/SettingsAccessibility";

export const Sidebar = () => {
  return (
    <div className="w-fit">
      <FlowbiteSidebar aria-label="sidebar">
        <FlowbiteSidebar.Items>
          <FlowbiteSidebar.ItemGroup>
            <FlowbiteSidebar.Item href="/" icon={HiChartPie}>
              HOME
            </FlowbiteSidebar.Item>
            <div>
              <SettingsAccessibilityIcon />
              About GASHI
            </div>
            <FlowbiteSidebar.Item href="/about">
              <SettingsAccessibilityIcon />
              About GASHI
            </FlowbiteSidebar.Item>
            <FlowbiteSidebar.Item
              href="/works"
              icon={HiViewBoards}
              label="Pro"
              labelColor="alternative"
            >
              Works
            </FlowbiteSidebar.Item>
            <FlowbiteSidebar.Item href="#" icon={HiInbox} label="3">
              Contact
            </FlowbiteSidebar.Item>
            <FlowbiteSidebar.Item href="#" icon={HiUser}>
              Design System
            </FlowbiteSidebar.Item>
            {/* <FlowbiteSidebar.Item href="#" icon={HiShoppingBag}>
              Products
            </FlowbiteSidebar.Item>
            <FlowbiteSidebar.Item href="#" icon={HiArrowSmRight}>
              Sign In
            </FlowbiteSidebar.Item>
            <FlowbiteSidebar.Item href="#" icon={HiTable}>
              Sign Up
            </FlowbiteSidebar.Item> */}
          </FlowbiteSidebar.ItemGroup>
        </FlowbiteSidebar.Items>
      </FlowbiteSidebar>
    </div>
  );
};
