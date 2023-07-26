function sumStrings(a,b) { 

    if (a.length < 1) a = '0';
    if (b.length < 1) b = '0';

    let aux = 0;
    let result = '';
    const pattern = /^0+/;
    let count = null;

    // Solo si son número muy grandes y comienzan con ceros
    if (a > Number.MAX_SAFE_INTEGER) {
        if (pattern.test(a)) {
            for (let i = 0; i < a.length; i++) {
                if(a[i] === '0' && a[i+1] !== '0' && count === null) {
                    count = i+1;
                }
            }
            a = a.slice(count);
            count = null;
        }
    }

    if (b > Number.MAX_SAFE_INTEGER) {
        if (pattern.test(b)) {
            for (let i = 0; i < b.length; i++) {
                if(b[i] === '0' && b[i+1] !== '0' && count === null) {
                    count = i+1;
                }
            }
            b = b.slice(count);
            count = null;
        }
    }

    // Números no tan grandes que comienzan con ceros
    if (pattern.test(a)) {
        a = parseInt(a).toString();
    }
    if (pattern.test(b)) {
        b = parseInt(b).toString();
    }

    let maxLength = Math.max(a.length, b.length);
    a = a.padStart(maxLength,'0');
    b = b.padStart(maxLength,'0');

    for (let i = maxLength - 1; i >= 0; i--) {
        let sum1 = parseInt(a[i]); 
        let sum2 = parseInt(b[i]); 
        let suma = sum1 + sum2 + aux; 

        aux = Math.floor(suma / 10); // 0
        result = (suma % 10) + result; // 9
    }

    if (aux) {
        result = aux + result;
    }

    return result;

}


console.log(sumStrings("123","456")); // 579
console.log(sumStrings("00103","08567")); // 8670
console.log(sumStrings("896793159932288815397923407214","01932377812796854937375510402")); // 898725537745085670335298917616