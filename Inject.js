    /**
     *  @author Alexey Kulikov <clops>
     **/
    //keeping track of the frame which the user clicked in
    var clickedIn;
    
    safari.self.addEventListener("message", function(msg){
        switch(msg.name){
            case 'reloadFrame': {
                if(clickedIn == window.self){
                    document.location.reload();
                    break;
                }
            }
        }
    }, false);
    
    document.addEventListener("contextmenu", function(msg){
        clickedIn = window.self;        
    }, false);

