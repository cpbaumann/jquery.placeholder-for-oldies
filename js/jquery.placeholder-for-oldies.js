/* 
* Author: cpbaumann
*/

(function ($) {
    "use strict";
    $.fn.extend({
        placeholderforoldies: function (options) {

            var defaults = { elementId: "default" },
                option = $.extend(defaults, options),
                //supportinput = (document.createElement('input').hasOwnProperty('placeholder') !== undefined),
                //supporttextarea = (document.createElement('textarea').hasOwnProperty('placeholder') !== undefined);
                supportinput = 'placeholder' in document.createElement('input'),
                supporttextarea = 'placeholder' in document.createElement('textarea');



            //console.log('supporttextarea: ' + supporttextarea);
            //console.log('supportinput: ' + supportinput);

            if (supportinput && supporttextarea) {
                return this;
            }

            return this.each(function () {

                var obj = $(this);
                if (option.elementId !== 'default') {
                    var element = $(option.elementId, obj);
                } else {
                    var element = $('*[placeholder]', obj);
                }

                element.each(function () {

                    var placeholder = $(this).attr('placeholder');

                    if ($(this).val() === '') {
                        //console.log('--initial--')
                        $(this).addClass('placeholder');
                        $(this).val(placeholder);
                    }

                    $(this).click(function () {
                        if ($(this).val() === placeholder) {
                            $(this).val('');
                            $(this).removeClass('placeholder');
                        }
                    });

                    $(this).blur(function () {
                        if ($(this).val() === '') {
                            $(this).val(placeholder);
                            $(this).addClass('placeholder');
                        }
                    });


                    $(this).parents('form').submit(function () {
                        $(this).find('[placeholder]').each(function () {
                            if ($(this).val() === $(this).attr('placeholder')) {
                                $(this).val('');
                            }
                        });
                    });

                });
            });
        }
    });
})(jQuery);