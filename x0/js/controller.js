'use strict';
class GameTable{ //Игровой стол
    constructor(size,player_name, player_name2){
        // this.table = null; //id куда будем вставлять ячейки
        // this.cells = null; //id что будем вставлять
        this.size = 0; // масштабируем игру к 2х2, 3х3, 4х4 и т.д. document.getElementById('table_size').value
        this.tableArray = []; //для удобства
        this.data = [];
        this.playersName1 = player_name;
        this.playersName2 = player_name2;
        this.model = new TheGame();
    }
    //Метод 0 Активация игры класс инит DOM
    static activateGame(){
        window.addEventListener('load', this.createGame.bind(this));
    }
    static createGame() {
        console.log('Object Game Created');
        console.log('Current Setting');
        console.log(this);
        this.activateElement();
    }
    //Активировать элементы
    static activateElement(){
        console.log(this);
        let start = document.getElementById('start');
        start.addEventListener('click',this.collectGameSetting.bind(this));
    }
    //Collect and push in game
    static collectGameSetting(){
        let newGame = new GameTable();
        console.log(this);
        let gameSetting = document.getElementById("game_settings");
        let gameSet = gameSetting.getElementsByTagName('*');
        console.log(gameSet);
        for(let i = 0; i < 4;i++){
            newGame.data.push(gameSet[i].value);
        }
        let size = newGame.data[3];
        newGame.size = newGame.data[3];
        newGame.playersName1 = newGame.data[0];
        newGame.playersName2 = newGame.data[1];
        console.log(newGame.data);
        jQuery(gameSet).slideUp(1000,newGame.buildTable(size));
    }

    buildTable(size){
        console.log(this);
        for(let i = 0; i < size * size; i++){
            // здесь будет if на clicked перестраивать поле будем с параметрами 0 1 и блочить его
            let table = document.getElementById('game_table');
            let table_height = table.offsetHeight;
            let cell = document.createElement('div');// cell
            cell.clicked = true; //кликабельность ('data-clicked','true');
            cell.score = 1; //очки ('data-score', '');
            cell.setAttribute('id', ""+(i+1)); // ид ячейчи
            cell.setAttribute('name','cells');
            cell.style.height = table_height / size + 'px';
            cell.style.width = table_height / size + 'px';
            cell.classList.add('table-cell-empty');
            table.appendChild(cell);
        }
        console.log(this.tableArray);
        this.arrayCreate(size);
        //TODO: Итерацию передать в clickOn или поработать со строкой
    }
    arrayCreate(size){
        let y = 0;
        let x=0;
        let array = [];
        let arraySub = [];
        for(let i= 1; i<size*size+1; i++){

            console.log(i,i+1,x,y,arraySub,array);
            let cell_x = document.getElementById(""+(i));
            let val_x = cell_x.score;
            arraySub.push(val_x);
            if(i%size === 0){
                y++;
                array.push(arraySub);
                arraySub = [];
            }
        }
        this.model.table = array;
        console.log(array);
        console.log(size);
        this.openConsole(true,size);
        this.model.start = true;
        this.model.startGame();
    }

    openConsole(x,y){
        if(x === true){
            let console = document.getElementById('status');
            console.classList.add();
            let hours = new Date().getHours();
            let min =  new Date().getMinutes();
            let sec = new Date().getSeconds();
            let time = hours + 'часов ' + min + 'минут ' + sec + 'сек :';
            console.value = time + ' Здравствуйте ' + this.data[0] + " Тип игры : " + y + " на " + y;
            let GameLogic = new TheGame();   /// Создали Логику
            // this.clickOn(); // Активировали кликабельность
        } else {
            let console = document.getElementById('status');
            // console.log(console);
            console.value = "Точное время" + " : " + x;
        }
    }
}
class GameAction{
    constructor(){
       this.status = 'ok';
}
    drawMark(){ console.log('крестик');}
    clickOn(){
        console.log(this);
        let cell = document.getElementsByName('cells');
        cell.forEach(this.drawMark().bind(this))
    }
    //     if (mark === 'cross') {
    //         item.classList.add('table-cell-cross');
    //     } else {
    //         item.classList.add('table-cell-zero');
    //     }
    // }
}
class GameStatus{
    constructor(number){
        this.howManyPlayers = number;
        this.player1Name = 'hello';
        this.player2Name = 'hello';
    }
    set playerIterator(number){

    }
}

(function() {
    GameTable.activateGame();
})();

