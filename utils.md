/**
 *
 * 自我发现的小工具
 *
 * */

 /** ==========================================================================================================*/

dangerouslySetInnerHTML:
react中dangerouslySetInnerHTML使用（把字符串中的html代码直接渲染在网页中）
在react中，通过富文本编辑器进行操作后的内容，会保留原有的标签样式，并不能正确展示。
在显示时，将内容写入__html对象中即可。具体如下：
<div dangerouslySetInnerHTML = {{ __html: checkMessages.details }} />
如果是直接调用接口中的值，则是以上的写法，如果是单纯的显示固定的内容，用如下的写法：
<div dangerouslySetInnerHTML={{ __html: '<div>123</div>' }} />

强制组件更新:
react中强制跟新；也可以在改变属性值，但是没有改变引用的情况下使用setState
this.forceUpdate()

contenteditable:
可以把contenteditable属性应用给页面中的任何元素， 然后用户立即就可以编辑该元素
<div contenteditable/>

限制小数位数
限制小数位数，这里限制为两位小数
// const limit = value => {
//     const reg = /^(\-)*(\d+)\.(\d\d).*$/;
//     // console.log(value);
//     if(typeof value === 'string') {
//         return !isNaN(Number(value)) ? value.replace(reg, '$1$2.$3') : '';
//     } else if (typeof value === 'number') {
//         return !isNaN(value) ? String(value).replace(reg, '$1$2.$3') : '';
//     } else {
//         return '';
//     }
// };

开启热更新: 具体参考webpack
// process.env.NODE_ENV === 'development' && module.hot && module.hot.accept();

超出字数显示三个点： css样式
overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', width: '100px'

/** ========================================================================================================*/
Element.scrollIntoView() 方法让当前的元素滚动到浏览器窗口的可视区域内。

aria-label属性用来给当前元素加上的标签描述，接受字符串作为参数。是用不可视的方式给元素加label（如果被描述元素存在真实的描述元素，可使用 aria-labelledby 属性作为来绑定描述元素和被描述元素来代替）。

role 本质上是增强语义性，当现有的HTML标签不能充分表达语义性的时候，就可以借助role来说明。通常这种情况出现在一些自定义的组件上，这样可增强组件的可访问性、可用性和可交互性。
