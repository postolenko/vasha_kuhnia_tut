$(document).ready(function() {

    //   preload
    // $(window).on('load', function () {

    //     setTimeout(function() {

    //         $(".preload-bg").fadeOut(500);

    //     }, 700);
  

    // });

    var w = window,
    d = document,
    e = d.documentElement,
    g = d.getElementsByTagName('body')[0],
    bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;



    var promoSlideCount = $(".promo-slide").length - 1;

    var promoSlideCountIndex;

    var positionInterval;

    var promoSlideWidth;
    var promoSlideHeight;

    var promoWidthImg;
    var promoHeightImg;

    getPromoSlideImgSize();


    $(window).resize(function() {


        $(".wrapper").css({"min-height" : $(window).height() + "px"});

        $(".wrapper").css({"padding-bottom" :  $(".footer").outerHeight(true) + "px"});

        getPromoSlideImgSize();

        getScrollHeaderPosition();

        bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;

    });


    $(document).scroll(function() {

        getScrollHeaderPosition();

    });


    $(function() {

        $(".wrapper").css({"min-height" : $(window).height() + "px"});

        $(".wrapper").css({"padding-bottom" :  $(".footer").outerHeight(true) + "px"});

    });

    // ---------------------------------------------------------

    $(function() {

        $(".upl-btn_1").click(function() {

            $("#upl-file_1").click();

        });

    });


    $(function() {

        // var idexSizeBox;
        var idexSheme;
        var parentScheme;
        var indexChooseBox;

        $(".kitchen-sheme .radio-btn").click( function() {

            idexSheme = $(".kitchen-sheme .radio-btn").index(this);

            parentScheme = $(".kitchen-sheme:eq("+ idexSheme +")").parent(".choose-box");

            indexChooseBox = parentScheme.index(".choose-box");

            $(".kitchen-sheme .size-inpt").prop("disabled", true);

            $(".choose-box:eq("+ indexChooseBox +") .kitchen-sheme .size-inpt").val("");

            $(".kitchen-sheme:eq("+ idexSheme +") .size-inpt").prop("disabled", false);

        });


        var regSize;
        var sizeInputVal;


        $(".size-inpt").keyup(function() {

            regSize = /[0-9]+$/;

            sizeInputVal = $(this).val();

            if( regSize.exec( sizeInputVal ) != null ) {

                return true;

            } else {

                $(this).val( sizeInputVal.replace(/[^0-9]/gim,'') );

            }

        });

    });



    $(document).mouseup(function (e){

        hide_element = $(".size-inpt");

        if (!hide_element.is(e.target)

            && hide_element.has(e.target).length === 0) {

            // hide_element.fadeOut(300);

            $(".size-inpt").removeClass("active");
        }

    });

    // ---------------------------------------------------------

    $(function() {

        var accordeonIndex;

        accordeonItemCount = $(".accordeon-item").length - 1;

        var parentAccordeonH;

        $(".accordeon-item-h").click(function() {

            parentAccordeonH = $(this).parent(".accordeon-item");

            if( parentAccordeonH.hasClass("active") ) {

                return false;

            } else {

                for( accordeonIndex = 0; accordeonIndex <= accordeonItemCount; accordeonIndex++) {

                    if( $(".accordeon-item:eq("+ accordeonIndex +")").hasClass("active") ) {

                        $(".accordeon-item:eq("+ accordeonIndex +") .accordeon-item-txt-wrapp").animate({"height" : 0 + "px"}, 300);

                        $(".accordeon-item:eq("+ accordeonIndex +")").removeClass("active");

                    }

                }                

                accordeonItemTxtHeight = $(this).next(".accordeon-item-txt-wrapp").children(".accordeon-item-txt").height();

                $(this).next(".accordeon-item-txt-wrapp").animate({"height" : accordeonItemTxtHeight + "px"}, 300);

                parentAccordeonH.addClass("active");

            }

        });

    });

    // -----------------------------------------------------------

    $(function() {

        var tabsCont = $(".tabs").length - 1;

        console.log(tabsCont);

        var tabsIndex = 0;

        var tabCount;
        var tabIndex;

        var tabAttr;

        var activeTab;

        // var tabContent;

        for(tabsIndex = 0; tabsIndex <= tabsCont; tabsIndex++) {

            activeTab = false;

            tabCount = $(".tabs:eq("+ tabsIndex  +") .tab").length - 1;

            for( tabIndex = 0; tabIndex <= tabCount; tabIndex++ ) {

                if( $(".tabs:eq("+ tabsIndex  +") .tab:eq("+ tabIndex +")").hasClass("active") ) {

                    activeTab = true;

                    tabAttr = $(".tabs:eq("+ tabsIndex  +") .tab:eq("+ tabIndex +")").attr("data-tab-num");

                    $(".tabs:eq("+ tabsIndex  +") .tab-content[data-tab-content-num='"+ tabAttr +"']").css({"display" : "block"});

                    continue;

                }

            }

            if(activeTab == false) {

                $(".tabs:eq("+ tabsIndex  +") .tab:eq("+ 0 +")").addClass("active");

                tabAttr = $(".tabs:eq("+ tabsIndex  +") .tab:eq("+ 0 +")").attr("data-tab-num");

                $(".tabs:eq("+ tabsIndex  +") .tab-content[data-tab-content-num='"+ tabAttr +"']").css({"display" : "block"});

            }

        }


    // --------------------------------------------------

        var tabBox;
        var tabsRow;
        var tabParent;
        var tabsIndex;

        $(".tab").click(function() {

            if( $(this).hasClass("active") ) {

                return true;

            } else {

                tabBox = $(this).parent(".tab-box");

                tabsRow = tabBox.parent(".tabs-row");

                tabParent = tabsRow.parent(".tabs");

                tabsIndex = tabParent.index(".tabs");

                $(".tabs:eq("+ tabsIndex +") .tabs-row .tab").removeClass("active");

                $(this).addClass("active");

                tabAttr = $(this).attr("data-tab-num");

                $(".tabs:eq("+ tabsIndex +") .tab-content").css({"display" : "none"});

                $(".tabs:eq("+ tabsIndex +") .tab-content[data-tab-content-num='"+ tabAttr +"']").css({"display" : "block"});
            
            }

        });

    });

    // ---------------------------------------------------------

    $(function() {

        $(".close-gallery, .gallery-bg").click(function() {

            $(".gallery-section").fadeOut(300);

        });

    });


    // ---------------------------------------------------------

    $(function() {

        $(".img-material-box").click(function() {

            $(this).prev("input").click();

        });

    })

    // ---------------------------------------------------------

    $(function() {

        $(".contacts-slider-box").css({"top" : ( $(".map-box.contacts-page").height() - $(".contacts-slider-box").height() ) / 2 + "px"});

    });

    // --------------------------------------------------------

    $(".respmenubtn").click(function() {

        if( $(".resp-navigation").is(":hidden") ) {

            // $(this).addClass("respmenubtn-active");

            $(".resp-navigation").fadeIn(200);

            // $(".resp-navigation").css({"top" : $(".header-top-row").outerHeight(true) + "px",
            //                     "height" : ( $(window).height() - $(".header-top-row").outerHeight(true) ) + "px" });

            // $(".header").addClass("fixed");

        } else if( $(".resp-navigation").is(":visible") ){

            // $(this).removeClass("respmenubtn-active");

            $(".resp-navigation").fadeOut(200);

            // $(".header").removeClass("fixed");

        }


    });

    // ---------------------------------------------------------

    function getScrollHeaderPosition() {

        if ( $(window).scrollTop() > $(".header").height() && bodyWidth <= 768 ) {

            $(".header").addClass("fixed");

        } else {

            $(".header").removeClass("fixed");

        }

    }

    // ---------------------------------------------------------

        function getPromoSlideImgSize() {

            clearTimeout(positionInterval);

            // var promoSlideCount = $(".promo-slide").length - 1;

            // var promoSlideCountIndex;

            // var promoSlideWidth;
            // var promoSlideHeight;

            // var promoWidthImg;
            // var promoHeightImg;

            promoSlideCount = $(".promo-slide").length - 1;

            promoSlideCountIndex;

            promoSlideWidth;
            promoSlideHeight;

            promoWidthImg;
            promoHeightImg;

            positionInterval = setTimeout(function() {


                for( promoSlideCountIndex = 0; promoSlideCountIndex <= promoSlideCount; promoSlideCountIndex++ ) {

                    promoSlideWidth = $(".promo-slide:eq("+ promoSlideCountIndex +")").outerWidth();

                    promoSlideHeight = $(".promo-slide:eq("+ promoSlideCountIndex +")").outerHeight();

                    promoWidthImg = $(".promo-slide:eq("+ promoSlideCountIndex +") img").outerWidth();

                    promoHeightImg = $(".promo-slide:eq("+ promoSlideCountIndex +") img").outerHeight();

                    if( promoHeightImg < promoSlideHeight || promoWidthImg < promoSlideWidth ) {

                        $(".promo-slide:eq("+ promoSlideCountIndex  +") img").css({
                            "min-width" : promoSlideWidth + "px",
                            "min-height" : promoSlideHeight + "px",
                            "height" : "auto"
                        });

                    }

                    if( promoWidthImg > promoSlideWidth ) {

                        $(".promo-slide:eq("+ promoSlideCountIndex +") img").css({

                            "margin-left" : -( ( promoWidthImg - promoSlideWidth ) / 2 ) + "px"

                        });

                    }


                }

            }, 500);                   

        }


});
