export class GameCard{
    cardNum: number;
    cardPic: string;
    //isFlipped: boolean;
    //foundMatch: boolean;

     

    constructor(cardNum: number, cardPic: string){
        this.cardNum = cardNum;
        this.cardPic = cardPic;
        //this.isFlipped = isFlipped;
        //this.foundMatch = foundMatch;
    }

    public getCardNum(): number{
        return this.cardNum;
    }
    
    public getcardPic(): string{
        return this.cardPic;
    }

    public getIsFlipped(): boolean{
        return this.isFlipped;
    }

    public getfoundMatch(): boolean{
        return this.foundMatch;
    }

    public setCardNum(num: number){
        this.cardNum = num;
    }
    
    public setCardPic(picture: string){
        this.cardPic = picture;
    }

    public setIsFlipped(flip: boolean){
        this.isFlipped = flip;
    }

    public setfoundMatch(match: boolean){
        this.foundMatch = match;
    }

    


}

export{}