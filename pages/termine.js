import { NextSeo } from "next-seo";
function Termine() {
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
      site_name: "Termine",
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
            TERMINE
          </a>
          <a className="p-16 text-2xl">
            <div className="w-max">
              Termine können nur Telefonisch unter{" "}
              <a
                className="font-bold text-green-500"
                href="tel: +4306641355620"
              >
                +43 0664 13 55 620
              </a>{" "}
              oder per Whatsapp vereinbart werden
            </div>
          </a>
        </div>
      </div>
    </main>
  );
}

export default Termine;
