
const search =() =>{
   
    // below line function---- it takes the data from the search box which is given by user 
    // and take the value and change it into upper case and store into searchbox variable
     const searchbox = document.getElementById("search-item").value.toUpperCase();
    
    // taking all data from id->product-list
     const storeitems=document.getElementById("product-list")
    
    // taking data for all elements in product class for each product class
     const product = document.querySelectorAll(".product")
   
//    taking data from h2 tag
     const pname=storeitems.getElementsByTagName("h2")



     for(var i=0; i<pname.length;i++){
let match = product[i].getElementsByTagName('h2')[0];

if(match){
let textvalue=match.textContent || match.innerHTML

if(textvalue.toUpperCase().indexOf(searchbox) > -1){
    product[i].style.display="";

} 
else{
    product[i].style.display='none';
}
}

}


}