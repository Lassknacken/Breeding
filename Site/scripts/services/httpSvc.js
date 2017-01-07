ngServices['httpSvc']=function($http, $rootScope, $location, objectSvc) {
    

    //Dogs
    this.getDogs=function(){
        return this.get("/Api/api.php/dogs/",objectSvc.createDogs);
    };
    this.getDog=function(id){
        if(!id){
            return undefined;
        }

        return this.get("/Api/api.php/dogs/"+id);
    };
    this.postDog=function(dog){
        return this.post("/Api/api.php/dogs/",dog);
    };
    this.putDog=function(id,dog){
        return this.put("/Api/api.php/dogs/"+id,dog);
    };

    //Formvalue
    this.getFormvaules=function(){
        return this.get("/Api/api.php/formvalues/",objectSvc.createFormvalues);
    };

    //Exam
    this.getExams=function(){
        return this.get("/Api/api.php/exams/",objectSvc.createExams);
    };

    this.getExam=function(id){
        return this.get("/Api/api.php/exams/?id="+id,objectSvc.createExams);
    }


    //=====Configs
    this.getConfig=function(name){
        return this.get("resources/configs/"+name+".json");
    };

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