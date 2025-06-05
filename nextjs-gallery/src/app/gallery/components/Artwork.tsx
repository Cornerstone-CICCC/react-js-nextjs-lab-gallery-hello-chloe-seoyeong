import { ArtworkType } from "@/app/api/gallery/route";
import Image from "next/image";

type Props = {
  artworkItem: ArtworkType;
};

export const THUMBNAIL_URL = "https://placehold.co/300x300";

const Artwork = ({ artworkItem }: Props) => {
  return (
    <div>
      <Image
        width={150}
        height={150}
        src={THUMBNAIL_URL}
        alt={artworkItem.title}
        className="bg-gray-200/50"
      />
    </div>
  );
};
export default Artwork;
