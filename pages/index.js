// pages/index.js
import Link from "next/link";
import path from "path";
import fs from "fs/promises";
import Image from "next/image";
const Home = ({ decks }) => {

  return (
    <div>
      <h1 className="text-4xl font-bold mb-4">Slides Slides Slides</h1>

      <p className="text-gray-600 mb-8">
        Collection of my slides from various presentations. 
      </p>

      <div className="grid grid-cols-3">
        {decks.map((deck, index) => (
          <div className="bg-gray-100 basis-1/3 m-4 p-4 rounded-lg shadow-md justify-center" key={deck}>
            <Image src={`/preview/${encodeURIComponent(deck)}.png`} alt={deck} width={400} height={300} loading="lazy" className="rounded-md" />
            <h2 className="text-2xl font-bold my-2 text-center">{deck.replace(/-/g, ' ')}</h2>
            <div className="flex justify-center">
              <Link href={`slides/${encodeURIComponent(deck)}/index.html`}>
                <button className="bg-cyan-400 text-white p-3 mx-4 my-2 mr-2 rounded shadow-md">
                  Present
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const decksDirectory = path.join(process.cwd(), "public/slides");
  const decks = await fs.readdir(decksDirectory);

  return {
    props: {
      decks,
    },
  };
}

export default Home;
