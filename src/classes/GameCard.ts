export class GameCard{
    cardNum: number;
    cardPic: string;
    isFlipped: boolean;
    foundMatch: boolean;

    getCardNum(): number{
        return this.cardNum;
    }
    
    getcardPic(): string{
        return this.cardPic;
    }

    getIsFlipped(): boolean{
        return this.isFlipped;
    }

    getfoundMatch(): boolean{
        return this.foundMatch;
    }

    setCardNum(num: number){
        this.cardNum = num;
    }
    
    setCardPic(picture: string){
        this.cardPic = picture;
    }

    setIsFlipped(flip: boolean){
        this.isFlipped = flip;
    }

    setfoundMatch(match: boolean){
        this.foundMatch = match;
    }

    constructor(cardNum: number, cardPic: string){
        this.cardNum = cardNum;
        this.cardPic = cardPic;
        this.isFlipped = false;
        this.foundMatch = false;
    }
    

}
