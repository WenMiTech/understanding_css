1. 让vertical-align失效
图片默认是inline水平的，而vertical-align对块状水平的元素无感。因此，我们只要让图片display水平为block就可以了，我们可以直接设置display或者浮动、绝对定位等（如果布局允许）。例如：



2. 使用其他vertical-align值
告别baseline, 取用其他属性值，比方说bottom/middle/top都是可以的。

3. 直接修改line-height值
下面的空隙高度，实际上是文字计算后的行高值和字母x下边缘的距离。因此，只要行高足够小，实际文字占据的高度的底部就会在x的上面，下面没有了高度区域支撑，自然，图片就会有容器底边贴合在一起了。比方说，我们设置行高5像素：

4. line-height为相对单位，font-size间接控制
如果line-height是相对单位，例如line-height:1.6或者line-height:160%之类，也可以使用font-size间接控制，比方说来个狠的，font-size设为大鸡蛋0, 本质上还是改变line-height值.