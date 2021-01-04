(()=>{"use strict";var e,t=$.mq.action;jQuery.validator.setDefaults({rules:{region:{required:!0},fullname:{required:!0,fullname:!0},birthDate:{required:!0,birthDate:!0},email:{required:!0,email:!0},agreement:{required:!0},phone:{required:!0,phone:!0}},messages:{agreement:"Обязательное поле",name:"",surname:"",phone:"",email:""},errorPlacement:function(e,t){},submitHandler:function(e){console.log("Submit")}}),[{selector:"fullname",regexp:/^[А-Яа-я][а-я]{2,}(?:\s+[А-Яа-я][а-я]{2,})?(?:\s+[А-Яа-я][а-я]{2,})(?:\s+)*\r?$/},{selector:"birthDate",regexp:/^[0-9\.]{10}?$/},{selector:"cyryllic",regexp:/^[а-я\s?-\s?А-Я]*\s?\s?$/},{selector:"phone",regexp:/^.. [(][0-9]{3}[)] [0-9]{3}[-][0-9]{2}[-][0-9]{2}\s?$/}].forEach((function(e){var t=e.selector,n=e.regexp;$.validator.addMethod(t,(function(e,t){return this.optional(t)||n.test(e)}))})),$.fn.datepicker.languages["ru-RU"]={format:"dd.mm.YYYY",days:["Воскресенье","Понедельник","Вторник","Среда","Четверг","Пятница","Суббота"],daysShort:["Вс","Пн","Вт","Ср","Чт","Пт","Сб"],daysMin:["Вс","Пн","Вт","Ср","Чт","Пт","Сб"],months:["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"],monthsShort:["Янв","Фев","Мар","Апр","Май","Июн","Июл","Авг","Сен","Окт","Ноя","Дек"],weekStart:1,startView:0,yearFirst:!1,yearSuffix:""};var n=$('[data-toggle="datepicker"]');$(".js-menu").click((function(){$(this).toggleClass("is-active"),$(".mobile-menu").toggleClass("opened")})),$('input[name="phone"]').inputmask("+7 (999) 999-99-99"),$('input[name="birthDate"]').inputmask("99.99.9999"),$('input[name="passportSeries"]').inputmask("99 99 999999"),$('input[name="inn"]').inputmask("999999999999"),$('input[name="driverCert"]').inputmask("9{2}A{2}9{6}"),$('input[name="stateSign"]').inputmask("A{1}9{3}A{2}9{2,3}"),$('input[name="vehicleCertificate"]').inputmask("9{10}"),$(".js-popup").click((function(e){var t;e.preventDefault(),t=$(this).attr("href"),$.magnificPopup.open({items:{src:t},type:"inline",fixedContentPos:!1,fixedBgPos:!0,overflowY:"auto",closeBtnInside:!0,preloader:!1,midClick:!0,removalDelay:300,closeMarkup:'<button type="button" class="mfp-close">'.concat('<svg class="icon icon--cancel"><use xlink:href="img/svg-sprite.svg#cancel"></use></svg>',"</button>"),mainClass:"mfp-fade-zoom"})})),n.datepicker({language:"ru-RU",autoHide:!0}).on("pick.datepicker",(function(t){setTimeout((function(){e.element('input[name="birthDate"]')}),100)})),$(".input__icon-wrap").on("click",(function(e){e.stopPropagation(),$(this).siblings().focus()})),$("select").styler({selectSearch:!0,selectSearchLimit:6,selectPlaceholder:"Выберите регион",selectSmartPositioning:!1,onSelectOpened:function(){$(this).find(".jq-selectbox__search input").focus()},onSelectClosed:function(){e.element("select")},onFormStyled:function(){$(".jq-selectbox__select .jq-selectbox__trigger").html('<svg class="icon icon--triangle-down"><use xlink:href="img/svg-sprite.svg#triangle-down"></use></svg>')}}),$("form").each((function(){e=$(this).validate()})),$(".js-scroll").click((function(e){e.preventDefault();var t=$(this).attr("href").replace("#",""),n=$("[data-id=".concat(t,"]"));if(n.length){var i=n.offset().top-20;return $("body, html").animate({scrollTop:i},700),!1}})),t("(max-width: 991px)",(function(){}),(function(){})),t("(max-width: 767px)",(function(){}),(function(){})),t("(max-width: 575px)",(function(){}),(function(){}))})();