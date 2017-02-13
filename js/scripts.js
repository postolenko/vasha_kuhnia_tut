$(document).ready(function() {

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

    // -----------------------------------------------------------

    var idexSheme;
    var parentScheme;
    var indexChooseBox;

    var regSize;
    var sizeInputVal;

    // ------------------------------------------------------------

    var accordeonIndex;
    var accordeonItemCount;
    var parentAccordeonH;

    // ------------------------------------------------------------

    var tabsCont = $(".tabs").length - 1;
    var tabsIndex = 0;
    var tabCount;
    var tabIndex;
    var tabAttr;
    var activeTab;

    // ------------------------------------------------------------

    var tabBox;
    var tabsRow;
    var tabParent;
    var tabsIndex;

    // ------------------------------------------------------------

    getPromoSlideImgSize();

    getContactsSliderPosition();

    getPopupPosition();

    // ------------------------------------------------------------

    $(window).resize(function() {

        $(".wrapper").css({"min-height" : $(window).height() + "px"});

        $(".wrapper").css({"padding-bottom" :  $(".footer").outerHeight(true) + "px"});

        // ------------------------------------------------------------

        bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;

        getPromoSlideImgSize();

        getScrollHeaderPosition();

        getContactsSliderPosition();

        getPopupPosition();

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

        // var idexSheme;
        // var parentScheme;
        // var indexChooseBox;

        $(".kitchen-sheme .radio-btn").click( function() {

            idexSheme = $(".kitchen-sheme .radio-btn").index(this);

            parentScheme = $(".kitchen-sheme:eq("+ idexSheme +")").parent(".choose-box");

            indexChooseBox = parentScheme.index(".choose-box");

            $(".kitchen-sheme .size-inpt").prop("disabled", true);

            $(".choose-box:eq("+ indexChooseBox +") .kitchen-sheme .size-inpt").val("");

            $(".kitchen-sheme:eq("+ idexSheme +") .size-inpt").prop("disabled", false);

        });


        // var regSize;
        // var sizeInputVal;


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

            $(".size-inpt").removeClass("active");
        }

    });

    // ---------------------------------------------------------

    $(function() {

        // var accordeonIndex;

        accordeonItemCount = $(".accordeon-item").length - 1;

        // var parentAccordeonH;

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

        tabsCont = $(".tabs").length - 1;

        tabsIndex = 0;

        // var tabCount;
        // var tabIndex;

        // var tabAttr;

        // var activeTab;

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

        // var tabBox;
        // var tabsRow;
        // var tabParent;
        // var tabsIndex;

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

        $(".show-popup").click(function() {

            if( $(this).hasClass("show-count-popup") ) {

                $(".popup-sect").fadeIn(400);

                $(".count-popup").fadeIn(400);

            }

            getPopupPosition();

        });


        $(".close-popup, .popup-bg").click(function() {

            $(".popup-sect").fadeOut(500);

            $(".popup").fadeOut(500);

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

    // --------------------------------------------------------

    $(function() {

        $(".respmenubtn").click(function() {

            if( $(".resp-navigation").is(":hidden") ) {

                $(".resp-navigation").fadeIn(200);

            } else if( $(".resp-navigation").is(":visible") ){

                $(".resp-navigation").fadeOut(200);

            }


        });

    });

    // ---------------------------------------------------------

    function getContactsSliderPosition() {

        if(bodyWidth > 768) {

            $(".contacts-slider-box").css({"top" : ( $(".map-box.contacts-page").height() - $(".contacts-slider-box").height() ) / 2 + "px"});

        }

    }

    // ---------------------------------------------------------

    function getPopupPosition() {

        $(".popup").css({
                        "left" : ( $(window).width() - $(".popup").outerWidth(true) ) / 2 + "px",
                        "top" : ( $(window).height() - $(".popup").outerHeight(true) ) / 2 + "px"
                         });
       

    }

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
