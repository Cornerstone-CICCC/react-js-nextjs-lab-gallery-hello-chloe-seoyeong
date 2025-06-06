export const revalidate = 120;

export type ArtworkType = {
  id: number;
  title: string;
  thumbnailUrl: string;
  url: string;
};

export async function GET() {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/photos?_limit=50`
  );
  const data: ArtworkType[] = await res.json();

  return Response.json(data);
}
