import Image from "next/image";
import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import CardComponent from "@/components/CardComponent";
import About from "@/about/Page"
export default function Home() {
  return (

    <div className="p-10">

      <Navbar/>
      <About/>
      <h1 className="text-4xl font-bold">
        My First Next.js App. 

      </h1>

      <p className="mt-4 text-lg">
        I am learning Next.js
      </p>

      <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded">
        Click
      </button>
       <CardComponent/>
      <Contact/>
     

    </div>
  );
}
