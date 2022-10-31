const massage = "Curabitur ligula sapien";
const maxlenghs = 16;
const elementToRemove = massage.length - maxlenghs;

if (massage.length <= maxlenghs ) {
    console.log(massage);
} else {
    const newMassage = massage.split('').splice(maxlenghs, elementToRemove, '...' ).join('');
    console.log(newMassage);
     
}