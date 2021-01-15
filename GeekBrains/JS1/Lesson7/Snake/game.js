let game = {
    snake, food, settings,
    init(userSettings = {}){
        Object.assign(settings, userSettings);
    },
}
window.onload = function (){
    game.init({speed: 3, winLength: 25});
}