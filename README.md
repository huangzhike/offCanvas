
# offCanvas

**移动端观看**

<img width="200" height="200" src="img/code.png">


* 类似原生应用的汉堡菜单，点击开关侧边栏菜单的组件，目前实现效果：
	* push：点击按钮，侧边栏panel与主界面同时translate；
		* 原理：侧边栏与主界面在同一容器中，可以是body或别的，侧边栏在视野外，激活时容器整体translate，露出侧边栏，同时`overflow-x: hidden`
	* overlay：点击呼出侧边栏panel，主界面不动；
		* 原理：同上，只不过主界面不动，侧边栏translate
	* reveal：点击使主界面移动，reveal出下面的侧边栏panel；
		* 原理：侧边栏在主界面下（z-index小），激活时主界面translate，露出侧边栏

* 使用方法：
	* 引入offcanvas.css
	* 引入OffCanvas.js
	* `new OffCanvas`调用：
	```
var yourName = new OffCanvas({
		// 侧边栏panel的html，自定义
		html: "",
		// 侧边栏类型，字符串
		type: "offcanvas-push",
		// DOM容器
		wraper: yourWraper,
		btn: yourBtn
	});

// 给DOMElement添加事件处理
DOMElement.addEventListener("click", yourName.create.bind(yourName));
```
* 这个写法有些麻烦，和之前的Modal有些不一样，不过懒得改了；
* 请使用高级浏览器；
* 别看js50行不到，踩了好多坑。。。
