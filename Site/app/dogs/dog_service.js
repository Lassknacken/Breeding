ngServices["dog_service"]=function($rootScope,httpSvc,objectSvc,formvalue_service,exam_service){

    let _self=this;

    //Dogs
    _self.getDogs=function(){
        return httpSvc.get(
            httpSvc.apiBaseUrl+"/dogs", _self.createDogs);
    };
    _self.getDog=function(id,full){
        if(!id){
            return undefined;
        }

        if(full){
            return httpSvc.get(httpSvc.apiBaseUrl+"/dogs"+"?id="+id+"&full="+full,_self.createDog);
        }

        return httpSvc.get(httpSvc.apiBaseUrl+"/dogs"+"?id="+id,_self.createDog);
        
    };
    _self.postDog=function(dog){
        return httpSvc.post(httpSvc.apiBaseUrl+"/dogs",dog);
    };
    _self.putDog=function(id,dog){
        return httpSvc.put(httpSvc.apiBaseUrl+"/dogs"+"?id="+id,dog);
    };

    //=====create
    _self.createDogs=function(data){
        if(!data){
            return undefined;
        }

        return objectSvc.createMany(_self.createDog,data);
    }


    _self.createDog=function(data){

        if(!data){
            return undefined;
        }

        let result={};

        result.id=data.Id;
        result.name=data.Name;
        result.birth=new Date(data.Birth.date);
        result.male=data.Male;
        result.chipnumber=data.Chipnumber;
        result.booknumber=data.Booknumber;
        result.breedable=data.Breedable;
        result.comment=data.Comment;
        result.race="Riesenschnauzer";

        result.formvalue=formvalue_service.createFormvalue(data.Formvalue);
        result.exams=exam_service.createExams(data.Exams);

        return result;
    }
};