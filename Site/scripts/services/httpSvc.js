ngServices['httpSvc']=function($http, $rootScope, $location, objectSvc) {
    
    this.csrf=undefined;
    this.cameFrom=undefined;

    //Dogs
    this.getDogs=function(){
        return this.get("/Api/api.php/dogs/?csrf="+this.csrf,objectSvc.createDogs);
    };
    this.getDog=function(id){
        if(!id){
            return undefined;
        }

        return this.get("/Api/api.php/dogs/?csrf="+this.csrf+"&id="+id);
    };
    this.postDog=function(dog){
        return this.post("/Api/api.php/dogs/?csrf="+this.csrf,dog);
    };
    this.putDog=function(id,dog){
        return this.put("/Api/api.php/dogs/?csrf="+this.csrf+"&id="+id,dog);
    };

    //Formvalue
    this.getFormvaules=function(){
        return this.get("/Api/api.php/formvalues/?csrf="+this.csrf,objectSvc.createFormvalues);
    };

    //Exam
    this.getExams=function(){
        return this.get("/Api/api.php/exams/?csrf="+this.csrf,objectSvc.createExams);
    };

    this.getExam=function(id){
        return this.get("/Api/api.php/exams/?csrf="+this.csrf+"&id="+id,objectSvc.createExams);
    }


    //=====Configs
    this.getConfig=function(name){
        return this.get("resources/configs/"+name+".json");
    };

    //=====Session Handling
    this.login=function(credentials){
        return this.post("/Api/api.php",credentials);
    }

    //General Stuff
    this.get=function(url,createMethod){
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
    
    this.post=function(url,data,createMethod){
        return $http.post(url,data).then(function(response,error){
            if(!createMethod){
                return response.data;
            }else{
                return createMethod(response.data);
            }
        });
    }

    this.put=function(url,data,createMethod){
        return $http.put(url,data).then(function(response,error){
            if(!createMethod){
                return response.data;
            }else{
                return createMethod(response.data);
            }
        });
    }
};