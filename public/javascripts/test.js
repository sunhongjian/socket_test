var $msg = $("#msg")
var gl = false
var t = new Date();
var socket = io.connect('http://192.168.1.254:3002');
socket.on('news', function (data) {
  if(!gl) {
    $msg.append(" <b>回话连接成功!</b>");
    for(a in data.msgList) {
      $msg.append('<p>'+t.getHours()+':'+t.getMinutes()+':'+t.getSeconds()+': '+data.msgList[a]+'</p>');
    }
    gl = true
  }
  if(data.info)
  $msg.append('<p>'+t.getHours()+':'+t.getMinutes()+':'+t.getSeconds()+': '+data.info+'</p>');
});
$('#send').click(function(){
  let val = {
    id: Math.round(Math.random()*10),
    msg: $('#input').val()
  }
  socket.emit('msg', val)
  $msg.append('<p>'+t.getHours()+':'+t.getMinutes()+':'+t.getSeconds()+': '+val.msg+'</p>');
})