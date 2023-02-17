pizza_list_array = [];

function getmenu()
	{    
        
        var item = document.getElementById("pizza_name").value; 
       
        
        pizza_list_array.push()(item);
        
        var remove_commas = pizza_list_array.join("<br># ");
        document.getElementById("display_Menue").innerHTML =  "# " + remove_commas;
	}