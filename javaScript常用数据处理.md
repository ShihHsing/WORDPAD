方法|说明
--- | ---
concat() | 合并两个数组 合并空数则可以做深度克隆
slice() | 截取数组 传入一个值时:从传入下标往后截取 传入两个值:开始下标, 截取长度
splice(index,howmany,item1,.....,itemX) | splice() 方法与 slice() 方法的作用是不同的，splice() 方法会直接对数组进行修改
application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;application/vnd.ms-excel | 表格文件判断类型
var obj = {name:'jack'};alert('name' in obj); // --> true;alert('toString' in obj); // --> true|判断JS对象是否拥有某属性;无论是name，还是原形链上的toString，都能检测到返回true。
var obj = {name:'jack'};obj.hasOwnProperty('name'); // --> true;obj.hasOwnProperty('toString'); // --> false|判断JS对象是否拥有某属性;原型链上继承过来的属性无法通过hasOwnProperty检测到，返回false。