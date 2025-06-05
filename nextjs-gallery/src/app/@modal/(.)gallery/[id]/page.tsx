import { THUMBNAIL_URL } from "@/app/gallery/components/Artwork";
import CloseButton from "@/app/gallery/components/CloseButton";
import Image from "next/image";

type Props = {
  params: Promise<{ id: string }>;
};

const Page = async ({ params }: Props) => {
  const { id } = await params;
  const res = await fetch(`http://localhost:3000/api/gallery/${id}`);
  const data = await res.json();

  return (
    <div className="fixed w-screen h-screen top-0 left-0 bg-black/50 flex justify-center items-center">
      <div className="bg-white p-5 w-2/3">
        <Image src={THUMBNAIL_URL} width={600} height={600} alt={data.title} />
        <CloseButton />
      </div>
    </div>
  );
};

export default Page;
