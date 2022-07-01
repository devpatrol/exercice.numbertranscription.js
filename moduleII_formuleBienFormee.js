const readline = require( 'readline' ).createInterface(process.stdin , process.stdout) ;

function verifierOpBin(expr) {
    let elementPb = [];  //element de l'expression ou se situe le problème
    var length = expr.length;
    let OpBinO = ['/','*','-','+','(','=']
    let OpBinF = ['/','*','+',')','=']
    let OpBin = ['/','*','+','-','=']
    var taille = OpBinO.length;
    for (var j = 0; j < length; j++) {
        for (var i = 0; i < taille; i++) {
            if ( expr[j] == ')' && expr[j-1] == OpBinO[i] ) {
                elementPb.push(expr[j-1]);
            }else if (expr[j] == '(' && expr[j+1] == OpBinF[i]){
                elementPb.push(expr[j+1]);
            }else if (expr[j] == OpBinO[i] && expr[j+1] == OpBinF[i]){
                elementPb.push(expr[j+1]);
            }else if (expr[j] == OpBinO[i] && expr[j-1] == OpBin[i]){
                elementPb.push(expr[j-1]);
            }else if (expr[j] == ')' && expr[j+1] == OpBin[i] && j+1 == expr.length-1){
                elementPb.push(expr[j+1]);
            }else if (expr[j] == '=' && expr[j+1] == OpBinF[let OpBinF = ['/','*','+',')','='] OpBinF = ['/','*','+',')','=']i]){
                elementPb.push(expr[j+1]);
            }else if (j == expr.length-1 && expr[j] == OpBin[i]){
                elementPb.push(expr[j]);
            }
        }
        
    }
    
    return elementPb;
    
}
function verifierPr(expr) {
    let T = []
    let R = []
    var length = expr.length;
    for (var i = 0; i < length; i++) {
        if ( expr[i] == '('){
            T.push(expr[i])
        }
    }

    for (var j = 0; j < length; j++) {
        if ( expr[j] == ')' && T.length > 0){
            T.shift();  
        }
        else if (expr[j] == ')' && T.length === 0) {
            R.push(expr[j])
        }
    }

    let totaLength = T.length + R.length
    if( totaLength === 0){
        return T;
	}else if (T.length === 0) {
        return R;
    }else if (R.length === 0){
        return T;
    }
    
    
}



readline.question("Quelle est votre expression？", function (str = '') {
    let strg = str.toString().replace( / /g, "" );
    var rgx = "/[^a-z]+/gi"; // j'arrive pas à gerer le regex
    let text = ['Il y a un problème au niveau de :'];
    if (!strg.match(rgx)) {
        let list = strg.split('');
        let vPr = verifierPr(list);
        let vOpBin = verifierOpBin(list);
        if (vPr.length === 0 && vOpBin.length === 0) {
            console.log('Oh! il n\'ya pas de problème! Bravo!');
        }else if (vPr.length === 0) {
            console.log(text.toString(),vOpBin.toString());
        }else if (vOpBin.length === 0 ){
            console.log(text.toString(), vPr.toString());
        }else if (vPr.length === 1 && vOpBin.length === 1){
            console.log(text.toString(), vPr.toString() ,"et",vOpBin.toString());
        }else {
            console.log(text.toString(),vPr.toString(),vOpBin.toString());
        }
        
    }
    else {
        console.log("expression non gérée");
    }
    
readline.close();
    
});
  

            T.push(expr[i])
        }
    }

    for (var j = 0; j < length; j++) {
        if ( expr[j] == ')' && T.length > 0){
            T.shift();  
        }
        else if (expr[j] == ')' && T.length === 0) {
            R.push(expr[j])
        }
    }

    let totaLength = T.length + R.length
    if( totaLength === 0){
        return T;
	}else if (T.length === 0) {
        return R;
    }else if (R.length === 0){
        return T;
    }
    
    
}



readline.question("Quelle est votre expression？", function (str = '') {
    let strg = str.toString().replace( / /g, "" );
    var rgx = "/[^a-z]+/gi"; // j'arrive pas à gerer le regex
    let text = ['Il y a un problème au niveau de :'];
    if (!strg.match(rgx)) {
        let list = strg.split('');
        let vPr = verifierPr(list);
        let vOpBin = verifierOpBin(list);
        if (vPr.length === 0 && vOpBin.length === 0) {
            console.log('Oh! il n\'ya pas de problème! Bravo!');
        }else if (vPr.length === 0) {
            console.log(text.toString(),vOpBin.toString());
        }else if (vOpBin.length === 0 ){
            console.log(text.toString(), vPr.toString());
        }else if (vPr.length === 1 && vOpBin.length === 1){
            console.log(text.toString(), vPr.toString() ,"et",vOpBin.toString());
        }else {
            console.log(text.toString(),vPr.toString(),vOpBin.toString());
        }
        
    }
    else {
        console.log("expression non gérée");
    }
    
readline.close();
    
});
  
