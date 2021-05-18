const words = [ "2g1c", "4r5e", "5h1t", "5hit", "5ht", "666", "@$$", "a55", "a55hole", "a_s_s", "abbo", "abeed", "abuse", "acrotomophilia", "aeolus", "africoon", "ahole", "alabama hot pocket", "alaskan pipeline", "alligator bait", "alligatorbait", "amcik", "anal", "analannie", "analprobe", "analsex", "andskota", "anilingus", "anus", "apeshit", "ar5e", "arabush", "arabushs", "areola", "areole", "argie", "arian", "armo", "armos", "aroused", "arrse", "arschloch", "arse", "arsehole", "aryan", "ash0le", "ash0les", "asholes", "ass monkey", "ass", "ass-fucker", "ass-hat", "ass-pirate", "assbag", "assbagger", "assbandit", "assbang", "assbanged", "assbanger", "assbangs", "assbite", "assblaster", "assclown", "asscock", "asscowboy", "asscracker", "asses", "assface", "assfuck", "assfucker", "assfukka", "assgoblin", "assh0le", "assh0lez", "asshat", "asshead", "assho1e", "asshole", "assholes", "assholz", "asshopper", "asshore", "assjacker", "assjockey", "asskiss", "asskisser", "assklown", "asslick", "asslicker", "asslover", "assman", "assmaster", "assmonkey", "assmunch", "assmuncher", "assnigger", "asspacker", "asspirate", "asspuppies", "assrammer", "assranger", "assshit", "assshole", "asssucker", "asswad", "asswhole", "asswhore", "asswipe", "asswipes", "auto erotic", "autoerotic", "ayir", "azazel", "azz", "azzhole", "b a s t a r d", "b i t c h", "b o o b", "b!+ch", "b!tch", "b!tchin", "b*tch", "b00b", "b00bies", "b00biez", "b00bs", "b00bz", "b17ch", "b1tch", "b7ch", "babeland", "babes", "baby batter", "baby juice", "backdoor", "backdoorman", "badfuck", "bagging", "ball gag", "ball gravy", "ball kicking", "ball licking", "ball sack", "ball sucking", "ballbag", "balllicker", "ballsack", "bampot", "bangbro", "bangbros", "banger", "banging", "bareback", "barely legal", "barelylegal", "barenaked", "barf", "barface", "barfface", "bassterd", "bassterds", "bastard", "bastardo", "bastards", "bastardz", "basterds", "basterdz", "bastinado", "bawdy", "bazongas", "bazooms", "bbw", "bdsm", "beaner", "beaners", "beaney", "beaneys", "beardedclam", "beastality", "beastial", "beastiality", "beastility", "beatch", "beatoff", "beatyourmeat", "beaver cleaver", "beaver lips", "beaver", "beef curtains", "beeyotch", "bellend", "beotch", "bestial", "bestiality", "bi curious", "bi+ch", "bi7ch", "biatch", "bicurious", "big black", "big breasts", "big knockers", "big tits", "bigass", "bigbastard", "bigbreasts", "bigbutt", "bigtits", "bimbo", "bimbos", "bint", "birdlock", "bitch", "bitchass", "bitched", "bitcher", "bitchers", "bitches", "bitchez", "bitchin", "bitching", "bitchslap", "bitchtit", "bitchy", "biteme", "bitties", "black cock", "blackcock", "blackman", "blackout", "blacks", "blonde action", "blonde on blonde action", "blonde on blonde", "bloodclaat", "bloody", "blow j", "blow job", "blow your l", "blow your load", "blowjob", "blowjobs", "blue waffle", "bluegum", "bluegums", "blumpkin", "bo ob", "bo obs", "boang", "boche", "boches", "bodily", "boffing", "bogan", "bohunk", "boink", "boiolas", "bollick", "bollock", "bollocks", "bollok", "bollox", "bombers", "bombing", "bomd", "bondage", "boned", "boner", "boners", "bong", "boob", "boobies", "boobs", "booby", "boobz", "boody", "booger", "bookie", "boong", "boonga", "boongas", "boongs", "boonie", "boonies", "booobs", "boooobs", "booooobs", "booooooobs", "bootee", "bootlip", "bootlips", "booty call", "booty", "bootycall", "boozer", "boozy", "bosch", "bosche", "bosches", "boschs", "bosomy", "bounty bar", "bounty bars", "bountybar", "brea5t", "breastjob", "breastlover", "breastman", "brothel", "brown showers", "brunette action", "btch", "buceta", "buddhahead", "buddhaheads", "buffies", "bugger", "buggered", "buggery", "bukkake", "bule", "bules", "bullcrap", "bulldike", "bulldyke", "bullet vibe", "bullshit", "bullshits", "bullshitted", "bullturds", "bumblefuck", "bumfuck", "bung hole", "bung", "bunga", "bungas", "bunghole", "bunny fucker", "burr head", "burr heads", "burrhead", "burrheads", "butchbabes", "butchdike", "butchdyke", "butt plug", "butt-pirate", "buttbang", "buttcheeks", "buttface", "buttfuck", "buttfucker", "buttfuckers", "butthead", "butthole", "buttman", "buttmuch", "buttmunch", "buttmuncher", "buttons", "buttpirate", "buttplug", "buttstain", "buttwipe", "byatch", "c u n t", "c-0-c-k", "c-o-c-k", "c-u-n-t", "c.0.c.k", "c.o.c.k.", "c.u.n.t", "c0ck", "c0cks", "c0cksucker", "c0k", "cabron", "caca", "cacker", "cahone", "camel jockey", "camel jockeys", "camel toe", "cameljockey", "cameltoe", "camgirl", "camslut", "camwhore", "carpet muncher", "carpetmuncher", "carruth", "cawk", "cawks", "cazzo", "cervix", "chav", "cheese eating surrender monkey", "cheese eating surrender monkies", "cheeseeating surrender monkey", "cheeseeating surrender monkies", "cheesehead", "cheeseheads", "cherrypopper", "chickslick", "china swede", "china swedes", "chinaman", "chinamen", "chinaswede", "chinaswedes", "chinc", "chincs", "ching chong", "ching chongs", "chinga", "chingchong", "chingchongs", "chink", "chinks", "chinky", "choad", "chocolate rosebuds", "chode", "chodes", "chonkies", "chonky", "chonkys", "chraa", "christ killer", "christ killers", "chug", "chugs", "chuj", "chunger", "chungers", "chunkies", "chunkys", "chute", "cipa", "circlejerk", "cl1t", "clamdigger", "clamdiver", "clamps", "clansman", "clansmen", "clanswoman", "clanswomen", "cleveland steamer", "climax", "clit", "clitface", "clitfuck", "clitoris", "clitorus", "clits", "clitty", "clogwog", "clover clamps", "clusterfuck", "cnts", "cntz", "cnut", "cocain", "cocaine", "cock", "cock-head", "cock-sucker", "cockbite", "cockblock", "cockblocker", "cockburger", "cockcowboy", "cockface", "cockfight", "cockfucker", "cockhead", "cockholster", "cockknob", "cockknocker", "cocklicker", "cocklover", "cockmonkey", "cockmunch", "cockmuncher", "cocknob", "cocknose", "cocknugget", "cockqueen", "cockrider", "cocks", "cockshit", "cocksman", "cocksmith", "cocksmoker", "cocksucer", "cocksuck", "cocksucked", "cocksucker", "cocksucking", "cocksucks", "cocksuka", "cocksukka", "cocktease", "cocky", "cohee", "coital", "coitus", "cok", "cokmuncher", "coksucka", "commie", "condom", "coochie", "coochy", "coolie", "coolies", "cooly", "coon ass", "coon asses", "coon", "coonass", "coonasses", "coondog", "coons", "cooter", "coprolagnia", "coprophilia", "copulate", "corksucker", "cornhole", "cowgirl", "cox", "cra5h", "crabs", "crackcocain", "cracker", "crackpipe", "crackwhore", "crap", "crapola", "crapper", "crappy", "crash", "creampie", "crotch", "crotchjockey", "crotchmonkey", "crotchrot", "cum", "cumbubble", "cumdumpster", "cum face", "cumfest", "cumjockey", "cum licker", "cumlickr", "cumm", "cummer", "cummin", "cumming", "cumquat", "cumqueen", "cums", "cumshot", "cumshots", "cumslut", "cumstain", "cumtart", "cumsucker", "cunilingus", "cunillingus", "cunn", "cunnie", "cunnilingus", "cunntt", "cunny", "cunt", "cunteyed", "cuntface", "cuntfuck", "cuntfucker", "cunthole", "cunthunter", "cuntlick", "cuntlicker", "cuntlicking", "cuntrag", "cunts", "cuntslut", "cuntsucker", "cuntz", "curry muncher", "curry munchers", "currymuncher", "currymunchers", "cushi", "cushis", "cyalis", "cyberfuc", "cyberfuck", "cyberfucked", "cyberfucker", "cyberfuckers", "cyberfucking", "cybersex", "cyberslimer", "d0ng", "d0uch3", "d0uche", "d1ck", "d1ld0", "d1ldo", "d4mn", "dago", "dagos", "dahmer", "damm", "dammit", "damn", "damnation", "damned", "damnit", "darkey", "darkeys", "darkie", "darkies", "darky", "date rape", "daterape", "datnigga", "dawgie style", "dawgie-style", "daygo", "deapthroat", "deep throat", "deep throating", "deepaction", "deepthroat", "deepthroating", "defecate", "deggo", "dego", "degos", "demon", "dendrophilia", "destroyyourpussy", "deth", "diaperdaddy", "diaper daddy", "diaper head", "diaper heads", "diaperhead", "diaperheads", "dick pic", "dick", "dick-ish", "dickbag", "dickbeaters", "dickbrain", "dickdipper", "dickface", "dickflipper", "dickforbrains", "dickfuck", "dickhead", "dickheads", "dickhole", "dickish", "dickjuice", "dickless", "dicklick", "dicklicker", "dickman", "dickmilk", "dickpic", "dickripper", "dicks", "dicksipper", "dickslap", "dickslicker", "dickwad", "dickweasel", "dickweed", "dickwhipper", "dickwod", "dickzipper", "diddle", "dike", "dild0", "dild0s", "dildo", "dildos", "dilf", "diligaf", "dilld0", "dilld0s", "dillweed", "dimwit", "dingle", "dingleberries", "dingleberry", "dink", "dinks", "dipship", "dipshit", "dipstick", "dirsa", "dirty pillows", "dirty sanchez", "dix", "dixiedike", "dixiedyke", "dlck", "dog style", "dog-fucker", "doggie style", "doggie", "doggie-style", "doggiestyle", "doggin", "dogging", "doggy style", "doggy-style", "doggystyle", "dolcett", "domination", "dominatricks", "dominatrics", "dominatrix", "dommes", "dong", "donkey punch", "donkeypunch", "donkeyribber", "doochbag", "doodoo", "doofus", "dookie", "doosh", "dot head", "dot heads", "dothead", "dotheads", "double dong", "double penetration", "doubledong", "doublepenetration", "douch3", "douche bag", "douche", "douche-fag", "douchebag", "douchebags", "douchewaffle", "douchey", "dp action", "dp", "dpaction", "dragqueen", "dragqween", "dripdick", "drug", "dry hump", "dryhump", "duche", "dudette", "dumass", "dumb ass", "dumbass", "dumbasses", "dumbbitch", "dumbfuck", "dumbshit", "dummy", "dumshit", "dune coon", "dune coons", "dupa", "dvda", "dyefly", "dyke", "dykes", "dziwka", "earotics", "easyslut", "eat my ass", "eat my", "eatballs", "eatme", "eatmyass", "eatpussy", "ecchi", "ejackulate", "ejaculate", "ejaculated", "ejaculates", "ejaculating", "ejaculatings", "ejaculation", "ejaculations", "ejakulate", "ekrem", "ekto", "enculer", "enema", "enlargement", "erect", "erection", "ero", "erotic", "erotism", "escort", "esqua", "essohbee", "ethical slut", "evl", "excrement", "exkwew", "explosion", "extacy", "extasy", "f u c k e r", "f u c k e", "f u c k", "f u k", "f*ck", "f-u-c-k", "f.u.c.k", "f4nny", "f_u_c_k", "facefucker", "fack", "faeces", "faen", "fag", "fag1t", "fagbag", "faget", "fagfucker", "fagg", "fagg1t", "fagged", "fagging", "faggit", "faggitt", "faggot", "faggotcock", "faggs", "fagit", "fagot", "fagots", "fags", "fagt", "fagtard", "fagz", "faig", "faigs", "faigt", "fanculo", "fannybandit", "fannyflaps", "fannyfucker", "fanyy", "fartknocker", "farty", "fastfuck", "fatah", "fatass", "fatfuck", "fatfucker", "fatso", "fck", "fckcum", "fckd", "fcuk", "fcuker", "fcuking", "fecal", "feces", "feck", "fecker", "feg", "felatio", "felch", "felcher", "felching", "fellate", "fellatio", "feltch", "feltcher", "feltching", "female squirting", "femalesquirtin", "femalesquirting", "femdom", "fetish", "ficken", "figging", "fingerbang", "fingerfood", "fingerfuck", "fingerfucked", "fingerfucker", "fingerfuckers", "fingerfucking", "fingerfucks", "fingering", "fisted", "fister", "fistfuck", "fistfucked", "fistfucker", "fistfuckers", "fistfucking", "fistfuckings", "fistfucks", "fisting", "fisty", "fitt", "flamer", "flange", "flasher", "flikker", "flipping the bird", "floo", "floozy", "flydie", "flydye", "foad", "fok", "fondle", "foobar", "fook", "fooker", "foot fetish", "footaction", "footfetish", "footfuck", "footfucker", "footjob", "footlicker", "footstar", "foreskin", "forni", "fornicate", "fotze", "foursome", "fourtwenty", "freakfuck", "freakyfucker", "freefuck", "freex", "frigg", "frigga", "frigger", "frotting", "fubar", "fucck", "fuck buttons", "fuck", "fuck-tard", "fucka", "fuckable", "fuckass", "fuckbag", "fuckbook", "fuckboy", "fuckbrain", "fuckbuddy", "fuckbutt", "fuckd", "fucked", "fuckedup", "fucker", "fuckers", "fuckersucker", "fuckface", "fuckfest", "fuckfreak", "fuckfriend", "fuckhead", "fuckheads", "fuckher", "fuckhole", "fuckin", "fuckina", "fucking", "fuckingbitch", "fuckings", "fuckingshitmotherfucker", "fuckinnuts", "fuckinright", "fuckit", "fuckknob", "fuckme", "fuckmehard", "fuckmonkey", "fuckn", "fucknugget", "fucknut", "fucknuts", "fucknutt", "fucknutz", "fuckoff", "fuckpig", "fuckr", "fucks", "fuckstick", "fucktard", "fucktards", "fuckup", "fuckwad", "fuckwhit", "fuckwhore", "fuckwit", "fuckwitt", "fuckyou", "fudge packer", "fudgepacker", "fugly", "fuk", "fukah", "fuken", "fuker", "fukin", "fuking", "fukk", "fukkah", "fukken", "fukker", "fukkin", "fuks", "fuktard", "fuktards", "fukwhit", "fukwit", "funeral", "funfuck", "fungus", "futanari", "futkretzn", "fuuck", "fux", "fux0r", "fvck", "fvk", "fxck", "g-spot", "g00k", "gae", "gai", "gang bang", "gangbang", "gangbanged", "gangbanger", "gangbangs", "gangsta", "ganja", "gator bait", "gatorbait", "gay sex", "gayboy", "gaygirl", "gaylord", "gaymuthafuckinwhore", "gays", "gaysex", "gayz", "geezer", "geni", "genital", "genitals", "getiton", "gey", "gfy", "ghay", "ghey", "giant cock", "gigolo", "ginzo", "ginzos", "gipp", "gippo", "gippos", "gipps", "girl on top", "girl on", "girls gone wild", "givehead", "glans", "glazeddonut", "goatcx", "goatse", "gob", "god dammit", "god damn", "god damnit", "god-dam", "god-damned", "godam", "godammit", "godamn", "godamnit", "goddam", "goddamit", "goddamm", "goddammit", "goddamn", "goddamned", "goddamnes", "goddamnit", "goddamnmuthafucker", "godsdamn", "gokkun", "golden shower", "goldenshower", "golliwog", "golliwogs", "gonad", "gonads", "gonorrehea", "gonzagas", "goo girl", "gooch", "goodpoop", "gook eye", "gook eyes", "gook", "gookeye", "gookeyes", "gookies", "gooks", "gooky", "gora", "goras", "goregasm", "gotohell", "goy", "goyim", "greaseball", "greaseballs", "gringo", "gringos", "groe", "groid", "groids", "grope", "gross", "grostulation", "group sex", "gspot", "gstring", "gtfo", "gub", "gubba", "gubbas", "gubs", "guido", "guiena", "guineas", "guizi", "gummer", "guro", "gwailo", "gwailos", "gweilo", "gweilos", "gyopo", "gyopos", "gyp", "gyped", "gypo", "gypos", "gypp", "gypped", "gyppie", "gyppies", "gyppo", "gyppos", "gyppy", "gyppys", "gypsys", "h e l l", "h o m", "h00r", "h0ar", "h0m0", "h0mo", "h0r", "h0re", "h4x0r", "hadji", "hadjis", "hairyback", "hairybacks", "haji", "hajis", "hajji", "hajjis", "half breed", "half caste", "halfbreed", "halfcaste", "hamas", "hand job", "handjob", "haole", "haoles", "hapa", "hard core", "hardcore", "hardcoresex", "hardon", "harem", "he11", "headfuck", "hebe", "hebes", "heeb", "heebs", "hell", "hells", "helvete", "henhouse", "hentai", "heroin", "herp", "herpes", "herpy", "heshe", "hijacker", "hijacking", "hillbillies", "hillbilly", "hindoo", "hiscock", "hitler", "hitlerism", "hitlerist", "ho", "hobag", "hodgie", "hoe", "hoer", "hoes", "holestuffer", "hom0", "homey", "homicide", "homo", "homobangers", "homodumbshit", "homoey", "honger", "honkers", "honkey", "honkeys", "honkie", "honkies", "honky", "hooch", "hooker", "hookers", "hoor", "hoore", "hootch", "hooter", "hooters", "hore", "hori", "horis", "hork", "horndawg", "horndog", "horney", "horniest", "horny", "horseshit", "hosejob", "hoser", "hot carl", "hot chick", "hotcarl", "hotdamn", "hotpussy", "hotsex", "hottotrot", "how to kill", "how to murder", "huevon", "huge fat", "hugefat", "hui", "hummer", "humped", "humper", "humpher", "humphim", "humpin", "humping", "husky", "hussy", "hustler", "hymen", "hymie", "hymies", "iblowu", "ike", "ikes", "ikey", "ikeymo", "ikeymos", "ikwe", "illegal", "illegals", "inbred", "incest", "indon", "indons", "injun", "injuns", "insest", "intercourse", "interracial", "intheass", "inthebuff", "israels", "j3rk0ff", "jack off", "jack-off", "jackass", "jackhole", "jackoff", "jackshit", "jacktheripper", "jail bait", "jailbait", "jap", "japcrap", "japie", "japies", "japs", "jebus", "jelly donut", "jerk off", "jerk", "jerk-off", "jerk0ff", "jerked", "jerkoff", "jerries", "jerry", "jesuschrist", "jewed", "jewess", "jig", "jiga", "jigaboo", "jigaboos", "jigarooni", "jigaroonis", "jigg", "jigga", "jiggabo", "jiggaboo", "jiggabos", "jiggas", "jigger", "jiggerboo", "jiggers", "jiggs", "jiggy", "jigs", "jihad", "jijjiboo", "jijjiboos", "jimfish", "jisim", "jism", "jiss", "jiz", "jizim", "jizin", "jizjuice", "jizm", "jizn", "jizz", "jizzd", "jizzed", "jizzim", "jizzin", "jizzn", "jizzum", "jugg", "juggs", "jugs", "jungle bunnies", "jungle bunny", "junglebunny", "junkie", "junky", "kacap", "kacapas", "kacaps", "kaffer", "kaffir", "kaffre", "kafir", "kanake", "kanker", "katsap", "katsaps", "kawk", "khokhol", "khokhols", "kicking", "kigger", "kike", "kikes", "killer", "kills", "kimchis", "kinbaku", "kink", "kinkster", "kinky", "kissass", "kkk", "klan", "klansman", "klansmen", "klanswoman", "klanswomen", "klootzak", "knobbing", "knobead", "knobed", "knobend", "knobhead", "knobjocky", "knobjokey", "knobz", "knockers", "knulle", "kock", "kondum", "kondums", "kooch", "kooches", "koon", "kootch", "krap", "krappy", "kraut", "krauts", "kuffar", "kuk", "kuksuger", "kum", "kumbubble", "kumbullbe", "kumer", "kummer", "kumming", "kumquat", "kums", "kunilingus", "kunnilingus", "kunt", "kunts", "kuntz", "kurac", "kurwa", "kushi", "kushis", "kusi", "kwa", "kwai lo", "kwai los", "ky", "kyke", "kykes", "kyopo", "kyopos", "kyrpa", "l3i+ch", "l3i\\+ch", "l3itch", "labia", "lapdance", "lds", "leather restraint", "leather straight jacket", "leather straight", "leatherrestraint", "lebo", "lebos", "lech", "lemon party", "lemonparty", "leper", "lesbain", "lesbayn", "lesbian", "lesbin", "lesbo", "lez", "lezbe", "lezbefriends", "lezbian", "lezbians", "lezbo", "lezbos", "lezz", "lezzian", "lezzie", "lezzies", "lezzo", "lezzy", "libido", "licker", "licking", "lickme", "lilniglet", "limey", "limpdick", "limy", "lingerie", "lipshits", "lipshitz", "livesex", "lmfao", "loadedgun", "loin", "loins", "lolita", "lovebone", "lovegoo", "lovegun", "lovejuice", "lovemaking", "lovemuscle", "lovepistol", "loverocket", "lowlife", "lsd", "lubejob", "lubra", "lucifer", "luckycammeltoe", "lugan", "lugans", "lust", "lusting", "lusty", "lynch", "m-fucking", "m0f0", "m0fo", "m45terbate", "ma5terb8", "ma5terbate", "mabuno", "mabunos", "macaca", "macacas", "magicwand", "mahbuno", "mahbunos", "make me come", "makemecome", "makemecum", "male squirting", "mamhoon", "mams", "manhater", "manpaste", "maricon", "maricón", "marijuana", "masochist", "masokist", "massa", "massterbait", "masstrbait", "masstrbate", "mastabate", "mastabater", "master-bate", "masterb8", "masterbaiter", "masterbat", "masterbat3", "masterbate", "masterbates", "masterbating", "masterbation", "masterbations", "masterblaster", "mastrabator", "masturbat", "masturbate", "masturbating", "masturbation", "mattressprincess", "mau mau", "mau maus", "maumau", "maumaus", "mcfagget", "meatbeatter", "meatrack", "menage a trois", "menage", "menses", "menstruate", "menstruation", "merd", "meth", "mgger", "mggor", "mibun", "mick", "mickeyfinn", "mideast", "mierda", "milf", "minge", "minger", "missionary position", "missionary", "mo-fo", "mockey", "mockie", "mocky", "mof0", "mofo", "moky", "molest", "molestation", "molester", "molestor", "moneyshot", "monkleigh", "moolie", "moon cricket", "moon crickets", "mooncricket", "mooncrickets", "mormon", "moron", "moskal", "moskals", "moslem", "mosshead", "motha fucker", "motha fuker", "motha fukkah", "motha fukker", "mothafuck", "mothafucka", "mothafuckas", "mothafuckaz", "mothafucked", "mothafucker", "mothafuckers", "mothafuckin", "mothafucking", "mothafuckings", "mothafucks", "mother fucker", "mother fukah", "mother fuker", "mother fukkah", "mother fukker", "mother-fucker", "motherfuck", "motherfucka", "motherfucked", "motherfucker", "motherfuckers", "motherfuckin", "motherfucking", "motherfuckings", "motherfuckka", "motherfucks", "motherfvcker", "motherlovebone", "mothrfucker", "mouliewop", "mound of venus", "moundofvenus", "mr hands", "mrhands", "mtherfucker", "mthrfuck", "mthrfucker", "mthrfucking", "mtrfck", "mtrfuck", "mtrfucker", "muff diver", "muff", "muffdive", "muffdiver", "muffdiving", "muffindiver", "mufflikcer", "muie", "mulatto", "mulkku", "muncher", "mung", "munging", "munt", "munter", "murder", "murderer", "muschi", "mutha fucker", "mutha fukah", "mutha fuker", "mutha fukkah", "mutha fukker", "mutha", "muthafecker", "muthafuckaz", "muthafucker", "muthafuckker", "muther", "mutherfucker", "mutherfucking", "muthrfucking", "mzungu", "mzungus", "n1gga", "n1gger", "n1gr", "nad", "nads", "naked", "nambla", "nastt", "nasty", "nastybitch", "nastyho", "nastyslut", "nastywhore", "nawashi", "nazi", "nazis", "nazism", "necked", "necro", "negres", "negress", "negro", "negroes", "negroid", "negros", "neonazi", "nepesaurio", "nig nog", "nig", "niga", "nigar", "nigars", "nigas", "niger", "nigerian", "nigerians", "nigers", "nigette", "nigettes", "nigg", "nigg3r", "nigg4h", "nigga", "niggah", "niggahs", "niggar", "niggaracci", "niggard", "niggarded", "niggarding", "niggardliness", "niggardlinesss", "niggardly", "niggards", "niggars", "niggas", "niggaz", "nigger", "niggerhead", "niggerhole", "niggers", "niggle", "niggled", "niggles", "niggling", "nigglings", "niggor", "niggress", "niggresses", "nigguh", "nigguhs", "niggur", "niggurs", "niglet", "nignog", "nigor", "nigors", "nigr", "nigra", "nigras", "nigre", "nigres", "nigress", "nigs", "nigur", "niiger", "niigr", "nimphomania", "nimrod", "ninny", "nip", "nipple", "nipplering", "nipples", "nips", "nittit", "nlgger", "nlggor", "nob jokey", "nob", "nobhead", "nobjocky", "nobjokey", "nofuckingway", "nog", "nookey", "nookie", "nooky", "noonan", "nooner", "nsfw images", "nsfw", "nude", "nudger", "nudie", "nudies", "nudity", "numbnuts", "nut sack", "nutfucker", "nutsack", "nymph", "nympho", "nymphomania", "o c k", "octopussy", "omorashi", "one cup two girls", "one guy one jar", "one guy", "one jar", "ontherag", "orafis", "oral", "orally", "orga", "orgasim", "orgasim;", "orgasims", "orgasm", "orgasmic", "orgasms", "orgasum", "orgies", "orgy", "oriface", "orifice", "orifiss", "orospu", "osama", "ovum", "ovums", "p e n i s", "p i s", "p u s s y", "p.u.s.s.y.", "p0rn", "packi", "packie", "packy", "paddy", "paedophile", "paki", "pakie", "pakis", "paky", "palesimian", "pancake face", "pancake faces", "panooch", "pansies", "pansy", "panti", "pantie", "panties", "panty", "paska", "pastie", "pasty", "payo", "pcp", "pearlnecklace", "peck", "pecker", "peckerhead", "peckerwood", "pedo", "pedobear", "pedophile", "pedophilia", "pedophiliac", "peeenus", "peeenusss", "peehole", "peenus", "peepee", "peepshow", "peepshpw", "pegging", "peinus", "pen1s", "penas", "pendejo", "pendy", "penetrate", "penetration", "peni5", "penial", "penile", "penis", "penis-breath", "penises", "penisfucker", "penisland", "penislick", "penislicker", "penispuffer", "penthouse", "penus", "penuus", "perse", "perv", "perversion", "peyote", "phalli", "phallic", "phone sex", "phonesex", "phuc", "phuck", "phuk", "phuked", "phuker", "phuking", "phukked", "phukker", "phukking", "phuks", "phungky", "phuq", "pi55", "picaninny", "piccaninny", "picka", "pickaninnies", "pickaninny", "piece of shit", "pieceofshit", "piefke", "piefkes", "pierdol", "pigfucker", "piker", "pikey", "piky", "pillowbiter", "pillu", "pimmel", "pimp", "pimped", "pimper", "pimpis", "pimpjuic", "pimpjuice", "pimpsimp", "pindick", "pinko", "pis", "pises", "pisin", "pising", "pisof", "piss pig", "piss", "piss-off", "pissed", "pisser", "pissers", "pisses", "pissflaps", "pisshead", "pissin", "pissing", "pissoff", "pisspig", "pistol", "pizda", "playboy", "playgirl", "pleasure chest", "pleasurechest", "pms", "pocha", "pochas", "pocho", "pochos", "pocketpool", "pohm", "pohms", "polac", "polack", "polacks", "polak", "pole smoker", "polesmoker", "pollock", "pollocks", "pommie grant", "pommie grants", "pommie", "pommies", "pommy", "ponyplay", "poof", "poon", "poonani", "poonany", "poontang", "poontsee", "poop chute", "poopchute", "pooper", "pooperscooper", "pooping", "poorwhitetrash", "popimp", "porch monkey", "porch monkies", "porchmonkey", "porn", "pornflick", "pornking", "porno", "pornography", "pornos", "pornprincess", "pound town", "poundtown", "pplicker", "pr0n", "pr1c", "pr1ck", "pr1k", "prairie nigger", "prairie niggers", "premature", "preteen", "pric", "prick", "prickhead", "pricks", "prig", "prince albert piercing", "pron", "propaganda", "prostitute", "pthc", "pu55i", "pu55y", "pube", "pubes", "pubic", "pubiclice", "pubis", "pud", "pudboy", "pudd", "puddboy", "puke", "pula", "pule", "punani", "punanny", "punany", "punkass", "punky", "punta", "puntang", "purinapricness", "pusies", "puss", "pusse", "pussee", "pussi", "pussie", "pussies", "pussy", "pussycat", "pussydestroyer", "pussyeater", "pussyfucker", "pussylicker", "pussylicking", "pussylips", "pussylover", "pussypounder", "pussys", "pusy", "puta", "puto", "puuke", "puuker", "qahbeh", "quashie", "queaf", "queef", "queero", "queers", "queerz", "quickie", "quicky", "quiff", "quim", "qweers", "qweerz", "qweir", "r-tard", "r-tards", "r5e", "ra8s", "racial", "radicals", "raghead", "ragheads", "raging boner", "raging", "ragingboner", "randy", "rape", "raped", "raper", "raping", "rapist", "raunch", "rautenberg", "rearend", "rearentry", "recktum", "rectal", "rectum", "rectus", "redleg", "redlegs", "redlight", "redneck", "rednecks", "redskin", "redskins", "reefer", "reestie", "reetard", "refugee", "reich", "renob", "rentafuck", "rere", "retard", "retarded", "retards", "retardz", "reverse cowgirl", "reversecowgirl", "rigger", "rimjaw", "rimjob", "rimming", "ritard", "rosebuds", "rosy palm and her 5 sisters", "rosy palm", "rosypalm", "rosypalmandher5sisters", "rosypalmandherefivesisters", "round eyes", "roundeye", "rtard", "rtards", "rump", "rumprammer", "ruski", "russki", "russkie", "rusty trombone", "rustytrombone", "s h i t", "s hit", "s&m", "s-h-1-t", "s-h-i-t", "s-o-b", "s.h.i.t.", "s.o.b.", "s0b", "s_h_i_t", "sac", "sadis", "sadism", "sadist", "sadom", "sambo", "sambos", "samckdaddy", "sanchez", "sand nigger", "sand niggers", "sandm", "sandnigger", "santorum", "scag", "scallywag", "scank", "scantily", "scat", "schaffer", "scheiss", "schizo", "schlampe", "schlong", "schmuck", "schvartse", "schvartsen", "schwartze", "schwartzen", "scissoring", "screwed", "screwing", "screwyou", "scroat", "scrog", "scrot", "scrote", "scrotum", "scrud", "seduce", "semen", "seppo", "seppos", "septics", "sex", "sexed", "sexfarm", "sexhound", "sexhouse", "sexi", "sexing", "sexkitten", "sexo", "sexpot", "sexslave", "sextogo", "sextoy", "sextoys", "sexual", "sexually", "sexwhore", "sexx", "sexxi", "sexxx", "sexxxi", "sexxxy", "sexxy", "sexy", "sexymoma", "sexyslim", "sh!+", "sh!t", "sh1t", "sh1ter", "sh1ts", "sh1tter", "sh1tz", "shag", "shagger", "shaggin", "shagging", "shamedame", "sharmuta", "sharmute", "shat", "shav", "shaved beaver", "shaved pussy", "shaved", "shavedbeaver", "shavedpussy", "shawtypimp", "sheeney", "shemale", "shhit", "shi+", "shibari", "shinola", "shipal", "shit ass", "shit", "shitass", "shitbag", "shitbagger", "shitblimp", "shitbrain", "shitbreath", "shitcan", "shitcunt", "shitdick", "shite", "shiteater", "shited", "shitey", "shitface", "shitfaced", "shitfit", "shitforbrains", "shitfuck", "shitfucker", "shitfull", "shithapens", "shithappens", "shithead", "shithole", "shithouse", "shiting", "shitings", "shitlist", "shitola", "shitoutofluck", "shits", "shitspitter", "shitstain", "shitt", "shitted", "shitter", "shitters", "shittiest", "shitting", "shittings", "shitty", "shity", "shitz", "shiz", "shiznit", "shortfuck", "shota", "shrimping", "shylock", "shylocks", "shyt", "shyte", "shytty", "shyty", "sissy", "sixsixsix", "sixtynine", "sixtyniner", "skag", "skanck", "skank", "skankbitch", "skankee", "skankey", "skankfuck", "skanks", "skankwhore", "skanky", "skankybitch", "skankywhore", "skeet", "skinflute", "skribz", "skullfuck", "skum", "skumbag", "skurwysyn", "skwa", "skwe", "slag", "slant", "slanteye", "slanty", "slapper", "slaughter", "slave", "slavedriver", "sleaze", "sleazy", "sleezebag", "sleezeball", "slideitin", "slimeball", "slimebucket", "slopehead", "slopeheads", "sloper", "slopers", "slopes", "slopey", "slopeys", "slopies", "slopy", "slut", "slutbag", "slutdumper", "slutkiss", "sluts", "slutt", "slutting", "slutty", "slutwear", "slutwhore", "slutz", "smack", "smackthemonkey", "smeg", "smegma", "smoker", "smut", "smutty", "snatch", "snatchpatch", "snigger", "sniggered", "sniggering", "sniggers", "sniper", "snowback", "snowballing", "snownigger", "snuff", "sob", "socksucker", "sodom", "sodomise", "sodomite", "sodomize", "sodomy", "son of a bitch", "son of a whore", "son-of-a-bitch", "son-of-a-whore", "sonofabitch", "sonofbitch", "sooties", "sooty", "souse", "soused", "spac", "spade", "spades", "spaghettibender", "spaghettinigger", "spank", "spankthemonkey", "spearchucker", "spearchuckers", "sperm", "spermacide", "spermbag", "spermhearder", "spermherder", "sphencter", "spic", "spick", "spicks", "spics", "spierdalaj", "spig", "spigotty", "spik", "spiks", "spitter", "splittail", "splooge moose", "splooge", "spludge", "spooge", "spread legs", "spreadeagle", "spunk", "spunky", "sqeh", "squa", "squarehead", "squareheads", "squaw", "squinty", "squirting", "stagg", "steamy", "stfu", "stiffy", "stoned", "stoner", "strap on", "strapon", "strappado", "stringer", "strip club", "stripclub", "stroke", "stroking", "stuinties", "stupid", "stupidfuck", "stupidfucker", "style doggy", "suck", "suckdick", "sucked", "sucker", "sucking", "suckme", "suckmyass", "suckmydick", "suckmytit", "suckoff", "sucks", "suicide girl", "suicide girls", "suicide", "suicidegirl", "suicidegirls", "suka", "sultry women", "sultry", "sultrywoman", "sultrywomen", "sumofabiatch", "swallow", "swallower", "swalow", "swamp guinea", "swamp guineas", "swastika", "swinger", "syphilis", "t i t", "t i ts", "t1t", "t1tt1e5", "t1tties", "taboo", "tacohead", "tacoheads", "taff", "tainted love", "tainted", "take off your", "tantra", "tar babies", "tar baby", "tarbaby", "tard", "taste my", "tastemy", "tawdry", "tea bagging", "teabagging", "teat", "teets", "teez", "terd", "terror", "terrorist", "teste", "testee", "testes", "testical", "testicle", "testicles", "testis", "thicklip", "thicklips", "thirdeye", "thirdleg", "threesome", "threeway", "throat", "throating", "thrust", "thug", "thundercunt", "ti", "tied up", "tig ol bitties", "tig old bitties", "tight white", "timber nigger", "timber niggers", "timbernigger", "tinkle", "tit", "titbitnipply", "titfuck", "titfucker", "titfuckin", "titi", "titjob", "titlicker", "titlover", "tits", "titt", "tittie", "tittie5", "tittiefucker", "titties", "tittis", "titty", "tittyfuck", "tittyfucker", "tittys", "tittywank", "titwank", "tity", "to murder", "toke", "tongethruster", "tongue in a", "tongueina", "tonguethrust", "tonguetramp", "toots", "topless", "tortur", "torture", "tosser", "towel head", "towel heads", "towelhead", "trailertrash", "tramp", "trannie", "tranny", "transsexual", "transvestite", "trashy", "tribadism", "triplex", "trisexual", "trois", "trojan", "trombone", "trots", "tub girl", "tubgirl", "tuckahoe", "tunneloflove", "turd", "turd burgler", "turnon", "tush", "tushy", "tw4t", "twat", "twathead", "twatlips", "twats", "twatty", "twatwaffle", "twink", "twinkie", "two girls one cup", "twobitwhore", "twunt", "twunter", "udge packer", "ukrop", "uncle tom", "unclefucker", "undies", "undressing", "unfuckable", "unwed", "upskirt", "uptheass", "upthebutt", "urethra play", "urethra", "urethraplay", "urophilia", "usama", "ussys", "uzi", "v a g i n a", "v14gra", "v1gra", "v4gra", "va-j-j", "va1jina", "vag", "vag1na", "vagiina", "vagina", "vaginal", "vaj1na", "vajina", "valium", "venus mound", "vgra", "viagra", "vibe", "vibr", "vibrater", "vibrator", "vietcong", "violet wand", "virgin", "virginbreaker", "vittu", "vixen", "vjayjay", "vodka", "vomit", "vorarephilia", "voyeur", "vulgar", "vullva", "vulva", "w00se", "w0p", "wab", "wad", "wang", "wank", "wanker", "wanking", "wanky", "waysted", "wazoo", "wedgie", "weed", "weenie", "weewee", "weiner", "weirdo", "welcher", "wench", "wet dream", "wetb", "wetback", "wetbacks", "wetdream", "wetspot", "wh00r", "wh0re", "wh0reface", "whacker", "whash", "whigger", "whiggers", "whiskeydick", "whiskydick", "whit", "white power", "white trash", "whitenigger", "whitepower", "whites", "whitetrash", "whitey", "whiteys", "whities", "whiz", "whoar", "whop", "whoralicious", "whore", "whorealicious", "whorebag", "whored", "whoreface", "whorefucker", "whorehopper", "whorehouse", "whores", "whoring", "wichser", "wigga", "wiggas", "wigger", "wiggers", "willie", "willies", "williewanker", "willy", "wn", "wog", "wogs", "woody", "wop", "wrapping men", "wrinkled starfish", "wtf", "wuss", "wuzzie", "x-rated", "xkwe", "xrated", "xtc", "xx", "xxx", "xxxxxx", "yank", "yaoi", "yarpie", "yarpies", "yeasty", "yed", "yellow showers", "yellowman", "yellowshowers", "yid", "yids", "yiffy", "yobbo", "yourboobs", "yourpenis", "yourtits", "zabourah", "zigabo", "zigabos", "zipperhead", "zipperheads", "zoophile", "zoophilia", "🖕" ];

// const words = require('profane-words');
// const leet = {
//     "$": "s",
//     "0": "o",
//     "1": "l",
//     "3": "e",
//     "4": "a",
//     "7": "t",
//     "8": "b",
//     "KW": "Q",
//     "kw": "q",
//     "PH": "F",
//     "ph": "f"
// }
// function convertLeet (char) {
//     let convertedChar = leet[char]
//     if (convertedChar) {
//       return convertedChar
//     }
  
//     return char
// }
function removeDuplicateCharacters(string) {
    return string
      .split('')
      .filter(function(item, pos, self) {
        return self.indexOf(item) == pos;
      })
      .join('');
}
// function leetspeak (input) {
// let stringInput = input.toString()
// let map = Array.prototype.map

// return map.call(stringInput, convertLeet).join('')
// }

// || words.includes(leetspeak(checkWord))

function checkall(checkstring){
    let flag = false;
    checkstring.toLowerCase().split(" ").forEach(checkWord=>{
    if (words.includes(checkWord)){
        flag = true;
    }
    })
    if(!flag)
    removeDuplicateCharacters(checkstring.toLowerCase()).split(" ").forEach(checkWord=>{
        if (words.includes(checkWord)){
            flag = true;
    ;}})
    return flag;}

var elemTags = 'em, h1, h2, h3, h4, h5, h6, span, b, a, p, li, article, strong, blockquote, div, th, td, img';
// Max children elements allowed (default presets)
var cDefault = parseInt($('body').find('*').length * 0.006)||100;
if (cDefault < 25) cDefault = 25;
function hideElem(elem, word) {
    chrome.storage.sync.get('blurOption', function(result) {
        if (result.blurOption) {
            elem.css({
                'filter': 'blur(10px)'
            });
            var timeOut;
            chrome.storage.sync.get('hoveringOption', function(result) {
                if (result.hoveringOption) {
                    // If "Reveal on hover" -setting is checked, remove blur on mouse hover
                    elem.hover(function() {
                        timeOut = setTimeout(function() {
                            elem.css({
                                'filter': 'blur(0px)'
                            });
                        }, 500)
                    }, function() {
                        // Blur element again on mouseleave
                        clearTimeout(timeOut);
                        elem.css({
                            'filter': 'blur(10px)'
                        });
                    });
                } else {
                    // If "hover to reveal" -option is unchecked, show which keywords were found on the element onhover credits remove element extension
                    if (elem.attr('title') == undefined) elem.attr('title', 'Keywords found: ' + word);
                    else if (!elem.attr('title').includes('Keywords found:')) elem.attr('title', 'Keyword found: ' + word);
                    else elem.attr('title', elem.attr('title') + ', ' + word);
                }
            });
        } else {
            elem.slideUp("slow");
        }
    });



}
function checkAllElems(wordlist, abusingOption, elem) {
    var superSet = new Set();
    var maxChildren = cDefault;
    var elemType;
    if (elem != elemTags) {
        elemType = $(elem).parent().parent(elemTags);
    } else elemType = $(elem);

    elemType.each(function(i) {
        if ($(this).find('*').length < maxChildren) { // How many child elements are allowed
            var elemExist = setInterval(function() {
                if ($(this) != null) clearInterval(elemExist);
            }, 100);
            for (i in wordlist) {
                if (wordlist[i] != '' && wordlist[i].slice(0, 2) != '//') {

                    var word = wordlist[i].toString();
                    if (new RegExp(word, 'gi')
                        .test($(this).text()) && $(this).css('display') != 'none') {
                        hideElem($(this), word);
                        superSet.add(word);
                    }
                    else 
                    if(abusingOption)
                    if(checkall($(this).text()) && $(this).css('display') != 'none'){
                        hideElem($(this), "profanity");
                    }
                }
            }
        }
    });
    if(window.location.href.indexOf("google.") > -1) superSet.clear();

    if(superSet.size>0){
        if(!$('#blacklist_blocker').length){
            $("body").append(
                `<div id="blacklist_blocker" class="modal" style="opacity: 1; display: none;">
                <p>Are you sure you want to continue ?? This page discusses about blacklisted topics which are : <b>`+[...superSet].join(', ')+`</b></p>
                </div>`

            );
        }
        $('#blacklist_blocker').modal({
            fadeDuration: 100
        });
    }
}
function getWordlist(elem) {
    var wordlist,abusingOption;
    chrome.storage.sync.get(['blacklist','abusingOption'], function(result) {
        wordlist = result.blacklist.toLowerCase().split('\n');
        abusingOption = result.abusingOption;
        checkAllElems(wordlist, abusingOption, elem);
    });
}
function runningStatus(elem) {
            var found = false;
                chrome.storage.sync.get(['urls'], function(options) {
                    if (options.urls != undefined) {
                        var urls = options.urls;
                        urls = urls.split('\n');
                            for (url in urls) {
                                if (urls[url].trim() !== '') {
                                    // console.log(window.location.href);
                                    if (window.location.href.includes(urls[url].trim())) found = true;
                                }
                                if (found) break;
                            }
                            if (!found) {
                                getWordlist(elem);
                            } // else console.log('Disabled url detected: ' + urls[url]);
                    } else {                                    
                        getWordlist(elem);}
                });



}
function Observer() {
    var observer = new MutationObserver(function(mutation) {
        for (var a = 0; a < mutation.length; a++) {
            var addedNode = mutation[a].addedNodes;
            for (var b = 0; b < addedNode.length; b++) {
                if (addedNode[b].nodeType != 1) continue;
                var node = addedNode[b];
                if (node.children.length) {
                    var nodes = node.getElementsByTagName('div');
                    for (var c = 0; c < nodes.length; c++) {
                        runningStatus(nodes[c]);
                    }
                }
            }
        }
    });

    // Mutation observer conf
    var config = {
        childList: true,
        subtree: true,
        attributes: true,
        characterData: true
    };

    // Start observing
    observer.observe(window.document, config);
}
$(window).ready(function() {
    runningStatus(elemTags);
    Observer();
});
// Check all elements if url has been changed
// For websites that load new entire pages with ajax (like youtube.com)
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.greeting == 'urlChange') {
        setTimeout(function() {
            runningStatus(elemTags);
        }, 500);
    }
    sendResponse('Message received');
});