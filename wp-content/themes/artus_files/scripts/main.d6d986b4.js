"use strict";
$(document).ready(function() {
    function a(a) {
        var b = $(".page-section");
        $.each(b, function() {
            "hidden" != this.className.split(" ")[1] && $(this).addClass("hidden")
        }), $("#" + a + "-page").removeClass("hidden")
    }

    function b(a) {
        "home" != a ? $(".slider").hide() : $(".slider").show()
    }

    function c() {
        function a() {
            var b = $("#slider1_container").parent().width();
            b ? c.$ScaleWidth(b) : window.setTimeout(a, 30)
        }
        var b = {
                $AutoPlay: !0
            },
            c = new $JssorSlider$("slider1_container", b);
        a(), $(window).bind("load", a), $(window).bind("resize", a), $(window).bind("orientationchange", a)
    }

    function d(a) {
        var b = a + ".html #loaded-html";
        return b
    }
    var e;
    e = "s1.jpg", $("#myNavbar .nav a").on("click", function() {
        var c = $(".nav").find(".active");
        c.removeClass("active"), $(this).parent().addClass("active");
        var d = $(this);
        a(d.attr("id")), b(d.attr("id"))
    }), $("#about").on("click", function() {
        $("#about-page .nav-tabs li a").first().click()
    }), $("#hands").on("click", function() {
        $("#hands-page .nav-tabs li a").first().click()
    }), $(".conditions-loader").hover(function() {
        $("#" + $(this).data("hoverTarget")).addClass("pic-icon-hover")
    }, function() {
        $("#" + $(this).data("hoverTarget")).removeClass("pic-icon-hover")
    }), $(".pic-icon").hover(function() {
        $("#" + $(this).data("hoverTarget")).addClass("condition-loader-hover")
    }, function() {
        $("#" + $(this).data("hoverTarget")).removeClass("condition-loader-hover")
    }), $(".pic-icon").click(function() {
        $("#" + $(this).data("hoverTarget")).click()
    }), $("#map-directions").click(function() {
        $("#contact").click()
    }), $("#home").click(), c(), $(".conditions-loader").on("click", function(a) {
        var b = a.target.id.split("_")[1];
        b = d(b), $("#conditions-content").load(b);
        var c = function() {
            location.href = "#loader", $(".conditions-head").slideUp("slow", function() {})
        };
        c()
    }), $("#conditions").on("click", function() {
        $(".conditions-head").slideDown("slow", function() {})
    })
});