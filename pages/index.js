// pages/index.js
import Link from "next/link";
import path from "path";
import fs from "fs/promises";

const Home = ({ decks, previews }) => {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-4">Slides Slides Slides</h1>

      <p className="text-gray-600 mb-8">
        Collection of my slides from various presentations. 
      </p>

      <div className="flex flex-row">
        {decks.map((deck, index) => (
          <div className="bg-gray-100 basis-1/3 m-4 p-4 rounded-lg shadow-md justify-center" key={deck}>
            <iframe
              srcDoc={previews[index]}
              width="400px"
              height="300px"
              title={`Preview of ${deck}`}
              sandbox="allow-scripts allow-same-origin"
            />
            <h2 className="text-2xl font-bold my-2 text-center">{deck}</h2>
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

  // Generate previews during the build process
  const previews = await Promise.all(
    decks.map(async (deck) => {
      try {
        const indexPath = path.join(decksDirectory, deck, "index.html");

        let rawContent = await fs.readFile(indexPath, "utf-8");
        let newContent = rawContent.replace(/lib\//g, "slides/" + String(deck) + "/lib/");
        let content = newContent.replace(/assets\//g, "slides/" + String(deck) + "/assets/");
        return content;
      } catch (error) {
        console.error(`Error reading ${deck}/index.html:`, error);
        return null;
      }
    })
  );

  return {
    props: {
      decks,
      previews,
    },
  };
}

export default Home;
