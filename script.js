$(function () {
    "use strict";
    var app = window.app || {};

    app.list = {
        locked: false,
        lock: function () {
            if (this.locked) {
                return false;
            }
            this.locked = true;
            $('body').addClass('ix-loader');
            return true;
        },
        init: function () {
            var _this = this;
            $(document)
                .on('click', '.ix-more-link a', function () {
                    var $this = $(this);
                    _this.loadPage($this.attr('href'), $this);
                    return false;
                });

        },
        unlock: function () {
            $('body').removeClass('ix-loader');
            this.locked = false;
        },

        loadPage: function (url, $element) {
            var _this = this;
            if (!this.lock()) {
                return false;
            }

            $.get(url, {}, function (response) {
                var $container = $element.closest('.ix-container');
                var html_list;
                var $block = $container.find('.ix-box');
                var $response = $('<div>').html(response);

                $block.append($response.find('#' + $container.attr('id') + ' .ix-box').html());
                html_list = $response.find('#' + $container.attr('id')).children('.ix-more-link').html();

                if (typeof  html_list !== 'undefined') {
                    $element.closest('.ix-more-link').html(html_list);
                }else{
                    $element.closest('.ix-more-link').html('');
                }
            }, 'html').always(function () {
                _this.unlock();
            });

        }
    };

    app.list.init();

});
