import Image from "next/image";
import { images } from "@/lib/constants/images";
import ResetPasswordForm from "@/components/forms/ResetPasswordForm";

const Page = () => {
  return (
    <main className="w-screen h-screen p-3">
      <section className="flex items-center justify-center h-full w-full">
        <ResetPasswordForm />
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
