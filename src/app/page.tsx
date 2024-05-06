import Link from "next/link";
import SideBar from "~/components/Sidebar";
import Home from "~/components/Home";

export default function HomePage() {
  return (
    <div className="w-full py-1600 max-h-screen overflow-y-auto lg:block flex justify-center">
      <Home />
    </div>
  );
}
