'use strict';
//TODO: ИД ДАЛ ТЕПЕРЬ НАДО РИСОВАТЬ
/// ИНИЦИАЛИЗАЦИЯ и действия мышкой
class GameTable{ //Игровой стол настройки
    constructor(){
        this.table = document.getElementsByName('cells');
        this.data = [];
        this.newGame = null; //сама игра
    }
    createGame() {
        console.log('Window Active Wait Settings for create Game');
        this.activateElement();
    }
    activateElement(){
        let start = document.getElementById('start');
        start.addEventListener('click',this.collectGameSetting.bind(this));
    }
    collectGameSetting(){
        let gameSetting = document.getElementById("game_settings");
        let gameSet = gameSetting.getElementsByTagName('*');
        for(let i = 0; i < 4;i++){
            this.data.push(gameSet[i].value);
        }
        let size = this.data[3];
        console.log(this.data);
        this.newGame = new TheGameController(this.data[0],this.data[1],this.data[2],this.data[3]);
        this.newGame.setupModelTheGame();
        console.log(this.newGame);
        //Красотульки надо навести
        jQuery(gameSet).slideUp(1000,this.buildTable(size));
    }
    buildTable(size){
        // console.log(this);
        for(let i = 0; i < size * size; i++){
            // здесь будет if на clicked перестраивать поле будем с параметрами 0 1 и блочить его
            let table = document.getElementById('game_table');
            let table_height = table.offsetHeight;
            let cell = document.createElement('div');// cell
            cell.clicked = true; //кликабельность ('data-clicked','true');
            cell.score = 1; //очки ('data-score', '');
            cell.setAttribute('id', ""+(i+1)); // ид ячейчи
            cell.setAttribute('name','cells');
            //cell.addEventListener('click', this.newGame.intercept.bind(this.newGame));
            cell.style.height = table_height / size + 'px';
            cell.style.width = table_height / size + 'px';
            cell.classList.add('table-cell-empty');
            table.appendChild(cell);
        }
        // this.newGame.intercept();
        this.arrayCreate(size);
        // console.log(this.tableArray);

    }
    arrayCreate(size){
        let y = 0;
        let array = [];
        let arraySub = [];
        for(let i= 1; i<size*size+1; i++){
            let cell_x = document.getElementById(""+(i));
            let val_x = cell_x.score;
            arraySub.push(val_x);
            if(i%size === 0){
                y++;
                array.push(arraySub);
                arraySub = [];
            }
        }
        this.newGame.model.table = array;
    }
}
class TheGameController{
    constructor(p_name0,p_name1,p_count,t_size){
        this.data = [];
        this.player_name0 = p_name0;
        this.player_name1 = p_name1;
        this.players_count = p_count;
        this.table_size = t_size;
        this.model = null;
        this.status = null;
    }
    setupModelTheGame(){
        this.model = new TheGame();
        this.model.p_count = this.players_count;
        this.model.p_names.push(this.player_name0,this.player_name1);
        this.openConsole();
        this.model.set(true);
        this.model.startGame();
    }
    // intercept(){
    //     let self = this;
    //     // language=JQuery-CSS
    //     jQuery('.table-cell-empty').click(function() {
    //         let cell = jQuery(this).attr('id');
    //         console.log('Тык', cell);
    //         self.model.turnRound();
    //     });
    //
    // }
    openConsole(){
        ConsoleOfTable.setupConsole('Игра создана, приятной игры', this.player_name0,this.player_name1,this.table_size);
        this.status = new ConsoleOfTable();
        this.status.openConsole(true);
    }

}
class Players {
    constructor(p_name, p_mark) {
        this.pname = p_name;
        this.pmark = p_mark;
        this.field = [];
        this.cell = 0;
        this.interceptor_counter = 0;
    }

    intercept() {
        console.log(this);
        let self = this;
        jQuery('.table-cell-empty').click(() => { //function
            console.log(this);
            console.log(self);
            let cell = jQuery(this).attr('id');
            console.log('тык',cell);
            self.cell = cell;
            self.drawMark(self.mark);
            console.log(self.cell);
        });
    }

    drawMark(what_draw) {
        if (what_draw === 'cross') {
            document.getElementById("" + this.cell).classList.add('table-cell-cross');
            document.getElementById("" + this.cell).classList.remove('table-cell-empty');
        } else {
            document.getElementById("" + this.cell).classList.add('table-cell-zero');
            document.getElementById("" + this.cell).classList.remove('table-cell-empty');
        }
    }
}
class Round{
    constructor(){
        this.round = 0;

    }
}

    // this.interceptor();
    // interceptorDrawer(mark){
    //     jQuery(document).ready(function(){
    //         jQuery('.table-cell-empty').click(function() {
    //             this.cell = jQuery(this).attr('id');
    //             console.log(this.cell);
    //         });
    //     });
    //     if(mark === 'cross'){
    //         document.getElementById(""+this.cell).classList.remove('table-cell-empty');
    //         document.getElementById(""+this.cell).classList.add('table-cell-cross');
    //         this.interceptor_counter++;
    //     } else {
    //         document.getElementById(""+this.cell).classList.remove('table-cell-empty');
    //         document.getElementById(""+this.cell).classList.add('table-cell-zero');
    //     }
    // }


(function() {
    function startGame() {
        let gameTable = new GameTable(); // честно скажу запутался с последовательностью и переделал на упрощённый вариант
        gameTable.createGame();
        ConsoleOfTable.sayHello();
    }
    window.addEventListener('load', startGame);
})();
