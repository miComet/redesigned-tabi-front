import Link from "next/link";

const Header = () => {
  return (
    <header className="flex justify-between p-5 max-w-7xl mx-auto">
      <div className="flex items-center space-x-10 text-sky-500">
        <Link href="/">
          <img
            className="w-28 object-contain cursor-pointer"
            src="tabi_logo.png"
            alt="logo"
          />
        </Link>
        <h3 className="cursor-pointer">Features</h3>
        <h3 className="cursor-pointer">Community</h3>
        <h3 className="cursor-pointer">Support</h3>
      </div>
      <div className="flex items-center space-x-2 text-sky-500">
        <h3 className="border rounded-lg border-sky-500 px-9 py-1.5 cursor-pointer">
          Log in
        </h3>
        <h3 className="border rounded-lg px-8 py-1.5 bg-sky-500 text-white cursor-pointer">
          Register
        </h3>
      </div>
    </header>
  );
};

export default Header;
