/**
 *
 * wangEditor（详细参考文档）
 *
 * */

import React from 'react';
import E from "wangeditor";

class Demo extends React.Component{
    componentDidMount() {
        const elem = this.refs.editorElem;
        const editor = new E(elem);
        // 使用 onchange 函数监听内容的变化，并实时更新到 富文本编辑表单项 中
        editor.customConfig.onchange = (html) => {
            if (html.includes('table') && html.includes('tr') && html.includes('td')) {
                let htmlStr = html.replace('border="0"', 'border="1"');
                this.props.form.setFieldsValue({
                    observeProcess: htmlStr
                })
            } else if (html.includes('img') && html.includes('src') ) {
                // 这里可以加上图片处理
                this.props.form.setFieldsValue({
                    observeProcess: html
                })
            } else {
                this.props.form.setFieldsValue({
                    observeProcess: html
                })
            }
        };
        editor.customConfig.menus = [
            'head',  // 标题
            'bold',  // 粗体
            'fontSize',  // 字号
            'fontName',  // 字体
            'italic',  // 斜体
            'underline',  // 下划线
            'strikeThrough',  // 删除线
            'foreColor',  // 文字颜色
            'backColor',  // 背景颜色
            'justify',  // 对齐方式
            'image',  // 插入图片
            'table',  // 表格
            'undo',  // 撤销
            'redo'  // 重复
        ];
        editor.customConfig.showLinkImg = false;
        editor.customConfig.uploadImgShowBase64 = true;  // 使用 base64 保存图片
        editor.create();
    }

    render() {
        return (
            <div ref="editorElem" style={{textAlign: 'left'}}/>
        );
    }
}