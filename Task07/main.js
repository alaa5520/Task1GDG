//////////////////////////////////////A//////////////////////////
function absoluteSummation(n, arr) {
    let sum = 0;
    for (let i = 0; i < n; i++) {
        sum += arr[i];
    }
    console.log(Math.abs(sum));
}


absoluteSummation(4, [7, 2, 1, 3]); 


absoluteSummation(3, [-1, 2, -3]); 
/////////////////////////////////////////////////////////////////////////B///////
function searchElement(n, arr, x) {
    for (let i = 0; i < n; i++) {
        if (arr[i] === x) {
            console.log(i);
            return;
        }
    }
    console.log(-1);
}


searchElement(3, [3, 0, 1], 0);     
searchElement(5, [1, 3, 0, 4, 5], 10); 
searchElement(4, [2, 3, 2, 1], 2);     
/////////////////////////////////////////////////////c///////////////////////
function replaceArray(n, arr) {
    let result = arr.map(num => {
        if (num > 0) return 1;
        if (num < 0) return 2;
        return 0;
    });

    console.log(result.join(" "));
}


replaceArray(5, [1, -2, 0, 3, 4]); 
///////////////////////////////////////////////////////D////////////////////
function printPositions(n, arr) {
    for (let i = 0; i < n; i++) {
        if (arr[i] <= 10) {
            console.log(`A[${i}] = ${arr[i]}`);
        }
    }
}


printPositions(5, [1, 2, 100, 0, 30]);

///////////////////////////////////////////////////////////E//////////////////////
function editArray(n, k, arr) {
    
    let filtered = arr.filter(x => x <= 100);
 
    let result = filtered.slice(0, k);
    
  
    console.log(result.join(" "));
}


editArray(7, 3, [5, 200, 15, 300, 8, 100, 55]);

/////////////////////////////////////////////F/////////////////////
function filterAndModify(n, arr) {
 
    let evenNumbers = arr.filter(x => x % 2 === 0);

    
    let modified = evenNumbers.map(x => x * 2);

    
    console.log(modified.join(" "));
}


filterAndModify(6, [3, 4, 7, 10, 9, 2]);

