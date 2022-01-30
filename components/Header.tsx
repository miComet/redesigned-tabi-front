import Link from "next/link";

const Header = () => {
  return (
    <header className="flex justify-between p-5 max-w-7xl mx-auto">
      <div className="flex items-center space-x-10 text-sky-500">
        <Link href="/">
          <img
            className="w-44 object-contain cursor-pointer"
            src="tabi_logo.png"
            alt="logo"
          />
        </Link>
        <h3>Features</h3>
        <h3>Community</h3>
        <h3>Support</h3>
      </div>
      <div className="flex items-center space-x-2 text-sky-500">
        <h3 className="border rounded-lg border-sky-500 px-9 py-1.5">Log in</h3>
        <h3 className="border rounded-lg px-8 py-1.5 bg-sky-500 text-white">
          Register
        </h3>
      </div>
    </header>
  );
};

export default Header;
