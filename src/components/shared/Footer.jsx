import logo from "@/assets/footer.png";
import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <footer className=" footer sm:footer-horizontal bg-neutral text-neutral-content  px-4 py-8">
      <div className="container mx-auto flex flex-col md:flex md:justify-between md:not-first-of-type:not-even:items-center">
        <div className="flex gap-2 items-center font-bold text-xl ">
          <Link href="/" className="flex gap-2">
            <Image src={logo} alt="Footer Logo" className="w-8 h-8 invert" />{" "}
            FITLOG
          </Link>
        </div>
        <aside className="grid-flow-col items-center">
          <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
        </aside>
      </div>
    </footer>
  );
}

export default Footer;
