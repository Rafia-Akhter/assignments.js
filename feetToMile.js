var feet = [1000,5000,50000];
console.log(feet);
function feetToMile(feet){
    var mile = feet/5280;
    return mile;
}
var firstmile =feetToMile ([1000]);
console.log(firstmile);

var secondmile = feetToMile([5000]);
console.log(secondmile);

var thirdmile = feetToMile([50000]);
console.log(thirdmile);