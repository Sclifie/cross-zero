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
        // let x = "Object Game Created Current Setting";
        // return x;
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
         //table
        let table = new Array(size);
        for(let i = 0; i < size * size; i++){
            // здесь будет if на clicked перестраивать поле будем с параметрами 0 1 и блочить его
            let table = document.getElementById('game_table');
            let table_height = table.offsetHeight;
            let cell = document.createElement('div');// cell
            cell.setAttribute('data-clicked','true'); //кликабельность
            cell.setAttribute('data-score', ''); //очки
            cell.setAttribute('id', ""+(i+1)); // ид ячейчи
            cell.style.height = table_height / size + 'px';
            cell.style.width = table_height / size + 'px';
            cell.classList.add('table-cell-empty');
            table.appendChild(cell);
        }
        // for (let i1 = 0; i1 < table.length; i1++){
        //     table[i1] = new Array(size);
        // }
        // this.tableArray.push(table);
        //      let cell_unique = document.getElementById(""+iter);
        // let val = cell_unique.getAttribute('data-clicked');
        // this.tableArray.push(val);
        // console.log(val);
        console.log(this.tableArray);
        // this.tableArray.push()
        this.arrayCreate(size);
        //TODO: Итерацию передать в clickOn или поработать со строкой
        // передать iter
        // this.openConsole(true, size);
    }
    arrayCreate(size){
        let array = [];
        let iter = 1;
        let arraySub = [];
        let i = 0;
        // for(; i <= size*size;i++){
        //     let k = 0;
        //     for(let k = 0; k < size;k++)
        //     {
        //     let cell_x = document.getElementById(""+i);
        //     let val_x = cell_x.getAttribute('data-score');
        //     array[iter].push(val_x);
        //     i++;
        //     }
        //     iter+=size;
        // }
        while(i<=size*size){
            let k=0;
            for(;k<size;k++){
                let cell_x = document.getElementById(""+i);
                let val_x = cell_x.getAttribute('data-score');
                arraySub.push(val_x);
                i++;
                console.log(i);
            }
            console.log(i);
            array.push(arraySub);
        }
        console.log(array);
        console.log(size);
        // for(let y = 0; y < size; y++)
        // {
        //     for(let x = 0;x < size;x++){
        //
        //         console.log(subArr);
        //         subArr.push(val_x);
        //         console.log(subArr);
        //     }
        //     array.push(subArr);
        //     console.log(array);
        // }
        // for(let i=0;i<size;i++){
        //     let cell_y = document.getElementById(""+i*i);
        //
        //     for(i=0;i<size;i++){
        //         let arr =
        //         this.tableArray[];
        //     }
        //     this.tableArray.push(arr);
        // }
    }
    clickOn(){
        console.log(this);
        let cell = document.getElementsByName('cells');
        let str = JSON.stringify(cell);
        console.log(this);
        console.log(typeof cell);
            cell.addEventListener('click',this.drawMark('cross',cell).bind(this)); //рисуем
    }
    drawMark(mark,cell){
        if(mark === 'cross') {
            cell.classList.add('table-cell-cross');
            cell.removeEventListener('click');
        } else {
            cell.classList.add('table-cell-zero');
            cell.removeEventListener('click');
        }
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
            // let newGameLogic = new TheGame();   /// Создали Логику
            this.clickOn(); // Активировали кликабельность
        } else {
            let console = document.getElementById('status');
            console.log(console);
            console.value = "Точное время" + " : " + x;
        }
    }
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

