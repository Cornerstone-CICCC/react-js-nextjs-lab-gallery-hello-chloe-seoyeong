import Link from "next/link";
import { ArtworkType } from "../api/gallery/route";
import Artwork from "./components/Artwork";

const page = async () => {
  const res = await fetch("http://localhost:3000/api/gallery");
  const data = await res.json();

  const artworks: ArtworkType[] = data;

  return (
    <div>
      <h1 className="text-center p-5">Gallery</h1>
      <div className="flex flex-wrap gap-6 justify-center">
        {artworks.map((item) => (
          <Link key={item.id} href={`/gallery/${item.id+""}`}>
            <Artwork artworkItem={item} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default page;
