import { useRouter } from "next/router";
import HeadMeta from "../../pages/common/head";
import { Footer } from "../footer";
import { Navbar } from "../navbar";
import { Sidebar } from "../sidebar";

export const Layout = ({ children }: any) => {
  const router = useRouter();
  return (
    <div className="relative h-screen">
      <HeadMeta />
      <Navbar link="https://portfolio-gashi.vercel.app/" />
      <div className="flex gap-4">
        <Sidebar />
        <main className="h-full w-full p-4">{children}</main>
      </div>
      <Footer />
    </div>
  );
};
