function connect() {
    var socket = new SockJS('/chat-messaging');
    stompClient = Stomp.over(socket);
    stompClient.connect({}, function (frame) {
        stompClient.subscribe('/topic/message', function (response) {
            console.log("RESPONSE_BODY IS" + response.body);
            var data = JSON.parse(response.body);
            draw("left", data);
        });
    });
}

connect();

function getURLParameter() {
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('=');
    var name_from_url = sURLVariables[1];
    localStorage.setItem('username', name_from_url);
}

getURLParameter();

function draw(side, data) {
    var $message;
    $message = $($('.message_template').clone().html());
    $message.find('.name').html(data.sender);
    $message.addClass(side).find('.text').html(data.message);
    $('.messages').append($message);
    return setTimeout(function () {
        return $message.addClass('appeared');
    }, 0);
}

function disconnect() {
    stompClient.disconnect();
}

function sendMessage() {
    stompClient.send("/app/message", {}, JSON.stringify(
        {'message': $("#message_input_value").val(), 'sender': localStorage.getItem('username')}));
}