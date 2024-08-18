
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.18.0
 * Query Engine version: 4c784e32044a8a016d99474bd02a3b6123742169
 */
Prisma.prismaVersion = {
  client: "5.18.0",
  engine: "4c784e32044a8a016d99474bd02a3b6123742169"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.NotFoundError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`NotFoundError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}

/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.AccountsScalarFieldEnum = {
  id: 'id',
  worldid: 'worldid',
  userid: 'userid',
  trunkid: 'trunkid',
  nxCredit: 'nxCredit',
  monstercollectionid: 'monstercollectionid',
  employeetrunkid: 'employeetrunkid'
};

exports.Prisma.Alliance_gradenamesScalarFieldEnum = {
  id: 'id',
  gradename: 'gradename',
  allianceid: 'allianceid'
};

exports.Prisma.AlliancesScalarFieldEnum = {
  id: 'id',
  name: 'name',
  maxmembernum: 'maxmembernum',
  notice: 'notice'
};

exports.Prisma.Auction_historiesScalarFieldEnum = {
  id: 'id',
  itemid: 'itemid',
  bargain: 'bargain',
  refund: 'refund',
  ownerid: 'ownerid',
  ownername: 'ownername',
  historytype: 'historytype',
  mesos: 'mesos',
  buyer: 'buyer',
  bid: 'bid',
  expiredtime: 'expiredtime',
  buytime: 'buytime',
  starttime: 'starttime'
};

exports.Prisma.Auction_itemsScalarFieldEnum = {
  id: 'id',
  itemid: 'itemid',
  bargain: 'bargain',
  ownerid: 'ownerid',
  ownername: 'ownername',
  mesos: 'mesos',
  buyer: 'buyer',
  bid: 'bid',
  expiredtime: 'expiredtime',
  starttime: 'starttime'
};

exports.Prisma.AvatardataScalarFieldEnum = {
  id: 'id',
  characterstat: 'characterstat',
  avatarlook: 'avatarlook',
  zeroavatarlook: 'zeroavatarlook'
};

exports.Prisma.AvatarlookScalarFieldEnum = {
  id: 'id',
  gender: 'gender',
  skin: 'skin',
  face: 'face',
  hair: 'hair',
  weaponstickerid: 'weaponstickerid',
  weaponid: 'weaponid',
  subweaponid: 'subweaponid',
  job: 'job',
  drawelfear: 'drawelfear',
  demonslayerdeffaceacc: 'demonslayerdeffaceacc',
  xenondeffaceacc: 'xenondeffaceacc',
  beasttamerdeffaceacc: 'beasttamerdeffaceacc',
  iszerobetalook: 'iszerobetalook',
  mixedhaircolor: 'mixedhaircolor',
  mixhairpercent: 'mixhairpercent',
  ears: 'ears',
  tail: 'tail'
};

exports.Prisma.Bbs_recordsScalarFieldEnum = {
  id: 'id',
  idforbbs: 'idforbbs',
  creatorid: 'creatorid',
  subject: 'subject',
  msg: 'msg',
  creationdate: 'creationdate',
  icon: 'icon',
  guildid: 'guildid'
};

exports.Prisma.Bbs_repliesScalarFieldEnum = {
  id: 'id',
  idforreply: 'idforreply',
  creatorid: 'creatorid',
  creationdate: 'creationdate',
  msg: 'msg',
  recordid: 'recordid'
};

exports.Prisma.BeautydataScalarFieldEnum = {
  id: 'id',
  charID: 'charID',
  hairSize: 'hairSize',
  faceSize: 'faceSize',
  hairString: 'hairString',
  faceString: 'faceString'
};

exports.Prisma.BosslogScalarFieldEnum = {
  id: 'id',
  accountid: 'accountid',
  bossid: 'bossid',
  lastattempt: 'lastattempt',
  pqentry: 'pqentry'
};

exports.Prisma.CashiteminfosScalarFieldEnum = {
  id: 'id',
  accountid: 'accountid',
  characterid: 'characterid',
  commodityid: 'commodityid',
  buycharacterid: 'buycharacterid',
  paybackrate: 'paybackrate',
  discount: 'discount',
  orderno: 'orderno',
  productno: 'productno',
  refundable: 'refundable',
  sourceflag: 'sourceflag',
  storebank: 'storebank',
  itemid: 'itemid',
  trunkid: 'trunkid',
  position: 'position'
};

exports.Prisma.CharacterpotentialsScalarFieldEnum = {
  id: 'id',
  potkey: 'potkey',
  skillid: 'skillid',
  slv: 'slv',
  grade: 'grade',
  charid: 'charid'
};

exports.Prisma.CharactersScalarFieldEnum = {
  id: 'id',
  accid: 'accid',
  orderid: 'orderid',
  avatardata: 'avatardata',
  equippedinventory: 'equippedinventory',
  equipinventory: 'equipinventory',
  consumeinventory: 'consumeinventory',
  etcinventory: 'etcinventory',
  installinventory: 'installinventory',
  cashinventory: 'cashinventory',
  funckeymap_id: 'funckeymap_id',
  fieldid: 'fieldid',
  questmanager: 'questmanager',
  guild: 'guild',
  rewardPoints: 'rewardPoints',
  monsterbook: 'monsterbook',
  party: 'party',
  medalid: 'medalid',
  monsterparkcount: 'monsterparkcount',
  previousFieldID: 'previousFieldID',
  onlineDay: 'onlineDay',
  onlineTime: 'onlineTime',
  quickslotKeys: 'quickslotKeys'
};

exports.Prisma.CharacterstatsScalarFieldEnum = {
  id: 'id',
  characterid: 'characterid',
  characteridforlog: 'characteridforlog',
  worldidforlog: 'worldidforlog',
  name: 'name',
  gender: 'gender',
  skin: 'skin',
  face: 'face',
  hair: 'hair',
  mixbasehaircolor: 'mixbasehaircolor',
  mixaddhaircolor: 'mixaddhaircolor',
  mixhairbaseprob: 'mixhairbaseprob',
  level: 'level',
  job: 'job',
  str: 'str',
  dex: 'dex',
  inte: 'inte',
  luk: 'luk',
  hp: 'hp',
  maxhp: 'maxhp',
  mp: 'mp',
  maxmp: 'maxmp',
  ap: 'ap',
  sp: 'sp',
  exp: 'exp',
  pop: 'pop',
  money: 'money',
  wp: 'wp',
  extendsp: 'extendsp',
  posmap: 'posmap',
  portal: 'portal',
  subjob: 'subjob',
  deffaceacc: 'deffaceacc',
  fatigue: 'fatigue',
  lastfatigueupdatetime: 'lastfatigueupdatetime',
  charismaexp: 'charismaexp',
  insightexp: 'insightexp',
  willexp: 'willexp',
  craftexp: 'craftexp',
  senseexp: 'senseexp',
  charmexp: 'charmexp',
  noncombatstatdaylimit: 'noncombatstatdaylimit',
  mcpoint: 'mcpoint',
  pvpexp: 'pvpexp',
  pvpgrade: 'pvpgrade',
  pvppoint: 'pvppoint',
  pvpmodelevel: 'pvpmodelevel',
  pvpmodetype: 'pvpmodetype',
  eventpoint: 'eventpoint',
  albaactivityid: 'albaactivityid',
  albastarttime: 'albastarttime',
  albaduration: 'albaduration',
  albaspecialreward: 'albaspecialreward',
  burning: 'burning',
  charactercard: 'charactercard',
  accountlastlogout: 'accountlastlogout',
  lastlogout: 'lastlogout',
  gachexp: 'gachexp',
  honorexp: 'honorexp',
  nextavailablefametime: 'nextavailablefametime',
  node_shards: 'node_shards',
  maxfriends: 'maxfriends'
};

exports.Prisma.ChosenskillsScalarFieldEnum = {
  id: 'id',
  charid: 'charid',
  skillid: 'skillid',
  position: 'position'
};

exports.Prisma.Cms_votesScalarFieldEnum = {
  id: 'id',
  accountid: 'accountid',
  ip: 'ip',
  time: 'time',
  vp: 'vp',
  collected: 'collected'
};

exports.Prisma.CooldownsScalarFieldEnum = {
  id: 'id',
  player_name: 'player_name',
  cooldown_type: 'cooldown_type',
  expiry_time: 'expiry_time'
};

exports.Prisma.CoresScalarFieldEnum = {
  id: 'id',
  pos: 'pos',
  charid: 'charid',
  slottype: 'slottype',
  coreid: 'coreid',
  leftCount: 'leftCount'
};

exports.Prisma.Cs_categoriesScalarFieldEnum = {
  id: 'id',
  idx: 'idx',
  name: 'name',
  flag: 'flag',
  parentIdx: 'parentIdx',
  stock: 'stock'
};

exports.Prisma.Cs_itemsScalarFieldEnum = {
  id: 'id',
  itemID: 'itemID',
  stock: 'stock',
  shopItemFlag: 'shopItemFlag',
  idk1: 'idk1',
  idk2: 'idk2',
  oldPrice: 'oldPrice',
  newPrice: 'newPrice',
  idkTime1: 'idkTime1',
  saleFromFT: 'saleFromFT',
  idkTime3: 'idkTime3',
  saleToFT: 'saleToFT',
  idk3: 'idk3',
  bundleQuantity: 'bundleQuantity',
  availableDays: 'availableDays',
  buyableWithMaplePoints: 'buyableWithMaplePoints',
  buyableWithCredit: 'buyableWithCredit',
  buyableWithPrepaid: 'buyableWithPrepaid',
  likable: 'likable',
  meso: 'meso',
  favoritable: 'favoritable',
  gender: 'gender',
  likes: 'likes',
  requiredLevel: 'requiredLevel',
  idk10: 'idk10',
  idk11: 'idk11',
  idk13: 'idk13',
  idk14: 'idk14',
  category: 'category'
};

exports.Prisma.DamageskinsScalarFieldEnum = {
  id: 'id',
  charid: 'charid',
  damageskinid: 'damageskinid',
  itemid: 'itemid',
  notsave: 'notsave',
  description: 'description'
};

exports.Prisma.EmployeetrunkScalarFieldEnum = {
  id: 'id',
  money: 'money'
};

exports.Prisma.EquipsScalarFieldEnum = {
  serialnumber: 'serialnumber',
  itemid: 'itemid',
  title: 'title',
  equippeddate: 'equippeddate',
  prevbonusexprate: 'prevbonusexprate',
  options: 'options',
  sockets: 'sockets',
  tuc: 'tuc',
  cuc: 'cuc',
  istr: 'istr',
  idex: 'idex',
  iint: 'iint',
  iluk: 'iluk',
  imaxhp: 'imaxhp',
  imaxhpr: 'imaxhpr',
  imaxmp: 'imaxmp',
  imaxmpr: 'imaxmpr',
  ipad: 'ipad',
  imad: 'imad',
  ipdd: 'ipdd',
  imdd: 'imdd',
  iacc: 'iacc',
  ieva: 'ieva',
  icraft: 'icraft',
  ispeed: 'ispeed',
  ijump: 'ijump',
  arcaneid: 'arcaneid',
  attribute: 'attribute',
  leveluptype: 'leveluptype',
  level: 'level',
  exp: 'exp',
  durability: 'durability',
  iuc: 'iuc',
  ipvpdamage: 'ipvpdamage',
  ireducereq: 'ireducereq',
  specialattribute: 'specialattribute',
  durabilitymax: 'durabilitymax',
  iincreq: 'iincreq',
  growthenchant: 'growthenchant',
  psenchant: 'psenchant',
  hyperupgrade: 'hyperupgrade',
  bdr: 'bdr',
  imdr: 'imdr',
  damr: 'damr',
  statr: 'statr',
  cuttable: 'cuttable',
  exgradeoption: 'exgradeoption',
  itemstate: 'itemstate',
  grade: 'grade',
  chuc: 'chuc',
  souloptionid: 'souloptionid',
  soulsocketid: 'soulsocketid',
  souloption: 'souloption',
  soulitemid: 'soulitemid',
  rstr: 'rstr',
  rdex: 'rdex',
  rint: 'rint',
  rluk: 'rluk',
  rlevel: 'rlevel',
  rjob: 'rjob',
  rpop: 'rpop',
  specialgrade: 'specialgrade',
  fixedpotential: 'fixedpotential',
  tradeblock: 'tradeblock',
  isonly: 'isonly',
  notsale: 'notsale',
  attackspeed: 'attackspeed',
  price: 'price',
  charmexp: 'charmexp',
  setitemid: 'setitemid',
  exitem: 'exitem',
  equiptradeblock: 'equiptradeblock',
  islot: 'islot',
  vslot: 'vslot',
  fixedgrade: 'fixedgrade',
  nopotential: 'nopotential',
  bossreward: 'bossreward',
  superioreqp: 'superioreqp',
  flameid: 'flameid',
  android: 'android',
  androidgrade: 'androidgrade',
  arcane_stat: 'arcane_stat',
  arcane_exp: 'arcane_exp',
  arcane_level: 'arcane_level',
  flame_str: 'flame_str',
  flame_dex: 'flame_dex',
  flame_int: 'flame_int',
  flame_luk: 'flame_luk',
  flame_pad: 'flame_pad',
  flame_mad: 'flame_mad',
  flame_pdd: 'flame_pdd',
  flame_hp: 'flame_hp',
  flame_mp: 'flame_mp',
  flame_speed: 'flame_speed',
  flame_jump: 'flame_jump',
  flame_allStatR: 'flame_allStatR',
  flame_bossDamageR: 'flame_bossDamageR',
  flame_damageR: 'flame_damageR',
  flame_reduceReqLevel: 'flame_reduceReqLevel'
};

exports.Prisma.EventnametagScalarFieldEnum = {
  id: 'id',
  charid: 'charid',
  activeRed: 'activeRed',
  activeBlue: 'activeBlue',
  activeYellow: 'activeYellow',
  activeGreen: 'activeGreen',
  activePurple: 'activePurple',
  sRed: 'sRed',
  sBlue: 'sBlue',
  sYellow: 'sYellow',
  sGreen: 'sGreen',
  sPurple: 'sPurple'
};

exports.Prisma.ExtendspScalarFieldEnum = {
  id: 'id'
};

exports.Prisma.FamiliarsScalarFieldEnum = {
  id: 'id',
  charid: 'charid',
  idk1: 'idk1',
  familiarid: 'familiarid',
  name: 'name',
  idk2: 'idk2',
  idk3: 'idk3',
  fatigue: 'fatigue',
  idk4: 'idk4',
  idk5: 'idk5',
  expiration: 'expiration',
  vitality: 'vitality'
};

exports.Prisma.FriendsScalarFieldEnum = {
  id: 'id',
  ownerid: 'ownerid',
  owneraccid: 'owneraccid',
  friendid: 'friendid',
  friendaccountid: 'friendaccountid',
  name: 'name',
  flag: 'flag',
  groupname: 'groupname',
  mobile: 'mobile',
  nickname: 'nickname',
  memo: 'memo'
};

exports.Prisma.FunckeymapScalarFieldEnum = {
  id: 'id',
  charId: 'charId',
  ord: 'ord'
};

exports.Prisma.GradenamesScalarFieldEnum = {
  id: 'id',
  gradename: 'gradename',
  guildid: 'guildid'
};

exports.Prisma.GuildmembersScalarFieldEnum = {
  id: 'id',
  charid: 'charid',
  guildid: 'guildid',
  grade: 'grade',
  alliancegrade: 'alliancegrade',
  commitment: 'commitment',
  daycommitment: 'daycommitment',
  igp: 'igp',
  commitmentinctime: 'commitmentinctime',
  name: 'name',
  job: 'job',
  level: 'level',
  loggedin: 'loggedin'
};

exports.Prisma.GuildrequestorsScalarFieldEnum = {
  id: 'id',
  requestors_id: 'requestors_id',
  charid: 'charid',
  guildid: 'guildid',
  name: 'name',
  job: 'job',
  level: 'level',
  loggedin: 'loggedin'
};

exports.Prisma.GuildsScalarFieldEnum = {
  id: 'id',
  name: 'name',
  leaderid: 'leaderid',
  worldid: 'worldid',
  markbg: 'markbg',
  markbgcolor: 'markbgcolor',
  mark: 'mark',
  markcolor: 'markcolor',
  maxmembers: 'maxmembers',
  notice: 'notice',
  points: 'points',
  seasonpoints: 'seasonpoints',
  allianceid: 'allianceid',
  level: 'level',
  guildrank: 'guildrank',
  ggp: 'ggp',
  appliable: 'appliable',
  joinsetting: 'joinsetting',
  reqlevel: 'reqlevel',
  bbsNotice: 'bbsNotice',
  battleSp: 'battleSp',
  fk_allianceid: 'fk_allianceid'
};

exports.Prisma.GuildskillScalarFieldEnum = {
  id: 'id',
  skillid: 'skillid',
  level: 'level',
  expiredate: 'expiredate',
  buycharactername: 'buycharactername',
  extendcharactername: 'extendcharactername'
};

exports.Prisma.GuildskillsScalarFieldEnum = {
  guildskill_id: 'guildskill_id',
  skills_id: 'skills_id',
  guild_id: 'guild_id',
  skillid: 'skillid',
  fk_guildskillid: 'fk_guildskillid'
};

exports.Prisma.HairequipsScalarFieldEnum = {
  id: 'id',
  alid: 'alid',
  equipid: 'equipid'
};

exports.Prisma.HyperrockfieldsScalarFieldEnum = {
  id: 'id',
  charid: 'charid',
  ord: 'ord',
  fieldid: 'fieldid'
};

exports.Prisma.InventoriesScalarFieldEnum = {
  id: 'id',
  type: 'type',
  slots: 'slots'
};

exports.Prisma.ItemsScalarFieldEnum = {
  id: 'id',
  inventoryid: 'inventoryid',
  trunkid: 'trunkid',
  auctionHouseStatus: 'auctionHouseStatus',
  itemid: 'itemid',
  bagindex: 'bagindex',
  cashitemserialnumber: 'cashitemserialnumber',
  dateexpire: 'dateexpire',
  invtype: 'invtype',
  type: 'type',
  iscash: 'iscash',
  quantity: 'quantity',
  expireonlogout: 'expireonlogout',
  owner: 'owner',
  obtainedonce: 'obtainedonce',
  zeroShareItemID: 'zeroShareItemID',
  attribute: 'attribute'
};

exports.Prisma.ItemsbuylimitScalarFieldEnum = {
  id: 'id',
  shopitemid: 'shopitemid',
  charid: 'charid',
  amountbought: 'amountbought'
};

exports.Prisma.KeymapsScalarFieldEnum = {
  id: 'id',
  fkmapid: 'fkmapid',
  idx: 'idx',
  type: 'type',
  val: 'val'
};

exports.Prisma.LinkskillsScalarFieldEnum = {
  id: 'id',
  accid: 'accid',
  ownerid: 'ownerid',
  linkedcharid: 'linkedcharid',
  linkskillid: 'linkskillid',
  level: 'level',
  addeddate: 'addeddate'
};

exports.Prisma.MacrosScalarFieldEnum = {
  id: 'id',
  charid: 'charid',
  muted: 'muted',
  name: 'name'
};

exports.Prisma.MacroskillsScalarFieldEnum = {
  id: 'id',
  ordercol: 'ordercol',
  skillid: 'skillid',
  macroid: 'macroid'
};

exports.Prisma.MatrixskillScalarFieldEnum = {
  id: 'id',
  charid: 'charid',
  state: 'state',
  coreID: 'coreID',
  skillID1: 'skillID1',
  skillID2: 'skillID2',
  skillID3: 'skillID3',
  level: 'level',
  maxLevel: 'maxLevel',
  experience: 'experience',
  crc: 'crc',
  slot: 'slot'
};

exports.Prisma.MedalsScalarFieldEnum = {
  id: 'id',
  charid: 'charid',
  questid: 'questid',
  itemid: 'itemid',
  completedtime: 'completedtime'
};

exports.Prisma.Mob_dropsScalarFieldEnum = {
  id: 'id',
  mobid: 'mobid',
  itemid: 'itemid',
  chance: 'chance',
  minquant: 'minquant',
  maxquant: 'maxquant',
  reactordrop: 'reactordrop'
};

exports.Prisma.Monster_collectionScalarFieldEnum = {
  id: 'id',
  mobid: 'mobid',
  region: 'region',
  session: 'session',
  position: 'position'
};

exports.Prisma.Monster_collection_explorationsScalarFieldEnum = {
  id: 'id',
  collectionid: 'collectionid',
  collectionkey: 'collectionkey',
  monsterkey: 'monsterkey',
  endDate: 'endDate',
  position: 'position'
};

exports.Prisma.Monster_collection_group_rewardsScalarFieldEnum = {
  region: 'region',
  session: 'session',
  groupid: 'groupid',
  rewardid: 'rewardid',
  quantity: 'quantity'
};

exports.Prisma.Monster_collection_mobsScalarFieldEnum = {
  id: 'id',
  collectionid: 'collectionid',
  mobid: 'mobid'
};

exports.Prisma.Monster_collection_rewardsScalarFieldEnum = {
  region: 'region',
  session: 'session',
  groupid: 'groupid',
  collectionid: 'collectionid'
};

exports.Prisma.Monster_collection_session_rewardsScalarFieldEnum = {
  region: 'region',
  session: 'session',
  rewardid: 'rewardid',
  quantity: 'quantity'
};

exports.Prisma.Monster_collectionsScalarFieldEnum = {
  id: 'id',
  templateid: 'templateid',
  accid: 'accid'
};

exports.Prisma.MonsterbookcardsScalarFieldEnum = {
  id: 'id',
  bookid: 'bookid',
  cardid: 'cardid'
};

exports.Prisma.MonsterbookinfosScalarFieldEnum = {
  id: 'id',
  setid: 'setid',
  coverid: 'coverid'
};

exports.Prisma.NoncombatstatdaylimitScalarFieldEnum = {
  id: 'id',
  charisma: 'charisma',
  charm: 'charm',
  insight: 'insight',
  will: 'will',
  craft: 'craft',
  sense: 'sense',
  lastupdatecharmbycashpr: 'lastupdatecharmbycashpr',
  charmbycashpr: 'charmbycashpr'
};

exports.Prisma.NpcScalarFieldEnum = {
  id: 'id',
  npcid: 'npcid',
  mapid: 'mapid',
  x: 'x',
  y: 'y',
  cy: 'cy',
  rx0: 'rx0',
  rx1: 'rx1',
  fh: 'fh'
};

exports.Prisma.Offense_managersScalarFieldEnum = {
  id: 'id',
  points: 'points'
};

exports.Prisma.OffensesScalarFieldEnum = {
  id: 'id',
  manager_id: 'manager_id',
  charid: 'charid',
  accountid: 'accountid',
  msg: 'msg',
  type: 'type',
  issuedate: 'issuedate',
  issuer_char_id: 'issuer_char_id'
};

exports.Prisma.PartyScalarFieldEnum = {
  id: 'id',
  name: 'name',
  partyleaderid: 'partyleaderid',
  appliable: 'appliable',
  isprivateparty: 'isprivateparty'
};

exports.Prisma.PartybossScalarFieldEnum = {
  id: 'id',
  charid: 'charid',
  orderid: 'orderid',
  bossname: 'bossname',
  difficulty: 'difficulty',
  attempt: 'attempt',
  lastattempttime: 'lastattempttime'
};

exports.Prisma.PartymembersScalarFieldEnum = {
  id: 'id',
  partyid: 'partyid',
  charid: 'charid',
  name: 'name',
  job: 'job',
  subJob: 'subJob',
  level: 'level',
  channel: 'channel',
  fieldid: 'fieldid',
  loggedin: 'loggedin'
};

exports.Prisma.PetidsScalarFieldEnum = {
  id: 'id',
  alid: 'alid',
  petid: 'petid'
};

exports.Prisma.PetitemsScalarFieldEnum = {
  itemid: 'itemid',
  name: 'name',
  level: 'level',
  tameness: 'tameness',
  repleteness: 'repleteness',
  petattribute: 'petattribute',
  petskill: 'petskill',
  datedead: 'datedead',
  remainlife: 'remainlife',
  attribute: 'attribute',
  activestate: 'activestate',
  autobuffskill: 'autobuffskill',
  pethue: 'pethue',
  giantrate: 'giantrate',
  exceptionList: 'exceptionList'
};

exports.Prisma.QuestlistsScalarFieldEnum = {
  questlist_id: 'questlist_id',
  questmanager_id: 'questmanager_id',
  questid: 'questid',
  fk_questid: 'fk_questid'
};

exports.Prisma.QuestmanagersScalarFieldEnum = {
  id: 'id'
};

exports.Prisma.QuestprogressrequirementsScalarFieldEnum = {
  id: 'id',
  orderNum: 'orderNum',
  progresstype: 'progresstype',
  questid: 'questid',
  unitid: 'unitid',
  requiredcount: 'requiredcount',
  currentcount: 'currentcount'
};

exports.Prisma.QuestsScalarFieldEnum = {
  id: 'id',
  qrkey: 'qrkey',
  qrvalue: 'qrvalue',
  status: 'status',
  completedtime: 'completedtime',
  expireterm: 'expireterm'
};

exports.Prisma.RewardinfoScalarFieldEnum = {
  id: 'id',
  charid: 'charid',
  charname: 'charname',
  rewardItemType: 'rewardItemType',
  itemID: 'itemID',
  quantity: 'quantity',
  maplePoint: 'maplePoint',
  meso: 'meso',
  level: 'level',
  exp: 'exp',
  description: 'description',
  starttime: 'starttime',
  endtime: 'endtime'
};

exports.Prisma.ShopitemsScalarFieldEnum = {
  id: 'id',
  shopid: 'shopid',
  itemid: 'itemid',
  price: 'price',
  tokenitemid: 'tokenitemid',
  tokenprice: 'tokenprice',
  pointquestid: 'pointquestid',
  pointprice: 'pointprice',
  starcoin: 'starcoin',
  questexid: 'questexid',
  questexkey: 'questexkey',
  questexvalue: 'questexvalue',
  itemperiod: 'itemperiod',
  levellimited: 'levellimited',
  showlevmin: 'showlevmin',
  showlevmax: 'showlevmax',
  questid: 'questid',
  sellstart: 'sellstart',
  sellend: 'sellend',
  tabindex: 'tabindex',
  worldblock: 'worldblock',
  potentialgrade: 'potentialgrade',
  buylimit: 'buylimit',
  quantity: 'quantity',
  unitprice: 'unitprice',
  maxperslot: 'maxperslot',
  discountperc: 'discountperc'
};

exports.Prisma.SkillcooltimesScalarFieldEnum = {
  id: 'id',
  charid: 'charid',
  skillid: 'skillid',
  nextusabletime: 'nextusabletime'
};

exports.Prisma.SkillsScalarFieldEnum = {
  id: 'id',
  charid: 'charid',
  skillid: 'skillid',
  rootid: 'rootid',
  maxlevel: 'maxlevel',
  currentlevel: 'currentlevel',
  masterlevel: 'masterlevel'
};

exports.Prisma.SpsetScalarFieldEnum = {
  id: 'id',
  extendsp_id: 'extendsp_id',
  joblevel: 'joblevel',
  sp: 'sp'
};

exports.Prisma.StolenskillsScalarFieldEnum = {
  id: 'id',
  charid: 'charid',
  skillid: 'skillid',
  position: 'position',
  currentlv: 'currentlv'
};

exports.Prisma.SystemtimesScalarFieldEnum = {
  id: 'id',
  yr: 'yr',
  mnth: 'mnth'
};

exports.Prisma.TotemsScalarFieldEnum = {
  id: 'id',
  alid: 'alid',
  totemid: 'totemid'
};

exports.Prisma.TrunksScalarFieldEnum = {
  id: 'id',
  slotcount: 'slotcount',
  money: 'money'
};

exports.Prisma.UnseenequipsScalarFieldEnum = {
  id: 'id',
  alid: 'alid',
  equipid: 'equipid'
};

exports.Prisma.UsersScalarFieldEnum = {
  id: 'id',
  name: 'name',
  password: 'password',
  pic: 'pic',
  email: 'email',
  age: 'age',
  accounttype: 'accounttype',
  votepoints: 'votepoints',
  donationpoints: 'donationpoints',
  maplePoints: 'maplePoints',
  nxPrepaid: 'nxPrepaid',
  clientstate: 'clientstate',
  vipgrade: 'vipgrade',
  vippoints: 'vippoints',
  freevippointdate: 'freevippointdate',
  vipexpireddate: 'vipexpireddate',
  nblockreason: 'nblockreason',
  banExpireDate: 'banExpireDate',
  banReason: 'banReason',
  offensemanager: 'offensemanager',
  gender: 'gender',
  msg2: 'msg2',
  purchaseexp: 'purchaseexp',
  pblockreason: 'pblockreason',
  chatunblockdate: 'chatunblockdate',
  hascensorednxloginid: 'hascensorednxloginid',
  gradecode: 'gradecode',
  censorednxloginid: 'censorednxloginid',
  characterslots: 'characterslots',
  creationdate: 'creationdate',
  bosspoints: 'bosspoints',
  lastvote1: 'lastvote1',
  lastvote2: 'lastvote2',
  claimvote1: 'claimvote1',
  claimvote2: 'claimvote2',
  dojop: 'dojop',
  lastvotetime: 'lastvotetime',
  lastvoteip: 'lastvoteip',
  discordid: 'discordid'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};


exports.Prisma.ModelName = {
  accounts: 'accounts',
  alliance_gradenames: 'alliance_gradenames',
  alliances: 'alliances',
  auction_histories: 'auction_histories',
  auction_items: 'auction_items',
  avatardata: 'avatardata',
  avatarlook: 'avatarlook',
  bbs_records: 'bbs_records',
  bbs_replies: 'bbs_replies',
  beautydata: 'beautydata',
  bosslog: 'bosslog',
  cashiteminfos: 'cashiteminfos',
  characterpotentials: 'characterpotentials',
  characters: 'characters',
  characterstats: 'characterstats',
  chosenskills: 'chosenskills',
  cms_votes: 'cms_votes',
  cooldowns: 'cooldowns',
  cores: 'cores',
  cs_categories: 'cs_categories',
  cs_items: 'cs_items',
  damageskins: 'damageskins',
  employeetrunk: 'employeetrunk',
  equips: 'equips',
  eventnametag: 'eventnametag',
  extendsp: 'extendsp',
  familiars: 'familiars',
  friends: 'friends',
  funckeymap: 'funckeymap',
  gradenames: 'gradenames',
  guildmembers: 'guildmembers',
  guildrequestors: 'guildrequestors',
  guilds: 'guilds',
  guildskill: 'guildskill',
  guildskills: 'guildskills',
  hairequips: 'hairequips',
  hyperrockfields: 'hyperrockfields',
  inventories: 'inventories',
  items: 'items',
  itemsbuylimit: 'itemsbuylimit',
  keymaps: 'keymaps',
  linkskills: 'linkskills',
  macros: 'macros',
  macroskills: 'macroskills',
  matrixskill: 'matrixskill',
  medals: 'medals',
  mob_drops: 'mob_drops',
  monster_collection: 'monster_collection',
  monster_collection_explorations: 'monster_collection_explorations',
  monster_collection_group_rewards: 'monster_collection_group_rewards',
  monster_collection_mobs: 'monster_collection_mobs',
  monster_collection_rewards: 'monster_collection_rewards',
  monster_collection_session_rewards: 'monster_collection_session_rewards',
  monster_collections: 'monster_collections',
  monsterbookcards: 'monsterbookcards',
  monsterbookinfos: 'monsterbookinfos',
  noncombatstatdaylimit: 'noncombatstatdaylimit',
  npc: 'npc',
  offense_managers: 'offense_managers',
  offenses: 'offenses',
  party: 'party',
  partyboss: 'partyboss',
  partymembers: 'partymembers',
  petids: 'petids',
  petitems: 'petitems',
  questlists: 'questlists',
  questmanagers: 'questmanagers',
  questprogressrequirements: 'questprogressrequirements',
  quests: 'quests',
  rewardinfo: 'rewardinfo',
  shopitems: 'shopitems',
  skillcooltimes: 'skillcooltimes',
  skills: 'skills',
  spset: 'spset',
  stolenskills: 'stolenskills',
  systemtimes: 'systemtimes',
  totems: 'totems',
  trunks: 'trunks',
  unseenequips: 'unseenequips',
  users: 'users'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
