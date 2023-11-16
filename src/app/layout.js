import "@/styles/globals.css";
import { poppins } from "./fonts.js";
// import Logo from "./components/logo";
import LogoYCL from "@/components/logo-ycl";
import NavBar from "./navBar";

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
