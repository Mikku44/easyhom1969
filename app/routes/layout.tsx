import { Outlet } from "react-router";
import { Toaster } from "sonner";
import ContactInfo from "~/components/FloatingButton";
import Footer from "~/components/Footer";
import Navbar from "~/components/Navbar";

export default function Layout() {
  return (
    <main>
      <Toaster />
      <Navbar key={1} />
      <ContactInfo key={2} />
      <Outlet></Outlet>
      <Footer key={3} />
    </main>
  )
}
