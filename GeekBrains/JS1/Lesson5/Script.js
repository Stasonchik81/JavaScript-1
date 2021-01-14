renderer.renderBoard();
window.onkeyup = function(e){
    console.log(e);
    mover.makeStep(e);
};