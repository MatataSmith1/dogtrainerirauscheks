import Image from "next/image";
import { NextSeo } from "next-seo";

function Kontakt() {
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
      site_name: "Kontakt",
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
            KONTAKT
          </a>
          <div className="p-16 text-xl">
            <div>
              <a>Kontaktieren Sie mich unter </a>
              <div className="mt-10">
                <Image
                  src="/phone.png"
                  alt="phone call"
                  width={24}
                  height={24}
                ></Image>
              </div>
              <a
                className="border-b-2  text-green-500"
                href="tel: +43 0664 13 55 620"
              >
                +43 0664 13 55 620
              </a>
              <div className="mt-10">
                <Image
                  src="/email.png"
                  alt="phone call"
                  width={24}
                  height={24}
                ></Image>
              </div>
              <a
                className="border-b-2 text-green-500"
                href="mailto: sabine.irauschek@gmx.at"
              >
                sabine.irauschek@gmx.at
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Kontakt;
