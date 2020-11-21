export function Cord () {

    let foo = document.getElementById('foo');
    let coor = foo.getBoundingClientRect();
    return(coor.y + coor.height +'px');

}