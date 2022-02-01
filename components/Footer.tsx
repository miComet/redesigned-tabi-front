import Link from "next/link";

const Footer = () => {
  return (
    <div
      className="flex gap-y-10 justify-between max-w-7xl mx-auto
        px-20 py-14 text-gray-600"
    >
      <Link href="/">
        <img
          className="w-28 object-contain cursor-pointer"
          src="tabi_logo.png"
          alt="logo"
        />
      </Link>
      <div className="flex text-xs space-x-4 text-gray-800">
        <h5 className="font-bold">Mobile app</h5>
        <h5 className="font-bold">Community</h5>
        <h5 className="font-bold">Company</h5>
      </div>

      <img className="w-36 object-contain" src="copyright.png" alt="logo" />
    </div>
  );
};

export default Footer;
