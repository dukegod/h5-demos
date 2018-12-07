import marked from 'marked';
// import CodeMirror from 'codemirror';
// import 'codemirror/mode/javascript/javascript'
// import 'codemirror/keymap/sublime'
// import 'codemirror/lib/codemirror.css'



export function render(params) {
    let code = '';
    marked.setOptions({
        renderer: new marked.Renderer(),
        highlight(code) {
            return require('highlight.js').highlightAuto(code).value;
        },
        pedantic: false,
        gfm: true,
        tables: true,
        breaks: false,
        sanitize: false,
        smartLists: true,
        smartypants: false,
        xhtml: false
    });

    const renderer = new marked.Renderer();
    renderer.customDiv = function (text, level) {
        console.log(text);
        console.log(level);
        return `
            text
        `
    }
    

    return marked(params + code)
}
