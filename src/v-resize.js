const vResize = {
    bind(el, {value}) {
        if(!isFunction(value)) {
            throw new Error(`${value} must be a function`)
        }
        el.appendChild(createIframe(value))
        el.style.position = 'relative'
    }
}
const createIframe = (value) => {
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
        iframe.contentWindow.addEventListener('resize', function () {
            value({
                width: this.innerWidth,
                height: this.innerHeight
            })
        })
    })
  
    return iframe
}
const isFunction = v => Object.prototype.toString.call(v) === '[object Function]'
export default vResize;