// if the database is empty on server start, create some sample data.
Meteor.startup(function () {
  if (Lists.find().count() === 0) {
    var data = [
      {name: "支付宝 A",
       items: ["加湿器",
         "烤箱",
         "电视",
         "红枣",
         "还信用卡"
       ]
      },
      {name: "支付宝 B",
       items: ["方便面",
         "伏特加",
         "赤霞珠",
         "费列罗",
         "给媳妇转账",
         "咸阳乘客的车费"
         ]
      }
    ];

    var timestamp = (new Date()).getTime();
    _.each(data, function(list) {
      var list_id = Lists.insert({name: list.name,
        incompleteCount: list.items.length});

      _.each(list.items, function(text) {
        Todos.insert({listId: list_id,
                      text: text,
                      createdAt: new Date(timestamp)});
        timestamp += 1; // ensure unique timestamp.
      });
    });
  }
});
