import Image from "next/image";
import { images } from "@/constants/images";

const Page = () => {
  return (
    <main className="w-screen h-screen p-3">
      <section className="flex items-center justify-center h-full w-full">
        <div className="w-3/6 flex flex-col items-center gap-10">
          <div className="w-2/3">
            <div className="font-bold text-3xl">Forgot password</div>
            <p>Enter your email to reset your password</p>
          </div>
          <div className="w-2/3">
            <label htmlFor="Email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email address"
              className="border-solid border-[1px] focus:outline-blue-500 border-blue-500 rounded-md py-2 px-4 w-full"
            />
          </div>
          <div className="w-2/3">
            <button
              type="submit"
              className="bg-blue-800 text-blue-50 w-full py-2 px-4 rounded-md"
            >
              Continue
            </button>
          </div>
        </div>
        <div
          style={{
            background: `url(${images.forgotPassword.src})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "bottom right",
          }}
          className="w-4/6 h-full rounded-lg"
        >
          <div className="h-[40%]">
            <div className="bg-neutral-50 w-52 mt-4 pl-16 py-3 rounded-r-full">
              <Image
                src={images.logo}
                alt="church logo"
                width={120}
                height={20}
              />
            </div>
          </div>
          <div className="h-[50%] flex justify-center items-center p-8">
            <div className="w-5/6 text-neutral-50 text-center bg-neutral-800 bg-opacity-45 backdrop-blur-sm p-8" style={{

            }}>
              <p>
                &ldquo;The steadfast love of the Lord never ceases; His mercies
                never come to an end; they are new every morning; great is Your
                faithfulness. &apos;The Lord is my portion,&apos; says my soul,
                &apos;therefore I will hope in Him.&apos;&ldquo;
              </p>
              <p className="mt-6">Lamentations 3:22-24</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Page;
