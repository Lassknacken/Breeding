ngServices['httpSvc']=function($http, $rootScope, $location, objectSvc) {
    
    let _self =this;

    _self.csrf=undefined;
    _self.cameFrom=undefined;
    _self.apiBaseUrl='http://localhost:8001/api/api.php';


    //Exam
    _self.getExams=function(){
        return _self.get(_self.apiBaseUrl+"/exams",objectSvc.createExams);
    };

    _self.getExam=function(id){
        return _self.get(_self.apiBaseUrl+"/exams"+"?id="+id,objectSvc.createExams);
    }


    //=====Configs
    _self.getConfig=function(name){
        return _self.get("app/"+name+"/"+name+".json");
    };

    //=====Session Handling
    _self.login=function(credentials){
        return _self.post(_self.apiBaseUrl+"",credentials);
    }

    //General Stuff
    _self.get=function(url,createMethod){
        console.log(url);
        return $http.get(url).then(function(response){
            if(!createMethod){
                return response.data;
            }else{
                return createMethod(response.data);
            }
        },function(error){
            if(error && error.status){

                switch(error.status){
                    case 401:{
                        $rootScope.$broadcast('unauthorized');
                        break;
                    }
                }                
            }
        });
    }
    
    _self.post=function(url,data,createMethod){
        return $http.post(url,data).then(function(response,error){
            if(!createMethod){
                return response.data;
            }else{
                return createMethod(response.data);
            }
        });
    }

    _self.put=function(url,data,createMethod){
        return $http.put(url,data).then(function(response,error){
            if(!createMethod){
                return response.data;
            }else{
                return createMethod(response.data);
            }
        });
    }
};