import Image from "next/image";

type Props = {
  params: Promise<{ id: string }>;
};

const Page = async ({ params }: Props) => {
  const { id } = await params;
  const res = await fetch(`http://localhost:3000/api/gallery/${id}`);
  const data = await res.json();

  const updatedData = {
    ...data,
    thumbnailUrl: "https://placehold.co/300x300",
  };

  return (
    <div className="fixed w-screen h-screen top-0 left-0 bottom-0 z-50 bg-black/50 flex justify-center items-center">
      <div className="bg-white p-5 w-2/3">
        <Image
          src={updatedData.thumbnailUrl}
          width={600}
          height={600}
          alt={updatedData.title}
        />
        <a href={"/gallery"} className="underline pt-3">
          Close
        </a>
      </div>
    </div>
  );
};

export default Page;
