function add(string){
    let numbers = string.split('+');
    let result = parseInt(numbers[0]) + parseInt(numbers[1]);
    return result;
}
console.log(add('1+2'));

function flat(loshu){
    let result = loshu[0][0].concat(loshu[0][1]);
    console.log(result);
    }

    flat([[4,9,2],[3,5,7]]);