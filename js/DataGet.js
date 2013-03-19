/**
 * Created with JetBrains WebStorm.
 * User: I068959
 * Date: 3/19/13
 * Time: 1:04 PM
 * To change this template use File | Settings | File Templates.
 */

var format = {'其他类型':[],
    '地图':[],
    '堆栈图':[],
    '平行坐标轴':[],
    '折线图':[],
    '散点图':[],
    '数据表':[],
    '时间轴':[],
    '标签云':[],
    '树':[],
    '气泡图':[],
    '流程图':[],
    '热力图':[],
    '矩阵图':[],
    '网络图':[],
    '雷达图':[]
}
format['其他类型'] = [];
var tech = {'C/C++':[],
    'Flash':[],
    'Google Map API':[],
    'HTML5 Canvas':[],
    'Java':[],
    'JavaScript':[],
    'Processing':[],
    'SVG':[],
    '其他技术':[]
}
tech['其他技术'] = [];

var posts = [];
posts[0] = ['Fathom Information Design', 'http://datavlab.org/wp-content/uploads/2013/03/QQ截图20130303144304.png', '/?p=3611', '气泡图'];
posts[1] = ['Plot Lines - 漂亮的小说标签可视化', 'http://datavlab.org/wp-content/uploads/2013/03/Plot-lines.jpg', '/?p=3603', '可视化案例'];
posts[2] = ['GE能源与医疗可视化', 'http://datavlab.org/wp-content/uploads/2013/03/VizInsight2012_0215_003.png', '/?p=3570', 'Processing	其他类型	可视化展现类型'];
posts[3] = ['实时Twitter可视化', 'http://datavlab.org/wp-content/uploads/2013/03/QQ截图20130302091559.jpg', '/?p=3575', 'HTML5 Canvas	可视化案例	地图	散点图'];
posts[4] = ['OrgOrgChart', 'http://datavlab.org/wp-content/uploads/2013/03/OrgOrg2.png', '/?p=3560', '可视化案例	网络图'];
posts[5] = ['热力图可视化案例', 'http://datavlab.org/wp-content/uploads/2013/03/QQ截图20130302084506.jpg', '/?p=3556', 'HTML5 Canvas	可视化案例	热力图'];
posts[6] = ['Bubble Set多元关系可视化', 'http://datavlab.org/wp-content/uploads/2012/05/2.jpg', '/?p=3326', 'Java	其他技术	地图	散点图	气泡图'];
posts[7] = ['欧元危机-纸币危机的多米诺骨牌', 'http://datavlab.org/wp-content/uploads/2012/05/11.jpg', '/?p=3304', '其他技术	可视化展现类型	可视化技术	可视化案例	流程图'];
posts[8] = ['TextFlow：分析文本的主题演化', 'http://datavlab.org/wp-content/uploads/2012/05/1.jpg', '/?p=3203', '其他技术	其他类型	可视化展现类型	可视化案例	流程图'];
posts[9] = ['流场可视化相关案例', 'http://datavlab.org/wp-content/uploads/2012/05/未命名2.png', '/?p=3198', 'HTML5 Canvas	JavaScript	其他技术	可视化展现类型	可视化技术	可视化案例	地图	杂谈集'];
posts[10] = ['动态图标技术(DICON): 一种全新的可视化方式进行多维数据的聚类分析', 'http://datavlab.org/wp-content/uploads/2012/04/dicon2.png', '/?p=3109', 'Java	可视化展现类型	可视化技术	可视化案例	气泡图'];
posts[11] = ['重返泰坦尼克', 'http://datavlab.org/wp-content/uploads/2012/04/VizInsight2012_0405_003.jpg', '/?p=3085', '其他技术	其他类型	可视化展现类型	可视化技术	可视化案例'];
posts[12] = ['浙大CAD&CG可视化与可视分析小组成果介绍', 'http://datavlab.org/wp-content/uploads/2012/03/52.png', '/?p=2946', '其他技术	原创作品	可视化展现类型	可视化技术	可视化案例	可视化项目	矩阵图	网络图'];
posts[13] = ['Visual Shakespeare - 可视化莎士比亚的37部剧本', 'http://datavlab.org/wp-content/uploads/2012/03/shakespeare1.png', '/?p=2917', '其他技术	其他类型	可视化展现类型	可视化技术	可视化案例'];
posts[14] = ['Stephen Wolfram的个人数据可视分析', 'http://datavlab.org/wp-content/uploads/2012/03/VizInsight_2012_0313_001.png', '/?p=2832', '其他技术	可视化展现类型	可视化技术	可视化案例	堆栈图	折线图	散点图'];
posts[15] = ['Heatmap，热图的应用和相关技术', 'http://datavlab.org/wp-content/uploads/2012/03/11.jpg', '/?p=2754', '可视化展现类型	可视化技术	可视化案例	杂谈集	热力图'];
posts[16] = ['Feltron的个人年度报告', 'http://datavlab.org/wp-content/uploads/2012/03/2012-03-13_0411.png', '/?p=2626', 'Processing	可视化展现类型	可视化技术	可视化案例	地图	折线图'];
posts[17] = ['三维空间坐标的可视化案例', 'http://datavlab.org/wp-content/uploads/2012/03/info.png', '/?p=2478', '其他技术	其他类型	原创作品	可视化展现类型	可视化技术	可视化案例	技术心得	杂谈集'];
posts[18] = ['Seesoft - 超酷的代码可视化工具', 'http://datavlab.org/wp-content/uploads/2012/03/datav_seesoft.png', '/?p=2467', 'C/C++	Java	可视化展现类型	可视化技术	可视化案例	数据表'];
posts[19] = ['PKUVIS微博可视分析工具', 'http://datavlab.org/wp-content/uploads/2012/03/北大围脖1.jpg', '/?p=2093', 'JavaScript	原创作品	可视化展现类型	可视化技术	可视化案例	可视化项目	时间轴	标签云	树'];
posts[20] = ['川流城市', 'http://datavlab.org/wp-content/uploads/2012/03/VizInsight2012_0228_004_small.jpg', '/?p=2440', 'JavaScript	可视化展现类型	可视化技术	可视化案例	地图'];
posts[21] = ['好莱坞电影大比拼', 'http://datavlab.org/wp-content/uploads/2012/02/hollywood1.png', '/?p=2095', 'Processing	其他类型	可视化展现类型	可视化技术	可视化案例'];
posts[22] = ['tweets声响遍世界', 'http://datavlab.org/wp-content/uploads/2012/02/4501.png', '/?p=2083', 'HTML5 Canvas	其他技术	可视化展现类型	可视化技术	可视化案例	地图	热力图'];
posts[23] = ['古刹灵隐的可视化', 'http://datavlab.org/wp-content/uploads/2012/02/450-SAM_5420.jpg', '/?p=2021', '其他技术	可视化展现类型	可视化技术	可视化案例	热力图'];
posts[24] = ['生活灿烂如花', 'http://datavlab.org/wp-content/uploads/2012/02/450-1.jpg', '/?p=1962', 'Flash	可视化展现类型	可视化技术	可视化案例	雷达图'];
posts[25] = ['Facebook正在连接全世界', 'http://datavlab.org/wp-content/uploads/2012/02/450-Facebook-filled-625x514副本.png', '/?p=1931', '其他技术	可视化展现类型	可视化技术	可视化案例	地图'];
posts[26] = ['GE---用三次元能量环发力', 'http://datavlab.org/wp-content/uploads/2012/02/450-450.png', '/?p=1833', '其他技术	可视化展现类型	可视化技术	可视化案例	折线图'];
posts[27] = ['200年沧桑变化', 'http://datavlab.org/wp-content/uploads/2012/02/history20011.png', '/?p=1710', '其他技术	可视化展现类型	可视化技术	可视化案例	散点图'];
posts[28] = ['淘宝网全国实时交易地图', 'http://datavlab.org/wp-content/uploads/2012/02/trademap-450.jpg', '/?p=1742', 'Processing	原创作品	可视化展现类型	可视化技术	可视化案例	可视化项目	地图'];
posts[29] = ['大众科学杂志内容档案库', 'http://datavlab.org/wp-content/uploads/2012/01/F08-004.jpg', '/?p=820', 'JavaScript	SVG	可视化展现类型	可视化技术	可视化案例	矩阵图'];
posts[30] = ['占领华尔街抗议活动中的群众声音', 'http://datavlab.org/wp-content/uploads/2012/01/F08-003.jpg', '/?p=814', 'JavaScript	可视化展现类型	可视化技术	可视化案例	矩阵图'];
posts[31] = ['圣经和古兰经的对比', 'http://datavlab.org/wp-content/uploads/2012/01/F08-002.jpg', '/?p=807', 'Flash	HTML5 Canvas	JavaScript	可视化展现类型	可视化技术	可视化案例	矩阵图'];
posts[32] = ['人们正在SpringerLink上下载什么？', 'http://datavlab.org/wp-content/uploads/2012/01/F08-001.jpg', '/?p=799', 'Flash	可视化展现类型	可视化技术	可视化案例	矩阵图'];
posts[33] = ['出行新利器', 'http://datavlab.org/wp-content/uploads/2012/01/F07-004.jpg', '/?p=784', '其他技术	可视化展现类型	可视化技术	可视化案例	热力图'];
posts[34] = ['Foursquare一周', 'http://datavlab.org/wp-content/uploads/2012/01/F07-001.jpg', '/?p=768', 'Google Map API	JavaScript	可视化展现类型	可视化技术	可视化案例	地图	时间轴	热力图'];
posts[35] = ['来来来，BBC带你沿着时间轴畅游英国历史', 'http://datavlab.org/wp-content/uploads/2012/01/F06-005.jpg', '/?p=760', 'Flash	可视化展现类型	可视化技术	可视化案例	时间轴'];
posts[36] = ['荧幕上的外星人形象变化', 'http://datavlab.org/wp-content/uploads/2012/01/F06-004.jpg', '/?p=755', '其他技术	可视化展现类型	可视化技术	可视化案例	时间轴'];
posts[37] = ['基于时间轴的微博浏览方式', 'http://datavlab.org/wp-content/uploads/2012/01/F06-003.jpg', '/?p=750', 'JavaScript	可视化展现类型	可视化技术	可视化案例	时间轴'];
posts[38] = ['拿破仑与可视化', 'http://datavlab.org/wp-content/uploads/2012/01/F06-002.jpg', '/?p=744', '其他技术	可视化展现类型	可视化技术	可视化案例	时间轴'];
posts[39] = ['阿拉伯之春', 'http://datavlab.org/wp-content/uploads/2012/01/F06-001.jpg', '/?p=735', 'Flash	可视化展现类型	可视化技术	可视化案例	时间轴'];
posts[40] = ['Many Eyes标签云', 'http://datavlab.org/wp-content/uploads/2012/01/F05-003.jpg', '/?p=728', 'Java	可视化展现类型	可视化技术	可视化案例	标签云'];
posts[41] = ['常见标签云形式', 'http://datavlab.org/wp-content/uploads/2012/01/F05-002.jpg', '/?p=721', 'Flash	可视化展现类型	可视化技术	可视化案例	标签云'];
posts[42] = ['标签云利器-Wordle介绍', 'http://datavlab.org/wp-content/uploads/2012/01/F05-001.jpg', '/?p=716', 'Java	可视化展现类型	可视化技术	可视化案例	标签云'];
posts[43] = ['各种病痛的关联', 'http://datavlab.org/wp-content/uploads/2012/01/F04-008.jpg', '/?p=710', 'Flash	可视化展现类型	可视化技术	可视化案例	气泡图	网络图'];
posts[44] = ['德国各个政党获取捐赠来源', 'http://datavlab.org/wp-content/uploads/2012/01/F04-007.jpg', '/?p=702', 'Flash	可视化展现类型	可视化技术	可视化案例	网络图'];
posts[45] = ['圣经各个篇章的相互引用', 'http://datavlab.org/wp-content/uploads/2012/01/F04-006.jpg', '/?p=696', '其他技术	可视化展现类型	可视化技术	可视化案例	网络图'];
posts[46] = ['透视美国国会', 'http://datavlab.org/wp-content/uploads/2012/01/F04-005.jpg', '/?p=690', 'HTML5 Canvas	JavaScript	可视化展现类型	可视化技术	可视化案例	散点图	网络图'];
posts[47] = ['你的GOOGLE+关系网', 'http://datavlab.org/wp-content/uploads/2012/01/F04-004.jpg', '/?p=681', 'HTML5 Canvas	可视化展现类型	可视化技术	可视化案例	网络图'];
posts[48] = ['the Data Insight 2011比赛中的社交图谱', 'http://datavlab.org/wp-content/uploads/2012/01/F04-003.jpg', '/?p=674', '其他技术	可视化展现类型	可视化技术	可视化案例	网络图'];
posts[49] = ['一个单词的家境、家史和家谱', 'http://datavlab.org/wp-content/uploads/2012/01/F04-002.jpg', '/?p=667', 'HTML5 Canvas	JavaScript	可视化展现类型	可视化技术	可视化案例	网络图'];
posts[50] = ['来一场音乐的旅行吧~', 'http://datavlab.org/wp-content/uploads/2012/01/F04-001.jpg', '/?p=662', 'HTML5 Canvas	JavaScript	可视化展现类型	可视化技术	可视化案例	时间轴	流程图	网络图'];
posts[51] = ['去哪炒房？', 'http://datavlab.org/wp-content/uploads/2012/01/F03-007.jpg', '/?p=655', 'JavaScript	可视化展现类型	可视化技术	可视化案例	地图	时间轴'];
posts[52] = ['地裂核崩？不怕！他们有推特！', 'http://datavlab.org/wp-content/uploads/2012/01/F03-006.jpg', '/?p=648', '其他技术	可视化展现类型	可视化技术	可视化案例	地图	网络图'];
posts[53] = ['美国婴儿潮', 'http://datavlab.org/wp-content/uploads/2012/01/F03-005.jpg', '/?p=640', 'Flash	可视化展现类型	可视化技术	可视化案例	地图	时间轴'];
posts[54] = ['70亿人口是什么样子的？', 'http://datavlab.org/wp-content/uploads/2012/01/F03-004.jpg', '/?p=633', '其他技术	可视化展现类型	可视化技术	可视化案例	地图'];
posts[55] = ['东京地铁站变身~~2007网站趋势地图', 'http://datavlab.org/wp-content/uploads/2012/01/F03-003.jpg', '/?p=628', '其他技术	可视化展现类型	可视化技术	可视化案例	地图'];
posts[56] = ['看，灰机灰过去了！', 'http://datavlab.org/wp-content/uploads/2012/01/F03-0021.jpg', '/?p=621', 'Google Map API	HTML5 Canvas	JavaScript	可视化展现类型	可视化技术	可视化案例	地图'];
posts[57] = ['Nike-Plus 跑动全城', 'http://datavlab.org/wp-content/uploads/2012/01/F03-001.jpg', '/?p=611', 'Processing	可视化展现类型	可视化技术	可视化案例	地图'];
posts[58] = ['从前有个大泡泡，里面有些小泡泡，小泡泡里面又有小小泡泡...', 'http://datavlab.org/wp-content/uploads/2012/01/F02-007.jpg', '/?p=602', 'SVG	可视化展现类型	可视化技术	可视化案例	树	气泡图'];
posts[59] = ['文件夹里的小秘密', 'http://datavlab.org/wp-content/uploads/2012/01/F02-006.jpg', '/?p=594', 'Flash	可视化展现类型	可视化技术	可视化案例	树'];


//from posts get cases and category them
var curTab = 1;

var cases = [];
//for(var i=posts.length-1;i>=0;i--){
for (var i = 0; i < posts.length; i++) {
    var p = posts[i];
    cases[i] = {};
    cases[i]['title'] = p[0];
    cases[i]['imgURL'] = p[1];
    cases[i]['postURL'] = p[2];
    cases[i]['format'] = [];
    cases[i]['tech'] = [];
    cases[i]['img'] = undefined;
    cases[i]['imgState'] = 'unloaded';//'loaded','loading'

    //
    var formatFlag = 0;
    var techFlag = 0;
    var tags = p[3].split('\t');
    for (var j = tags.length - 1; j >= 0; j--) {
        var tag = tags[j];
        if (typeof(format[tag]) !== 'undefined') {
            //group
            var ft = format[tag];
            ft[ft.length] = i;
            //case
            cases[i]['format'][cases[i]['format'].length] = tag;
            //flag
            formatFlag = 1;
        }
        if (typeof(tech[tag]) !== 'undefined') {
            //group
            var tt = tech[tag];
            tt[tt.length] = i;
            //case
            cases[i]['tech'][cases[i]['tech'].length] = tag;
            //flag
            techFlag = 1;
        }
    }
    if (formatFlag === 0) {
        format['其他类型'][format['其他类型'].length] = i;
        cases[i]['format'][cases[i]['format'].length] = '其他类型';
    }
    if (techFlag === 0) {
        tech['其他技术'][tech['其他技术'].length] = i;
        cases[i]['tech'][cases[i]['tech'].length] = '其他技术';
    }
}

//clear zero group
var formatArray = [];
for (var f in format) {
    if (format[f].length > 0) {
        formatArray[formatArray.length] = [f, format[f]];
    }
}
var techArray = [];
for (var t in tech) {
    if (tech[t].length > 0) {
        techArray[techArray.length] = [t, tech[t]];
    }
}


// sort
function sortByLength(a, b) {
    al = a[1].length;
    bl = b[1].length;
    if (al === bl) {
        return 0;
    }
    return al > bl ? -1 : 1;
}
formatArray.sort(sortByLength);
techArray.sort(sortByLength);

//
formatLoc = {};
/*
 for(var i=formatArray.length-1; i>=0; i--){
 formatLoc[formatArray[i][0]]=i;
 }
 */
techLoc = {};
/*
 for(var i=techArray.length-1; i>=0; i--){
 techLoc[techArray[i][0]]=i;
 }
 */
///////////////////////////////////////////////////////////// data completed ///


///////////////////////////////////////////////////////////////

//var largeImage;
var smallHeight = 60;
var largeHeight = 180;
var imageBorderWidth = 2;
var rollTopHeightOrigin = 30;
var rollBottomHeightOrigin = 30;
var rollTopHeight;
var rollBottomHeight;
var formatHeight = 55;
var formatWordCenterToTop = 11;
//var formatBorderWidth=1;
var techHeight = 55;
var techWordCenterToTop = 11;
//var techBorderWidth=1;

var smallImageDivHeight = smallHeight + imageBorderWidth * 2;
var largeImageDivHeight = largeHeight + imageBorderWidth * 2;

var imageContainerHeight;
var topMax;


var rollTopActive = false;
var rollTopActivating = false;
var rollBottomActive = false;
var rollBottomActivating = false;

var timeInterval = 50;
var hSlide = 4;//int

var mouse = {x:0, y:0};

var imgChange1;
var imgChange2;

var imageContainer = document.getElementById("imageContainer");
var allImage = document.getElementById("allImage"); //document.getElementById("allImage");


//refresh when set new category
var leftBoxY;
var rightBoxY;
var leftBoxPYArray;//the left button point y of every image div
var rightBoxPYArray;

var leftToImage;//idx
var imageToLeft;//idx
var imageToRight;//idx
var rightToImage;//idx


//refresh when hover buttons
var rightBoxHoverIdx;
var leftBoxHoverIdx;
//var imageDivPYArray;//the center point y of every related image div

//refresh when hover images
var hoverImageIdx;

//position of every img
var imgPos = [];


var side = "left";
var sideIdx = 0;

var count = 5;
var showCount;

var refreshIntervalId;
var choosedButton;

var canvasSupported = false;
var leftCanvas;
var lctx;
var rightCanvas;
var rctx;


window.onload = eventWindowLoaded;
function eventWindowLoaded() {
    startApp();
}

function canvasSupport() {
    return Modernizr.canvas;
}

function startApp() {
    if (canvasSupport()) {
        canvasSupported = true;
        leftCanvas = document.getElementById("leftCanvas");
        lctx = leftCanvas.getContext("2d");
        rightCanvas = document.getElementById("rightCanvas");
        rctx = rightCanvas.getContext("2d");
    }

    initialHeight();
    createFormatAndTech();
    choosedButton = document.getElementById("format0");
    choosedButton.className = 'formatClick';
    getNewImages(sideIdx);
    var appBox = document.getElementById("appBox");
    appBox.style.visibility = "visible";
}

function initialHeight() {
    var fHeightSum = formatArray.length * formatHeight;
    var tHeightSum = techArray.length * techHeight;
    var h = Math.max(fHeightSum, tHeightSum);
    showCount = Math.floor((h - rollTopHeightOrigin - rollBottomHeightOrigin - largeHeight + smallHeight) / (smallHeight + 2 * imageBorderWidth));
    h = showCount * (smallHeight + 2 * imageBorderWidth) + largeHeight - smallHeight + rollTopHeightOrigin + rollBottomHeightOrigin;
    /*
     formatHeight=h/formatArray.length-2*formatBorderWidth;
     techHeight=h/techArray.length-2*techBorderWidth;
     */

    imageContainerHeight = showCount * (smallHeight + 2 * imageBorderWidth) + (largeHeight - smallHeight);
    imageContainer.style.minHeight = imageContainerHeight + 'px';
    imageContainer.style.maxHeight = imageContainerHeight + 'px';

    var rollTop = document.getElementById("rollTop");
    rollTop.style.height = rollTopHeightOrigin + 'px';
    var rollBottom = document.getElementById("rollBottom");
    rollBottom.style.height = rollBottomHeightOrigin + 'px';

    var leftBox = document.getElementById("leftBox");
    var rightBox = document.getElementById("rightBox");
    var leftCanvasBox = document.getElementById("leftCanvasBox");
    var rightCanvasBox = document.getElementById("rightCanvasBox");

    var appHeight = imageContainerHeight + rollTopHeightOrigin + rollBottomHeightOrigin;
    leftBox.style.height = appHeight + 'px';
    rightBox.style.height = appHeight + 'px';
    leftCanvasBox.style.height = appHeight + 'px';
    rightCanvasBox.style.height = appHeight + 'px';
    if (canvasSupported) {
        lctx.canvas.height = appHeight;
        rctx.canvas.height = appHeight;
    }

    for (var i = formatArray.length - 1; i >= 0; i--) {
        formatLoc[formatArray[i][0]] = i * formatHeight + formatWordCenterToTop;
    }
    for (var i = techArray.length - 1; i >= 0; i--) {
        techLoc[techArray[i][0]] = i * techHeight + techWordCenterToTop;
    }

}
//format and tech buttons
function createFormatAndTech() {
    //format
    for (var i = 0; i < formatArray.length; i++) {
        var f = document.createElement("div");
        f.id = 'format' + i;
        //f.style.height=formatHeight+'px';
        f.className = "format";
        f.innerHTML = formatArray[i][0];

        var leftBox = document.getElementById("leftBox");
        leftBox.appendChild(f);


        f.onclick = function () {
            if (typeof(choosedButton) !== 'undefined') {
                if (side === 'left') {
                    choosedButton.className = 'format';
                } else {
                    choosedButton.className = 'tech';
                }
                choosedButton = this;
            }
            this.className = 'formatClick';

            sideIdx = parseInt(this.id.substring(6, this.id.length), 10);
            side = 'left';
            getNewImages(sideIdx);
        }
        f.onmouseover = function () {
            var idx = parseInt(this.id.substring(6, this.id.length), 10);
            leftBoxHoverIdx = idx;
        }
        f.onmouseout = function () {
            leftBoxHoverIdx = undefined;
        }
    }
    //tech
    for (var i = 0; i < techArray.length; i++) {
        var t = document.createElement("div");
        t.id = 'tech' + i;
        //t.style.height=techHeight+'px';
        t.className = "tech";
        t.innerHTML = techArray[i][0];

        var rightBox = document.getElementById("rightBox");
        rightBox.appendChild(t);

        t.onclick = function () {
            if (typeof(choosedButton) !== 'undefined') {
                if (side === 'left') {
                    choosedButton.className = 'format';
                } else {
                    choosedButton.className = 'tech';
                }
                choosedButton = this;
            }
            this.className = 'techClick';

            sideIdx = parseInt(this.id.substring(4, this.id.length), 10);
            side = 'right';
            getNewImages(sideIdx);
        }
        t.onmouseover = function () {
            var idx = parseInt(this.id.substring(4, this.id.length), 10);
            rightBoxHoverIdx = idx;
        }
        t.onmouseout = function () {
            rightBoxHoverIdx = undefined;
        }
    }
}

function getNewImages(idx) {
    if (typeof("refreshIntervalId") !== 'undefined') {
        clearInterval(refreshIntervalId);
    }
    mouse.y = 0;

    var arr;
    if (side === 'left') {
        var arr = formatArray;
        count = formatArray[idx][1].length;
        leftBoxY = idx * formatHeight + formatWordCenterToTop;
        rightBoxY = undefined;
    } else {
        var arr = techArray;
        count = techArray[idx][1].length;
        leftBoxY = undefined;
        rightBoxY = idx * techHeight + techWordCenterToTop;
    }


    topMax = count * (smallHeight + 2 * imageBorderWidth) + (largeHeight - smallHeight) - (showCount * (smallHeight + 2 * imageBorderWidth) + (largeHeight - smallHeight));

    setOpacity("rollTop", 0);
    if (topMax > 0) {
        setOpacity("rollBottom", 1);
    } else {
        setOpacity("rollBottom", 0);
    }

    allImage.style.marginTop = "0px";
    if (topMax >= 0) {
        var rollTop = document.getElementById("rollTop");
        rollTopHeight = rollTopHeightOrigin;
        rollTop.style.height = rollTopHeight + 'px';

        var rollBottom = document.getElementById("rollBottom");
        rollBottomHeight = rollBottomHeightOrigin;
        rollBottom.style.height = rollBottomHeight + 'px';

        imageContainerHeight = showCount * (smallHeight + 2 * imageBorderWidth) + (largeHeight - smallHeight);
        imageContainer.style.minHeight = imageContainerHeight + 'px';
        imageContainer.style.maxHeight = imageContainerHeight + 'px';
    } else {
        var rollTop = document.getElementById("rollTop");
        rollTopHeight = rollTopHeightOrigin + (-topMax / 2);
        rollTop.style.height = rollTopHeight + 'px';

        var rollBottom = document.getElementById("rollBottom");
        rollBottomHeight = rollBottomHeightOrigin + (-topMax / 2);
        rollBottom.style.height = rollBottomHeight + 'px';

        imageContainerHeight = count * (smallHeight + 2 * imageBorderWidth) + (largeHeight - smallHeight);
        imageContainer.style.minHeight = imageContainerHeight + 'px';
        imageContainer.style.maxHeight = imageContainerHeight + 'px';

        //allImage.style.marginTop=-topMax/2+"px";
    }

    /*
     cases[i]['title']=p[0];
     cases[i]['imgURL']=p[1];
     cases[i]['postURL']=p[2];
     cases[i]['format']=[];
     cases[i]['tech']=[];
     cases[i]['img']=undefined;
     cases[i]['imgState']='unloaded';//'loaded','loading'
     */

    /*
     //refresh when set new category
     var leftBoxY;
     var rightBoxY;
     var leftBoxPYArray;//the left button point y of every image div
     var rightBoxPYArray;

     //refresh when hover buttons
     var rightBoxHoverY;
     var leftBoxHoverY;
     var imageDivPYArray;//the center point y of every related image div

     //refresh when hover images
     var hoverImageIdx;
     */

    hoverImageIdx = undefined;

    rightBoxPYArray = [];
    leftBoxPYArray = [];

    leftToImage = [];
    rightToImage = [];
    imageToLeft = [];
    imageToRight = [];
    for (var i = formatArray.length - 1; i >= 0; i--) {
        leftToImage[i] = [];
    }
    for (var i = techArray.length - 1; i >= 0; i--) {
        rightToImage[i] = [];
    }

    allImage.innerHTML = "";
    for (var i = 0; i < count; i++) {
        var vCase = cases[arr[idx][1][i]];

        imageToLeft[i] = [];
        imageToRight[i] = [];
        var locs = [];
        for (var j = vCase.format.length - 1; j >= 0; j--) {
            locs[j] = formatLoc[vCase.format[j]];

            var idxl = Math.round((locs[j] - formatWordCenterToTop) / formatHeight);
            leftToImage[idxl][leftToImage[idxl].length] = i;
            imageToLeft[i][imageToLeft[i].length] = idxl;

        }
        leftBoxPYArray[i] = locs;
        locs = [];
        for (var j = vCase.tech.length - 1; j >= 0; j--) {
            locs[j] = techLoc[vCase.tech[j]];

            var idxr = Math.round((locs[j] - techWordCenterToTop) / techHeight);
            rightToImage[idxr][rightToImage[idxr].length] = i;
            imageToRight[i][imageToRight[i].length] = idxr;

        }
        rightBoxPYArray[i] = locs;


        var alink = document.createElement("a");
        alink.href = vCase.postURL;

        var image = document.createElement("div");
        image.id = 'image' + i;

        var imageTitle = document.createElement("div");
        imageTitle.innerHTML = vCase.title;
        //imageTitle.style.font="#4d4c66 14px 微软雅黑,Arial";
        imageTitle.className = "imageTitle";
        imageTitle.style.width = "200px";
        imageTitle.style.paddingBottom = "3px";
        imageTitle.style.marginLeft = "-210px";
        imageTitle.style.paddingLeft = "2px";
        image.onmouseover = function () {
            var w = parseInt(this.style.width, 10);
            this.style.width = w - 4 + "px";
            this.style.borderLeft = "2px solid";
            this.style.borderRight = "2px solid";
            this.style.borderColor = "#FF5A95";


            hoverImageIdx = parseInt(this.id.substring(5, this.id.length), 10);
            $(this).children().stop().animate({marginLeft:'0px'}, 200);
            // link
            var tempArr = imageToLeft[hoverImageIdx];
            for (var j = 0; j < tempArr.length; j++) {
                if (!(side === "left" && tempArr[j] === sideIdx)) {
                    var Button = document.getElementById("format" + tempArr[j]);
                    Button.className = "formatLink";
                }
            }
            tempArr = imageToRight[hoverImageIdx];
            for (var j = 0; j < tempArr.length; j++) {
                if (!(side === 'right' && tempArr[j] === sideIdx)) {
                    var Button = document.getElementById("tech" + tempArr[j]);
                    Button.className = "techLink";
                }
            }
        }
        image.onmouseout = function () {
            var w = parseInt(this.style.width, 10);
            this.style.width = w + 4 + "px";
            this.style.borderLeft = "0px solid";
            this.style.borderRight = "0px solid";
            this.style.borderColor = "#FFF";


            var tempArr = imageToLeft[hoverImageIdx];
            for (var j = 0; j < tempArr.length; j++) {
                if (!(side === "left" && tempArr[j] === sideIdx)) {
                    var Button = document.getElementById("format" + tempArr[j]);
                    Button.className = "format";
                }
            }
            tempArr = imageToRight[hoverImageIdx];
            for (var j = 0; j < tempArr.length; j++) {
                if (!(side === 'right' && tempArr[j] === sideIdx)) {
                    var Button = document.getElementById("tech" + tempArr[j]);
                    Button.className = "tech";
                }
            }
            hoverImageIdx = undefined;
            $(this).children().stop().animate({marginLeft:'-210px'}, 500);
        }
        /*
         imageTitle.position="absolute";
         imageTitle.bottom="15px";
         imageTitle.right="0px";
         */

        //allImage.appendChild(image);
        allImage.appendChild(alink);
        alink.appendChild(image);
        image.appendChild(imageTitle);

        image.style.width = '450px';

        image.style.background = '#987 url(' + vCase.imgURL + ') scroll center center no-repeat';
        image.style.borderTop = imageBorderWidth + 'px solid #fff';
        image.style.borderBottom = imageBorderWidth + 'px solid #fff';
        //image.style.position="relative";
        if (i === count - 1) {
            image.style.height = largeHeight + 'px';
        } else {
            image.style.height = smallHeight + 'px';
        }
        /*
         image.onmouseover=function(){
         largeImage.style.height=smallHeight+'px';
         largeImage=this;
         largeImage.style.height=largeHeight+'px';
         }
         */


        if (topMax > 0) {
            rollTopActive = false;
            var rollTop = document.getElementById("rollTop");
            rollTop.onmouseover = function () {
                rollTopActive = true;
                topRoll();
            }
            rollTop.onmouseout = function () {
                rollTopActive = false;
            }

            rollBottomActive = false;
            var rollBottom = document.getElementById("rollBottom");
            rollBottom.onmouseover = function () {
                rollBottomActive = true;
                bottomRoll();
            }
            rollBottom.onmouseout = function () {
                rollBottomActive = false;
            }

        } else {
            rollTopActive = false;
            var rollTop = document.getElementById("rollTop");
            rollTop.onmouseover = function () {
            }
            rollTop.onmouseout = function () {
            }

            rollBottomActive = false;
            var rollBottom = document.getElementById("rollBottom");
            rollBottom.onmouseover = function () {
            }
            rollBottom.onmouseout = function () {
            }
        }
    }
    refreshIntervalId = setInterval(intervalF, timeInterval);
}

var setOpacity = (function () {
    var cssOpacitySupport = true;
    //document.getElementById("rollTop").style.opacity=0;
    var element = document.getElementById("rollTop");
    if ('opacity' in element.style) {
        element.style['opacity'] = 1;
        cssOpacitySupport = (element.style['opacity'] === '1');
    } else {
        cssOpacitySupport = false;
    }
    return function (elemId, opa) {
        if (cssOpacitySupport) {
            //document.getElementById("rollBottom").style.visibility="visible";
            //if(parseFloat(document.getElementById("rollBottom").style.opacity,10)<1){
            $("#" + elemId).animate({opacity:opa}, 450);
        } else {
            if (opa < 0.5) {
                document.getElementById(elemId).style.visibility = "hidden";
            } else {
                document.getElementById(elemId).style.visibility = "visible";
            }
        }
    }
})();


function topRoll() {
    setOpacity("rollBottom", 1);

    var allImageTop = parseInt(allImage.style.marginTop, 10);

    allImageTop += smallImageDivHeight;
    if (allImageTop > 0) {
        allImageTop = 0;
        setOpacity("rollTop", 0);
    }
    if (rollTopActivating) {
        // not make 2 animate funciton
        return;
    }
    rollTopActivating = true;
    $("#allImage").animate({marginTop:allImageTop + "px"}, 500, 'linear', function () {
        rollTopActivating = false;
        if (rollTopActive) {
            topRoll();
        }
    });

}
function bottomRoll() {
    setOpacity("rollTop", 1);

    var allImageTop = parseInt(allImage.style.marginTop, 10);

    allImageTop -= smallImageDivHeight;
    if (allImageTop < -topMax) {
        allImageTop = -topMax;
        setOpacity("rollBottom", 0);

    }
    if (rollBottomActivating) {
        // not make 2 animate funciton
        return;
    }
    rollBottomActivating = true;
    $("#allImage").animate({marginTop:allImageTop + "px"}, 500, 'linear', function () {
        rollBottomActivating = false;
        if (rollBottomActive) {
            bottomRoll();
        }
    });
}


/*
 function rollDownImage(height,interval,hInterval){
 var allImageTopDown=hInterval;
 height-=hInterval;

 //prevent (height % hInterval) !== 0
 if(height>0 && height<=hInterval){
 allImageTopDown=height+hInterval;
 height=hInterval;
 }

 if(height === 0){
 if(rollTopActive === true){
 rollDownImage(smallHeight+2*imageBorderWidth,interval,hInterval);
 return;
 }else{
 return;
 }
 }

 var allImageTop=parseInt(allImage.style.marginTop,10);
 allImageTop+=allImageTopDown;
 if(allImageTop>0){
 allImageTop=0;
 allImage.style.marginTop=allImageTop+"px";
 return;
 }

 allImage.style.marginTop=allImageTop+"px";
 setTimeout("rollDownImage("+height+","+interval+","+hInterval+")",interval);
 }

 function rollUpImage(height,interval,hInterval){
 var allImageTopDown=hInterval;
 height-=hInterval;

 //prevent (height % hInterval) !== 0
 if(height>0 && height<=hInterval){
 allImageTopDown=height+hInterval;
 height=hInterval;
 }

 if(height === 0){
 if(rollBottomActive === true){
 rollUpImage(smallHeight+2*imageBorderWidth,interval,hInterval);
 return;
 }else{
 return;
 }
 }


 var allImageTop=parseInt(allImage.style.marginTop,10);
 allImageTop-=allImageTopDown;
 if(allImageTop<-topMax){
 allImageTop=-topMax;
 allImage.style.marginTop=allImageTop+"px";
 return;
 }

 allImage.style.marginTop=allImageTop+"px";
 setTimeout("rollUpImage("+height+","+interval+","+hInterval+")",interval);
 }
 */
var allImg_offset = $('#allImage').offset();
function eventMouseMove(event) {
    event = event ? event : window.event;
    if (event.layerX || event.layerX == 0) { // Firefox
        mouse.x = event.layerX;
        mouse.y = event.layerY;
    } else if (event.offsetX !== undefined) { // IE |  Opera
        //TODO calculate Parent offerset
        var tmp = $(event.srcElement).offset();
        var allImageTop = -parseInt(allImage.style.marginTop, 10);
        mouse.x = event.offsetX + (tmp.left - allImg_offset.left);
        mouse.y = event.offsetY + (tmp.top + allImageTop - allImg_offset.top);
    }   //console.log(mouse.x);
    //console.log(mouse.y);
}
//allImage.addEventListener("mousemove",eventMouseMove, false);
//allImage.attachEvent("onmousemove",eventMouseMove);
allImage.onmousemove = eventMouseMove;
/*
 $('#allImage').bind('mousemove',function(event){
 mouse.x = event.layerX;
 mouse.y = event.layerY;
 })
 */


function updateLoc(idx, h) {
    var loc = 0;
    var allImageMarginTop = -parseInt(allImage.style.marginTop, 10);
    var showIndex, hiddenIndex;
    for (var i = 0; i < count; i++) {
        if (i < idx) {
            imgPos[i] = [loc, smallImageDivHeight, loc + smallImageDivHeight / 2];
            loc += smallImageDivHeight;
        } else if (i === idx) {
            imgPos[i] = [loc, h + 2 * imageBorderWidth, loc + h / 2 + imageBorderWidth];
            loc += h + 2 * imageBorderWidth;
            //next img
            if (h < largeHeight) {
                i += 1;
                var nextH = largeHeight + smallHeight - h + 2 * imageBorderWidth;
                imgPos[i] = [loc, nextH, loc + nextH / 2];
                loc += nextH;
            }
        } else {
            imgPos[i] = [loc, smallImageDivHeight, loc + smallImageDivHeight / 2];
            loc += smallImageDivHeight;
        }
    }
    for (var i = 0; i < count; i++) {
        if (imgPos[i][2] >= allImageMarginTop) {
            showIndex = i;
            break;
        }
    }
    hiddenIndex = count;
    for (var i = 0; i < count; i++) {
        if (imgPos[i][2] >= allImageMarginTop + imageContainerHeight) {
            hiddenIndex = i;
            break;
        }
    }
    for (var i = 0; i < count; i++) {
        if (i < showIndex) {
            imgPos[i][3] = rollTopHeight * (i + 1) / (showIndex + 1);
        } else if (i < hiddenIndex) {
            imgPos[i][3] = imgPos[i][2] - allImageMarginTop + rollTopHeight;
        } else {
            imgPos[i][3] = rollTopHeight + imageContainerHeight + rollBottomHeight * (i - hiddenIndex + 1) / (count - hiddenIndex + 1);
        }
        //imgPos[i][3]+=rollTopHeight;
    }
}

function render() {

    /*
     lctx.beginPath();
     lctx.rect(0,0,leftCanvas.width,leftCanvas.height);
     lctx.fillStyle = "#8ED6FF";
     lctx.fill();

     rctx.beginPath();
     rctx.rect(0,0,rightCanvas.width,rightCanvas.height);
     rctx.fillStyle = "#8ED6FF";
     rctx.fill();
     */
    lctx.clearRect(0, 0, leftCanvas.width, leftCanvas.height);
    rctx.clearRect(0, 0, rightCanvas.width, rightCanvas.height);

    //render selected related line
    if (typeof(hoverImageIdx) !== 'undefined' ||
        typeof(leftBoxHoverIdx) !== 'undefined' && leftToImage[leftBoxHoverIdx].length > 0) {
        lctx.globalAlpha = 0.5;
    }
    if (typeof(hoverImageIdx) !== 'undefined' ||
        typeof(rightBoxHoverIdx) !== 'undefined' && rightToImage[rightBoxHoverIdx].length > 0) {
        rctx.globalAlpha = 0.5;
    }

    if (typeof(leftBoxY) !== 'undefined') {
        for (var i = 0; i < count; i++) {
            if (imgPos[i][3] >= rollTopHeight && imgPos[i][3] <= rollTopHeight + imageContainerHeight) {
                continue;
            }
            drawImageLineLeftFunc("#FFd3d3", "#d4dff4");
        }
        for (var i = 0; i < count; i++) {
            if (!(imgPos[i][3] >= rollTopHeight && imgPos[i][3] <= rollTopHeight + imageContainerHeight)) {
                continue;
            }
            drawImageLineLeftFunc("#FF5A95", "#00abfc");
        }
    }

    if (typeof(rightBoxY) !== 'undefined') {
        for (var i = 0; i < count; i++) {
            if (imgPos[i][3] >= rollTopHeight && imgPos[i][3] <= rollTopHeight + imageContainerHeight) {
                continue;
            }
            drawImageLineRightFunc("#FFd3d3", "#d4dff4");
        }
        for (var i = 0; i < count; i++) {
            if (!(imgPos[i][3] >= rollTopHeight && imgPos[i][3] <= rollTopHeight + imageContainerHeight)) {
                continue;
            }
            drawImageLineRightFunc("#FF5A95", "#00abfc");
        }
    }
    lctx.globalAlpha = 1;
    rctx.globalAlpha = 1;


    //render hover related line
    //render hover image
    if (typeof(hoverImageIdx) !== 'undefined') {

        for (var j = 0; j < leftBoxPYArray[hoverImageIdx].length; j++) {
            var locY = leftBoxPYArray[hoverImageIdx][j];
            lctx.beginPath();
            lctx.moveTo(0, locY);
            lctx.bezierCurveTo(leftCanvas.width / 2, locY, leftCanvas.width / 2, imgPos[hoverImageIdx][3], leftCanvas.width - 1, imgPos[hoverImageIdx][3]);
            lctx.lineWidth = 3;
            lctx.strokeStyle = "#FF5A95"; // line color
            lctx.stroke();
        }
        for (var j = 0; j < rightBoxPYArray[hoverImageIdx].length; j++) {
            var locY = rightBoxPYArray[hoverImageIdx][j];
            rctx.beginPath();
            rctx.moveTo(rightCanvas.width - 1, locY);
            rctx.bezierCurveTo(rightCanvas.width / 2, locY, rightCanvas.width / 2, imgPos[hoverImageIdx][3], 0, imgPos[hoverImageIdx][3]);
            rctx.lineWidth = 3;
            rctx.strokeStyle = "#00abfc"; // line color
            rctx.stroke();
        }
    }


    //render hover buttons
    if (typeof(leftBoxHoverIdx) !== 'undefined') {
        var leftBoxHoverY = leftBoxHoverIdx * formatHeight + formatWordCenterToTop;
        for (var j = 0; j < leftToImage[leftBoxHoverIdx].length; j++) {
            var imgY = imgPos[leftToImage[leftBoxHoverIdx][j]][3];

            lctx.beginPath();
            lctx.moveTo(0, leftBoxHoverY);
            lctx.bezierCurveTo(leftCanvas.width / 2, leftBoxHoverY, leftCanvas.width / 2, imgY, leftCanvas.width - 1, imgY);
            lctx.lineWidth = 3;
            lctx.strokeStyle = "#FF5A95"; // line color
            lctx.stroke();

        }
    }
    if (typeof(rightBoxHoverIdx) !== 'undefined') {
        var rightBoxHoverY = rightBoxHoverIdx * techHeight + techWordCenterToTop;
        for (var j = 0; j < rightToImage[rightBoxHoverIdx].length; j++) {
            var imgY = imgPos[rightToImage[rightBoxHoverIdx][j]][3];

            rctx.beginPath();
            rctx.moveTo(rightCanvas.width - 1, rightBoxHoverY);
            rctx.bezierCurveTo(rightCanvas.width / 2, rightBoxHoverY, rightCanvas.width / 2, imgY, 0, imgY);
            rctx.lineWidth = 3;
            rctx.strokeStyle = "#00abfc"; // line color
            rctx.stroke();

        }
    }


    function drawImageLineLeftFunc(colorL, colorR) {
        lctx.beginPath();
        lctx.moveTo(0, leftBoxY);
        lctx.bezierCurveTo(leftCanvas.width / 2, leftBoxY, leftCanvas.width / 2, imgPos[i][3],
            leftCanvas.width - 1, imgPos[i][3]);
        lctx.lineWidth = 1;
        lctx.strokeStyle = colorL; // line color
        lctx.stroke();

        for (var j = 0; j < rightBoxPYArray[i].length; j++) {
            rctx.beginPath();
            rctx.moveTo(rightCanvas.width - 1, rightBoxPYArray[i][j]);
            rctx.bezierCurveTo(rightCanvas.width / 2, rightBoxPYArray[i][j], rightCanvas.width / 2, imgPos[i][3], 0, imgPos[i][3]);
            rctx.lineWidth = 1;
            rctx.strokeStyle = colorR; // line color
            rctx.stroke();
        }
    }

    function drawImageLineRightFunc(colorL, colorR) {
        rctx.beginPath();
        rctx.moveTo(rightCanvas.width - 1, rightBoxY);
        rctx.bezierCurveTo(rightCanvas.width / 2, rightBoxY, rightCanvas.width / 2, imgPos[i][3],
            0, imgPos[i][3]);
        rctx.lineWidth = 1;
        rctx.strokeStyle = colorR; // line color
        rctx.stroke();
        for (var j = 0; j < rightBoxPYArray[i].length; j++) {
            lctx.beginPath();
            lctx.moveTo(0, leftBoxPYArray[i][j]);
            lctx.bezierCurveTo(leftCanvas.width / 2, leftBoxPYArray[i][j], leftCanvas.width / 2, imgPos[i][3],
                leftCanvas.width - 1, imgPos[i][3]);
            lctx.lineWidth = 1;
            lctx.strokeStyle = colorL; // line color
            lctx.stroke();
        }
    }
}

function intervalF() {
    //get new mouse.y
    if (rollTopActive) {
        mouse.y = -parseInt(allImage.style.marginTop, 10) + largeImageDivHeight / 2;
    }
    if (rollBottomActive) {
        mouse.y = -parseInt(allImage.style.marginTop, 10) + parseInt(imageContainer.style.minHeight, 10) - largeImageDivHeight / 2;//-1;
    }

    //recover
    if (count > 0) {
        if (typeof(imgChange1) !== 'undefined') {
            imgChange1.style.height = smallHeight + 'px';
        }
    }
    if (count > 1) {
        if (typeof(imgChange2) !== 'undefined') {
            imgChange2.style.height = smallHeight + 'px';
        }
    }

    // only one

    if (count === 1) {
        imgChange1 = document.getElementById('image' + 0);
        imgChange1.style.height = largeHeight + 'px';
        updateLoc(0, largeHeight);

    } else if (count > 1) {
        var allImageTopHeight = -parseInt(allImage.style.marginTop, 10);

        if (mouse.y < allImageTopHeight + largeImageDivHeight / 2) {
            //top
            var idx = Math.floor(allImageTopHeight / smallImageDivHeight);
            imgChange1 = document.getElementById('image' + idx);
            imgChange1.style.height = largeHeight + 'px';
            updateLoc(idx, largeHeight);


        } else if (mouse.y >= allImageTopHeight + imageContainerHeight - largeImageDivHeight / 2 + 1) {
            //bottom
            var idx = Math.floor((allImageTopHeight + imageContainerHeight - largeHeight + smallHeight) / smallImageDivHeight) - 1;
            imgChange2 = document.getElementById('image' + idx);
            imgChange2.style.height = largeHeight + 'px';
            updateLoc(idx, largeHeight);

        } else {
            //center
            var topImageIndex = Math.floor((mouse.y - largeImageDivHeight / 2) / smallImageDivHeight);
            //console.log(topImageIndex);

            var ratio = 1 - (mouse.y - largeImageDivHeight / 2) % smallImageDivHeight / smallImageDivHeight;
            imgChange1 = document.getElementById('image' + topImageIndex);
            imgChange1.style.height = smallHeight + ratio * (largeHeight - smallHeight) + 'px';
            if (topImageIndex + 1 < count) {
                //imageContainer is not full
                imgChange2 = document.getElementById('image' + (topImageIndex + 1));
                imgChange2.style.height = smallHeight + (1 - ratio) * (largeHeight - smallHeight) + 'px';
            }
            updateLoc(topImageIndex, smallHeight + ratio * (largeHeight - smallHeight));

        }
    }
    if (canvasSupported) {
        render();
    }

    //
}
