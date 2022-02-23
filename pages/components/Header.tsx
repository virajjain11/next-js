import Image from "next/image";

const navItems = ["home", "About", "pricing"];
export default function Header() {
  return (
    <header>
      <div className="md:w-3/4 mx-auto pt-7">
        <nav className="flex items-center justify-between ">
          <div>
            {/* <Image
          src="/img/logo-bookmark.svg"
          alt="img"
          layout="fill"
          className="w-2/4 bg-slate-900 h-2/3"
        /> */}
            <img src={"./img/logo-bookmark.svg"} alt="img" />
          </div>

          <ul className="flex  justify-around gap-12 items-center uppercase ">
            {navItems.map((item, index) => (
              <li className="cursor-pointer" key={index}>
                {item}
              </li>
            ))}
            {/* <li>Home</li>
            <li>Home</li>
            <li>Home</li> */}
            <button className="bg-red-500 text-lg hover:bg-red-400 hover:scale-110 hover:text-gray-200 text-white rounded-md px-5 py-1">
              Login
            </button>
          </ul>
        </nav>
      </div>
    </header>
  );
}
