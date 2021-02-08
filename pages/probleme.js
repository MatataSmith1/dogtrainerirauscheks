import { NextSeo } from "next-seo";

function Probleme() {
  <NextSeo
    title="Sabine Irauschek"
    description="Professionelles Hundetraining ☎ +43 664 13 55 620"
    canonical="https://www.localhost/"
    openGraph={{
      url: "https://www.url.ie/a",
      title: "Sabine Irauschek",
      description: "Professionelles Hundetraining ☎ +43 664 13 55 620",
      images: [
        {
          url: "https://www.example.ie/og-image-01.jpg",
          width: 800,
          height: 600,
          alt: "Og Image Alt",
        },
      ],
      site_name: "Probleme",
    }}
  />;
  return (
    <main>
      <div className="flex container justify-center mx-auto text-center">
        <div class="grid grid-cols-1 divide-y divide-gray-400">
          <a
            className="p-16 text-4xl font-bold text-green-500"
            style={{ fontFamily: "Montserrat" }}
          >
            HÄUFIGE PROBLEME
          </a>
          <a className="p-4 text-xl">
            Wie bringe ich meinem Hund bei nicht mehr an der Leine zu ziehen?
          </a>
          <a className="p-4 text-xl">
            Was kann ich tun, damit mein Hund nicht abhaut wenn er OHNE Leine
            läuft?
          </a>
          <a className="p-4 text-xl">
            Wie gewöhne ich meinem Hund das Jagen ab?
          </a>
          <a className="p-4 text-xl">
            Wie bringe ich meinem Hund Sitz, Platz, Fuß etc. bei?
          </a>
          <a className="p-4 text-xl">
            Warum ist das Verhalten meines Hundes aggresiv?
          </a>
          <a className="p-16"></a>
        </div>
      </div>
    </main>
  );
}
export default Probleme;
