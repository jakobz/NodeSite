Установка
---------

- node: http://nodejs.org/
- mongodb: http://www.mongodb.org/downloads

Пути к обоим двум должны быть в path. Path удобно править вот этим: http://www.rapidee.com/en/about

Запуск
------
- run.bat - запускает два окошка - сервер mongodb и сайт под супервизором (супервизор перегружает сайт при изменении). Сайт слушает на localhost:3000

- mongoShell.bat - запускает консоль mongo
  API в приложениии такой же как в консольке 

        > db.users.save({name: "Yakov Zhmurov", login: "jakobz", pwd: "12345"})
        > db.users.save({name: "Guest User", login: "guest", pwd: ""})
        > db.users.find()
        { "_id" : ObjectId("50acef44bd69ac60c43134c0"), "name" : "Yakov Zhmurov", "login" : "jakobz", "pwd" : "12345" }
        { "_id" : ObjectId("50acef56bd69ac60c43134c1"), "name" : "Guest User", "login" : "guest", "pwd" : "" }
        > db.users.find({login:"jakobz"})
        { "_id" : ObjectId("50acef44bd69ac60c43134c0"), "name" : "Yakov Zhmurov", "login" : "jakobz", "pwd" : "12345" }
        > db.users.remove()

