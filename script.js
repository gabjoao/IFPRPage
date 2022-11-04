/*Script pego do site oficial do IFPR https://www.ifpr.edu.br/conheca-os-campi/*/

var mymap = L.map('mapa-campi').setView([-24.600, -51.000], 7);
var OpenStreetMap_Mapnik = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,    
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});
OpenStreetMap_Mapnik.addTo(mymap);

    var arapongas= L.marker([-23.403782, -51.426511]).addTo(mymap);
    arapongas.bindPopup("<h5>IFPR Arapongas</h5><p>R. Surucuá Açu, 321 – Vila Araponguinha, Arapongas – PR, 86705-590<br><br><i class='fas fa-laptop'></i> <a href='https://arapongas.ifpr.edu.br/'>arapongas.ifpr.edu.br</a></p>");
    var assis= L.marker([-24.402776, -53.507340]).addTo(mymap);
    assis.bindPopup("<h5>IFPR Assis Chateaubriand</h5><p>Av. Cívica, 475 – Centro Cívico | Assis Chateaubriand – Paraná<br><br><i class='fas fa-laptop'></i> <a href='https://assis.ifpr.edu.br/'>assis.ifpr.edu.br</a></p>");
    var astorga= L.marker([-23.223775, -51.662893]).addTo(mymap);
    astorga.bindPopup("<h5>IFPR Astorga</h5><p>Rodovia PR 454, Contorno Norte, Astorga – PR, 86730-000<br><br><i class='fas fa-laptop'></i> <a href='https://astorga.ifpr.edu.br/'>astorga.ifpr.edu.br</a></p>");
    var barracao= L.marker([-26.233034, -53.641106]).addTo(mymap);
    barracao.bindPopup("<h5>IFPR Barracão</h5><p>BR 163, n° 2115,  Bairro Industrial, Barracão – PR – CEP 85700-000<br><br><i class='fas fa-laptop'></i> <a href='https://barracao.ifpr.edu.br/'>barracao.ifpr.edu.br</a></p>");
    var campolargo= L.marker([-25.456403, -49.522826]).addTo(mymap);
    campolargo.bindPopup("<h5>IFPR Campo Largo</h5><p>Rua Engenheiro Tourinho, 829 – Vila Solene | Campo Largo – PR | CEP: 83607-140<br><br><i class='fas fa-laptop'></i> <a href='https://campolargo.ifpr.edu.br/'>campolargo.ifpr.edu.br</a></p>");
    var capanema= L.marker([-25.683594, -53.786923]).addTo(mymap);
    capanema.bindPopup("<h5>IFPR Capanema</h5><p>Rua Cariris nº 750 Bairro Santa Bárbara – CEP 85760-000 Capanema PR<br><br><i class='fas fa-laptop'></i> <a href='https://capanema.ifpr.edu.br/'>capanema.ifpr.edu.br</a></p>");
    var cascavel= L.marker([-24.916539, -53.417612]).addTo(mymap);
    cascavel.bindPopup("<h5>IFPR Cascavel</h5><p>Avenida das Pombas, 2020 – Floresta | Cascavel – Paraná | CEP. 85814-800<br><br><i class='fas fa-laptop'></i> <a href='https://cascavel.ifpr.edu.br/'>cascavel.ifpr.edu.br</a></p>");
    var colombo= L.marker([-25.326793, -49.218572]).addTo(mymap);
    colombo.bindPopup("<h5>IFPR Colombo</h5><p>Rua Antonio Chemin, 28, São Gabriel | Colombo – PR | CEP 8340-3515<br><br><i class='fas fa-laptop'></i> <a href='https://colombo.ifpr.edu.br/'>colombo.ifpr.edu.br</a></p>");
    var coronelvivida= L.marker([-25.984245, -52.537356]).addTo(mymap);
    coronelvivida.bindPopup("<h5>IFPR Coronel Vivida</h5><p>PR 562, Flor da Serra –  Coronel Vivida Paraná. 85.550-000<br><br><i class='fas fa-laptop'></i> <a href='https://coronelvivida.ifpr.edu.br/'>coronelvivida.ifpr.edu.br</a></p>");
    var curitiba= L.marker([-25.440000, -49.261631]).addTo(mymap);
    curitiba.bindPopup("<h5>IFPR Curitiba</h5><p>R. João Negrão, 1285 – Rebouças, Curitiba – PR, 80230-150<br><br><i class='fas fa-laptop'></i> <a href='https://curitiba.ifpr.edu.br/'>curitiba.ifpr.edu.br</a></p>");
    var foz= L.marker([-25.504394, -54.576840]).addTo(mymap);
    foz.bindPopup("<h5>IFPR Foz do Iguaçu</h5><p> Avenida Araucária, 780, Bairro Vila A - Foz do Iguaçu – Paraná– CEP: 85860-000<br><br><i class='fas fa-laptop'></i> <a href='https://foz.ifpr.edu.br/'>foz.ifpr.edu.br</a></p>");
    var goioere= L.marker([-24.183720, -53.047328]).addTo(mymap);
    goioere.bindPopup("<h5>IFPR Goioerê</h5><p>Rodovia Luiz Dechiche, s/n, CEP 87360-000<br><br><i class='fas fa-laptop'></i> <a href='https://goioere.ifpr.edu.br/'>goioere.ifpr.edu.br</a></p>");
    var jacarezinho= L.marker([-23.139305, -49.971355]).addTo(mymap);
    jacarezinho.bindPopup("<h5>IFPR Jacarezinho</h5><p>Avenida Dr. Tito nº: 801 – Jardim Panorama | CEP 86.400-000 – Jacarezinho/PR<br><br><i class='fas fa-laptop'></i> <a href='https://jacarezinho.ifpr.edu.br/'>jacarezinho.ifpr.edu.br</a></p>");
    var jaguariaiva= L.marker([-24.263458, -49.719379]).addTo(mymap);
    jaguariaiva.bindPopup("<h5>IFPR Jaguariaíva</h5><p>Av. Eloa Martins Passos Felix – Rod. 151 Km 213,7  | Jaguariaíva – PR – Brasil | CEP 84200-000<br><br><i class='fas fa-laptop'></i> <a href='https://jaguariaiva.ifpr.edu.br/'>jaguariaiva.ifpr.edu.br</a></p>");
    var irati= L.marker([-25.492147, -50.635903]).addTo(mymap);
    irati.bindPopup("<h5>IFPR Irati</h5><p>Rua Pedro Koppe, 100 – Vila Matilde – 2104 0200<br><br><i class='fas fa-laptop'></i> <a href='https://irati.ifpr.edu.br/'>irati.ifpr.edu.br</a></p>");
    var ivaipora= L.marker([-24.253135, -51.714626]).addTo(mymap);
    ivaipora.bindPopup("<h5>IFPR Ivaiporã</h5><p>Rua Max Arthur Greipel, nº 505 – Parque Industrial  – Ivaiporã/PR<br><br><i class='fas fa-laptop'></i> <a href='https://ivaipora.ifpr.edu.br/'>ivaipora.ifpr.edu.br</a></p>");
    var londrina= L.marker([-23.308842, -51.176383]).addTo(mymap);
    londrina.bindPopup("<h5>IFPR Londrina</h5><p>R. João XXIII, 600 - Judith, Londrina - PR, 86060-370<br><br><i class='fas fa-laptop'></i> <a href='https://londrina.ifpr.edu.br/'>londrina.ifpr.edu.br</a></p>");
    var palmas= L.marker([-26.511760, -51.984939]).addTo(mymap);
    palmas.bindPopup("<h5>IFPR Palmas</h5><p>Av. Bento Munhoz da Rocha Neto S/N, Trevo da Codapar – PRT-280. CEP: 85555-000<br><br><i class='fas fa-laptop'></i> <a href='https://palmas.ifpr.edu.br/'>palmas.ifpr.edu.br</a></p>");
    var paranagua= L.marker([-25.585408, -48.564884]).addTo(mymap);
    paranagua.bindPopup("<h5>IFPR Paranaguá</h5><p>Rua Antonio Carlos Rodrigues,  n.º 453 – Porto Seguro – CEP 83215-750<br><br><i class='fas fa-laptop'></i> <a href='https://paranagua.ifpr.edu.br/'>paranagua.ifpr.edu.br</a></p>");
    var paranavai= L.marker([-23.054261, -52.454326]).addTo(mymap);
    paranavai.bindPopup("<h5>IFPR Paranavaí</h5><p>Rua José Felipe Tequinha, 1400 – Jardim das Nações | Paranavaí – PR | CEP 87703-536<br><br><i class='fas fa-laptop'></i> <a href='https://paranavai.ifpr.edu.br/'>paranavai.ifpr.edu.br</a></p>");
    var pinhais= L.marker([-25.424213, -49.163152]).addTo(mymap);
    pinhais.bindPopup("<h5>IFPR Pinhais</h5><p>Rua Humberto de Alencar Castelo Branco, 1575 Jardim Amélia – Pinhais – PR | CEP 83330-200<br><br><i class='fas fa-laptop'></i> <a href='https://pinhais.ifpr.edu.br/'>pinhais.ifpr.edu.br</a></p>");
    var pitanga= L.marker([-24.743796, -51.756881]).addTo(mymap);
    pitanga.bindPopup("<h5>IFPR Pitanga</h5><p>Rua José de Alencar, 1.080 – Vila Planalto – CEP 85.200-000<br><br><i class='fas fa-laptop'></i> <a href='https://pitanga.ifpr.edu.br/'>pitanga.ifpr.edu.br</a></p>");
    var pontagrossa= L.marker([-25.049815, -50.132349]).addTo(mymap);
    pontagrossa.bindPopup("<h5>IFPR Ponta Grossa</h5><p>Rua Dr. Washington Subtil Chueire, 3280 – Jardim Carvalho – CEP: 84.017-220<br><br><i class='fas fa-laptop'></i> <a href='https://pontagrossa.ifpr.edu.br/'>pontagrossa.ifpr.edu.br</a></p>");
    var quedasdoiguacu= L.marker([-25.433731, -52.900530]).addTo(mymap);
    quedasdoiguacu.bindPopup("<h5>IFPR Quedas do Iguaçu</h5><p>Rua, Marginal Imbirama, 300 - linha tapuí, Quedas do Iguaçu - PR, 85460-000<br><br><i class='fas fa-laptop'></i> <a href='https://quedasdoiguacu.ifpr.edu.br/'>quedasdoiguacu.ifpr.edu.br</a></p>");
    var telemaco= L.marker([-24.320782, -50.658159]).addTo(mymap);
    telemaco.bindPopup("<h5>IFPR Telêmaco Borba</h5><p>Rodovia PR 160 – km 19,5 – Jardim Bandeirantes – Telêmaco Borba PR | CEP 84.269-090<br><br><i class='fas fa-laptop'></i> <a href='https://telemaco.ifpr.edu.br/'>telemaco.ifpr.edu.br</a></p>");
    var umuarama= L.marker([-23.806415, -53.321700]).addTo(mymap);
    umuarama.bindPopup("<h5>IFPR Umuarama</h5><p>Rodovia PR 323, KM 310 – Parque Industrial – Umuarama PR | CEP 87507-014<br><br><i class='fas fa-laptop'></i> <a href='https://umuarama.ifpr.edu.br/'>umuarama.ifpr.edu.br</a></p>");
    var uniao= L.marker([-26.228191, -51.048937]).addTo(mymap);
    uniao.bindPopup("<h5>IFPR União da Vitória</h5><p>Av. Paula Freitas, 2800,  Bairro São Braz – CEP 84603-264<br><br><i class='fas fa-laptop'></i> <a href='https://uniao.ifpr.edu.br/'>uniao.ifpr.edu.br</a></p>");