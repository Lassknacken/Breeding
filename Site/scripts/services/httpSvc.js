ngServices['httpSvc']=function($http,objectService) {
    

    this.getDogs=function(){
        this.get("Api/api.php/dogs/",objectService.createDogs);
    };
    this.getDog=function(id){
        if(!id){
            return undefined;
        }

        return this.get("Api/api.php/dogs/"+id);
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
                return response.data;
            }
        });
    }
};