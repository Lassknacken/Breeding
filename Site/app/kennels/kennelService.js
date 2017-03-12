ngServices["kennelService"]=function(objectSvc,httpSvc, dog_service){
    let _self=this;

    _self.getKennels=function(){
        return httpSvc.get(httpSvc.apiBaseUrl+"/kennels", _self.createKennels,paging);
    };

    _self.getKennel=function(id,full){
        if(!id){
            return undefined;
        }

        if(full){
            return httpSvc.get(httpSvc.apiBaseUrl+"/kennels"+"?id="+id+"&full="+full,_self.createKennel);
        }

        return httpSvc.get(httpSvc.apiBaseUrl+"/kennels"+"?id="+id,_self.createKennel);
    };

    _self.createKennels=function(data){
        if(!data){
            return undefined;
        }

        return objectSvc.createMany(_self.createKennel,data);
    };

    _self.createKennel=function(data){
        if(!data){
            return undefined;
        }

        let result={};

        result.id=data.Id;
        result.name=data.Name;

        if(data.Dogs){
            result.dogs=dog_service.createDogs(data.Dogs);
        }

        
        return result;
    };

}