function tinyFriend(names){
    var little = names[0];
    for (var i = 0; i < names.length; i++) {
        var currentnames = names[i];
        if(currentnames.length < little.length){
            little = currentnames;
        }
        }
        return little;
}
var littlenames = tinyFriend(['Ashraf','Sharif','Rumana','Rafiq','Rita','Faujia']);
console.log(littlenames);