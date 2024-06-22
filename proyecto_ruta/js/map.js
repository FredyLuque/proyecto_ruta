var map = L.map('map').
setView([-17.99143, -70.24064], 
17);
 
L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',{ maxZoom: 20, subdomains:['mt0','mt1','mt2','mt3'] }).addTo(map);

L.control.scale().addTo(map);
L.marker([-17.988654697750096, -70.23807610116168], {draggable: true}).addTo(map);
var circle = L.circle([-17.988737677018996, -70.23812920617935], {
    color: '#060606',
    fillColor: '#E8DF17',
    fillOpacity: 0.1,
    radius: 5
}).addTo(map);

var latlngs = [
    [-17.994343799567858, -70.24497313463249],
    [-17.993394819761505, -70.24491949045353],
    [-17.99295094035777, -70.2445761677081],
    [-17.992889715524782, -70.2436052080687],
    [-17.992864205171426, -70.24322433439801],
    [-17.992517263999606, -70.2422748324302],
    [-17.991430517327824, -70.24059576952475],
    [-17.989364149664326, -70.237817001054],
    [-17.988833522951907, -70.23825688332157],
    [-17.9887978076351, -70.23821933239628]
];
var polyline = L.polyline(latlngs, {color: 'red'}).addTo(map);