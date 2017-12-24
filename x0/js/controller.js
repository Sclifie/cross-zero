'use strict';
class GameTable{ //Игровой стол
    constructor(size,player_name){
        // this.table = null; //id куда будем вставлять ячейки
        // this.cells = null; //id что будем вставлять
        this.size = size; // масштабируем игру к 2х2, 3х3, 4х4 и т.д. document.getElementById('table_size').value
        this.tableArray = [[0,0,0],[0,0,0],[0,0,0]]; //для удобства
        this.data = [];
        this.playersName1 = player_name;
        this.playersName2 = null;
        this.start = false;
    }
    //Метод 0 собираем инфу переведём в класс инит DOM
    static activateGame(){
        window.addEventListener('load', function () {
            console.log('Object Game Created');
            const newGame = new GameTable();
            console.log(newGame.data);
            console.log('Current Setting',newGame);
            newGame.activateElement();
        });
    }
    //Активировать элементы
    activateElement(){
        let start = document.getElementById('start');
        start.addEventListener('click',this.collectGameSetting.bind(this));
        console.log('Elements Activated');
    }
    //Collect and push in controller
    collectGameSetting(){
        let gameSetting = document.getElementById("game_settings");
        console.log(typeof gameSetting);
        console.log(gameSetting);
        let gameSet = gameSetting.getElementsByTagName("*");
        for(let i = 0; i < 4;i++){
            this.data.push(gameSet[i].value);
        }
        let size = this.data[3];
        let player_name = this.data[0];
        jQuery(gameSet).slideUp(1000,this.buildTable(size));
        this.distributeData();
    }
    //получили данные - теперь посмотрим как оно
    distributeData(){
        // this.data.split('');
        console.log(this.data);
        console.log(typeof this.data);
    }
    //Метод 1 разворачиваем поле
    buildTable(size){
        for(let i = 0; i < size * size; i++){
            let table = document.getElementById('game_table'); //table
            let cell = document.createElement('div');// cell
            let table_height = table.offsetHeight;
            cell.setAttribute('value', '10');
            cell.style.height = table_height / size + 'px';
            cell.style.width = table_height / size + 'px';
            cell.classList.add('table-cell');
            table.appendChild(cell);
        }
    }
    //Метод 2 пресуем поле в массив 3 x 3 со значениями 0 , дальше значения будут -1 - крестик 1 - нолик
    openConsole(x){
        if(x === true){
            let console = document.getElementById('status');
            let time = Date.now();
            console.value = time + " : " + 'Здравствуйте \n' + this.data[0];
        }
    }
}
GameTable.activateGame();
console.log(window.self);
// let contR = new GameTable();
// contR.activateElement();
// window.onload = contR.collectGameSetting();
// contR.buildTable('10');
// console.log(contR);
// console.log(contR.data);