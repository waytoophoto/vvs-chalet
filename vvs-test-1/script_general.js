(function(){
var translateObjs = {};
function trans(a, b) {
    var c = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
    return translateObjs[c[0x0]] = c, '';
}
function regTextVar(a, b) {
    var c = ![];
    return d(b);
    function d(k, l) {
        switch (k['toLowerCase']()) {
        case 'title':
        case 'subtitle':
        case 'photo.title':
        case 'photo.description':
            var m = (function () {
                switch (k['toLowerCase']()) {
                case 'title':
                case 'photo.title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                case 'photo.description':
                    return 'media.data.description';
                }
            }());
            if (m)
                return function () {
                    var r, s, t = (l && l['viewerName'] ? this['getComponentByName'](l['viewerName']) : undefined) || this['getMainViewer']();
                    if (k['toLowerCase']()['startsWith']('photo'))
                        r = this['getByClassName']('PhotoAlbumPlayListItem')['filter'](function (v) {
                            var w = v['get']('player');
                            return w && w['get']('viewerArea') == t;
                        })['map'](function (v) {
                            return v['get']('media')['get']('playList');
                        });
                    else
                        r = this['_getPlayListsWithViewer'](t), s = j['bind'](this, t);
                    if (!c) {
                        for (var u = 0x0; u < r['length']; ++u) {
                            r[u]['bind']('changing', f, this);
                        }
                        c = !![];
                    }
                    return i['call'](this, r, m, s);
                };
            break;
        case 'tour.name':
        case 'tour.description':
            return function () {
                return this['get']('data')['tour']['locManager']['trans'](k);
            };
        default:
            if (k['toLowerCase']()['startsWith']('viewer.')) {
                var n = k['split']('.'), o = n[0x1];
                if (o) {
                    var p = n['slice'](0x2)['join']('.');
                    return d(p, { 'viewerName': o });
                }
            } else {
                if (k['toLowerCase']()['startsWith']('quiz.') && 'Quiz' in TDV) {
                    var q = undefined, m = (function () {
                            switch (k['toLowerCase']()) {
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
                                var s = /quiz\.([\w_]+)\.(.+)/['exec'](k);
                                if (s) {
                                    q = s[0x1];
                                    switch ('quiz.' + s[0x2]) {
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
                        }());
                    if (m)
                        return function () {
                            var r = this['get']('data')['quiz'];
                            if (r) {
                                if (!c) {
                                    if (q != undefined) {
                                        if (q == 'global') {
                                            var s = this['get']('data')['quizConfig'], t = s['objectives'];
                                            for (var u = 0x0, v = t['length']; u < v; ++u) {
                                                r['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], h['call'](this, t[u]['id'], m), this);
                                            }
                                        } else
                                            r['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], h['call'](this, q, m), this);
                                    } else
                                        r['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], g['call'](this, m), this);
                                    c = !![];
                                }
                                try {
                                    var w = 0x0;
                                    if (q != undefined) {
                                        if (q == 'global') {
                                            var s = this['get']('data')['quizConfig'], t = s['objectives'];
                                            for (var u = 0x0, v = t['length']; u < v; ++u) {
                                                w += r['getObjective'](t[u]['id'], m);
                                            }
                                        } else
                                            w = r['getObjective'](q, m);
                                    } else {
                                        w = r['get'](m);
                                        if (m == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                            w += 0x1;
                                    }
                                    return w;
                                } catch (x) {
                                    return undefined;
                                }
                            }
                        };
                }
            }
            break;
        }
        return function () {
            return '';
        };
    }
    function e() {
        var k = this['get']('data');
        k['updateText'](k['translateObjs'][a]);
    }
    function f(k) {
        var l = k['data']['nextSelectedIndex'];
        if (l >= 0x0) {
            var m = k['source']['get']('items')[l], n = function () {
                    m['unbind']('begin', n, this), e['call'](this);
                };
            m['bind']('begin', n, this);
        }
    }
    function g(k) {
        return function (l) {
            k in l && e['call'](this);
        }['bind'](this);
    }
    function h(k, l) {
        return function (m, n) {
            k == m && l in n && e['call'](this);
        }['bind'](this);
    }
    function i(k, l, m) {
        for (var n = 0x0; n < k['length']; ++n) {
            var o = k[n], p = o['get']('selectedIndex');
            if (p >= 0x0) {
                var q = l['split']('.'), r = o['get']('items')[p];
                if (m !== undefined && !m['call'](this, r))
                    continue;
                for (var s = 0x0; s < q['length']; ++s) {
                    if (r == undefined)
                        return '';
                    r = 'get' in r ? r['get'](q[s]) : r[q[s]];
                }
                return r;
            }
        }
        return '';
    }
    function j(k, l) {
        var m = l['get']('player');
        return m !== undefined && m['get']('viewerArea') == k;
    }
}
var script = {"hash": "77b749e1870e4b7d1aa0a76f92d31f23547ebb8f4ad0a5c0a8c689ccbdd52882", "definitions": [{"adjacentPanoramas":[{"data":{"overlayID":"overlay_1E0532C2_0F4A_2599_4198_D12A03521B06"},"yaw":19.83,"distance":3.87,"class":"AdjacentPanorama","panorama":"this.panorama_03F41950_0F15_E1C0_419F_5C93B5A79FFC","select":"this.overlay_1E0532C2_0F4A_2599_4198_D12A03521B06.get('areas').forEach(function(a){ a.trigger('click') })"}],"class":"Panorama","thumbnailUrl":"media/panorama_02E240D6_0E97_BEF3_4171_F89997DAF857_t.webp","id":"panorama_02E240D6_0E97_BEF3_4171_F89997DAF857","data":{"label":"Entr\u00e9e"},"hfovMax":130,"hfov":360,"overlays":["this.overlay_02A4490D_0F35_E4AA_418F_B5E78629B43D","this.overlay_1E0532C2_0F4A_2599_4198_D12A03521B06"],"frames":[{"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_02E240D6_0E97_BEF3_4171_F89997DAF857_t.webp","cube":{"class":"ImageResource","levels":[{"width":30720,"url":"media/panorama_02E240D6_0E97_BEF3_4171_F89997DAF857_0/{face}/0/{row}_{column}.webp","height":5120,"class":"TiledImageResourceLevel","tags":"ondemand","rowCount":10,"colCount":60},{"width":15360,"url":"media/panorama_02E240D6_0E97_BEF3_4171_F89997DAF857_0/{face}/1/{row}_{column}.webp","height":2560,"class":"TiledImageResourceLevel","tags":"ondemand","rowCount":5,"colCount":30},{"width":9216,"url":"media/panorama_02E240D6_0E97_BEF3_4171_F89997DAF857_0/{face}/2/{row}_{column}.webp","height":1536,"class":"TiledImageResourceLevel","tags":"ondemand","rowCount":3,"colCount":18},{"width":6144,"url":"media/panorama_02E240D6_0E97_BEF3_4171_F89997DAF857_0/{face}/3/{row}_{column}.webp","height":1024,"class":"TiledImageResourceLevel","tags":"ondemand","rowCount":2,"colCount":12},{"width":3072,"url":"media/panorama_02E240D6_0E97_BEF3_4171_F89997DAF857_0/{face}/4/{row}_{column}.webp","height":512,"class":"TiledImageResourceLevel","tags":["ondemand","preload"],"rowCount":1,"colCount":6}]}}],"label":trans('panorama_02E240D6_0E97_BEF3_4171_F89997DAF857.label'),"vfov":180},{"class":"PlayList","items":["this.PanoramaPlayListItem_1E268E05_0F4A_3C9B_419B_D36249CB1510","this.PanoramaPlayListItem_1E276E05_0F4A_3C9B_4174_02E587F18DF7"],"id":"mainPlayList"},{"initialPosition":{"class":"PanoramaCameraPosition","pitch":0,"yaw":0},"class":"PanoramaCamera","enterPointingToHorizon":true,"id":"panorama_03F41950_0F15_E1C0_419F_5C93B5A79FFC_camera","initialSequence":"this.sequence_04826348_0F15_21CF_4189_4252BB1CE891"},{"displayMovements":[{"class":"TargetRotationalCameraDisplayMovement","duration":1000},{"class":"TargetRotationalCameraDisplayMovement","duration":2000,"targetStereographicFactor":0,"targetPitch":0,"easing":"cubic_in_out"}],"enterPointingToHorizon":true,"initialSequence":"this.sequence_05960094_0E96_7D76_417A_B7F7E7017384","displayOriginPosition":{"class":"RotationalCameraDisplayPosition","pitch":-90,"stereographicFactor":0.4,"hfov":165,"yaw":0},"initialPosition":{"class":"PanoramaCameraPosition","pitch":0,"yaw":0},"class":"PanoramaCamera","id":"panorama_02E240D6_0E97_BEF3_4171_F89997DAF857_camera"},{"class":"PlayList","items":[{"class":"PanoramaPlayListItem","player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_02E240D6_0E97_BEF3_4171_F89997DAF857_camera","media":"this.panorama_02E240D6_0E97_BEF3_4171_F89997DAF857"},{"class":"PanoramaPlayListItem","player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_03F41950_0F15_E1C0_419F_5C93B5A79FFC_camera","media":"this.panorama_03F41950_0F15_E1C0_419F_5C93B5A79FFC"}],"id":"ThumbnailList_01A5C2A3_0F14_E341_4184_AB4FA27892AC_playlist"},{"toolTipFontColor":"#606060","playbackBarHeadHeight":15,"playbackBarHeadBackgroundColorRatios":[0,1],"playbackBarHeadShadowColor":"#000000","playbackBarHeadBorderSize":0,"playbackBarHeadShadow":true,"toolTipBackgroundColor":"#F6F6F6","subtitlesFontFamily":"Arial","vrPointerColor":"#FFFFFF","toolTipFontFamily":"Arial","toolTipPaddingRight":6,"progressBackgroundColorRatios":[0],"data":{"name":"Main Viewer"},"playbackBarHeadBackgroundColor":["#111111","#666666"],"progressOpacity":0.7,"progressBarBackgroundColorDirection":"horizontal","subtitlesBackgroundColor":"#000000","progressRight":"33%","playbackBarBottom":5,"minHeight":50,"progressBarBorderColor":"#000000","minWidth":100,"propagateClick":false,"subtitlesGap":0,"progressBarBackgroundColorRatios":[0],"playbackBarBackgroundColor":["#FFFFFF"],"progressBarBackgroundColor":["#3399FF"],"vrPointerSelectionColor":"#FF6600","playbackBarProgressBorderSize":0,"playbackBarHeight":10,"playbackBarHeadWidth":6,"progressBackgroundColor":["#000000"],"progressBorderColor":"#000000","toolTipFontSize":"1.11vmin","playbackBarRight":0,"toolTipPaddingLeft":6,"playbackBarBackgroundColorDirection":"vertical","progressBottom":10,"firstTransitionDuration":0,"playbackBarProgressBackgroundColor":["#3399FF"],"playbackBarProgressBorderRadius":0,"vrPointerSelectionTime":2000,"progressHeight":2,"progressBorderSize":0,"toolTipPaddingTop":4,"subtitlesTextShadowHorizontalLength":1,"progressBarBorderRadius":2,"subtitlesTextShadowVerticalLength":1,"playbackBarHeadShadowOpacity":0.7,"progressBarBorderSize":0,"subtitlesFontColor":"#FFFFFF","playbackBarBackgroundOpacity":1,"playbackBarProgressBackgroundColorRatios":[0],"subtitlesBottom":50,"progressBorderRadius":2,"progressLeft":"33%","id":"MainViewer","playbackBarBorderRadius":0,"playbackBarHeadBorderRadius":0,"playbackBarBorderColor":"#FFFFFF","subtitlesTop":0,"surfaceReticleColor":"#FFFFFF","playbackBarHeadBorderColor":"#000000","playbackBarProgressBorderColor":"#000000","subtitlesTextShadowColor":"#000000","playbackBarBorderSize":0,"subtitlesTextShadowOpacity":1,"class":"ViewerArea","subtitlesFontSize":"3vmin","width":"100%","height":"100%","toolTipTextShadowColor":"#000000","subtitlesBackgroundOpacity":0.2,"playbackBarHeadShadowBlurRadius":3,"toolTipPaddingBottom":4,"toolTipShadowColor":"#333138","surfaceReticleSelectionColor":"#FFFFFF","toolTipBorderColor":"#767676","playbackBarLeft":0,"subtitlesBorderColor":"#FFFFFF"},{"toolTipTextShadowColor":"#000000","toolTipFontColor":"#606060","playList":"this.ThumbnailList_01A5C2A3_0F14_E341_4184_AB4FA27892AC_playlist","paddingTop":10,"toolTipBackgroundColor":"#F6F6F6","toolTipFontFamily":"Arial","paddingRight":20,"paddingBottom":10,"toolTipPaddingRight":6,"toolTipBorderColor":"#767676","itemBackgroundColorDirection":"vertical","right":"0%","backgroundOpacity":0,"selectedItemLabelFontColor":"#FFCC00","itemLabelTextDecoration":"none","data":{"name":"ThumbnailList35762"},"itemBackgroundColor":[],"rollOverItemLabelFontWeight":"bold","scrollBarColor":"#FFFFFF","layout":"horizontal","itemThumbnailWidth":75,"minHeight":20,"minWidth":20,"itemThumbnailHeight":75,"propagateClick":false,"itemPaddingRight":3,"itemThumbnailShadowColor":"#000000","itemBackgroundOpacity":0,"itemBorderRadius":0,"rollOverItemBackgroundOpacity":0,"itemThumbnailShadowOpacity":0.54,"toolTipPaddingLeft":6,"toolTipPaddingTop":4,"itemPaddingBottom":3,"itemThumbnailScaleMode":"fit_outside","gap":13,"itemPaddingLeft":3,"selectedItemLabelFontWeight":"bold","itemThumbnailShadowSpread":1,"itemBackgroundColorRatios":[],"borderRadius":5,"id":"ThumbnailList_01A5C2A3_0F14_E341_4184_AB4FA27892AC","itemThumbnailOpacity":1,"itemLabelFontStyle":"normal","class":"ThumbnailList","bottom":"0%","itemLabelFontWeight":"normal","itemThumbnailBorderRadius":5,"width":"34.97%","itemThumbnailShadowBlurRadius":8,"itemLabelGap":8,"itemLabelFontColor":"#FFFFFF","itemLabelFontSize":14,"scrollBarMargin":2,"toolTipPaddingBottom":4,"toolTipShadowColor":"#333333","paddingLeft":20,"itemPaddingTop":3,"itemThumbnailShadow":true,"itemLabelFontFamily":"Arial"},{"touchControlMode":"drag_rotation","keepModel3DLoadedWithoutLocation":true,"aaEnabled":true,"arrowKeysAction":"translate","mouseControlMode":"drag_rotation","displayPlaybackBar":true,"class":"PanoramaPlayer","viewerArea":"this.MainViewer","id":"MainViewerPanoramaPlayer"},{"adjacentPanoramas":[{"data":{"overlayID":"overlay_1F47EFCC_0F36_5BAA_41A3_31F21B250D97"},"yaw":96.14,"distance":3.71,"class":"AdjacentPanorama","panorama":"this.panorama_02E240D6_0E97_BEF3_4171_F89997DAF857","select":"this.overlay_1F47EFCC_0F36_5BAA_41A3_31F21B250D97.get('areas').forEach(function(a){ a.trigger('click') })"}],"class":"Panorama","thumbnailUrl":"media/panorama_03F41950_0F15_E1C0_419F_5C93B5A79FFC_t.webp","id":"panorama_03F41950_0F15_E1C0_419F_5C93B5A79FFC","data":{"label":"Devanture"},"hfovMax":130,"hfov":360,"overlays":["this.overlay_011AED7F_0F36_5F66_41AB_9C211D8910F7","this.overlay_1F47EFCC_0F36_5BAA_41A3_31F21B250D97"],"frames":[{"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_03F41950_0F15_E1C0_419F_5C93B5A79FFC_t.webp","cube":{"class":"ImageResource","levels":[{"width":30720,"url":"media/panorama_03F41950_0F15_E1C0_419F_5C93B5A79FFC_0/{face}/0/{row}_{column}.webp","height":5120,"class":"TiledImageResourceLevel","tags":"ondemand","rowCount":10,"colCount":60},{"width":15360,"url":"media/panorama_03F41950_0F15_E1C0_419F_5C93B5A79FFC_0/{face}/1/{row}_{column}.webp","height":2560,"class":"TiledImageResourceLevel","tags":"ondemand","rowCount":5,"colCount":30},{"width":9216,"url":"media/panorama_03F41950_0F15_E1C0_419F_5C93B5A79FFC_0/{face}/2/{row}_{column}.webp","height":1536,"class":"TiledImageResourceLevel","tags":"ondemand","rowCount":3,"colCount":18},{"width":6144,"url":"media/panorama_03F41950_0F15_E1C0_419F_5C93B5A79FFC_0/{face}/3/{row}_{column}.webp","height":1024,"class":"TiledImageResourceLevel","tags":"ondemand","rowCount":2,"colCount":12},{"width":3072,"url":"media/panorama_03F41950_0F15_E1C0_419F_5C93B5A79FFC_0/{face}/4/{row}_{column}.webp","height":512,"class":"TiledImageResourceLevel","tags":["ondemand","preload"],"rowCount":1,"colCount":6}]}}],"label":trans('panorama_03F41950_0F15_E1C0_419F_5C93B5A79FFC.label'),"vfov":180},{"pitch":26.02,"yaw":47.06,"class":"LensFlarePanoramaOverlay","bleachingDistance":0.5,"bleaching":0.04,"id":"overlay_02A4490D_0F35_E4AA_418F_B5E78629B43D"},{"data":{"hasPanoramaAction":true,"label":"GoToDevanture"},"useHandCursor":true,"areas":["this.HotspotPanoramaOverlayArea_1E06B2C3_0F4A_259E_4126_FE7D2F3C51B0"],"items":[{"vertices":[{"class":"PanoramaPoint","pitch":-20.23,"yaw":12.52},{"class":"PanoramaPoint","pitch":-19.78,"yaw":25.61},{"class":"PanoramaPoint","pitch":-27.14,"yaw":28.44},{"class":"PanoramaPoint","pitch":-27.64,"yaw":13.27}],"data":{"label":"GoToDevanture"},"distance":50,"image":"this.AnimatedImageResource_1E25CD5D_0F4A_3CAA_41A1_8FD51F65167A","class":"QuadHotspotPanoramaOverlayImage"}],"enabledInCardboard":true,"class":"HotspotPanoramaOverlay","maps":[],"id":"overlay_1E0532C2_0F4A_2599_4198_D12A03521B06"},{"camera":"this.panorama_02E240D6_0E97_BEF3_4171_F89997DAF857_camera","media":"this.panorama_02E240D6_0E97_BEF3_4171_F89997DAF857","class":"PanoramaPlayListItem","player":"this.MainViewerPanoramaPlayer","begin":"this.setEndToItemIndex(this.mainPlayList, 0, 1)","id":"PanoramaPlayListItem_1E268E05_0F4A_3C9B_419B_D36249CB1510"},{"camera":"this.panorama_03F41950_0F15_E1C0_419F_5C93B5A79FFC_camera","media":"this.panorama_03F41950_0F15_E1C0_419F_5C93B5A79FFC","end":"this.trigger('tourEnded')","class":"PanoramaPlayListItem","player":"this.MainViewerPanoramaPlayer","begin":"this.setEndToItemIndex(this.mainPlayList, 1, 0)","id":"PanoramaPlayListItem_1E276E05_0F4A_3C9B_4174_02E587F18DF7"},{"movements":[{"class":"DistancePanoramaCameraMovement","yawDelta":18.5,"yawSpeed":7.96,"easing":"cubic_in"},{"class":"DistancePanoramaCameraMovement","yawDelta":323,"yawSpeed":7.96},{"class":"DistancePanoramaCameraMovement","yawDelta":18.5,"yawSpeed":7.96,"easing":"cubic_out"}],"class":"PanoramaCameraSequence","id":"sequence_04826348_0F15_21CF_4189_4252BB1CE891"},{"movements":[{"class":"DistancePanoramaCameraMovement","yawDelta":18.5,"yawSpeed":7.96,"easing":"cubic_in"},{"class":"DistancePanoramaCameraMovement","yawDelta":323,"yawSpeed":7.96},{"class":"DistancePanoramaCameraMovement","yawDelta":18.5,"yawSpeed":7.96,"easing":"cubic_out"}],"class":"PanoramaCameraSequence","id":"sequence_05960094_0E96_7D76_417A_B7F7E7017384"},{"pitch":44.38,"yaw":-6.94,"class":"LensFlarePanoramaOverlay","bleaching":0.04,"id":"overlay_011AED7F_0F36_5F66_41AB_9C211D8910F7"},{"data":{"hasPanoramaAction":true,"label":"GoToEntrée"},"useHandCursor":true,"areas":["this.HotspotPanoramaOverlayArea_1F415FD1_0F36_5BBA_41A6_FA32232A6FD7"],"items":[{"vertices":[{"class":"PanoramaPoint","pitch":-20.98,"yaw":90.92},{"class":"PanoramaPoint","pitch":-20.98,"yaw":102.15},{"class":"PanoramaPoint","pitch":-28.49,"yaw":102.33},{"class":"PanoramaPoint","pitch":-28.01,"yaw":89.82}],"data":{"label":"GoToEntr\u00e9e"},"distance":50,"image":"this.AnimatedImageResource_1E251D5D_0F4A_3CAA_4183_EC9B51D92CBD","class":"QuadHotspotPanoramaOverlayImage"}],"enabledInCardboard":true,"class":"HotspotPanoramaOverlay","maps":[],"id":"overlay_1F47EFCC_0F36_5BAA_41A3_31F21B250D97"},{"displayTooltipInTouchScreens":true,"click":"this.setPanoramaCameraWithSpot(this.mainPlayList, this.PanoramaPlayListItem_1E276E05_0F4A_3C9B_4174_02E587F18DF7, -40.43076923076923, 2.43577817531306, NaN || TDV.Player.DEFAULT_PANORAMA_HFOV); this.setPlayListSelectedIndex(this.mainPlayList, 1)","class":"HotspotPanoramaOverlayArea","mapColor":"any","id":"HotspotPanoramaOverlayArea_1E06B2C3_0F4A_259E_4126_FE7D2F3C51B0"},{"levels":[{"width":1080,"url":"media/res_1E13077C_0F4A_2B69_41A3_306420E96370_0.webp","height":900,"class":"ImageResourceLevel"}],"frameCount":24,"frameDuration":41,"id":"AnimatedImageResource_1E25CD5D_0F4A_3CAA_41A1_8FD51F65167A","class":"AnimatedImageResource","finalFrame":"first","rowCount":6,"colCount":4},{"displayTooltipInTouchScreens":true,"click":"this.setPanoramaCameraWithSpot(this.mainPlayList, this.PanoramaPlayListItem_1E268E05_0F4A_3C9B_419B_D36249CB1510, -2.769230769230769, -0.3352415026833623, NaN || TDV.Player.DEFAULT_PANORAMA_HFOV); this.setPlayListSelectedIndex(this.mainPlayList, 0)","class":"HotspotPanoramaOverlayArea","mapColor":"any","id":"HotspotPanoramaOverlayArea_1F415FD1_0F36_5BBA_41A6_FA32232A6FD7"},{"levels":[{"width":1080,"url":"media/res_1E13077C_0F4A_2B69_41A3_306420E96370_0.webp","height":900,"class":"ImageResourceLevel"}],"frameCount":24,"frameDuration":41,"id":"AnimatedImageResource_1E251D5D_0F4A_3CAA_4183_EC9B51D92CBD","class":"AnimatedImageResource","finalFrame":"first","rowCount":6,"colCount":4}],"gap":10,"children":["this.MainViewer","this.ThumbnailList_01A5C2A3_0F14_E341_4184_AB4FA27892AC"],"start":"this.init(); this.syncPlaylists([this.mainPlayList,this.ThumbnailList_01A5C2A3_0F14_E341_4184_AB4FA27892AC_playlist]); this.syncPlaylists([this.ThumbnailList_01A5C2A3_0F14_E341_4184_AB4FA27892AC_playlist,this.mainPlayList]); this.syncPlaylists([this.ThumbnailList_01A5C2A3_0F14_E341_4184_AB4FA27892AC_playlist,this.mainPlayList])","data":{"displayTooltipInTouchScreens":true,"defaultLocale":"en","textToSpeechConfig":{"pitch":1,"speechOnQuizQuestion":false,"speechOnTooltip":false,"rate":1,"volume":1,"speechOnInfoWindow":false,"stopBackgroundAudio":false},"history":{},"name":"Player541","locales":{"en":"locale/en.txt"}},"id":"rootPlayer","backgroundColor":["#FFFFFF"],"layout":"absolute","scrollBarColor":"#000000","defaultMenu":["fullscreen","mute","rotation"],"backgroundColorRatios":[0],"minHeight":0,"minWidth":0,"propagateClick":false,"class":"Player","width":"100%","height":"100%","scrollBarMargin":2,"watermark":false,"scripts":{"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"translate":TDV.Tour.Script.translate,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"downloadFile":TDV.Tour.Script.downloadFile,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"showWindow":TDV.Tour.Script.showWindow,"clone":TDV.Tour.Script.clone,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"openLink":TDV.Tour.Script.openLink,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"updateIndexGlobalZoomImage":TDV.Tour.Script.updateIndexGlobalZoomImage,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"createTween":TDV.Tour.Script.createTween,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"quizStart":TDV.Tour.Script.quizStart,"quizShowScore":TDV.Tour.Script.quizShowScore,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"getPixels":TDV.Tour.Script.getPixels,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"getOverlays":TDV.Tour.Script.getOverlays,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"getKey":TDV.Tour.Script.getKey,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"cloneBindings":TDV.Tour.Script.cloneBindings,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"disableVR":TDV.Tour.Script.disableVR,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"toggleVR":TDV.Tour.Script.toggleVR,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"initQuiz":TDV.Tour.Script.initQuiz,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"quizFinish":TDV.Tour.Script.quizFinish,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"cloneGeneric":TDV.Tour.Script.cloneGeneric,"init":TDV.Tour.Script.init,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"mixObject":TDV.Tour.Script.mixObject,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"playAudioList":TDV.Tour.Script.playAudioList,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"setModel3DCameraWithCurrentSpot":TDV.Tour.Script.setModel3DCameraWithCurrentSpot,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"showPopupImage":TDV.Tour.Script.showPopupImage,"resumePlayers":TDV.Tour.Script.resumePlayers,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"setValue":TDV.Tour.Script.setValue,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"isPanorama":TDV.Tour.Script.isPanorama,"textToSpeech":TDV.Tour.Script.textToSpeech,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"shareSocial":TDV.Tour.Script.shareSocial,"historyGoForward":TDV.Tour.Script.historyGoForward,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"executeJS":TDV.Tour.Script.executeJS,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"initAnalytics":TDV.Tour.Script.initAnalytics,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"setMapLocation":TDV.Tour.Script.setMapLocation,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"getMainViewer":TDV.Tour.Script.getMainViewer,"existsKey":TDV.Tour.Script.existsKey,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"registerKey":TDV.Tour.Script.registerKey,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"historyGoBack":TDV.Tour.Script.historyGoBack,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"startMeasurement":TDV.Tour.Script.startMeasurement,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"getMediaByName":TDV.Tour.Script.getMediaByName,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"getComponentByName":TDV.Tour.Script.getComponentByName,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"enableVR":TDV.Tour.Script.enableVR,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"unregisterKey":TDV.Tour.Script.unregisterKey,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"setLocale":TDV.Tour.Script.setLocale,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"getMediaWidth":TDV.Tour.Script.getMediaWidth}};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs, script['data']['createQuizConfig'] = function () {
    var a = {};
    return this['get']('data')['translateObjs'] = translateObjs, a;
}, TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device.js.map
})();
//Generated with v2025.1.14, Tue Jul 15 2025