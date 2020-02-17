var cards3 = ["ciri.png", "geralt.png", "jaskier.png", "iorweth.png", "triss.png", "yen.png","ciri.png", "geralt.png", "jaskier.png", "iorweth.png", "triss.png", "yen.png"]


for(i=0; i<=20; i++){
    
//wylosuj wartość z szyku

     var a= cards3[Math.floor(Math.random()*cards3.length)];

//odczytaj watrość index_value arraya o indeksie a
    var b= cards3.indexOf(a);

//usuń z arraya wartość o indeksie a
    cards3.splice(b,1);

//daj tę wartość na początek arraya

    cards3.unshift(a);

}

console.log("a="+ a + "  b= "+ b );
console.log(cards3);
console.log(cards3.length);
