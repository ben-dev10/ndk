import Footer from "../_components/footer";
import Navbar from "../_components/navbar";
import "./app.module.css";

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="_ui _homelayout">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
