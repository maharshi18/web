var current_page = 1;
var records_per_page = 5;

var objJson = [
    { groupname: "first"},
    { groupname: "second"},
    { groupname: "third"},
    { groupname: "fourth"},
    { groupname: "fifth"},
    { groupname: "sixth"},
    { groupname: "seventh"},
    { groupname: "eighth"},
    { groupname: "groupname 9"},
    { groupname: "groupname 10"},
    { groupname: "groupname 1"},
    { groupname: "groupname 2"},
    { groupname: "groupname 3"},
    { groupname: "groupname 4"},
    { groupname: "groupname 5"},
    { groupname: "groupname 6"},
    { groupname: "groupname 7"},
    { groupname: "groupname 8"},
    { groupname: "groupname 9"},
    { groupname: "groupname 10"},
    { groupname: "first"},
    { groupname: "second"},
    { groupname: "third"},
    { groupname: "fourth"},
    { groupname: "fifth"},
    { groupname: "sixth"},
    { groupname: "seventh"},
    { groupname: "eighth"},
    { groupname: "groupname 9"},
    { groupname: "groupname 10"},
    { groupname: "groupname 1"},
    { groupname: "groupname 2"},
    { groupname: "groupname 3"},
    { groupname: "groupname 4"},
    { groupname: "groupname 5"},
    { groupname: "groupname 6"},
    { groupname: "groupname 7"},
    { groupname: "groupname 8"},
    { groupname: "groupname 9"},
    { groupname: "groupname 10"},
    { groupname: "first"},
    { groupname: "second"},
    { groupname: "third"},
    { groupname: "fourth"},
    { groupname: "fifth"},
    { groupname: "sixth"},
    { groupname: "seventh"},
    { groupname: "eighth"},
    { groupname: "groupname 9"},
    { groupname: "groupname 10"},
    { groupname: "groupname 1"},
    { groupname: "groupname 2"},
    { groupname: "groupname 3"},
    { groupname: "groupname 4"},
    { groupname: "groupname 5"},
    { groupname: "groupname 6"},
    { groupname: "groupname 7"},
    { groupname: "groupname 8"},
    { groupname: "groupname 9"},
    { groupname: "groupname 10"}    
]; // Can be obtained from another source, such as your objJson variable

function prevPage()
{
    if (current_page > 1) {
        current_page--;
        changePage(current_page);
    }
}

function nextPage()
{
    if (current_page < numPages()) {
        current_page++;
        changePage(current_page);
    }
}
    
function changePage(page)
{
    var btn_next = document.getElementById("btn_next");
    var btn_prev = document.getElementById("btn_prev");
    var listing_table = document.getElementById("listingTable");
    var page_span = document.getElementById("page");
 
    // Validate page
    if (page < 1) page = 1;
    if (page > numPages()) page = numPages();

    listing_table.innerHTML = "";

    for (var i = (page-1) * records_per_page; i < (page * records_per_page); i++) {
        listing_table.innerHTML += objJson[i].groupname + "<br>";
    }
    page_span.innerHTML = page;

    if (page == 1) {
        btn_prev.style.visibility = "hidden";
    } else {
        btn_prev.style.visibility = "visible";
    }

    if (page == numPages()) {
        btn_next.style.visibility = "hidden";
    } else {
        btn_next.style.visibility = "visible";
    }
    // console.log("Hello");
    // makeToolbar();
}

function numPages()
{
    return Math.ceil(objJson.length / records_per_page);
}

function makeToolbar(){
    var b = document.getElementById("bar");
    for(var i=0; i<numPages(); i++){
        var li_temp = document.createElement("li");
        var c = document.createAttribute("class");
        c.value = "page-item";
        li_temp.setAttribute("class", "page-item");
        var a_temp = document.createElement("a");
        var c2 = document.createAttribute("class");
        c2.value = "page-link";
        a_temp.setAttribute("class", "page-link");
        var c3 = document.createAttribute("href");
        stringg = "javascript:changePage(" + (1+i) + ")";
        a_temp.setAttribute("href", stringg);
        a_temp.innerHTML = i+1;
        li_temp.appendChild(a_temp);
        b.appendChild(li_temp);
    }
    // b.appendChild(document.createElement("li"));
    // console.log("-----------------");
}

window.onload = function() {
    changePage(1);
    makeToolbar();
};