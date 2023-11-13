import "@/styles/globals.css";
import { Inter, Poppins } from "next/font/google";
// import Logo from "./components/logo";
import LogoYCL from "@/components/logo-ycl";
import NavBar from "./navBar";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata = {
  charset: "UTF-8",
  title: "Yu-Cheng Liao | Full Stack Developer",
  description: "Yu-Cheng Liao's Portfolio and Works",
  authors: { name: "Yu-Cheng Liao" },
  viewport: { width: "device-width", initialScale: 1.0 },
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body className={poppins.className}>
        {/* <Logo /> */}
        <LogoYCL className="logo" />
        <NavBar />
        <div className="child-div">{children}</div>
      </body>
    </html>
  );
}
