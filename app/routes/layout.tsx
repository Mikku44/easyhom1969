import { Outlet } from "react-router";
import Navbar from "~/components/Navbar";

export default function Layout() {
  return (
    <main>
        <Navbar />
        <Outlet></Outlet>
    </main>
  )
}
