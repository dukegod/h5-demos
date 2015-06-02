# HTML

## 响应式设计（responsive）

### 注意点
+ 尽量少用无关紧要的div
+ 不要使用内联(inline)
+ 尽量少用JS或FLASH
+ 摒弃任何

### 更好的布局
- 使用html5 doctype 和相关的指南
- 重置好你的样式（reset.css）
- 一个简单的有语义的核心的布局
- 给重要的网页元素使用简单的技巧，比如导航菜单之类元素。


### Responsive设计——不同设备的分辨率设置

	@media only screen and (min-width: 100px) and (max-width: 380px) {
		body{
			background-color: #F5E79E;
			content: "small screen";
		}
	}

	@media only screen and (min-width: 380px) and (max-width: 680px) {
		body{
			background-color: #FFFF00;
			content: "Middle screen";
		}
	}
	@media only screen and (min-width: 680px) and (max-width: 1024px) {
		body{
			background-color: #419641;
			content: "big screen";
		}
	}