ngControllers["dogCtrl"]=function(httpSvc){
    var _self=this;

    _self.ctor=function(){
        httpSvc.getFormvaules().then(function(result){
            _self.formvalues=result;
        });
    };

    _self.saveDog=function(){
        if(_self.dog.id==undefined || _self.dog.id===0 ){
            httpSvc.postDog(_self.dog).then(function(result){
                _self.dog=result;
            });
        }else{
            //PUT
        }

        
    }

    _self.ctor();
    
};