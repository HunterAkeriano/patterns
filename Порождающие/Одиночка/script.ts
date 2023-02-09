class Govermant{
    private static Instance: Govermant;
    public static getInstance():Govermant{
        if(!Govermant.Instance){
            Govermant.Instance = new Govermant();
        }
        return Govermant.Instance;
    }
    President(name:string){
        return `Новый президент: ${name}`
    }
    Ministr(name:string){
        return `Новый министр: ${name}`
    }
}

// создаю точку входа в одиночку
let newInstanse = Govermant.getInstance();

// просто фанфункция выбора президента
let president = ['Зеленский', "Порошенко", "Аррестович"];
function elections(name:string[]){
    let randomPresident = Math.floor(Math.random() * name.length);
    // использую точку входа в класс для того чтоб воспользовать методом
    return newInstanse.President(name[randomPresident]);
}

console.log(elections(president));