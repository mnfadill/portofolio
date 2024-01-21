import "../styles/globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "Muhammad Nur Fadillah",
  description: "A portofolio using NextJS",
};

interface Child {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Child) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>
          <div>{children}</div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
