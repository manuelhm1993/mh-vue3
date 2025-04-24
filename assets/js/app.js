let nombre = 'Manuel'; // Alcance global

if(true) 
{
    let nombre = 'Alejandro'; // Alcance local
    
    console.log(nombre);
}

console.log(nombre);