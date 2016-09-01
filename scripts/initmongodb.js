
var dbconn = new Mongo().getDB("bugdb");

dbconn.bugs.remove({});

dbconn.bugs.insert([{status:"open", priority:"P1", owner:"Tman", title:"App crashes upon opening5.3"},
{status:"open", priority:"P2", owner:"TmanQ", title:"App crashes upon close"}]);
asdf
