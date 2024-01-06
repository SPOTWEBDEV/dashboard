$(document).ready(function() {


    $.get("/content/dam/indusind-corporate/careers/json/latestnews.html", function(data, status) {
        html = "";

        //console.log(data[0]);
        //debugger;
        let dataObj = JSON.parse(data);
        console.log(dataObj);
        for (i = 0; i < dataObj.length; i++) {

            title = dataObj[i].title.replace(/\?/g, "");
            html = html + "<div class='post border-bottom mb-3 border-primary'><div class='post-body pb-3'><div class='mb-2'><span class='post-date text-primary'>" +
                dataObj[i].description + "</span></div><h6 class='post-title three-lines'>" +
                "<a href='" + dataObj[i].pagePath + ".html'>" + title + "</a></h6></div></div>"
        }
        $('#latestnews').html(html);
    });



    /* $.ajax({
                 type: "GET",
                 url: "/bin/indus/commonquery?param=lstnews",
                //data: JSON.stringify(data),
                 contentType: "application/json",
                 success: function(data) {

                     html = "";	
                 //    debugger;
                     let dataObj = JSON.parse(data);
                     console.log(dataObj);
                     for(i=0;i<dataObj.length;i++){

                         title = dataObj[i].title.replace(/\?/g, "");
                     html = html + "<div class='post border-bottom mb-3 border-primary'><div class='post-body pb-3'><div class='mb-2'><span class='post-date text-primary'>"
                           +dataObj[i].description+"</span></div><h6 class='post-title three-lines'>"
                           +"<a href='"+dataObj[i].pagePath+"'>"+title+"</a></h6></div></div>"
                     }
                     $('#latestnews').html(html);

                 }
             });*/

});