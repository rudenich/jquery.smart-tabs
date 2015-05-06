(function($){
    var namespace='smartTabs'
    ;

    $[namespace] = {
        defaults:{
            triggerSelector:'[data-trigger]'
        },
        drivers:{

        }

    };
    $.fn[namespace] = function(config){
        return this.each(function(){
            var
                _this = $(this),
                instance
                ;
            config = config||{};
            if (_this.data(namespace)!=null){

            }else{
                config['domelement'] = _this;
                instance = new XTabs(config);
                _this.data(namespace,instance);
            }
        });
    };

    function XTabs(options){
        this.init(options);
    };

    XTabs.prototype = {
        init:function(_options){
            var
                options = $.extend({}, $[namespace].defaults,_options)
                ;
            this.domElement = options.domelement;
            console.log(options.triggerSelector);
            $(options.triggerSelector).on('click', $.proxy(this.onClick,this));
        },
        onClick:function(e){
            var
                $element = $(e.currentTarget),
                selector = $element.attr('href').replace(/#/,''),
                $content = this.domElement.find('[data-content='+selector+']');
            e.preventDefault();
            this.show($content);

        },
        show:function($element){
            var $visible = $element.siblings(':visible');
            if($visible.size()>0){
                $visible.fadeOut(function(){$element.fadeIn()});
            }else{
                $element.fadeIn();
            }

        },
        hide:function(){

        }
    };
})(jQuery);