
function positions(firstPlace, secondPlace, lastPlace) 
{

    let listaVazia = [firstPlace, secondPlace, lastPlace]
    

    

  
 
    if (firstPlace == 'Daniel')  {
        return `1ª - Colocado ${firstPlace} 2ª - Colocado ${secondPlace} 3ª - Colocado ${lastPlace}`
        
    } 
    if (secondPlace == 'Daniel') {
        listaVazia = [secondPlace, firstPlace, lastPlace ]
        return  (`1ª - Colocado ${listaVazia[0]} 2ª - Colocado ${listaVazia[1]} 3ª - Colocado ${listaVazia[2]} `)
    }
    if (lastPlace == 'Daniel') {
        listaVazia = [firstPlace, lastPlace, secondPlace ]
        return (`1ª - Colocado ${listaVazia[0]} 2ª - Colocado ${listaVazia[1]} 3ª - Colocado ${listaVazia[2]} `)
    }

    
}
console.log(positions('Daniel', 'Rafael', 'Manoel' ))
console.log(positions('Rafael', 'Daniel', 'Manoel' ))
console.log(positions('Rafael', 'Manoel', 'Daniel' ))