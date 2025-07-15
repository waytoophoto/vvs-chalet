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
var script = {"children":["this.MainViewer","this.ThumbnailList_01A5C2A3_0F14_E341_4184_AB4FA27892AC","this.Container_1CCD3BD8_0F57_F2F1_41A6_416D8FBB2808"],"hash": "ccda0e2e5f9f316d2acfcf18f5f2794bee5a4245f1a20618cd213a7d8d74bc87", "definitions": [{"itemLabelGap":8,"itemLabelFontStyle":"normal","itemThumbnailShadowBlurRadius":8,"paddingRight":20,"playList":"this.ThumbnailList_01A5C2A3_0F14_E341_4184_AB4FA27892AC_playlist","toolTipBorderColor":"#767676","data":{"name":"Panoramas List"},"right":"3.75%","gap":13,"itemThumbnailWidth":75,"toolTipBackgroundColor":"#F6F6F6","toolTipPaddingRight":6,"itemBackgroundColor":[],"selectedItemLabelFontColor":"#FFCC00","scrollBarColor":"#FFFFFF","layout":"vertical","itemThumbnailHeight":75,"class":"ThumbnailList","minHeight":20,"itemBackgroundColorRatios":[],"minWidth":20,"toolTipFontColor":"#606060","toolTipShadowColor":"#333333","itemPaddingTop":3,"itemBackgroundOpacity":0,"toolTipPaddingBottom":4,"itemPaddingRight":3,"rollOverItemLabelFontWeight":"bold","toolTipTextShadowColor":"#000000","rollOverItemBackgroundOpacity":0,"itemThumbnailShadowOpacity":0.54,"itemThumbnailShadowColor":"#000000","itemThumbnailScaleMode":"fit_outside","toolTipPaddingLeft":6,"borderRadius":5,"toolTipFontFamily":"Arial","itemBorderRadius":0,"itemThumbnailShadowSpread":1,"itemPaddingBottom":3,"itemLabelTextDecoration":"none","selectedItemLabelFontWeight":"bold","id":"ThumbnailList_01A5C2A3_0F14_E341_4184_AB4FA27892AC","itemBackgroundColorDirection":"vertical","paddingTop":10,"paddingBottom":10,"itemThumbnailOpacity":1,"propagateClick":false,"toolTipPaddingTop":4,"itemPaddingLeft":3,"itemLabelFontFamily":"Arial","bottom":"0%","width":"8.511%","itemLabelFontWeight":"normal","backgroundOpacity":0,"itemLabelFontColor":"#FFFFFF","height":259,"paddingLeft":20,"scrollBarMargin":2,"itemThumbnailBorderRadius":5,"itemLabelFontSize":14,"itemThumbnailShadow":true},{"duration":500,"id":"effect_17211E8D_0F76_5553_41A4_10D81FB9C0EE","class":"FadeInEffect"},{"initialPosition":{"pitch":-1.12,"hfov":110,"yaw":-0.64,"class":"PanoramaCameraPosition"},"id":"panorama_02E240D6_0E97_BEF3_4171_F89997DAF857_camera","class":"PanoramaCamera","displayOriginPosition":{"pitch":-90,"hfov":165,"stereographicFactor":0.4,"yaw":-0.64,"class":"RotationalCameraDisplayPosition"},"displayMovements":[{"duration":1000,"class":"TargetRotationalCameraDisplayMovement"},{"duration":2000,"targetPitch":-1.12,"targetStereographicFactor":0,"easing":"cubic_in_out","targetHfov":110,"class":"TargetRotationalCameraDisplayMovement"}],"initialSequence":"this.sequence_05960094_0E96_7D76_417A_B7F7E7017384","manualZoomSpeed":2,"enterPointingToHorizon":true},{"id":"Container_1CCD3BD8_0F57_F2F1_41A6_416D8FBB2808","layout":"vertical","data":{"name":"Options Menu"},"right":"0%","horizontalAlign":"center","scrollBarColor":"#000000","propagateClick":false,"class":"Container","overflow":"scroll","minHeight":1,"verticalAlign":"middle","minWidth":1,"bottom":"0%","width":"3.755%","backgroundOpacity":0,"children":["this.Button_1684AC59_0F72_35F2_4161_85C03CBBB8E0","this.Button_1480CF39_0F73_F3B2_416E_CADEBB1EA30A","this.Button_1166EC2A_0F73_F556_41A3_C2093C1B62AF","this.Button_1CCD1BD8_0F57_F2F1_4192_B9737FDA4954","this.Button_1CCEEBD7_0F57_F2FF_419F_749ECFCF2676","this.Button_1CCD0BD8_0F57_F2F1_4171_EF5632C396D5"],"scrollBarMargin":2,"height":"39.64%"},{"overlays":["this.overlay_011AED7F_0F36_5F66_41AB_9C211D8910F7","this.overlay_1F47EFCC_0F36_5BAA_41A3_31F21B250D97"],"audios":["this.audio_00EEC668_0F52_35D1_4183_190ED43CDA5B"],"frames":[{"thumbnailUrl":"media/panorama_03F41950_0F15_E1C0_419F_5C93B5A79FFC_t.webp","class":"CubicPanoramaFrame","cube":{"class":"ImageResource","levels":[{"width":30720,"url":"media/panorama_03F41950_0F15_E1C0_419F_5C93B5A79FFC_0/{face}/0/{row}_{column}.webp","tags":"ondemand","rowCount":10,"height":5120,"colCount":60,"class":"TiledImageResourceLevel"},{"width":15360,"url":"media/panorama_03F41950_0F15_E1C0_419F_5C93B5A79FFC_0/{face}/1/{row}_{column}.webp","tags":"ondemand","rowCount":5,"height":2560,"colCount":30,"class":"TiledImageResourceLevel"},{"width":9216,"url":"media/panorama_03F41950_0F15_E1C0_419F_5C93B5A79FFC_0/{face}/2/{row}_{column}.webp","tags":"ondemand","rowCount":3,"height":1536,"colCount":18,"class":"TiledImageResourceLevel"},{"width":6144,"url":"media/panorama_03F41950_0F15_E1C0_419F_5C93B5A79FFC_0/{face}/3/{row}_{column}.webp","tags":"ondemand","rowCount":2,"height":1024,"colCount":12,"class":"TiledImageResourceLevel"},{"width":3072,"url":"media/panorama_03F41950_0F15_E1C0_419F_5C93B5A79FFC_0/{face}/4/{row}_{column}.webp","tags":["ondemand","preload"],"rowCount":1,"height":512,"colCount":6,"class":"TiledImageResourceLevel"}]}}],"hfov":360,"hfovMax":130,"adjacentPanoramas":[{"data":{"overlayID":"overlay_1F47EFCC_0F36_5BAA_41A3_31F21B250D97"},"panorama":"this.panorama_02E240D6_0E97_BEF3_4171_F89997DAF857","yaw":96.14,"distance":3.71,"class":"AdjacentPanorama","select":"this.overlay_1F47EFCC_0F36_5BAA_41A3_31F21B250D97.get('areas').forEach(function(a){ a.trigger('click') })"}],"id":"panorama_03F41950_0F15_E1C0_419F_5C93B5A79FFC","vfov":180,"data":{"label":"Devanture"},"thumbnailUrl":"media/panorama_03F41950_0F15_E1C0_419F_5C93B5A79FFC_t.webp","label":trans('panorama_03F41950_0F15_E1C0_419F_5C93B5A79FFC.label'),"class":"Panorama"},{"subtitlesFontFamily":"Arial","progressBackgroundColorRatios":[0],"playbackBarHeadBackgroundColor":["#111111","#666666"],"playbackBarBackgroundOpacity":1,"progressRight":"33%","playbackBarBottom":5,"progressBarBackgroundColorDirection":"horizontal","toolTipBorderColor":"#767676","progressOpacity":0.7,"progressBarBorderColor":"#000000","subtitlesGap":0,"vrPointerColor":"#FFFFFF","firstTransitionDuration":0,"data":{"name":"Main Viewer"},"toolTipBackgroundColor":"#F6F6F6","progressBarBackgroundColorRatios":[0],"playbackBarBackgroundColor":["#FFFFFF"],"toolTipPaddingRight":6,"playbackBarHeight":10,"progressBorderColor":"#000000","playbackBarProgressBorderSize":0,"class":"ViewerArea","subtitlesBackgroundColor":"#000000","playbackBarHeadWidth":6,"minHeight":50,"progressBarBackgroundColor":["#3399FF"],"playbackBarRight":0,"toolTipFontColor":"#606060","minWidth":100,"playbackBarBackgroundColorDirection":"vertical","playbackBarProgressBorderRadius":0,"toolTipShadowColor":"#333138","progressBottom":10,"progressHeight":2,"toolTipTextShadowColor":"#000000","progressBackgroundColor":["#000000"],"playbackBarHeadShadowOpacity":0.7,"toolTipPaddingBottom":4,"progressBarBorderRadius":2,"vrPointerSelectionColor":"#FF6600","subtitlesTextShadowOpacity":1,"progressBorderSize":0,"progressBarBorderSize":0,"playbackBarProgressBackgroundColor":["#3399FF"],"playbackBarProgressBackgroundColorRatios":[0],"subtitlesFontColor":"#FFFFFF","subtitlesTextShadowHorizontalLength":1,"playbackBarBorderColor":"#FFFFFF","playbackBarBorderRadius":0,"toolTipPaddingLeft":6,"vrPointerSelectionTime":2000,"toolTipFontFamily":"Arial","progressBorderRadius":2,"playbackBarHeadBorderRadius":0,"playbackBarProgressBorderColor":"#000000","progressLeft":"33%","id":"MainViewer","subtitlesBottom":50,"playbackBarHeadBorderColor":"#000000","surfaceReticleColor":"#FFFFFF","playbackBarBorderSize":0,"subtitlesTop":0,"propagateClick":false,"subtitlesTextShadowColor":"#000000","toolTipPaddingTop":4,"playbackBarHeadShadowBlurRadius":3,"subtitlesFontSize":"3vmin","playbackBarLeft":0,"playbackBarHeadHeight":15,"subtitlesBackgroundOpacity":0.2,"surfaceReticleSelectionColor":"#FFFFFF","playbackBarHeadShadowColor":"#000000","playbackBarHeadBackgroundColorRatios":[0,1],"toolTipFontSize":"1.11vmin","width":"100%","subtitlesBorderColor":"#FFFFFF","playbackBarHeadShadow":true,"playbackBarHeadBorderSize":0,"height":"100%","subtitlesTextShadowVerticalLength":1},{"data":{"label":"nature"},"autoplay":true,"loop":true,"audio":"this.audiores_00E1E47F_0F53_F5AE_41AB_8DB5A867FDD4","id":"audio_00EEC668_0F52_35D1_4183_190ED43CDA5B","class":"PanoramaAudio"},{"borderColor":"#000000","paddingRight":0,"click":"this.setLocale('fr')","id":"Button_1684AC59_0F72_35F2_4161_85C03CBBB8E0","layout":"horizontal","fontSize":"16px","paddingTop":0,"data":{"name":"Button settings FR"},"fontFamily":"Arial","horizontalAlign":"center","paddingBottom":0,"rollOverBackgroundColorRatios":[0],"backgroundColor":["#333333"],"propagateClick":false,"fontColor":"#FFFFFF","iconWidth":30,"class":"Button","minHeight":1,"verticalAlign":"middle","minWidth":1,"rollOverBackgroundColor":["#CE6700"],"rollOverBackgroundOpacity":1,"width":60,"backgroundColorRatios":[0],"paddingLeft":0,"iconHeight":30,"mode":"toggle","height":60,"label":trans('Button_1684AC59_0F72_35F2_4161_85C03CBBB8E0.label')},{"initialPosition":{"pitch":1.67,"hfov":110,"yaw":-35.22,"class":"PanoramaCameraPosition"},"enterPointingToHorizon":true,"initialSequence":"this.sequence_04826348_0F15_21CF_4189_4252BB1CE891","manualZoomSpeed":2,"id":"panorama_03F41950_0F15_E1C0_419F_5C93B5A79FFC_camera","class":"PanoramaCamera"},{"borderColor":"#000000","iconURL":"skin/Button_1CCD1BD8_0F57_F2F1_4192_B9737FDA4954.png","rollOverIconHeight":30,"toolTipFontFamily":"Arial","paddingRight":0,"pressedIconHeight":30,"click":"var visibleFunc = function(component) { this.setComponentVisibility(component, true, 0, this.effect_17211E8D_0F76_5553_41A4_10D81FB9C0EE, 'showEffect', false)}.bind(this); var invisibleFunc = function(component) { this.setComponentVisibility(component, false, 0, this.effect_1726FE8E_0F76_5551_4194_B0858A12913A, 'hideEffect', false)}.bind(this); if(!this.ThumbnailList_01A5C2A3_0F14_E341_4184_AB4FA27892AC.get('visible')){ visibleFunc(this.ThumbnailList_01A5C2A3_0F14_E341_4184_AB4FA27892AC) } else { invisibleFunc(this.ThumbnailList_01A5C2A3_0F14_E341_4184_AB4FA27892AC) }","toolTipBorderColor":"#767676","id":"Button_1CCD1BD8_0F57_F2F1_4192_B9737FDA4954","pressedRollOverBackgroundColorRatios":[0],"layout":"horizontal","fontSize":12,"paddingTop":0,"data":{"name":"Button Settings Show/Hide List"},"fontFamily":"Arial","toolTipBackgroundColor":"#F6F6F6","pressedIconWidth":30,"horizontalAlign":"center","paddingBottom":0,"toolTipPaddingRight":6,"pressedRollOverBackgroundColor":["#666666"],"pressedIconURL":"skin/Button_1CCD1BD8_0F57_F2F1_4192_B9737FDA4954_pressed.png","rollOverBackgroundColorRatios":[0],"backgroundColor":["#333333"],"propagateClick":false,"fontColor":"#FFFFFF","iconWidth":30,"class":"Button","toolTipPaddingTop":4,"rollOverIconWidth":30,"minHeight":1,"verticalAlign":"middle","minWidth":1,"rollOverBackgroundColor":["#666666"],"toolTipShadowColor":"#333333","toolTipFontColor":"#606060","rollOverBackgroundOpacity":1,"toolTipPaddingBottom":4,"width":60,"toolTip":trans('Button_1CCD1BD8_0F57_F2F1_4192_B9737FDA4954.toolTip'),"backgroundColorRatios":[0],"paddingLeft":0,"iconHeight":30,"mode":"toggle","height":60,"toolTipTextShadowColor":"#000000","toolTipPaddingLeft":6},{"overlays":["this.overlay_02A4490D_0F35_E4AA_418F_B5E78629B43D","this.overlay_1E0532C2_0F4A_2599_4198_D12A03521B06"],"audios":["this.audio_00EEC668_0F52_35D1_4183_190ED43CDA5B"],"frames":[{"thumbnailUrl":"media/panorama_02E240D6_0E97_BEF3_4171_F89997DAF857_t.webp","class":"CubicPanoramaFrame","cube":{"class":"ImageResource","levels":[{"width":30720,"url":"media/panorama_02E240D6_0E97_BEF3_4171_F89997DAF857_0/{face}/0/{row}_{column}.webp","tags":"ondemand","rowCount":10,"height":5120,"colCount":60,"class":"TiledImageResourceLevel"},{"width":15360,"url":"media/panorama_02E240D6_0E97_BEF3_4171_F89997DAF857_0/{face}/1/{row}_{column}.webp","tags":"ondemand","rowCount":5,"height":2560,"colCount":30,"class":"TiledImageResourceLevel"},{"width":9216,"url":"media/panorama_02E240D6_0E97_BEF3_4171_F89997DAF857_0/{face}/2/{row}_{column}.webp","tags":"ondemand","rowCount":3,"height":1536,"colCount":18,"class":"TiledImageResourceLevel"},{"width":6144,"url":"media/panorama_02E240D6_0E97_BEF3_4171_F89997DAF857_0/{face}/3/{row}_{column}.webp","tags":"ondemand","rowCount":2,"height":1024,"colCount":12,"class":"TiledImageResourceLevel"},{"width":3072,"url":"media/panorama_02E240D6_0E97_BEF3_4171_F89997DAF857_0/{face}/4/{row}_{column}.webp","tags":["ondemand","preload"],"rowCount":1,"height":512,"colCount":6,"class":"TiledImageResourceLevel"}]}}],"hfov":360,"hfovMax":130,"adjacentPanoramas":[{"data":{"overlayID":"overlay_1E0532C2_0F4A_2599_4198_D12A03521B06"},"panorama":"this.panorama_03F41950_0F15_E1C0_419F_5C93B5A79FFC","yaw":19.83,"distance":3.87,"class":"AdjacentPanorama","select":"this.overlay_1E0532C2_0F4A_2599_4198_D12A03521B06.get('areas').forEach(function(a){ a.trigger('click') })"}],"id":"panorama_02E240D6_0E97_BEF3_4171_F89997DAF857","vfov":180,"data":{"label":"Entr\u00e9e"},"thumbnailUrl":"media/panorama_02E240D6_0E97_BEF3_4171_F89997DAF857_t.webp","label":trans('panorama_02E240D6_0E97_BEF3_4171_F89997DAF857.label'),"class":"Panorama"},{"borderColor":"#000000","iconURL":"skin/Button_1CCEEBD7_0F57_F2FF_419F_749ECFCF2676.png","toolTipFontFamily":"Arial","paddingRight":0,"pressedIconHeight":30,"toolTipBorderColor":"#767676","id":"Button_1CCEEBD7_0F57_F2FF_419F_749ECFCF2676","pressedRollOverBackgroundColorRatios":[0],"layout":"horizontal","fontSize":12,"paddingTop":0,"data":{"name":"Button Settings Mute"},"fontFamily":"Arial","toolTipBackgroundColor":"#F6F6F6","pressedIconWidth":30,"horizontalAlign":"center","paddingBottom":0,"toolTipPaddingRight":6,"pressedRollOverBackgroundColor":["#666666"],"pressedIconURL":"skin/Button_1CCEEBD7_0F57_F2FF_419F_749ECFCF2676_pressed.png","rollOverBackgroundColorRatios":[0],"backgroundColor":["#333333"],"propagateClick":false,"fontColor":"#FFFFFF","iconWidth":30,"class":"Button","toolTipPaddingTop":4,"minHeight":1,"verticalAlign":"middle","minWidth":1,"rollOverBackgroundColor":["#666666"],"toolTipShadowColor":"#333333","toolTipFontColor":"#606060","rollOverBackgroundOpacity":1,"toolTipPaddingBottom":4,"width":60,"toolTip":trans('Button_1CCEEBD7_0F57_F2FF_419F_749ECFCF2676.toolTip'),"backgroundColorRatios":[0],"paddingLeft":0,"iconHeight":30,"mode":"toggle","height":60,"toolTipTextShadowColor":"#000000","toolTipPaddingLeft":6},{"duration":500,"id":"effect_1726FE8E_0F76_5551_4194_B0858A12913A","class":"FadeOutEffect"},{"borderColor":"#000000","paddingRight":0,"click":"this.setLocale('en')","id":"Button_1166EC2A_0F73_F556_41A3_C2093C1B62AF","pressedRollOverBackgroundColorRatios":[0],"layout":"horizontal","fontSize":"16px","paddingTop":0,"data":{"name":"Button settings EN"},"fontFamily":"Arial","horizontalAlign":"center","paddingBottom":0,"pressedRollOverBackgroundColor":["#666666"],"rollOverBackgroundColorRatios":[0],"backgroundColor":["#333333"],"propagateClick":false,"fontColor":"#FFFFFF","iconWidth":30,"class":"Button","minHeight":1,"verticalAlign":"middle","minWidth":1,"rollOverBackgroundColor":["#666666"],"rollOverBackgroundOpacity":1,"width":60,"pressedRollOverFontSize":"16px","backgroundColorRatios":[0],"paddingLeft":0,"iconHeight":30,"mode":"toggle","height":60,"label":trans('Button_1166EC2A_0F73_F556_41A3_C2093C1B62AF.label')},{"borderColor":"#000000","iconURL":"skin/Button_1CCD0BD8_0F57_F2F1_4171_EF5632C396D5.png","toolTipFontFamily":"Arial","paddingRight":0,"pressedIconHeight":30,"toolTipBorderColor":"#767676","id":"Button_1CCD0BD8_0F57_F2F1_4171_EF5632C396D5","pressedRollOverBackgroundColorRatios":[0],"layout":"horizontal","fontSize":12,"paddingTop":0,"data":{"name":"Button Settings Fullscreen"},"fontFamily":"Arial","toolTipBackgroundColor":"#F6F6F6","pressedIconWidth":30,"horizontalAlign":"center","paddingBottom":0,"toolTipPaddingRight":6,"pressedRollOverBackgroundColor":["#666666"],"pressedIconURL":"skin/Button_1CCD0BD8_0F57_F2F1_4171_EF5632C396D5_pressed.png","rollOverBackgroundColorRatios":[0],"backgroundColor":["#333333"],"propagateClick":false,"fontColor":"#FFFFFF","iconWidth":30,"class":"Button","toolTipPaddingTop":4,"minHeight":1,"verticalAlign":"middle","minWidth":1,"rollOverBackgroundColor":["#666666"],"toolTipShadowColor":"#333333","toolTipFontColor":"#606060","rollOverBackgroundOpacity":1,"toolTipPaddingBottom":4,"width":60,"toolTip":trans('Button_1CCD0BD8_0F57_F2F1_4171_EF5632C396D5.toolTip'),"backgroundColorRatios":[0],"paddingLeft":0,"iconHeight":30,"mode":"toggle","height":60,"toolTipTextShadowColor":"#000000","toolTipPaddingLeft":6},{"items":[{"player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_02E240D6_0E97_BEF3_4171_F89997DAF857_camera","media":"this.panorama_02E240D6_0E97_BEF3_4171_F89997DAF857","class":"PanoramaPlayListItem"},{"player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_03F41950_0F15_E1C0_419F_5C93B5A79FFC_camera","media":"this.panorama_03F41950_0F15_E1C0_419F_5C93B5A79FFC","class":"PanoramaPlayListItem"}],"id":"ThumbnailList_01A5C2A3_0F14_E341_4184_AB4FA27892AC_playlist","class":"PlayList"},{"data":{"label":"nature"},"autoplay":true,"audio":"this.audiores_00E1E47F_0F53_F5AE_41AB_8DB5A867FDD4","id":"audio_00E0D481_0F53_F552_4195_DBFC4FACB9DC","class":"PanoramaAudio"},{"borderColor":"#000000","paddingRight":0,"click":"this.setLocale('nl')","id":"Button_1480CF39_0F73_F3B2_416E_CADEBB1EA30A","pressedRollOverBackgroundColorRatios":[0],"layout":"horizontal","fontSize":"16px","paddingTop":0,"data":{"name":"Button settings NL"},"fontFamily":"Arial","horizontalAlign":"center","paddingBottom":0,"pressedRollOverBackgroundColor":["#666666"],"rollOverBackgroundColorRatios":[0],"backgroundColor":["#333333"],"propagateClick":false,"fontColor":"#FFFFFF","iconWidth":30,"class":"Button","minHeight":1,"verticalAlign":"middle","minWidth":1,"rollOverBackgroundColor":["#666666"],"pressedBackgroundColorRatios":[0],"rollOverBackgroundOpacity":1,"width":60,"pressedBackgroundColor":["#333333"],"backgroundColorRatios":[0],"paddingLeft":0,"iconHeight":30,"mode":"toggle","height":60,"label":trans('Button_1480CF39_0F73_F3B2_416E_CADEBB1EA30A.label')},{"aaEnabled":true,"displayPlaybackBar":true,"arrowKeysAction":"translate","class":"PanoramaPlayer","mouseControlMode":"drag_rotation","keepModel3DLoadedWithoutLocation":true,"touchControlMode":"drag_rotation","id":"MainViewerPanoramaPlayer","viewerArea":"this.MainViewer"},{"items":["this.PanoramaPlayListItem_2A2F1F0A_0F5E_7356_41A5_1AF43C142761","this.PanoramaPlayListItem_2A2F7F0A_0F5E_7356_419D_627D3AB74F84"],"id":"mainPlayList","class":"PlayList"},{"movements":[{"yawSpeed":7.96,"easing":"cubic_in","yawDelta":18.5,"class":"DistancePanoramaCameraMovement"},{"yawSpeed":7.96,"yawDelta":323,"class":"DistancePanoramaCameraMovement"},{"yawSpeed":7.96,"easing":"cubic_out","yawDelta":18.5,"class":"DistancePanoramaCameraMovement"}],"id":"sequence_05960094_0E96_7D76_417A_B7F7E7017384","class":"PanoramaCameraSequence"},{"yaw":-6.94,"pitch":44.38,"bleaching":0.04,"id":"overlay_011AED7F_0F36_5F66_41AB_9C211D8910F7","class":"LensFlarePanoramaOverlay"},{"data":{"hasPanoramaAction":true,"label":"GoToEntrée"},"items":[{"data":{"label":"GoToEntr\u00e9e"},"class":"QuadHotspotPanoramaOverlayImage","vertices":[{"pitch":-20.98,"yaw":90.92,"class":"PanoramaPoint"},{"pitch":-20.98,"yaw":102.15,"class":"PanoramaPoint"},{"pitch":-28.49,"yaw":102.33,"class":"PanoramaPoint"},{"pitch":-28.01,"yaw":89.82,"class":"PanoramaPoint"}],"distance":50,"image":"this.AnimatedImageResource_2A23AE41_0F5E_75D2_41AB_CA6CDE424B11"}],"enabledInCardboard":true,"areas":["this.HotspotPanoramaOverlayArea_1F415FD1_0F36_5BBA_41A6_FA32232A6FD7"],"maps":[],"useHandCursor":true,"id":"overlay_1F47EFCC_0F36_5BAA_41A3_31F21B250D97","class":"HotspotPanoramaOverlay"},{"gain":0.01,"fadeOutTime":300,"id":"audiores_00E1E47F_0F53_F5AE_41AB_8DB5A867FDD4","class":"AudioResource","mp3Url":trans('audiores_00E1E47F_0F53_F5AE_41AB_8DB5A867FDD4.mp3Url')},{"movements":[{"yawSpeed":7.96,"easing":"cubic_in","yawDelta":18.5,"class":"DistancePanoramaCameraMovement"},{"yawSpeed":7.96,"yawDelta":323,"class":"DistancePanoramaCameraMovement"},{"yawSpeed":7.96,"easing":"cubic_out","yawDelta":18.5,"class":"DistancePanoramaCameraMovement"}],"id":"sequence_04826348_0F15_21CF_4189_4252BB1CE891","class":"PanoramaCameraSequence"},{"bleachingDistance":0.5,"yaw":47.06,"pitch":26.02,"bleaching":0.04,"id":"overlay_02A4490D_0F35_E4AA_418F_B5E78629B43D","class":"LensFlarePanoramaOverlay"},{"data":{"hasPanoramaAction":true,"label":"GoToDevanture"},"items":[{"data":{"label":"GoToDevanture"},"class":"QuadHotspotPanoramaOverlayImage","vertices":[{"pitch":-20.23,"yaw":12.52,"class":"PanoramaPoint"},{"pitch":-19.78,"yaw":25.61,"class":"PanoramaPoint"},{"pitch":-27.14,"yaw":28.44,"class":"PanoramaPoint"},{"pitch":-27.64,"yaw":13.27,"class":"PanoramaPoint"}],"distance":50,"image":"this.AnimatedImageResource_2A23FE41_0F5E_75D2_41A8_7EAD7235E2CD"}],"enabledInCardboard":true,"areas":["this.HotspotPanoramaOverlayArea_1E06B2C3_0F4A_259E_4126_FE7D2F3C51B0"],"maps":[],"useHandCursor":true,"id":"overlay_1E0532C2_0F4A_2599_4198_D12A03521B06","class":"HotspotPanoramaOverlay"},{"camera":"this.panorama_02E240D6_0E97_BEF3_4171_F89997DAF857_camera","media":"this.panorama_02E240D6_0E97_BEF3_4171_F89997DAF857","begin":"this.setEndToItemIndex(this.mainPlayList, 0, 1)","player":"this.MainViewerPanoramaPlayer","id":"PanoramaPlayListItem_2A2F1F0A_0F5E_7356_41A5_1AF43C142761","class":"PanoramaPlayListItem"},{"camera":"this.panorama_03F41950_0F15_E1C0_419F_5C93B5A79FFC_camera","media":"this.panorama_03F41950_0F15_E1C0_419F_5C93B5A79FFC","end":"this.trigger('tourEnded')","begin":"this.setEndToItemIndex(this.mainPlayList, 1, 0)","player":"this.MainViewerPanoramaPlayer","id":"PanoramaPlayListItem_2A2F7F0A_0F5E_7356_419D_627D3AB74F84","class":"PanoramaPlayListItem"},{"rowCount":6,"finalFrame":"first","class":"AnimatedImageResource","frameCount":24,"colCount":4,"id":"AnimatedImageResource_2A23AE41_0F5E_75D2_41AB_CA6CDE424B11","levels":[{"width":1080,"url":"media/res_1E13077C_0F4A_2B69_41A3_306420E96370_0.webp","height":900,"class":"ImageResourceLevel"}],"frameDuration":41},{"mapColor":"any","displayTooltipInTouchScreens":true,"click":"this.setPanoramaCameraWithSpot(this.mainPlayList, this.PanoramaPlayListItem_2A2F1F0A_0F5E_7356_41A5_1AF43C142761, -2.769230769230769, -0.3352415026833623, 110 || TDV.Player.DEFAULT_PANORAMA_HFOV); this.setPlayListSelectedIndex(this.mainPlayList, 0)","id":"HotspotPanoramaOverlayArea_1F415FD1_0F36_5BBA_41A6_FA32232A6FD7","class":"HotspotPanoramaOverlayArea"},{"rowCount":6,"finalFrame":"first","class":"AnimatedImageResource","frameCount":24,"colCount":4,"id":"AnimatedImageResource_2A23FE41_0F5E_75D2_41A8_7EAD7235E2CD","levels":[{"width":1080,"url":"media/res_1E13077C_0F4A_2B69_41A3_306420E96370_0.webp","height":900,"class":"ImageResourceLevel"}],"frameDuration":41},{"mapColor":"any","displayTooltipInTouchScreens":true,"click":"this.setPanoramaCameraWithSpot(this.mainPlayList, this.PanoramaPlayListItem_2A2F7F0A_0F5E_7356_419D_627D3AB74F84, -40.43076923076923, 2.43577817531306, 110 || TDV.Player.DEFAULT_PANORAMA_HFOV); this.setPlayListSelectedIndex(this.mainPlayList, 1)","id":"HotspotPanoramaOverlayArea_1E06B2C3_0F4A_259E_4126_FE7D2F3C51B0","class":"HotspotPanoramaOverlayArea"}],"start":"this.init(); this.syncPlaylists([this.mainPlayList,this.ThumbnailList_01A5C2A3_0F14_E341_4184_AB4FA27892AC_playlist]); this.syncPlaylists([this.ThumbnailList_01A5C2A3_0F14_E341_4184_AB4FA27892AC_playlist,this.mainPlayList]); this.syncPlaylists([this.ThumbnailList_01A5C2A3_0F14_E341_4184_AB4FA27892AC_playlist,this.mainPlayList]); if(!this.get('fullscreenAvailable')) { [this.Button_1CCD0BD8_0F57_F2F1_4171_EF5632C396D5].forEach(function(component) { if(component.get('class') != 'ViewerArea') component.set('visible', false); }) }","id":"rootPlayer","buttonToggleMute":"this.Button_1CCEEBD7_0F57_F2FF_419F_749ECFCF2676","data":{"history":{},"displayTooltipInTouchScreens":true,"defaultLocale":"fr","name":"Player541","locales":{"fr":"locale/fr.txt","en":"locale/en.txt","nl":"locale/nl.txt"},"textToSpeechConfig":{"pitch":1,"speechOnInfoWindow":false,"speechOnQuizQuestion":false,"rate":1,"stopBackgroundAudio":false,"volume":1,"speechOnTooltip":false}},"backgroundColor":["#FFFFFF"],"gap":10,"propagateClick":false,"defaultMenu":["fullscreen","mute","rotation"],"class":"Player","scrollBarColor":"#000000","minHeight":0,"buttonToggleFullscreen":"this.Button_1CCD0BD8_0F57_F2F1_4171_EF5632C396D5","layout":"absolute","minWidth":0,"watermark":false,"width":"100%","backgroundColorRatios":[0],"scripts":{"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"updateIndexGlobalZoomImage":TDV.Tour.Script.updateIndexGlobalZoomImage,"translate":TDV.Tour.Script.translate,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"cloneBindings":TDV.Tour.Script.cloneBindings,"clone":TDV.Tour.Script.clone,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"openLink":TDV.Tour.Script.openLink,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"cloneGeneric":TDV.Tour.Script.cloneGeneric,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"createTween":TDV.Tour.Script.createTween,"historyGoForward":TDV.Tour.Script.historyGoForward,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"quizStart":TDV.Tour.Script.quizStart,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"getPixels":TDV.Tour.Script.getPixels,"quizFinish":TDV.Tour.Script.quizFinish,"showWindow":TDV.Tour.Script.showWindow,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"startMeasurement":TDV.Tour.Script.startMeasurement,"executeJS":TDV.Tour.Script.executeJS,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"textToSpeech":TDV.Tour.Script.textToSpeech,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"init":TDV.Tour.Script.init,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"getMediaByName":TDV.Tour.Script.getMediaByName,"downloadFile":TDV.Tour.Script.downloadFile,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"mixObject":TDV.Tour.Script.mixObject,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"enableVR":TDV.Tour.Script.enableVR,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"isPanorama":TDV.Tour.Script.isPanorama,"initAnalytics":TDV.Tour.Script.initAnalytics,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"setValue":TDV.Tour.Script.setValue,"getMainViewer":TDV.Tour.Script.getMainViewer,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"resumePlayers":TDV.Tour.Script.resumePlayers,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"existsKey":TDV.Tour.Script.existsKey,"initQuiz":TDV.Tour.Script.initQuiz,"playAudioList":TDV.Tour.Script.playAudioList,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"setMapLocation":TDV.Tour.Script.setMapLocation,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"registerKey":TDV.Tour.Script.registerKey,"showPopupImage":TDV.Tour.Script.showPopupImage,"unregisterKey":TDV.Tour.Script.unregisterKey,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"quizShowScore":TDV.Tour.Script.quizShowScore,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"shareSocial":TDV.Tour.Script.shareSocial,"disableVR":TDV.Tour.Script.disableVR,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"getKey":TDV.Tour.Script.getKey,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"getComponentByName":TDV.Tour.Script.getComponentByName,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"historyGoBack":TDV.Tour.Script.historyGoBack,"setModel3DCameraWithCurrentSpot":TDV.Tour.Script.setModel3DCameraWithCurrentSpot,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"toggleVR":TDV.Tour.Script.toggleVR,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"getOverlays":TDV.Tour.Script.getOverlays,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"setLocale":TDV.Tour.Script.setLocale,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce},"scrollBarMargin":2,"height":"100%"};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs, script['data']['createQuizConfig'] = function () {
    var a = {};
    return this['get']('data')['translateObjs'] = translateObjs, a;
}, TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device.js.map
})();
//Generated with v2025.1.14, Tue Jul 15 2025