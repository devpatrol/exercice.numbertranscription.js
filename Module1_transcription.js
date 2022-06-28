const readline = require( 'readline' ).createInterface(process.stdin , process.stdout) ;
// function nbEnLettre(n){
    var dic={
0:"zéro",
1:"un",
2:"deux",
3:"trois",
4:"quatre",
5:"cinq",
6:"six",
7:"sept",
8:"huit",
9:"neuf",
10:"dix",
11:"onze",
12:"douze",
13:"treize",
14:"quatorze",
15:"quinze",
16:"seize",
17:"dix-sept",
18:"dix-huit",
19:"dix-neuf",
20:"vingt",
21:"vingt et un",
22:"vingt-deux",
23:"vingt-trois",
24:"vingt-quatre",
25:"vingt-cinq",
26:"vingt-six",
27:"vingt-sept",
28:"vingt-huit",
29:"vingt-neuf",
30:"trente",
31:"trente et un",
32:"trente-deux",
33:"trente-trois",
34:"trente-quatre",
35:"trente-cinq",
36:"trente-six",
37:"trente-sept",
38:"trente-huit",
39:"trente-neuf",
40:"quarante",
41:"quarante et un",
42:"quarante-deux",
43:"quarante-trois",
44:"quarante-quatre",
45:"quarante-cinq",
46:"quarante-six",
47:"quarante-sept",
48:"quarante-huit",
49:"quarante-neuf",
50:"cinquante",
51:"cinquante et un",
52:"cinquante-deux",
53:"cinquante-trois",
54:"cinquante-quatre",
55:"cinquante-cinq",
56:"cinquante-six",
57:"cinquante-sept",
58:"cinquante-huit",
59:"cinquante-neuf",
60:"soixante",
61:"soixante et un",
62:"soixante-deux",
63:"soixante-trois",
64:"soixante-quatre",
65:"soixante-cinq",
66:"soixante-six",
67:"soixante-sept",
68:"soixante-huit",
69:"soixante-neuf",
70:"soixante-dix",
71:"soixante et onze",
72:"soixante-douze",
73:"soixante-treize",
74:"soixante-quatorze",
75:"soixante-quinze",
76:"soixante-seize",
77:"soixante-dix-sept",
78:"soixante-dix-huit",
79:"soixante-dix-neuf",
80:"quatre-vingts",
81:"quatre-vingt-un",
82:"quatre-vingt-deux",
83:"quatre-vingt-trois",
84:"quatre-vingt-quatre",
85:"quatre-vingt-cinq",
86:"quatre-vingt-six",
87:"quatre-vingt-sept",
88:"quatre-vingt-huit",
89:"quatre-vingt-neuf",
90:"quatre-vingt-dix",
91:"quatre-vingt-onze",
92:"quatre-vingt-douze",
93:"quatre-vingt-treize",
94:"quatre-vingt-quatorze",
95:"quatre-vingt-quinze",
96:"quatre-vingt-seize",
97:"quatre-vingt-dix-sept",
98:"quatre-vingt-dix-huit",
99:"quatre-vingt-dix-neuf",
100:"cent"
    }
    function concat_nombre(a,b){
        a=a.toString();
        b=b.toString();
        var result= parseInt(a+b)
        return result
      }
      function concat_nombre2(a,b,c){
        a=a.toString();
        b=b.toString();
        c=c.toString();
        var result= parseInt(a+b+c)
        return result
      }
      function concat_nombre3(a,b,c,d,e,f){
        a=a.toString(); d=d.toString();
        b=b.toString(); e=e.toString();
        c=c.toString();f=f.toString();
        var result= parseInt(a+b+c+d+e+f)
        return result
      }
      function convertStringFromArrayOfInt(chaine){
         let tab=[]
          tab= chaine.split('');
          tab=tab.map(i => parseInt(i));
          return tab;
      }
      
function lireDic(n){
    var val = ""
    for(var i in dic){
        if(n == i){
            return  dic[i]
           }}}

           function concat_tab(tab = [], debut, fin){
            var string  = '';
            for(var i=debut; i<tab.length; i++)
            {
                string = string+tab[i]
            }
            let result=parseInt(string)
            return result
        }

// fonction lire nombre
function lireNombre(nombre){

    if(nombre <= 100){
        return lireNombreType1(nombre)
     }
     else if(nombre>100 && nombre < 1000){
        return lireNombreType2(nombre)
     }
     else if(nombre>999 && nombre<1000000){
        return lireNombreType3(nombre)
     }
     else if(nombre>=1000000 && nombre<1000000000){
        return lireNombreType4(nombre)
     }
     else{
        return 'inconnu'
     }

}

function lireNombreType1(nombre){
            return(lireDic(nombre))
           }
          
function lireNombreType2(nombre){
            let data = nombre.toString();
            let arra = convertStringFromArrayOfInt(data);
            if(arra[0]== 1){
                if(concat_nombre(arra[1],arra[2])==0){return 'cent'}
                return (" cent "+lireDic(concat_nombre(arra[1],arra[2])))
                
            }
            else{
            return (lireDic(arra[0])+" cent "+lireDic(concat_nombre(arra[1],arra[2])))
           }}


function lireNombreType3(nombre){
            let data = nombre.toString()  
             let taille = data.length;
             if(taille==4){

                let tab = convertStringFromArrayOfInt(data);
                let nb = concat_nombre2(tab[1],tab[2],tab[3])
               
                if (nb==0){
                    if(tab[0]==1){
                        return 'mille';
                    }
                    
                    return (lireDic(tab[0])+" mille")
                }
                else if(tab[0]==1){
                     return (lireDic(tab[0])+" mille "+lireNombreType2(nb));
                }
                else{
                    return (lireDic(tab[0])+" mille "+lireNombreType2(nb))
                }
                // return (lireDic(tab[0]+))
            }

            else if(taille==5){
                
                let tab = convertStringFromArrayOfInt(data);
                let nb_millieme = concat_nombre(tab[0], tab[1])
                let nb_centaine = concat_nombre2(tab[2],tab[3],tab[4])
                if (nb_centaine==0){
                    
                    return (lireDic(nb_millieme)+" mille")
                }
                else{
                    return (lireDic(nb_millieme)+" mille "+lireNombreType2(nb_centaine))
                }
            }

           else if(taille==6){
            
                let tab =convertStringFromArrayOfInt(data);

                let nb_millieme = concat_nombre2(tab[0], tab[1],tab[2])
                let nb_centaine = concat_nombre2(tab[3],tab[4],tab[5])
                if (nb_centaine==0){
                    
                    return (lireNombreType2(nb_millieme)+" mille")
                }
               else{
                    return (lireNombreType2(nb_millieme)+" mille "+lireNombreType2(nb_centaine))
                }
          }
           }

           

           function lireNombreType4(nombre){
            let data=nombre.toString(); 
            let taille = data.length;
            if(taille==7){
                let tab = convertStringFromArrayOfInt(data);
                let nb_millieme = concat_nombre3(tab[1],tab[2],tab[3],tab[4],tab[5],tab[6])
                if (nb_millieme==0){
                    
                    return (lireDic(tab[0])+" million")
                }
                else{
                    return (lireDic(tab[0])+" million "+lireNombreType3(nb_millieme))
                }
            }
            else if(taille == 8){
                let tab = convertStringFromArrayOfInt(data);
                let nb_million = concat_nombre(tab[0],tab[1])
                let nb_millieme = concat_nombre3(tab[2],tab[3],tab[4],tab[5],tab[6],tab[7])
                if (nb_millieme==0){
                    
                    return (lireNombreType1(nb_million)+" million")
                }
                else{
                    return (lireNombreType1(nb_million)+" million "+lireNombreType3(nb_millieme))
                }
            }
            else if(taille== 9){

            let tab = convertStringFromArrayOfInt(data);
                let nb_million = concat_nombre2(tab[0],tab[1],tab[2])
                let nb_millieme = concat_nombre3(tab[3],tab[4],tab[5],tab[6],tab[7],tab[8])
                if (nb_millieme==0){
                    
                    return (lireNombreType2(nb_million)+" million")
                }
                else{
                    return (lireNombreType2(nb_million)+" million "+lireNombreType3(nb_millieme))
                }
            
        }}
           
function partie_entier(tab){
    var index 
    var partie_entiere = []
           
    for(let i=0; i<tab.length; i++){
        var result1 , result2;
        if(tab[i]=='.'){
            index = i
            for(let j=0; j<index; j++){
                partie_entiere.push(tab[j])
            }
            return concat_tab(partie_entiere, 0, partie_entiere.length)
           
        }
    }

}

function partie_decimal(tab){
    var index
    var partie_dec = []
           
    for(let i=0; i<tab.length; i++){
        var result2;
        if(tab[i]=='.'){
            index = i
            for(var j=index+1; j<tab.length; j++){
                partie_dec.push(tab[j])
            }
            return concat_tab(partie_dec, 0, partie_dec.length)
          
        }
    }}

    function transcrire(nombre){
        if(nombre<=100){
            console.log(nombre+" = "+lireNombreType1(nombre))
         }
         else if(nombre>100 && nombre < 1000){
          console.log(nombre+" = "+lireNombreType2(nombre))
         }
         else if(nombre>999 && nombre<1000000){
             console.log(nombre+" = "+lireNombreType3(nombre))
         }
         else if(nombre>=1000000 && nombre<1000000000){
             console.log(nombre+" = "+lireNombreType4(nombre))
         }
    }
    function checkfloat(string){
        for(var i in string){
            if(string[i]== '.'){
                return true;
            }
        }
        return false;
    }

    var array = [], tab = [], val
    readline.on('close', () => process.exit(0));
    readline.on('line', (data)=>{
        let tab= data.split('')
        
            if(checkfloat(data)){
                var part_en= partie_entier(tab)
                var part_dec= partie_decimal(tab)console.log(lireNombreType1(part_en))
                console.log(lireNombreType1(part_dec))
                  0dr567+                console.log(data+"  =  "+lireNombre(part_en)+" virgule "+lireNombre(part_dec));
            }
            else {
                nombre=parseInt(data)
                transcrire(nombre)
}
    
        
        readline.close();
    });
