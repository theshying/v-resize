//v-resize.immediate
//v-resize

const vResize = {
    bind(el, { value, modifiers}) {
        if(!isFunction(value)) {
            throw new Error(`${value} must be a function`)
        }
        // eslint-disable-next-line no-unused-vars
        const {immediate} = modifiers
        if(supportResizeObserver()) {
            createObserver(el, value, immediate);
            return;
        }
        el.appendChild(createIframe(value, immediate))
        el.style.position = 'relative'
    }
}

const createIframe = (value, immediate) => {
    const iframe = document.createElement('iframe');
    iframe.style.border = 'none'
    iframe.style.zIndex = -99
    iframe.style.position = 'absolute'
    iframe.style.top = 0;
    iframe.style.bottom = 0;
    iframe.style.left = 0;
    iframe.style.right = 0;
    iframe.style.width = '100%';
    iframe.style.height = '100%';
    //插入到document中以后才能拿到contentWindow
    setTimeout(() => {
        const {contentWindow} = iframe;
        immediate && value({ width: contentWindow.innerWidth, height: contentWindow.innerHeight})
        contentWindow.addEventListener('resize', function () {
            value({
                width: this.innerWidth,
                height: this.innerHeight
            })
        })
    })
  
    return iframe
}
const createObserver = (el, value, immediate) => {
    let first = true;
    const observer = new ResizeObserver(e => {
        //第一次触发，此时是渲染阶段触发的
        if(first) {
            first = false;
            if (!immediate) {
                return;
            }
        }
        const {contentRect} = e[0];
        value({
            width: contentRect.width,
            height: contentRect.height,

        })
    })
    observer.observe(el)
}

//是否支持原生resize observer
const supportResizeObserver = () => {
    return isFunction(ResizeObserver)
}
//是否是函数
const isFunction = v => Object.prototype.toString.call(v) === '[object Function]'
export default vResize;