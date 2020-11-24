# summary
mac 装 mongodb：https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/
完全卸载 mongodb 教程：https://medium.com/@rajanmaharjan/uninstall-mongodb-macos-completely-d2a6d6c163f9

postman：API开发协作平台
MongoDB compass: MongoDB可视化工具

----------------------------------------------------------------------查看MongoDB版本
mongo --version

----------------------------------------------------------------------概念解析
database：数据库
collection：集合
document：文档
field：字段
index：索引
primary key：主键（_id字段设为主键）

----------------------------------------------------------------------创建数据库
use DATABASE_NAME

----------------------------------------------------------------------查看数据库
show dbs

----------------------------------------------------------------------查看当前正在使用的数据库
db

----------------------------------------------------------------------删除数据库
db.dropDatabase()


----------------------------------------------------------------------创建集合
db.createCollection(name, options)

----------------------------------------------------------------------查看集合
show collections || show tables

----------------------------------------------------------------------删除集合
db.collection.drop()

----------------------------------------------------------------------插入文档
db.COLLECTION_NAME.insert(document)
db.col.save(document) 如果不指定 _id 字段 save() 方法类似于 insert() 方法。如果指定 _id 字段，则会更新该 _id 的数据。

----------------------------------------------------------------------更新文档
db.collection.update(
   <query>,
   <update>,
   {
     upsert: <boolean>,
     multi: <boolean>,
     writeConcern: <document>
   }
)

||

db.collection.save(
   <document>,
   {
     writeConcern: <document>
   }
)

----------------------------------------------------------------------删除文档
db.collection.remove(
   <query>,
   {
     justOne: <boolean>,
     writeConcern: <document>
   }
)

实例：db.col.remove({}) 删除所有数据

----------------------------------------------------------------------查询文档
db.collection.find(query, projection) || db.col.find().pretty()

----------------------------------------------------------------------条件操作符
(>) 大于操作符 - $gt：          实例：db.col.find({likes : {$gt : 100}})
（>=）大于等于操作符 - $gte：    实例：db.col.find({likes : {$gte : 100}})
(<) 小于操作符 - $lt：          实例：db.col.find({likes : {$lt : 150}})
 (<=) 小于等于操作符 - $lte：    实例：db.col.find({likes : {$lte : 150}})
 (<) 和 (>) 查询 - $lt 和 $gt： 实例：db.col.find({likes : {$lt :200, $gt : 100}})
 and：                         实例：db.col.find({key1:value1, key2:value2}).pretty()
 or：db.col.find(
       {
          $or: [
             {key1: value1}, {key2:value2}
          ]
       }
    ).pretty()
 AND 和 OR 联合使用：           实例：db.col.find({"likes": {$gt:50}, $or: [{"by": "菜鸟教程"},{"title": "MongoDB 教程"}]}).pretty()

----------------------------------------------------------------------$type
实例：db.col.find({"title" : {$type : 2}}) || db.col.find({"title" : {$type : 'string'}})

----------------------------------------------------------------------Limit与Skip方法
db.COLLECTION_NAME.find().limit(NUMBER)
db.COLLECTION_NAME.find().limit(NUMBER).skip(NUMBER)

----------------------------------------------------------------------sort() 方法
db.COLLECTION_NAME.find().sort({KEY:1})

----------------------------------------------------------------------index  //////////////////////////////////////////////////////////////////////
创建索引：db.collection.createIndex(keys, options)
实例：db.col.createIndex({"title":1})

----------------------------------------------------------------------聚合
db.COLLECTION_NAME.aggregate(AGGREGATE_OPERATION)
聚合的表达式：参考菜鸟教程
实例：
db.col.aggregate([{$group : {_id : "$by_user", num_tutorial : {$sum : 1}}}])
通过字段 by_user 字段对数据进行分组，并计算 by_user 字段相同值的总和

管道的概念：一般用于将当前命令的输出结果作为下一个命令的参数  参考菜鸟教程
管道操作符实例：
1、$project实例
db.article.aggregate(
    { $project : {
        title : 1 ,
        author : 1 ,
    }});
 这样的话结果中就只还有_id,tilte和author三个字段了，默认情况下_id字段是被包含的，如果要想不包含_id话可以这样
db.article.aggregate(
    { $project : {
        _id : 0 ,
        title : 1 ,
        author : 1
    }});

2.$match实例
db.articles.aggregate( [
                        { $match : { score : { $gt : 70, $lte : 90 } } },
                        { $group: { _id: null, count: { $sum: 1 } } }
                       ] );
$match用于获取分数大于70小于或等于90记录，然后将符合条件的记录送到下一阶段$group管道操作符进行处理
3.$skip实例
db.article.aggregate(
    { $skip : 5 });
经过$skip管道操作符处理后，前五个文档被"过滤"掉。

----------------------------------------------------------------------副本集  //////////////////////////////////////////////////////////////////////

----------------------------------------------------------------------分片  //////////////////////////////////////////////////////////////////////

----------------------------------------------------------------------备份(mongodump)与恢复(mongorestore)  //////////////////////////////////////////////////////////////////////

----------------------------------------------------------------------监控  //////////////////////////////////////////////////////////////////////

----------------------------------------------------------------------Node.js 连接 MongoDB  //////////////////////////////////////////////////////////////////////

----------------------------------------------------------------------高级教程  //////////////////////////////////////////////////////////////////////
