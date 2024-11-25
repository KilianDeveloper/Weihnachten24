"use client";

import { useRef, useState } from "react";

export default function Home() {
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const [stage, setStage] = useState(0);
  const [error, setError] = useState<string | null>(null);

  const login = () => {
    if (usernameRef.current?.value && passwordRef.current?.value) {
      if (
        usernameRef.current.value == "Klausi" &&
        passwordRef.current.value == "#Februar25"
      ) {
        setStage(1);
        setError(null);
      } else {
        setError("Faaalsch!");
      }
    }
  };

  const checkMail = () => {
    setStage(2);
  };
  return (
    <div className="w-full h-screen bg-red-700 p-6">
      <main className="flex-col">
        {stage == 2 && (
          <>
            <>
              <p>Sender: {"kilian.markgraf@gmx.de"}</p>
              <p>Betreff: Luisa Geschenk Gewinnkombination</p>

              <p className="mt-4">
                Lieber Weihnachtsmann, wie geht es dir? Ich hoffe wir können
                demnächst mal wieder zusammen ein bisschen Schlitten reiten
                zusammen ne Milch mit Keksen oder so essen.
              </p>
              <p className="mt-2">
                Kommen wir zum wichtigen: Luisa ist fleißig am rätseln und wird zu Weihnachten
                voraussichtlich alle Rätsel ihres Kalenders gelöst haben. Bitte
                gehe mit ihr die Lösungen zusammen durch, damit sie das
                Lösungswort bestimmen kann. Ich habe es dir ja erklärt. Du weißt
                schon, das mit dem Kartendeck in meinem Kilian-Fach... Danke schonmal im Vorraus!!!
              </p>
              <p className="mt-2">Liebe Grüße, Kilian</p>
            </>
          </>
        )}
        {stage == 1 && (
          <>
            <>
              <h1 className="text-2xl">
                Hallo Weihnachtsmann, hier sind deine letzten Mails:
              </h1>

              <div>
                <p className="mt-4 underline">
                  Rudolf das Rentier: {"Krankheit meines Kindes"}
                </p>
                <p className="mt-4 underline">
                  Elf 3:{" "}
                  {"Bestellung fertig Margarete Dix, bereit zur Austragung"}
                </p>
                <p className="mt-4 underline">
                  Rudolf das Rentier: {"Krankheit meines Kindes"}
                </p>
                <p className="mt-4 underline">
                  Elf 10:{" "}
                  {"Bestellung fertig Felina Markgraf, bereit zur Austragung"}
                </p>
                <p className="mt-4 underline">
                  Elf 2:{" "}
                  {"Bestellung fertig Julian Gippner, bereit zur Austragung"}
                </p>
                <p className="mt-4 underline" onClick={checkMail}>
                  Kilian Markgraf: {"Luisa Geschenk Gewinnkombination"}
                </p>
                <p className="mt-4 underline">
                  Elf 6:{" "}
                  {"Bestellung fertig Paula Wegner, bereit zur Austragung"}
                </p>
              </div>
            </>
          </>
        )}
        {stage == 0 && (
          <>
            <h1 className="text-4xl">Weihnachtsmann Admin Panel</h1>
            <p className="text-2xl mt-6">
              Hallo Weihnachtsmann, bist du ess wirklich?
            </p>
            <div>
              <p>Benutzername:</p>
              <input
                ref={usernameRef}
                className="bg-white rounded-md text-black min-w-60 w-full h-10 text-2xl"
                type="text"
              />
            </div>
            <div>
              <p>Passwort:</p>
              <input
                ref={passwordRef}
                className="bg-white rounded-md text-black min-w-60 w-full h-10 text-2xl"
                type="text"
              />
            </div>
            <button
              className="bg-white rounded-md text-red-700 min-w-60 mt-8 h-10 w-full text-2xl"
              onClick={login}
            >
              Login
            </button>
          </>
        )}
        {error && <p className="text-2xl">{error}</p>}
      </main>
    </div>
  );
}
