import type { NextPage } from "next";
import HeadMeta from "./common/head";
import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";
import TopSection from "./sections/top";
import { Sidebar } from "../components/sidebar";

const Home: NextPage = () => {
  return (
    <>
      <HeadMeta />
      <main>
        <Navbar link="https://portfolio-gashi.vercel.app/" />
        <div className="flex">
          <Sidebar />
          <div>asdfasdfasdf</div>
        </div>
        {/* <TopSection /> */}
        <Footer />
      </main>
    </>
  );
};

export default Home;
