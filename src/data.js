const PRIZES=[500,1000,2000,5000,10000,20000,40000,75000,125000,250000,500000,1000000];
const SAFE=[1,6]; // indeksy kwot gwarantowanych
const fmt=n=>n.toLocaleString('pl-PL').replace(/ /g,' ')+' zł';

// c = indeks poprawnej odpowiedzi; f = ciekawostka
const POOL=[
[
{
"q": "Ile serc ma ośmiornica?",
"a": [
"Jedno",
"Dwa",
"Trzy",
"Osiem, po jednym na mackę"
],
"c": 2,
"f": "Ośmiornica ma <b>trzy serca</b>: dwa pompują krew przez skrzela, jedno do reszty ciała. I tak nikt jej nie kocha."
},
{
"q": "Jaki kształt ma kupa wombata?",
"a": [
"Kulki",
"Sześcianu",
"Spirali",
"Gwiazdki"
],
"c": 1,
"f": "Wombaty robią <b>kostki</b>. Kształt powstaje w jelitach, a kostki nie turlają się z kamieni, którymi wombat oznacza teren."
},
{
"q": "Co robią wydry morskie, żeby nie odpłynąć od siebie podczas snu?",
"a": [
"Trzymają się za łapki",
"Chrapią w rytm fal",
"Przywiązują się do łódek",
"Śpią na zmianę"
],
"c": 0,
"f": "Wydry <b>trzymają się za łapki</b> albo owijają się wodorostami. Ty nawet ładowarki nie pamiętasz zabrać."
},
{
"q": "Jakie jest narodowe zwierzę Szkocji?",
"a": [
"Lew",
"Owca",
"Potwór z Loch Ness",
"Jednorożec"
],
"c": 3,
"f": "Tak, <b>jednorożec</b>. Oficjalnie. Na herbie trzyma go łańcuch, bo podobno jest zbyt dziki."
},
{
"q": "Czego NIE potrafi dorosły słoń?",
"a": [
"Pływać",
"Skakać",
"Spać na stojąco",
"Rozpoznać się w lustrze"
],
"c": 1,
"f": "Słonie <b>nie skaczą</b>: zawsze trzymają przynajmniej jedną nogę na ziemi. Pływają za to świetnie."
},
{
"q": "Ile kręgów szyjnych ma żyrafa?",
"a": [
"7, tyle co człowiek",
"14",
"25",
"Nikt nie miał tyle odwagi, żeby policzyć"
],
"c": 0,
"f": "Żyrafa ma <b>7 kręgów szyjnych</b>, tak jak ty. Tylko każdy ma ok. 25 cm."
},
{
"q": "Dlaczego flamingi są różowe?",
"a": [
"Ze wstydu",
"Od tego, co jedzą",
"Rodzą się różowe",
"Bo tak im ładnie"
],
"c": 1,
"f": "Pigmenty z <b>alg i skorupiaków</b> barwią pióra. Pisklęta rodzą się szaro-białe."
},
{
"q": "Will Smith odrzucił rolę Neo w „Matriksie”, żeby zagrać w…",
"a": [
"„Shreku”",
"„Teletubisiach”",
"„Bardzo Dzikim Zachodzie”",
"„Titanicu”"
],
"c": 2,
"f": "Smith wybrał <b>„Bardzo Dziki Zachód”</b> – i sam przyznaje, że Keanu zrobił z Neo lepszy użytek."
},
{
"q": "Kto naprawdę narysował słynny szkic Rose w „Titanicu”?",
"a": [
"Kucharz z planu",
"James Cameron",
"Kate Winslet",
"Leonardo DiCaprio"
],
"c": 1,
"f": "Rysował sam reżyser – <b>James Cameron</b>. Leo tylko bardzo przekonująco trzymał ołówek."
},
{
"q": "Co musieli zrobić właściciele prawdziwego domu Waltera White'a z „Breaking Bad”?",
"a": [
"Przemalować dom na różowo",
"Otworzyć w garażu laboratorium",
"Zmienić nazwisko na White",
"Postawić płot, bo fani rzucali pizzę na dach"
],
"c": 3,
"f": "Fani masowo odtwarzali scenę z <b>pizzą na dachu</b>, więc właściciele odgrodzili się wysokim płotem."
},
{
"q": "Jaki nieplanowany „aktor” pojawił się na uczcie w Winterfell w 8. sezonie „Gry o tron”?",
"a": [
"Kubek na kawę na wynos",
"Smartfon",
"Hulajnoga elektryczna",
"Pies operatora"
],
"c": 0,
"f": "Przed Daenerys stał <b>kubek na kawę na wynos</b>. HBO po aferze wymazało go cyfrowo – zima przyszła, latte też."
},
{
"q": "Dlaczego rycerze w „Monty Python i Święty Graal” zamiast koni mają giermków stukających kokosami?",
"a": [
"Kokosy dał sponsor",
"Nie było budżetu na konie",
"Konie miały uczulenie na zbroje",
"Koń reżysera był na urlopie"
],
"c": 1,
"f": "Ekipy <b>nie było stać na konie</b>, więc kokosy przejęły ich robotę. Najtańszy efekt specjalny świata."
},
{
"q": "Jaką pamiątkę z planu „Kevina samego w domu” ma do dziś Macaulay Culkin?",
"a": [
"Klucz do domu McCallisterów",
"Tarantulę w słoiku",
"Złote żelazko",
"Bliznę po ugryzieniu Joe Pesciego"
],
"c": 3,
"f": "Na próbie sceny, w której Harry grozi odgryzieniem palców, Pesci <b>ugryzł go naprawdę</b>. Została blizna."
},
{
"q": "Ile razy świstak ugryzł Billa Murraya na planie „Dnia świstaka”?",
"a": [
"Ani razu",
"Dwa razy",
"Codziennie o 6:00",
"Czterdzieści razy"
],
"c": 1,
"f": "<b>Dwa razy</b> – Murray sam to potwierdził. Świstak najwyraźniej też miał dość powtórek."
},
{
"q": "Co przytrafiło się jednemu ze szturmowców w „Nowej nadziei”?",
"a": [
"Trafił w cel",
"Zdjął hełm i pomachał",
"Pośliznął się na bananie",
"Walnął głową w futrynę drzwi"
],
"c": 3,
"f": "Szturmowiec <b>uderzył hełmem w drzwi</b> – a Lucas w późniejszym wydaniu dodał do tego nawet dźwięk „bonk”."
},
{
"q": "Słynna mina Kevina z dłońmi na policzkach (woda po goleniu) powstała…",
"a": [
"Bo Culkin naprawdę się poparzył",
"Po dwóch latach prób",
"Przypadkiem – miał zabrać ręce, nie zabrał",
"Na wzór „Krzyku” Muncha, ćwiczona tygodniami"
],
"c": 2,
"f": "Reżyser chciał, żeby Culkin zabrał ręce, ale on <b>zostawił je na twarzy</b> – i tak narodził się plakat filmu."
},
{
"q": "Komu w polskim dubbingu „Shreka” głosu użyczył Jerzy Stuhr, czyli Maks z „Seksmisji”?",
"a": [
"Kotu w butach",
"Shrekowi",
"Lordowi Farquaadowi",
"Osłu"
],
"c": 3,
"f": "Jerzy Stuhr był <b>Osłem</b> – i według wielu widzów ten dubbing przebił oryginał."
},
{
"q": "Pod jakim adresem we Wrocławiu mieszkają Kiepscy?",
"a": [
"Ćwiartki 3/4",
"Leniwa 13",
"Flaszkowa 0,5",
"Piwna 7"
],
"c": 0,
"f": "Kiepscy mieszkają na <b>Ćwiartki 3/4</b> – a „ćwiartka” to w Polsce nie tylko ułamek, ale i buteleczka wódki."
},
{
"q": "Skąd się wziął tytuł filmu „Kingsajz”?",
"a": [
"Od ulicy w Łodzi",
"Z angielskiego „King Size”",
"Od nazwiska scenografa",
"Od imienia króla krasnali"
],
"c": 1,
"f": "To po prostu <b>„King Size”</b> zapisane po polsku. Duży tytuł dla małych ludzi."
},
{
"q": "Komu Cezary Pazura podkładał głos w polskiej wersji „Epoki lodowcowej”?",
"a": [
"Mamutowi Manniemu",
"Wiewiórce Scratowi",
"Tygrysowi Diego",
"Leniwcowi Sidowi"
],
"c": 3,
"f": "Pazura to <b>leniwiec Sid</b> – Kiler w wersji prehistorycznej."
},
{
"q": "Co według twórcy Toru Iwataniego zainspirowało kształt Pac-Mana?",
"a": [
"Moneta 100 jenów",
"Pizza bez jednego kawałka",
"Otwarta muszla małży",
"Japoński znak „usta”"
],
"c": 1,
"f": "Iwatani wziął kawałek <b>pizzy</b>, spojrzał na resztę i zobaczył bohatera. Najsłynniejszy żarłok w grach powstał z obiadu."
},
{
"q": "Która gra jest najlepiej sprzedającą się grą wideo wszech czasów (wg Guinnessa)?",
"a": [
"GTA V",
"Minecraft",
"Wii Sports",
"Super Mario Bros."
],
"c": 1,
"f": "<b>Minecraft</b> przekroczył 350 mln sprzedanych kopii. Kanciaste kopanie dziur okazało się najlepszym biznesem w historii gier."
},
{
"q": "W jakim języku rozmawiają bohaterowie gry The Sims?",
"a": [
"W esperanto",
"W simlish",
"Po klingońsku",
"W odwróconym angielskim"
],
"c": 1,
"f": "<b>Simlish</b> to w dużej mierze improwizowany bełkot – celowo, żeby nie trzeba było tłumaczyć gry i żeby się nie nudził. Sul sul!"
},
{
"q": "Kto zdobył najwięcej Oscarów w historii?",
"a": [
"Meryl Streep",
"Steven Spielberg",
"Walt Disney",
"Katharine Hepburn"
],
"c": 2,
"f": "<b>Walt Disney</b> uzbierał 26 statuetek, wliczając honorowe. Myszka Miki ma więc w domu całą półkę złotych ludzików."
},
{
"q": "Kto ma najwięcej nominacji aktorskich do Oscara w historii?",
"a": [
"Jack Nicholson",
"Meryl Streep",
"Leonardo DiCaprio",
"Tom Hanks"
],
"c": 1,
"f": "<b>Meryl Streep</b> ma ponad 20 nominacji. Na galę mogłaby chyba przychodzić w kapciach, bo to dla niej jak drugi dom."
},
{
"q": "Co się stało przy ogłaszaniu Najlepszego Filmu na Oscarach w 2017 roku?",
"a": [
"Zgasło światło w całym Hollywood",
"Ogłoszono „La La Land” zamiast „Moonlight”",
"Statuetka spadła ze sceny",
"Prowadzący zapomnieli otworzyć kopertę"
],
"c": 1,
"f": "Prezenterzy dostali złą kopertę i ekipa <b>„La La Land”</b> zdążyła już dziękować, zanim wyszło, że wygrał „Moonlight”."
},
{
"q": "Ile Oscarów zdobył „Władca Pierścieni: Powrót króla” na 11 nominacji?",
"a": [
"5",
"8",
"10",
"11"
],
"c": 3,
"f": "Wszystkie <b>11 na 11</b> – czysta zmiata. Jeden film, by rządzić wszystkimi kategoriami."
},
{
"q": "Mayim Bialik zagrała neurobiolożkę Amy w „Teorii wielkiego podrywu”. A w prawdziwym życiu…",
"a": [
"Nie skończyła liceum",
"Ma doktorat z neuronauki",
"Jest pilotką myśliwców",
"Hoduje lamy w Peru"
],
"c": 1,
"f": "Bialik naprawdę ma <b>doktorat z neuronauki</b> z UCLA. Rola wymagała od niej niewiele udawania."
},
{
"q": "Czym zarabiał Harrison Ford, zanim został Hanem Solo?",
"a": [
"Był stolarzem",
"Był pilotem linii lotniczych",
"Był ratownikiem na plaży",
"Sprzedawał odkurzacze"
],
"c": 0,
"f": "Ford był <b>stolarzem</b>, robił meble m.in. w Hollywood. Sokół Millennium to przy tym tylko większa szafa."
},
{
"q": "Jaką dorywczą pracę miał Brad Pitt przed sławą?",
"a": [
"Przebierał się za kurczaka przed restauracją",
"Pozował jako posąg w parku",
"Tresował papugi",
"Był sobowtórem Toma Cruise'a"
],
"c": 0,
"f": "Pitt zachęcał klientów sieci El Pollo Loco w <b>stroju kurczaka</b>. Każda kariera od czegoś się zaczyna."
},
{
"q": "Co „zepsuł” teledysk „Gangnam Style” w 2014 roku?",
"a": [
"Serwery Spotify",
"Licznik wyświetleń YouTube'a",
"Rekord Guinnessa w tańcu",
"Zegar atomowy w Seulu"
],
"c": 1,
"f": "Liczba wyświetleń przekroczyła ok. 2,1 mld – maksimum <b>licznika YouTube'a</b>. Trzeba było go rozbudować dla jednego tańca na niby-koniu."
},
{
"q": "Kto jest rekordzistą pod względem liczby zdobytych nagród Grammy?",
"a": [
"Michael Jackson",
"Taylor Swift",
"Beyoncé",
"Elvis Presley"
],
"c": 2,
"f": "<b>Beyoncé</b> ma ponad 30 statuetek Grammy, najwięcej w historii. Potrzebuje chyba osobnego pokoju na półki."
},
{
"q": "Jaką słynną postać od lat dubbinguje Mark Hamill, czyli Luke Skywalker?",
"a": [
"Jokera",
"Shreka",
"Kaczora Donalda",
"Optimusa Prime'a"
],
"c": 0,
"f": "Hamill to kultowy głos <b>Jokera</b> w animowanym Batmanie i grach. Jedi przeszedł na stronę śmiechu."
},
{
"q": "Co się stało, gdy w 2007 roku 170 szwajcarskich żołnierzy zgubiło się w nocy na ćwiczeniach?",
"a": [
"Zostali pasterzami kóz",
"Weszli niechcący do Liechtensteinu",
"Założyli własny kanton",
"Wylądowali w Paryżu"
],
"c": 1,
"f": "Oddział zabłądził ok. 1,5 km w głąb <b>Liechtensteinu</b>. Szwajcaria przeprosiła, a Liechtenstein odparł: „Nie ma problemu, takie rzeczy się zdarzają”."
},
{
"q": "Ile naprawdę mierzył Napoleon Bonaparte?",
"a": [
"Ok. 150 cm",
"Ok. 2 m, ale się garbił",
"Ok. 140 cm, stąd buty na koturnie",
"Ok. 168–170 cm – przeciętnie"
],
"c": 3,
"f": "Napoleon miał ok. <b>170 cm</b>, czyli normalnie jak na Francuza tamtych czasów. Mit „kurdupla” zrobiły mu brytyjskie karykatury i mylenie francuskich cali z angielskimi."
},
{
"q": "Skąd wziął się obraz wikinga w hełmie z rogami?",
"a": [
"Z reklamy piwa z 1950 r.",
"Z kostiumów do opery Wagnera (1876)",
"Z wykopalisk wszystkich grobów wikingów",
"Z relacji Kolumba"
],
"c": 1,
"f": "Wikingowie rogów na hełmach nie nosili. Rogi doprawił im kostiumograf Carl Emil Doepler do <b>„Pierścienia Nibelunga” Wagnera</b>."
},
{
"q": "Po co szop Rebecca trafił w 1926 roku do Białego Domu prezydenta Coolidge'a?",
"a": [
"Do pilnowania Gabinetu Owalnego",
"Miał być obiadem na Święto Dziękczynienia",
"Jako maskotka drużyny baseballowej",
"Jako agent wywiadu"
],
"c": 1,
"f": "Rebecca miała zostać <b>daniem na Święto Dziękczynienia</b>, ale Coolidge nie miał ochoty na szopa i zrobił z niej domowego pupila."
},
{
"q": "Co „sprzedał” na złom oszust Victor Lustig w Paryżu w 1925 roku?",
"a": [
"Luwr z zawartością",
"Łuk Triumfalny",
"Most Aleksandra III",
"Wieżę Eiffla"
],
"c": 3,
"f": "Udając urzędnika ministerstwa, Lustig sprzedał handlarzom złomu <b>wieżę Eiffla</b>. Spróbował nawet drugi raz, ale wtedy już musiał uciekać do USA."
},
{
"q": "Co skradziono w Quebecu w latach 2011–2012 w „Wielkim skoku” wartym 18,7 mln dolarów?",
"a": [
"Syrop klonowy",
"Złoto z banku",
"Kije hokejowe",
"Czapki uszanki"
],
"c": 0,
"f": "Złodzieje wynieśli prawie 3000 ton <b>syropu klonowego</b> z magazynu federacji producentów. Najsłodsza kradzież w historii Kanady."
},
{
"q": "Jak długo czkał rekordzista Charles Osborne?",
"a": [
"Ponad 68 lat",
"Tydzień",
"3 lata",
"Całe 12 godzin"
],
"c": 0,
"f": "Osborne czkał od 1922 do 1990 – ponad <b>68 lat</b>. Zaczęło się, gdy próbował podnieść ciężkiego wieprza."
},
{
"q": "Co CIA próbowało zrobić w latach 60. w ramach projektu „Acoustic Kitty”?",
"a": [
"Zrobić z kotów żywe podsłuchy",
"Wysłać kota na Księżyc",
"Wyhodować kota-ochroniarza",
"Nauczyć koty szyfru Morse'a"
],
"c": 0,
"f": "Kotom wszczepiano mikrofony i nadajniki, żeby <b>podsłuchiwały</b> Sowietów. Koty jednak robiły, co chciały, i projekt zamknięto w 1967 roku."
},
{
"q": "Przez jaką epidemię w 1962 roku w Tanganice (dziś Tanzania) zamknięto 14 szkół?",
"a": [
"Epidemię ziewania",
"Epidemię kichania",
"Epidemię śmiechu",
"Epidemię czkawki"
],
"c": 2,
"f": "Zaczęło się w szkole dla dziewcząt w Kashasha – napady <b>śmiechu</b> rozlały się tak szeroko, że trzeba było zamykać kolejne szkoły."
},
{
"q": "Ile USA zapłaciły Rosji za Alaskę w 1867 roku?",
"a": [
"1 dolara symbolicznie",
"7,2 mln dolarów",
"Beczkę whisky i dwa konie",
"72 mld dolarów"
],
"c": 1,
"f": "Za Alaskę zapłacono <b>7,2 mln dolarów</b> – ok. 2 centy za akr. Krytycy wyśmiewali zakup jako „głupotę Sewarda” albo „Morsję”."
},
{
"q": "Co dokładnie jest zakazane w Singapurze od 1992 roku w sprawie gumy do żucia?",
"a": [
"Sprzedaż i import (poza leczniczą)",
"Samo żucie, nawet w domu",
"Robienie balonów tylko w metrze",
"Guma owocowa, miętowa jest OK"
],
"c": 0,
"f": "W Singapurze nie <b>sprzedaje się</b> gumy (wyjątek: lecznicza z apteki). Samo żucie nie jest przestępstwem – ale plucie gumą już tak."
},
{
"q": "Co jest prawdą o słowach „Niech jedzą ciastka” przypisywanych Marii Antoninie?",
"a": [
"Krzyknęła je na gilotynie",
"Powiedziała je na koronacji",
"Wyhaftowała je na fladze",
"Brak dowodu, że je wypowiedziała"
],
"c": 3,
"f": "Anegdota pojawia się u Rousseau, gdy Maria Antonina miała ok. 9 lat i nie mieszkała we Francji. <b>Nie ma dowodu</b>, że to ona – a w oryginale chodziło o briosze."
},
{
"q": "Komu nie wolno wejść do sal gier słynnego kasyna w Monte Carlo?",
"a": [
"Osobom w skarpetkach",
"Ludziom o imieniu Jacques",
"Turystom bez krawata w paski",
"Obywatelom Monako"
],
"c": 3,
"f": "Kasyno żyje z przyjezdnych, a <b>obywatele Monako</b> mają zakaz wstępu do sal gier."
},
{
"q": "Co dzieje się z astronautą po kilku miesiącach na orbicie?",
"a": [
"Rośnie o kilka centymetrów",
"Zmienia mu się kolor oczu",
"Traci odciski palców",
"Przestaje potrzebować snu"
],
"c": 0,
"f": "Bez grawitacji kręgosłup się rozciąga i astronauta robi się <b>wyższy</b> nawet o ok. 3%. Na Ziemi niestety szybko wraca do fabrycznych ustawień."
},
{
"q": "Która część języka czuje smak słodki?",
"a": [
"Tylko czubek",
"Tylko tył",
"Każda – mapa smaków to mit",
"Tylko lewy bok"
],
"c": 2,
"f": "Słynna szkolna <b>mapa smaków</b> to mit. Kubki smakowe na całym języku wyczuwają wszystkie podstawowe smaki."
},
{
"q": "Czy Wielki Mur Chiński widać gołym okiem z orbity?",
"a": [
"Tak, świeci nocą na czerwono",
"Nie – to mit, jest za wąski",
"Tylko w chiński Nowy Rok",
"Tak, to jedyna widoczna budowla"
],
"c": 1,
"f": "Mur jest długi, ale <b>wąski</b> i w kolorze otoczenia, więc gołym okiem z orbity go nie widać. Potwierdzili to sami astronauci, także chińscy."
},
{
"q": "W co zagrał na Księżycu astronauta Alan Shepard w 1971 r.?",
"a": [
"W ping-ponga",
"W golfa",
"W curling",
"W szachy błyskawiczne"
],
"c": 1,
"f": "Shepard przemycił na misję Apollo 14 główkę kija i dwie piłki do <b>golfa</b>. Najdroższa runda golfa w historii."
},
{
"q": "Co dzieje się z wieżą Eiffla w upalne lato?",
"a": [
"Rośnie nawet o ok. 15 cm",
"Kurczy się o metr",
"Obraca się o 90 stopni",
"Zmienia kolor na zielony"
],
"c": 0,
"f": "Żelazo w upale się rozszerza, więc wieża <b>rośnie</b> nawet o ok. 15 cm. Paryski wakacyjny wzrost."
},
{
"q": "Dlaczego nie da się połaskotać samego siebie?",
"a": [
"Palce mają za mało prądu",
"Skóra rozpoznaje własne DNA",
"Mózg przewiduje własny ruch i go wycisza",
"Bo łaskotki są zaraźliwe"
],
"c": 2,
"f": "<b>Mózg</b> (głównie móżdżek) przewiduje skutki twojego ruchu i tłumi doznanie. Na siebie po prostu nie da się zrobić zasadzki."
},
{
"q": "Kim z zawodu był współtwórca maszyny do waty cukrowej (1897)?",
"a": [
"Pszczelarzem",
"Fryzjerem",
"Dentystą",
"Kowalem"
],
"c": 2,
"f": "Maszynę współwymyślił <b>dentysta</b> William Morrison. Genialny biznesplan: najpierw sprzedajesz cukier, potem plombujesz."
},
{
"q": "Jak przedstawia się Franek Dolas niemieckiemu oficerowi w filmie „Jak rozpętałem drugą wojnę światową”?",
"a": [
"Jan Kowalski",
"Hans Kloss",
"Grzegorz Brzęczyszczykiewicz",
"Stefan Szczebrzeszyński"
],
"c": 2,
"f": "<b>Grzegorz Brzęczyszczykiewicz</b> z Chrząszczyżewoszyc, powiat Łękołody – Niemiec nie miał szans tego zapisać. Najlepsza broń Polaka to wymowa."
},
{
"q": "Jak długo złota rybka potrafi coś zapamiętać?",
"a": [
"3 sekundy, potem wszystko od nowa",
"Co najmniej kilka miesięcy",
"Tylko do najbliższego karmienia",
"Pamięta wyłącznie hasło do Wi-Fi"
],
"c": 1,
"f": "Słynne 3 sekundy to <b>mit</b> – złote rybki pamiętają rzeczy przez co najmniej trzy miesiące. Czyli dłużej niż my, gdzie odłożyliśmy klucze."
},
{
"q": "Ile godzin na dobę koala śpi albo leniwie odpoczywa?",
"a": [
"4–6",
"8, jak porządny etatowiec",
"18–22",
"Zero, pilnuje eukaliptusa"
],
"c": 2,
"f": "Koala przesypia nawet <b>18–22 godziny</b>, bo liście eukaliptusa dają marne paliwo i trawią się wieki. Dieta cud: jesz, śpisz, powtarzasz."
},
{
"q": "Który ptak potrafi naprawdę latać do tyłu?",
"a": [
"Struś",
"Koliber",
"Pingwin",
"Kiwi"
],
"c": 1,
"f": "<b>Koliber</b> lata do przodu, do tyłu i stoi w miejscu jak dron. Pozostała trójka nie lata w ogóle, więc kierunek nie ma tu znaczenia."
},
{
"q": "Dlaczego sowa kręci głową aż o 270° w każdą stronę?",
"a": [
"Bo nie potrafi ruszać oczami",
"Żeby się popisać na imprezie",
"Bo szuka zasięgu",
"Bo ma szyję z gumy do żucia"
],
"c": 0,
"f": "Sowie oczy są <b>nieruchome</b>, więc żeby się rozejrzeć, sowa obraca całą głowę. Taki ptasi monitoring bez kamer obrotowych."
},
{
"q": "U koników morskich młode rodzi…",
"a": [
"Samica, jak wszędzie",
"Samiec",
"Babcia",
"Najbliższa rozgwiazda"
],
"c": 1,
"f": "Samica przekazuje ikrę do torby lęgowej <b>samca</b>, a on po kilku tygodniach rodzi młode. Urlop tacierzyński w wersji hardcore."
},
{
"q": "Jaki kształt mają źrenice kozy?",
"a": [
"Okrągłe jak u człowieka",
"Poziome szparki",
"Gwiazdki",
"Serduszka"
],
"c": 1,
"f": "Koza ma <b>poziome</b>, prostokątne szparki zamiast źrenic. Dzięki temu widzi szeroką panoramę i wcześnie zauważa wilka."
},
{
"q": "Co NAPRAWDĘ robi struś, gdy chce się ukryć?",
"a": [
"Chowa głowę w piasek",
"Kładzie się płasko z szyją na ziemi",
"Udaje krzak i szeleści",
"Zakłada ciemne okulary"
],
"c": 1,
"f": "Głowa w piasku to <b>mit</b>. Struś kładzie się płasko z szyją przy ziemi i z daleka wygląda jak kopczyk. Kamuflaż poziom: kupka ziemi."
},
{
"q": "Co tak naprawdę prowokuje byka na corridzie?",
"a": [
"Czerwony kolor płachty",
"Ruch płachty",
"Brokatowe spodnie torreadora",
"Muzyka orkiestry"
],
"c": 1,
"f": "Byk w praktyce nie odróżnia czerwieni, wkurza go <b>ruch</b> płachty. Czerwień to tylko tradycja i... maskowanie plam."
},
{
"q": "Co wielbłąd magazynuje w garbie?",
"a": [
"Wodę",
"Tłuszcz",
"Piasek na czarną godzinę",
"Mleko"
],
"c": 1,
"f": "W garbie siedzi <b>tłuszcz</b> – nawet ok. 36 kg zapasów energii. Woda? Wielbłąd trzyma ją w ciele, nie w plecaku."
},
{
"q": "Które komary piją krew?",
"a": [
"Tylko samce",
"Tylko samice",
"Wszystkie bez wyjątku",
"Tylko te z grupą krwi 0"
],
"c": 1,
"f": "Krwi potrzebują <b>samice</b> (do produkcji jaj). Samce to łagodni wegetarianie na słodkich sokach roślin."
},
{
"q": "Jedyne ssaki, które potrafią naprawdę latać (a nie tylko szybować), to…",
"a": [
"Latające wiewiórki",
"Nietoperze",
"Lotokoty",
"Koty sąsiada po energetyku"
],
"c": 1,
"f": "Tylko <b>nietoperze</b> latają aktywnie, machając skrzydłami. Wiewiórki i lotokoty jedynie szybują. I nie, nietoperze nie są ślepe."
},
{
"q": "Z ilu komór składa się żołądek krowy?",
"a": [
"Z jednej",
"Z dwóch",
"Z czterech",
"Z dziesięciu, jak hotel"
],
"c": 2,
"f": "Krowa ma jeden żołądek, ale aż <b>cztery komory</b>: żwacz, czepiec, księgi i trawieniec. Kuchnia z czterema stanowiskami."
},
{
"q": "Orzeszki ziemne botanicznie są…",
"a": [
"Orzechami",
"Roślinami strączkowymi",
"Grzybami",
"Nasionami palmy"
],
"c": 1,
"f": "Orzeszek ziemny to <b>roślina strączkowa</b>, kuzyn grochu i fasoli. Na dodatek jego strąki dojrzewają pod ziemią."
},
{
"q": "Co roztopiło się w kieszeni Percy'ego Spencera, gdy przy radarze wpadł na pomysł mikrofalówki?",
"a": [
"Baton czekoladowy",
"Lody na patyku",
"Kostka masła",
"Plastikowy grzebień"
],
"c": 0,
"f": "Inżynier stał przy magnetronie, a w kieszeni zrobił mu się <b>czekoladowy</b> sos. Zamiast się wściec – opatentował kuchenkę."
},
{
"q": "Kto wymyślił lody na patyku (1905)?",
"a": [
"Eskimoski kucharz",
"Królowa Wiktoria",
"11-letni chłopiec",
"Inżynierowie z NASA"
],
"c": 2,
"f": "Mały Frank Epperson zostawił na mrozie napój z mieszadełkiem. Rano miał <b>loda na patyku</b>, a potem – patent."
},
{
"q": "Co produkował Ferruccio Lamborghini, zanim zaczął robić auta sportowe?",
"a": [
"Traktory",
"Pralki",
"Makaron",
"Skutery wodne"
],
"c": 0,
"f": "Najpierw <b>traktory</b>. Legenda głosi, że wkurzyło go sprzęgło w jego Ferrari – więc zbudował własne superauto."
},
{
"q": "W którym kraju klasyczne jajko Kinder Niespodzianka jest zakazane?",
"a": [
"W Japonii",
"W Polsce",
"W Niemczech",
"W USA"
],
"c": 3,
"f": "Amerykańskie przepisy zakazują zatapiania <b>niejadalnych przedmiotów</b> w słodyczach. Zabawka w czekoladzie = kontrabanda."
},
{
"q": "Co zawierała oryginalna Coca-Cola z 1886 roku?",
"a": [
"Ekstrakt z liści koki",
"Sproszkowane mrówki",
"Mleko wielbłądzie",
"Wodę z Niagary"
],
"c": 0,
"f": "Pierwsza receptura miała ekstrakt z <b>liści koki</b>, a napój reklamowano jako tonik na nerwy. Dzisiejsza receptura jest już bez kokainy."
},
{
"q": "Co zainspirowało George'a de Mestrala do wynalezienia rzepów na ubrania?",
"a": [
"Ośmiornica na plaży",
"Pajęczyna w piwnicy",
"Rzepy łopianu w sierści psa",
"Język kameleona"
],
"c": 2,
"f": "Po spacerze jego pies był oblepiony <b>rzepami</b>. Szwajcar zajrzał pod mikroskop i tak powstał Velcro."
},
{
"q": "Czym botanicznie jest orzeszek ziemny?",
"a": [
"Orzechem jak laskowy",
"Rośliną strączkową",
"Grzybem podziemnym",
"Nasionem kaktusa"
],
"c": 1,
"f": "Orzeszek ziemny to krewny grochu i fasoli – <b>roślina strączkowa</b>. Z orzechem ma wspólną tylko nazwę."
},
{
"q": "Do czego wrzucano piłkę w pierwszym meczu koszykówki (1891)?",
"a": [
"Do hełmów strażackich",
"Do garnków z kuchni",
"Do beczek po piwie",
"Do koszy na brzoskwinie"
],
"c": 3,
"f": "James Naismith przybił do balkonu <b>kosze na brzoskwinie</b>. Po każdym celnym rzucie ktoś wyciągał piłkę… ręcznie."
},
{
"q": "Gdzie powstał Tetris?",
"a": [
"W ZSRR",
"W Japonii",
"W USA",
"W Polsce"
],
"c": 0,
"f": "Aleksiej Pażytnow stworzył go w 1984 r. w moskiewskim instytucie, w <b>ZSRR</b>. Klocki spadały najpierw na radzieckim komputerze."
},
{
"q": "Co najczęściej kryje się pod nazwą „wasabi” w sushi poza Japonią?",
"a": [
"Prawdziwy korzeń wasabi",
"Zielony groszek z chili",
"Chrzan z barwnikiem",
"Sproszkowane awokado"
],
"c": 2,
"f": "Prawdziwe wasabi jest drogie i trudne w uprawie, więc zwykle dostajesz <b>chrzan</b> z musztardą i zielonym barwnikiem."
},
{
"q": "Co łączy założycieli marek Adidas i Puma?",
"a": [
"Byli braćmi",
"Byli tą samą osobą",
"Byli bliźniaczkami",
"Byli mistrzami olimpijskimi"
],
"c": 0,
"f": "Adolf i Rudolf Dasslerowie – <b>bracia</b>, którzy się pokłócili i założyli dwie konkurencyjne firmy w jednym miasteczku."
},
{
"q": "Od kogo wzięła nazwę kanapka, czyli „sandwich”?",
"a": [
"Od miasta Sandwich w Teksasie",
"Od wyspy Sandwich na Pacyfiku",
"Od piekarza Sandy'ego Wicha",
"Od angielskiego hrabiego"
],
"c": 3,
"f": "Nazwa pochodzi od Johna Montagu, 4. <b>hrabiego Sandwich</b>, który ponoć jadł mięso między kromkami, by nie odchodzić od stołu."
}
],
[
{
"q": "Jako co sprzedawano ketchup w Ameryce w latach 30. XIX wieku?",
"a": [
"Klej do tapet",
"Lekarstwo",
"Farbę do płotów",
"Perfumy"
],
"c": 1,
"f": "Dr John Cook Bennett reklamował pomidorowe pigułki jako <b>lek</b> na niestrawność i biegunkę."
},
{
"q": "Czym pierwotnie miała być folia bąbelkowa?",
"a": [
"Tapetą",
"Zabawką antystresową",
"Izolacją dla rakiet",
"Opakowaniem na jajka"
],
"c": 0,
"f": "W 1957 r. dwóch wynalazców chciało sprzedawać ją jako <b>teksturowaną tapetę</b>. Nikt nie chciał. Potem się okazało, że chroni paczki."
},
{
"q": "Czym była pierwotnie ciastolina Play-Doh?",
"a": [
"Jedzeniem dla astronautów",
"Zatyczkami do uszu",
"Masą do czyszczenia tapet",
"Klejem dla stolarzy"
],
"c": 2,
"f": "Służyła do zdzierania <b>sadzy z tapet</b>. Kiedy domy przestały być ogrzewane węglem, ktoś wpadł na pomysł: dajmy to dzieciom."
},
{
"q": "Jaki był pierwszy przedmiot sprzedany na eBayu?",
"a": [
"Używane skarpetki",
"Tost z wizerunkiem Elvisa",
"Zepsuty wskaźnik laserowy",
"Kamień w pudełku"
],
"c": 2,
"f": "<b>Zepsuty wskaźnik laserowy</b> za 14,83 dolara. Kupujący był kolekcjonerem zepsutych wskaźników. Naprawdę."
},
{
"q": "Ile trwała najkrótsza wojna w historii (Wielka Brytania kontra Zanzibar, 1896)?",
"a": [
"Ok. 40 minut",
"6 godzin",
"3 dni",
"2 tygodnie"
],
"c": 0,
"f": "Ok. <b>38–45 minut</b>. Krócej niż twoja kolejka do lekarza."
},
{
"q": "W którym kraju nie wolno trzymać tylko jednej świnki morskiej?",
"a": [
"W Szwecji",
"W Japonii",
"W Holandii",
"W Szwajcarii"
],
"c": 3,
"f": "W <b>Szwajcarii</b> świnka morska jest zwierzęciem stadnym i prawo chroni ją przed samotnością. Lepiej niż ciebie."
},
{
"q": "Jakie warzywo jako pierwsze wyhodowano w kosmosie (1995)?",
"a": [
"Marchew",
"Ziemniak",
"Rzodkiewkę",
"Ogórka"
],
"c": 1,
"f": "<b>Ziemniak</b>, na promie Columbia. Polska ziemniakiem stoi, kosmos też."
},
{
"q": "Jaki stopień miał niedźwiedź Wojtek w 2. Korpusie Polskim gen. Andersa?",
"a": [
"Szeregowy",
"Kapral",
"Major",
"Generał"
],
"c": 1,
"f": "Wojtek był <b>kapralem</b>. Nosił skrzynie z amunicją pod Monte Cassino i pił piwo. Legenda."
},
{
"q": "Jak ekipa „Szczęk” nazwała mechanicznego rekina?",
"a": [
"Pan Ząbek",
"Kevin",
"Bruce",
"Szczepan"
],
"c": 2,
"f": "Rekina ochrzczono <b>Bruce</b> – na cześć prawnika Spielberga. Oby prawnik psuł się rzadziej niż rekin."
},
{
"q": "Dlaczego Indiana Jones zamiast walczyć z szermierzem na bazarze po prostu go zastrzelił?",
"a": [
"Szabla zgubiła się na planie",
"Harrison Ford miał biegunkę",
"Spielberg nie znosił szermierki",
"Kaskader zaspał"
],
"c": 1,
"f": "Ford złapał <b>czerwonkę</b> i nie miał siły na długą walkę, więc zaproponował jeden strzał. Najkrótszy pojedynek w historii kina."
},
{
"q": "Krzyk Aragorna po kopnięciu hełmu w „Dwóch wieżach” jest prawdziwy, bo Viggo Mortensen…",
"a": [
"Dowiedział się o nadgodzinach",
"Zobaczył pająka",
"Złamał palce u stopy",
"Usiadł na mieczu"
],
"c": 2,
"f": "Viggo kopnął hełm i <b>złamał palce u stopy</b>, ale grał dalej. Jackson wziął to ujęcie – ból w 100% autentyczny."
},
{
"q": "Z czego zrobiono krew w scenie pod prysznicem w „Psychozie” Hitchcocka?",
"a": [
"Z soku z buraków",
"Z keczupu z musztardą",
"Z syropu czekoladowego",
"Z wina z bufetu"
],
"c": 2,
"f": "Film był czarno-biały, więc idealnie sprawdził się <b>syrop czekoladowy</b>. Najsłodsza scena grozy w historii."
},
{
"q": "Jakimi cukierkami Elliott zwabia E.T., bo producent M&M's odmówił?",
"a": [
"Michałkami",
"Tic Tacami",
"Krówkami",
"Reese's Pieces"
],
"c": 3,
"f": "Mars powiedział „nie”, Hershey „tak” – i sprzedaż <b>Reese's Pieces</b> wystrzeliła w kosmos."
},
{
"q": "Czym naprawdę jest zielony „kod” spływający po ekranach w „Matriksie”?",
"a": [
"Listą zakupów Keanu",
"Kodem źródłowym Windowsa",
"Numerami telefonów ekipy",
"Zeskanowanymi przepisami na sushi"
],
"c": 3,
"f": "Projektant Simon Whiteley zeskanował znaki z japońskiej książki kucharskiej żony – to <b>przepisy na sushi</b>. Neo widział świat jako maki."
},
{
"q": "Mike Myers nagrał Shreka, po czym poprosił o nagranie roli od nowa. Z jakim akcentem?",
"a": [
"Szkockim",
"Francuskim",
"Śląskim",
"Australijskim"
],
"c": 0,
"f": "Jerzy Stuhr był <b>Osłem</b> – i według wielu widzów ten dubbing przebił oryginał."
},
{
"q": "Czym w pierwszej wersji scenariusza „Powrotu do przyszłości” była maszyna czasu?",
"a": [
"Lodówką",
"Toi-toiem",
"Kabiną prysznicową",
"Wózkiem z supermarketu"
],
"c": 0,
"f": "Wehikułem miała być <b>lodówka</b>, ale bano się, że dzieci zaczną się zamykać w lodówkach. Wygrał DeLorean."
},
{
"q": "Skąd się wziął kot, którego Marlon Brando głaszcze na początku „Ojca chrzestnego”?",
"a": [
"To pluszak na baterie",
"Należał do Coppoli",
"Wypożyczono go z cyrku",
"To przybłęda z terenu studia"
],
"c": 3,
"f": "Coppola wsadził Brando na kolana <b>bezpańskiego kota</b> kręcącego się po studiu. Mruczał tak głośno, że zagłuszał dialogi."
},
{
"q": "Jak Sean Bean, który boi się latania, docierał na górskie plany „Władcy Pierścieni”?",
"a": [
"Wchodził pieszo w kostiumie",
"Na koniu Gandalfa",
"Spadochronem w dół",
"Na plecach Gimlego"
],
"c": 0,
"f": "Reszta leciała helikopterem, a Bean <b>wspinał się pieszo</b> – w pełnym kostiumie Boromira."
},
{
"q": "Dlaczego przerażenie Alana Rickmana przy upadku w „Szklanej pułapce” jest prawdziwe?",
"a": [
"Puścili go wcześniej, niż obiecano",
"Zobaczył rachunek za hotel",
"Pod spodem nie było materaca",
"Ktoś krzyknął „koniec zdjęć!”"
],
"c": 0,
"f": "Mieli go puścić na „trzy”, a puścili <b>na „raz”</b>. Ta mina to czyste, nieaktorskie zaskoczenie."
},
{
"q": "Kogo jeszcze, oprócz prezesa Ochódzkiego, gra w „Misiu” Stanisław Tym?",
"a": [
"Jego żonę Irenę",
"Słomianego misia",
"Jego sobowtóra, którego paszport ma przejąć",
"Szatniarza bez płaszcza"
],
"c": 2,
"f": "Tym gra też <b>sobowtóra</b> prezesa – cały plan opiera się na pożyczeniu jego paszportu. Jeden aktor, dwa paszporty."
},
{
"q": "Dlaczego premiera „Krzyżaków” odbyła się akurat 15 lipca 1960 roku?",
"a": [
"Był to pierwszy dzień wakacji",
"Datę wylosowano z hełmu",
"To 550. rocznica bitwy pod Grunwaldem",
"Były to urodziny Sienkiewicza"
],
"c": 2,
"f": "Wypadała wtedy <b>550. rocznica Grunwaldu</b>. Marketing na poziomie: średniowiecze."
},
{
"q": "Które miasteczko ma muzeum filmów o Kargulu i Pawlaku, bo kręcono tam ich sceny?",
"a": [
"Pcim",
"Wąchock",
"Radom",
"Lubomierz"
],
"c": 3,
"f": "<b>Lubomierz</b> na Dolnym Śląsku ma muzeum poświęcone trylogii o Kargulach i Pawlakach."
},
{
"q": "W jakiej wsi naprawdę kręcono serial „Ranczo” (fikcyjne Wilkowyje)?",
"a": [
"Sopot",
"Pcim Dolny",
"Wąchock",
"Jeruzal"
],
"c": 3,
"f": "Wilkowyje „grała” wieś <b>Jeruzal</b>. Serial miał się skończyć w 2009, ale widzowie nie pozwolili."
},
{
"q": "Jaki zawód miał Mario w swoim debiucie, grze Donkey Kong z 1981 roku?",
"a": [
"Hydraulik",
"Cieśla",
"Pizzaiolo",
"Listonosz"
],
"c": 1,
"f": "Zanim zaczął przepychać rury, Mario był <b>cieślą</b> i nazywał się po prostu Jumpman. Hydraulikiem został dopiero później."
},
{
"q": "Pac-Man w Japonii nazywał się Puck-Man. Czemu na Zachodzie zmieniono mu imię?",
"a": [
"Bo brzmiało jak krążek hokejowy",
"Bo wandale łatwo przerobiliby literę P",
"Bo był już taki proszek do prania",
"Bo Amerykanie nie wymawiają „u”"
],
"c": 1,
"f": "Bano się, że łobuzy flamastrem przerobią <b>P na F</b> i automat zrobi się mocno niecenzuralny. Bezpieczniej było nazwać go Pac."
},
{
"q": "Jaka gra jako pierwsza poleciała w kosmos (Game Boy na stacji Mir, 1993)?",
"a": [
"Pong",
"Super Mario Land",
"Tetris",
"Pac-Man"
],
"c": 2,
"f": "Kosmonauta Aleksandr Sieriebrow zabrał na orbitę Game Boya z <b>Tetrisem</b>. Radziecka gra wróciła do domu – tylko trochę wyżej."
},
{
"q": "Co w 2014 roku wykopano na wysypisku w Alamogordo w Nowym Meksyku?",
"a": [
"Prototyp pierwszego Game Boya",
"Tysiące kartridży z grą E.T. od Atari",
"Zaginione taśmy z „Gwiezdnych wojen”",
"Szkielet kostiumu King Konga"
],
"c": 1,
"f": "Atari w 1983 r. zakopało tony niesprzedanych gier, w tym osławione <b>E.T.</b>. Archeolodzy popkultury je odkopali – legenda okazała się prawdą."
},
{
"q": "Ile czasu zajęło grze GTA V zarobienie pierwszego miliarda dolarów?",
"a": [
"3 dni",
"3 tygodnie",
"3 miesiące",
"3 lata"
],
"c": 0,
"f": "Wystarczyły <b>3 dni</b> – szybciej niż jakikolwiek film czy produkt rozrywkowy wcześniej. Los Santos to jednak dobry interes."
},
{
"q": "Co spotkało Stevena Spielberga, gdy chciał studiować w szkole filmowej USC?",
"a": [
"Przyjęli go bez egzaminu",
"Został odrzucony, i to nie raz",
"Wyrzucono go za kradzież kamery",
"Wykładał tam jako nastolatek"
],
"c": 1,
"f": "Prestiżowa szkoła filmowa <b>odrzuciła</b> przyszłego twórcę „Szczęk” i „E.T.”. Później chętnie przyjmowała od niego wsparcie."
},
{
"q": "Co zrobił Christopher Lee (Saruman, Drakula) po osiemdziesiątce?",
"a": [
"Zdobył Mount Everest",
"Nagrał albumy metalowe",
"Został pilotem F1",
"Otworzył bar z wampirami"
],
"c": 1,
"f": "Sir Christopher wydał <b>metalowe albumy</b> o Karolu Wielkim – ostatni na 91. urodziny. Najbardziej heavy emeryt świata."
},
{
"q": "W jakiej dziedzinie doktorat ma Brian May, gitarzysta Queen?",
"a": [
"W astrofizyce",
"W weterynarii",
"W filologii klasycznej",
"W architekturze"
],
"c": 0,
"f": "May obronił doktorat z <b>astrofizyki</b> w 2007 r., ponad 30 lat po przerwaniu studiów. Pył międzyplanetarny musiał poczekać na koniec trasy."
},
{
"q": "Co wynalazła gwiazda Hollywood Hedy Lamarr?",
"a": [
"Szminkę wodoodporną",
"Technikę skakania po częstotliwościach",
"Popcorn z mikrofalówki",
"Pierwsze sztuczne rzęsy"
],
"c": 1,
"f": "Lamarr opatentowała <b>skakanie po częstotliwościach</b>, przodka technologii używanych w Wi-Fi i Bluetooth. Gwiazda kina z duszą inżyniera."
},
{
"q": "Co studiował Rowan Atkinson, czyli Jaś Fasola?",
"a": [
"Pantomimę w Paryżu",
"Elektrotechnikę",
"Medycynę weterynaryjną",
"Teologię"
],
"c": 1,
"f": "Atkinson ma tytuł magistra <b>elektrotechniki</b> z Oksfordu. Jaś Fasola mógłby więc sam naprawić swojego Mini."
},
{
"q": "Kim był Ken Jeong (Mr. Chow z „Kac Vegas”) przed karierą komika?",
"a": [
"Lekarzem",
"Kierowcą limuzyny",
"Zawodowym bokserem",
"Kucharzem w Las Vegas"
],
"c": 0,
"f": "Jeong był <b>lekarzem</b> internistą z licencją. Między dyżurami występował w klubach komediowych."
},
{
"q": "Jaki urząd piastował Clint Eastwood w latach 80.?",
"a": [
"Szeryf Teksasu",
"Burmistrz miasteczka Carmel w Kalifornii",
"Ambasador USA we Włoszech",
"Dyrektor zoo w San Diego"
],
"c": 1,
"f": "W 1986 r. Brudny Harry został <b>burmistrzem Carmel-by-the-Sea</b>. Rządził dwa lata – bez rewolweru."
},
{
"q": "Jaki był naturalny kolor włosów Elvisa Presleya?",
"a": [
"Kruczoczarny",
"Ciemny blond",
"Rudy",
"Siwy od dziecka"
],
"c": 1,
"f": "Król rock and rolla był naturalnie <b>blondynem</b>. Czarną czuprynę zawdzięczał farbie."
},
{
"q": "Kim był Stephen Hillenburg, twórca SpongeBoba, zanim zajął się animacją?",
"a": [
"Nauczycielem biologii morskiej",
"Kucharzem w barze z burgerami",
"Nurkiem wojskowym",
"Sprzedawcą gąbek"
],
"c": 0,
"f": "Hillenburg uczył <b>biologii morskiej</b>. Bikini Dolne to w sumie lekcja przyrody, tylko ze śpiewającą gąbką."
},
{
"q": "Ile Oscarów zdobyły krótkometrażówki z Tomem i Jerrym?",
"a": [
"Ani jednego",
"Jednego honorowego",
"Siedem",
"Dwadzieścia"
],
"c": 2,
"f": "Kot i mysz zgarnęli aż <b>siedem Oscarów</b> za animowane krótkie metraże. Gonitwa po kuchni to sztuka."
},
{
"q": "Co rozpętało „Świńską wojnę” USA z Wielką Brytanią na wyspie San Juan w 1859 roku?",
"a": [
"Świnia wygrała wybory na sołtysa",
"Spór o przepis na boczek",
"Świnia przepłynęła granicę na tratwie",
"Świnia zjadła sąsiadowi ziemniaki"
],
"c": 3,
"f": "Amerykański farmer zastrzelił brytyjską świnię, która buszowała w jego <b>ziemniakach</b>. Spór rozstrzygnął dopiero cesarz Niemiec w 1871 – i nikt z ludzi nie ucierpiał."
},
{
"q": "Co zostawiali sobie nawzajem Duńczycy i Kanadyjczycy na spornej Wyspie Hansa?",
"a": [
"Listy miłosne",
"Flagi i butelki alkoholu",
"Miny przeciwpiechotne",
"Hodowle pingwinów"
],
"c": 1,
"f": "„Wojna o whisky” polegała na wbijaniu flagi i zostawianiu <b>butelki</b> – sznapsa od Duńczyków, kanadyjskiej whisky od Kanadyjczyków. W 2022 roku wyspę po prostu podzielono na pół."
},
{
"q": "Od czyjej krzywdy zaczęła się „wojna cukiernicza” Francji z Meksykiem (1838)?",
"a": [
"Hiszpańskiego torreadora",
"Papugi ambasadora",
"Francuskiego cukiernika",
"Meksykańskiego tancerza"
],
"c": 2,
"f": "Francuski <b>cukiernik</b> Remontel skarżył się, że meksykańscy oficerowie splądrowali mu ciastkarnię. Francja upomniała się o odszkodowanie… flotą."
},
{
"q": "Co opodatkował rzymski cesarz Wespazjan, mówiąc „pieniądze nie śmierdzą”?",
"a": [
"Czosnek",
"Skarpety legionistów",
"Mocz z publicznych latryn",
"Perfumy"
],
"c": 2,
"f": "Wespazjan opodatkował <b>mocz</b>, który garbarze i folusznicy kupowali z latryn. Jego imię do dziś noszą pisuary we Francji (vespasiennes)."
},
{
"q": "Co obowiązkowo mierzy się Japończykom w wieku 40–74 lat w ramach tzw. „prawa metabo”?",
"a": [
"Obwód w pasie",
"Długość nosa",
"Liczbę ukłonów dziennie",
"Prędkość jedzenia sushi"
],
"c": 0,
"f": "Japonia mierzy <b>obwód talii</b> – limit to 85 cm dla mężczyzn i 90 cm dla kobiet. Kary za brak efektów grożą jednak firmom i samorządom, a nie samym brzuchom."
},
{
"q": "Czego zabrania brytyjska ustawa Salmon Act z 1986 roku?",
"a": [
"„Podejrzanego obchodzenia się z łososiem”",
"Malowania łososi na różowo",
"Mówienia „łosoś” po 22:00",
"Trzymania łososia jako zwierzaka"
],
"c": 0,
"f": "Ustawa naprawdę penalizuje <b>obchodzenie się z łososiem w podejrzanych okolicznościach</b> – chodzi o rybę, co do której masz podstawy sądzić, że złowiono ją nielegalnie."
},
{
"q": "Ile trwało panowanie francuskiego króla Ludwika XIX w 1830 roku?",
"a": [
"Ok. 3 tygodnie",
"Ok. 20 minut",
"Jeden weekend",
"Dokładnie rok"
],
"c": 1,
"f": "Po abdykacji ojca Ludwik XIX był królem mniej więcej <b>20 minut</b>, po czym sam podpisał abdykację. Szybciej niż przerwa na kawę."
},
{
"q": "Z czego był przekonany, że jest zrobiony, król Francji Karol VI Szalony?",
"a": [
"Z sera brie",
"Z masła",
"Z porcelany chińskiej",
"Ze szkła"
],
"c": 3,
"f": "Karol VI bał się, że się stłucze, bo jest ze <b>szkła</b>, więc podobno wszywano mu w ubrania żelazne pręty."
},
{
"q": "Do kogo z mocy prawa należą nieoznakowane łabędzie nieme na otwartych wodach w Anglii?",
"a": [
"Do Greenpeace",
"Do Korony",
"Do każdego, kto pierwszy je złapie",
"Do premiera"
],
"c": 1,
"f": "Łabędzie należą do <b>Korony</b>. Na Tamizie władca dzieli się nimi z dwoma starymi cechami: winiarzy i farbiarzy."
},
{
"q": "Jak Fred Lorz „przebiegł” maraton olimpijski w St. Louis w 1904 roku?",
"a": [
"Część trasy przejechał samochodem",
"Pobiegł tyłem",
"Jechał na koniu przebrany za ducha",
"Biegł w samych skarpetkach"
],
"c": 0,
"f": "Lorz zszedł z trasy, podjechał kawał <b>samochodem</b>, a gdy auto się zepsuło, dobiegł do mety. Tłumaczył potem, że to był żart."
},
{
"q": "Za co w latach 1912–1948 przyznawano medale olimpijskie oprócz sportu?",
"a": [
"Za najładniejszy uśmiech kibica",
"Za sztukę: malarstwo, rzeźbę, muzykę…",
"Za gotowanie bigosu",
"Za najdłuższą przemowę"
],
"c": 1,
"f": "Na igrzyskach rozgrywano konkursy <b>sztuki</b> inspirowanej sportem. Węgier Alfréd Hajós zdobył złoto w pływaniu, a potem srebro za projekt stadionu."
},
{
"q": "Od jakiego sporu zaczęła się Księga Rekordów Guinnessa?",
"a": [
"Która wieża jest najwyższa",
"Kto wypije najwięcej Guinnessa",
"Kto ma najdłuższe wąsy w pubie",
"Który ptak łowny w Europie jest najszybszy"
],
"c": 3,
"f": "Szef browaru Sir Hugh Beaver kłócił się na polowaniu w 1951 r., czy szybszy jest siewka, czy pardwa. Nie było księgi, która rozstrzygnie <b>najszybszego ptaka łownego</b> – więc ją zrobiono."
},
{
"q": "Kogo przesłuchiwała policja po kradzieży „Mony Lisy” z Luwru w 1911 roku?",
"a": [
"Pabla Picassa",
"Claude'a Moneta",
"Salvadora Dalego",
"Vincenta van Gogha"
],
"c": 0,
"f": "Podejrzanym był m.in. <b>Picasso</b>, ale obraz ukradł pracownik Luwru Vincenzo Peruggia, który wyniósł go pod płaszczem."
},
{
"q": "Z iloma kośćmi (mniej więcej) rodzi się niemowlę?",
"a": [
"Dokładnie 206, jak dorosły",
"Około 100 – reszta dorasta",
"Około 300",
"Ponad 1000"
],
"c": 2,
"f": "Noworodek ma ok. <b>300 kości</b> i chrząstek, które z wiekiem się zrastają. Dorosły ma ich 206 – czyli rośniemy, a kości ubywa."
},
{
"q": "Gdzie znajduje się najmniejsza kość w ciele człowieka?",
"a": [
"W małym palcu u stopy",
"W uchu",
"W nosie",
"W języku"
],
"c": 1,
"f": "To <b>strzemiączko</b> w uchu środkowym – ma ok. 3 mm. Mniejsze niż ziarnko ryżu, a robi całą robotę przy słuchaniu sąsiada za ścianą."
},
{
"q": "Jak według astronautów pachną skafandry po spacerze kosmicznym?",
"a": [
"Jak wanilia i świeże pranie",
"Jak skoszona trawa",
"Jak smażony stek i gorący metal",
"Jak mokry pies"
],
"c": 2,
"f": "Astronauci opisują zapach kosmosu jako <b>przypalony stek</b>, rozgrzany metal i spawanie. Grill na orbicie, tylko bez kiełbasy."
},
{
"q": "Co zrobiłby Saturn wrzucony do gigantycznej wanny z wodą?",
"a": [
"Zatonąłby jak kamień",
"Unosiłby się na wodzie",
"Zamroziłby całą wodę",
"Odbiłby się jak piłka"
],
"c": 1,
"f": "Średnia <b>gęstość</b> Saturna jest mniejsza niż wody, więc w teorii by pływał. Problem tylko ze znalezieniem odpowiedniej wanny."
},
{
"q": "Ile razy wyższa od Mount Everestu jest marsjańska góra Olympus Mons?",
"a": [
"Jest niższa od Giewontu",
"Mniej więcej 2,5 raza",
"Około 100 razy",
"Jest dokładnie tak samo wysoka"
],
"c": 1,
"f": "Olympus Mons to <b>wulkan</b> ok. 2,5 raza wyższy od Everestu – największy w Układzie Słonecznym. Schronisko na szczycie byłoby daleko."
},
{
"q": "Ile wschodów Słońca dziennie widzi załoga Międzynarodowej Stacji Kosmicznej?",
"a": [
"Jeden, jak wszyscy",
"Cztery",
"Około 16",
"Około 365"
],
"c": 2,
"f": "ISS okrąża Ziemię w ok. 90 minut, więc załoga ma ok. <b>16 wschodów</b> dziennie. Budzik ustawiony na wschód słońca nie ma tam sensu."
},
{
"q": "Ile razy gorętszy od powierzchni Słońca może być piorun?",
"a": [
"Jest 100 razy zimniejszy",
"Tyle samo gorący",
"Około 5 razy",
"Około 1000 razy"
],
"c": 2,
"f": "Piorun rozgrzewa powietrze do ok. 30 000 stopni, czyli ok. <b>5 razy</b> więcej niż powierzchnia Słońca. Nie wychodź z parasolem na łąkę."
},
{
"q": "Jakiego koloru jest język żyrafy?",
"a": [
"Ciemny, prawie czarny",
"Żółty w brązowe łaty",
"Jaskrawozielony",
"Przezroczysty"
],
"c": 0,
"f": "Długi na ok. 45 cm język żyrafy jest <b>ciemny</b>, być może po to, żeby nie spiec się na słońcu. Krem z filtrem w wersji wbudowanej."
},
{
"q": "Po co leniwiec schodzi z drzewa mniej więcej raz w tygodniu?",
"a": [
"Na zakupy",
"Żeby zrobić kupę",
"Żeby wykąpać się w rzece",
"Na poranny jogging"
],
"c": 1,
"f": "Leniwiec schodzi na ziemię głównie po to, żeby się <b>wypróżnić</b>. Raz na tydzień, ale za to porządnie."
},
{
"q": "Czym samiec pingwina białobrewego może zdobyć serce samicy?",
"a": [
"Ładnym kamykiem",
"Bukietem wodorostów",
"Breakdance'em",
"Wierszem o krylu"
],
"c": 0,
"f": "Pingwi amant podarowuje wybrance starannie wybrany <b>kamyk</b>. Pierścionek zaręczynowy, tylko większy i do budowy gniazda."
},
{
"q": "Czym pachnie bukietnica Arnolda, kwiat o średnicy ok. 1 metra?",
"a": [
"Różami",
"Gnijącym mięsem",
"Świeżym chlebem",
"Lodami waniliowymi"
],
"c": 1,
"f": "Ten gigantyczny kwiat pachnie <b>padliną</b>, żeby zwabić muchy. Na Walentynki raczej się nie nadaje."
},
{
"q": "Jakie zwierzę przeżyło próżnię kosmiczną podczas misji FOTON-M3 (2007)?",
"a": [
"Niesporczak",
"Chomik",
"Ślimak winniczek",
"Złota rybka"
],
"c": 0,
"f": "Wysuszone <b>niesporczaki</b>, zwane niedźwiadkami wodnymi, przetrwały kosmiczną próżnię. Gorzej im poszło ze słońcem, ale i tak szacun."
},
{
"q": "Co potrafi meduza Turritopsis dohrnii?",
"a": [
"Zamienić się w rybę",
"Cofnąć się do stadium młodego polipa",
"Spacerować po plaży",
"Śpiewać jak wieloryb"
],
"c": 1,
"f": "W kryzysie meduza ta <b>cofa się</b> do stadium polipa i zaczyna życie od nowa. Dlatego nazywa się ją biologicznie nieśmiertelną."
},
{
"q": "Czym motyle wyczuwają smak?",
"a": [
"Skrzydłami",
"Stopami",
"Ogonem",
"Kolanami"
],
"c": 1,
"f": "Receptory smaku motyl ma na <b>stopach</b>. Siada na liściu i od razu wie, czy to dobre miejsce na jaja. Degustacja z buta."
},
{
"q": "Czego kot nie wyczuje, choćby bardzo się starał?",
"a": [
"Smaku słodkiego",
"Zapachu ryby",
"Smaku mięsa",
"Zapachu myszy"
],
"c": 0,
"f": "Kotom brakuje działającego receptora <b>słodyczy</b> przez uszkodzony gen. Tort urodzinowy dla kota to czysta formalność."
},
{
"q": "Czym jest czerwonawa wydzielina na skórze hipopotama?",
"a": [
"Krwią – hipcio poci się krwią",
"Naturalnym filtrem przeciwsłonecznym",
"Sokiem z arbuza",
"Rdzą"
],
"c": 1,
"f": "To nie krew ani pot, tylko barwniki pochłaniające UV – <b>filtr przeciwsłoneczny</b> własnej produkcji. SPF: hipopotami."
},
{
"q": "Jak śpią delfiny?",
"a": [
"Wcale nie śpią",
"Połową mózgu naraz",
"Leżąc brzuchem do góry na plaży",
"Tylko zimą, jak niedźwiedzie"
],
"c": 1,
"f": "Delfin śpi <b>jedną półkulą</b> mózgu, a druga pilnuje oddychania i drapieżników. Tryb samolotowy dla zaawansowanych."
},
{
"q": "Z jakiej rośliny pochodzi wanilia?",
"a": [
"Ze storczyka",
"Z palmy",
"Z drzewa kakaowego",
"Z ziemniaka"
],
"c": 0,
"f": "Wanilia to owoc <b>storczyka</b>, zapylanego zwykle ręcznie. Dlatego to druga najdroższa przyprawa świata, zaraz po szafranie."
},
{
"q": "Który z tych owoców botanicznie JEST jagodą?",
"a": [
"Truskawka",
"Banan",
"Malina",
"Jeżyna"
],
"c": 1,
"f": "Botanicy uznają <b>banana</b> za jagodę, a truskawkę, malinę i jeżynę już nie. Botanika nie lubi naszej intuicji."
},
{
"q": "Czym jest Hyperion, najwyższe znane żyjące drzewo (ok. 116 m)?",
"a": [
"Sekwoją wieczniezieloną",
"Baobabem",
"Dębem Bartkiem",
"Palmą kokosową"
],
"c": 0,
"f": "Hyperion to <b>sekwoja wieczniezielona</b> z Kalifornii. Za wejście w jego okolicę grozi do 5000 dolarów grzywny, więc selfie wychodzi drogo."
},
{
"q": "Co znaczy nazwa LEGO?",
"a": [
"Inicjały założycieli: L. i Ego",
"„Nadepnij boleśnie” po norwesku",
"„Baw się dobrze” po duńsku",
"Skrót od „Legoland”"
],
"c": 2,
"f": "To skrót od duńskiego <b>„leg godt”</b>, czyli „baw się dobrze”. O nadeptywaniu w nocy nikt nie wspominał."
},
{
"q": "Gdzie wymyślono pizzę hawajską?",
"a": [
"Na Hawajach",
"W Neapolu",
"W Kanadzie",
"W Tokio"
],
"c": 2,
"f": "Ananas na pizzy to pomysł Greka Sama Panopoulosa z Ontario w <b>Kanadzie</b> (1962). Hawaje są winne tylko nazwy."
},
{
"q": "Skąd naprawdę pochodzą ciasteczka z wróżbą z chińskich restauracji?",
"a": [
"Z cesarskiego Pekinu",
"Z Tybetu",
"Z Hongkongu",
"Z USA, a pomysł mieli Japończycy"
],
"c": 3,
"f": "Spopularyzowały się w <b>Kalifornii</b>, a korzenie mają w japońskich wypiekach. W Chinach są właściwie nieznane."
},
{
"q": "Która z tych dyscyplin była kiedyś olimpijska?",
"a": [
"Przeciąganie liny",
"Rzut beretem",
"Skoki przez kałuże",
"Wyścigi ślimaków"
],
"c": 0,
"f": "W latach 1900–1920 za <b>przeciąganie liny</b> dawano olimpijskie medale. Kałuże wciąż czekają na swoją szansę."
},
{
"q": "Co pokazywała jedna z pierwszych kamer internetowych na Uniwersytecie Cambridge?",
"a": [
"Akwarium z rybkami",
"Dzbanek z kawą",
"Kota portiera",
"Toster w akademiku"
],
"c": 1,
"f": "Naukowcy nie chcieli chodzić na próżno, więc podglądali <b>dzbanek z kawą</b>. Prawdziwy napęd postępu."
},
{
"q": "Jaki owad znaleziono w 1947 r. w komputerze Harvard Mark II i wklejono do dziennika jako „pierwszy bug”?",
"a": [
"Karalucha",
"Pająka",
"Ćmę",
"Mrówkę"
],
"c": 2,
"f": "Zespół Grace Hopper wyciągnął <b>ćmę</b> z przekaźnika i wkleił ją taśmą do notatek. Pierwszy debugging dosłownie."
},
{
"q": "Jak nazywał się Mario w grze Donkey Kong z 1981 roku?",
"a": [
"Pizza Man",
"Wąsaty Joe",
"Luigi",
"Jumpman"
],
"c": 3,
"f": "Był <b>Jumpmanem</b> i… cieślą, a nie hydraulikiem. Rury i grzyby przyszły później."
},
{
"q": "Od czego pochodzi nazwa Bluetooth?",
"a": [
"Od duńskiego króla",
"Od rekina błękitnego",
"Od marki pasty do zębów",
"Od zęba wynalazcy po jagodach"
],
"c": 0,
"f": "Od wikińskiego króla <b>Haralda Sinozębego</b>, który zjednoczył Danię i Norwegię. Logo to jego inicjały w runach."
},
{
"q": "Skąd wzięła się nazwa „spam” dla śmieciowej poczty?",
"a": [
"Od skrótu „Send Phony Ads Massively”",
"Od nazwiska hakera Spamowskiego",
"Od skeczu Monty Pythona",
"Od dźwięku starego modemu"
],
"c": 2,
"f": "W skeczu <b>Monty Pythona</b> wszyscy bez końca powtarzają „Spam” (nazwę konserwy) i zagłuszają rozmowę. Brzmi znajomo?"
},
{
"q": "Z czego głównie jest zrobiony olimpijski „złoty” medal?",
"a": [
"Z czystego złota",
"Z czekolady w sreberku",
"Z mosiądzu",
"Ze srebra"
],
"c": 3,
"f": "To głównie <b>srebro</b>, tylko pozłacane – złota jest tam kilka gramów. Ostatnie medale z litego złota rozdano w 1912 r."
},
{
"q": "Od czego zaczynała Nokia w 1865 roku?",
"a": [
"Od produkcji saun",
"Od reniferowych sań",
"Od papierni",
"Od gorzelni"
],
"c": 2,
"f": "Pierwszy był młyn papierniczy, czyli <b>papiernia</b> nad fińską rzeką. Do telefonów było jeszcze ponad 100 lat."
},
{
"q": "Co próbował wynaleźć chemik z 3M, gdy przypadkiem stworzył klej do karteczek Post-it?",
"a": [
"Gumę do żucia",
"Superpotężny klej",
"Krem do opalania",
"Zmywacz do paznokci"
],
"c": 1,
"f": "Spencer Silver chciał <b>superpotężnego kleju</b>, a wyszedł mu taki, co ledwo trzyma. Karteczki samoprzylepne mówią „dziękuję”."
}
],
[
{
"q": "Co jest PRAWDĄ o Kleopatrze?",
"a": [
"Zbudowała piramidę Cheopsa",
"Była pierwszą kobietą-faraonem",
"Żyła bliżej lądowania na Księżycu niż budowy piramidy Cheopsa",
"Miała kota o imieniu Juliusz"
],
"c": 2,
"f": "Piramida stanęła ok. 2560 p.n.e., Kleopatra zmarła w 30 p.n.e. To <b>bliżej do 1969 roku</b> niż do piramidy."
},
{
"q": "Uniwersytet Oksfordzki jest starszy od…",
"a": [
"Starożytnego Rzymu",
"Imperium Azteków",
"Piramid w Gizie",
"Chrześcijaństwa"
],
"c": 1,
"f": "Na Oksfordzie uczono już ok. 1096 r., a Tenochtitlán, stolicę <b>Azteków</b>, założono w 1325 r."
},
{
"q": "Rekiny są na Ziemi dłużej niż…",
"a": [
"Księżyc",
"Bakterie",
"Drzewa",
"Ocean"
],
"c": 2,
"f": "Rekiny: ok. 450 mln lat. Pierwsze <b>drzewa</b>: ok. 385 mln lat. Rekiny patrzyły, jak las rośnie."
},
{
"q": "Kto wygrał „Wielką Wojnę z Emu” w Australii w 1932 roku?",
"a": [
"Australijskie wojsko",
"Emu",
"Remis i traktat pokojowy",
"Kangury, które się wtrąciły"
],
"c": 1,
"f": "Żołnierze z karabinami maszynowymi <b>przegrali z emu</b>. Ptaki rozbiegały się i były za szybkie. Wojsko się wycofało."
},
{
"q": "O której godzinie mógł dzwonić pierwszy budzik mechaniczny Leviego Hutchinsa (1787)?",
"a": [
"Tylko o 4:00",
"Tylko o 6:00",
"O dowolnej",
"Tylko w samo południe"
],
"c": 0,
"f": "Tylko o <b>4:00</b>, bo o tej godzinie wstawał wynalazca. Na innych nie zależało mu wcale."
},
{
"q": "Ile trwa doba na Wenus?",
"a": [
"Równo 24 godziny",
"Ok. 1 godziny",
"Dłużej niż jej rok",
"Wenus nie ma doby"
],
"c": 2,
"f": "Obrót wokół osi: ok. <b>243 dni ziemskich</b>, obieg wokół Słońca: ok. 225. Poniedziałek trwa tam dłużej niż rok."
},
{
"q": "Kto przez ok. 20 lat był honorowym burmistrzem miasteczka Talkeetna na Alasce?",
"a": [
"Łoś",
"Kot",
"Pies husky",
"Niedźwiedź grizzly"
],
"c": 1,
"f": "<b>Kot Stubbs</b>. Bez afer, bez obietnic, bez korupcji. Lepszy niż niejeden polityk."
},
{
"q": "Co produkowało Nintendo po założeniu w 1889 roku?",
"a": [
"Karty do gry",
"Ryż",
"Miotły",
"Parasole"
],
"c": 0,
"f": "Ręcznie malowane <b>karty hanafuda</b>. Mario przyszedł prawie sto lat później."
},
{
"q": "Okrzyk „Here's Johnny!” w „Lśnieniu” Nicholson zaimprowizował, cytując…",
"a": [
"Reklamę płatków śniadaniowych",
"Swojego teścia",
"Hymn stanu Kolorado",
"Zapowiedź z talk-show Johnny'ego Carsona"
],
"c": 3,
"f": "Nicholson podkradł <b>zapowiedź z „The Tonight Show”</b>. Kubrick, mieszkający w Anglii, podobno nie załapał żartu."
},
{
"q": "Kto był pierwszym wyborem do roli Indiany Jonesa, ale zablokował go kontrakt z serialem?",
"a": [
"Danny DeVito",
"Tom Selleck",
"Sylvester Stallone",
"Rowan Atkinson"
],
"c": 1,
"f": "<b>Tom Selleck</b> miał już kapelusz na głowie, ale nie puścił go kontrakt na „Magnum”. Wąsy zostały w telewizji."
},
{
"q": "Z czego powstał charakterystyczny ryk myśliwców TIE w „Gwiezdnych wojnach”?",
"a": [
"Odkurzacza i kota",
"Wiertarki udarowej",
"Czajnika i teściowej",
"Słonia i auta na mokrej drodze"
],
"c": 3,
"f": "Ben Burtt zmiksował <b>ryk słonia</b> z szumem samochodu jadącego po mokrym asfalcie. Imperium dosłownie trąbi."
},
{
"q": "Który aktor z filmowego „Władcy Pierścieni” jako jedyny poznał osobiście Tolkiena?",
"a": [
"Andy Serkis",
"Christopher Lee",
"Elijah Wood",
"Orlando Bloom"
],
"c": 1,
"f": "Tylko <b>Christopher Lee</b> (Saruman) spotkał Tolkiena osobiście. Reszta obsady musiała się zadowolić książkami."
},
{
"q": "Jaki przedmiot David Fincher przemycił do niemal każdej sceny „Podziemnego kręgu”?",
"a": [
"Kostkę Rubika",
"Zdjęcie swojej mamy",
"Kubek ze Starbucksa",
"Gumową kaczuszkę"
],
"c": 2,
"f": "W prawie każdym ujęciu czai się <b>kubek ze Starbucksa</b> – przytyk do konsumpcjonizmu. Pierwsza zasada: nie mówi się o kawie."
},
{
"q": "Z jakich dźwięków złożono ryk T-Reksa w „Parku Jurajskim”?",
"a": [
"Lwa, krowy i trąbki",
"Ziewającego reżysera",
"Słoniątka, tygrysa i aligatora",
"Wieloryba i kosiarki"
],
"c": 2,
"f": "Gary Rydstrom zmiksował <b>małego słonia</b>, tygrysa i aligatora. Postrach Isla Nublar to w jednej trzeciej słoniątko."
},
{
"q": "Kto wymyślił najsłynniejsze słowa monologu „łzy w deszczu” z „Łowcy androidów”?",
"a": [
"Ridley Scott na serwetce",
"Rutger Hauer, czyli sam aktor",
"Harrison Ford",
"Philip K. Dick w liście"
],
"c": 1,
"f": "<b>Rutger Hauer</b> pociął scenariuszowy monolog i dopisał od siebie frazę o łzach w deszczu."
},
{
"q": "Scenę z szawarmą po napisach „Avengers” kręcono po premierze. Jaki był kłopot z Chrisem Evansem?",
"a": [
"Zgubił tarczę",
"Miał już brodę do innego filmu",
"Nie zmieścił się w kostium",
"Był na wakacjach w Mielnie"
],
"c": 1,
"f": "Evans zapuścił <b>brodę</b> do „Snowpiercera”, więc maskowano ją protezą i ręką przy twarzy. Dlatego Kapitan prawie nic nie je."
},
{
"q": "Billy Crystal odrzucił rolę Buzza Astrala. Komu później podłożył głos w Pixarze?",
"a": [
"Mike'owi Wazowskiemu",
"Panu Bulwie",
"Chudemu",
"Nemo"
],
"c": 0,
"f": "Po wpadce z Buzzem Crystal nie przepuścił drugiej szansy i został <b>Mikiem Wazowskim</b> z „Potworów i spółki”."
},
{
"q": "Czym zajmował się Jan Himilsbach, zanim zaczął grać w filmach takich jak „Rejs”?",
"a": [
"Kuł napisy na nagrobkach",
"Uczył baletu",
"Był kapitanem żeglugi",
"Był krupierem w kasynie"
],
"c": 0,
"f": "Himilsbach był <b>kamieniarzem</b> od nagrobków – „Rejs” był pełen aktorów, którzy wcześniej nie grali w kinie."
},
{
"q": "Co Hollywood planowało zrobić z „Kilerem” Machulskiego?",
"a": [
"Amerykański remake – kupiono prawa",
"Kontynuację z Jamesem Bondem",
"Musical na Broadwayu",
"Serial o Siarze w kosmosie"
],
"c": 0,
"f": "Amerykanie <b>kupili prawa do remake'u</b> „Kilera”, ale film nigdy nie powstał. Siara pozostał nasz."
},
{
"q": "Krystyna Feldman, czyli babka Kiepska, zagrała w filmie „Mój Nikifor”…",
"a": [
"Samą siebie",
"Kota Nikifora",
"Malarza Nikifora – mężczyznę",
"Matkę Nikifora"
],
"c": 2,
"f": "Feldman zagrała <b>tytułowego Nikifora</b>, choć był mężczyzną – i zgarnęła za to Polską Nagrodę Filmową."
},
{
"q": "Skąd pochodzi słynna melodia z Tetrisa na Game Boya?",
"a": [
"Z hymnu Związku Radzieckiego",
"Z XIX-wiecznej rosyjskiej piosenki ludowej",
"Z dzwonka telefonu Nokii",
"Z czołówki radzieckiej kreskówki"
],
"c": 1,
"f": "To <b>Korobiejniki</b> – stara rosyjska pieśń o wędrownych handlarzach. Babcie nuciły ją, zanim ktokolwiek układał klocki."
},
{
"q": "Gdzie latami wystawiano nadpalonego Game Boya, który przetrwał bombardowanie w wojnie w Zatoce Perskiej?",
"a": [
"W Pentagonie",
"W sklepie Nintendo w Nowym Jorku",
"W muzeum w Bagdadzie",
"W siedzibie NASA"
],
"c": 1,
"f": "Stopiony, ale wciąż działający Game Boy stał w <b>sklepie Nintendo w Nowym Jorku</b>, aż zdjęto go w 2023 r. Pancerniejszy niż niejeden czołg."
},
{
"q": "Po kim dostała imię księżniczka Zelda?",
"a": [
"Po babci Miyamoto",
"Po żonie pisarza F. Scotta Fitzgeralda",
"Po kotce prezesa Nintendo",
"Po bohaterce telenoweli"
],
"c": 1,
"f": "Shigeru Miyamoto pożyczył imię od <b>Zeldy Fitzgerald</b>, żony autora „Wielkiego Gatsby'ego”. Hyrule ma literackie korzenie."
},
{
"q": "Ile mniej więcej trwa na ekranie rola Beatrice Straight w „Sieci”, nagrodzona Oscarem?",
"a": [
"Około 5 minut",
"Około 25 minut",
"Około godziny",
"Cały film"
],
"c": 0,
"f": "Zaledwie <b>około 5 minut</b> – najkrótsza aktorska rola nagrodzona Oscarem. Krócej trwa niejedna reklama przed seansem."
},
{
"q": "Z czego robiono statuetki Oscara podczas II wojny światowej?",
"a": [
"Z czekolady",
"Z malowanego gipsu",
"Ze szkła",
"Z drewna orzechowego"
],
"c": 1,
"f": "Przez braki metalu zwycięzcy dostawali <b>malowany gips</b>. Po wojnie mogli je wymienić na prawdziwe – gipsowy Oscar nie znosił upadków."
},
{
"q": "Który film zarobił najwięcej w historii, jeśli uwzględnić inflację?",
"a": [
"„Avatar”",
"„Titanic”",
"„Przeminęło z wiatrem”",
"„Avengers: Koniec gry”"
],
"c": 2,
"f": "Po przeliczeniu na dzisiejsze pieniądze króluje <b>„Przeminęło z wiatrem”</b> z 1939 r. Dziadkowie chodzili do kina częściej, niż myślisz."
},
{
"q": "Czym wyróżniał się Christopher Lee wśród obsady „Władcy Pierścieni”?",
"a": [
"Jako jedyny przeczytał scenariusz",
"Jako jedyny spotkał Tolkiena osobiście",
"Grał wszystkie orki naraz",
"Nie lubił fantastyki"
],
"c": 1,
"f": "Lee był jedynym członkiem obsady, który <b>poznał Tolkiena</b> osobiście. Co roku czytał też całą trylogię."
},
{
"q": "Co Nicolas Cage musiał oddać Mongolii w 2015 roku?",
"a": [
"Skradzioną czaszkę dinozaura",
"Konia wyścigowego",
"Zabytkową jurtę",
"Złotego Oscara"
],
"c": 0,
"f": "Cage kupił na aukcji <b>czaszkę tyranozaura</b> za 276 tys. dolarów. Okazało się, że wywieziono ją nielegalnie – wróciła do Mongolii."
},
{
"q": "Jaki roboczy tytuł miał przebój Beatlesów „Yesterday”?",
"a": [
"„Scrambled Eggs” (Jajecznica)",
"„Tomorrow”",
"„Rainy Monday”",
"„Song Number Nine”"
],
"c": 0,
"f": "Zanim McCartney wymyślił tekst, śpiewał pod melodię o <b>jajecznicy</b>. Jeden z najczęściej coverowanych utworów zaczął się od śniadania."
},
{
"q": "Co trzeba było robić aż do 2015 roku, żeby zaśpiewać „Happy Birthday” w filmie?",
"a": [
"Płacić tantiemy właścicielowi praw",
"Śpiewać tylko w Wielkiej Brytanii",
"Zaprosić autorkę na plan",
"Nic, piosenka zawsze była darmowa"
],
"c": 0,
"f": "Wytwórnia przez dekady inkasowała <b>tantiemy</b> za „Sto lat” po amerykańsku, aż sąd uznał jej prawa za nieważne."
},
{
"q": "Na jakiej uczelni studiował Mick Jagger, zanim wybrał Rolling Stonesów?",
"a": [
"W Akademii Sztuk Pięknych",
"W London School of Economics",
"W szkole kucharskiej",
"W akademii wojskowej Sandhurst"
],
"c": 1,
"f": "Jagger studiował w <b>London School of Economics</b>. Ekonomia przydała się potem – Stonesi to też świetnie zarządzana firma."
},
{
"q": "Jakie były pierwsze słowa wypowiedziane przez Myszkę Miki (1929)?",
"a": [
"„Hiya, pal!”",
"„Hot dogs!”",
"„Oh boy!”",
"„Minnie!”"
],
"c": 1,
"f": "W „The Karnival Kid” Miki sprzedaje parówki i woła <b>„Hot dogs!”</b>. Pierwsze słowa – i od razu reklama jedzenia."
},
{
"q": "Jakie drugie imię ma Kaczor Donald?",
"a": [
"Fauntleroy",
"Quackington",
"Mortimer",
"Nie ma drugiego imienia"
],
"c": 0,
"f": "Pełne dane: Donald <b>Fauntleroy</b> Duck. Brzmi jak arystokrata, zachowuje się jak wiecznie wkurzony kaczor."
},
{
"q": "Kto według oryginalnego komiksu stworzył Smerfetkę?",
"a": [
"Papa Smerf",
"Gargamel",
"Ważniak",
"Matka Natura"
],
"c": 1,
"f": "Smerfetkę ulepił z gliny <b>Gargamel</b>, żeby narobić zamętu w wiosce. Papa Smerf potem ją „odczarował”."
},
{
"q": "Kim był Steve Buscemi, zanim został aktorem?",
"a": [
"Strażakiem w Nowym Jorku",
"Kelnerem w pizzerii mafii",
"Fryzjerem gwiazd",
"Detektywem policji"
],
"c": 0,
"f": "Buscemi przez kilka lat był <b>strażakiem</b> FDNY. Gaszenie pożarów zamienił na grę w filmach braci Coen."
},
{
"q": "Co w 1325 roku Modeńczycy zabrali Bolończykom jako łup wojenny po bitwie pod Zappolino?",
"a": [
"Najgrubszego burmistrza",
"Przepis na sos boloński",
"Drewniane wiadro ze studni",
"Dzwon z ratusza"
],
"c": 2,
"f": "Zwycięzcy zgarnęli <b>wiadro</b> spod studni przy bramie Bolonii i czcili je jak relikwię. Powstał nawet poemat „Porwane wiadro”."
},
{
"q": "Z kim Holandia „zawarła pokój” dopiero w 1986 roku, kończąc rzekomą 335-letnią wojnę?",
"a": [
"Z Watykanem",
"Z Księstwem Monako",
"Z wyspami Scilly",
"Z Belgią"
],
"c": 2,
"f": "Lokalny historyk odkrył, że nikt nie podpisał pokoju z 1651 r., więc ambasador Holandii przyjechał i uroczyście ogłosił koniec „wojny” z wyspami <b>Scilly</b>. Ofiar: zero."
},
{
"q": "Co dostał Michigan „na pocieszenie” po przegranej z Ohio „wojnie o Toledo”?",
"a": [
"Dożywotni zapas ciasta",
"Prawo do nazwy „Toledo II”",
"Kawałek Kanady",
"Górny Półwysep (Upper Peninsula)"
],
"c": 3,
"f": "Michigan oddał Toledo, a w zamian dostał <b>Górny Półwysep</b> – wtedy uznawany za kiepską nagrodę, dziś dumę stanu."
},
{
"q": "Jak władze Strasburga „leczyły” tańczącą epidemię z 1518 roku?",
"a": [
"Zakazały muzyki pod karą grzywny",
"Kazały wszystkim usiąść na jeżach",
"Wynajęły muzyków i zbudowały scenę",
"Zorganizowały konkurs na najgorszy taniec"
],
"c": 2,
"f": "Lekarze orzekli, że trzeba… <b>więcej tańczyć</b>. Miasto oddało tancerzom hale, postawiło scenę i opłaciło muzyków."
},
{
"q": "Co musiał nosić przy sobie Rosjanin, który zapłacił podatek od brody za Piotra Wielkiego?",
"a": [
"Dzwoneczek przy brodzie",
"Zaświadczenie od cyrulika",
"Brodę innego koloru",
"Żeton z wizerunkiem brody"
],
"c": 3,
"f": "Opłacona broda wymagała „dokumentu” – miedzianego <b>żetonu</b> z wybitym nosem, wąsami i brodą. Dopiero Katarzyna Wielka zniosła podatek w 1772 roku."
},
{
"q": "Jakie imię dla syna próbowali w 1996 roku zarejestrować protestujący szwedzcy rodzice?",
"a": [
"Ikea Billy Svensson",
"Smörgåsbord",
"Abba Abba Abba",
"43-znakowe „Brfxxccxxmnpccc…11116”"
],
"c": 3,
"f": "Rodzice zgłosili <b>„Brfxxccxxmnpcccclllmmnprxvclmnckssqlbb11116”</b> jako „dzieło artystyczne”. Sąd odmówił, a potem odrzucił też ich drugi pomysł – imię „A”."
},
{
"q": "Kim ogłosił się w 1859 roku Joshua Norton z San Francisco?",
"a": [
"Szeryfem całego Dzikiego Zachodu",
"Cesarzem Stanów Zjednoczonych",
"Papieżem Ameryki",
"Królem Kalifornii i Księżyca"
],
"c": 1,
"f": "Norton I, <b>Cesarz Stanów Zjednoczonych</b>, „rozwiązał” Kongres i wydawał własne banknoty, które niektóre lokale naprawdę przyjmowały."
},
{
"q": "Kto w Boże Narodzenie 1950 roku wykradł z Opactwa Westminsterskiego Kamień ze Scone?",
"a": [
"Czworo studentów z Glasgow",
"Członkowie rodziny królewskiej",
"Mnisi z opactwa w ramach żartu",
"Złodzieje z Londynu dla kolekcjonera"
],
"c": 0,
"f": "Kamień koronacyjny wynieśli <b>studenci z Glasgow</b> – i to tak sprawnie, że… pękł im na dwie części. Odnalazł się po kilku miesiącach."
},
{
"q": "Do którego roku na Islandii zakazane było mocne piwo?",
"a": [
"Nigdy nie było zakazane",
"Do 1919",
"Do 1989",
"Do 1945"
],
"c": 2,
"f": "Wino i wódkę Islandczycy odzyskali dużo wcześniej, ale <b>piwo</b> zalegalizowano dopiero 1 marca <b>1989</b>. Dziś to tam „Dzień Piwa”."
},
{
"q": "Co BBC poradziło widzom, którzy po reportażu z 1957 roku chcieli wyhodować drzewo spaghetti?",
"a": [
"Podlewać drzewo rosołem",
"Posadzić makaron w księżycową noc",
"Włożyć gałązkę spaghetti do sosu pomidorowego",
"Kupić sadzonkę w Szwajcarii"
],
"c": 2,
"f": "Po primaaprilisowym reportażu „Panoramy” BBC radziło <b>włożyć spaghetti do puszki sosu pomidorowego</b> i liczyć na najlepsze."
},
{
"q": "Kogo miasto Christchurch w Nowej Zelandii przez 23 lata zatrudniało na oficjalnym kontrakcie?",
"a": [
"Czarodzieja",
"Zaklinacza deszczu z Peru",
"Smokobójcę",
"Królewskiego błazna"
],
"c": 0,
"f": "Ian Brackenbury Channell był oficjalnym <b>Czarodziejem Nowej Zelandii</b> – w 1998 r. dostał umowę na 16 tys. dolarów rocznie. Rada miasta „odczarowała” go w 2021."
},
{
"q": "Na co patent (jako jedyny prezydent USA) uzyskał Abraham Lincoln?",
"a": [
"Urządzenie do przenoszenia łodzi nad mielizną",
"Maszynkę do golenia brody",
"Automat do strugania ołówków",
"Cylinder z kieszenią na listy"
],
"c": 0,
"f": "Lincoln w 1849 r. opatentował system <b>pływaków do podnoszenia łodzi nad mieliznami</b>. Nigdy go nie wyprodukowano, ale patent jest!"
},
{
"q": "Co oznacza „S” w imieniu prezydenta Harry'ego S. Trumana?",
"a": [
"Sebastian",
"Samuel",
"Superman",
"Nic konkretnego – to samo „S”"
],
"c": 3,
"f": "„S” <b>nie jest skrótem</b> żadnego imienia – to ukłon w stronę obu dziadków, których imiona zawierały „S”."
},
{
"q": "O co pokłócił się Tycho Brahe w pojedynku, w którym stracił kawałek nosa?",
"a": [
"Kto jest lepszym matematykiem",
"O ostatni kawałek śledzia",
"O kolor nieba",
"Czy Ziemia jest płaska"
],
"c": 0,
"f": "Młody astronom pojedynkował się z kuzynem o to, kto lepszy z <b>matematyki</b>. Potem do końca życia nosił protezę nosa – według badań z mosiądzu."
},
{
"q": "Ile ważyłaby łyżeczka materii z gwiazdy neutronowej?",
"a": [
"Tyle co słoik dżemu",
"Mniej niż powietrze",
"Około 50 kg",
"Miliardy ton"
],
"c": 3,
"f": "Gwiazda neutronowa jest tak gęsta, że łyżeczka jej materii waży <b>miliardy ton</b>. Do herbaty raczej się nie nadaje."
},
{
"q": "Co jest nietypowego w obrocie Urana?",
"a": [
"Kręci się 1000 razy na dobę",
"Wcale się nie obraca",
"Toczy się po orbicie bokiem",
"Co roku zmienia kierunek"
],
"c": 2,
"f": "Oś Urana jest przechylona o ok. <b>98 stopni</b>, więc planeta toczy się po orbicie jak beczka. Najpewniej kiedyś coś ją mocno trzasnęło."
},
{
"q": "Jaką część masy całego Układu Słonecznego stanowi Słońce?",
"a": [
"Mniej więcej połowę",
"Około 10%",
"Około 99,8%",
"Około 75%"
],
"c": 2,
"f": "Słońce to ok. <b>99,8%</b> masy Układu Słonecznego. Planety, łącznie z nami, to dosłownie okruszki po obiedzie."
},
{
"q": "Jakiego koloru są zachody Słońca na Marsie?",
"a": [
"Niebieskawe",
"Zielone w kropki",
"Czerwone jak na Ziemi",
"Czarno-białe"
],
"c": 0,
"f": "Marsjański pył rozprasza światło tak, że wokół zachodzącego Słońca robi się <b>niebiesko</b>. Czerwona planeta, a zachód jak z lodówki."
},
{
"q": "Kto był pierwszym zwierzęciem wysłanym w kosmos (1947)?",
"a": [
"Pies Łajka",
"Muszki owocówki",
"Szympans Ham",
"Chomik z NASA"
],
"c": 1,
"f": "Już w 1947 r. na rakiecie V-2 polecały <b>muszki owocówki</b> – i wróciły żywe. Łajka była dopiero 10 lat później, za to pierwsza na orbicie."
},
{
"q": "Ile pełnych okrążeń Słońca zrobił Pluton od odkrycia w 1930 r.?",
"a": [
"Około 96",
"Ani jednego",
"Dokładnie siedem",
"Ponad tysiąc"
],
"c": 1,
"f": "Rok na Plutonie trwa ok. 248 lat, więc od odkrycia nie zrobił <b>ani jednego</b> okrążenia. Pierwsze „urodziny” wypadną ok. 2178 r."
},
{
"q": "Którego dnia w PRL wprowadzono kartki na mięso?",
"a": [
"W Wigilię 1980 r.",
"1 kwietnia 1981 r., w prima aprilis",
"W Sylwestra 1979 r.",
"W Tłusty Czwartek 1985 r."
],
"c": 1,
"f": "Kartki na mięso weszły <b>1 kwietnia 1981</b> r. – niestety to nie był żart. Ostatnie przestały obowiązywać dopiero w lipcu 1989 r."
},
{
"q": "Do czego medycyna używa niebieskiej krwi skrzypłocza?",
"a": [
"Do farbowania dżinsów",
"Do wykrywania toksyn bakterii w lekach",
"Jako atrament do recept",
"Do leczenia czkawki"
],
"c": 1,
"f": "Z krwi skrzypłocza robi się test LAL, który wykrywa <b>toksyny bakteryjne</b> w lekach i sprzęcie medycznym. Niebieska od miedzi, a złota dla zdrowia."
},
{
"q": "Ile lat ma Matuzalem, sosna długowieczna z Kalifornii?",
"a": [
"Ok. 480",
"Ok. 4850",
"Ok. 48 500",
"Równo 100, był tort"
],
"c": 1,
"f": "Według słojów Matuzalem ma blisko <b>4,9 tysiąca lat</b> – kiełkował, gdy w Egipcie dopiero planowano piramidy."
},
{
"q": "Ile może urosnąć bambus w ciągu jednej doby?",
"a": [
"Ok. 1 mm",
"Ok. 5 cm",
"Nawet około metra",
"10 metrów"
],
"c": 2,
"f": "Niektóre bambusy rosną nawet <b>90–120 cm na dobę</b>. Można prawie patrzeć, jak rośnie, jeśli ma się czas."
},
{
"q": "Co uznaje się za jeden z największych organizmów na Ziemi (ok. 9 km²)?",
"a": [
"Płetwala błękitnego",
"Grzyb – opieńkę w Oregonie",
"Mrowisko pod Krakowem",
"Stado krów z Podlasia"
],
"c": 1,
"f": "„Humongous fungus” to <b>opieńka</b> zajmująca ok. 9 km² lasu i licząca ok. 8000 lat. Grzybiarze z koszykiem nie mają szans."
},
{
"q": "Ile lat może żyć rekin polarny (grenlandzki)?",
"a": [
"Ok. 30",
"Ok. 70",
"Co najmniej 272",
"Tylko 3, ale intensywnie"
],
"c": 2,
"f": "Wiek rekinów zmierzono węglem C-14 w soczewkach oczu: żyją <b>co najmniej 272 lata</b>, a najstarszy mógł mieć ok. 400."
},
{
"q": "Jak długo rekordowe jerzyki potrafią latać bez lądowania?",
"a": [
"Ok. 10 godzin",
"Ok. 10 dni",
"Ok. 10 miesięcy",
"Ok. 10 lat"
],
"c": 2,
"f": "Niektóre jerzyki nie lądują nawet przez <b>10 miesięcy</b> – jedzą i śpią w locie. Prawdziwy tryb „nie przeszkadzać”."
},
{
"q": "Co robi zimą żaba leśna z Ameryki Północnej?",
"a": [
"Leci samolotem do Meksyku",
"Zamarza – nawet serce przestaje bić",
"Zimuje w ludzkich piwnicach",
"Robi sobie sweterek z mchu"
],
"c": 1,
"f": "Żaba leśna dosłownie <b>zamarza</b>: bez bicia serca i oddechu, z glukozą jako płynem niezamarzającym. Wiosną odmarza i rusza dalej."
},
{
"q": "Czym żaba pomaga sobie przy przełykaniu jedzenia?",
"a": [
"Oczami",
"Uszami",
"Kolanami",
"Ogonem"
],
"c": 0,
"f": "Żaba wciąga <b>oczy</b> przez otwory w czaszce i nimi dopycha jedzenie do gardła. Dlatego mruga, gdy połyka."
},
{
"q": "Kto ma największe oczy spośród wszystkich znanych zwierząt?",
"a": [
"Kałamarnica kolosalna",
"Płetwal błękitny",
"Struś",
"Wyrak"
],
"c": 0,
"f": "Oko <b>kałamarnicy kolosalnej</b> ma ok. 27–30 cm średnicy, czyli jak talerz obiadowy. Struś ma największe oczy, ale tylko na lądzie."
},
{
"q": "Węgorz elektryczny to tak naprawdę…",
"a": [
"Prawdziwy węgorz",
"Ryba strętwokształtna, nie węgorz",
"Wąż wodny",
"Mutant spod elektrowni"
],
"c": 1,
"f": "Węgorz elektryczny <b>nie jest węgorzem</b>, tylko krewniakiem południowoamerykańskich ryb-noży. Za to kopie nawet do 860 woltów."
},
{
"q": "Czego nauczono gołębie w jednym z eksperymentów?",
"a": [
"Odróżniania obrazów Picassa od Moneta",
"Gry w szachy",
"Czytania rozkładu jazdy PKP",
"Dostarczania pizzy"
],
"c": 0,
"f": "Gołębie nauczyły się odróżniać <b>Picassa od Moneta</b>, i to nawet na obrazach, których wcześniej nie widziały. Krytycy sztuki w piórach."
},
{
"q": "Do czego najprawdopodobniej służą paski zebry?",
"a": [
"Odstraszają gryzące muchy",
"Pomagają liczyć stado",
"To kod kreskowy dla lwów",
"Służą za przejście dla pieszych"
],
"c": 0,
"f": "Badania pokazują, że paski utrudniają lądowanie <b>muchom</b> – nawet koniom ubranym w zebrowe derki. Moskitiera w modnym wzorze."
},
{
"q": "Co jest dziwnego w języku dzięcioła?",
"a": [
"Owija się wokół czaszki",
"Świeci w ciemności",
"Jest zrośnięty z dziobem",
"Rośnie mu co roku nowy"
],
"c": 0,
"f": "Kość podtrzymująca język dzięcioła <b>owija się wokół czaszki</b> i amortyzuje mózg. Wbudowany kask przy kuciu w drewno."
},
{
"q": "Nad czym pracował Harry Coover, gdy po raz pierwszy trafił na super glue?",
"a": [
"Nad przezroczystymi celownikami",
"Nad sztucznymi rzęsami",
"Nad podeszwami butów",
"Nad gumą do żucia"
],
"c": 0,
"f": "Podczas II wojny szukał materiału na <b>przezroczyste celowniki</b>, ale substancja kleiła się do wszystkiego. Odrzucił ją… na kilka lat."
},
{
"q": "Jak miał się pierwotnie nazywać Amazon?",
"a": [
"Cadabra",
"Bookzilla",
"Jeffshop",
"Abrakadabra.pl"
],
"c": 0,
"f": "Bezos wybrał <b>Cadabra</b>, ale prawnik przez telefon usłyszał „cadaver” (zwłoki). Szybka zmiana na rzekę."
},
{
"q": "W jakim mieście wymyślono sałatkę Cezar?",
"a": [
"W Rzymie",
"W Las Vegas",
"W Tijuanie (Meksyk)",
"W Paryżu"
],
"c": 2,
"f": "Włoski imigrant Caesar Cardini podał ją w swojej restauracji w <b>Tijuanie</b> w 1924 r. Juliusz Cezar nie miał z tym nic wspólnego."
},
{
"q": "Od czego wzięło się słowo „frisbee”?",
"a": [
"Od blaszanych foremek po ciastach",
"Od pokryw od śmietników",
"Od nazwiska kosmity z filmu",
"Od greckiego „latający talerz”"
],
"c": 0,
"f": "Studenci rzucali pustymi foremkami z piekarni <b>Frisbie Pie Company</b>. Ciasto zjedzone, zabawa zostaje."
},
{
"q": "Po co Lizzie Magie wymyśliła grę, z której powstało Monopoly?",
"a": [
"Żeby uczyć dzieci liczyć",
"Żeby wygrać zakład z bankierem",
"Żeby promować kolej",
"Żeby ostrzec przed chciwymi kamienicznikami"
],
"c": 3,
"f": "Jej „The Landlord's Game” miała pokazać, jak <b>zbijanie fortuny na czynszach</b> rujnuje innych. Wyszło odwrotnie – wszyscy chcą hotel."
},
{
"q": "Do czego pierwotnie reklamowano chusteczki Kleenex (1924)?",
"a": [
"Do polerowania butów",
"Jako filtry do kawy",
"Do zmywania makijażu",
"Jako serwetki na wesela"
],
"c": 2,
"f": "Miały ścierać krem i <b>makijaż</b>. Dopiero klienci odkryli, że świetnie się w nie… wydmuchuje nos."
},
{
"q": "Kto odnalazł skradziony puchar mistrzostw świata w piłce nożnej w 1966 roku?",
"a": [
"Detektyw ze Scotland Yardu",
"Pies o imieniu Pickles",
"Sprzątaczka ze stadionu",
"Kibic Brazylii"
],
"c": 1,
"f": "Właściciel wyszedł z psem na spacer, a <b>Pickles</b> zaczął obwąchiwać paczkę pod żywopłotem. W środku – Puchar Jules'a Rimeta."
},
{
"q": "Kogo przedstawiało pierwsze logo firmy Apple (1976)?",
"a": [
"Adama i Ewę",
"Królewnę Śnieżkę",
"Izaaka Newtona pod drzewem",
"Wilhelma Tella z łukiem"
],
"c": 2,
"f": "Narysował je Ronald Wayne: <b>Newton</b> siedzący pod jabłonią. Nadgryzione jabłuszko wygrało rok później."
},
{
"q": "Jak miał na imię ptaszek z logo Twittera?",
"a": [
"Tweety",
"Bob",
"Ptysiek",
"Larry"
],
"c": 3,
"f": "Nazwano go <b>Larry</b> na cześć koszykarza Larry'ego Birda z Boston Celtics. Bird = ptak, rozumiecie."
},
{
"q": "Ile zapłacono studentce Carolyn Davidson za zaprojektowanie logo Nike w 1971 roku?",
"a": [
"35 dolarów",
"350 tysięcy dolarów",
"Używany samochód",
"Milion dolarów w akcjach"
],
"c": 0,
"f": "Słynny „swoosh” kosztował <b>35 dolarów</b>. Później firma dorzuciła jej pierścionek i akcje – trochę lepiej."
},
{
"q": "Co oprócz aut Peugeot robi od XIX wieku do dziś?",
"a": [
"Młynki do pieprzu",
"Sery pleśniowe",
"Akordeony",
"Perfumy o zapachu opon"
],
"c": 0,
"f": "<b>Młynki do pieprzu</b> z lwem produkują od 1874 r. – dłużej niż samochody. Kuchnia z silnikiem w genach."
},
{
"q": "Za co jeszcze rozdawano medale olimpijskie w latach 1912–1948?",
"a": [
"Za najładniejszy wąs",
"Za gotowanie",
"Za taniec towarzyski",
"Za malarstwo i literaturę"
],
"c": 3,
"f": "Były konkursy <b>artystyczne</b>: malarstwo, rzeźba, muzyka, literatura, architektura. Złoto za wiersz, czemu nie."
},
{
"q": "Ile czasu Ernő Rubik potrzebował, by ułożyć swoją własną kostkę po raz pierwszy?",
"a": [
"5 minut",
"Ok. miesiąca",
"12 lat",
"Nigdy jej nie ułożył"
],
"c": 1,
"f": "Wynalazca męczył się około <b>miesiąca</b>. Dzisiejsi rekordziści robią to w kilka sekund."
}
],
[
{
"q": "Banany są lekko…",
"a": [
"Magnetyczne",
"Radioaktywne",
"Kuloodporne po zamrożeniu",
"Palne jak benzyna"
],
"c": 1,
"f": "Zawierają potas, w tym izotop <b>potas-40</b>. Żeby zaszkodzić, trzeba by zjeść ich kilka milionów naraz."
},
{
"q": "Co jest dziś niezwykłego w notatkach Marii Skłodowskiej-Curie?",
"a": [
"Są pisane szyfrem",
"Wciąż są radioaktywne",
"Zjadły je mole",
"Są w Watykanie"
],
"c": 1,
"f": "Wciąż są <b>radioaktywne</b>, trzyma się je w ołowianych pudłach. Przed lekturą podpisuje się oświadczenie."
},
{
"q": "Ile dni był prezydentem USA William Henry Harrison?",
"a": [
"1",
"31",
"100",
"365"
],
"c": 1,
"f": "<b>31 dni</b>. Wygłosił 2-godzinne przemówienie w zimnie bez płaszcza, rozchorował się i zmarł."
},
{
"q": "Co jest prawdą o miodzie znalezionym w starożytnych egipskich grobowcach?",
"a": [
"Wciąż nadaje się do jedzenia",
"Zamienił się w bursztyn",
"Okazał się wybuchowy",
"To w ogóle był klej"
],
"c": 0,
"f": "Miód praktycznie <b>się nie psuje</b>: mało wody i kwaśny odczyn. Archeolodzy znajdowali taki, który wciąż był jadalny."
},
{
"q": "Co koale mają łudząco podobnego do ludzi?",
"a": [
"Grupę krwi",
"Odciski palców",
"Kolor oczu",
"Gust muzyczny"
],
"c": 1,
"f": "<b>Odciski palców</b> koali tak przypominają ludzkie, że pod mikroskopem trudno je odróżnić."
},
{
"q": "W którym kraju leży miejscowość Llanfairpwllgwyngyll…gogogoch (58 liter)?",
"a": [
"Islandia",
"Finlandia",
"Walia",
"Polska, za Pcimiem"
],
"c": 2,
"f": "W <b>Walii</b>. Nazwę wymyślono w XIX w., żeby przyciągnąć turystów. Zadziałało."
},
{
"q": "Mniej więcej tyle samo mieszków włosowych na ciele co człowiek ma…",
"a": [
"Szympans",
"Delfin",
"Kot sfinks",
"Żaba"
],
"c": 0,
"f": "Mamy ich podobnie dużo jak <b>szympansy</b>, tylko nasze włosy są cieniutkie i krótkie. Jesteś po prostu łysą małpą."
},
{
"q": "Ile tygodniowo zarabiała suczka grająca Toto w „Czarnoksiężniku z Krainy Oz” (1939)?",
"a": [
"5 dolarów",
"125 dolarów",
"Nic – była wolontariuszką",
"Miskę kości"
],
"c": 1,
"f": "Terry brała <b>125 dolarów tygodniowo</b>, więcej niż niejeden ludzki aktor na planie. Hau, jaka gaża."
},
{
"q": "Jak Daniel Stern krzyczał, gdy po twarzy chodziła mu prawdziwa tarantula w „Kevinie”?",
"a": [
"Krzyczał za niego dubler",
"Bezgłośnie – dźwięk dograno później",
"Przez megafon",
"Wcale – zasnął"
],
"c": 1,
"f": "Wrzask mógł spłoszyć pająka, więc Stern <b>krzyczał bezgłośnie</b>, a dźwięk dodano w postprodukcji."
},
{
"q": "Co wystukuje Jack na maszynie w niemieckiej wersji „Lśnienia”?",
"a": [
"Jack jest grzecznym chłopcem",
"Piwo jest dobre na wszystko",
"Ordnung muss sein",
"Nie odkładaj na jutro, co możesz zrobić dziś"
],
"c": 3,
"f": "Kubrick zamówił osobne kartki dla wersji językowych – Niemcy dostali przysłowie <b>„Was du heute kannst besorgen…”</b>, czyli nie odkładaj na jutro."
},
{
"q": "Kto zastępował Toma Hanksa w części scen biegania Forresta Gumpa?",
"a": [
"Robot z Pixara",
"Usain Bolt",
"Maratończyk z Kenii",
"Jego brat Jim Hanks"
],
"c": 3,
"f": "Za Forresta biegał też <b>Jim Hanks</b>, młodszy brat Toma. Run, Jimmy, run!"
},
{
"q": "Co jest niezwykłego w roli Johna Candy'ego, „króla polki”, w „Kevinie samym w domu”?",
"a": [
"Zagrał ją przez telefon z domu",
"Nie wypowiada ani słowa",
"Swoje kwestie zaimprowizował",
"Grał też mamę Kevina"
],
"c": 2,
"f": "Candy swoje kwestie <b>improwizował</b> – i wyszła z tego jedna z najzabawniejszych ról w filmie."
},
{
"q": "Janusz Rewiński, czyli Siara z „Kilera”, w latach 1991–93 był posłem z ramienia…",
"a": [
"Polskiej Partii Przyjaciół Piwa",
"Stronnictwa Taksówkarzy",
"Klubu Fanów Disco Polo",
"Partii Miłośników Kotów"
],
"c": 0,
"f": "Zanim został Siarą, zasiadał w Sejmie z <b>Polskiej Partii Przyjaciół Piwa</b>. Kariera z pianką."
},
{
"q": "Ilu statystów zatrudniono do scen bitewnych w „Krzyżakach” (1960)?",
"a": [
"Jednego, skopiowanego",
"1 500 000",
"15 000",
"150"
],
"c": 2,
"f": "Do bitew zatrudniono <b>15 tysięcy</b> statystów. Grunwald bez grama CGI."
},
{
"q": "Co zrobiono w 2000 roku z czarno-białymi „Samymi swoimi”?",
"a": [
"Pokolorowano je dla Polsatu",
"Nakręcono wersję operową",
"Zakopano taśmę w kapsule czasu",
"Przerobiono na 3D"
],
"c": 0,
"f": "Film <b>pokolorowano</b> na zamówienie Polsatu. Kargul i Pawlak w kolorze kłócą się równie dobrze."
},
{
"q": "Który Pokémon został zaprojektowany jako pierwszy w historii?",
"a": [
"Pikachu",
"Bulbasaur",
"Rhydon",
"Mew"
],
"c": 2,
"f": "Choć Bulbasaur ma numer 1, pierwszy na desce kreślarskiej był <b>Rhydon</b> – kamienny nosorożec. Pikachu musiał poczekać w kolejce."
},
{
"q": "Co oprócz Atari założył Nolan Bushnell, twórca automatu Pong?",
"a": [
"Sieć pizzerii Chuck E. Cheese",
"Firmę Nintendo of America",
"Wytwórnię Pixar",
"Sieć kin IMAX"
],
"c": 0,
"f": "Bushnell wymyślił <b>Chuck E. Cheese</b> – pizzerie z automatami i śpiewającymi robotami. Biznesplan: dzieci grają, rodzice płacą za pizzę."
},
{
"q": "Za którym razem nominowany dźwiękowiec Kevin O'Connell w końcu dostał Oscara?",
"a": [
"Za 3. razem",
"Za 9. razem",
"Za 15. razem",
"Za 21. razem"
],
"c": 3,
"f": "Przegrał 20 razy z rzędu, aż w 2017 r., za <b>21. nominacją</b>, wygrał za „Przełęcz ocalonych”. Mistrz cierpliwości."
},
{
"q": "Pod jakim nazwiskiem Natalie Portman współtworzyła artykuł naukowy w czasie studiów na Harvardzie?",
"a": [
"Natalie Hershlag",
"Natalie Skywalker",
"Natalie Amidala",
"Nie napisała żadnego"
],
"c": 0,
"f": "Jako <b>Natalie Hershlag</b> (jej prawdziwe nazwisko) współtworzyła pracę o płatach czołowych mózgu. Królowa Amidala zna się na neuronach."
},
{
"q": "Co zrobiono z głosem Arnolda Schwarzeneggera w jego debiucie „Herkules w Nowym Jorku”?",
"a": [
"Zdubbingowano go innym aktorem",
"Podkręcono go o oktawę w górę",
"Zastąpiono napisami",
"Nic – grał niemego"
],
"c": 0,
"f": "Akcent był tak mocny, że <b>zdubbingowano go</b>. W napisach występował jako „Arnold Strong”."
},
{
"q": "Który Beatles był narratorem pierwszej serii „Tomka i przyjaciół” (Thomas the Tank Engine)?",
"a": [
"Paul McCartney",
"Ringo Starr",
"John Lennon",
"George Harrison"
],
"c": 1,
"f": "Opowieści o lokomotywie czytał <b>Ringo Starr</b>. Perkusista Beatlesów w końcu też pilnował rytmu – tylko kół."
},
{
"q": "Kiedy ma się skończyć wykonanie utworu Johna Cage'a „As Slow As Possible” na organach w Halberstadt?",
"a": [
"W 2030 roku",
"W 2100 roku",
"W 2640 roku",
"Nigdy – gra w pętli"
],
"c": 2,
"f": "Koncert ruszył w 2001 r. i potrwa do <b>2640 roku</b>. Akordy zmieniają się raz na kilka lat – i to jest wydarzenie!"
},
{
"q": "W jakiej jednostce armii USA służył Jimi Hendrix?",
"a": [
"W 101. Dywizji Powietrznodesantowej",
"W orkiestrze marynarki wojennej",
"W piechocie morskiej",
"W wojskach rakietowych"
],
"c": 0,
"f": "Hendrix był <b>spadochroniarzem</b> 101. Dywizji. Już tam ponoć nie rozstawał się z gitarą."
},
{
"q": "Co oznacza „J.” w imieniu Homera J. Simpsona?",
"a": [
"Jebediah",
"Jay",
"Joseph",
"Nic – to tylko litera"
],
"c": 1,
"f": "To <b>Jay</b> – hołd Matta Groeninga dla Jaya Warda, twórcy kreskówki o łosiu Bullwinkle'u. D'oh!"
},
{
"q": "Kto w 1871 roku jako arbiter rozstrzygnął, do kogo należą wyspy ze „Świńskiej wojny”?",
"a": [
"Papież",
"Cesarz Niemiec",
"Rzut monetą w saloonie",
"Królowa Wiktoria osobiście"
],
"c": 1,
"f": "Sprawę świni i ziemniaków oddano w ręce <b>cesarza Niemiec</b>, który przyznał wyspy San Juan Stanom Zjednoczonym. Poważna dyplomacja, niepoważny początek."
},
{
"q": "Który „podatek od brody” to NIEPOTWIERDZONA legenda?",
"a": [
"Podatek od braku brody w Jemenie 1936",
"Opłata od bród księży za Franciszka I",
"Podatek Henryka VIII w Anglii",
"Podatek Piotra Wielkiego w Rosji"
],
"c": 2,
"f": "Angielski podatek od brody <b>Henryka VIII</b> to legenda – brytyjskie archiwa narodowe nie mają po nim śladu. Pozostałe trzy naprawdę istniały."
},
{
"q": "Czym zajmował się na dworze Henryka VIII „Groom of the Stool”?",
"a": [
"Asystował królowi przy toalecie",
"Czesał królewskie konie",
"Pilnował królewskich taboretów",
"Testował trucizny w jedzeniu"
],
"c": 0,
"f": "„Stool” to tu królewski sedes – dworzanin asystował władcy przy <b>toalecie</b>. Fucha była prestiżowa, bo dawała prywatny dostęp do króla."
},
{
"q": "Kogo słynnie bronił w sądzie w Autun (1508) prawnik Barthélemy de Chasseneuz?",
"a": [
"Wiatru, który zerwał dach",
"Smoka z pobliskiej jaskini",
"Kota oskarżonego o czary",
"Szczurów, które zjadły jęczmień"
],
"c": 3,
"f": "W średniowiecznej Francji sądzono też zwierzęta – Chasseneuz zrobił karierę, broniąc <b>szczurów</b> oskarżonych o zniszczenie zbiorów jęczmienia."
},
{
"q": "Jak brzmi tytuł kanonu Mozarta KV 231?",
"a": [
"„Sonata dla znudzonego kota”",
"„Liż mnie w d…” (Leck mich im Arsch)",
"„Oda do ziemniaka”",
"„Requiem dla mojej peruki”"
],
"c": 1,
"f": "Geniusz z Salzburga napisał kanon „<b>Leck mich im Arsch</b>” – mniej więcej „pocałuj mnie w tyłek”. Klasyka!"
},
{
"q": "Co zrobił Kubańczyk Andarín Carvajal podczas maratonu olimpijskiego w 1904 roku?",
"a": [
"Pobiegł z walizką po złą stronę",
"Zatrzymał się na ślub",
"Zgubił drogę i trafił do Kanady",
"Zjadł zgniłe jabłka i uciął sobie drzemkę"
],
"c": 3,
"f": "Głodny Carvajal zjadł <b>zgniłe jabłka</b>, dostał skurczów, zdrzemnął się przy trasie… i i tak zajął czwarte miejsce."
},
{
"q": "Który kraj miał w kalendarzu 30 lutego 1712 roku?",
"a": [
"Hiszpania",
"Polska",
"Japonia",
"Szwecja"
],
"c": 3,
"f": "<b>Szwecja</b> zabrała się za zmianę kalendarza na raty, pogubiła się w latach przestępnych i dla ratowania sytuacji dodała 30 lutego."
},
{
"q": "Jak brytyjski poseł może zrezygnować z mandatu, skoro formalnie nie wolno mu ustąpić?",
"a": [
"Musi przepłynąć Tamizę",
"Kładzie się na środku sali",
"Przyjmuje fikcyjny urząd „Chiltern Hundreds”",
"Wysyła królowi kurę"
],
"c": 2,
"f": "Posłowie nie mogą zrezygnować, ale urzędnik Korony nie może być posłem. Biorą więc pustą posadę zarządcy <b>Chiltern Hundreds</b> i znikają z Izby."
},
{
"q": "Co spadło z nieba w hrabstwie Bath w Kentucky w marcu 1876 roku?",
"a": [
"Żywe żaby w kapeluszach",
"Monety z czasów Rzymu",
"Kawałki mięsa",
"Ciepłe naleśniki"
],
"c": 2,
"f": "Był to słynny „deszcz <b>mięsa</b>”. Najpopularniejsze wyjaśnienie: przelatujące sępy zwróciły obiad."
},
{
"q": "Kto zdobył ok. 100 tysięcy głosów w wyborach do rady miejskiej São Paulo w 1959 roku?",
"a": [
"Nosorożec Cacareco",
"Piłkarz Pelé",
"Papuga z zoo",
"Pomnik Chrystusa"
],
"c": 0,
"f": "Mieszkańcy w proteście wpisywali na kartach <b>nosorożca Cacareco</b> z zoo. Komisja jej kandydatury, niestety, nie uznała."
},
{
"q": "Do którego roku w Paryżu formalnie obowiązywał przepis wymagający od kobiet zgody policji na noszenie spodni?",
"a": [
"Do 1918",
"Do 2013",
"Do 1968",
"Do 1848"
],
"c": 1,
"f": "Przepis z 1800 roku dawno nikogo nie obchodził, ale formalnie uchylono go dopiero w <b>2013</b> roku."
},
{
"q": "Co według konstytucji Kentucky wyklucza z pełnienia urzędu publicznego?",
"a": [
"Brak kowbojskiego kapelusza",
"Wegetarianizm",
"Nieumiejętność jazdy konno",
"Udział w pojedynku"
],
"c": 3,
"f": "Zapis z XIX wieku przetrwał do dziś – kto od 1850 r. brał udział w <b>pojedynku</b>, nie może pełnić urzędu."
},
{
"q": "Co w 2009 r. odkryli japońscy naukowcy o ludzkim ciele?",
"a": [
"Pachnie pomarańczami po 18:00",
"Świeci, tylko za słabo, by to zobaczyć",
"Szumi jak radio na falach UKF",
"Rano ma o 37 kości więcej"
],
"c": 1,
"f": "Człowiek naprawdę emituje <b>światło widzialne</b>, ale ok. tysiąc razy za słabe dla naszych oczu. Najmocniej świeci twarz – dosłownie promieniejesz."
},
{
"q": "O ile co roku oddala się od Ziemi Księżyc?",
"a": [
"O ok. 3,8 cm",
"O ok. 38 km",
"Wcale – stoi w miejscu",
"O ok. 1 metr"
],
"c": 0,
"f": "Księżyc ucieka od nas o ok. <b>3,8 cm rocznie</b> – mniej więcej w tempie rosnących paznokci. Powolne, ale konsekwentne rozstanie."
},
{
"q": "Co decyduje o tym, czy masz suchą, czy mokrą woskowinę w uszach?",
"a": [
"Ilość zjedzonego masła",
"Znak zodiaku",
"Jeden gen",
"Słuchanie głośnej muzyki"
],
"c": 2,
"f": "Typ woskowiny zależy od wariantu jednego <b>genu</b> (ABCC11). Nauka naprawdę bada wszystko, nawet to, co masz w uchu."
},
{
"q": "Która sieć w 2001 r. dostarczyła pizzę na Międzynarodową Stację Kosmiczną?",
"a": [
"Domino's",
"Telepizza",
"Pizza Hut",
"Da Grasso"
],
"c": 2,
"f": "<b>Pizza Hut</b> wysłała na ISS pizzę z salami, którą zjadł kosmonauta Jurij Usaczow. Dostawa trwała dłużej niż 30 minut."
},
{
"q": "Dlaczego niektóre średniowieczne szyby są grubsze u dołu?",
"a": [
"Szkło powoli spływa jak miód",
"Tak je wstawiano – szkło nie spływa",
"W kościołach grawitacja jest większa",
"Szklarz miał czkawkę"
],
"c": 1,
"f": "Szkło nie „cieknie” – takie szybki po prostu były <b>nierówne</b> i często wstawiano je grubszym brzegiem w dół. Na zauważalny spływ trzeba by czekać dłużej niż istnieje Wszechświat."
},
{
"q": "Gdzie lubi mieszkać ryba z rodziny karapowatych (ang. pearlfish)?",
"a": [
"W odbycie strzykwy",
"W uchu foki",
"W paszczy wieloryba",
"W zatopionej łodzi podwodnej"
],
"c": 0,
"f": "Ta ryba chowa się w <b>kloace strzykwy</b>, czyli ogórka morskiego, i ma tam schronienie oraz jedzenie. Mieszkanie z bardzo specyficznym wejściem."
},
{
"q": "Jak australijski żółw z rzeki Fitzroy oddycha pod wodą?",
"a": [
"Kloaką, czyli tyłkiem",
"Przez rurkę jak nurek",
"Skrzelami za uszami",
"Wcale, wstrzymuje oddech na rok"
],
"c": 0,
"f": "Ten żółw pobiera nawet 70% tlenu przez <b>kloakę</b> i może siedzieć pod wodą do trzech tygodni. Ksywka: żółw oddychający tyłkiem."
},
{
"q": "Czego brakuje dziobakowi?",
"a": [
"Funkcjonalnego żołądka",
"Dzioba",
"Futra",
"Ogona"
],
"c": 0,
"f": "Dziobak nie ma działającego <b>żołądka</b> – brakuje mu genów do enzymów trawiennych. Za to samce mają jadowe ostrogi. Zwierzę z zestawu „różne części”."
},
{
"q": "Ile dotknięć włosków potrzebuje muchołówka, żeby zamknąć pułapkę?",
"a": [
"Jednego",
"Dwóch",
"Dziesięciu",
"Musi usłyszeć bzyczenie"
],
"c": 1,
"f": "Muchołówka <b>liczy</b>: zamyka się po dwóch dotknięciach w ciągu ok. 20 sekund, a trawić zaczyna po kolejnych. Roślina z kalkulatorem."
},
{
"q": "Ile liści przez całe życie wypuszcza welwiczja przedziwna?",
"a": [
"Zwykle dwa",
"Ok. 200",
"Ponad milion",
"Zero, to kaktus"
],
"c": 0,
"f": "Welwiczja ma zwykle tylko <b>dwa liście</b>, które rosną przez całe jej życie – a może żyć nawet ok. 2000 lat. Minimalizm doskonały."
},
{
"q": "Z czego wyhodowano lepnicę sprzed ok. 32 tysięcy lat?",
"a": [
"Z owoców schowanych przez susły w zmarzlinie",
"Z nasion z egipskiej piramidy",
"Z zielnika Linneusza",
"Z ziarenek w bursztynie"
],
"c": 0,
"f": "Rosyjscy naukowcy wyhodowali roślinę z tkanek owoców, które <b>susły</b> schowały w norach na Syberii. Najlepiej zapomniany schowek w historii."
},
{
"q": "Z jaką prędkością drzewo Hura crepitans wystrzeliwuje nasiona?",
"a": [
"Ok. 2 km/h",
"Ok. 25 km/h",
"Ok. 250 km/h",
"Z prędkością światła"
],
"c": 2,
"f": "Dojrzałe owoce „drzewa dynamitowego” eksplodują i ciskają nasiona z prędkością ok. <b>250 km/h</b>. Lepiej nie robić pod nim pikniku."
},
{
"q": "Jak długo odmieniec jaskiniowy może przeżyć bez jedzenia?",
"a": [
"Tydzień",
"Miesiąc",
"Nawet do 10 lat",
"Ani dnia, to łasuch"
],
"c": 2,
"f": "Ten ślepy płaz z jaskiń krasowych Bałkanów potrafi wytrzymać bez jedzenia nawet <b>10 lat</b>. Mistrz świata w poście."
},
{
"q": "Za co przyznano Ig Nobla 2005 z dynamiki płynów?",
"a": [
"Za obliczenie ciśnienia przy kupie pingwina",
"Za zbadanie, czemu pingwinom marzną płetwy",
"Za wyścig pingwinów na lodzie",
"Za sprawdzenie, czy pingwiny pływają w kółko"
],
"c": 0,
"f": "Naukowcy policzyli <b>ciśnienie</b>, jakie powstaje w pingwinie, gdy ten strzela kupą poza gniazdo. Fizyka bywa bardzo przyziemna."
},
{
"q": "Jak, według nagrodzonego Ig Noblem badania, komunikują się śledzie?",
"a": [
"Pierdząc",
"Mrugając",
"Śpiewając",
"Esemesami"
],
"c": 0,
"f": "Śledzie najwyraźniej porozumiewają się, wypuszczając gaz przez odbyt – <b>pierdząc</b>. Nagroda Ig Nobla z biologii, 2004."
},
{
"q": "Jak naukowcy szacują wiek płetwala błękitnego?",
"a": [
"Po warstwach woskowiny w uszach",
"Po liczbie zębów",
"Po zmarszczkach na płetwie",
"Grzecznie pytają"
],
"c": 0,
"f": "Płetwalom co roku przybywa jasna i ciemna warstwa <b>woskowiny</b> w uszach, jak słoje w drzewie. Zębów zresztą nie mają."
},
{
"q": "Jak rogatnica (jaszczurka) broni się przed psem albo kotem?",
"a": [
"Strzyka krwią z oczu",
"Szczeka",
"Gra na harmonijce",
"Zmienia się w kamień"
],
"c": 0,
"f": "Rogatnica potrafi <b>strzyknąć krwią z kącików oczu</b> na ok. 1,5 m. Psom i kotom ta krew paskudnie smakuje."
},
{
"q": "Co powstaje, gdy krewetka pistoletowa trzaśnie szczypcami?",
"a": [
"Bąbel, który zapadając się, błyska światłem",
"Mała tęcza",
"Iskra elektryczna",
"Bańka mydlana"
],
"c": 0,
"f": "Trzask tworzy bąbel kawitacyjny, który przy zapadaniu daje huk i błysk <b>światła</b> (sonoluminescencję). Pierwsze znane zwierzę, które tak umie."
},
{
"q": "Dlaczego Walter Hunt wymyślił agrafkę w 1849 roku?",
"a": [
"Żeby spłacić dług 15 dolarów",
"Bo zgubił guzik na randce",
"Na zamówienie wojska",
"Na zakład z żoną"
],
"c": 0,
"f": "Musiał oddać koledze <b>15 dolarów</b>, więc wygiął drut w kilka godzin i sprzedał patent za 400. Dług spłacony, fortuna przegapiona."
},
{
"q": "Jak pierwotnie nazywała się siatkówka?",
"a": [
"Siatkonoga",
"Balonówka",
"Mintonette",
"Pacnij-ball"
],
"c": 2,
"f": "William Morgan nazwał ją w 1895 r. <b>Mintonette</b>. Na szczęście ktoś zauważył, że piłkę się głównie „wolejuje”."
},
{
"q": "Co oznaczała nazwa Wi-Fi, gdy agencja Interbrand wymyśliła ją w 1999 roku?",
"a": [
"Wielki Internet – Fajny Internet",
"Wireless Finland",
"Wiring Finished",
"Nic – miała brzmieć jak Hi-Fi"
],
"c": 3,
"f": "Nazwa była <b>chwytliwym słowem bez znaczenia</b>, rymującym się z Hi-Fi. Rozwinięcie „Wireless Fidelity” dorobiono później."
},
{
"q": "Jak jadło się Giandujot – przodka Nutelli z 1946 roku?",
"a": [
"Piło się go przez słomkę",
"Rozpuszczało się go w mleku",
"Wyciskało się go z tubki",
"Kroiło się go nożem w plastry"
],
"c": 3,
"f": "Pietro Ferrero zrobił z orzechów laskowych i odrobiny kakao twardy <b>blok do krojenia</b> na chleb. Smarowalna wersja przyszła później."
},
{
"q": "Co wynaleziono wcześniej: zapalniczkę czy zapałkę tarciową?",
"a": [
"Zapałkę, o ok. 100 lat",
"Zapalniczkę",
"Oba tego samego dnia",
"Zapałkę, ale tylko w Szwecji"
],
"c": 1,
"f": "Lampa-<b>zapalniczka</b> Döbereinera powstała w 1823 r., a zapałka tarciowa Walkera dopiero w 1826 r."
},
{
"q": "Który z tych wynalazków jest starszy od telefonu (1876)?",
"a": [
"Radio",
"Telewizor",
"Faks",
"Gramofon"
],
"c": 2,
"f": "Szkot Alexander Bain opatentował przesyłanie obrazów drutem już w 1843 r. <b>Faks</b> jest starszy od telefonu o ponad 30 lat."
},
{
"q": "Z jaką prędkością jechał Walter Arnold, gdy dostał pierwszy mandat za prędkość (1896)?",
"a": [
"Ok. 13 km/h",
"Ok. 3 km/h",
"Ok. 50 km/h",
"Ok. 120 km/h"
],
"c": 0,
"f": "Pędził 8 mil/h, czyli ok. <b>13 km/h</b>, przy limicie 2 mile/h. Ścigał go policjant… na rowerze."
},
{
"q": "Co zrobił Sylvan Goldman, gdy klienci nie chcieli używać jego wózków sklepowych?",
"a": [
"Dawał piwo do każdego wózka",
"Przemalował wózki na złoto",
"Zakazał noszenia koszyków",
"Zatrudnił aktorów udających klientów"
],
"c": 3,
"f": "Mężczyźni czuli się niemęsko, kobiety – jak z wózkiem dziecięcym. Goldman wynajął <b>fałszywych klientów</b>, żeby pokazali, że to modne."
},
{
"q": "Do czego służyła pierwsza piła łańcuchowa, wymyślona pod koniec XVIII wieku?",
"a": [
"Do pomocy przy trudnych porodach",
"Do strzyżenia owiec",
"Do cięcia lodu na jeziorach",
"Do krojenia sera"
],
"c": 0,
"f": "Dwaj szkoccy lekarze stworzyli ją jako narzędzie chirurgiczne do <b>trudnych porodów</b>. Do drewna przerobiono ją dużo później."
},
{
"q": "Co sprzedawał pierwszy automat na monety, opisany przez Herona z Aleksandrii?",
"a": [
"Wino",
"Oliwę z oliwek",
"Wodę święconą",
"Bilety do teatru"
],
"c": 2,
"f": "Wrzucało się monetę do świątynnego automatu i dostawało porcję <b>wody święconej</b>. Vending sprzed 2000 lat."
},
{
"q": "Dlaczego maraton ma dziwne 42,195 km?",
"a": [
"Tyle przebiegł koń posłańca",
"Tyle wynosi obwód Aten",
"Bo pomylono mile z kilometrami",
"Przez trasę w Londynie w 1908 r."
],
"c": 3,
"f": "Na igrzyskach w <b>Londynie 1908</b> trasę ułożono od zamku Windsor do mety przed lożą królewską. Ten dystans potem został na stałe."
},
{
"q": "Jak nazywała się Pepsi, zanim została Pepsi?",
"a": [
"Gaz-o-Brad",
"Fizzy Lizzy",
"Brad's Drink",
"Doctor Pep"
],
"c": 2,
"f": "Aptekarz Caleb Bradham nazwał ją skromnie <b>„Brad's Drink”</b>, czyli „Napój Brada”. Po 5 latach postawił na marketing."
},
{
"q": "Ile mniej więcej rośnie ananas, zanim da jeden owoc?",
"a": [
"2 tygodnie",
"2 miesiące",
"Ok. 2 lata",
"20 lat"
],
"c": 2,
"f": "Roślina potrzebuje około <b>półtora do dwóch lat</b> na jeden owoc. Szanuj tę puszkę."
}
]
];

const INSULTS=[
 "Jesteś baranem. Takim prawdziwym, z certyfikatem.",
 "Ty parówo! Nawet wombat by to wiedział, a on sra kostkami.",
 "Głąbie kapuściany, to było pytanie dla przedszkolaków!",
 "Matołek. Totalny, skończony matołek.",
 "Ja pierdzielę… Ochrona, wyprowadzić tego ciołka.",
 "Kurde, myślałem, że gorzej się nie da. Udało ci się, baranie.",
 "Masz w głowie przeciąg, parówo. Słychać, jak wieje.",
 "Gdyby głupota świeciła, byłbyś latarnią w Rozewiu, ty pusty łbie.",
 "Twoja mama dzwoniła. Mówi, że od zawsze byłeś trochę ciołek.",
 "Cholera jasna, ty serio tak myślisz? Wikipedia się popłakała.",
 "Do domu wracasz na piechotę, baranie. Na tramwaj cię nie stać.",
 "Barani łeb. Nawet szwagier by tego nie zawalił, a on myli lewo z prawem.",
 "Oklaski dla tej parówy! Za odwagę, bo za rozum nie ma za co.",
 "Ty niedorobiony kartoflu. Wstydź się przed babciami z widowni.",
 "Mózg ci się zawiesił czy w ogóle nie był podłączony, tłuku?",
];
const PRAISE=[
 "Udało ci się, parówo. Nie wiem jak, ale się udało.",
 "Ślepej kurze też się trafia ziarno, baranie.",
 "No proszę, ciołek jednak coś wie.",
 "Dobrze, kurde. Tylko się nie przyzwyczajaj, matołku.",
 "Poprawnie. Ale dalej jesteś baranem, tylko bogatszym.",
 "Podglądałeś w telefonie, parówo? Przyznaj się.",
 "Szczęście głupiego. A ty jesteś bardzo głupi, więc masz dużo szczęścia.",
 "Cholera, trafiłeś. Rzadko się to zdarza i nie lubię tego.",
];
const ASK_FINAL=[
 "Ostateczna odpowiedź, baranie? Masz minę jak szwagier, kiedy mówi „znam skrót”.",
 "Na pewno, parówo? Ręka ci się trzęsie jak galareta.",
 "Zaznaczasz to? Odważnie. Głupio jak cholera, ale odważnie.",
 "Ostateczna? Babcie z widowni kręcą głowami, ciołku…",
 "Ostateczna odpowiedź? Pamiętaj, nie oddajemy kasy za głupotę, matołku.",
];
const ASK_Q=[
 "Następne pytanie. Spróbuj tym razem użyć łba, baranie.",
 "Pytanie za {p}. Nie spiesz się, parówo, i tak polegniesz.",
 "Za {p}. Moja babcia odpowiedziałaby w sekundę. A nie żyje od 2009.",
 "Pytanie za {p}. Pocisz się jak parówka w wodzie. Dobrze.",
 "Grasz o {p}. Skup się, ciołku, jeśli wiesz, jak to się robi.",
];
const PHONE=[
 "Haloo?! … Kto? A, ty. Słuchaj, jestem na grillu u Mietka. … Co? Aha, pytanie. Ja bym brał <b>{X}</b>. Na sto procent. No, na sześćdziesiąt. Dobra, kończę, kiełbasa się pali!",
 "No siema szwagier! … Czekaj, przyciszę disco polo. … Słuchaj, to proste, oglądałem o tym na YouTubie. <b>{X}</b>. Albo to był film o kosmitach. Ale <b>{X}</b>!",
 "Halo, kto mówi? … Ty grasz w telewizji?! Ha ha ha! … Dobra, dobra. Żona mówi <b>{X}</b>, ja mówię to samo, bo inaczej będzie awantura.",
 "Słuchaj, nie wiem, ale się wypowiem. Mój kolega z budowy mówił kiedyś coś o tym… <b>{X}</b>. Wisisz mi flaszkę.",
 "Ło matko, nie dzwoń teraz, mecz leci! … No dobra… <b>{X}</b>! … GOOOL! … Co? A, pytanie. No mówię, <b>{X}</b>.",
];
const BABCIE=[
 "Babcia Halinka zagłosowała trzy razy, bo „pilot się zaciął”.",
 "Pani Jadzia z trzeciego rzędu głosowała na tę odpowiedź, która była najładniejsza.",
 "Połowa babć myślała, że to głosowanie na sołtysa.",
 "Babcie twierdzą, że za ich czasów takich pytań nie było.",
];
const CAT=[
 "Kot przeszedł po ekranie, usiadł na odpowiedzi <b>{X}</b>, a potem zrzucił ci kubek ze stołu.",
 "Kot spojrzał na ciebie z pogardą i położył łapę na <b>{X}</b>. Potem zaczął się myć.",
 "Kot zignorował pytanie przez 40 sekund, w końcu prychnął w stronę <b>{X}</b>.",
];
const END_LOSE=[
 "Wracasz do domu z kwotą gwarantowaną i resztką godności. Godność zostaje w studiu, baranie.",
 "Dzięki, parówo. Byłeś najgorszym uczestnikiem tego tygodnia, a jest dopiero wtorek.",
 "Następnym razem przyjdź z mózgiem, ciołku. Albo chociaż ze szwagrem.",
 "Spadaj, matołku. I nie wracaj, dopóki nie przeczytasz chociaż jednej książki.",
];


const NICKS=["baranie", "parówo", "ciołku", "matole", "głąbie", "tłuku", "bałwanie", "cymbale", "gamoniu", "łajzo", "pierdoło", "fujaro", "ofermo", "ćwoku", "bucu", "pajacu", "palancie", "buraku", "przygłupie", "lebiego", "niedojdo", "łamago", "safandułu", "ciamajdo", "dzbanie", "kmiocie", "jełopie", "półgłówku", "dupku", "sieroto", "mamałygo", "patafianie", "gapo", "matołku", "kartoflu", "debilu", "ty pało", "fajtłapo", "niemoto", "ty pustaku", "idioto", "kretynie", "imbecylu", "tumanie", "cepie", "ośle", "matołku jeden", "durniu", "głupku", "półmózgu", "tępaku", "pustogłowie", "łosiu", "barani łbie", "tłumoku"];
const TOWNS=["Zgniłochy","Pomyj","Pupek","Zgonu","Ryczywołu","Łysobyków","Dyszobaby","Zadupia","Pogubia Tylnego","Starych Juch"];
const TITLES=["Ciołek","Baran","Parówa","Dzban","Głąb","Matoł","Pierdoła","Burak","Łajza","Fujara"];
const EXTRA_INSULTS=[
 "Ty {N}! Zła odpowiedź jak cholera.",
 "Brawo, {N}. Właśnie przegrałeś z kotem, babciami i szwagrem jednocześnie.",
 "W mordę jeża, {N}, ty serio to zaznaczyłeś?",
 "Kurde balans, {N}… Taki tępy, że aż świeci.",
 "Dzwonili z {T}. Mówią, że nawet u nich by to wiedzieli, {N}.",
 "Tobie to nawet GPS by nie pomógł, {N}. Zgubiłeś się w czterech odpowiedziach.",
 "Do diabła, {N}! Zjadłeś mózg na śniadanie?",
 "Masz IQ temperatury pokojowej, {N}. W zimie.",
 "{N}, ty jesteś jak dzban: pusty w środku i głośny, jak się w niego stuknie.",
 "Gratuluję, {N}. Twój pradziadek przewraca się w grobie.",
 "Ty {N} z {T}! Wynocha ze studia!",
 "Nawet wombat by się zawstydził, {N}. A on sra kostkami.",
 "Ty debilu! To pytanie rozwiązałby chomik po narkozie.",
 "Idiota. Po prostu idiota. Nie mam nic więcej do dodania.",
 "Kretyn roku, proszę państwa! Oklaski dla kretyna!",
 "Imbecylu, przecież to było w każdym kalendarzu z kiosku!",
 "Ty durniu, nawet szwagier po trzech piwach by to wiedział.",
 "Tępak. Tępy jak nóż do masła w barze mlecznym.",
 "Ty tumanie, gdzie ty masz mózg? W kieszeni od kurtki zostawiłeś?",
 "Debil z dyplomem. Szacunek za konsekwencję.",
 "Idioto, babcie z widowni się za ciebie wstydzą, a jedna już płacze.",
 "Ty ośle! Ośle dardanelski! Ręce opadają.",
 "{N}, z twoją wiedzą to możesz najwyżej przegrać w kółko i krzyżyk z kurą.",
 "Kretynie, ten błąd przejdzie do historii telewizji. W dziale „kompromitacje”.",
];
const EXTRA_PRAISE=[
 "No proszę, {N}, trafiłeś. Pewnie przez przypadek.",
 "Udało ci się, {N}. Zapisz sobie datę, bo to się więcej nie powtórzy.",
 "Dobrze, {N}. W {T} by ci postawili pomnik.",
 "Kurde, {N}, ty coś jednak wiesz? Szok.",
];
