function combineTwoSortedArray(a:number[],b:number[]){
      let i = 0;
      let j = 0;
      let c:number[] = [];

      while( i < a.length && j< b.length){
            if(a[i] < b[i]){
                  c.push(a[i])
                  i++;
            }else{
                  c.push(b[j])
                  j++;
            }
      }
      if( i == a.length){
            while( j < b.length){
                  c.push(b[j])
                  j++;
            }
      }else{
            while( i < a.length){
                  c.push(a[i])
                  i++;
            }
      }
      return c;
}
console.log(combineTwoSortedArray([1,2,3,4,5,6,7],[8,9,10]));
