(function() {

	var OffCanvas = function(props) {
			// 侧边栏内容
			this.html = props.html || "";
			// 类型
			this.type = props.type;
			// 容器
			this.wraper = props.wraper;
			this.open = false;
			// 不同类型OffCanvas，插入的父节点
			this.par = (this.type == "offcanvas-overlay" || this.type == "offcanvas-push") ? this.wraper : document.body;
		};

	OffCanvas.prototype.create = function() {
		if (this.open) return;
		var OffC = document.createElement("div");
		OffC.innerHTML = this.html;
		OffC.className = "offcanvas " + this.type;
		// remove时用
		this.OffC = OffC;
		// 添加或移除类的容器
		this.act = this.type == "offcanvas-overlay" ? this.OffC : this.wraper;
		// 插入DOM
		this.par.appendChild(OffC);
		console.log("add");
		// reflow触发动画
		OffC.offsetWidth = OffC.offsetWidth;
		this.act.classList.add("OffC-active");
		this.open = true;
	};

	OffCanvas.prototype.close = function() {
		if (!this.open) return;
		this.act.classList.remove("OffC-active");
		var that = this;
		// 移除
		setTimeout(function() {
			that.par.removeChild(that.OffC);
			console.log("remove");
		}, 200);
		this.open = false;
	};

	OffCanvas.prototype.handleEvent = function() {
		// 事件处理
		this.open ? this.close() : this.create();
	};

	return window.OffCanvas = OffCanvas;

})();
