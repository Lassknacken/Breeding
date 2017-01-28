ngServices["exam_service"]=function($rootScope,httpSvc, objectSvc){
    let _self=this;

    _self.getExams=function(){
        
        return httpSvc.get(httpSvc.apiBaseUrl+"/exams", _self.createExams)
        .then(function(result){
            return result;
        });
    };

    _self.getExam=function(id){

        for(let key in _self.exams){
            if(_self.exams[key].id===id){
                return _self.exams[key];
            }
        }
    }

    _self.createExams=function(data){
        if(!data){
            return undefined;
        }

        return objectSvc.createMany(_self.createExam,data);
    }


    _self.createExam=function(data){
        if(!data){
            return undefined;
        }

        let result={};

        result.id=data.Id;
        result.name=data.Name;
        
        return result;
    };


};