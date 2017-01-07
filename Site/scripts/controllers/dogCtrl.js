ngControllers["dogCtrl"]=function(httpSvc){
    var _self=this;

    _self.ctor=function(){
        httpSvc.getFormvaules().then(function(result){
            _self.formvalues=result;
        });
    };

    _self.loadDog=function(id){
        httpSvc.getDog(id).then(function(result){
            _self.dog=result;
        });
    };

    _self.saveDog=function(){
        if(_self.dog.id==undefined || _self.dog.id===0 ){
            httpSvc.postDog(_self.dog).then(function(result){
                _self.loadDog(result);
            });
        }else{
            httpSvc.putDog(_self.dog.id,_self.dog);
        }
    };

    _self.ctor();
    
};