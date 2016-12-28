ngServices['objectSvc']=function() {
    var _self=this;


    _self.createDogs=function(data){
        if(!data && !data.dogs && !data.dogs.records){
            return undefined;
        }

        var result=[];
        for(var i=0; i<data.dogs.records.length;i++){
            result.push(_self.createDog(data.dogs.records[i]));
        }
        
        return result;
    };

    _self.createDog=function(data){

        if(!data){
            return undefined;
        }

        var result={};

        result.id=data[0];
        result.name=data[1];
        result.birth=new Date(data[2]);
        result.male=data[3];
        result.chipnumber=data[4];
        result.formvalue_id=data[5];

        return result;
    }

//======
    _self.createMany=function(method,arr){
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