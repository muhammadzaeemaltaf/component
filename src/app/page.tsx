import Image from "next/image";
import { Card, Card2, Card3 } from "../../components/card";

export default function Home() {
  return (
    <div>
      <h1 className="font-black text-4xl">Hello World</h1>
      <div className="flex gap-1 flex-col md:flex-row">
      <Card />
      <Card2 />
      <Card3 />
      </div>
    </div>
  );
}
