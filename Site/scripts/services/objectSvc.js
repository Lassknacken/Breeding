ngServices['objectSvc']=function() {
    let _self=this;

    _self.createExams=function(data){
        if(!data && !data.exams && !data.exams.records){
            return undefined;
        }

        let result = _self.createMany(_self.createExam,data);
        
        return result;
    };

    _self.createExam=function(data){
        if(!data){
            return undefined;
        }

        let result={};

        result.id=data[0];
        result.name=data[1];
        
        return result;
    }

//======
    _self.createMany=function(method, arr){
        if(arr==undefined || arr.length===0){
            return [];
        }
        let result=[];
        for(let i=0;i<arr.length;i++){
            result.push(method(arr[i]));
        }
        return result;
    }
}