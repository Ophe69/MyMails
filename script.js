var messagesCount = $('p').length;
document.getElementById('count').textContent = messagesCount;


for(var i=0; i<document.getElementsByClassName('trash').length; i++){
    document.getElementsByClassName('trash')[i].addEventListener("click",
    function(){
        this.parentNode.remove();
        var messagesCount = document.getElementsByTagName('p').length;
        ('count').textContent = messagesCount;
    }
    )

}

$('#btn-add').click(function(){
        $('body').append(`<div class="row">
        <img class="avatar" src="avatar-1.jpg">
        <div>
            <h6>Ophelia TAGBO</h6>
            <p>${$('#add-message').val()}</p>
        </div>
        <img class="trash" src="trash.png">
    </div>`)



        /*var mainDiv = document.createElement("div");
            mainDiv.className = "row";
            document.body.appendChild(mainDiv);

        var image = document.createElement("img");
            image.className = "avatar";
            image.src = "avatar-1.jpg";
            mainDiv.appendChild(image);
        
        var nameMessageDiv = document.createElement("div");
            mainDiv.appendChild(nameMessageDiv);

        var h6 = document.createElement('h6');
            h6.textContent = "Eric Dupont";
            nameMessageDiv.appendChild(h6);

        var content = document.createElement('p');
            content.textContent = document.getElementById('add-message').value;
            nameMessageDiv.appendChild(content);

        var trash = document.createElement('img');
        trash.src = "trash.png";
        trash.className = "trash";
        mainDiv.appendChild(trash);

        document.getElementById('add-message').value = "";
        
        var messagesCount = document.getElementsByTagName('p').length;
        document.getElementById('count').textContent = messagesCount;

        
        $(".trash").click( 
            function(){
                this.parentNode.remove();
                var messagesCount = document.getElementsByTagName('p').length;
                document.getElementById('count').textContent = messagesCount;

            }
        )*/
    }

)

$('h6').each{
    function(){
        if(${"#search"})
    }
} 

