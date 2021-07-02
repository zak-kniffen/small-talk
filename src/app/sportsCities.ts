let CityObjectBuilder = function(this: any, name:string, nfl:string[], mlb:string[], nba:string[], nhl:string[], mls:string[], zip:string){
  this.name = name;
  this.nfl = nfl;
  this.mlb = mlb;
  this.nba = nba;
  this.nhl = nhl;
  this.mls = mls;
  this.zip = zip;
}

let NewYork = CityObjectBuilder("New York", ["Giants", "Jets"], ["Yankees", "Mets"], ["Knicks", "Nets"], ["Rangers", "Islanders", "Devils"], ["Red Bulls"], "10001");
let LosAngeles = CityObjectBuilder("Los Angeles", ["Rams","Chargers"],["Dodgers","Angels"],["Lakers","Clippers"],["Kings","Ducks"],["Galaxy"], "90001");
let Chicago = CityObjectBuilder("Chicago", ["Bears"],["Cubs","White Sox"],["Bulls"],["Blackhawks"],["Fire"], "60007");
let Dallas = CityObjectBuilder("Dallas", ["Cowboys"],["Rangers"],["Mavericks"],["Stars"],[],"75001");
let Houston = CityObjectBuilder("Houston",["Texans"],["Astros"],["Rockets"],[],["Dynamo"],"77001");
let SanFrancisco = CityObjectBuilder("San Francisco", ["49ers"],["Giants","Athletics"],["Warriors"],["Sharks"],["Earthquakes"],"94016");
let Washington = CityObjectBuilder("Washington D.C.",["Redskins"],["Nationals"],["Wizards"],["Capitals"],["D.C. United"], "20001");
let Philadelphia = CityObjectBuilder("Philadelphia", ["Eagles"],["Phillies"],["76ers"],["Flyers"],["Union"],"19019");
let Miami = CityObjectBuilder("Miami", ["Dolphins"],["Marlins"],["Heat"],["Panthers"],["Inter Miami CF"],"33101");
let Toronto = CityObjectBuilder("Toronto", [],["Blue Jays"],["Raptors"],["Maple Leafs"],["Toronto FC"], "M4B 1B4");
let Atlanta = CityObjectBuilder("Atlanta",["Falcons"],["Braves"],["Hawks"],[],["United FC"], "30301");
let Boston = CityObjectBuilder("Boston",["Patriots"],["Red Sox"],["Celtics"],["Bruins"],["Revolution"], "02111");
let Phoenix = CityObjectBuilder("Phoenix",["Cardinals"],["Diamondbacks"],["Suns"],["Coyotes"],[], "85001");
let Detroit = CityObjectBuilder("Detroit", ["Lions"],["Tigers"],["Pistons"],["Red Wings"],[], "48127");
let Montreal = CityObjectBuilder("Montreal",[],[],[],["Canadiens"],["Impact"], "H1G");
let Seattle = CityObjectBuilder("Seattle",["Seahawks"],["Mariners"],[],[],["Sounders"], "98101");
let MinneapolisSaintPaul = CityObjectBuilder("Minneapolis-Saint Paul",["Vikings"],["Twins"],["Timberwolves"],["Wild"],["United FC"], "55111");
let SanDiego = CityObjectBuilder("San Diego", [],["Padres"],[],[],[], "91945");
let Tampa = CityObjectBuilder("Tampa",["Buccaneers"],["Rays"],[],["Lightning"],[], "33601");
let Denver = CityObjectBuilder("Denver",["Broncos"],["Rockies"],["Nuggets"],["Avalanche"],["Rapids"], "80014");
let SaintLouis = CityObjectBuilder("Saint Louis", [],["Cardinals"],[],["Blues"],[], "63101");
let Baltimore = CityObjectBuilder("Baltimore",["Ravens"],["Orioles"],[],[],[],"21201");
let Charlotte = CityObjectBuilder("Charlotte",["Panthers"],[],["Hornets"],[],[],"28105");
let Vancouver = CityObjectBuilder("Vancouver",[],[],[],["Canucks"],["Whitecaps"],"V5H 3Z7");
let Orlando = CityObjectBuilder("Orlando",[],[],["Magic"],[],["Orlando City"],"32789");
let SanAntonio = CityObjectBuilder("San Antonio",[],[],["Spurs"],[],[],"78006");
let Portland = CityObjectBuilder("Portland",[],[],["Trailblazers"],[],["Timbers"],"97035");
let Pittsburgh = CityObjectBuilder("Pittsburgh",["Steelers"],["Pirates"],[],["Penguins"],[],"15106");
let Sacramento = CityObjectBuilder("Sacramento",[],[],["Kings"],[],[],"94203");
let Cincinnati = CityObjectBuilder("Cincinnati",["Bengals"],["Reds"],[],[],["FC Cincinnati"],"41073");
let LasVegas = CityObjectBuilder("Las Vegas",["Raiders"],[],[],["Golden Knights"],[],"88901");
let KansasCity = CityObjectBuilder("Kansas City",["Chiefs"],["Royals"],[],[],["Sporting KC"],"64030");
let Cleveland = CityObjectBuilder("Cleveland",["Browns"],["Indians"],["Cavaliers"],[],[],"44101");
let Columbus = CityObjectBuilder("Columbus",[],[],[],["Blue Jackets"],["Crew SC"],"43004");
let Indianapolis = CityObjectBuilder("Indianapolis",["Colts"],[],["Pacers"],[],[],"46183");







let citiesArray = [NewYork,LosAngeles,Chicago,Dallas,Houston,SanFrancisco,Washington,Philadelphia,Miami,Toronto,Atlanta,Boston,Phoenix,Detroit,Montreal,Seattle,MinneapolisSaintPaul,SanDiego,Tampa,Denver,SaintLouis,Baltimore,Charlotte,Vancouver,Orlando,SanAntonio,Portland,Pittsburgh,Sacramento,Cincinnati,LasVegas,KansasCity,Cleveland,Columbus,Indianapolis];

module.exports = citiesArray;
