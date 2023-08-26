import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import BenefitsSection from "./components/BenefitsSection";
import ProductiveSection from "./components/ProductiveSection";
import FeedbackSection from "./components/feedbackSection";
import Footer from "./components/Footer";
import SignUp from "./components/SignUp";

function App() {
  return (
    <>
      <div className="w-full absolute -bottom-52 -z-10">
        <svg
          className="block max-sm:hidden"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="14 -0.000247955 1501 2771"
        >
          <path
            d="M14 413.954c90.836-5.359 176.206-50.375 256.111-135.046C389.968 151.9 364.01 105.164 563.005 148.686 762 192.207 745.05 163.699 873 63.13c127.95-100.57 211-77.554 289 44.667 78 122.222 151 162.895 284 207.778 88.667 29.921 92.03 848.285 10.091 2455.09H14V413.956z"
            fill="hsl(218,28%,13%)"
          />
        </svg>
        <svg
          className="hidden max-sm:block"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 -0.471136 390.5 3954"
        >
          <path
            d="M 0 129 c 23 -2 44 -16 64 -42 c 30 -40 23 -54 73 -41 c 50 14 46 5 77 -27 c 32 -31 53 -24 72 14 c 19 38 55 47 88 61 c 22 9 22 1296 0 3860 H 0 V 129 z"
            fill="hsl(218,28%,13%)"
          />
        </svg>
      </div>

      <Navbar />
      <HeroSection />
      <BenefitsSection />
      <ProductiveSection />
      <FeedbackSection />
      <SignUp />

      <Footer />
    </>
  );
}

export default App;
