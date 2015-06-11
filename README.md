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
### 自由缩放属性resize
> resize属性主要是用来改变元素尺寸大小的，其主要目的是增强用户体验
>
> *resize: none | both | horizontal | vertical | inherit*
>> none:用户不能拖动元素修改尺寸大小
>>
>>both:用户可以拖动元素，同时修改元素的宽度和高度
>>
>>horizontal:用户可以拖动元素，仅可以修改元素的宽度，但不能修改元素的高度。
>>
>>vertical:用户可以拖动元素，仅可以修改元素的高度，但不能修改元素的宽度。
>>
>>inherit:继承父元素的resize属性值。
	
### 有个比较好的js面向对象的方法，参考imook写的
+ *index-pic-opp-good.html*		
+ *index-pic2.html*