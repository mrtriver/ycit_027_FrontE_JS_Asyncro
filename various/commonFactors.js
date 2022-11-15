
    var commonFactors = function(a, b) {
        var factors = [];
        for (var i = 1; i <= a; i++) {
            a % i === 0 && b % i === 0? factors.push(i): null;
        }
        return factors.length;
    
    
    };


console.log(commonFactors(12,6));
