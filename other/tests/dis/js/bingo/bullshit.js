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
if (! _$jscoverage['js/bingo/bullshit.js']) {
  _$jscoverage['js/bingo/bullshit.js'] = [];
  _$jscoverage['js/bingo/bullshit.js'][1] = 0;
  _$jscoverage['js/bingo/bullshit.js'][3] = 0;
  _$jscoverage['js/bingo/bullshit.js'][6] = 0;
  _$jscoverage['js/bingo/bullshit.js'][8] = 0;
}
_$jscoverage['js/bingo/bullshit.js'].source = ["<span class=\"k\">(</span><span class=\"k\">function</span> <span class=\"k\">(</span>win<span class=\"k\">)</span> <span class=\"k\">{</span>","","\t<span class=\"s\">\"use strict\"</span><span class=\"k\">;</span>","\t<span class=\"c\">/*global window*/</span>","","\twin<span class=\"k\">.</span>bingo <span class=\"k\">=</span> win<span class=\"k\">.</span>bingo <span class=\"k\">||</span> <span class=\"k\">{}</span><span class=\"k\">;</span>","","\twin<span class=\"k\">.</span>bingo<span class=\"k\">.</span>bullshit <span class=\"k\">=</span> <span class=\"k\">{</span>","\t\tname<span class=\"k\">:</span> <span class=\"k\">{</span>","\t\t\tru<span class=\"k\">:</span> <span class=\"s\">'Bullshit &#208;&#145;&#208;&#184;&#208;&#189;&#208;&#179;&#208;&#190;'</span>","\t\t<span class=\"k\">}</span><span class=\"k\">,</span>","\t\twords<span class=\"k\">:</span> <span class=\"k\">{</span>","\t\t\tru<span class=\"k\">:</span> <span class=\"k\">[</span><span class=\"s\">'&#209;&#130;&#208;&#176;&#209;&#128;&#208;&#179;&#208;&#181;&#209;&#130;'</span><span class=\"k\">,</span> <span class=\"s\">'&#208;&#186;&#208;&#190;&#208;&#188;&#208;&#184;&#209;&#130;&amp;shy;&#208;&#188;&#208;&#181;&#208;&#189;&#209;&#130;'</span><span class=\"k\">,</span> <span class=\"s\">'&#208;&#184;&#208;&#189;&#208;&#184;&#209;&#136;&#208;&#184;&amp;shy;&#208;&#176;&#209;&#130;&#208;&#184;&#208;&#178;'</span><span class=\"k\">,</span> <span class=\"s\">'&#208;&#186;&#208;&#190;&#208;&#188;&#208;&#191;&#208;&#187;&#208;&#181;&#208;&#186;&amp;shy;&#209;&#129;&#208;&#184;&#209;&#130;&#208;&#184;'</span><span class=\"k\">,</span> <span class=\"s\">'&#209;&#132;&#208;&#176;&#208;&#186;&#208;&#176;&#208;&#191;'</span><span class=\"k\">,</span> <span class=\"s\">'&#208;&#186;&#208;&#184; &#208;&#190;&#208;&#177;&#208;&#182;&#208;&#181;&#208;&#186;&#209;&#130;&#208;&#184;&#208;&#178;'</span><span class=\"k\">,</span> <span class=\"s\">'&#208;&#191;&#209;&#128;&#208;&#176;&#208;&#185;&#208;&#190;&amp;shy;&#209;&#128;&#208;&#184;&#209;&#130;&#208;&#184;'</span><span class=\"k\">,</span> <span class=\"s\">'&#209;&#129;&#208;&#184;&#208;&#189;&#208;&#181;&#209;&#128;&#208;&#180;&#208;&#182;&#208;&#184;'</span><span class=\"k\">,</span> <span class=\"s\">'&#209;&#132;&#208;&#176;&#208;&#185;&#208;&#189;'</span><span class=\"k\">,</span> <span class=\"s\">'&#209;&#141;&#208;&#186;&#208;&#183;&#208;&#181;&#208;&#186;&#209;&#140;&amp;shy;&#209;&#142;&#209;&#136;&#208;&#181;&#208;&#189;'</span><span class=\"k\">,</span> <span class=\"s\">'&#209;&#129;&#208;&#186;&#208;&#190;&#209;&#131;&#208;&#191;'</span><span class=\"k\">,</span> <span class=\"s\">'&#209;&#141;&#208;&#186;&#209;&#136;&#208;&#189; &#208;&#191;&#208;&#187;&#208;&#176;&#208;&#189;'</span><span class=\"k\">,</span> <span class=\"s\">'&#208;&#191;&#208;&#181;&#209;&#128;&#209;&#132;&#208;&#190;&#209;&#128;&amp;shy;&#208;&#188;&#208;&#176;&#208;&#189;&#209;&#129;'</span><span class=\"k\">,</span> <span class=\"s\">'&#208;&#184;&#208;&#189;&#208;&#191;&#209;&#131;&#209;&#130;'</span><span class=\"k\">,</span> <span class=\"s\">'&#208;&#186;&#208;&#176;&#208;&#191;&#209;&#141;&#209;&#129;&#208;&#184;&#209;&#130;&#208;&#184;'</span><span class=\"k\">,</span> <span class=\"s\">'&#208;&#188;&#208;&#184;&#209;&#130;&#208;&#184;&#208;&#189;&#208;&#179;'</span><span class=\"k\">,</span> <span class=\"s\">'&#208;&#184;&#209;&#136;&#209;&#140;&#209;&#142;'</span><span class=\"k\">,</span> <span class=\"s\">'&#208;&#188;&#208;&#176;&#209;&#128;&#208;&#180;&#208;&#182;&#208;&#184;&#208;&#189;'</span><span class=\"k\">,</span> <span class=\"s\">'&#208;&#186;&#209;&#141;&#209;&#136; &#209;&#132;&#208;&#187;&#208;&#190;&#209;&#131;'</span><span class=\"k\">,</span> <span class=\"s\">'&#208;&#190;&#208;&#191;&#208;&#191;&#208;&#190;&#209;&#128;&#209;&#130;&#209;&#142;&amp;shy;&#208;&#189;&#208;&#184;&#209;&#130;&#208;&#184;'</span><span class=\"k\">,</span> <span class=\"s\">'&#209;&#129;&#208;&#190;&#209;&#131; &#208;&#178;&#208;&#190;&#209;&#130;?'</span><span class=\"k\">,</span> <span class=\"s\">'&#209;&#129;&#208;&#186;&#208;&#181;&#208;&#185;&#208;&#187;'</span><span class=\"k\">,</span> <span class=\"s\">'&#208;&#186;&#208;&#190;&#208;&#189;&#209;&#132;&#208;&#181;&amp;shy;&#209;&#128;&#208;&#181;&#208;&#189;&#209;&#134; &#208;&#186;&#208;&#190;&#208;&#187;'</span><span class=\"k\">,</span> <span class=\"s\">'&#208;&#191;&#209;&#128;&#208;&#176;&#208;&#185;&#208;&#188;&#208;&#176;&#209;&#128;&#208;&#184; &#209;&#132;&#208;&#190;&#208;&#186;&#209;&#131;&#209;&#129;'</span><span class=\"k\">,</span> <span class=\"s\">'&#208;&#188;&#208;&#176;&#208;&#187;&#209;&#130;&#208;&#184;&#208;&#191;&#208;&#187;&#209;&#129;'</span><span class=\"k\">]</span>","\t\t<span class=\"k\">}</span><span class=\"k\">,</span>","\t\tdescription<span class=\"k\">:</span> <span class=\"k\">{</span>","\t\t\tru<span class=\"k\">:</span> <span class=\"s\">'&#208;&#146;&#209;&#139; &#208;&#178;&#209;&#129;&#209;&#145; &#208;&#181;&#209;&#137;&#209;&#145; &#209;&#129;&#208;&#191;&#208;&#184;&#209;&#130;&#208;&#181; &#208;&#189;&#208;&#176; &#208;&#178;&#209;&#129;&#209;&#130;&#209;&#128;&#208;&#181;&#209;&#135;&#208;&#176;&#209;&#133;? &#208;&#144; &#208;&#186;&#208;&#176;&#208;&#186; &#208;&#189;&#208;&#176;&#209;&#129;&#209;&#135;&#209;&#145;&#209;&#130; &#209;&#141;&#209;&#130;&#208;&#184;&#209;&#133; &#208;&#180;&#208;&#187;&#208;&#184;&#208;&#189;&#208;&#189;&#209;&#139;&#209;&#133; &#208;&#186;&#208;&#190;&#208;&#189;&#209;&#132;&#208;&#181;&#209;&#128;&#208;&#181;&#208;&#189;&#209;&#129;-&#208;&#186;&#208;&#190;&#208;&#187;&#208;&#187;&#208;&#190;&#208;&#178;? &#208;&#146;&#208;&#190;&#209;&#130; &#208;&#191;&#209;&#131;&#209;&#130;&#209;&#140;, &#208;&#186;&#208;&#190;&#209;&#130;&#208;&#190;&#209;&#128;&#209;&#139;&#208;&#185; &#208;&#191;&#208;&#190;&#208;&#188;&#208;&#190;&#208;&#182;&#208;&#181;&#209;&#130; &#208;&#178;&#208;&#176;&#208;&#188; &#208;&#178;&#209;&#129;&#209;&#145; &#208;&#184;&#208;&#183;&#208;&#188;&#208;&#181;&#208;&#189;&#208;&#184;&#209;&#130;&#209;&#140;! &lt;br&gt;&lt;br&gt; &#208;&#154;&#208;&#176;&#208;&#186; &#208;&#184;&#208;&#179;&#209;&#128;&#208;&#176;&#209;&#130;&#209;&#140;: &#208;&#190;&#209;&#130;&#208;&#188;&#208;&#181;&#209;&#135;&#208;&#176;&#208;&#185;&#209;&#130;&#208;&#181; &#209;&#129;&#208;&#190;&#208;&#190;&#209;&#130;&#208;&#178;&#208;&#181;&#209;&#130;&#209;&#129;&#209;&#130;&#208;&#178;&#209;&#131;&#209;&#142;&#209;&#137;&#209;&#131;&#209;&#142; &#208;&#186;&#208;&#187;&#208;&#181;&#209;&#130;&#208;&#186;&#209;&#131;, &#208;&#186;&#208;&#190;&#208;&#179;&#208;&#180;&#208;&#176; &#208;&#178;&#209;&#139; &#209;&#129;&#208;&#187;&#209;&#139;&#209;&#136;&#208;&#184;&#209;&#130;&#208;&#181; &#208;&#190;&#208;&#180;&#208;&#189;&#208;&#190; &#208;&#184;&#208;&#183; &#209;&#141;&#209;&#130;&#208;&#184;&#209;&#133; &#209;&#129;&#208;&#187;&#208;&#190;&#208;&#178; &#208;&#189;&#208;&#176; &#208;&#178;&#209;&#129;&#209;&#130;&#209;&#128;&#208;&#181;&#209;&#135;&#208;&#181;, &#208;&#186;&#208;&#190;&#208;&#189;&#209;&#132;&#208;&#181;&#209;&#128;&#208;&#181;&#208;&#189;&#209;&#129;-&#208;&#186;&#208;&#190;&#208;&#187;&#208;&#187;&#208;&#181; &#208;&#184;&#208;&#187;&#208;&#184; &#209;&#130;&#209;&#128;&#208;&#181;&#208;&#189;&#208;&#189;&#208;&#184;&#208;&#189;&#208;&#179;&#208;&#181;. &#208;&#154;&#208;&#190;&#208;&#179;&#208;&#180;&#208;&#176; &#208;&#178;&#209;&#139; &#209;&#129;&#208;&#190;&#209;&#129;&#209;&#130;&#208;&#176;&#208;&#178;&#208;&#184;&#209;&#130;&#208;&#181; &#208;&#191;&#209;&#143;&#209;&#130;&#209;&#140; &#208;&#186;&#208;&#187;&#208;&#181;&#209;&#130;&#208;&#190;&#208;&#186; &#208;&#191;&#208;&#190; &#208;&#179;&#208;&#190;&#209;&#128;&#208;&#184;&#208;&#183;&#208;&#190;&#208;&#189;&#209;&#130;&#208;&#176;&#208;&#187;&#208;&#184;, &#208;&#178;&#208;&#181;&#209;&#128;&#209;&#130;&#208;&#184;&#208;&#186;&#208;&#176;&#208;&#187;&#208;&#184; &#208;&#184;&#208;&#187;&#208;&#184; &#208;&#180;&#208;&#184;&#208;&#176;&#208;&#179;&#208;&#190;&#208;&#189;&#208;&#176;&#208;&#187;&#208;&#184;, &#208;&#178;&#209;&#129;&#209;&#130;&#208;&#176;&#208;&#189;&#209;&#140;&#209;&#130;&#208;&#181; &#208;&#184; &#208;&#186;&#209;&#128;&#208;&#184;&#208;&#186;&#208;&#189;&#208;&#184;&#209;&#130;&#208;&#181;: BULLSHIT &#208;&#145;&#208;&#184;&#208;&#189;&#208;&#179;&#208;&#190;! &lt;br&gt;&lt;br&gt; &#208;&#154;&#209;&#130;&#208;&#190; &#208;&#191;&#208;&#181;&#209;&#128;&#208;&#178;&#209;&#139;&#208;&#185; &#208;&#186;&#209;&#128;&#208;&#184;&#208;&#186;&#208;&#189;&#209;&#131;&#208;&#187;, &#209;&#130;&#208;&#190;&#209;&#130; &#208;&#184; &#208;&#191;&#208;&#190;&#208;&#177;&#208;&#181;&#208;&#180;&#208;&#184;&#208;&#187;.'</span>","\t\t<span class=\"k\">}</span>","","\t<span class=\"k\">}</span><span class=\"k\">;</span>","","<span class=\"k\">}</span><span class=\"k\">(</span>window<span class=\"k\">));</span>"];
_$jscoverage['js/bingo/bullshit.js'][1]++;
(function (win) {
  _$jscoverage['js/bingo/bullshit.js'][3]++;
  "use strict";
  _$jscoverage['js/bingo/bullshit.js'][6]++;
  win.bingo = (win.bingo || {});
  _$jscoverage['js/bingo/bullshit.js'][8]++;
  win.bingo.bullshit = {name: {ru: "Bullshit \u00d0\u0091\u00d0\u00b8\u00d0\u00bd\u00d0\u00b3\u00d0\u00be"}, words: {ru: ["\u00d1\u0082\u00d0\u00b0\u00d1\u0080\u00d0\u00b3\u00d0\u00b5\u00d1\u0082", "\u00d0\u00ba\u00d0\u00be\u00d0\u00bc\u00d0\u00b8\u00d1\u0082&shy;\u00d0\u00bc\u00d0\u00b5\u00d0\u00bd\u00d1\u0082", "\u00d0\u00b8\u00d0\u00bd\u00d0\u00b8\u00d1\u0088\u00d0\u00b8&shy;\u00d0\u00b0\u00d1\u0082\u00d0\u00b8\u00d0\u00b2", "\u00d0\u00ba\u00d0\u00be\u00d0\u00bc\u00d0\u00bf\u00d0\u00bb\u00d0\u00b5\u00d0\u00ba&shy;\u00d1\u0081\u00d0\u00b8\u00d1\u0082\u00d0\u00b8", "\u00d1\u0084\u00d0\u00b0\u00d0\u00ba\u00d0\u00b0\u00d0\u00bf", "\u00d0\u00ba\u00d0\u00b8 \u00d0\u00be\u00d0\u00b1\u00d0\u00b6\u00d0\u00b5\u00d0\u00ba\u00d1\u0082\u00d0\u00b8\u00d0\u00b2", "\u00d0\u00bf\u00d1\u0080\u00d0\u00b0\u00d0\u00b9\u00d0\u00be&shy;\u00d1\u0080\u00d0\u00b8\u00d1\u0082\u00d0\u00b8", "\u00d1\u0081\u00d0\u00b8\u00d0\u00bd\u00d0\u00b5\u00d1\u0080\u00d0\u00b4\u00d0\u00b6\u00d0\u00b8", "\u00d1\u0084\u00d0\u00b0\u00d0\u00b9\u00d0\u00bd", "\u00d1\u008d\u00d0\u00ba\u00d0\u00b7\u00d0\u00b5\u00d0\u00ba\u00d1\u008c&shy;\u00d1\u008e\u00d1\u0088\u00d0\u00b5\u00d0\u00bd", "\u00d1\u0081\u00d0\u00ba\u00d0\u00be\u00d1\u0083\u00d0\u00bf", "\u00d1\u008d\u00d0\u00ba\u00d1\u0088\u00d0\u00bd \u00d0\u00bf\u00d0\u00bb\u00d0\u00b0\u00d0\u00bd", "\u00d0\u00bf\u00d0\u00b5\u00d1\u0080\u00d1\u0084\u00d0\u00be\u00d1\u0080&shy;\u00d0\u00bc\u00d0\u00b0\u00d0\u00bd\u00d1\u0081", "\u00d0\u00b8\u00d0\u00bd\u00d0\u00bf\u00d1\u0083\u00d1\u0082", "\u00d0\u00ba\u00d0\u00b0\u00d0\u00bf\u00d1\u008d\u00d1\u0081\u00d0\u00b8\u00d1\u0082\u00d0\u00b8", "\u00d0\u00bc\u00d0\u00b8\u00d1\u0082\u00d0\u00b8\u00d0\u00bd\u00d0\u00b3", "\u00d0\u00b8\u00d1\u0088\u00d1\u008c\u00d1\u008e", "\u00d0\u00bc\u00d0\u00b0\u00d1\u0080\u00d0\u00b4\u00d0\u00b6\u00d0\u00b8\u00d0\u00bd", "\u00d0\u00ba\u00d1\u008d\u00d1\u0088 \u00d1\u0084\u00d0\u00bb\u00d0\u00be\u00d1\u0083", "\u00d0\u00be\u00d0\u00bf\u00d0\u00bf\u00d0\u00be\u00d1\u0080\u00d1\u0082\u00d1\u008e&shy;\u00d0\u00bd\u00d0\u00b8\u00d1\u0082\u00d0\u00b8", "\u00d1\u0081\u00d0\u00be\u00d1\u0083 \u00d0\u00b2\u00d0\u00be\u00d1\u0082?", "\u00d1\u0081\u00d0\u00ba\u00d0\u00b5\u00d0\u00b9\u00d0\u00bb", "\u00d0\u00ba\u00d0\u00be\u00d0\u00bd\u00d1\u0084\u00d0\u00b5&shy;\u00d1\u0080\u00d0\u00b5\u00d0\u00bd\u00d1\u0086 \u00d0\u00ba\u00d0\u00be\u00d0\u00bb", "\u00d0\u00bf\u00d1\u0080\u00d0\u00b0\u00d0\u00b9\u00d0\u00bc\u00d0\u00b0\u00d1\u0080\u00d0\u00b8 \u00d1\u0084\u00d0\u00be\u00d0\u00ba\u00d1\u0083\u00d1\u0081", "\u00d0\u00bc\u00d0\u00b0\u00d0\u00bb\u00d1\u0082\u00d0\u00b8\u00d0\u00bf\u00d0\u00bb\u00d1\u0081"]}, description: {ru: "\u00d0\u0092\u00d1\u008b \u00d0\u00b2\u00d1\u0081\u00d1\u0091 \u00d0\u00b5\u00d1\u0089\u00d1\u0091 \u00d1\u0081\u00d0\u00bf\u00d0\u00b8\u00d1\u0082\u00d0\u00b5 \u00d0\u00bd\u00d0\u00b0 \u00d0\u00b2\u00d1\u0081\u00d1\u0082\u00d1\u0080\u00d0\u00b5\u00d1\u0087\u00d0\u00b0\u00d1\u0085? \u00d0\u0090 \u00d0\u00ba\u00d0\u00b0\u00d0\u00ba \u00d0\u00bd\u00d0\u00b0\u00d1\u0081\u00d1\u0087\u00d1\u0091\u00d1\u0082 \u00d1\u008d\u00d1\u0082\u00d0\u00b8\u00d1\u0085 \u00d0\u00b4\u00d0\u00bb\u00d0\u00b8\u00d0\u00bd\u00d0\u00bd\u00d1\u008b\u00d1\u0085 \u00d0\u00ba\u00d0\u00be\u00d0\u00bd\u00d1\u0084\u00d0\u00b5\u00d1\u0080\u00d0\u00b5\u00d0\u00bd\u00d1\u0081-\u00d0\u00ba\u00d0\u00be\u00d0\u00bb\u00d0\u00bb\u00d0\u00be\u00d0\u00b2? \u00d0\u0092\u00d0\u00be\u00d1\u0082 \u00d0\u00bf\u00d1\u0083\u00d1\u0082\u00d1\u008c, \u00d0\u00ba\u00d0\u00be\u00d1\u0082\u00d0\u00be\u00d1\u0080\u00d1\u008b\u00d0\u00b9 \u00d0\u00bf\u00d0\u00be\u00d0\u00bc\u00d0\u00be\u00d0\u00b6\u00d0\u00b5\u00d1\u0082 \u00d0\u00b2\u00d0\u00b0\u00d0\u00bc \u00d0\u00b2\u00d1\u0081\u00d1\u0091 \u00d0\u00b8\u00d0\u00b7\u00d0\u00bc\u00d0\u00b5\u00d0\u00bd\u00d0\u00b8\u00d1\u0082\u00d1\u008c! <br><br> \u00d0\u009a\u00d0\u00b0\u00d0\u00ba \u00d0\u00b8\u00d0\u00b3\u00d1\u0080\u00d0\u00b0\u00d1\u0082\u00d1\u008c: \u00d0\u00be\u00d1\u0082\u00d0\u00bc\u00d0\u00b5\u00d1\u0087\u00d0\u00b0\u00d0\u00b9\u00d1\u0082\u00d0\u00b5 \u00d1\u0081\u00d0\u00be\u00d0\u00be\u00d1\u0082\u00d0\u00b2\u00d0\u00b5\u00d1\u0082\u00d1\u0081\u00d1\u0082\u00d0\u00b2\u00d1\u0083\u00d1\u008e\u00d1\u0089\u00d1\u0083\u00d1\u008e \u00d0\u00ba\u00d0\u00bb\u00d0\u00b5\u00d1\u0082\u00d0\u00ba\u00d1\u0083, \u00d0\u00ba\u00d0\u00be\u00d0\u00b3\u00d0\u00b4\u00d0\u00b0 \u00d0\u00b2\u00d1\u008b \u00d1\u0081\u00d0\u00bb\u00d1\u008b\u00d1\u0088\u00d0\u00b8\u00d1\u0082\u00d0\u00b5 \u00d0\u00be\u00d0\u00b4\u00d0\u00bd\u00d0\u00be \u00d0\u00b8\u00d0\u00b7 \u00d1\u008d\u00d1\u0082\u00d0\u00b8\u00d1\u0085 \u00d1\u0081\u00d0\u00bb\u00d0\u00be\u00d0\u00b2 \u00d0\u00bd\u00d0\u00b0 \u00d0\u00b2\u00d1\u0081\u00d1\u0082\u00d1\u0080\u00d0\u00b5\u00d1\u0087\u00d0\u00b5, \u00d0\u00ba\u00d0\u00be\u00d0\u00bd\u00d1\u0084\u00d0\u00b5\u00d1\u0080\u00d0\u00b5\u00d0\u00bd\u00d1\u0081-\u00d0\u00ba\u00d0\u00be\u00d0\u00bb\u00d0\u00bb\u00d0\u00b5 \u00d0\u00b8\u00d0\u00bb\u00d0\u00b8 \u00d1\u0082\u00d1\u0080\u00d0\u00b5\u00d0\u00bd\u00d0\u00bd\u00d0\u00b8\u00d0\u00bd\u00d0\u00b3\u00d0\u00b5. \u00d0\u009a\u00d0\u00be\u00d0\u00b3\u00d0\u00b4\u00d0\u00b0 \u00d0\u00b2\u00d1\u008b \u00d1\u0081\u00d0\u00be\u00d1\u0081\u00d1\u0082\u00d0\u00b0\u00d0\u00b2\u00d0\u00b8\u00d1\u0082\u00d0\u00b5 \u00d0\u00bf\u00d1\u008f\u00d1\u0082\u00d1\u008c \u00d0\u00ba\u00d0\u00bb\u00d0\u00b5\u00d1\u0082\u00d0\u00be\u00d0\u00ba \u00d0\u00bf\u00d0\u00be \u00d0\u00b3\u00d0\u00be\u00d1\u0080\u00d0\u00b8\u00d0\u00b7\u00d0\u00be\u00d0\u00bd\u00d1\u0082\u00d0\u00b0\u00d0\u00bb\u00d0\u00b8, \u00d0\u00b2\u00d0\u00b5\u00d1\u0080\u00d1\u0082\u00d0\u00b8\u00d0\u00ba\u00d0\u00b0\u00d0\u00bb\u00d0\u00b8 \u00d0\u00b8\u00d0\u00bb\u00d0\u00b8 \u00d0\u00b4\u00d0\u00b8\u00d0\u00b0\u00d0\u00b3\u00d0\u00be\u00d0\u00bd\u00d0\u00b0\u00d0\u00bb\u00d0\u00b8, \u00d0\u00b2\u00d1\u0081\u00d1\u0082\u00d0\u00b0\u00d0\u00bd\u00d1\u008c\u00d1\u0082\u00d0\u00b5 \u00d0\u00b8 \u00d0\u00ba\u00d1\u0080\u00d0\u00b8\u00d0\u00ba\u00d0\u00bd\u00d0\u00b8\u00d1\u0082\u00d0\u00b5: BULLSHIT \u00d0\u0091\u00d0\u00b8\u00d0\u00bd\u00d0\u00b3\u00d0\u00be! <br><br> \u00d0\u009a\u00d1\u0082\u00d0\u00be \u00d0\u00bf\u00d0\u00b5\u00d1\u0080\u00d0\u00b2\u00d1\u008b\u00d0\u00b9 \u00d0\u00ba\u00d1\u0080\u00d0\u00b8\u00d0\u00ba\u00d0\u00bd\u00d1\u0083\u00d0\u00bb, \u00d1\u0082\u00d0\u00be\u00d1\u0082 \u00d0\u00b8 \u00d0\u00bf\u00d0\u00be\u00d0\u00b1\u00d0\u00b5\u00d0\u00b4\u00d0\u00b8\u00d0\u00bb."}};
})(window);
