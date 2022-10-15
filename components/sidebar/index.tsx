import {
  HiArrowSmRight,
  HiChartPie,
  HiInbox,
  HiShoppingBag,
  HiTable,
  HiUser,
  HiViewBoards,
} from "react-icons/hi";
import { Sidebar as FlowbiteSidebar } from "flowbite-react";

export const Sidebar = () => {
  return (
    <div className="w-fit">
      <FlowbiteSidebar aria-label="sidebar">
        <FlowbiteSidebar.Items>
          <FlowbiteSidebar.ItemGroup>
            <FlowbiteSidebar.Item href="#" icon={HiChartPie}>
              Dashboard
            </FlowbiteSidebar.Item>
            <FlowbiteSidebar.Item
              href="#"
              icon={HiViewBoards}
              label="Pro"
              labelColor="alternative"
            >
              Kanban
            </FlowbiteSidebar.Item>
            <FlowbiteSidebar.Item href="#" icon={HiInbox} label="3">
              Inbox
            </FlowbiteSidebar.Item>
            <FlowbiteSidebar.Item href="#" icon={HiUser}>
              Users
            </FlowbiteSidebar.Item>
            <FlowbiteSidebar.Item href="#" icon={HiShoppingBag}>
              Products
            </FlowbiteSidebar.Item>
            <FlowbiteSidebar.Item href="#" icon={HiArrowSmRight}>
              Sign In
            </FlowbiteSidebar.Item>
            <FlowbiteSidebar.Item href="#" icon={HiTable}>
              Sign Up
            </FlowbiteSidebar.Item>
          </FlowbiteSidebar.ItemGroup>
        </FlowbiteSidebar.Items>
      </FlowbiteSidebar>
    </div>
  );
};
