export class Lecture {
    id: number;
    name : string;
    date: string;  
    lecturer:string;
    comment:string;
    personalComment:string;

    constructor(){
        this.id = 0;
        this.name = '';
        this.date = '';
        this.lecturer='';
        this.comment = '';
        this.personalComment='';
    }
}