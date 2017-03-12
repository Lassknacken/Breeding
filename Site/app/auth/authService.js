ngServices["authService"]=function($rootScope,httpSvc,objectSvc){

    let _self=this;

    _self.getProfile=function(id){
        if(id || id==0){
            return httpSvc.get(httpSvc.apiBaseUrl+"/Login?id="+id,_self.createProfile);
        }

        return httpSvc.get(httpSvc.apiBaseUrl+"/Login",_self.createProfile);
        
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

        return result;  	
    }
};