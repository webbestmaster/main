/* automatically generated by JSCoverage - do not edit */
try {
  if (typeof top === 'object' && top !== null && typeof top.opener === 'object' && top.opener !== null) {
    // this is a browser window that was opened from another window

    if (! top.opener._$jscoverage) {
      top.opener._$jscoverage = {};
    }
  }
}
catch (e) {}

try {
  if (typeof top === 'object' && top !== null) {
    // this is a browser window

    try {
      if (typeof top.opener === 'object' && top.opener !== null && top.opener._$jscoverage) {
        top._$jscoverage = top.opener._$jscoverage;
      }
    }
    catch (e) {}

    if (! top._$jscoverage) {
      top._$jscoverage = {};
    }
  }
}
catch (e) {}

try {
  if (typeof top === 'object' && top !== null && top._$jscoverage) {
    this._$jscoverage = top._$jscoverage;
  }
}
catch (e) {}
if (! this._$jscoverage) {
  this._$jscoverage = {};
}
if (! _$jscoverage['js/service/info.js']) {
  _$jscoverage['js/service/info.js'] = [];
  _$jscoverage['js/service/info.js'][1] = 0;
  _$jscoverage['js/service/info.js'][3] = 0;
  _$jscoverage['js/service/info.js'][6] = 0;
  _$jscoverage['js/service/info.js'][7] = 0;
  _$jscoverage['js/service/info.js'][8] = 0;
  _$jscoverage['js/service/info.js'][9] = 0;
  _$jscoverage['js/service/info.js'][11] = 0;
  _$jscoverage['js/service/info.js'][25] = 0;
  _$jscoverage['js/service/info.js'][26] = 0;
  _$jscoverage['js/service/info.js'][29] = 0;
  _$jscoverage['js/service/info.js'][32] = 0;
  _$jscoverage['js/service/info.js'][34] = 0;
  _$jscoverage['js/service/info.js'][35] = 0;
  _$jscoverage['js/service/info.js'][39] = 0;
  _$jscoverage['js/service/info.js'][40] = 0;
  _$jscoverage['js/service/info.js'][41] = 0;
  _$jscoverage['js/service/info.js'][42] = 0;
  _$jscoverage['js/service/info.js'][45] = 0;
  _$jscoverage['js/service/info.js'][50] = 0;
  _$jscoverage['js/service/info.js'][53] = 0;
  _$jscoverage['js/service/info.js'][56] = 0;
  _$jscoverage['js/service/info.js'][57] = 0;
  _$jscoverage['js/service/info.js'][58] = 0;
  _$jscoverage['js/service/info.js'][61] = 0;
  _$jscoverage['js/service/info.js'][63] = 0;
  _$jscoverage['js/service/info.js'][64] = 0;
  _$jscoverage['js/service/info.js'][65] = 0;
  _$jscoverage['js/service/info.js'][70] = 0;
  _$jscoverage['js/service/info.js'][71] = 0;
  _$jscoverage['js/service/info.js'][72] = 0;
  _$jscoverage['js/service/info.js'][77] = 0;
  _$jscoverage['js/service/info.js'][79] = 0;
}
_$jscoverage['js/service/info.js'].source = ["<span class=\"k\">(</span><span class=\"k\">function</span> <span class=\"k\">(</span>win<span class=\"k\">,</span> doc<span class=\"k\">)</span> <span class=\"k\">{</span>","","\t<span class=\"s\">\"use strict\"</span><span class=\"k\">;</span>","\t<span class=\"c\">/*global window, document, navigator */</span>","","\t<span class=\"k\">var</span> docElem<span class=\"k\">,</span> ls<span class=\"k\">,</span> isTouch<span class=\"k\">,</span> info<span class=\"k\">;</span>","\tdocElem <span class=\"k\">=</span> doc<span class=\"k\">.</span>documentElement<span class=\"k\">;</span>","\tls <span class=\"k\">=</span> win<span class=\"k\">.</span>localStorage<span class=\"k\">;</span>","\tisTouch <span class=\"k\">=</span> docElem<span class=\"k\">.</span>hasOwnProperty<span class=\"k\">(</span><span class=\"s\">'ontouchstart'</span><span class=\"k\">);</span>","","\tinfo <span class=\"k\">=</span> <span class=\"k\">{</span>","\t\tlang<span class=\"k\">:</span> <span class=\"s\">'ru'</span><span class=\"k\">,</span> <span class=\"c\">// current language</span>","<span class=\"c\">//\t\tavailableLangs: ['en', 'ru', 'de', 'zh', 'es', 'ar', 'it'],</span>","\t\tavailableLangs<span class=\"k\">:</span> <span class=\"k\">[</span><span class=\"s\">'ru'</span><span class=\"k\">],</span>","\t\tadsFree<span class=\"k\">:</span> <span class=\"k\">false</span><span class=\"k\">,</span>","\t\tsaveItem<span class=\"k\">:</span> <span class=\"s\">'bingo'</span><span class=\"k\">,</span>","\t\tisPhone<span class=\"k\">:</span> <span class=\"k\">false</span><span class=\"k\">,</span>","\t\tisTouch<span class=\"k\">:</span> isTouch<span class=\"k\">,</span>","\t\tpreCSS<span class=\"k\">:</span> <span class=\"s\">'-webkit-'</span><span class=\"k\">,</span>","\t\tpreJS<span class=\"k\">:</span> <span class=\"s\">'webkit'</span><span class=\"k\">,</span>","\t\tisAndroid<span class=\"k\">:</span> <span class=\"k\">(</span><span class=\"s\">/android/i</span><span class=\"k\">).</span>test<span class=\"k\">(</span>win<span class=\"k\">.</span>navigator<span class=\"k\">.</span>userAgent<span class=\"k\">),</span>","\t\tcanScroll<span class=\"k\">:</span> <span class=\"k\">false</span><span class=\"k\">,</span>","","\t\tgetData<span class=\"k\">:</span> <span class=\"k\">function</span> <span class=\"k\">()</span> <span class=\"k\">{</span>","\t\t\t<span class=\"k\">var</span> data <span class=\"k\">=</span> ls<span class=\"k\">.</span>getItem<span class=\"k\">(</span><span class=\"k\">this</span><span class=\"k\">.</span>saveItem<span class=\"k\">)</span> <span class=\"k\">||</span> <span class=\"s\">'{}'</span><span class=\"k\">;</span>","\t\t\t<span class=\"k\">return</span> JSON<span class=\"k\">.</span>parse<span class=\"k\">(</span>data<span class=\"k\">);</span>","\t\t<span class=\"k\">}</span><span class=\"k\">,</span>","\t\tget<span class=\"k\">:</span> <span class=\"k\">function</span> <span class=\"k\">(</span>key<span class=\"k\">)</span> <span class=\"k\">{</span>","\t\t\t<span class=\"k\">return</span> <span class=\"k\">this</span><span class=\"k\">[</span>key<span class=\"k\">];</span>","\t\t<span class=\"k\">}</span><span class=\"k\">,</span>","\t\tset<span class=\"k\">:</span> <span class=\"k\">function</span> <span class=\"k\">(</span>key<span class=\"k\">,</span> value<span class=\"k\">,</span> toLS<span class=\"k\">)</span> <span class=\"k\">{</span>","\t\t\t<span class=\"k\">this</span><span class=\"k\">[</span>key<span class=\"k\">]</span> <span class=\"k\">=</span> value<span class=\"k\">;</span>","","\t\t\t<span class=\"k\">if</span> <span class=\"k\">(!</span>toLS<span class=\"k\">)</span> <span class=\"k\">{</span>","\t\t\t\t<span class=\"k\">return</span><span class=\"k\">;</span>","\t\t\t<span class=\"k\">}</span>","","\t\t\t<span class=\"c\">// save data to ls</span>","\t\t\t<span class=\"k\">var</span> data <span class=\"k\">=</span> <span class=\"k\">this</span><span class=\"k\">.</span>getData<span class=\"k\">();</span>","\t\t\tdata<span class=\"k\">[</span>key<span class=\"k\">]</span> <span class=\"k\">=</span> value<span class=\"k\">;</span>","\t\t\tdata <span class=\"k\">=</span> JSON<span class=\"k\">.</span>stringify<span class=\"k\">(</span>data<span class=\"k\">);</span>","\t\t\tls<span class=\"k\">.</span>setItem<span class=\"k\">(</span><span class=\"k\">this</span><span class=\"k\">.</span>saveItem<span class=\"k\">,</span> data<span class=\"k\">);</span>","\t\t<span class=\"k\">}</span><span class=\"k\">,</span>","\t\tchange<span class=\"k\">:</span> <span class=\"k\">function</span> <span class=\"k\">(</span>key<span class=\"k\">,</span> delta<span class=\"k\">,</span> toLS<span class=\"k\">)</span> <span class=\"k\">{</span>","\t\t\t<span class=\"k\">this</span><span class=\"k\">.</span>set<span class=\"k\">(</span>key<span class=\"k\">,</span> <span class=\"k\">(</span><span class=\"k\">this</span><span class=\"k\">.</span>get<span class=\"k\">(</span>key<span class=\"k\">)</span> <span class=\"k\">||</span> <span class=\"s\">0</span><span class=\"k\">)</span> <span class=\"k\">+</span> delta<span class=\"k\">,</span> toLS<span class=\"k\">);</span>","\t\t<span class=\"k\">}</span><span class=\"k\">,</span>","","\t\tinit<span class=\"k\">:</span> <span class=\"k\">function</span> <span class=\"k\">()</span> <span class=\"k\">{</span>","","\t\t\t<span class=\"k\">this</span><span class=\"k\">.</span>getIsPhone<span class=\"k\">();</span>","","\t\t\t<span class=\"c\">// set all fields from ls to info</span>","\t\t\t<span class=\"k\">this</span><span class=\"k\">.</span>setDataFromLS<span class=\"k\">();</span>","","\t\t\t<span class=\"c\">// try to get current language</span>","\t\t\t<span class=\"k\">var</span> lang <span class=\"k\">=</span> <span class=\"k\">this</span><span class=\"k\">.</span>get<span class=\"k\">(</span><span class=\"s\">'lang'</span><span class=\"k\">)</span> <span class=\"k\">||</span> <span class=\"k\">(</span>navigator<span class=\"k\">.</span>language <span class=\"k\">||</span> navigator<span class=\"k\">.</span>userLanguage<span class=\"k\">);</span>","\t\t\tlang <span class=\"k\">=</span> lang<span class=\"k\">.</span>split<span class=\"k\">(</span><span class=\"s\">'-'</span><span class=\"k\">)[</span><span class=\"s\">0</span><span class=\"k\">];</span>","\t\t\t<span class=\"k\">this</span><span class=\"k\">.</span>lang <span class=\"k\">=</span> <span class=\"k\">(</span><span class=\"k\">this</span><span class=\"k\">.</span>availableLangs<span class=\"k\">.</span>indexOf<span class=\"k\">(</span>lang<span class=\"k\">)</span> <span class=\"k\">===</span> <span class=\"k\">-</span><span class=\"s\">1</span><span class=\"k\">)</span> <span class=\"k\">?</span> <span class=\"k\">this</span><span class=\"k\">.</span>lang <span class=\"k\">:</span> lang<span class=\"k\">;</span>","\t\t<span class=\"k\">}</span><span class=\"k\">,</span>","\t\tsetDataFromLS<span class=\"k\">:</span> <span class=\"k\">function</span> <span class=\"k\">()</span> <span class=\"k\">{</span>","\t\t\t<span class=\"k\">var</span> data <span class=\"k\">=</span> <span class=\"k\">this</span><span class=\"k\">.</span>getData<span class=\"k\">(),</span>","\t\t\t\tkey<span class=\"k\">;</span>","\t\t\t<span class=\"k\">for</span> <span class=\"k\">(</span>key <span class=\"k\">in</span> data<span class=\"k\">)</span> <span class=\"k\">{</span>","\t\t\t\t<span class=\"k\">if</span> <span class=\"k\">(</span>data<span class=\"k\">.</span>hasOwnProperty<span class=\"k\">(</span>key<span class=\"k\">))</span> <span class=\"k\">{</span>","\t\t\t\t\t<span class=\"k\">this</span><span class=\"k\">[</span>key<span class=\"k\">]</span> <span class=\"k\">=</span> data<span class=\"k\">[</span>key<span class=\"k\">];</span>","\t\t\t\t<span class=\"k\">}</span>","\t\t\t<span class=\"k\">}</span>","\t\t<span class=\"k\">}</span><span class=\"k\">,</span>","\t\tgetIsPhone<span class=\"k\">:</span> <span class=\"k\">function</span> <span class=\"k\">()</span> <span class=\"k\">{</span>","\t\t\t<span class=\"k\">var</span> maxSize <span class=\"k\">=</span> <span class=\"k\">(</span>docElem<span class=\"k\">.</span>clientHeight <span class=\"k\">&gt;</span> docElem<span class=\"k\">.</span>clientWidth<span class=\"k\">)</span> <span class=\"k\">?</span> docElem<span class=\"k\">.</span>clientHeight <span class=\"k\">:</span> docElem<span class=\"k\">.</span>clientWidth<span class=\"k\">;</span>","\t\t\t<span class=\"k\">this</span><span class=\"k\">.</span>isPhone <span class=\"k\">=</span> maxSize <span class=\"k\">&lt;</span> <span class=\"s\">700</span><span class=\"k\">;</span>","\t\t\t<span class=\"k\">return</span> <span class=\"k\">this</span><span class=\"k\">.</span>isPhone<span class=\"k\">;</span>","\t\t<span class=\"k\">}</span>","","\t<span class=\"k\">}</span><span class=\"k\">;</span>","","\tinfo<span class=\"k\">.</span>init<span class=\"k\">();</span>","","\twin<span class=\"k\">.</span>info <span class=\"k\">=</span> info<span class=\"k\">;</span>","","<span class=\"k\">}</span><span class=\"k\">(</span>window<span class=\"k\">,</span> document<span class=\"k\">));</span>"];
_$jscoverage['js/service/info.js'][1]++;
(function (win, doc) {
  _$jscoverage['js/service/info.js'][3]++;
  "use strict";
  _$jscoverage['js/service/info.js'][6]++;
  var docElem, ls, isTouch, info;
  _$jscoverage['js/service/info.js'][7]++;
  docElem = doc.documentElement;
  _$jscoverage['js/service/info.js'][8]++;
  ls = win.localStorage;
  _$jscoverage['js/service/info.js'][9]++;
  isTouch = docElem.hasOwnProperty("ontouchstart");
  _$jscoverage['js/service/info.js'][11]++;
  info = {lang: "ru", availableLangs: ["ru"], adsFree: false, saveItem: "bingo", isPhone: false, isTouch: isTouch, preCSS: "-webkit-", preJS: "webkit", isAndroid: /android/i.test(win.navigator.userAgent), canScroll: false, getData: (function () {
  _$jscoverage['js/service/info.js'][25]++;
  var data = (ls.getItem(this.saveItem) || "{}");
  _$jscoverage['js/service/info.js'][26]++;
  return JSON.parse(data);
}), get: (function (key) {
  _$jscoverage['js/service/info.js'][29]++;
  return this[key];
}), set: (function (key, value, toLS) {
  _$jscoverage['js/service/info.js'][32]++;
  this[key] = value;
  _$jscoverage['js/service/info.js'][34]++;
  if ((! toLS)) {
    _$jscoverage['js/service/info.js'][35]++;
    return;
  }
  _$jscoverage['js/service/info.js'][39]++;
  var data = this.getData();
  _$jscoverage['js/service/info.js'][40]++;
  data[key] = value;
  _$jscoverage['js/service/info.js'][41]++;
  data = JSON.stringify(data);
  _$jscoverage['js/service/info.js'][42]++;
  ls.setItem(this.saveItem, data);
}), change: (function (key, delta, toLS) {
  _$jscoverage['js/service/info.js'][45]++;
  this.set(key, ((this.get(key) || 0) + delta), toLS);
}), init: (function () {
  _$jscoverage['js/service/info.js'][50]++;
  this.getIsPhone();
  _$jscoverage['js/service/info.js'][53]++;
  this.setDataFromLS();
  _$jscoverage['js/service/info.js'][56]++;
  var lang = (this.get("lang") || (navigator.language || navigator.userLanguage));
  _$jscoverage['js/service/info.js'][57]++;
  lang = lang.split("-")[0];
  _$jscoverage['js/service/info.js'][58]++;
  this.lang = ((this.availableLangs.indexOf(lang) === -1)? this.lang: lang);
}), setDataFromLS: (function () {
  _$jscoverage['js/service/info.js'][61]++;
  var data = this.getData(), key;
  _$jscoverage['js/service/info.js'][63]++;
  for (key in data) {
    _$jscoverage['js/service/info.js'][64]++;
    if (data.hasOwnProperty(key)) {
      _$jscoverage['js/service/info.js'][65]++;
      this[key] = data[key];
    }
}
}), getIsPhone: (function () {
  _$jscoverage['js/service/info.js'][70]++;
  var maxSize = ((docElem.clientHeight > docElem.clientWidth)? docElem.clientHeight: docElem.clientWidth);
  _$jscoverage['js/service/info.js'][71]++;
  this.isPhone = (maxSize < 700);
  _$jscoverage['js/service/info.js'][72]++;
  return this.isPhone;
})};
  _$jscoverage['js/service/info.js'][77]++;
  info.init();
  _$jscoverage['js/service/info.js'][79]++;
  win.info = info;
})(window, document);
