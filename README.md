# Kodutöö

Testülesande põhi: [rademar-fe-test](https://github.com/rademar-dev/rademar-fe-test)

Põhi on tehtud [Vite]( https://vitejs.dev/) tööriistaga ja lahendamisel võib kasutada endale tuttavaid ning mugavaid meetmeid. Põhiraamistik peab olema React. Olemasolev põhi toetab tavalist CSS-i kui ka Tailwindi. Paigaldamis ja käivitamise käsud:

```bash
npm install
npm run dev
```

Testülesannet võib lahendada GIT-is näiteks forkides või saates koodi emaili peale endale mugava failijagamise lahendusega.

## Ülesandepüstitus

- Kuvada tooted viisakal kujul välja. Kujundust võib teha näiteks [Rademari epoe](https://www.rademar.ee/tooted/naised) tootelistingu järgi.

- Iga toote juures kuvada “Lisa ostukorvi” nupp, millele vajutades tehakse päring ning eduka päringu puhul läheb nupp “disabled” staatusesse. Nupu võib asendada ka ntks kirjaga “toode lisatud ostukorvi”.

- Vaade peab olema skaleeruv vastavalt ekraani suurusele.

## Lahenduse kirjeldus

Esmasel laadimisel laetakse koos toodetega kohe ka ostukorvi sisu. Vastavalt laetud andmetele kuvatakse tootekaardid koos nupuga “Lisa ostukorvi” või “Toode on ostukorvis”.

Kui kasutaja vajutab nupule “Lisa ostukorvi” siis tehakse päring toote ostukorvi lisamiseks. Päringu õnnestumisel kuvatakse teade ja nupp tekstiga “Toode on ostukorvis”, mis on “disabled” staatuses. Ostukorvi sisu uuendatakse.

Kujundus on Rademari e-poest inspireeritud, kasutatud Taliwindi. Skaleeruv vastavalt ekraani suurusele, kasutatav kõigis seadmetes.

Tootekaart ja toodete nimekiri on komponentidena eraldi kaustas.

### Kasulikud lingid

- [DummyJSON]( https://dummyjson.com/)
- [Tailwind Cheatsheet]( https://tailwindcomponents.com/cheatsheet/)
- [Tailwind Components]( https://tailblocks.cc/)
