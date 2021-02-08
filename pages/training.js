import { NextSeo } from "next-seo";

function Training() {
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
      site_name: "Training",
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
            TRAININGS-METHODEN
          </a>
          <div className="hidden md:flex">
            <a className="p-16 text-2xl">
              Eine erfolgreiche Hundeerziehung hängt entscheidend von der
              Rangordnung und Bindung ab. Unser Training geht auf die
              Urinstinkte des Hundes zurück. Zusammen schulen wir das tägliche
              Zusammenleben und festigen so die Bindung und Stabilität des
              „Rudels Familie“. Der Hund handelt als Rudeltier. Das Überleben
              des Rudels hängt von einem sicheren und starken Rudelführer ab.
              Wenn der Mensch diese Rolle nicht übernimmt, sieht sich der Hund
              gezwungen diese Rolle selbst zu übernehmen. Dies führt zu
              Stresssituationen bei Hund und Mensch wie: Aggression,
              Unsicherheit, Angst, Hochspringen, an der Leine ziehen, Zerstörung
              von Gegenständen, im Freilauf unkontrollierbar sein, unerwünschtes
              Bellen….. Der Sinn des Erziehungskurses besteht also darin, dem
              Besitzer den richtigen Umgang mit seinem Hund und
              Führungsqualitäten beizubringen.
            </a>
          </div>

          <div className="flex md:hidden">
            <a className="p-8 text-sm">
              Eine erfolgreiche Hundeerziehung hängt entscheidend von der
              Rangordnung und Bindung ab. Unser Training geht auf die
              Urinstinkte des Hundes zurück. Zusammen schulen wir das tägliche
              Zusammenleben und festigen so die Bindung und Stabilität des
              „Rudels Familie“. Der Hund handelt als Rudeltier. Das Überleben
              des Rudels hängt von einem sicheren und starken Rudelführer ab.
              Wenn der Mensch diese Rolle nicht übernimmt, sieht sich der Hund
              gezwungen diese Rolle selbst zu übernehmen. Dies führt zu
              Stresssituationen bei Hund und Mensch wie: Aggression,
              Unsicherheit, Angst, Hochspringen, an der Leine ziehen, Zerstörung
              von Gegenständen, im Freilauf unkontrollierbar sein, unerwünschtes
              Bellen….. Der Sinn des Erziehungskurses besteht also darin, dem
              Besitzer den richtigen Umgang mit seinem Hund und
              Führungsqualitäten beizubringen.
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Training;
