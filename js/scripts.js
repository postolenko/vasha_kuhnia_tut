$(document).ready(function() {

    //   preload
    // $(window).on('load', function () {

    //     setTimeout(function() {

    //         $(".preload-bg").fadeOut(500);

    //     }, 700);
  

    // });

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

        var idexSizeBox;

        $(".kitchen-sheme").click( function() {

            // $(".kitchen-sheme .radio-btn").attr("checked", "");

            // $(".kitchen-sheme .radio-btn").removeAttr('checked');

            idexSizeBox = $(".kitchen-sheme").index(this);

            // if( $(".kitchen-sheme:eq("+ idexSizeBox +")").hasClass("active") ) {

            //     return false;

            // } else {

                // $(".kitchen-sheme").removeClass("active");

                // $(".kitchen-sheme").removeClass("active");

                // $(".kitchen-sheme .radio-btn").removeAttr('checked');

                // $(".kitchen-sheme:eq("+ idexSizeBox +")").addClass("active");

                $(".kitchen-sheme input.radio-btn").attr("checked", false);

                // $(".kitchen-sheme:eq("+ idexSizeBox +") .radio-btn").attr("checked");

                $(".kitchen-sheme:eq("+ idexSizeBox +") input.radio-btn").attr("checked", true);

                $(this).addClass("active");

            // }

            // $(".kitchen-sheme").addClass("active");

            // $(this).addClass("active");

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

                    $(".tabs:eq("+ tabsIndex  +") .tab-content[data-tab-content='content_"+ tabAttr +"']").css({"display" : "block"});

                    continue;

                }

            }

            if(activeTab == false) {

                $(".tabs:eq("+ tabsIndex  +") .tab:eq("+ 0 +")").addClass("active");

                tabAttr = $(".tabs:eq("+ tabsIndex  +") .tab:eq("+ 0 +")").attr("data-tab-num");

                $(".tabs:eq("+ tabsIndex  +") .tab-content[data-tab-content='content_"+ tabAttr +"']").css({"display" : "block"});

                
            }

        }

        $(".tab").click(function() {

            if( $(this).hasClass("active") ) {

                return true;

            } else {

                var tabBox = $(this).parent(".tab-box");

                var tabsRow = tabBox.parent(".tabs-row");

                var tabParent = tabsRow.parent(".tabs");

                // tabsRow.css({"outline" : "3px solid red"});

                var tabsIndex = tabParent.index();

                console.log(tabParent.index());

                $(".tabs:eq("+ (tabsIndex - 1) +") .tabs-row .tab").removeClass("active");

                $(this).addClass("active");

                tabAttr = $(this).attr("data-tab-num");

                $(".tab-content").css({"display" : "none"});

                $(".tab-content[data-tab-content='content_"+ tabAttr +"']").css({"display" : "block"});

            }

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
