function oddnum(range){
        
    var start = range[0]
    var end = range[1]
    var oddNums = "";

    for(i=start; i<=end; i++){

      if(i % 2 != 0){
        oddNums += i +' ' ;
      }
    }
    console.log(oddNums);
  }
  
  oddnum([0,10])