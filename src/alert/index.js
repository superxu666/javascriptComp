function WAlert(obj) {

    // if (this === window) {
    //     return new WAlert();
    // }

    if (this instanceof WAlert) {
        this.init(obj);
    } else {
        return new WAlert(obj);
    }
}
WAlert.prototype = {
    init: function (obj) {
        this.core = {};
        this.core.container = obj.container || 'body';
        this.core.text = obj.text || '';
        this.core.confirm = obj.confirm;
        this.core.cancel = obj.cancel;
        this.render()
    },
    addEvent: function () {

        var btnG = this.selectorEle('.wl-group-btn'),
            children = btnG.children,
            self = this;

        for (var i = 0; i < children.length; i++) {
            children[i].addEventListener('click', function (event) {

                var currentElement = event.target;

                if (currentElement.innerText === '确定') {

                    self.core.confirm(event);
                } else {

                    self.core.cancel(event);
                }

            });
        }

    },
    render: function () {

        var domStr = [
            '<div class="wl-alert">',
            '<div class="wl-container">',
            '<h3>提示</h3>',
            '<p>',
            this.core.text,
            '</p>',
            '<div class="wl-group-btn">',
            '<button>确定</button>',
            '<button>取消</button>',
            '</div>',
            '</div>',
            '</div>'
        ].join('');

        this.selectorEle(this.core.container).innerHTML = domStr;
        this.addEvent();
    },
    selectorEle(selector, all = false) {
        return all ? document.querySelectorAll(selector) : document.querySelector(selector)
    }
}