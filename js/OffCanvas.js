(function() {

	var OffCanvas = function(props) {
		// 侧边栏内容
		this.html = props.html || "";
		// 类型
		this.type = props.type;
		// 容器
		this.wraper = props.wraper;
		this.open = false;
		this.create();

	};

	OffCanvas.prototype.create = function() {
		if (this.open) return;
		var panel = document.createElement("div");
		panel.innerHTML = this.html;
		panel.className = "offcanvas " + this.type;
		// remove时用
		this.panel = panel;
		// 添加或移除类的容器
		this.act = this.type == "offcanvas-overlay" ? this.panel : this.wraper;

		// 不同类型OffCanvas，插入的父节点
		this.appendedParent = (this.type == "offcanvas-overlay" || this.type == "offcanvas-push") ? this.wraper : document.body;
		// 插入DOM
		this.appendedParent.appendChild(panel);
		console.log("add");
		// reflow触发动画
		panel.offsetWidth = panel.offsetWidth;
		this.act.classList.add("active");
		this.open = true;
		document.addEventListener("click", this, false);

	};

	OffCanvas.prototype.close = function() {
		if (!this.open) return;
		this.act.classList.remove("active");
		var that = this;
		// 移除
		setTimeout(function() {
			that.appendedParent.removeChild(that.panel);
			console.log("remove");
		}, 200);
		this.open = false;
		document.removeEventListener("click", this, false);
	};

	OffCanvas.prototype.handleEvent = function(e) {

		// 事件处理
		var ele = e.target;
		if (this.open && ele !== this.panel && e.target.className !== "btn") {
			this.close();
		}

	};

	window.OffCanvas = OffCanvas;

})();
