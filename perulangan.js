//segitiga siku
for(var i = 1; i <= 5; i++) {
      var x = '';
      for(var j = 1; j <= i; j++) {
        var x = x + '*';
      }
      console.log(x);
    }
	
console.log("\n");
	
//segitiga siku kebalik
for(var i = 5; i > 0; i--) {
      var x = '';
      for(var j = 1; j <= i; j++) {
        var x = x + '*';
      }
      console.log(x);
    }
	
console.log('\n');

//segitiga piramida
 for (var i=1;i<=5;i++){
		var x = '';
        for (var j=i;j<=5;j++){
           var x= x+ '_';
        }
        for (var k=1;k<=i;k++){
            var x= x+ '*';	
        }
        for (var l=1;l<=i-1;l++){
            var x=x +'*';
        }
        console.log(x);
    }
	
console.log('\n');

//segitiga siku mirror
for (var i=1;i<=5;i++){
		var x = '';
        for (var j=i;j<=5;j++){
             var x= x+ '_';
        }
        for (var k=1;k<=i;k++){
             var x= x+ '*';
        }
        console.log(x);
    }
	
console.log('\n');

//segitiga siku kebalik mirror
    for (var i=1;i<=5;i++){
		var x = '';
        for (var j=1;j<=i;j++){
            var x= x+ '_';
        }
        for (var k=i;k<=5;k++){
            var x= x+ '*';
        }
        console.log(x);
    }
	
console.log('\n');

//segitiga piramida kebalik
for (var i=1;i<=5;i++){
	var x = '';
        for (var j=1;j<=i;j++){
             var x= x+ '_';
        }
        for (var k=i;k<=5;k++){
            var x= x+ '*';
        }
        for (var l=i+1;l<=5;l++){
            var x= x+ '*';
        }
         console.log(x);
    }

