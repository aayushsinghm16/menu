var marray = [
    [1, 3, 5, 7],
    [2, 4, 8, 15],
    [0, 9, 10]
];

function mergeKarray(arr) {
    var com = [],
        res = [],
        size = 0;
    for (var i = 0; i < arr.length; i++) {
        com.push(arr[i][0]);
        size += arr[i].length;
    }
    var i = 0,
        j = 1;
    var k = 0;
    while (k < size) {
        var min = Math.min(...com);
        if (k < size - arr.length) {
            if(!arr[i][j])
            {
                i++;
                size = size+1;
            }else{
            res.push(min)
            com.splice(com.indexOf(min), 1, arr[i][j]);

            if (i == arr.length - 1) {
                j++;
                i = 0
            } else {
                i++;
            }
            }
            
        } else {
            res.push(min);
            com.splice(com.indexOf(min), 1)
        }

        k++;
    }
    console.log(res)
}
mergeKarray(marray);