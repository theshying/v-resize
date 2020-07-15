//v-resize.immediate
//v-resize


const vResize = {
    bind(el, { value, modifiers}) {
        if(!isFunction(value)) {
            throw new Error(`${value} must be a function`)
        }
        // eslint-disable-next-line no-unused-vars
        vResize.modifiers = modifiers
        vResize.el = el;
        vResize.value = value
        if(supportResizeObserver()) {
            createObserver();
            return;
        }
        el.style.position = 'relative'
        el.appendChild(createIframe())
    }
}

const createIframe = () => {
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
        const { modifiers, el, value}  = vResize;
        modifiers.immediate && emitElementSize(el, value);
        contentWindow.addEventListener('resize', function () {
            emitElementSize()
        })
    })
  
    return iframe
}
const createObserver = () => {
    let first = true;
    const { modifiers, el } = vResize;
    const observer = new ResizeObserver(()=> {
        //第一次触发，此时是渲染阶段触发的
        if(first) {
            first = false;
            if (!modifiers.immediate) {
                return;
            }
        }
        emitElementSize()
    })
    observer.observe(el)
}
const emitElementSize = () => {
    const {el, value } = vResize;
    const { scrollWidth, scrollHeight} = el
    value({
        width: scrollWidth,
        height: scrollHeight
    })

}

//是否支持原生resize observer
const supportResizeObserver = () => {
    return window.ResizeObserver && isFunction(window.ResizeObserver)
}
//是否是函数
const isFunction = v => Object.prototype.toString.call(v) === '[object Function]'

export default vResize;
