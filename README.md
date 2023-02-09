class MyMap{
   
    private static instance: MyMap; 
   
    map: Map<number, string> = new Map();
    public static get():MyMap{
        if(!MyMap.instance){
            MyMap.instance = new MyMap();
        }
        return MyMap.instance;
    }

}