import { ArtworkType } from "@/app/api/gallery/route";
import Image from "next/image";

type Props = {
  artworkItem: ArtworkType;
};

const Artwork = ({ artworkItem }: Props) => {
  return (
    <div>
      <Image
        width={150}
        height={150}
        src={artworkItem.thumbnailUrl}
        alt={artworkItem.title}
        className="bg-gray-200/50"
      />
    </div>
  );
};
export default Artwork;
