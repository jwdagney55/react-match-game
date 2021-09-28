class GameCard{
     isFlipped: boolean;
     foundMatch: boolean;
     pic: string;

    constructor(isFlipped: boolean, foundMatch: boolean, pic: string){
        this.isFlipped = isFlipped;
        this.foundMatch = foundMatch;
        this.pic = pic;
    }

    public getIsFlipped(): boolean{
        return this.isFlipped;
    }

    public getfoundMatch(): boolean{
        return this.foundMatch;
    }

    public getPic(): string{
        return this.pic;
    }

    public setIsFlipped(flip: boolean){
        this.isFlipped = flip;
    }

    public setfoundMatch(match: boolean){
        this.foundMatch = match;
    }

    public setPic(picture: string){
        this.pic = picture;
    }
    


}

export{}