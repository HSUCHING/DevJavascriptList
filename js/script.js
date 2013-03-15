/**
 * Created with JetBrains WebStorm.
 * User: I068959
 * Date: 3/15/13
 * Time: 4:58 PM
 * To change this template use File | Settings | File Templates.
 */
var easing = 'backout';

$.slider = function (selector, w) {
    var slider = {
        s:null,
        width:0,
        c:null,
        w:0, //single w
        m:0, //max
        n:0,
        init:function () {
            this.s = $(selector);
            this.c = this.s.find('img');
            this.w = w;
            var _ = this;
            this.c.load(function () {
                _.width = _.c.width();
                if (_.width / _.w > 1) {
                    _.m = _.width / _.w - 1;
                    _.s.find('.sliderR').removeClass('disable').addClass('able');
                }
            });
            this.bind();
        },
        bind:function () {
            var _ = this;
            this.s.find('.sliderL').click(function () {//+
                if ($(this).hasClass('disable') || _.m == 0 || _.n > 0) {
                    return false;
                }
                if ($(this).hasClass('able')) {
                    if (!_.c.is(':animated')) {
                        _.n++;
                        _.c.animate({'marginLeft':_.n * _.w + 'px'}, {"easing":easing, "duration":'slow', "queue":false});
                        if (_.n == 0) {
                            $(this).addClass('disable').removeClass('able');
                        }
                        if (_.n == 0 - _.m + 1) {
                            _.s.find('.sliderR').addClass('able').removeClass('disable');
                        }
                    }
                }
            });
            this.s.find('.sliderR').click(function () {//-
                if ($(this).hasClass('disable') || _.m == 0 || _.n < 0 - _.m) {
                    return false;
                }
                if ($(this).hasClass('able')) {
                    if (!_.c.is(':animated')) {
                        _.n--;
                        _.c.animate({'marginLeft':_.n * _.w + 'px'}, {"easing":easing, "duration":'slow', "queue":false});
                        if (_.n == 0 - _.m) {
                            $(this).addClass('disable').removeClass('able');
                        }
                        if (_.n == -1) {
                            _.s.find('.sliderL').addClass('able').removeClass('disable');
                        }
                    }
                }

            });
        }
    };
    return slider;
};

$(document).ready(function () {
    $('#nav a:eq(' + curTab + ')').addClass('current');
    var $line = $('#navLine');
    var curNav = parseInt($('#nav a.current').attr('index'));
    $line.animate({'left':(100 * curNav + 23) + 'px'});
    $('#nav a').hover(
        function () {
            var index = parseInt($(this).attr('index'));
            $(this).addClass('hover');
            $line.animate({'left':(100 * index + 23) + 'px'}, {"easing":easing, "duration":'slow', "queue":false});
            return false;
        },
        function () {
            $(this).removeClass('hover');
        }
    );
    $('#nav').bind('mouseleave', function () {
        $line.animate({'left':(100 * curNav + 23) + 'px'}, {"easing":easing, "duration":'slow', "queue":false});
        return false;
    });
    var mySlider = $.slider('#slider', 430);
    mySlider.init();
});

