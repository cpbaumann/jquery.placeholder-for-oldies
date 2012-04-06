/* 
* Author: cpbaumann
*/

(function($) {
    $.fn.extend({
        placeholderforoldies: function(options) {
           
           var defaults = {
                elementid: "elementid"
            };

            var option = $.extend(defaults, options);
            var support = 'placeholder' in document.createElement('input');

            if(support) {
                return this;
            }

            return this.each(function() {

                var obj = $(this);
                var elementid = '#'+option.elementid;
                var placeholder = $(elementid).attr('placeholder');

                if($(elementid).val() == '') {
                    $(elementid).val(placeholder);
                }   

                $(elementid).click(function() {
                    if($(elementid).val() == placeholder){
                        $(elementid).val('')
                    }
                });

                $(elementid).blur(function() {
                    if($(elementid).val() == ''){
                        $(elementid).val(placeholder);
                    }
                });
            });
        }
    });
})(jQuery);