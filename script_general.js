(function () {
    var c = {};
    function trans(e, f) {
        var g = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
        c[g[0x0]] = g;
        return '';
    }
    function regTextVar(h, i) {
        var j = ![];
        i = i['toLowerCase']();
        var k = function () {
            var t = this['get']('data');
            t['updateText'](t['translateObjs'][h]);
        };
        var l = function (u) {
            var v = u['data']['nextSelectedIndex'];
            if (v >= 0x0) {
                var w = u['source']['get']('items')[v];
                var x = function () {
                    w['unbind']('start', x, this);
                    k['call'](this);
                };
                w['bind']('start', x, this);
            } else
                k['call'](this);
        };
        var m = function (y) {
            return function (z) {
                if (y in z) {
                    k['call'](this);
                }
            }['bind'](this);
        };
        var n = function (A, B) {
            return function (C, D) {
                if (A == C && B in D) {
                    k['call'](this);
                }
            }['bind'](this);
        };
        var o = function (E, F, G) {
            for (var H = 0x0; H < E['length']; ++H) {
                var I = E[H];
                var J = I['get']('selectedIndex');
                if (J >= 0x0) {
                    var K = F['split']('.');
                    var L = I['get']('items')[J];
                    if (G !== undefined && !G['call'](this, L))
                        continue;
                    for (var M = 0x0; M < K['length']; ++M) {
                        if (L == undefined)
                            return '';
                        L = 'get' in L ? L['get'](K[M]) : L[K[M]];
                    }
                    return L;
                }
            }
            return '';
        };
        var p = function (N) {
            var O = N['get']('player');
            return O !== undefined && O['get']('viewerArea') == this['getMainViewer']();
        };
        switch (i) {
        case 'title':
        case 'subtitle':
            var r = function () {
                switch (i) {
                case 'title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                }
            }();
            if (r) {
                return function () {
                    var P = this['_getPlayListsWithViewer'](this['getMainViewer']());
                    if (!j) {
                        for (var Q = 0x0; Q < P['length']; ++Q) {
                            P[Q]['bind']('changing', l, this);
                        }
                        j = !![];
                    }
                    return o['call'](this, P, r, p);
                };
            }
            break;
        default:
            if (i['startsWith']('quiz.') && 'Quiz' in TDV) {
                var s = undefined;
                var r = function () {
                    switch (i) {
                    case 'quiz.questions.answered':
                        return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                    case 'quiz.question.count':
                        return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                    case 'quiz.items.found':
                        return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                    case 'quiz.item.count':
                        return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                    case 'quiz.score':
                        return TDV['Quiz']['PROPERTY']['SCORE'];
                    case 'quiz.score.total':
                        return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                    case 'quiz.time.remaining':
                        return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                    case 'quiz.time.elapsed':
                        return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                    case 'quiz.time.limit':
                        return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                    case 'quiz.media.items.found':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                    case 'quiz.media.item.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                    case 'quiz.media.questions.answered':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                    case 'quiz.media.question.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                    case 'quiz.media.score':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                    case 'quiz.media.score.total':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                    case 'quiz.media.index':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                    case 'quiz.media.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                    case 'quiz.media.visited':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                    default:
                        var R = /quiz\.([\w_]+)\.(.+)/['exec'](i);
                        if (R) {
                            s = R[0x1];
                            switch ('quiz.' + R[0x2]) {
                            case 'quiz.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.media.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                            case 'quiz.media.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            }
                        }
                    }
                }();
                if (r) {
                    return function () {
                        var S = this['get']('data')['quiz'];
                        if (S) {
                            if (!j) {
                                if (s != undefined)
                                    if (s == 'global') {
                                        var U = this['get']('data')['quizConfig'];
                                        var W = U['objectives'];
                                        for (var Y = 0x0, a0 = W['length']; Y < a0; ++Y) {
                                            S['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], n['call'](this, W[Y]['id'], r), this);
                                        }
                                    } else {
                                        S['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], n['call'](this, s, r), this);
                                    }
                                else
                                    S['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], m['call'](this, r), this);
                                j = !![];
                            }
                            try {
                                var a1 = 0x0;
                                if (s != undefined) {
                                    if (s == 'global') {
                                        var U = this['get']('data')['quizConfig'];
                                        var W = U['objectives'];
                                        for (var Y = 0x0, a0 = W['length']; Y < a0; ++Y) {
                                            a1 += S['getObjective'](W[Y]['id'], r);
                                        }
                                    } else {
                                        a1 = S['getObjective'](s, r);
                                    }
                                } else {
                                    a1 = S['get'](r);
                                    if (r == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                        a1 += 0x1;
                                }
                                return a1;
                            } catch (a2) {
                                return undefined;
                            }
                        }
                    };
                }
            }
            break;
        }
        return '';
    }
    function createQuizConfig(player, a3) {
        var a4 = {};
        a4['player'] = player;
        a4['playList'] = a3;
        function a5(a8) {
            for (var a9 = 0x0; a9 < a8['length']; ++a9) {
                var aa = a8[a9];
                if ('id' in aa)
                    player[aa['id']] = aa;
            }
        }
        if (a4['questions']) {
            a5(a4['questions']);
            for (var a6 = 0x0; a6 < a4['questions']['length']; ++a6) {
                var a7 = a4['questions'][a6];
                a5(a7['options']);
            }
        }
        if (a4['objectives']) {
            a5(a4['objectives']);
        }
        if (a4['califications']) {
            a5(a4['califications']);
        }
        if (a4['score']) {
            player[a4['score']['id']] = a4['score'];
        }
        if (a4['question']) {
            player[a4['question']['id']] = a4['question'];
        }
        if (a4['timeout']) {
            player[a4['timeout']['id']] = a4['timeout'];
        }
        player['get']('data')['translateObjs'] = c;
        return a4;
    }
    var d = {"scrollBarVisible":"rollOver","id":"rootPlayer","scrollBarMargin":2,"paddingLeft":0,"downloadEnabled":false,"verticalAlign":"top","width":"100%","children":["this.MainViewer","this.Container_4F33C54D_443B_DD0A_41CA_4D0B44E0198E"],"start":"this.init(); this.syncPlaylists([this.mainPlayList,this.ThumbnailList_4F33D54D_443B_DD0A_41AE_24F720E99B09_playlist])","paddingRight":0,"propagateClick":false,"scrollBarOpacity":0.5,"borderSize":0,"backgroundPreloadEnabled":true,"gap":10,"vrPolyfillScale":0.75,"contentOpaque":false,"backgroundColor":["#FFFFFF"],"mediaActivationMode":"window","desktopMipmappingEnabled":false,"toolTipHorizontalAlign":"center","backgroundColorDirection":"vertical","definitions": [{"hfov":360,"class":"Panorama","vfov":180,"partial":false,"label":trans('panorama_4F1E3418_443A_530A_41C9_61A106F2DECD.label'),"hfovMin":"150%","id":"panorama_4F1E3418_443A_530A_41C9_61A106F2DECD","data":{"label":"Panorama1"},"thumbnailUrl":"media/panorama_4F1E3418_443A_530A_41C9_61A106F2DECD_t.jpg","hfovMax":130,"pitch":0,"frames":[{"cube":{"levels":[{"url":"media/panorama_4F1E3418_443A_530A_41C9_61A106F2DECD_0/{face}/0/{row}_{column}.jpg","tags":"ondemand","class":"TiledImageResourceLevel","rowCount":3,"width":9216,"colCount":18,"height":1536},{"url":"media/panorama_4F1E3418_443A_530A_41C9_61A106F2DECD_0/{face}/1/{row}_{column}.jpg","tags":"ondemand","class":"TiledImageResourceLevel","rowCount":2,"width":6144,"colCount":12,"height":1024},{"url":"media/panorama_4F1E3418_443A_530A_41C9_61A106F2DECD_0/{face}/2/{row}_{column}.jpg","tags":["ondemand","preload"],"class":"TiledImageResourceLevel","rowCount":1,"width":3072,"colCount":6,"height":512},{"url":"media/panorama_4F1E3418_443A_530A_41C9_61A106F2DECD_0/{face}/vr/0.jpg","tags":"mobilevr","class":"TiledImageResourceLevel","rowCount":1,"width":9216,"colCount":6,"height":1536}],"class":"ImageResource"},"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_4F1E3418_443A_530A_41C9_61A106F2DECD_t.jpg"}]},{"class":"PanoramaCamera","automaticZoomSpeed":10,"initialSequence":"this.sequence_4DF9F807_443A_5307_41C5_24ED3FE5B562","initialPosition":{"yaw":0,"class":"PanoramaCameraPosition","pitch":0},"hoverFactor":0,"id":"panorama_4D9DF184_443A_55FA_41C6_9B9A686E46A7_camera"},{"hfov":360,"class":"Panorama","vfov":180,"partial":false,"label":trans('panorama_4D8AA56E_443A_7D06_41AF_70171B9BCBB7.label'),"hfovMin":"150%","id":"panorama_4D8AA56E_443A_7D06_41AF_70171B9BCBB7","data":{"label":"Panorama2"},"thumbnailUrl":"media/panorama_4D8AA56E_443A_7D06_41AF_70171B9BCBB7_t.jpg","hfovMax":130,"pitch":0,"frames":[{"cube":{"levels":[{"url":"media/panorama_4D8AA56E_443A_7D06_41AF_70171B9BCBB7_0/{face}/0/{row}_{column}.jpg","tags":"ondemand","class":"TiledImageResourceLevel","rowCount":3,"width":9216,"colCount":18,"height":1536},{"url":"media/panorama_4D8AA56E_443A_7D06_41AF_70171B9BCBB7_0/{face}/1/{row}_{column}.jpg","tags":"ondemand","class":"TiledImageResourceLevel","rowCount":2,"width":6144,"colCount":12,"height":1024},{"url":"media/panorama_4D8AA56E_443A_7D06_41AF_70171B9BCBB7_0/{face}/2/{row}_{column}.jpg","tags":["ondemand","preload"],"class":"TiledImageResourceLevel","rowCount":1,"width":3072,"colCount":6,"height":512},{"url":"media/panorama_4D8AA56E_443A_7D06_41AF_70171B9BCBB7_0/{face}/vr/0.jpg","tags":"mobilevr","class":"TiledImageResourceLevel","rowCount":1,"width":9216,"colCount":6,"height":1536}],"class":"ImageResource"},"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_4D8AA56E_443A_7D06_41AF_70171B9BCBB7_t.jpg"}]},{"items":[{"media":"this.panorama_4F1E3418_443A_530A_41C9_61A106F2DECD","camera":"this.panorama_4F1E3418_443A_530A_41C9_61A106F2DECD_camera","class":"PanoramaPlayListItem","begin":"this.setEndToItemIndex(this.mainPlayList, 0, 1)","player":"this.MainViewerPanoramaPlayer"},{"media":"this.panorama_4D8AA56E_443A_7D06_41AF_70171B9BCBB7","camera":"this.panorama_4D8AA56E_443A_7D06_41AF_70171B9BCBB7_camera","class":"PanoramaPlayListItem","begin":"this.setEndToItemIndex(this.mainPlayList, 1, 2)","player":"this.MainViewerPanoramaPlayer"},{"media":"this.panorama_4D9D0B8A_443A_7509_41BB_95C4C35A85C1","camera":"this.panorama_4D9D0B8A_443A_7509_41BB_95C4C35A85C1_camera","class":"PanoramaPlayListItem","begin":"this.setEndToItemIndex(this.mainPlayList, 2, 3)","player":"this.MainViewerPanoramaPlayer"},{"media":"this.panorama_4D9DF184_443A_55FA_41C6_9B9A686E46A7","camera":"this.panorama_4D9DF184_443A_55FA_41C6_9B9A686E46A7_camera","class":"PanoramaPlayListItem","begin":"this.setEndToItemIndex(this.mainPlayList, 3, 0)","player":"this.MainViewerPanoramaPlayer","end":"this.trigger('tourEnded')"}],"id":"mainPlayList","class":"PlayList"},{"subtitlesBorderSize":0,"subtitlesVerticalAlign":"bottom","subtitlesTextShadowOpacity":1,"id":"MainViewer","toolTipShadowHorizontalLength":0,"playbackBarBottom":5,"toolTipTextShadowOpacity":0,"subtitlesPaddingTop":5,"progressBorderSize":0,"width":"100%","subtitlesFontColor":"#FFFFFF","progressBorderColor":"#000000","subtitlesEnabled":true,"translationTransitionDuration":1000,"progressBarBorderRadius":0,"progressBarBackgroundColor":["#3399FF"],"subtitlesTextShadowVerticalLength":1,"toolTipBorderColor":"#767676","vrPointerColor":"#FFFFFF","toolTipPaddingBottom":4,"toolTipFontColor":"#606060","playbackBarProgressBackgroundColorDirection":"vertical","borderSize":0,"progressBackgroundColor":["#FFFFFF"],"progressBarOpacity":1,"toolTipPaddingRight":6,"progressBottom":0,"playbackBarBorderColor":"#FFFFFF","playbackBarBackgroundColor":["#FFFFFF"],"playbackBarBorderRadius":0,"playbackBarHeadBackgroundColorDirection":"vertical","toolTipHorizontalAlign":"center","playbackBarHeight":10,"playbackBarHeadWidth":6,"toolTipTextShadowBlurRadius":3,"displayTooltipInSurfaceSelection":true,"class":"ViewerArea","transitionMode":"blending","progressBarBorderSize":0,"playbackBarProgressBorderColor":"#000000","subtitlesTop":0,"progressBackgroundColorRatios":[0],"playbackBarHeadBorderRadius":0,"height":"100%","playbackBarHeadShadowVerticalLength":0,"playbackBarBackgroundColorDirection":"vertical","shadow":false,"subtitlesFontWeight":"normal","playbackBarProgressBorderSize":0,"subtitlesTextShadowColor":"#000000","playbackBarRight":0,"toolTipOpacity":1,"subtitlesPaddingLeft":5,"playbackBarProgressOpacity":1,"playbackBarBackgroundOpacity":1,"subtitlesPaddingBottom":5,"subtitlesFontSize":"3vmin","subtitlesPaddingRight":5,"subtitlesBackgroundOpacity":0.2,"subtitlesBottom":50,"displayTooltipInTouchScreens":true,"paddingTop":0,"playbackBarHeadBorderColor":"#000000","borderRadius":0,"paddingBottom":0,"playbackBarBorderSize":0,"progressRight":0,"toolTipShadowSpread":0,"toolTipBackgroundColor":"#F6F6F6","playbackBarHeadShadowHorizontalLength":0,"playbackBarHeadShadowBlurRadius":3,"toolTipFontWeight":"normal","toolTipDisplayTime":600,"playbackBarProgressBackgroundColor":["#3399FF"],"subtitlesBorderColor":"#FFFFFF","paddingLeft":0,"playbackBarProgressBorderRadius":0,"vrPointerSelectionColor":"#FF6600","progressBarBackgroundColorDirection":"vertical","progressOpacity":1,"playbackBarLeft":0,"paddingRight":0,"toolTipShadowColor":"#333333","toolTipFontStyle":"normal","propagateClick":false,"subtitlesTextShadowBlurRadius":0,"toolTipBorderRadius":3,"playbackBarHeadHeight":15,"transitionDuration":500,"toolTipPaddingLeft":6,"toolTipShadowOpacity":1,"toolTipShadowBlurRadius":3,"progressBarBorderColor":"#000000","doubleClickAction":"toggle_fullscreen","progressHeight":10,"progressBorderRadius":0,"subtitlesTextDecoration":"none","playbackBarHeadBackgroundColorRatios":[0,1],"progressBarBackgroundColorRatios":[0],"subtitlesFontFamily":"Arial","playbackBarHeadShadowColor":"#000000","vrPointerSelectionTime":2000,"progressBackgroundColorDirection":"vertical","toolTipFontFamily":"Arial","toolTipShadowVerticalLength":0,"toolTipTextShadowColor":"#000000","subtitlesTextShadowHorizontalLength":1,"progressLeft":0,"subtitlesShadow":false,"surfaceReticleSelectionColor":"#FFFFFF","minHeight":50,"playbackBarHeadBorderSize":0,"surfaceReticleColor":"#FFFFFF","toolTipFontSize":"1.11vmin","playbackBarHeadOpacity":1,"playbackBarHeadShadow":true,"playbackBarHeadShadowOpacity":0.7,"minWidth":100,"toolTipBorderSize":1,"subtitlesOpacity":1,"toolTipPaddingTop":4,"data":{"name":"Main Viewer"},"firstTransitionDuration":0,"subtitlesGap":0,"playbackBarProgressBackgroundColorRatios":[0],"subtitlesHorizontalAlign":"center","surfaceReticleSelectionOpacity":1,"subtitlesBackgroundColor":"#000000","playbackBarOpacity":1,"playbackBarHeadBackgroundColor":["#111111","#666666"],"surfaceReticleOpacity":0.6,"progressBackgroundOpacity":1},{"class":"PanoramaCamera","automaticZoomSpeed":10,"initialSequence":"this.sequence_4DF9B806_443A_52F9_41AD_306ADA696986","initialPosition":{"yaw":0,"class":"PanoramaCameraPosition","pitch":0},"hoverFactor":0,"id":"panorama_4D8AA56E_443A_7D06_41AF_70171B9BCBB7_camera"},{"class":"PanoramaCamera","automaticZoomSpeed":10,"initialSequence":"this.sequence_4D851805_443A_52FB_41B9_2B9F9B642EEA","initialPosition":{"yaw":0,"class":"PanoramaCameraPosition","pitch":0},"hoverFactor":0,"id":"panorama_4F1E3418_443A_530A_41C9_61A106F2DECD_camera"},{"scrollBarVisible":"rollOver","id":"Container_4F33C54D_443B_DD0A_41CA_4D0B44E0198E","left":0,"verticalAlign":"bottom","children":["this.ThumbnailList_4F33D54D_443B_DD0A_41AE_24F720E99B09"],"paddingLeft":0,"right":0,"paddingRight":0,"propagateClick":false,"scrollBarOpacity":0.5,"borderSize":0,"gap":10,"bottom":0,"contentOpaque":false,"height":200,"toolTipHorizontalAlign":"center","class":"Container","minHeight":20,"horizontalAlign":"center","minWidth":20,"scrollBarWidth":10,"overflow":"visible","layout":"horizontal","shadow":false,"scrollBarColor":"#000000","data":{"name":"Container532"},"paddingTop":0,"backgroundOpacity":0,"borderRadius":0,"paddingBottom":0,"scrollBarMargin":2},{"hfov":360,"class":"Panorama","vfov":180,"partial":false,"label":trans('panorama_4D9D0B8A_443A_7509_41BB_95C4C35A85C1.label'),"hfovMin":"150%","id":"panorama_4D9D0B8A_443A_7509_41BB_95C4C35A85C1","data":{"label":"Panorama3"},"thumbnailUrl":"media/panorama_4D9D0B8A_443A_7509_41BB_95C4C35A85C1_t.jpg","hfovMax":130,"pitch":0,"frames":[{"cube":{"levels":[{"url":"media/panorama_4D9D0B8A_443A_7509_41BB_95C4C35A85C1_0/{face}/0/{row}_{column}.jpg","tags":"ondemand","class":"TiledImageResourceLevel","rowCount":3,"width":9216,"colCount":18,"height":1536},{"url":"media/panorama_4D9D0B8A_443A_7509_41BB_95C4C35A85C1_0/{face}/1/{row}_{column}.jpg","tags":"ondemand","class":"TiledImageResourceLevel","rowCount":2,"width":6144,"colCount":12,"height":1024},{"url":"media/panorama_4D9D0B8A_443A_7509_41BB_95C4C35A85C1_0/{face}/2/{row}_{column}.jpg","tags":["ondemand","preload"],"class":"TiledImageResourceLevel","rowCount":1,"width":3072,"colCount":6,"height":512},{"url":"media/panorama_4D9D0B8A_443A_7509_41BB_95C4C35A85C1_0/{face}/vr/0.jpg","tags":"mobilevr","class":"TiledImageResourceLevel","rowCount":1,"width":9216,"colCount":6,"height":1536}],"class":"ImageResource"},"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_4D9D0B8A_443A_7509_41BB_95C4C35A85C1_t.jpg"}]},{"class":"PanoramaCamera","automaticZoomSpeed":10,"initialSequence":"this.sequence_4DF99807_443A_5307_41B5_BC7217D205C1","initialPosition":{"yaw":0,"class":"PanoramaCameraPosition","pitch":0},"hoverFactor":0,"id":"panorama_4D9D0B8A_443A_7509_41BB_95C4C35A85C1_camera"},{"itemPaddingTop":3,"scrollBarVisible":"rollOver","id":"ThumbnailList_4F33D54D_443B_DD0A_41AE_24F720E99B09","scrollBarOpacity":0.5,"verticalAlign":"top","itemHorizontalAlign":"center","paddingLeft":20,"gap":10,"itemThumbnailOpacity":1,"itemBorderRadius":0,"scrollBarMargin":2,"itemLabelTextDecoration":"none","itemVerticalAlign":"middle","itemLabelPosition":"bottom","paddingRight":20,"itemThumbnailShadow":true,"itemLabelFontSize":14,"propagateClick":false,"itemThumbnailShadowSpread":1,"itemLabelFontFamily":"Arial","horizontalAlign":"left","playList":"this.ThumbnailList_4F33D54D_443B_DD0A_41AE_24F720E99B09_playlist","itemThumbnailShadowOpacity":0.8,"borderSize":0,"itemThumbnailBorderRadius":5,"itemPaddingLeft":3,"selectedItemLabelFontWeight":"bold","itemPaddingRight":3,"itemBackgroundOpacity":0,"itemBackgroundColor":[],"itemThumbnailScaleMode":"fit_outside","maxWidth":800,"maxHeight":600,"itemThumbnailWidth":100,"backgroundColor":["#000000"],"itemBackgroundColorRatios":[],"toolTipHorizontalAlign":"center","backgroundColorDirection":"vertical","minHeight":0,"itemPaddingBottom":3,"layout":"horizontal","itemLabelFontColor":"#FFFFFF","itemOpacity":1,"class":"ThumbnailList","backgroundColorRatios":[0],"itemLabelFontStyle":"normal","itemLabelHorizontalAlign":"center","itemThumbnailShadowHorizontalLength":3,"itemThumbnailHeight":75,"itemMode":"normal","scrollBarWidth":10,"itemLabelGap":5,"shadow":false,"minWidth":0,"scrollBarColor":"#FFFFFF","itemLabelFontWeight":"normal","data":{"name":"ThumbnailList533"},"itemThumbnailShadowColor":"#000000","itemBackgroundColorDirection":"vertical","itemThumbnailShadowBlurRadius":4,"backgroundOpacity":0.2,"borderRadius":5,"paddingTop":10,"paddingBottom":10,"itemThumbnailShadowVerticalLength":3},{"hfov":360,"class":"Panorama","vfov":180,"partial":false,"label":trans('panorama_4D9DF184_443A_55FA_41C6_9B9A686E46A7.label'),"hfovMin":"150%","id":"panorama_4D9DF184_443A_55FA_41C6_9B9A686E46A7","data":{"label":"Panorama4"},"thumbnailUrl":"media/panorama_4D9DF184_443A_55FA_41C6_9B9A686E46A7_t.jpg","hfovMax":130,"pitch":0,"frames":[{"cube":{"levels":[{"url":"media/panorama_4D9DF184_443A_55FA_41C6_9B9A686E46A7_0/{face}/0/{row}_{column}.jpg","tags":"ondemand","class":"TiledImageResourceLevel","rowCount":3,"width":9216,"colCount":18,"height":1536},{"url":"media/panorama_4D9DF184_443A_55FA_41C6_9B9A686E46A7_0/{face}/1/{row}_{column}.jpg","tags":"ondemand","class":"TiledImageResourceLevel","rowCount":2,"width":6144,"colCount":12,"height":1024},{"url":"media/panorama_4D9DF184_443A_55FA_41C6_9B9A686E46A7_0/{face}/2/{row}_{column}.jpg","tags":["ondemand","preload"],"class":"TiledImageResourceLevel","rowCount":1,"width":3072,"colCount":6,"height":512},{"url":"media/panorama_4D9DF184_443A_55FA_41C6_9B9A686E46A7_0/{face}/vr/0.jpg","tags":"mobilevr","class":"TiledImageResourceLevel","rowCount":1,"width":9216,"colCount":6,"height":1536}],"class":"ImageResource"},"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_4D9DF184_443A_55FA_41C6_9B9A686E46A7_t.jpg"}]},{"mouseControlMode":"drag_rotation","viewerArea":"this.MainViewer","gyroscopeVerticalDraggingEnabled":true,"class":"PanoramaPlayer","surfaceSelectionEnabled":false,"zoomEnabled":true,"id":"MainViewerPanoramaPlayer","touchControlMode":"drag_rotation","arrowKeysAction":"translate","displayPlaybackBar":true,"aaEnabled":true},{"items":[{"media":"this.panorama_4F1E3418_443A_530A_41C9_61A106F2DECD","player":"this.MainViewerPanoramaPlayer","class":"PanoramaPlayListItem","camera":"this.panorama_4F1E3418_443A_530A_41C9_61A106F2DECD_camera"},{"media":"this.panorama_4D8AA56E_443A_7D06_41AF_70171B9BCBB7","player":"this.MainViewerPanoramaPlayer","class":"PanoramaPlayListItem","camera":"this.panorama_4D8AA56E_443A_7D06_41AF_70171B9BCBB7_camera"},{"media":"this.panorama_4D9D0B8A_443A_7509_41BB_95C4C35A85C1","player":"this.MainViewerPanoramaPlayer","class":"PanoramaPlayListItem","camera":"this.panorama_4D9D0B8A_443A_7509_41BB_95C4C35A85C1_camera"},{"media":"this.panorama_4D9DF184_443A_55FA_41C6_9B9A686E46A7","player":"this.MainViewerPanoramaPlayer","class":"PanoramaPlayListItem","camera":"this.panorama_4D9DF184_443A_55FA_41C6_9B9A686E46A7_camera"}],"id":"ThumbnailList_4F33D54D_443B_DD0A_41AE_24F720E99B09_playlist","class":"PlayList"},{"movements":[{"yawSpeed":7.96,"easing":"cubic_in","yawDelta":18.5,"class":"DistancePanoramaCameraMovement"},{"yawSpeed":7.96,"easing":"linear","yawDelta":323,"class":"DistancePanoramaCameraMovement"},{"yawSpeed":7.96,"easing":"cubic_out","yawDelta":18.5,"class":"DistancePanoramaCameraMovement"}],"class":"PanoramaCameraSequence","restartMovementOnUserInteraction":false,"id":"sequence_4DF9F807_443A_5307_41C5_24ED3FE5B562"},{"movements":[{"yawSpeed":7.96,"easing":"cubic_in","yawDelta":18.5,"class":"DistancePanoramaCameraMovement"},{"yawSpeed":7.96,"easing":"linear","yawDelta":323,"class":"DistancePanoramaCameraMovement"},{"yawSpeed":7.96,"easing":"cubic_out","yawDelta":18.5,"class":"DistancePanoramaCameraMovement"}],"class":"PanoramaCameraSequence","restartMovementOnUserInteraction":false,"id":"sequence_4DF9B806_443A_52F9_41AD_306ADA696986"},{"movements":[{"yawSpeed":7.96,"easing":"cubic_in","yawDelta":18.5,"class":"DistancePanoramaCameraMovement"},{"yawSpeed":7.96,"easing":"linear","yawDelta":323,"class":"DistancePanoramaCameraMovement"},{"yawSpeed":7.96,"easing":"cubic_out","yawDelta":18.5,"class":"DistancePanoramaCameraMovement"}],"class":"PanoramaCameraSequence","restartMovementOnUserInteraction":false,"id":"sequence_4D851805_443A_52FB_41B9_2B9F9B642EEA"},{"movements":[{"yawSpeed":7.96,"easing":"cubic_in","yawDelta":18.5,"class":"DistancePanoramaCameraMovement"},{"yawSpeed":7.96,"easing":"linear","yawDelta":323,"class":"DistancePanoramaCameraMovement"},{"yawSpeed":7.96,"easing":"cubic_out","yawDelta":18.5,"class":"DistancePanoramaCameraMovement"}],"class":"PanoramaCameraSequence","restartMovementOnUserInteraction":false,"id":"sequence_4DF99807_443A_5307_41B5_BC7217D205C1"}],"class":"Player","defaultVRPointer":"laser","height":"100%","minHeight":20,"horizontalAlign":"left","minWidth":20,"backgroundColorRatios":[0],"overflow":"hidden","scripts":{"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"mixObject":TDV.Tour.Script.mixObject,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"clone":TDV.Tour.Script.clone,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"getPixels":TDV.Tour.Script.getPixels,"setValue":TDV.Tour.Script.setValue,"getComponentByName":TDV.Tour.Script.getComponentByName,"downloadFile":TDV.Tour.Script.downloadFile,"init":TDV.Tour.Script.init,"setLocale":TDV.Tour.Script.setLocale,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"getMediaByName":TDV.Tour.Script.getMediaByName,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"shareSocial":TDV.Tour.Script.shareSocial,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"quizShowScore":TDV.Tour.Script.quizShowScore,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"registerKey":TDV.Tour.Script.registerKey,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"resumePlayers":TDV.Tour.Script.resumePlayers,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"unregisterKey":TDV.Tour.Script.unregisterKey,"quizStart":TDV.Tour.Script.quizStart,"getKey":TDV.Tour.Script.getKey,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"existsKey":TDV.Tour.Script.existsKey,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"quizFinish":TDV.Tour.Script.quizFinish,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"historyGoBack":TDV.Tour.Script.historyGoBack,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"historyGoForward":TDV.Tour.Script.historyGoForward,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"openLink":TDV.Tour.Script.openLink,"textToSpeech":TDV.Tour.Script.textToSpeech,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"showPopupImage":TDV.Tour.Script.showPopupImage,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"playAudioList":TDV.Tour.Script.playAudioList,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"initQuiz":TDV.Tour.Script.initQuiz,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"getOverlays":TDV.Tour.Script.getOverlays,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"cloneCamera":TDV.Tour.Script.cloneCamera,"getMainViewer":TDV.Tour.Script.getMainViewer,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"translate":TDV.Tour.Script.translate,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"initAnalytics":TDV.Tour.Script.initAnalytics,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"showWindow":TDV.Tour.Script.showWindow,"setMapLocation":TDV.Tour.Script.setMapLocation,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"isPanorama":TDV.Tour.Script.isPanorama,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"updateDeepLink":TDV.Tour.Script.updateDeepLink},"layout":"absolute","shadow":false,"scrollBarWidth":10,"mouseWheelEnabled":true,"scrollBarColor":"#000000","data":{"textToSpeechConfig":{"speechOnTooltip":false,"stopBackgroundAudio":false,"speechOnInfoWindow":false,"pitch":1,"speechOnQuizQuestion":false,"rate":1,"volume":1},"name":"Player530","defaultLocale":"pt","locales":{"pt":"locale/pt.txt"}},"paddingTop":0,"backgroundOpacity":1,"borderRadius":0,"mobileMipmappingEnabled":false,"paddingBottom":0};
    if (d['data'] == undefined)
        d['data'] = {};
    d['data']['translateObjs'] = c;
    d['data']['history'] = {};
    d['scripts']['createQuizConfig'] = createQuizConfig;
    TDV['PlayerAPI']['defineScript'](d);
}());
//# sourceMappingURL=http://localhost:9000/script_device_v2021.1.15.js.map
//Generated with v2021.1.15, Sun Nov 21 2021