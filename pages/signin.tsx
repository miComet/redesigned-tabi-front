import { BuiltInProviderType } from "next-auth/providers";
import {
  ClientSafeProvider,
  getProviders,
  LiteralUnion,
  signIn as SighIntoProvider,
} from "next-auth/react";
import Footer from "../components/Footer";
import Header from "../components/Header";

const signIn = ({
  providers,
}: Record<LiteralUnion<BuiltInProviderType, string>, ClientSafeProvider>) => {
  return (
    <>
      <Header />
      <div
        className="flex flex-col items-center justify-center min-h-screen
      py-2 -mt-20 px-14 text-center"
      >
        <p className="font-bold text-xl -ml-52">Sign up for a free account</p>
        <div className="items-center space-x-6 mt-10">
          <input
            className="border-2 border-gray-400 px-4 py-2 outline-none w-80"
            type="text"
            placeholder="Email address"
          />
          <button className=" whitespace-nowrap py-2 px-8 bg-sky-500 rounded-lg text-white">
            Sign up
          </button>
        </div>
        <p className="font-xs text-sm mt-8">or</p>

        <div className="mt-8">
          {Object.values(providers).map((provider) => (
            <div key={provider.name}>
              <button
                className="py-2 px-8 text-sky-500 rounded-lg border-sky-500 border"
                onClick={() =>
                  SighIntoProvider(provider.id, { callbackUrl: "/" })
                }
              >
                Continue with {provider.name}
              </button>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export async function getServerSideProps() {
  const providers = await getProviders();

  return {
    props: {
      providers,
    },
  };
}

export default signIn;
