'use strict';
class TheGame{
    constructor(){
        this.start = false; //пока тру - приступаем к созданию игры иначе выдаём сообщение, false принемает сразу после первого хода
        this.round = 0; //пока тру - будет проходить проверка поля
        this.end = false; //когда становится true выдаётся сообщение о статусе
        this.table = [];//Метод взаимодействия с playerOfGame status в зависимоти от this.end
        this.p_count = null; // здесь объект новой игр
        this.status = null;
        this.p_names = [];
        this.players = [];
        console.log(this);
    }
    checkSettings(){
        // console.log('settings', this.game);
        console.log('say hello',this);
        // this.startGame();
    }
    set (start){if(start === false){return this.start = false} else {return this.start = true}}
    startGame(){  // Игроки
        console.log('Game Start?!');
        if(this.start === false){
            console.log("Игра не начата")
        } else {
            let random = Math.random();
            let mark_0 = random < 0.5 ? 'cross' : 'zero';
            let mark_1 = random >= 0.5 ? 'cross' : 'zero';
            let turn = 1;
            let any = 2;
            if(random < 0.5){turn = 1; any = 2} else {any = 1; turn = 2}
            // TheGameController.intercept();
            switch(this.p_count){
                case '0' : console.log('AI vs AI');
                // let playerAi_0 = new AiPlayer(mark);
                // let playerAi_1 = new AiPlayer(!mark);
                break;
                case '1' : console.log('PLAYER vs AI');
                    // let playerAi_0 = new AiPlayer(mark);
                    // let simple_player0 =  new Players(mark);
                    console.log(mark_0,mark_1);
                break;
                case '2' : console.log('PLAYER VS PLAYER');
                    console.log('Player 1',mark_0,'Player 2',mark_1);
                            let simple_player0 =  new PlayersModel(this.p_names[0],mark_0,turn);
                            let simple_player1 =  new PlayersModel(this.p_names[1],mark_1,any);
                            this.players.push(simple_player0,simple_player1);
                    this.pullGame();
                break;
            }
        }
        }
    pullGame(){
        //сюда проверку очков и конец игры
        this.players[0].youTurn();
        console.log(this.players[0]);
        this.players[1].youTurn();
        console.log(this.players[1]);
    }

}
class PlayersModel { // Конструктор игроков
    constructor(p_name, mark, turn) {
        this.playerName = p_name;
        this.status = mark === 'cross'; // true - его ход, false - ход опонента
        this.score = 0;
        this.turn = turn;
        this.mark = mark; // -1 - он крестик, 1 - он нолик
    }

    //Метод ход
    youTurn() {
        if (this.turn % 2 === 1) {
            console.log('Ваш ход', this.mark);
        }
        this.turn++;
    }
}
        //Метод 2 узнать состояние
        // setStatus(){
        //
        // }
        //Метод 3 Назначить крестик или нолик

// class GameTable{ //Игровой стол
//     constructor(table_id,table_cell_id,how_many){
//         this.table = table_id; //id куда будем вставлять ячейки
//         this.cells = table_cell_id; //id что будем вставлять
//         this.many = how_many * how_many; // масштабируем игру к 2х2, 3х3, 4х4 и т.д.
//         this.tableArray = [[0,0,0],[0,0,0],[0,0,0]]; //для удобства
//     }
//     //Метод 1 разворачиваем поле
//     //Метод 2 пресуем поле в массив 3 x 3 со значениями 0 , дальше значения будут -1 - крестик 1 - нолик
// }
class AiPlayer{ //AИ
    constructor(x){
    this.inject = x;// если true вводит в игру ИИ
    }
}

// let player1 = new PlayerOfGame();
// player1.setName();
// console.log(player1.toString());
// let player2 = new PlayerOfGame();
// player2.setName();
// console.log('players', player1);
// console.log('players', player2);