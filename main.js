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

