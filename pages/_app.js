import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import { Roboto } from "@next/font/google";
import Wrapper from "@/components/Wrapper";
const inter = Roboto({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["100", "300", "400", "500", "700", "900"],
});

export default function App({ Component, pageProps }) {
  return (
    <div className={`${inter.variable} font-sans`}>
      <Wrapper>
        <Navbar />
      </Wrapper>
      <Component {...pageProps} />
      <Wrapper>
        <Footer />
      </Wrapper>
    </div>
  );
}
