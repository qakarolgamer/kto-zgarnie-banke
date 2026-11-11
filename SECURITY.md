# Bezpieczeństwo

## Zasady w projekcie
- **Brak sekretów w kodzie.** Gra jest statyczna: nie ma serwera, kont, kluczy API ani haseł. Klucze podpisu aplikacji (Android/iOS) trzymamy wyłącznie w **Settings → Secrets and variables → Actions**, nigdy w repozytorium (`.gitignore` blokuje typowe pliki kluczy).
- **Gra nie łączy się z niczym na zewnątrz.** Czcionki i ikony są w projekcie, a Content-Security-Policy w `index.html` blokuje skrypty, style, czcionki i połączenia spoza własnej domeny.
- **Dane gracza zostają na telefonie** (imię, historia pytań w `localStorage`). Imię jest oczyszczane z kodu HTML przed wyświetleniem.
- **Automaty GitHub Actions:** minimalne uprawnienia (`contents: read`), prawo publikacji tylko w kroku wdrożenia strony, akcje przypięte do konkretnych commitów (SHA), `persist-credentials: false`, zależności instalowane dokładnie z `package-lock.json` bez skryptów instalacyjnych (`npm ci --ignore-scripts`).
- **Aktualizacje:** Dependabot co tydzień proponuje aktualizacje akcji i bibliotek jako pull request.

## Ustawienia repozytorium (do kliknięcia przez właściciela)
1. Settings → General → Danger Zone → **Change visibility → Private**.
2. Settings → Actions → General → **Workflow permissions: Read repository contents** i odznaczone „Allow GitHub Actions to create and approve pull requests”.
3. Settings → Actions → General → **Allow actions: tylko od GitHuba i wybrane** (actions/*).
4. Settings → Code security → włącz **Dependabot alerts** i **Dependabot security updates**.
5. Konto GitHub → Settings → Password and authentication → **włącz 2FA** (najlepiej klucz bezpieczeństwa lub aplikacja).
6. Settings → Collaborators → dostęp tylko dla zaufanych osób.

## Zgłaszanie problemów
Problemy bezpieczeństwa zgłaszaj prywatnie właścicielowi repozytorium, nie w publicznych issue.
