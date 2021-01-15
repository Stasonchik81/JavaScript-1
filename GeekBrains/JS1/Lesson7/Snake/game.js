let game = {
    snake, 
    food, 
    settings,
    //renderer,
    init(userSettings = {}){
        Object.assign(settings, userSettings);
        renderer.renderMap(settings.rowsCount, settings.colsCount);
    },
}
window.onload = function (){
    game.init({speed: 3, winLength: 25});
}