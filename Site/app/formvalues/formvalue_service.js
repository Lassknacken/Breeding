ngServices["formvalue_service"]=function($q, $rootScope,httpSvc, objectSvc){
    let _self=this;

    //Formvalue
    _self.getFormvaules=function(){
        
        return httpSvc.get(httpSvc.apiBaseUrl+"/formvalues", _self.createFormvalues)
        .then(function(result){
            _self.formvalues= result;
            return _self.formvalues;
        });
    };

    _self.getFormvalue=function(id){

        


        if(!_self.formvalues){
            
            return _self.getFormvaules.then(function(result){
                
                for(let key in _self.formvalues)
                {
                    if(_self.formvalues[key].id===id)
                    {
                        return _self.formvalues[key];
                    }
                }
            });

        }else{
            return $q(function(){
                for(let key in _self.formvalues){
                    if(_self.formvalues[key].id===id){
                        return _self.formvalues[key];
                    }
                }
            });
        }
        
    }

    _self.createFormvalues=function(data){
        if(!data){
            return undefined;
        }

        return objectSvc.createMany(_self.createFormvalue,data);
    }


    _self.createFormvalue=function(data){
        if(!data){
            return undefined;
        }

        let result={};

        result.id=data.Id;
        result.name=data.Name;
        
        return result;
    };

};