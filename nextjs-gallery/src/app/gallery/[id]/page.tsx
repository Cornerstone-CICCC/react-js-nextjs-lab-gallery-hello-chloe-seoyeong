import { ArtworkType } from "@/app/api/gallery/route";
import Image from "next/image";

type Props = {
  params: Promise<{ id: string }>;
};
const page = async ({ params }: Props) => {
  // const { id } = await params;
  // const res = await fetch(`https://jsonplaceholder.typicode.com/photos/${id}`);
  // const data: ArtworkType = await res.json();

  const { id } = await params;
  const res = await fetch(`http://localhost:3000/api/gallery/${id}`);
  const data: ArtworkType = await res.json();

  const updatedData = {
    ...data,
    url: "https://placehold.co/1000x1000",
  };

  return (
    <div className="flex flex-col gap-4 justify-center items-center">
      <p>{updatedData.title}</p>
      <Image
        src={updatedData.url}
        width={1000}
        height={1000}
        alt={updatedData.title}
        loading="lazy"
      />
    </div>
  );
};

export default page;
