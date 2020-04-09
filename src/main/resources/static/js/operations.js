var username = null;

function connect() {
    var socket = new SockJS('/chat-messaging');
    stompClient = Stomp.over(socket);
    stompClient.connect({}, function (frame) {
        console.log("connected: " + frame);
        stompClient.subscribe('/chat/messages', function (response) {
            var data = JSON.parse(response.body);
            draw("left", data.message);
        });
        username=getURLParameter();
    });
}

connect();

function getURLParameter() {
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('=');
    return sURLVariables[1];
}

function draw(side, text) {
    var $message;
    $message = $($('.message_template').clone().html());
    $('#name').text(username);
    $message.addClass(side).find('.text').html(text);
    $('.messages').append($message);
    return setTimeout(function () {
        return $message.addClass('appeared');
    }, 0);
}

function disconnect() {
    stompClient.disconnect();
}

function sendMessage() {
    stompClient.send("/app/message", {}, JSON.stringify({'message': $("#message_input_value").val()}));
}