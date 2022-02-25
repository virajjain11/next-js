import PractHead from "./PractHead";
export default function PractHeader() {
  return (
    <header>
      <div className="text-center p-11 text-blue-400 ">
        <PractHead text={"Amazing shoes at an amazing price"} />
        <p className="py-6 text-gray-700">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa quam
          perspiciatis facilis beatae laudantium quidem enim sit{" "}
        </p>
        <button className="p-5 m-2 text-lg shadow-md bg-red-400 text-gray-700 hover:scale-105 hover:bg-red-300 rounded-lg">
          See what we have
        </button>
      </div>
    </header>
  );
}
