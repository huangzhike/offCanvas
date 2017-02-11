(function() {

	var OffCanvas = function(props) {
		// 侧边栏内容
		this.html = props.html || "";
		// 类型
		this.type = props.type;
		// 父容器
		this.wraper = props.wraper;
		this.btn = props.btn;

	};

	OffCanvas.prototype.create = function() {
		if (this.created == true) return;

		console.log("created");

		var panel = document.createElement("div");
		panel.innerHTML = this.html;
		panel.className = "offcanvas " + this.type;
		// remove时用
		this.panel = panel;

		// 不同类型OffCanvas，插入的父节点
		this.appendedParent = this.type == "offcanvas-reveal" ? document.body : this.wraper;
		// 插入DOM
		this.appendedParent.appendChild(panel);

		// 添加或移除类的容器
		this.active = this.type == "offcanvas-overlay" ? this.panel : this.wraper;
		// overlay reflow
		this.active.offsetWidth = this.active.offsetWidth;
		this.active.classList.add("active");

		document.addEventListener("click", this, false);
		this.created = true;

	};

	OffCanvas.prototype.close = function() {

		this.active.classList.remove("active");
		var that = this;
		// 移除
		setTimeout(function() {
			that.appendedParent.removeChild(that.panel);
			console.log("removed");
		}, 200);

		document.removeEventListener("click", this, false);
		this.created = false;
	};

	OffCanvas.prototype.handleEvent = function(e) {

		// 事件处理
		var ele = e.target;
		if (ele !== this.panel && e.target !== this.btn) {
			this.close();
		}

	};

	window.OffCanvas = OffCanvas;

})();
