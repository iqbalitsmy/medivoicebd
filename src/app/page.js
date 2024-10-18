import Asidebar from "./components/HomePage/Asidebar";
import CalenderDate from "./components/HomePage/CalenderDate";
import Headlines from "./components/HomePage/Headlines";
import MainSection from "./components/HomePage/MainSection";
export default async function Home() {

  return (
    <div className="min-h-screen px-4">
      <section className="max-w-[1170px] mx-auto">
        <CalenderDate />
        <Headlines  />
      </section>
      <section className="container mx-auto max-w-[1170px] flex flex-wrap justify-between">
        <MainSection />
        <Asidebar />
      </section>
    </div>
  );
}
