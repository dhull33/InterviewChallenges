/*2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
*What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
*/
function smallNUm(){
    var flag = '';
    var n =1;
    var largest_num = 20;
    var num = 2520;

    while (flag == ''){
        if(num % n != 0){
            num += largest_num;
            n=1;
        }
        else if(num % n == 0){
            n+=1;
        }

        if (n == largest_num && num % n == 0){
            flag = 'Stop'
        }
    }

    return num
};


/* A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
Find the largest palindrome made from the product of two 3-digit numbers.
*/

function reverse(n){
    var rev = 0;
    while(n > 0){
        var remainder = n % 10;
        rev = (rev * 10) + remainder;
        n = Math.floor(n / 10);
    }
    return rev;
}

function palindrome(){
    var answer = 0;

    for(var i = Number(100);i < Number(1000); i+=1){
        for(var j = Number(100); j < Number(1000); j+=1){
            var num = i*j;

            if(num == reverse(num)){
                if(num > answer){
                    answer = num;

                }
            }else{
                continue;
            }
        }
    }
    return answer;
}