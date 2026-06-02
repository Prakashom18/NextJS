import Image from "next/image";
import Todo from "@/Components/Todo"

export default function Home() {
  return (
    <div className="bg-black text-white p-4">

      THis is a body section.
      <Todo/>

    </div>
  );
}
