import Button from "./Button";

const SignUp = () => {
  return (
    <div className="flex flex-col gap-8 max-md:gap-4 bg-[hsl(217,28%,15%)] text-white max-w-4xl shadow-2xl shadow-slate-950 max-md:mx-4 px-20 py-8 max-md:px-9 rounded-lg absolute bottom-72 max-md:bottom-[49rem] md:left-1/2 md:-translate-x-1/2">
      <h1 className="text-4xl max-md:text-2xl font-medium text-center">
        Get early access today
      </h1>
      <p className="text-center max-md:text-sm">
        It only takes a minute to sign up and our free starter tier is extremely
        generous. If you have any questions, our support team would be happy to
        help you.
      </p>
      <div className="w-full">
        <form className="flex items-center gap-5 max-md:gap-2.5 max-md:flex-col">
          <input
            className="w-full text-black !flex-1 px-10 py-2.5 rounded-full"
            type="text"
            placeholder="johnappleseed@mail.com"
            value={"johnappleseed#mail.com"}
          />
          <Button>Get Started For Free</Button>
        </form>
        <span className="px-10 text-red-500 font-bold text-xs">
          please enter a valid email address
        </span>
      </div>
    </div>
  );
};

export default SignUp;
