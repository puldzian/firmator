// TEN PLIK ZAWIERA ELEMENTY SKŁADOWE, KTÓRE BĘDĄ LOSOWANE PRZEZ MASZYNĘ LOSUJĄCĄ

// 100 najpopularniejszych imion w Polsce
var imionaWszystkie = [ // eslint-disable-line no-unused-vars
    "Anna", "Maria", "Piotr", "Krzysztof", "Kasia", "Andrzej", "Gosia", "Jan", "Aga", "Stach", "Basia", "Tomasz", "Krystyna", "Paweł", "Ewa", "Marcin", "Ela", "Michał", "Zofia", "Marek", "Teresa", "Greg", "Magda", "Józef", "Asia", "Łuk", "Janina", "Jana", "Adam", "Monika", "Monia", "Zbig", "Danuta", "Jerzy", "Jadwiga", "Jadzia", "Tadeusz", "Aleksandra", "Ola", "Mateusz", "Halina", "Hela", "Dariusz", "Darek", "Irena", "Mariusz", "Beata", "Wojciech", "Wojtek", "Marta", "Ryszard", "Dorota", "Jakub", "Kuba", "Helena", "Henryk", "Henio", "Karolina", "Robert", "Grażyna", "Rafał", "Jolanta", "Kazimierz", "Kazik", "Iwona", "Jacek", "Marianna", "Maciej", "Natalia", "Kamil", "Bożena", "Janusz", "Stanisława", "Staszka", "Marian", "Justyna", "Mirosław", "Mirek", "Paulina", "Jarosław", "Jarek", "Urszula", "Ula", "Sławomir", "Sławek", "Alicja", "Dawid", "Renata", "Wiesław", "Sylwia", "Artur", "Arti", "Agata", "Roman", "Romek", "Aneta", "Damian", "Patrycja", "Pati", "Przemysław", "Przemo", "Przemek", "Przemko", "Izabela", "Iza", "Sebastian", "Seba", "Ewelina", "Daniel", "Julia", "Władysław", "Władek", "Wanda", "Zdzisław", "Zdzichu", "Zdziś", "Marzena", "Patryk", "Wiesława", "Wiesia", "Bartosz", "Bartek", "Weronika", "Wera", "Edward", "Wiktoria", "Wiki", "Mieczysław", "Mietek", "Klaudia", "Leszek"
],
    imionaZenskie = [ // eslint-disable-line no-unused-vars
        "Anna", "Maria", "Kasia", "Gosia", "Aga", "Basia", "Krystyna", "Ewa", "Ela", "Zofia", "Teresa", "Magda", "Asia", "Janina", "Jana", "Monika", "Monia", "Danuta", "Jadwiga", "Jadzia", "Aleksandra", "Ola", "Halina", "Hela", "Irena", "Beata", "Marta", "Dorota", "Helena", "Karolina", "Grażyna", "Jolanta", "Iwona", "Marianna", "Natalia", "Bożena", "Staszka", "Justyna", "Paulina", "Urszula", "Ula", "Alicja", "Renata", "Sylwia", "Agata", "Aneta", "Patrycja", "Izabela", "Iza", "Ewelina", "Julia", "Wanda", "Marzena", "Wiesława", "Wiesia", "Weronika", "Wera", "Wiktoria", "Klaudia"
    ],
    koncowkaZenska = [ // eslint-disable-line no-unused-vars
        "ks", "m", "n", "x", "bud", "dex", "deks", "dent", "o", "farm", "graf", "mo", "kom", "lex", "log", "mag", "mark", "mech", "met", "mex", "mir", "model", "mont", "nik", "pasz", "pol", "rol", "studio", "te", "tex", "tech", "trans", "weks", "zer"
    ],
    poczatek = [ // eslint-disable-line no-unused-vars
        "Aa", "Ab", "Abi", "Acc", "Ad", "Ada", "Agro", "Akwa", "Alko", "All", "Amber", "Anio", "Anno", "Anty", "Archi", "Argo", "Art", "Astro", "Audio", "Auto", "Baj", "Bar", "Bell", "Bet", "Beton", "Bi", "Bial", "Biuro", "Bitu", "Blach", "Bruk", "Bud", "Budi", "Budo", "Can", "Car", "Center", "Centro", "Ceram", "Chem", "Chemo", "Com", "Comp", "Cosmo", "Cyber", "Cyklo", "Czech", "Dach", "Dan", "Dar", "Deco", "Deli", "Delta", "Dom", "Drew", "Drog", "Druk", "Drut", "Eco", "Edi", "Eko", "Eks", "El", "Elektro", "Energo", "Ergo", "Euro", "Ex", "Farm", "Firma", "For", "Form", "Foto", "Frukto", "Gastro", "Gaz", "Gazo", "Geo", "Giga", "Gold", "Graf", "Greg", "Gum", "Handlo", "Hali", "Herba", "Hurt", "Hydro", "Info", "Inst", "Instal", "In", "Inter", "Inwest", "Izo", "Janusz", "Jadło", "Jar", "Jurek", "Kabel", "King", "Kabel", "Kablo", "Klima", "Krys", "Ksero", "Kwiat", "Lech", "Lider", "Łuk", "Mak", "Makro", "Mar", "Mat", "Mart", "Max", "Meblo", "Med", "Medi", "Mega", "Metal", "Mikro", "Miro", "Moto", "Multi", "Nafto", "Natur", "Net", "Nova", "Nowa", "Okno", "Opon", "Petro", "Peklo", "Plast", "Plas", "Płyt", "Pol", "Polo", "Poli", "Pre", "Pro", "Pul", "Puldo", "Rafa", "Remo", "Remont", "Sebo", "Siat", "Sław", "Sol", "Spaw", "Stal", "Stol", "Super", "Szaf", "Szkło", "Szwagro", "Tech", "Techno", "Tele", "Termo", "Tex", "Tom", "Top", "Trans", "Uni", "Wam", "Węglo", "Wielo", "Wol", "Zam", "Zby", "Zbych", "Złom", "Zoo"
    ],
    srodek = [ // eslint-disable-line no-unused-vars
        "a", "ab", "al", "bor", "bos", "but", "chem", "col", "czar", "dup", "e", "eco", "eko", "euro", "gips", "gum", "i", "int", "inw", "farm", "fil", "filc", "ko", "kom", "kosm", "las", "li", "mar", "me", "med", "mot", "o", "per", "plast", "pol", "serw", "tech", "ti", "ty", "u", "wit", "y"
    ],
    koncowka = [ // eslint-disable-line no-unused-vars
        "aks", "am", "an", "ax", "bud", "but", "dex", "deks", "dent", "eks", "eo", "ex", "farm", "gips", "graf", "imo", "in", "kom", "lex", "log", "mag", "mark", "mech", "met", "mex", "mir", "model", "mont", "o", "onik", "pasz", "pol", "rol", "studio", "te", "tek", "tex", "tech", "ten", "trans", "ux", "uks", "weks", "zer"
    ];

