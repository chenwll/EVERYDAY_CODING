const domtree = {
    tag: "div",
    props: {
      id: "myDiv",
      class: "container",
    },
    children: [
      "Hello,",
      {
        tag: "span",
        props: {
          style: "color: blue;",
        },
        children: ["World!"],
      },
    ],
  };
  
  // 创建真实的DOM节点
  const realDOM = jsonToDom(domtree);
  
  // 将DOM节点添加到页面中
  document.body.appendChild(realDOM);
  

const jsonToDom = (json) => {
    if(typeof json === 'string'){
        return document.createTextNode(json);
    }

    const {tag, props, children} = json;
    const element = document.createElement(tag);
    if(props) {
        for(let [key, value] of Object.entries(props)){
            element.setAttribute(key,value);
        }
    }

    if(Array.isArray(children)){
        for(const childNode of children) {
            const ele = jsonToDom(childNode);
            element.appendChild(ele);
        }
    }

    return element;
}