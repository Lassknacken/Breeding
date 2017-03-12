ngServices["profile_service"]=function($rootScope, httpSvc,objectSvc, kennelService){

    let _self=this;

    _self.getProfile=function(id,full){
        
        if(!id){
            return undefined;
        }

        if(full){
            return httpSvc.get(httpSvc.apiBaseUrl+"/Users"+"?id="+id+"&full="+full,_self.createProfile);
        }

        return httpSvc.get(httpSvc.apiBaseUrl+"/Users"+"?id="+id,_self.createProfile);        
    };

    
    
    //=====create
    _self.createProfiles=function(data){
        if(!data){
            return undefined;
        }

        return objectSvc.createMany(_self.createProfile,data);
    }


    _self.createProfile=function(data){

        if(!data){
            return undefined;
        }

        let result={};

        result.id=data.Id;
        result.name=data.Name;
        result.familyname=data.FamilyName;
        result.username=data.Username;
        result.email=data.Email;

        if(data.Kennels){
            result.kennels=kennelService.createKennels(data.Kennels);
        }

        return result;  	
    }
};