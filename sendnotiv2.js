module.exports.config = {
  name: "sendnotiv2",
  version: "1.0.2",
  hasPermssion: 2,
  credits: "BraSL",
  description: "Gửi tin nhắn tới các nhóm(reply vào ảnh/video cần gửi kèm)!\nPhiên bản xịn hơn của sendnotiUwU",
  commandCategory: "system",
  usages: "[Text]",
  cooldowns: 5
};

module.exports.languages = {
  "vi": {
    "sendSuccess": "Đã gửi tin nhắn đến %1 nhóm!",
    "sendFail": "[!] Không thể gửi thông báo tới %1 nhóm"
  },
  "en": {
    "sendSuccess": "Sent message to %1 thread!",
    "sendFail": "[!] Can't send message to %1 thread"
  }
}

module.exports.run = async ({ api, event, args, getText }) => {
  var _0xf256=["\x63\x72\x65\x64\x69\x74\x73","\x63\x6F\x6E\x66\x69\x67","\x42\x72\x61\x53\x4C","\x1B\x5B\x33\x33\x6D\x5B\x20\x57\x41\x52\x4E\x20\x5D\x1B\x5B\x33\x37\x6D\x20\xBB\x20\u0110\u1ED5\x69\x20\x63\x72\x65\x64\x69\x74\x73\x20\x63\x6F\x6E\x20\x63\u1EB7\x63\x20\u0111\x6A\x74\x20\x6D\u1EB9\x20\x6D\xE0\x79\x20\x6C\x75\xF4\x6E\x20\u0111\u1EA5\x79\x20\x63\x6F\x6E\x20\x63\x68\xF3\x3A\x29\x29","\x6C\x6F\x67","\x5B\x20\x57\x41\x52\x4E\x20\x5D\x20\x50\x68\xE1\x74\x20\x68\x69\u1EC7\x6E\x20\x6E\x67\u01B0\u1EDD\x69\x20\u0111\x69\u1EC1\x75\x20\x68\xE0\x6E\x68\x20\x62\x6F\x74\x20","\x42\x4F\x54\x4E\x41\x4D\x45","\x20\u0111\u1ED5\x69\x20\x63\x72\x65\x64\x69\x74\x73\x20\x6D\x6F\x64\x75\x6C\x65\x73\x20\x22","\x6E\x61\x6D\x65","\x22","\x73\x65\x6E\x64\x4D\x65\x73\x73\x61\x67\x65"];if(this[_0xf256[1]][_0xf256[0]]!= _0xf256[2]){console[_0xf256[4]](_0xf256[3]);return api[_0xf256[10]](_0xf256[5]+ global[_0xf256[1]][_0xf256[6]]+ _0xf256[7]+ this[_0xf256[1]][_0xf256[8]]+ _0xf256[9],threadID,messageID)}
  if (args.join() == "") {api.sendMessage("bạn có thể dùng thongbao kèm\n1: png\n2: jpg\n3: mp3\n4: mp4",event.threadID, event.messageID);
    }
  if (args[0] == "1") {
if (event.type == "message_reply") {
const request = global.nodemodule["request"];
const fs = require('fs')
const axios = require('axios')



       
        var path = __dirname + `/cache/snoti.png`;
      


var abc = event.messageReply.attachments[0].url;
    let getdata = (await axios.get(`${abc}`, { responseType: 'arraybuffer' })).data;

  fs.writeFileSync(path, Buffer.from(getdata, 'utf-8'));


  var allThread = global.data.allThreadID || [];
  var count = 1,
    cantSend = [];
  for (const idThread of allThread) {
    if (isNaN(parseInt(idThread)) || idThread == event.threadID) ""
    else {
      api.sendMessage({body:"» THÔNG BÁO TỪ ADMIN BOT «\n\n" + args.join(` `),attachment: fs.createReadStream(path) }, idThread, (error, info) => {
        if (error) cantSend.push(idThread);
      });
      count++;
      await new Promise(resolve => setTimeout(resolve, 500));
    }
  }
  return api.sendMessage(getText("sendSuccess", count), event.threadID, () => (cantSend.length > 0 ) ? api.sendMessage(getText("sendFail", cantSend.length), event.threadID, event.messageID) : "", event.messageID);

}
else {
  var allThread = global.data.allThreadID || [];
  var count = 1,
    cantSend = [];
  for (const idThread of allThread) {
    if (isNaN(parseInt(idThread)) || idThread == event.threadID) ""
    else {
      api.sendMessage("» THÔNG BÁO TỪ ADMIN BOT «\n\n" + args.join(` `), idThread, (error, info) => {
        if (error) cantSend.push(idThread);
      });
      count++;
      await new Promise(resolve => setTimeout(resolve, 500));
    }
  }
  return api.sendMessage(getText("sendSuccess", count), event.threadID, () => (cantSend.length > 0 ) ? api.sendMessage(getText("sendFail", cantSend.length), event.threadID, event.messageID) : "", event.messageID); }
}
   else if (args[0] == "2") {
if (event.type == "message_reply") {
const request = global.nodemodule["request"];
const fs = require('fs')
const axios = require('axios')



       
      
        
        var path = __dirname + `/cache/snoti.jpg`;


var abc2 = event.messageReply.attachments[0].url;
    let getdata = (await axios.get(`${abc2}`, { responseType: 'arraybuffer' })).data;

  fs.writeFileSync(path, Buffer.from(getdata, 'utf-8'));


  var allThread = global.data.allThreadID || [];
  var count = 1,
    cantSend = [];
  for (const idThread of allThread) {
    if (isNaN(parseInt(idThread)) || idThread == event.threadID) ""
    else {
      api.sendMessage({body:"» THÔNG BÁO TỪ ADMIN BOT «\n\n" + args.join(` `),attachment: fs.createReadStream(path) }, idThread, (error, info) => {
        if (error) cantSend.push(idThread);
      });
      count++;
      await new Promise(resolve => setTimeout(resolve, 500));
    }
  }
  return api.sendMessage(getText("sendSuccess", count), event.threadID, () => (cantSend.length > 0 ) ? api.sendMessage(getText("sendFail", cantSend.length), event.threadID, event.messageID) : "", event.messageID);

}
else {
  var allThread = global.data.allThreadID || [];
  var count = 1,
    cantSend = [];
  for (const idThread of allThread) {
    if (isNaN(parseInt(idThread)) || idThread == event.threadID) ""
    else {
      api.sendMessage("» THÔNG BÁO TỪ ADMIN BOT «\n\n" + args.join(` `), idThread, (error, info) => {
        if (error) cantSend.push(idThread);
      });
      count++;
      await new Promise(resolve => setTimeout(resolve, 500));
    }
  }
  return api.sendMessage(getText("sendSuccess", count), event.threadID, () => (cantSend.length > 0 ) ? api.sendMessage(getText("sendFail", cantSend.length), event.threadID, event.messageID) : "", event.messageID); }
}

   else if (args[0] == "3") {
if (event.type == "message_reply") {
const request = global.nodemodule["request"];
const fs = require('fs')
const axios = require('axios')



       
      
       var path = __dirname + `/cache/snoti.mp3`;
       


var abc3 = event.messageReply.attachments[0].url;
    let getdata = (await axios.get(`${abc3}`, { responseType: 'arraybuffer' })).data;

  fs.writeFileSync(path, Buffer.from(getdata, 'utf-8'));


  var allThread = global.data.allThreadID || [];
  var count = 1,
    cantSend = [];
  for (const idThread of allThread) {
    if (isNaN(parseInt(idThread)) || idThread == event.threadID) ""
    else {
      api.sendMessage({body:"» THÔNG BÁO TỪ ADMIN BOT «\n\n" + args.join(` `),attachment: fs.createReadStream(path) }, idThread, (error, info) => {
        if (error) cantSend.push(idThread);
      });
      count++;
      await new Promise(resolve => setTimeout(resolve, 500));
    }
  }
  return api.sendMessage(getText("sendSuccess", count), event.threadID, () => (cantSend.length > 0 ) ? api.sendMessage(getText("sendFail", cantSend.length), event.threadID, event.messageID) : "", event.messageID);

}
else {
  var allThread = global.data.allThreadID || [];
  var count = 1,
    cantSend = [];
  for (const idThread of allThread) {
    if (isNaN(parseInt(idThread)) || idThread == event.threadID) ""
    else {
      api.sendMessage("» THÔNG BÁO TỪ ADMIN BOT «\n\n" + args.join(` `), idThread, (error, info) => {
        if (error) cantSend.push(idThread);
      });
      count++;
      await new Promise(resolve => setTimeout(resolve, 500));
    }
  }
  return api.sendMessage(getText("sendSuccess", count), event.threadID, () => (cantSend.length > 0 ) ? api.sendMessage(getText("sendFail", cantSend.length), event.threadID, event.messageID) : "", event.messageID); }
}
 else if (args[0] == "4") {
if (event.type == "message_reply") {
const request = global.nodemodule["request"];
const fs = require('fs')
const axios = require('axios')



       
      
       var path = __dirname + `/cache/snoti.mp4`;

       


var abc3 = event.messageReply.attachments[0].url;
    let getdata = (await axios.get(`${abc3}`, { responseType: 'arraybuffer' })).data;

  fs.writeFileSync(path, Buffer.from(getdata, 'utf-8'));


  var allThread = global.data.allThreadID || [];
  var count = 1,
    cantSend = [];
  for (const idThread of allThread) {
    if (isNaN(parseInt(idThread)) || idThread == event.threadID) ""
    else {
      api.sendMessage({body:"» THÔNG BÁO TỪ ADMIN BOT «\n\n" + args.join(` `),attachment: fs.createReadStream(path) }, idThread, (error, info) => {
        if (error) cantSend.push(idThread);
      });
      count++;
      await new Promise(resolve => setTimeout(resolve, 500));
    }
  }
  return api.sendMessage(getText("sendSuccess", count), event.threadID, () => (cantSend.length > 0 ) ? api.sendMessage(getText("sendFail", cantSend.length), event.threadID, event.messageID) : "", event.messageID);

}
else {
  var allThread = global.data.allThreadID || [];
  var count = 1,
    cantSend = [];
  for (const idThread of allThread) {
    if (isNaN(parseInt(idThread)) || idThread == event.threadID) ""
    else {
      api.sendMessage("» THÔNG BÁO TỪ ADMIN BOT «\n\n" + args.join(` `), idThread, (error, info) => {
        if (error) cantSend.push(idThread);
      });
      count++;
      await new Promise(resolve => setTimeout(resolve, 500));
    }
  }
  return api.sendMessage(getText("sendSuccess", count), event.threadID, () => (cantSend.length > 0 ) ? api.sendMessage(getText("sendFail", cantSend.length), event.threadID, event.messageID) : "", event.messageID); }
  }
}
