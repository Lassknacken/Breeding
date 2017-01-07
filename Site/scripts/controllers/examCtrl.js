ngControllers["examCtrl"]=function(httpSvc){
    var _self=this;

    _self.ctor=function(){
        httpSvc.getExams().then(function(result){
            _self.exams=result;
        });
    };

    _self.loadExam=function(id){
        httpSvc.getExam(id).then(function(result){
            _self.exam=result;
        });
    };

    _self.saveExam=function(){
        if(_self.exam.id==undefined || _self.exam.id===0 ){
            httpSvc.postExam(_self.exam).then(function(result){
                _self.loadExam(result);
            });
        }else{
            httpSvc.putExam(_self.exam.id,_self.exam);
        }
    };

    _self.ctor();
    
};