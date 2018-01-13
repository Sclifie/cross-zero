class ConsoleOfTable{
    constructor(){
        this.status=document.getElementById("status");
        this.message = null;
        this.history=[];
        this.P1 = null;
        this.P2 = null;
        this.gameset = 0;
    }
    setupConsole(status,p1_name,p2_name,game_set){
        this.message = status;
        this.P1 = p1_name;
        this.P2 = p2_name;
        this.gameset = game_set;
    }
    openConsole(x){
        console.log(this);
        let player2;
        if(this.P2 === ""){
            player2 = "";
        } else {player2 = " и " + this.P2}
        if(x === true){
            console.log(this);
            let status = document.getElementById("status");
            status.classList.add();
            let hours = new Date().getHours();
            let min =  new Date().getMinutes();
            let sec = new Date().getSeconds();
            let time = hours + 'часов ' + min + 'минут ' + sec + 'сек :';
            status.value = time + ' Здравствуйте ' + this.P1 + player2 + " Тип игры : " +
                this.gameset + " на " + this.gameset;
            this.history.push(status.value);
            status.value = this.history;
        }
    }
    static sayHello(){
        let hours = new Date().getHours();
        let min =  new Date().getMinutes();
        let sec = new Date().getSeconds();
        let time = hours + 'часов ' + min + 'минут ' + sec + 'сек :';
        let status = document.getElementById('status');
        status.value = time +  " : " + 'Здравствуйте, Перед началом игры настройте её';
    }
    writeInStatus(){
        this.status.innerHTML = "ДА" + this.message;
        // this.status.value +=  + "ДА" + this.message;
    }
    saveStatus(){
        this.history.push(this.status.value);
    }
    addToStatus(some_value){
        this.message += some_value;
    }
}