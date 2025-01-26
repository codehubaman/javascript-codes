const accountId = 33
let accountEmail = "amanpatel@gmail.com"
var accountPassword = "12345"
accountCity = "Indore"
let accountState;

// accountId = 2 // not allowed


accountEmail = "aman34@gmail.com"
accountPassword = "4454"
accountCity = "Bhopal"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])