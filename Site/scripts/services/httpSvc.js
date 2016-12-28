ngServices['httpSvc']=function($http,objectSvc) {
    

    //dogs
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

    //formvalue
    this.getFormvaules=function(){
        return this.get("/Api/api.php/formvalues/",objectSvc.createFormvalues);
    };


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
        });
    }
    
    this.post=function(url,data,createMethod){
        return $http.post(url,data).then(function(response){
            if(!createMethod){
                return response.data;
            }else{
                return createMethod(response.data);
            }
        });
    }

    this.put=function(url,data,createMethod){
        return $http.put(url,data).then(function(response){
            if(!createMethod){
                return response.data;
            }else{
                return createMethod(response.data);
            }
        });
    }
};