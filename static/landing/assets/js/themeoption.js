$(document).ready(function () {
    if ($.cookie("style_theme") == undefined) {
        $('#theme-switch').attr('href', 'css/orange.css');
    } else if ($.cookie("style_theme") != '') {
        $('#theme-switch').attr('href', $.cookie("style_theme"));
    }

    if ($.cookie("boxed_style_selector") == undefined) {
        $.cookie("boxed_style_selector", "Wide", {path: "/"});
        $('a.widebutton').addClass('active');
        $('#wrapper').addClass('wrapper-all');
        $('#wrapper').removeClass('active');
    } else if ($.cookie("boxed_style_selector") == 'Boxed') {
        $.cookie("boxed_style_selector", "Boxed", {path: "/"});
        $('a.boxedbutton').addClass('active');
        // $('#wrapper').addClass('wrapper-boxed');
        if ($.cookie("boxed_style_background_type") == 'pattern') {
            var patternbg = $.cookie("boxed_style_background");
            $('body').css('background', 'url(' + patternbg + ') 50% 50% / auto repeat fixed');
        } else if ($.cookie("boxed_style_background_type") == 'image') {
            var patternbg = $.cookie("boxed_style_background");
            $('body').css('background', 'url(' + patternbg + ') 50% 50% / cover no-repeat fixed');
        } else {
            var patternbg = $.cookie("boxed_style_background");
            $('body').css('background', 'url(http://finance.thememove.com/wp-content/plugins/demo-options/assets/patterns/1.png) 50% 50% / auto repeat fixed');
        }
    } else if ($.cookie("boxed_style_selector") == 'Wide') {
        $.cookie("boxed_style_selector", "Wide", {path: "/"});
        $('#wrapper').addClass('wrapper-all');
        $('a.widebutton').addClass('active');
        $('#wrapper').removeClass('active');
    }
    $('a.widebutton').click(function (e) {
        var current = 'Wide';

        //$('#wrapper').removeClass('wrapper-boxed');
        // $('#wrapper').addClass('wrapper-all');
        $('body').css('background', 'url()');
        $.cookie('boxed_style_background', '', {path: '/'});
        $.cookie('boxed_style_background_type', '', {path: '/'});
        if ($.cookie("boxed_style_selector") == current) {
            e.preventDefault();
            return false;
        }
        $.cookie('boxed_style_selector', current, {path: '/'});
        $(this).addClass('active');
        $('a.boxedbutton').removeClass('active');
    });
    $('a.boxedbutton').click(function (e) {
        var current = 'Boxed';
        if ($.cookie("boxed_style_selector") == current) {
            e.preventDefault();
            return false;
        }
        $.cookie('boxed_style_selector', current, {path: '/'});
        $(this).addClass('active');
        $('a.widebutton').removeClass('active');
        //$('#wrapper').removeClass('wrapper-all'); $('#wrapper').addClass('wrapper-boxed');
    });

    $('ul.patternbg li a').click(function () {
        if ($.cookie("boxed_style_selector") == 'Boxed') {
            var patternbg = $(this).attr('data-value');
            $('body').css('background', 'url(' + patternbg + ') 50% 50% / auto repeat fixed');
            $.cookie('boxed_style_background', patternbg, {path: '/'});
            $.cookie('boxed_style_background_type', 'pattern', {path: '/'});
        } else {
            alert('Please select boxed layout');
        }
    });

    $('ul.patternimage li a').click(function () {
        if ($.cookie("boxed_style_selector") == 'Boxed') {
            var patternbg = $(this).attr('data-value');
            $('body').css('background', 'url()');
            $('body').css('background', 'url(' + patternbg + ') 50% 50% / cover no-repeat fixed');
            $.cookie('boxed_style_background', patternbg, {path: '/'});
            $.cookie('boxed_style_background_type', 'image', {path: '/'});
        } else {
            alert('Please select boxed layout');
        }
    });

    $('ul.patterncss li a').click(function () {
        var pathcss = 'css/';
        var cssname = pathcss + $(this).data("value") + '.css';
        $('#theme-switch').attr('href', cssname);
        $.cookie('style_theme', cssname, {path: '/'});
    });
});
