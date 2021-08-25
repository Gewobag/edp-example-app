(function(){

    const node = document.getElementById("result");

    window.dispatch = function(route){

        node.value = "please wait ...";

        switch(route){

            case "meter":

                request("/meter/", process);
                break;

            case "location":

                request("/location/", process);
                break;

            case "data":

                request("/data/wmz/", process);
                break;
        }
    };

    function process(data){

        if(data){

            data = JSON.parse(data);

            // do something with the data ...

            node.value = JSON.stringify(data, null, 4);
        }
        else{

            node.value = "- request failed -";
        }
    }

    function request(route, callback){

        const xhr = new XMLHttpRequest();

        xhr.addEventListener("load", () => callback(xhr.responseText));
        xhr.open("GET", route);
        xhr.send();
    }

}());