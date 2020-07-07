const normalizeData = {
	"wide": {
		"０": "0",
		"１": "1",
		"２": "2",
		"３": "3",
		"４": "4",
		"５": "5",
		"６": "6",
		"７": "7",
		"８": "8",
		"９": "9",
		"`": "`",
		"－": "-",
		"＝": "=",
		"~": "~",
		"！": "!",
		"＠": "@",
		"＃": "#",
		"＄": "$",
		"％": "%",
		"^": "^",
		"＆": "&",
		"＊": "*",
		"（": "(",
		"）": ")",
		"_": "_",
		"＋": "+",
		"ｑ": "q",
		"ｗ": "w",
		"ｅ": "e",
		"ｒ": "r",
		"ｔ": "t",
		"ｙ": "y",
		"ｕ": "u",
		"ｉ": "i",
		"ｏ": "o",
		"ｐ": "p",
		"Ｑ": "Q",
		"Ｗ": "W",
		"Ｅ": "E",
		"Ｒ": "R",
		"Ｔ": "T",
		"Ｙ": "Y",
		"Ｕ": "U",
		"Ｉ": "I",
		"Ｏ": "O",
		"Ｐ": "P",
		"ａ": "a",
		"ｓ": "s",
		"ｄ": "d",
		"ｆ": "f",
		"ｇ": "g",
		"ｈ": "h",
		"ｊ": "j",
		"ｋ": "k",
		"ｌ": "l",
		"；": ";",
		"＇": "'",
		"Ａ": "A",
		"Ｓ": "S",
		"Ｄ": "D",
		"Ｆ": "F",
		"Ｇ": "G",
		"Ｈ": "H",
		"Ｊ": "J",
		"Ｋ": "K",
		"Ｌ": "L",
		"：": ":",
		"ｚ": "z",
		"ｘ": "x",
		"ｃ": "c",
		"ｖ": "v",
		"ｂ": "b",
		"ｎ": "n",
		"ｍ": "m",
		"，": ",",
		"．": ".",
		"／": "/",
		"Ｚ": "Z",
		"Ｘ": "X",
		"Ｃ": "C",
		"Ｖ": "V",
		"Ｂ": "B",
		"Ｎ": "N",
		"Ｍ": "M",
		"？": "?"
	},
	"bold": {
		"𝟎": "0",
		"𝟏": "1",
		"𝟐": "2",
		"𝟑": "3",
		"𝟒": "4",
		"𝟓": "5",
		"𝟔": "6",
		"𝟕": "7",
		"𝟖": "8",
		"𝟗": "9",
		"𝐚": "a",
		"𝐛": "b",
		"𝐜": "c",
		"𝐝": "d",
		"𝐞": "e",
		"𝐟": "f",
		"𝐠": "g",
		"𝐡": "h",
		"𝐢": "i",
		"𝐣": "j",
		"𝐤": "k",
		"𝐥": "l",
		"𝐦": "m",
		"𝐧": "n",
		"𝐨": "o",
		"𝐩": "p",
		"𝐪": "q",
		"𝐫": "r",
		"𝐬": "s",
		"𝐭": "t",
		"𝐮": "u",
		"𝐯": "v",
		"𝐰": "w",
		"𝐱": "x",
		"𝐲": "y",
		"𝐳": "z",
		"𝐀": "A",
		"𝐁": "B",
		"𝐂": "C",
		"𝐃": "D",
		"𝐄": "E",
		"𝐅": "F",
		"𝐆": "G",
		"𝐇": "H",
		"𝐈": "I",
		"𝐉": "J",
		"𝐊": "K",
		"𝐋": "L",
		"𝐌": "M",
		"𝐍": "N",
		"𝐎": "O",
		"𝐏": "P",
		"𝐐": "Q",
		"𝐑": "R",
		"𝐒": "S",
		"𝐓": "T",
		"𝐔": "U",
		"𝐕": "V",
		"𝐖": "W",
		"𝐗": "X",
		"𝐘": "Y",
		"𝐙": "Z"
	},
	"italic": {
		"𝘢": "a",
		"𝘣": "b",
		"𝘤": "c",
		"𝘥": "d",
		"𝘦": "e",
		"𝘧": "f",
		"𝘨": "g",
		"𝘩": "h",
		"𝘪": "i",
		"𝘫": "j",
		"𝘬": "k",
		"𝘭": "l",
		"𝘮": "m",
		"𝘯": "n",
		"𝘰": "o",
		"𝘱": "p",
		"𝘲": "q",
		"𝘳": "r",
		"𝘴": "s",
		"𝘵": "t",
		"𝘶": "u",
		"𝘷": "v",
		"𝘸": "w",
		"𝘹": "x",
		"𝘺": "y",
		"𝘻": "z",
		"𝘈": "A",
		"𝘉": "B",
		"𝘊": "C",
		"𝘋": "D",
		"𝘌": "E",
		"𝘍": "F",
		"𝘎": "G",
		"𝘏": "H",
		"𝘐": "I",
		"𝘑": "J",
		"𝘒": "K",
		"𝘓": "L",
		"𝘔": "M",
		"𝘕": "N",
		"𝘖": "O",
		"𝘗": "P",
		"𝘘": "Q",
		"𝘙": "R",
		"𝘚": "S",
		"𝘛": "T",
		"𝘜": "U",
		"𝘝": "V",
		"𝘞": "W",
		"𝘟": "X",
		"𝘠": "Y",
		"𝘡": "Z"
	},
	"bolditalic": {
		"𝙖": "a",
		"𝙗": "b",
		"𝙘": "c",
		"𝙙": "d",
		"𝙚": "e",
		"𝙛": "f",
		"𝙜": "g",
		"𝙝": "h",
		"𝙞": "i",
		"𝙟": "j",
		"𝙠": "k",
		"𝙡": "l",
		"𝙢": "m",
		"𝙣": "n",
		"𝙤": "o",
		"𝙥": "p",
		"𝙦": "q",
		"𝙧": "r",
		"𝙨": "s",
		"𝙩": "t",
		"𝙪": "u",
		"𝙫": "v",
		"𝙬": "w",
		"𝙭": "x",
		"𝙮": "y",
		"𝙯": "z",
		"𝘼": "A",
		"𝘽": "B",
		"𝘾": "C",
		"𝘿": "D",
		"𝙀": "E",
		"𝙁": "F",
		"𝙂": "G",
		"𝙃": "H",
		"𝙄": "I",
		"𝙅": "J",
		"𝙆": "K",
		"𝙇": "L",
		"𝙈": "M",
		"𝙉": "N",
		"𝙊": "O",
		"𝙋": "P",
		"𝙌": "Q",
		"𝙍": "R",
		"𝙎": "S",
		"𝙏": "T",
		"𝙐": "U",
		"𝙑": "V",
		"𝙒": "W",
		"𝙓": "X",
		"𝙔": "Y",
		"𝙕": "Z"
	},
	"medieval": {
		"𝔞": "a",
		"𝔟": "b",
		"𝔠": "c",
		"𝔡": "d",
		"𝔢": "e",
		"𝔣": "f",
		"𝔤": "g",
		"𝔥": "h",
		"𝔦": "i",
		"𝔧": "j",
		"𝔨": "k",
		"𝔩": "l",
		"𝔪": "m",
		"𝔫": "n",
		"𝔬": "o",
		"𝔭": "p",
		"𝔮": "q",
		"𝔯": "r",
		"𝔰": "s",
		"𝔱": "t",
		"𝔲": "u",
		"𝔳": "v",
		"𝔴": "w",
		"𝔵": "x",
		"𝔶": "y",
		"𝔷": "z",
		"𝔄": "A",
		"𝔅": "B",
		"ℭ": "C",
		"𝔇": "D",
		"𝔈": "E",
		"𝔉": "F",
		"𝔊": "G",
		"ℌ": "H",
		"ℑ": "I",
		"𝔍": "J",
		"𝔎": "K",
		"𝔏": "L",
		"𝔐": "M",
		"𝔑": "N",
		"𝔒": "O",
		"𝔓": "P",
		"𝔔": "Q",
		"ℜ": "R",
		"𝔖": "S",
		"𝔗": "T",
		"𝔘": "U",
		"𝔙": "V",
		"𝔚": "W",
		"𝔛": "X",
		"𝔜": "Y",
		"ℨ": "Z"
	},
	"medievalbold": {
		"𝖆": "a",
		"𝖇": "b",
		"𝖈": "c",
		"𝖉": "d",
		"𝖊": "e",
		"𝖋": "f",
		"𝖌": "g",
		"𝖍": "h",
		"𝖎": "i",
		"𝖏": "j",
		"𝖐": "k",
		"𝖑": "l",
		"𝖒": "m",
		"𝖓": "n",
		"𝖔": "o",
		"𝖕": "p",
		"𝖖": "q",
		"𝖗": "r",
		"𝖘": "s",
		"𝖙": "t",
		"𝖚": "u",
		"𝖛": "v",
		"𝖜": "w",
		"𝖝": "x",
		"𝖞": "y",
		"𝖟": "z",
		"𝕬": "A",
		"𝕭": "B",
		"𝕮": "C",
		"𝕯": "D",
		"𝕰": "E",
		"𝕱": "F",
		"𝕲": "G",
		"𝕳": "H",
		"𝕴": "I",
		"𝕵": "J",
		"𝕶": "K",
		"𝕷": "L",
		"𝕸": "M",
		"𝕹": "N",
		"𝕺": "O",
		"𝕻": "P",
		"𝕼": "Q",
		"𝕽": "R",
		"𝕾": "S",
		"𝕿": "T",
		"𝖀": "U",
		"𝖁": "V",
		"𝖂": "W",
		"𝖃": "X",
		"𝖄": "Y",
		"𝖅": "Z"
	},
	"cursive": {
		"𝟢": "0",
		"𝟣": "1",
		"𝟤": "2",
		"𝟥": "3",
		"𝟦": "4",
		"𝟧": "5",
		"𝟨": "6",
		"𝟩": "7",
		"𝟪": "8",
		"𝟫": "9",
		"𝒶": "a",
		"𝒷": "b",
		"𝒸": "c",
		"𝒹": "d",
		"𝑒": "e",
		"𝒻": "f",
		"𝑔": "g",
		"𝒽": "h",
		"𝒾": "i",
		"𝒿": "j",
		"𝓀": "k",
		"𝓁": "l",
		"𝓂": "m",
		"𝓃": "n",
		"𝑜": "o",
		"𝓅": "p",
		"𝓆": "q",
		"𝓇": "r",
		"𝓈": "s",
		"𝓉": "t",
		"𝓊": "u",
		"𝓋": "v",
		"𝓌": "w",
		"𝓍": "x",
		"𝓎": "y",
		"𝓏": "z",
		"𝒜": "A",
		"𝐵": "B",
		"𝒞": "C",
		"𝒟": "D",
		"𝐸": "E",
		"𝐹": "F",
		"𝒢": "G",
		"𝐻": "H",
		"𝐼": "I",
		"𝒥": "J",
		"𝒦": "K",
		"𝐿": "L",
		"𝑀": "M",
		"𝒩": "N",
		"𝒪": "O",
		"𝒫": "P",
		"𝒬": "Q",
		"𝑅": "R",
		"𝒮": "S",
		"𝒯": "T",
		"𝒰": "U",
		"𝒱": "V",
		"𝒲": "W",
		"𝒳": "X",
		"𝒴": "Y",
		"𝒵": "Z"
	},
	"cursivebold": {
		"𝓪": "a",
		"𝓫": "b",
		"𝓬": "c",
		"𝓭": "d",
		"𝓮": "e",
		"𝓯": "f",
		"𝓰": "g",
		"𝓱": "h",
		"𝓲": "i",
		"𝓳": "j",
		"𝓴": "k",
		"𝓵": "l",
		"𝓶": "m",
		"𝓷": "n",
		"𝓸": "o",
		"𝓹": "p",
		"𝓺": "q",
		"𝓻": "r",
		"𝓼": "s",
		"𝓽": "t",
		"𝓾": "u",
		"𝓿": "v",
		"𝔀": "w",
		"𝔁": "x",
		"𝔂": "y",
		"𝔃": "z",
		"𝓐": "A",
		"𝓑": "B",
		"𝓒": "C",
		"𝓓": "D",
		"𝓔": "E",
		"𝓕": "F",
		"𝓖": "G",
		"𝓗": "H",
		"𝓘": "I",
		"𝓙": "J",
		"𝓚": "K",
		"𝓛": "L",
		"𝓜": "M",
		"𝓝": "N",
		"𝓞": "O",
		"𝓟": "P",
		"𝓠": "Q",
		"𝓡": "R",
		"𝓢": "S",
		"𝓣": "T",
		"𝓤": "U",
		"𝓥": "V",
		"𝓦": "W",
		"𝓧": "X",
		"𝓨": "Y",
		"𝓩": "Z"
	},
	"doublestroke": {
		"𝟘": "0",
		"𝟙": "1",
		"𝟚": "2",
		"𝟛": "3",
		"𝟜": "4",
		"𝟝": "5",
		"𝟞": "6",
		"𝟟": "7",
		"𝟠": "8",
		"𝟡": "9",
		"𝕒": "a",
		"𝕓": "b",
		"𝕔": "c",
		"𝕕": "d",
		"𝕖": "e",
		"𝕗": "f",
		"𝕘": "g",
		"𝕙": "h",
		"𝕚": "i",
		"𝕛": "j",
		"𝕜": "k",
		"𝕝": "l",
		"𝕞": "m",
		"𝕟": "n",
		"𝕠": "o",
		"𝕡": "p",
		"𝕢": "q",
		"𝕣": "r",
		"𝕤": "s",
		"𝕥": "t",
		"𝕦": "u",
		"𝕧": "v",
		"𝕨": "w",
		"𝕩": "x",
		"𝕪": "y",
		"𝕫": "z",
		"𝔸": "A",
		"𝔹": "B",
		"ℂ": "C",
		"𝔻": "D",
		"𝔼": "E",
		"𝔽": "F",
		"𝔾": "G",
		"ℍ": "H",
		"𝕀": "I",
		"𝕁": "J",
		"𝕂": "K",
		"𝕃": "L",
		"𝕄": "M",
		"ℕ": "N",
		"𝕆": "O",
		"ℙ": "P",
		"ℚ": "Q",
		"ℝ": "R",
		"𝕊": "S",
		"𝕋": "T",
		"𝕌": "U",
		"𝕍": "V",
		"𝕎": "W",
		"𝕏": "X",
		"𝕐": "Y",
		"ℤ": "Z"
	},
	"squares": {
		"🄰": "A",
		"🄱": "B",
		"🄲": "C",
		"🄳": "D",
		"🄴": "E",
		"🄵": "F",
		"🄶": "G",
		"🄷": "H",
		"🄸": "I",
		"🄹": "J",
		"🄺": "K",
		"🄻": "L",
		"🄼": "M",
		"🄽": "N",
		"🄾": "O",
		"🄿": "P",
		"🅀": "Q",
		"🅁": "R",
		"🅂": "S",
		"🅃": "T",
		"🅄": "U",
		"🅅": "V",
		"🅆": "W",
		"🅇": "X",
		"🅈": "Y",
		"🅉": "Z"
	},
	"circles": {
		"⓪": "0",
		"①": "1",
		"②": "2",
		"③": "3",
		"④": "4",
		"⑤": "5",
		"⑥": "6",
		"⑦": "7",
		"⑧": "8",
		"⑨": "9",
		"⑩": "10",
		"⑪": "11",
		"⑫": "12",
		"⑬": "13",
		"⑭": "14",
		"⑮": "15",
		"⑯": "16",
		"⑰": "17",
		"⑱": "18",
		"⑲": "19",
		"⑳": "20",
		"ⓐ": "a",
		"ⓑ": "b",
		"ⓒ": "c",
		"ⓓ": "d",
		"ⓔ": "e",
		"ⓕ": "f",
		"ⓖ": "g",
		"ⓗ": "h",
		"ⓘ": "i",
		"ⓙ": "j",
		"ⓚ": "k",
		"ⓛ": "l",
		"ⓜ": "m",
		"ⓝ": "n",
		"ⓞ": "o",
		"ⓟ": "p",
		"ⓠ": "q",
		"ⓡ": "r",
		"ⓢ": "s",
		"ⓣ": "t",
		"ⓤ": "u",
		"ⓥ": "v",
		"ⓦ": "w",
		"ⓧ": "x",
		"ⓨ": "y",
		"ⓩ": "z",
		"Ⓐ": "A",
		"Ⓑ": "B",
		"Ⓒ": "C",
		"Ⓓ": "D",
		"Ⓔ": "E",
		"Ⓕ": "F",
		"Ⓖ": "G",
		"Ⓗ": "H",
		"Ⓘ": "I",
		"Ⓙ": "J",
		"Ⓚ": "K",
		"Ⓛ": "L",
		"Ⓜ": "M",
		"Ⓝ": "N",
		"Ⓞ": "O",
		"Ⓟ": "P",
		"Ⓠ": "Q",
		"Ⓡ": "R",
		"Ⓢ": "S",
		"Ⓣ": "T",
		"Ⓤ": "U",
		"Ⓥ": "V",
		"Ⓦ": "W",
		"Ⓧ": "X",
		"Ⓨ": "Y",
		"Ⓩ": "Z"
	},
	"circlesbold": {
		"⓵": "1",
		"⓶": "2",
		"⓷": "3",
		"⓸": "4",
		"⓹": "5",
		"⓺": "6",
		"⓻": "7",
		"⓼": "8",
		"⓽": "9",
		"⓾": "10"
	},
	"invertedsquares": {
		"🅰": "A",
		"🅱": "B",
		"🅲": "C",
		"🅳": "D",
		"🅴": "E",
		"🅵": "F",
		"🅶": "G",
		"🅷": "H",
		"🅸": "I",
		"🅹": "J",
		"🅺": "K",
		"🅻": "L",
		"🅼": "M",
		"🅽": "N",
		"🅾": "O",
		"🅿": "P",
		"🆀": "Q",
		"🆁": "R",
		"🆂": "S",
		"🆃": "T",
		"🆄": "U",
		"🆅": "V",
		"🆆": "W",
		"🆇": "X",
		"🆈": "Y",
		"🆉": "Z"
	},
	"invertedcircles": {
		"⓿": "0",
		"⓫": "11",
		"⓬": "12",
		"⓭": "13",
		"⓮": "14",
		"⓯": "15",
		"⓰": "16",
		"⓱": "17",
		"⓲": "18",
		"⓳": "19",
		"⓴": "20",
		"🅐": "A",
		"🅑": "B",
		"🅒": "C",
		"🅓": "D",
		"🅔": "E",
		"🅕": "F",
		"🅖": "G",
		"🅗": "H",
		"🅘": "I",
		"🅙": "J",
		"🅚": "K",
		"🅛": "L",
		"🅜": "M",
		"🅝": "N",
		"🅞": "O",
		"🅟": "P",
		"🅠": "Q",
		"🅡": "R",
		"🅢": "S",
		"🅣": "T",
		"🅤": "U",
		"🅥": "V",
		"🅦": "W",
		"🅧": "X",
		"🅨": "Y",
		"🅩": "Z"
	},
	"dotted": {
		"⒈": "1",
		"⒉": "2",
		"⒊": "3",
		"⒋": "4",
		"⒌": "5",
		"⒍": "6",
		"⒎": "7",
		"⒏": "8",
		"⒐": "9",
		"⒑": "10",
		"⒒": "11",
		"⒓": "12",
		"⒔": "13",
		"⒕": "14",
		"⒖": "15",
		"⒗": "16",
		"⒘": "17",
		"⒙": "18",
		"⒚": "19",
		"⒛": "20"
	},
	"parenthesis": {
		"⑴": "1",
		"⑵": "2",
		"⑶": "3",
		"⑷": "4",
		"⑸": "5",
		"⑹": "6",
		"⑺": "7",
		"⑻": "8",
		"⑼": "9",
		"⑽": "10",
		"⑾": "11",
		"⑿": "12",
		"⒀": "13",
		"⒁": "14",
		"⒂": "15",
		"⒃": "16",
		"⒄": "17",
		"⒅": "18",
		"⒆": "19",
		"⒇": "20",
		"⒜": "a",
		"⒝": "b",
		"⒞": "c",
		"⒟": "d",
		"⒠": "e",
		"⒡": "f",
		"⒢": "g",
		"⒣": "h",
		"⒤": "i",
		"⒥": "j",
		"⒦": "k",
		"⒧": "l",
		"⒨": "m",
		"⒩": "n",
		"⒪": "o",
		"⒫": "p",
		"⒬": "q",
		"⒭": "r",
		"⒮": "s",
		"⒯": "t",
		"⒰": "u",
		"⒱": "v",
		"⒲": "w",
		"⒳": "x",
		"⒴": "y",
		"⒵": "z",
		"🄐": "A",
		"🄑": "B",
		"🄒": "C",
		"🄓": "D",
		"🄔": "E",
		"🄕": "F",
		"🄖": "G",
		"🄗": "H",
		"🄘": "I",
		"🄙": "J",
		"🄚": "K",
		"🄛": "L",
		"🄜": "M",
		"🄝": "N",
		"🄞": "O",
		"🄟": "P",
		"🄠": "Q",
		"🄡": "R",
		"🄢": "S",
		"🄣": "T",
		"🄤": "U",
		"🄥": "V",
		"🄦": "W",
		"🄧": "X",
		"🄨": "Y",
		"🄩": "Z"
	},
	"diacritics": {
		"Á": "A",
		"Ă": "A",
		"Ắ": "A",
		"Ặ": "A",
		"Ằ": "A",
		"Ẳ": "A",
		"Ẵ": "A",
		"Ǎ": "A",
		"Â": "A",
		"Ấ": "A",
		"Ậ": "A",
		"Ầ": "A",
		"Ẩ": "A",
		"Ẫ": "A",
		"Ä": "A",
		"Ǟ": "A",
		"Ȧ": "A",
		"Ǡ": "A",
		"Ạ": "A",
		"Ȁ": "A",
		"À": "A",
		"Ả": "A",
		"Ȃ": "A",
		"Ā": "A",
		"Ą": "A",
		"Å": "A",
		"Ǻ": "A",
		"Ḁ": "A",
		"Ⱥ": "A",
		"Ã": "A",
		"Ꜳ": "AA",
		"Æ": "AE",
		"Ǽ": "AE",
		"Ǣ": "AE",
		"Ꜵ": "AO",
		"Ꜷ": "AU",
		"Ꜹ": "AV",
		"Ꜻ": "AV",
		"Ꜽ": "AY",
		"Ḃ": "B",
		"Ḅ": "B",
		"Ɓ": "B",
		"Ḇ": "B",
		"Ƀ": "B",
		"Ƃ": "B",
		"Ć": "C",
		"Č": "C",
		"Ç": "C",
		"Ç": "C",
		"Ḉ": "C",
		"Ĉ": "C",
		"Ċ": "C",
		"Ƈ": "C",
		"Ȼ": "C",
		"Ď": "D",
		"Ḑ": "D",
		"Ḓ": "D",
		"Ḋ": "D",
		"Ḍ": "D",
		"Ɗ": "D",
		"Ḏ": "D",
		"ǲ": "D",
		"ǅ": "D",
		"Đ": "D",
		"Ƌ": "D",
		"Ǳ": "DZ",
		"Ǆ": "DZ",
		"É": "E",
		"Ĕ": "E",
		"Ě": "E",
		"Ȩ": "E",
		"Ḝ": "E",
		"Ê": "E",
		"Ế": "E",
		"Ệ": "E",
		"Ề": "E",
		"Ể": "E",
		"Ễ": "E",
		"Ḙ": "E",
		"Ë": "E",
		"Ė": "E",
		"Ẹ": "E",
		"Ȅ": "E",
		"È": "E",
		"Ẻ": "E",
		"Ȇ": "E",
		"Ē": "E",
		"Ḗ": "E",
		"Ḕ": "E",
		"Ę": "E",
		"Ɇ": "E",
		"Ẽ": "E",
		"Ḛ": "E",
		"Ꝫ": "ET",
		"Ḟ": "F",
		"Ƒ": "F",
		"Ǵ": "G",
		"Ğ": "G",
		"Ğ": "G",
		"Ǧ": "G",
		"Ģ": "G",
		"Ĝ": "G",
		"Ġ": "G",
		"Ɠ": "G",
		"Ḡ": "G",
		"Ǥ": "G",
		"Ḫ": "H",
		"Ȟ": "H",
		"Ḩ": "H",
		"Ĥ": "H",
		"Ⱨ": "H",
		"Ḧ": "H",
		"Ḣ": "H",
		"Ḥ": "H",
		"Ħ": "H",
		"Í": "I",
		"Ĭ": "I",
		"Ǐ": "I",
		"Î": "I",
		"Ï": "I",
		"Ḯ": "I",
		"İ": "I",
		"İ": "I",
		"Ị": "I",
		"Ȉ": "I",
		"Ì": "I",
		"Ỉ": "I",
		"Ȋ": "I",
		"Ī": "I",
		"Į": "I",
		"Ɨ": "I",
		"Ĩ": "I",
		"Ḭ": "I",
		"Ꝺ": "D",
		"Ꝼ": "F",
		"Ᵹ": "G",
		"Ꞃ": "R",
		"Ꞅ": "S",
		"Ꞇ": "T",
		"Ꝭ": "IS",
		"Ĵ": "J",
		"Ɉ": "J",
		"Ḱ": "K",
		"Ǩ": "K",
		"Ķ": "K",
		"Ⱪ": "K",
		"Ꝃ": "K",
		"Ḳ": "K",
		"Ƙ": "K",
		"Ḵ": "K",
		"Ꝁ": "K",
		"Ꝅ": "K",
		"Ĺ": "L",
		"Ƚ": "L",
		"Ľ": "L",
		"Ļ": "L",
		"Ḽ": "L",
		"Ḷ": "L",
		"Ḹ": "L",
		"Ⱡ": "L",
		"Ꝉ": "L",
		"Ḻ": "L",
		"Ŀ": "L",
		"Ɫ": "L",
		"ǈ": "L",
		"Ł": "L",
		"Ǉ": "LJ",
		"Ḿ": "M",
		"Ṁ": "M",
		"Ṃ": "M",
		"Ɱ": "M",
		"Ń": "N",
		"Ň": "N",
		"Ņ": "N",
		"Ṋ": "N",
		"Ṅ": "N",
		"Ṇ": "N",
		"Ǹ": "N",
		"Ɲ": "N",
		"Ṉ": "N",
		"Ƞ": "N",
		"ǋ": "N",
		"Ñ": "N",
		"Ǌ": "NJ",
		"Ó": "O",
		"Ŏ": "O",
		"Ǒ": "O",
		"Ô": "O",
		"Ố": "O",
		"Ộ": "O",
		"Ồ": "O",
		"Ổ": "O",
		"Ỗ": "O",
		"Ö": "O",
		"Ö": "O",
		"Ȫ": "O",
		"Ȯ": "O",
		"Ȱ": "O",
		"Ọ": "O",
		"Ő": "O",
		"Ȍ": "O",
		"Ò": "O",
		"Ỏ": "O",
		"Ơ": "O",
		"Ớ": "O",
		"Ợ": "O",
		"Ờ": "O",
		"Ở": "O",
		"Ỡ": "O",
		"Ȏ": "O",
		"Ꝋ": "O",
		"Ꝍ": "O",
		"Ō": "O",
		"Ṓ": "O",
		"Ṑ": "O",
		"Ɵ": "O",
		"Ǫ": "O",
		"Ǭ": "O",
		"Ø": "O",
		"Ǿ": "O",
		"Õ": "O",
		"Ṍ": "O",
		"Ṏ": "O",
		"Ȭ": "O",
		"Ƣ": "OI",
		"Ꝏ": "OO",
		"Ɛ": "E",
		"Ɔ": "O",
		"Ȣ": "OU",
		"Ṕ": "P",
		"Ṗ": "P",
		"Ꝓ": "P",
		"Ƥ": "P",
		"Ꝕ": "P",
		"Ᵽ": "P",
		"Ꝑ": "P",
		"Ꝙ": "Q",
		"Ꝗ": "Q",
		"Ŕ": "R",
		"Ř": "R",
		"Ŗ": "R",
		"Ṙ": "R",
		"Ṛ": "R",
		"Ṝ": "R",
		"Ȑ": "R",
		"Ȓ": "R",
		"Ṟ": "R",
		"Ɍ": "R",
		"Ɽ": "R",
		"Ꜿ": "C",
		"Ǝ": "E",
		"Ś": "S",
		"Ṥ": "S",
		"Š": "S",
		"Ṧ": "S",
		"Ş": "S",
		"Ş": "S",
		"Ŝ": "S",
		"Ș": "S",
		"Ṡ": "S",
		"Ṣ": "S",
		"Ṩ": "S",
		"ẞ": "SS",
		"Ť": "T",
		"Ţ": "T",
		"Ṱ": "T",
		"Ț": "T",
		"Ⱦ": "T",
		"Ṫ": "T",
		"Ṭ": "T",
		"Ƭ": "T",
		"Ṯ": "T",
		"Ʈ": "T",
		"Ŧ": "T",
		"Ɐ": "A",
		"Ꞁ": "L",
		"Ɯ": "M",
		"Ʌ": "V",
		"Ꜩ": "TZ",
		"Ú": "U",
		"Ŭ": "U",
		"Ǔ": "U",
		"Û": "U",
		"Ṷ": "U",
		"Ü": "U",
		"Ǘ": "U",
		"Ǚ": "U",
		"Ǜ": "U",
		"Ǖ": "U",
		"Ṳ": "U",
		"Ụ": "U",
		"Ű": "U",
		"Ȕ": "U",
		"Ù": "U",
		"Ủ": "U",
		"Ư": "U",
		"Ứ": "U",
		"Ự": "U",
		"Ừ": "U",
		"Ử": "U",
		"Ữ": "U",
		"Ȗ": "U",
		"Ū": "U",
		"Ü": "U",
		"Ṻ": "U",
		"Ų": "U",
		"Ů": "U",
		"Ũ": "U",
		"Ṹ": "U",
		"Ṵ": "U",
		"Ꝟ": "V",
		"Ṿ": "V",
		"Ʋ": "V",
		"Ṽ": "V",
		"Ꝡ": "VY",
		"Ẃ": "W",
		"Ŵ": "W",
		"Ẅ": "W",
		"Ẇ": "W",
		"Ẉ": "W",
		"Ẁ": "W",
		"Ⱳ": "W",
		"Ẍ": "X",
		"Ẋ": "X",
		"Ý": "Y",
		"Ŷ": "Y",
		"Ÿ": "Y",
		"Ẏ": "Y",
		"Ỵ": "Y",
		"Ỳ": "Y",
		"Ƴ": "Y",
		"Ỷ": "Y",
		"Ỿ": "Y",
		"Ȳ": "Y",
		"Ɏ": "Y",
		"Ỹ": "Y",
		"Ź": "Z",
		"Ž": "Z",
		"Ẑ": "Z",
		"Ⱬ": "Z",
		"Ż": "Z",
		"Ẓ": "Z",
		"Ȥ": "Z",
		"Ẕ": "Z",
		"Ƶ": "Z",
		"Ĳ": "IJ",
		"Œ": "OE",
		"ᴀ": "A",
		"ᴁ": "AE",
		"ʙ": "B",
		"ᴃ": "B",
		"ᴄ": "C",
		"ᴅ": "D",
		"ᴇ": "E",
		"ꜰ": "F",
		"ɢ": "G",
		"ʛ": "G",
		"ʜ": "H",
		"ɪ": "I",
		"ʁ": "R",
		"ᴊ": "J",
		"ᴋ": "K",
		"ʟ": "L",
		"ᴌ": "L",
		"ᴍ": "M",
		"ɴ": "N",
		"ᴏ": "O",
		"ɶ": "OE",
		"ᴐ": "O",
		"ᴕ": "OU",
		"ᴘ": "P",
		"ʀ": "R",
		"ᴎ": "N",
		"ᴙ": "R",
		"ꜱ": "S",
		"ᴛ": "T",
		"ⱻ": "E",
		"ᴚ": "R",
		"ᴜ": "U",
		"ᴠ": "V",
		"ᴡ": "W",
		"ʏ": "Y",
		"ᴢ": "Z",
		"á": "a",
		"ă": "a",
		"ắ": "a",
		"ặ": "a",
		"ằ": "a",
		"ẳ": "a",
		"ẵ": "a",
		"ǎ": "a",
		"â": "a",
		"ấ": "a",
		"ậ": "a",
		"ầ": "a",
		"ẩ": "a",
		"ẫ": "a",
		"ä": "a",
		"ǟ": "a",
		"ȧ": "a",
		"ǡ": "a",
		"ạ": "a",
		"ȁ": "a",
		"à": "a",
		"ả": "a",
		"ȃ": "a",
		"ā": "a",
		"ą": "a",
		"ᶏ": "a",
		"ẚ": "a",
		"å": "a",
		"ǻ": "a",
		"ḁ": "a",
		"ⱥ": "a",
		"ã": "a",
		"ꜳ": "aa",
		"æ": "ae",
		"ǽ": "ae",
		"ǣ": "ae",
		"ꜵ": "ao",
		"ꜷ": "au",
		"ꜹ": "av",
		"ꜻ": "av",
		"ꜽ": "ay",
		"ḃ": "b",
		"ḅ": "b",
		"ɓ": "b",
		"ḇ": "b",
		"ᵬ": "b",
		"ᶀ": "b",
		"ƀ": "b",
		"ƃ": "b",
		"ɵ": "o",
		"ć": "c",
		"č": "c",
		"ç": "c",
		"ç": "c",
		"ḉ": "c",
		"ĉ": "c",
		"ɕ": "c",
		"ċ": "c",
		"ƈ": "c",
		"ȼ": "c",
		"ď": "d",
		"ḑ": "d",
		"ḓ": "d",
		"ȡ": "d",
		"ḋ": "d",
		"ḍ": "d",
		"ɗ": "d",
		"ᶑ": "d",
		"ḏ": "d",
		"ᵭ": "d",
		"ᶁ": "d",
		"đ": "d",
		"ɖ": "d",
		"ƌ": "d",
		"ı": "i",
		"ȷ": "j",
		"ɟ": "j",
		"ʄ": "j",
		"ǳ": "dz",
		"ǆ": "dz",
		"é": "e",
		"è": "e",
		"ĕ": "e",
		"ě": "e",
		"ȩ": "e",
		"ḝ": "e",
		"ê": "e",
		"ế": "e",
		"ệ": "e",
		"ề": "e",
		"ể": "e",
		"ễ": "e",
		"ḙ": "e",
		"ë": "e",
		"ė": "e",
		"ẹ": "e",
		"ȅ": "e",
		"è": "e",
		"ẻ": "e",
		"ȇ": "e",
		"ē": "e",
		"ḗ": "e",
		"ḕ": "e",
		"ⱸ": "e",
		"ę": "e",
		"ᶒ": "e",
		"ɇ": "e",
		"ẽ": "e",
		"ḛ": "e",
		"ꝫ": "et",
		"ḟ": "f",
		"ƒ": "f",
		"ᵮ": "f",
		"ᶂ": "f",
		"ǵ": "g",
		"ğ": "g",
		"ǧ": "g",
		"ģ": "g",
		"ĝ": "g",
		"ğ": "g",
		"ġ": "g",
		"ɠ": "g",
		"ḡ": "g",
		"ᶃ": "g",
		"ǥ": "g",
		"ḫ": "h",
		"ȟ": "h",
		"ḩ": "h",
		"ĥ": "h",
		"ⱨ": "h",
		"ḧ": "h",
		"ḣ": "h",
		"ḥ": "h",
		"ɦ": "h",
		"ẖ": "h",
		"ħ": "h",
		"ƕ": "hv",
		"í": "i",
		"ĭ": "i",
		"ǐ": "i",
		"î": "i",
		"ï": "i",
		"ḯ": "i",
		"ị": "i",
		"ȉ": "i",
		"ì": "i",
		"ỉ": "i",
		"ȋ": "i",
		"ī": "i",
		"į": "i",
		"ᶖ": "i",
		"ɨ": "i",
		"ĩ": "i",
		"ḭ": "i",
		"ꝺ": "d",
		"ꝼ": "f",
		"ᵹ": "g",
		"ꞃ": "r",
		"ꞅ": "s",
		"ꞇ": "t",
		"ꝭ": "is",
		"ǰ": "j",
		"ĵ": "j",
		"ʝ": "j",
		"ɉ": "j",
		"ḱ": "k",
		"ǩ": "k",
		"ķ": "k",
		"ⱪ": "k",
		"ꝃ": "k",
		"ḳ": "k",
		"ƙ": "k",
		"ḵ": "k",
		"ᶄ": "k",
		"ꝁ": "k",
		"ꝅ": "k",
		"ĺ": "l",
		"ƚ": "l",
		"ɬ": "l",
		"ľ": "l",
		"ļ": "l",
		"ḽ": "l",
		"ȴ": "l",
		"ḷ": "l",
		"ḹ": "l",
		"ⱡ": "l",
		"ꝉ": "l",
		"ḻ": "l",
		"ŀ": "l",
		"ɫ": "l",
		"ᶅ": "l",
		"ɭ": "l",
		"ł": "l",
		"ǉ": "lj",
		"ſ": "s",
		"ẜ": "s",
		"ẛ": "s",
		"ẝ": "s",
		"ḿ": "m",
		"ṁ": "m",
		"ṃ": "m",
		"ɱ": "m",
		"ᵯ": "m",
		"ᶆ": "m",
		"ń": "n",
		"ň": "n",
		"ņ": "n",
		"ṋ": "n",
		"ȵ": "n",
		"ṅ": "n",
		"ṇ": "n",
		"ǹ": "n",
		"ɲ": "n",
		"ṉ": "n",
		"ƞ": "n",
		"ᵰ": "n",
		"ᶇ": "n",
		"ɳ": "n",
		"ñ": "n",
		"ǌ": "nj",
		"ó": "o",
		"ŏ": "o",
		"ö": "o",
		"ǒ": "o",
		"ô": "o",
		"ố": "o",
		"ộ": "o",
		"ồ": "o",
		"ổ": "o",
		"ỗ": "o",
		"ö": "o",
		"ȫ": "o",
		"ȯ": "o",
		"ȱ": "o",
		"ọ": "o",
		"ő": "o",
		"ȍ": "o",
		"ò": "o",
		"ỏ": "o",
		"ơ": "o",
		"ớ": "o",
		"ợ": "o",
		"ờ": "o",
		"ở": "o",
		"ỡ": "o",
		"ȏ": "o",
		"ꝋ": "o",
		"ꝍ": "o",
		"ⱺ": "o",
		"ō": "o",
		"ṓ": "o",
		"ṑ": "o",
		"ǫ": "o",
		"ǭ": "o",
		"ø": "o",
		"ǿ": "o",
		"õ": "o",
		"ṍ": "o",
		"ṏ": "o",
		"ȭ": "o",
		"ƣ": "oi",
		"ꝏ": "oo",
		"ɛ": "e",
		"ᶓ": "e",
		"ɔ": "o",
		"ᶗ": "o",
		"ȣ": "ou",
		"ṕ": "p",
		"ṗ": "p",
		"ꝓ": "p",
		"ƥ": "p",
		"ᵱ": "p",
		"ᶈ": "p",
		"ꝕ": "p",
		"ᵽ": "p",
		"ꝑ": "p",
		"ꝙ": "q",
		"ʠ": "q",
		"ɋ": "q",
		"ꝗ": "q",
		"ŕ": "r",
		"ř": "r",
		"ŗ": "r",
		"ṙ": "r",
		"ṛ": "r",
		"ṝ": "r",
		"ȑ": "r",
		"ɾ": "r",
		"ᵳ": "r",
		"ȓ": "r",
		"ṟ": "r",
		"ɼ": "r",
		"ᵲ": "r",
		"ᶉ": "r",
		"ɍ": "r",
		"ɽ": "r",
		"ↄ": "c",
		"ꜿ": "c",
		"ɘ": "e",
		"ɿ": "r",
		"ś": "s",
		"ṥ": "s",
		"š": "s",
		"ṧ": "s",
		"ş": "s",
		"ŝ": "s",
		"ș": "s",
		"ṡ": "s",
		"ṣ": "s",
		"ş": "s",
		"ṩ": "s",
		"ʂ": "s",
		"ᵴ": "s",
		"ᶊ": "s",
		"ȿ": "s",
		"ß": "ss",
		"ɡ": "g",
		"ᴑ": "o",
		"ᴓ": "o",
		"ᴝ": "u",
		"ť": "t",
		"ţ": "t",
		"ṱ": "t",
		"ț": "t",
		"ȶ": "t",
		"ẗ": "t",
		"ⱦ": "t",
		"ṫ": "t",
		"ṭ": "t",
		"ƭ": "t",
		"ṯ": "t",
		"ᵵ": "t",
		"ƫ": "t",
		"ʈ": "t",
		"ŧ": "t",
		"ᵺ": "th",
		"ɐ": "a",
		"ᴂ": "ae",
		"ǝ": "e",
		"ᵷ": "g",
		"ɥ": "h",
		"ʮ": "h",
		"ʯ": "h",
		"ᴉ": "i",
		"ʞ": "k",
		"ꞁ": "l",
		"ɯ": "m",
		"ɰ": "m",
		"ᴔ": "oe",
		"ɹ": "r",
		"ɻ": "r",
		"ɺ": "r",
		"ⱹ": "r",
		"ʇ": "t",
		"ʌ": "v",
		"ʍ": "w",
		"ʎ": "y",
		"ꜩ": "tz",
		"ú": "u",
		"ŭ": "u",
		"ǔ": "u",
		"û": "u",
		"ṷ": "u",
		"ü": "u",
		"ü": "u",
		"ǘ": "u",
		"ǚ": "u",
		"ǜ": "u",
		"ǖ": "u",
		"ṳ": "u",
		"ụ": "u",
		"ű": "u",
		"ȕ": "u",
		"ù": "u",
		"ủ": "u",
		"ư": "u",
		"ứ": "u",
		"ự": "u",
		"ừ": "u",
		"ử": "u",
		"ữ": "u",
		"ȗ": "u",
		"ū": "u",
		"ṻ": "u",
		"ų": "u",
		"ᶙ": "u",
		"ů": "u",
		"ũ": "u",
		"ṹ": "u",
		"ṵ": "u",
		"ᵫ": "ue",
		"ꝸ": "um",
		"ⱴ": "v",
		"ꝟ": "v",
		"ṿ": "v",
		"ʋ": "v",
		"ᶌ": "v",
		"ⱱ": "v",
		"ṽ": "v",
		"ꝡ": "vy",
		"ẃ": "w",
		"ŵ": "w",
		"ẅ": "w",
		"ẇ": "w",
		"ẉ": "w",
		"ẁ": "w",
		"ⱳ": "w",
		"ẘ": "w",
		"ẍ": "x",
		"ẋ": "x",
		"ᶍ": "x",
		"ý": "y",
		"ŷ": "y",
		"ÿ": "y",
		"ẏ": "y",
		"ỵ": "y",
		"ỳ": "y",
		"ƴ": "y",
		"ỷ": "y",
		"ỿ": "y",
		"ȳ": "y",
		"ẙ": "y",
		"ɏ": "y",
		"ỹ": "y",
		"ź": "z",
		"ž": "z",
		"ẑ": "z",
		"ʑ": "z",
		"ⱬ": "z",
		"ż": "z",
		"ẓ": "z",
		"ȥ": "z",
		"ẕ": "z",
		"ᵶ": "z",
		"ᶎ": "z",
		"ʐ": "z",
		"ƶ": "z",
		"ɀ": "z",
		"ﬀ": "ff",
		"ﬃ": "ffi",
		"ﬄ": "ffl",
		"ﬁ": "fi",
		"ﬂ": "fl",
		"ĳ": "ij",
		"œ": "oe",
		"ﬆ": "st",
		"ₐ": "a",
		"ₑ": "e",
		"ᵢ": "i",
		"ⱼ": "j",
		"ₒ": "o",
		"ᵣ": "r",
		"ᵤ": "u",
		"ᵥ": "v",
		"ₓ": "x"
	},
	"uncategorized": {
		"𝗩": "V",
		"𝗲": "e",
		"𝗻": "n",
		"𝗼": "o",
		"𝗺": "m",
		"𝗘": "E",
		"𝗿": "r",
		"𝗶": "i",
		"𝗰": "c",
		"𝗸": "k",
		"𝐽": "J",
		"𝑛": "n",
		"ⅈ": "i",
		"𝑖": "i",
		"ι": "i",
		"𝑓": "f",
		"𝑟": "r",
		"ડ": "S",
		"C̷": "C",
		"h̷": "h",
		"r̷": "r",
		"i̷": "i",
		"s̷": "s",
		"y̷": "y"
	}
}

//꧁༒𝓙𝓾𝓵𝓮𝓼🦋༒꧂
//🤍C̷h̷r̷i̷s̷s̷y̷ 🤍
//(っ◔◡◔)っ ♥ unknown ♥
//⬙KATIE⬙
//b⟁bi d⟁ddi
//( ͡° ͜ʖ ͡°)
//¯\_(ツ)_/¯
//( ´ ▽ ` )ﾉ
//^-^
//-_-
//☆𝕄𝕚𝕊𝕥𝔸𝕜𝔼☆
//<3
//ツ

const normalizeDataSet = Object.keys(normalizeData)

function removeZalgo(str) {
	return str.replace(/[\u0300-\u036F\u1AB0-\u1AFF\u1DC0-\u1DFF\u20D0-\u20FF\uFE20-\uFE2F\u0483-\u0486\u05C7\u0610-\u061A\u0656-\u065F\u0670\u06D6-\u06ED\u0711\u0730-\u073F\u0743-\u074A\u0F18-\u0F19\u0F35\u0F37\u0F72-\u0F73\u0F7A-\u0F81\u0F84\u0e00-\u0eff\uFC5E-\uFC62]{2,}/gi, '');
};

function removeMeta(str) {
	let arr = Array.from(str)

	for (let i in arr) {
		for (let j in normalizeDataSet) {
			if (typeof normalizeData[normalizeDataSet[j]][arr[i]] !== 'undefined') {
				arr[i] = normalizeData[normalizeDataSet[j]][arr[i]]
			}
		}
	}

	return arr.join('')
}

function all(str) {
	return removeZalgo(removeMeta(str))
}

export default {
	all,
	removeZalgo,
	removeMeta
}