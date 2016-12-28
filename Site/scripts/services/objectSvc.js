services['objectService']=function() {
    
    this.createDog=function(data){
        if(!data){
            return undefined;
        }

        var result={};
        result.id

    };

//======
    this.createMany=function(method,arr){
        if(arr==undefined || arr.length===0){
            return [];
        }
        var result=[];
        for(var i=0;i<arr.length;i++){
            result.push(method(arr[i]));
        }
        return result;
    }
}