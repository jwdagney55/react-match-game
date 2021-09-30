export class GameCard{
    cardNum: number;
    cardPic: string;
    isFlipped: boolean;
    foundMatch: boolean;

    constructor(cardNum: number, cardPic: string){
        this.cardNum = cardNum;
        this.cardPic = cardPic;
        this.isFlipped = true;
        this.foundMatch = false;
    }

}
