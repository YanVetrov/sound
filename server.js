var express = require("express");
var fs = require("fs");
var bodyParser = require('body-parser');
var request = require("request-promise-any");
var cheerio = require("cheerio");
var app = express();
var querystring = require("querystring")

var osmo = require("osmosis")











// bot.command('world', ctx => {
//     const userId = ctx.message.from.id;

//     // if user id does not exist create one  
//     if (!state[userId])
//         state[userId] = { id: userId };

//     // save/update user last command    
//     state[userId].command = 'world';
//     return ctx.replyWithMarkdown(`Enter a subreddit name to get *top* posts.`);
// });






// bot.command('rus', ctx => {
//     const userId = ctx.message.from.id;
//     if (!state[userId])
//         state[userId] = { id: userId };
//     state[userId].command = 'rus';
//     return ctx.replyWithMarkdown('Enter a subreddit name to get *hot* posts.');
// });



// bot.hears('комменты', (ctx) => {
//     function randomm(min, max) {
//         return Math.random() * (max - min) + min;
//     }
//     var comments = require("./comments.json")
//     console.log(parseInt(randomm(0, comments.length - 1)));
//     var last = comments[parseInt(randomm(0, comments.length - 1))];
//     var signer = last.signer;
//     var nick = last.nick;
//     var comment = last.comment;
//     ctx.reply('комментарий ' + comment + ' от пользователя ' + nick + ' под исполнителем ' + signer.toLocaleLowerCase())
//     // request.get('http://sample2.com/search/f/feduk+%D0%BC%D0%BE%D1%80%D1%8F%D0%BA/').pipe(fs.createWriteStream('source.html'))
//     // var url = "http://sample2.com/search/f/feduk";

//     // request(url, function(error, response, body) {
//     //     if (!error) {
//     //         var $ = cheerio.load(body)
//     //         var x = $(".playlist-btn-down");
//     //         var href = x.attr('href');
//     //         console.log(href);













//     //     }
//     //     else {
//     //         console.log("Произошла ошибка: " + error);
//     //     }
//     // });

// })
// bot.hears(/buy/i, (ctx) => ctx.reply('Buy-buy'))

// var lastName = '';
// bot.on('text', (ctx) => {
//     // request('https://yurkas.by/s_vkhodnye_dveri/', function(error, response, body) {
//     //         if (!error) {
//     //           var $ = cheerio.load(body);
//     //           var count = $('.products__item')
//     //           for(let i = 0;i<count.length;i++){
//     //               var img = $('.products__item-image-link .img-response').eq(i).attr('src');
//     //               img = 'https://yurkas.by'+img;
//     //               var name = $('.products__item-param').eq(i).text();
//     //               var price = $('.products__item-price-current-inner').eq(i).text();
//     //               console.log(`${name} : ${img} - ${price}`)
//     //           }
//     //         }


//     //     });
//     //     request('https://yurkas.by/s_vkhodnye_dveri/?cpage=page-2', function(error, response, body) {
//     //         if (!error) {
//     //           var $ = cheerio.load(body);
//     //           var count = $('.products__item')
//     //           for(let i = 0;i<count.length;i++){
//     //               var img = $('.products__item-image-link .img-response').eq(i).attr('src');
//     //               img = 'https://yurkas.by'+img;
//     //               var name = $('.products__item-param').eq(i).text();
//     //               var price = $('.products__item-price-current-inner').eq(i).text();
//     //               console.log(`${name} : ${img} - ${price}`)
//     //           }
//     //         }


//     //     });
//     console.log('==================================================================================');
//     ctx.message.from.last_name == undefined ? lastName = '' : lastName = ctx.message.from.last_name;
//     console.log(`${ctx.chat.type} ${ctx.message.from.first_name} ${ctx.message.from.last_name} : ${ctx.message.text}`);
//     var message = ctx.message.text.trim();

//     if (message.charAt(0) != '$' && ctx.chat.type != 'private') {
//         return;
//     }
//     if (message.charAt(0) == '$' && ctx.chat.type != 'private') {
//         var enmessage = encodeURI(message.trim().slice(1));
//         message = message.trim().slice(1);
//     }

//     if (message.charAt(0) == '$' && ctx.chat.type == 'private') {
//         var enmessage = encodeURI(message.trim().slice(1));
//         message = message.trim().slice(1);
//     }
//     if (message.charAt(0) != '$' && ctx.chat.type == 'private') {
//         var enmessage = encodeURI(message.trim());
//         message = message.trim();
//     }

//     var url = "http://music.я.ws/search/";
//     var userId = ctx.from.id;
//     var chatId = ctx.chat.id;
//     var link = url + enmessage;
//     switch (message.toLocaleLowerCase()) {
//         case 'топ':
//             link = 'http://music.xn--41a.ws/%D0%BF%D0%BE%D0%BF%D1%83%D0%BB%D1%8F%D1%80%D0%BD%D0%B0%D1%8F-%D0%BC%D1%83%D0%B7%D1%8B%D0%BA%D0%B0/'
//             break;
//         case 'поп':
//             link = 'http://music.xn--41a.ws/genre/pop/'
//             break;
//         case 'рок':
//             link = 'http://music.xn--41a.ws/genre/rock/'
//             break;
//         case 'рэп':
//             link = 'http://music.xn--41a.ws/genre/rap/'
//             break;
//         case 'новинки':
//             link = 'http://music.xn--41a.ws/'
//             break;
//         case '90':
//             link = 'http://music.xn--41a.ws/album/3-%D0%B7%D0%B0%D1%80%D1%83%D0%B1%D0%B5%D0%B6%D0%BD%D1%8B%D0%B5-%D1%85%D0%B8%D1%82%D1%8B-90%D1%85/'
//             break;
//         case '80':
//             link = 'http://music.я.ws/album/14-greatest-hits-of-the-80/'
//             break;
//         case '70':
//             link = 'http://music.xn--41a.ws/album/13-%D0%BF%D0%BE%D0%BF%D1%83%D0%BB%D1%8F%D1%80%D0%BD%D1%8B%D0%B5-%D1%85%D0%B8%D1%82%D1%8B-70/'
//             break;
//         default:
//             link = url + enmessage;
//             break;

//     }
//     console.log(chatId);
//     console.log(message.trim());
//     console.log(ctx.message.from.first_name + ' ' + ctx.message.from.last_name);

//     request(link, function(error, response, body) {
//         if (!error) {
//             var $ = cheerio.load(body)
//             var buttons = [];
//             for (let i = 0; i < 10; i++) {
//                 var x = $(".playlist-btn-down").eq(i);
//                 var href = x.attr('href');
//                 var signer = $('.playlist-name b').eq(i).text();
//                 var song = $('.playlist-name em').eq(i).text();
//                 console.log(`${signer} ${song}`)
//                 if (href != undefined) {
//                     var line = [Markup.callbackButton(`${signer} - ${song}`, i + 1)];
//                     buttons.push(line);


//                     if (i == 9) {
//                         var line = [Markup.callbackButton(`вперёд+`, 'next')];
//                         buttons.push(line);
//                         keyboard = Markup.inlineKeyboard(buttons);
//                         ctx.reply(message, Extra.markup(keyboard)).then(
//                             (mes) => {

//                                 state[mes.message_id] = link;

//                                 state[mes.message_id + 'page'] = i;
//                                 console.log(`---------------${i}----------------`)





//                             }

//                         )
//                     }

//                     state[userId] = link;
//                     // ctx.replyWithAudio({
//                     //     url: href,
//                     //     caption: 'fserwerwe',
//                     //     perfomer: signer,
//                     //     title: song
//                     // }).then(function() {

//                     //     console.log('Отдано 200++++++++++++++++++++')
//                     //     console.log('==================================================================================')
//                     // })


//                 }
//                 else {
//                     if (i > 0) {
//                         keyboard = Markup.inlineKeyboard(buttons);
//                         ctx.reply(ctx.message.text.slice(1), Extra.markup(keyboard)).then(
//                             (mes) => {
//                                 state[mes.message_id] = link;

//                                 state[mes.message_id + 'page'] = i;
//                                 console.log(`---------------${i}----------------`)





//                             }

//                         )
//                     }
//                     else {
//                         console.log('Не отдано 404----------------------');
//                         console.log('==================================================================================')
//                         ctx.reply('ничё не найдено');

//                     }
//                     break;
//                 }
//             }
//         }


//     });











// })


// bot.action('next', (ctx) => {
//     var mesId = ctx.callbackQuery.message.message_id
//     var link = state[mesId];
//     var page = state[mesId + 'page'];
//     page += 1;


//     // console.log(ctx)
//     let messageId1 = state[ctx.from.id + 5555];
//     if (link != undefined) {
//         request(link, function(error, response, body) {
//             if (!error) {
//                 var $ = cheerio.load(body)
//                 var buttons = [];
//                 for (let i = page; i < page + 10; i++) {
//                     var x = $(".playlist-btn-down").eq(i);
//                     var href = x.attr('href');
//                     var signer = $('.playlist-name b').eq(i).text();
//                     var song = $('.playlist-name em').eq(i).text();
//                     console.log(`${signer} ${song}`)
//                     if (href != undefined) {
//                         var line = [Markup.callbackButton(`${signer} - ${song}`, i + 1)];
//                         buttons.push(line);


//                         if (i == page + 9) {
//                             line = [Markup.callbackButton(`-назад`, 'back'), Markup.callbackButton(`вперёд+`, 'next')];
//                             buttons.push(line);
//                             keyboard = Markup.inlineKeyboard(buttons);
//                             ctx.telegram.editMessageReplyMarkup(ctx.chat.id, mesId, mesId, keyboard).then(
//                                 (mes) => {
//                                     console.log(`---------------${i}----------------`)

//                                     state[mesId + 'page'] = i;




//                                 }

//                             )
//                         }


//                         // ctx.replyWithAudio({
//                         //     url: href,
//                         //     caption: 'fserwerwe',
//                         //     perfomer: signer,
//                         //     title: song
//                         // }).then(function() {

//                         //     console.log('Отдано 200++++++++++++++++++++')
//                         //     console.log('==================================================================================')
//                         // })


//                     }
//                     else {
//                         if (i > page) {
//                             keyboard = Markup.inlineKeyboard(buttons);
//                             ctx.reply(ctx.message.text.slice(1), Extra.markup(keyboard)).then(
//                                 (mes) => {
//                                     state[mesId] = link;

//                                     state[mesId + 'page'] = i;
//                                     console.log(`---------------${i}----------------`)




//                                 }

//                             )
//                         }
//                         else {
//                             console.log('Не отдано 404----------------------');
//                             console.log('==================================================================================')
//                             ctx.reply('ничё не найдено');

//                         }
//                         break;
//                     }
//                 }
//             }


//         });



//     }
// })
// bot.action('back', (ctx) => {
//     var mesId = ctx.callbackQuery.message.message_id
//     var link = state[mesId];
//     var page = state[mesId + 'page'];
//     page += 1;

//     let messageId1 = state[ctx.from.id + 5555];
//     if (page > 10 && link != undefined) {
//         request(link, function(error, response, body) {
//             if (!error) {
//                 var $ = cheerio.load(body)
//                 var buttons = [];
//                 for (let i = page - 20; i < page - 10; i++) {
//                     var x = $(".playlist-btn-down").eq(i);
//                     var href = x.attr('href');
//                     var signer = $('.playlist-name b').eq(i).text();
//                     var song = $('.playlist-name em').eq(i).text();
//                     console.log(`${signer} ${song}`)
//                     if (href != undefined) {
//                         var line = [Markup.callbackButton(`${signer} - ${song}`, i + 1)];
//                         buttons.push(line);


//                         if (i == page - 11) {

//                             line = [Markup.callbackButton(`-назад`, 'back'), Markup.callbackButton(`вперёд+`, 'next')];
//                             buttons.push(line);
//                             keyboard = Markup.inlineKeyboard(buttons);
//                             ctx.telegram.editMessageReplyMarkup(ctx.chat.id, mesId, mesId, keyboard).then(
//                                 (mes) => {

//                                     console.log(`---------------${i}----------------`)
//                                     state[mesId + 'page'] = i;




//                                 }

//                             )
//                         }


//                         // ctx.replyWithAudio({
//                         //     url: href,
//                         //     caption: 'fserwerwe',
//                         //     perfomer: signer,
//                         //     title: song
//                         // }).then(function() {

//                         //     console.log('Отдано 200++++++++++++++++++++')
//                         //     console.log('==================================================================================')
//                         // })


//                     }
//                     else {
//                         if (i > page - 20) {
//                             keyboard = Markup.inlineKeyboard(buttons);
//                             ctx.reply(ctx.message.text.slice(1), Extra.markup(keyboard)).then(
//                                 (mes) => {
//                                     state[mesId] = link;

//                                     state[mesId + 'page'] = i;
//                                     console.log(`---------------${i}----------------`)




//                                 }

//                             )
//                         }
//                         else {
//                             console.log('Не отдано 404----------------------');
//                             console.log('==================================================================================')
//                             ctx.reply('ничё не найдено');

//                         }
//                         break;
//                     }
//                 }
//             }


//         });



//     }
// })


// bot.action(/^([1-9]|[1-2][\d]|3[0-2])$/, (ctx) => {
//     console.log(ctx.match[0]);
//     var mesId = ctx.callbackQuery.message.message_id
//     var link = state[mesId];
//     var count = parseInt(ctx.match[0]);
//     count -= 1;
//     let messageId1 = ctx.from.id + 5555;
//     if (link != undefined) {
//         request(link, function(error, response, body) {
//             if (!error) {
//                 var $ = cheerio.load(body)
//                 var x = $(".playlist-btn-down").eq(count);
//                 var href = x.attr('href');
//                 href = 'http://music.я.ws' + href;
//                 var signer = $('.playlist-name b').eq(count).text();
//                 var song = $('.playlist-name em').eq(count).text();
//                 console.log(`${signer} ${song}`)
//                 if (href != undefined) {
//                     ctx.telegram.editMessageText(ctx.chat.id, mesId, mesId, `${signer} - ${song} загрузка...`);
//                     ctx.replyWithAudio({
//                         url: href,
//                         filename: song
//                     }).then((mes) => {
//                         delete state[mesId];
//                         ctx.telegram.deleteMessage(ctx.chat.id, mesId);
//                         ctx.reply(`${signer} - ${song}`);
//                         console.log('Отдано 200++++++++++++++++++++')
//                         console.log('==================================================================================')



//                     })
//                 }
//                 else {
//                     delete state[mesId];
//                     console.log('Не отдано 404----------------------');
//                     console.log('==================================================================================')
//                     ctx.reply('ничё не найдено');
//                 }

//             }


//         });
//     }
//     else {
//         console.log('--------------------------------------------------')
//     }


// })
































// // bot.on('text', (ctx) => {
// //     var tracklist = require("./tracklist.json");
// //     var message = ctx.message.text.trim();
// //     var chatId = ctx.chat.id;
// //     var track;
// //     console.log(chatId);
// //     console.log(message);
// //     for (let i = 0; i < tracklist.length; i++) {
// //         if (tracklist[i].signer.toLocaleLowerCase().trim() == message.toLocaleLowerCase() || tracklist[i].song.toLocaleLowerCase().trim() == message.toLocaleLowerCase()) {
// //             ctx.reply(tracklist[i].signer + ' ' + tracklist[i].song);
// //             console.log(fs.existsSync(__dirname + '/' + tracklist[i].song.trim().toLocaleLowerCase() + '.mp3'))
// //             if (!fs.existsSync(__dirname + '/' + tracklist[i].song.trim().toLocaleLowerCase() + '.mp3')) {
// //                 request.get(tracklist[i].src).pipe(fs.createWriteStream(tracklist[i].song.trim().toLocaleLowerCase() + '.mp3')).on('finish', function() {
// //                     ctx.replyWithAudio({
// //                         source: './' + tracklist[i].song.trim().toLocaleLowerCase() + '.mp3',
// //                         caption: 'fserwerwe'
// //                     })
// //                 })
// //             }
// //             else {
// //                 ctx.replyWithAudio({
// //                     source: './' + tracklist[i].song.trim().toLocaleLowerCase() + '.mp3',
// //                     caption: 'fserwerwe'
// //                 })
// //             }
// //         }
// //     }
// // })
// bot.startPolling()
app.set('view engine', 'ejs');
app.use('*', bodyParser.urlencoded({
    extended: true
}));

// app.use(function(req,res,next){
//   if(res.status(404)){
//     console.log('');
//   }

// })
app.use(bodyParser.json())
    // app.get('/khalid', function(req, res, next) {
    //     res.status(404).send('');
    // });

app.post('/newcomments', function(req, res, next) {
    var comments = require("./comments.json");
    comments.push(req.body);
    var x = JSON.stringify(comments);
    fs.writeFileSync('./comments.json', x, 'utf8');

});
app.post('/count', function(req, res) {
    var track = Object.keys(req.body).toString().trim();
    var tracklist = require("./tracklist.json");
    for (let i = 0; i < tracklist.length; i++) {
        if (track == tracklist[i].song.trim()) {
            if (tracklist[i].count != undefined) {
                tracklist[i].count += 1;
                console.log('ok listen');
            } else { tracklist[i].count = 1; }
        }
    }
    tracklist = JSON.stringify(tracklist);
    fs.writeFileSync('./tracklist.json', tracklist, 'utf8');
})
app.post('/likes', function(req, res) {
    var track = Object.keys(req.body).toString().trim();
    var tracklist = require("./tracklist.json");
    for (let i = 0; i < tracklist.length; i++) {
        if (track == tracklist[i].song.trim()) {
            if (tracklist[i].likes != undefined) {
                tracklist[i].likes += 1;
                console.log('ok like');
            } else { tracklist[i].likes = 1; }
        }
    }
    tracklist = JSON.stringify(tracklist);
    fs.writeFileSync('./tracklist.json', tracklist, 'utf8');
})

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
    console.log('ЗАШЁЛ');
})

// app.post('/search', function(req, res) {
//     var track = Object.keys(req.body).toString().trim();
//     track = JSON.parse(track);
//     var link
//     console.log(track)
//     switch (track) {
//         case 'pop':
//             link = 'https://muzroom.online/genre/zarubejnyj-pop'
//             break;
//         case 'rock':
//             link = 'https://muzroom.online/genre/rock'
//             break;
//         case 'rap':
//             link = 'https://muzroom.online/genre/zarubezhnyj-rep'
//             break;
//         case 'metall':
//             link = 'https://muzroom.online/genre/metal'
//             break;
//         case 'house':
//             link = 'https://muzroom.online/genre/house/new'
//             break;
//         case 'alternative':
//             link = 'https://muzroom.online/genre/alternative-rock'
//             break;
//         default:
//             track = encodeURI(track);
//             link = 'https://muzroom.online/search?query=' + track
//             break;






//     }
//     var tracks = [];
//     console.log(track);
//     console.log(link)
//     request(link, function(error, response, body) {
//         if (!error) {
//             var $ = cheerio.load(body)


//             for (let i = 0; i < 20; i++) {
//                 var x = $(".play-button").eq(i);
//                 var href = x.attr('data-audiofile');
//                 // if(href[0]=='/'){href=link+href}
//                 // else{continue;}
//                 // var bg = $('.playlist-btn>img').eq(i).attr('src')
//                 var signer = $('.track .artist-name a').eq(i).text();
//                 var song = $('.track .title a').eq(i).text();
//                 var obj = { signer: signer, song: song, src: href }
//                 tracks.push(obj)

//             }

//             res.send(tracks);



//         }


//     })





// })

app.get('/tracks', function(req, res) {
    //     var options = {
    //         headers: {
    // "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8",
    // "Accept-Language": "ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7",
    // "Connection": "keep-alive",
    // "Cookie": "__cfduid=df791c6fa2a8a406cc3b06f7682a896c31523761691; PHPSESSID=3i3efso1i80espe1a1mbqbmj3i; _ym_uid=1523761690454430687; _ym_isad=1; _ym_visorc_47647966=w",
    // "Host": "drivemusic.me",
    // "Referer": "http://drivemusic.me/",
    // "Upgrade-Insecure-Requests": 1,
    // "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.181 Safari/537.36 OPR/52.0.2871.64",


    //         }

    //     }
    request('http://sample.net/top100.html', function(error, response, body) {
        if (!error) {
            var $ = cheerio.load(body)
            var tracks = []
            var block = $('.top-song');
            for (let i = 0; i < block.length; i++) {
                var signer = $('.top-song-author').eq(i).text()
                var song = $('.top-song-song').eq(i).text()
                var src = $('.mp3-link').eq(i).attr('rel');
                var bg = $('.top-song-image img').eq(i).attr('src');
                // bg = `background-image:url('${bg}');`
                var signerLink = $('.top-song-link').eq(i).attr('href');
                signerLink = signerLink.slice(18, signerLink.length);
                bg = 'http://sample.net' + bg;
                var obj = { signer: signer, song, song, src: src, background: bg, link: signerLink }
                tracks.push(obj);




            }


            res.send(tracks);



        }


    })






})



app.post('/search', function(req, res) {
    console.log(req.body);
    var track = Object.keys(req.body).toString().trim();
    track = JSON.parse(track);
    var link
    console.log(track)
    switch (track) {
        case 'pop':
            link = 'http://sample.net/pop/'
            break;
        case 'rock':
            link = 'http://sample.net/rok/'
            break;
        case 'rap':
            link = 'http://sample.net/rep/'
            break;
        case 'indie':
            link = 'http://sample.net/indie/'
            break;
        case 'house':
            link = 'http://sample.net/house/'
            break;
        case 'alternative':
            link = 'http://sample.net/alternativa/'
            break;
        default:
            var formdata = {
                'do': 'search',
                'subaction': 'search',
                'story': track,
                'x': '0',
                'y': '0'
            }

            var formData = querystring.stringify(formdata);
            var contentLength = formData.length;
            link = {
                headers: {
                    'Content-Length': contentLength,
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                uri: 'http://sample.net/index.php?do=search',
                body: formData,
                method: 'POST'
            }
            break;






    }


    request(link, function(err, ress, body) {

        var $ = cheerio.load(body)
        var tracks = []
        var block = $('.top-song');
        for (let i = 0; i < block.length; i++) {
            var signer = $('.top-song-author').eq(i).text()
            var song = $('.top-song-song').eq(i).text()
            var src = $('.mp3-link').eq(i).attr('rel');
            var bg = $('.top-song-image img').eq(i).attr('src');
            var signerLink = $('.top-song-link').eq(i).attr('href');
            signerLink = signerLink.slice(18, signerLink.length);
            bg = 'http://sample.net' + bg;
            var obj = { signer: signer, song: song, src: src, background: bg, link: signerLink }
            tracks.push(obj);



        }
        res.send(tracks);


    });

























    // res.sendFile(__dirname + '/index.html');
    // console.log('ЗАШЁЛ');
})

app.post('/switchgenre', function(req, res) {

    var track = Object.keys(req.body).toString().trim();
    track = JSON.parse(track);
    var link = 'http://sample.net' + '/' + track + '/'
    console.log(link);



    request(link, function(err, ress, body) {

        var $ = cheerio.load(body)
        var tracks = []
        var block = $('.top-song');
        for (let i = 0; i < block.length; i++) {
            var signer = $('.top-song-author').eq(i).text()
            var song = $('.top-song-song').eq(i).text()
            var src = $('.mp3-link').eq(i).attr('rel');
            var bg = $('.top-song-image img').eq(i).attr('src');
            var signerLink = $('.top-song-link').eq(i).attr('href');
            signerLink = signerLink.slice(18, signerLink.length);
            bg = 'http://sample.net' + bg;
            var obj = { signer: signer, song, song, src: src, background: bg, link: signerLink }
            tracks.push(obj);



        }
        res.send(tracks);


    });

























    // res.sendFile(__dirname + '/index.html');
    // console.log('ЗАШЁЛ');
})
app.get('/navigation', function(req, res) {

    request('http://sample.net', function(err, ress, body) {

        var $ = cheerio.load(body)
        var genres = []
        var block = $('.left-nav a');
        for (let i = 1; i < block.length; i++) {
            var genre = $('.left-nav a').eq(i).text();
            var link = $('.left-nav a').eq(i).attr('href');
            link = link.slice(18, link.length)
            var obj = { genre: genre, link: link }
            genres.push(obj)






        }
        res.send(genres);


    });




})


app.post('/description', function(req, res) {
    var track = Object.keys(req.body).toString().trim();
    var link = JSON.parse(track);
    var origLink = link;
    link = 'http://sample.net' + link
    console.log(link);
    request(link, function(err, ress, body) {
        var $ = cheerio.load(body)
        var descr = $('.full-hid').eq(0).text();
        var img = $('.full-news-image img').eq(0).attr('src');
        var orig = $('.full-news-image img').eq(0).attr('alt');
        orig == undefined ? false : orig = orig.split('-');
        var origSigner = orig[0];
        var origSong = orig[1];
        var comment = $('.full-block-content').html();
        comment = comment.match(/<!--[\s\S]*?-->/g)
        var origSrc = comment[0].match(/http[\s\S]*?mp3/g);
        origSrc = origSrc.toString();
        var name = $('.full-news-image img').eq(0).attr('alt');
        img = 'http://sample.net' + img
        var track = { src: origSrc, background: img, signer: origSigner, song: origSong, link: origLink }
        console.log(track);
        var tracklist = []
        var block = $('.top-song');
        for (let i = 0; i < block.length; i++) {
            var signer = $('.top-song-author').eq(i).text()
            var song = $('.top-song-song').eq(i).text()
            var src = $('.mp3-link').eq(i).attr('rel');
            var bg = $('.top-song-image img').eq(i).attr('src');
            var signerLink = $('.top-song-link').eq(i).attr('href');
            signerLink = signerLink.slice(18, signerLink.length);
            bg = 'http://sample.net' + bg;
            var tracks = { signer: signer, song, song, src: src, background: bg, link: signerLink }
            tracklist.push(tracks);



        }
        var obj = { descr: descr, src: img, name: name, tracklist: tracklist, track: track }

        res.send(obj);


    });




})
var redirect = {}
app.get('/redirect', function(req, res) {
    res.send(redirect);
    console.log('перенаправлено с ' + redirect);
    redirect = {}
})
app.post('/background', function(req, res) {
    var tracks = require("./tracklist.json")
    var hash = req.body;
    var signer = Object.keys(hash)[0]
    signer = decodeURI(signer);
    for (let i = 0; i < tracks.length; i++) {
        if (tracks[i].signer.toLocaleLowerCase().trim() == signer.toLocaleLowerCase().trim()) {
            res.send(tracks[i].background.trim());
            break;
        }

    }

})
app.get('*', function(req, res, next) {
    if (fs.existsSync(__dirname + req.url)) {
        console.log('Found file');
        res.sendFile(__dirname + req.url);
        console.log(req.url + ' ' + res.statusCode);
    } else {
        res.redirect('/');
        redirect = { url: req.url };

        console.log(req.url + ' ' + res.statusCode);
    }

})






app.listen(process.env.PORT, process.env.IP)