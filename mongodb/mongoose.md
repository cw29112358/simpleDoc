/** ==============================================================================================*/
http://www.mongoosejs.net/

/** ==============================================================================================*/
平时使用不多，需要用到时可以参考文档：实例方法(method)、静态方法(static)、查询助手、索引、虚拟值、别名

/** ==============================================================================================*/
Schemas

Schemas配置选项
new Schema({..}, options);
// or
var schema = new Schema({..});
schema.set(option, value);

options:
  autoIndex: false, // 默认值null，是否启用索引
  timestamps: true, // 在 schema 自动添加 createdAt 和 updatedAt 字段， 其类型为 Date。
  capped: false, // 设置该表的最大容量
  bufferCommands: true, // 是否开启缓存
  _id: true, // 是否需要显示_id字段
  minimize: true, // 设置可否保存控对象，true为不可保存空对象
  strict: true, // 默认为 true，这意味着你不能 save schema 里没有声明的属性
  useNestedStrict: false, // 忽略嵌套的 strict 设定
  typeKey: 'type', // 默认为type，可以自定义
  id: true, // 是否需要显示id字段
  safe: true,
  shardKey: null, // 分片相关
  validateBeforeSave: true, // 保存前验证
  collation: null,
  // read: 'primary', // 设置别名
  // collection: 'name', // 手动设置该collection的名称
  // toJSON:
  // toObject:
  // skipVersioning:
  // versionKey: '__v', // 默认为__v，可自定义

schema的所有api：参考文档

/** ==============================================================================================*/
SchemaTypes

全部可用的 SchemaType 选项：
type、required、default、select、validate、get、set、alias

索引相关：index、unique、sparse

String：lowercase、uppercase、trim、match、enum

Number：min、max

Date：min、max
内建Date方法不会触发mongoose修改跟踪逻辑
如果你对使用setMonth()修改文档里的Date，mongoose在doc.save()的时候是察觉不到这个文档发生了变化的，因此保存不到数据库。
如果你一定要用内建 Date 方法，请手动调用doc.markModified('pathToYourDate')告诉mongoose你修改了数据

Buffer：

Boolean：

Mixed：
一个啥都可以放的SchemaType，虽然便利，但也会让数据难以维护。Mixed可以通过Schema.Types.Mixed或传入一个空对象定义。以下三种方法效果一致：
  const Any = new Schema({ any: {} });
  const Any = new Schema({ any: Object });
  const Any = new Schema({ any: Schema.Types.Mixed });

ObjectId：
要指定类型为 ObjectId，在声明中使用 Schema.Types.ObjectId

Array：
创造 SchemaTypes 或子文档数组
  const Empty1 = new Schema({ any: [] });
  const Empty2 = new Schema({ any: Array });
  const Empty3 = new Schema({ any: [Schema.Types.Mixed] });
  const Empty4 = new Schema({ any: [{}] });

Decimal28：

/** ==============================================================================================*/
Connections

mongoose.connect('mongodb://localhost/myapp');
mongoose.connect('mongodb://username:password@host:port/database?options...');

connect 方法也接受 options 参数，这些参数会传入底层 MongoDB 驱动
mongoose.connect(uri, options);

options：
useNewUrlParser: 默认 true
bufferCommands：默认 false。禁用 mongoose 缓存机制
user/pass：用于认证的用户名和密码。mongoose 特有，等价于 MongoDB 驱动的 auth.user 和 auth.password 选项
autoIndex：是否创建索引
dbName：指定要连接的数据库名称
autoReconnect：默认 true。底层 MongoDB 驱动在连接丢失后将自动重连
reconnectTries：默认 Number.MAX_VALUE。如果你连接到单个服务器或mongos代理（而不是副本集），MongoDB驱动将会在reconnectTries时间内的每一个reconnectInterval毫秒内重新连接，直到最后放弃连接。当驱动放弃连接的时候，mongoose连接将会触发reconnectFailed事件。此选项不会对副本集连接执行任何操作。
reconnectInterval：500。每500ms重新连接一次
promiseLibrary：设定底层 promise 库
poolSize：MongoDB 保持的最大 socket 连接数。 poolSize 的默认值是 5
bufferMaxEntries：MongoDB 驱动同样有自己的离线时缓存机制。如果你希望链接错误时终止数据库操作，请将此选项设为 0 以及把 bufferCommands 设为 false
connectTimeoutMS：MongoDB驱动在初始化连接失败时会等待多久。一旦Mongoose成功连接，connectTimeoutMS就不再有效。
socketTimeoutMS：MongoDB驱动在杀掉一个不活跃的socket时会等待多久。socket可能因为不再活动或长时间处于操作状态而处于不活跃状态。默认情况这个值是30000，如果你希望一些数据库操作运行事件超过20秒，你应该设置为最长运行时间的2-3倍。
family：是否用IPv4或IPv6进行连接。这个选项传递个Node.js的dns.lookup()函数。如果你不设置这个选项，MongoDB驱动首先会尝试IPv6如果失败再尝试IPv4。如果mongoose.connect(uri)花费很长时间，尝试mongoose.connect(uri, {family: 4})
useUnifiedTopology：true

connect() 函数接受回调函数，或返回一个 promise
mongoose.connect(uri, options).then(
  () => { /** ready to use. The `mongoose.connect()` promise resolves to undefined. */ },
  err => { /** handle initial connection error */ }
);

/** ==============================================================================================*/
Models

const schema = new mongoose.Schema({ documentKey: 'documentValue', });
const Tank = mongoose.model('collectionName', schema);

请教：
Model.prototype.increment()
Model.discriminator（）
Model.init（）
Model.ensureIndexes（）
Model.createIndexes（）
Model.translateAliases()
Model.distinct（）
Model.hydrate（）

/** ==============================================================================================*/
Documents

所有api参考文档

Document.prototype.toObject(options)
Document.prototype.toJson(options)
options: getters、virtuals、minimize、transform、depopulate、versionKey 具体用法参考文档

请教：
Document.prototype.init（）
Document.prototype.update()
Document.prototype.equals()
Query.prototype.all()
Query.prototype.size()
还有很多，问的时候在看一遍document的API文档

/** ==============================================================================================*/
子文档（Subdocument）


/** ==============================================================================================*/
Queries 查询

Model 的方法中包含查询条件参数的都可以按以下两种方式执行：
传入 callback 参数，操作会被立即执行，查询结果被传给回调函数（ callback ）。
不传 callback 参数，Query 的一个实例（一个 query 对象）被返回，这个 query 提供了构建查询器的特殊接口。

请教：
Query.prototype.all()
Query.prototype.size()
Query.prototype.regex()
Query.prototype.maxDistance()
Query.prototype.exists()
Query.prototype.elemMatch()
Query.prototype.within()
Query.prototype.slice()
Query.prototype.maxScan()
Query.prototype.batchSize()
Query.prototype.comment()
Query.prototype.snapshot()
Query.prototype.hint()
Query.prototype.read()
Query.prototype.setOptions()
Query.prototype.getQuery()
Query.prototype.getUpdate()
Query.prototype.lean()
Query.prototype.error()
Query.prototype.mongooseOptions()
Query.prototype.merge()
Query.prototype.collation()
Query.prototype.cast（）
Query.prototype.cursor（）
Query.prototype.tailable（）
Query.prototype.intersects（）
Query.prototype.geometry（）
Query.prototype.near（）
Query.prototype.nearSphere（）
Query.prototype.polygon（）
Query.prototype.box（）
Query.prototype.circle（）
Query.prototype.centerSphere（）
Query.prototype.selected（）
Query.prototype.selectedInclusively（）
Query.prototype.selectedExclusively（）

/** ==============================================================================================*/
validation
如果你要使用验证，请注意一下几点：
  验证定义于 SchemaType
  验证是一个中间件。它默认作为 pre('save')` 钩子注册在 schema 上
  你可以使用 doc.validate(callback) 或 doc.validateSync() 手动验证
  验证器不对未定义的值进行验证，唯一例外是 required 验证器
  验证是异步递归的。当你调用 Model#save，子文档验证也会执行，出错的话 Model#save 回调会接收错误
  验证是可定制的

/** ==============================================================================================*/
Middleware

Document 中间件: init、validate、save、remove
Query 中间件：count、find、findOne、findOneAndRemove、findOneAndUpdate、update
Aggregate 中间件：aggregate
model 中间件：insertMany

/** ==============================================================================================*/
Populate


/** ==============================================================================================*/
Discriminator


/** ==============================================================================================*/
/** ==============================================================================================*/
/** ==============================================================================================*/
/** ==============================================================================================*/
