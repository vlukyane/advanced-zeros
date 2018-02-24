module.exports = function getZerosCount(n, b) {
    var j = b, ans = n, p = 0, res = 0, k = 0;
    for (var i = 2; i <= b; i++){
        if (j % i === 0){
            p = 0;
            while (j % i === 0){
                p++;
                j /=i;
            }
            res = 0, k = n;
            while (k / i > 0){
                res += Math.floor(k / i);
                k = Math.floor(k / i);
            }
            ans = Math.min(ans, Math.floor(res / p));
        }
    }
    return ans;
};

//getZerosCount(60559525, 147);