# Kto zgarnie Bańkę?

Teleturniej-parodia: 12 pytań do miliona, prawdziwe absurdalne fakty i prowadzący bez kultury.

## Struktura
- `src/template.html` – wygląd i logika gry
- `src/data.js` – pytania, docinki prowadzącego, przezwiska
- `src/pytania/*.json` – źródłowe pytania z linkami do źródeł
- `build.py` – składa grę do `www/index.html`
- `www/` – gotowa gra (strona + ikony + tryb offline)
- `.github/workflows/` – automaty: strona na GitHub Pages i plik APK na Androida

## Lokalnie
```
python3 build.py
```
Potem otwórz `www/index.html` w przeglądarce.
