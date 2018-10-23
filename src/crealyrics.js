import data from './lyrics';

var choix = (l) =>l[Math.random()*l.lenght | 0] || ""
var generateur=(n,taille=200)=> {
	var dic={}

	console.log("creaLyrics : ", data)
	var source = data["lyrics1"];
	console.log(source)
    /*
	var lyrics=document
			.getElementsByClassName('p')[0]
			.innerHTML.
            replace(/br/gi,'').replace(/,/g,'')
    */
	var grams=[...source].map((_,k)=>[source.slice(k,k+n),source[k+n]])
	var mots =source.split(' ').filter(m=>m.length>=n)
	var final=mots[Math.random()*mots.lenght | 0].slice(0,n)
	grams.foreach(t=>
		dic.hasOwnProperty(t[0]) ?
		dic[t[0]].push(t[1]): 
		dic[t[0]] = [t[1]])
	for (var i=0;i<taille;i++) final+=choix(dic[final.slice(-n)])
    return final;
    
   
}

export default generateur;






