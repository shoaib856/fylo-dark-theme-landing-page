import stayProductive from "../assets/images/illustration-stay-productive.png";
import arrow from "../assets/images/icon-arrow.svg";

const ProductiveSection = () => {
  return (
    <section
      id="productive-section"
      className=" container mx-auto max-md:px-5 grid grid-cols-1 md:grid-cols-2 gap-10 py-12 items-center"
    >
      <div>
        <img src={stayProductive} alt="stay productive" />
      </div>
      <div className="flex flex-col gap-6">
        <h2 className="max-w-md text-white text-xl md:text-5xl font-medium">
          Stay productive, wherever you are
        </h2>
        <p className="max-w-lg text-gray-200">
          Never let location be an issue when accessing your files. Fylo has you
          covered for all of your file storage needs.
        </p>
        <p className="max-w-lg text-gray-200">
          Securely share files and folders with friends, family and colleagues
          for live collaboration. No email attachments required.
        </p>
        <a
          href="#"
          className="flex items-center gap-1 text-white border-b-2 pb-2 border-transparent hover:text-[hsl(176,68%,64%)] hover:border-[hsl(176,68%,64%)] transition w-fit"
        >
          <span>See how Fylo works</span>
          <img src={arrow} alt="arrow" className="mt-1" />
        </a>
      </div>
    </section>
  );
};
export default ProductiveSection;
