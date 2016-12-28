ngServices['objectSvc']=function() {
    var _self=this;

    //===========Dogs
    _self.createDogs=function(data){
        if(!data && !data.dogs && !data.dogs.records){
            return undefined;
        }

        var result = _self.createMany(_self.createDog,data,"dogs");
        
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

    //===========Formvalues
    _self.createFormvalues=function(data){
        if(!data && !data.formvalues && !data.formvalues.records){
            return undefined;
        }

        var result = _self.createMany(_self.createFormvalue,data,"formvalues");
        
        return result;
    }

    _self.createFormvalue=function(data){
        if(!data){
            return undefined;
        }

        var result={};

        result.id=data[0];
        result.name=data[1];
        
        return result;
    }

//======
    _self.createMany=function(method, arr, prop){
        if(arr[prop]==undefined || arr[prop].records.length===0){
            return [];
        }
        var result=[];
        for(var i=0;i<arr[prop].records.length;i++){
            result.push(method(arr[prop].records[i]));
        }
        return result;
    }
}