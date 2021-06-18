export class Lecture {
    id: number;
    name : string;
    date: Date;  
    lecturer:string;
    comment:string;
    personalComment:string;
    duration:number;

    constructor(){
        this.id = 0;
        this.name = '';
        this.date = new Date();
        this.lecturer='';
        this.comment = '';
        this.personalComment='';
        this.duration = 0;
    }
}