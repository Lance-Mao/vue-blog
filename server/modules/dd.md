[原文链接](https://mlwblog.cn/2018/04/10/python_numPy%E5%AD%A6%E4%B9%A0/)
## numPy

---

[维基百科](https://zh.wikipedia.org/wiki/NumPy)

### 特点

NumPy引用CPython(一个使用字节码的解释器)，而在这个Python实现解释器上所写的数学算法代码通常远比编译过的相同代码要来得慢。为了解决这个难题，NumPy引入了多维数组以及可以直接有效率地操作多维数组的函数与运算符。因此在NumPy上只要能被表示为针对数组或矩阵运算的算法，其运行效率几乎都可以与编译过的等效C语言代码一样快。[1]

NumPy提供了与MATLAB相似的功能与操作方式，因为两者皆为解释型语言，并且都可以让用户在针对数组或矩阵运算时提供较标量运算更快的性能。两者相较之下，MATLAB提供了大量的扩充工具箱(例如Simulink)；而NumPy则是根基于Python这个更现代、完整并且开放源代码的编程语言之上。此外NumPy也可以结合其它的Python扩充库。例如SciPy，这个库提供了更多与MATLAB相似的功能；以及Matplotlib，这是一个与MATLAB内置绘图功能类似的库。而从本质上来说，NumPy与MATLAB同样是利用BLAS与LAPACK来提供高效率的线性代数运算。


### ndarray 数据结构

NumPy的核心功能是"ndarray"(即n-dimensional array，多维数组)数据结构。这是一个表示多维度、同质并且固定大小的数组对象。而由一个与此数组相关系的数据类型对象来描述其数组元素的数据格式(例如其字符组顺序、在存储器中占用的字符组数量、整数或者浮点数等等)。

## 数组创建

---
NumPy的基础是一个同构的多维数据，数组中的元素可以通过下标来索引。在NumPy中，维度称之为axis（复数是axes），维度的数量称之为rank。

[首先获取NumPy](https://scipy.org/install.html),具体方式请打开链接

默认书写方式

```
import numpy as np
```

创建data1、data2两个普通数组，data1的rank为1,axis的长度为6。data2的rank为2，axis的长度为4。

```
>>> data1 = [6,7.5,8,0,1]
>>> data2 = [[1,2,3,4],[5,6,7,8]]
>>> data1
[6, 7.5, 8, 0, 1]
>>> data2
[[1, 2, 3, 4], [5, 6, 7, 8]]
```

通过array函数来创建NumPy的数组

```
>>> arr1 = np.array(data1)
>>> arr2 = np.array(data2)
>>> arr1
array([6. , 7.5, 8. , 0. , 1. ])
>>> arr2
array([[1, 2, 3, 4],
       [5, 6, 7, 8]])
```

NumPy的数组类是ndarray，它有一个别名是 numpy.array，但这与Python标准库的array.array并不一样。后者仅仅是一个一维数组。而ndarray具有以下的属性：

- ndarray.ndim：数组的维数。在Python世界中，维数称之为rank
- ndarray.shape：数组的维度。这是一系列数字，长度由数组的维度（ndim）决定。例如：长度为n的一维数组的shape是n。一个n行m列的矩阵的shape是n,m
- ndarray.size：数组中所有元素的数量
- ndarray.dtype：数组中元素的类型，例如numpy.int32, numpy.int16或者numpy.float64
- ndarray.itemsize：数组中每个元素的大小，单位为字节
- ndarray.data：存储数组元素的缓冲。通常我们只需要通过下标来访问元素，而不需要访问缓冲

ndarray属性实例

```
>>> arr1.ndim
1
>>> arr2.ndim
2
>>> arr1.shape
(5,)
>>> arr2.shape
(2, 4)
>>> arr1.size
5
>>> arr2.size
8
>>> arr1.dtype
dtype('float64')
>>> arr2.dtype
dtype('int64')
>>> arr1.itemsize
8
>>> arr2.itemsize
8
```

### 创建指定的数组

---

- 指定rank为2：

```
>>> np.array([1, 2, 3], ndmin=2)
array([[1, 2, 3]])
```

- 指定为complex类型的数据：

```
>>> np.array([1, 2, 3], dtype=complex)
array([1.+0.j, 2.+0.j, 3.+0.j])
```

- 生成数组并赋为特殊值： 
  - ones：全1 
  - zeros：全0 
  - empty：随机数，取决于内存情况

```
>>> np.zeros( (3,4) )
array([[ 0.,  0.,  0.,  0.],
       [ 0.,  0.,  0.,  0.],
       [ 0.,  0.,  0.,  0.]])
>>> np.ones( (2,3,4), dtype=np.int16 )
array([[[ 1, 1, 1, 1],
        [ 1, 1, 1, 1],
        [ 1, 1, 1, 1]],
       [[ 1, 1, 1, 1],
        [ 1, 1, 1, 1],
        [ 1, 1, 1, 1]]], dtype=int16)
>>> np.empty( (2,3) )
array([[  3.73603959e-262,   6.02658058e-154,   6.55490914e-260],
       [  5.30498948e-313,   3.14673309e-307,   1.00000000e+000]])
```

- 生成均匀分布的array： 
  - arange（最小值，最大值，步长）（左闭右开） 
  - linspace（最小值，最大值，元素数量）

```
>>> np.arange( 10, 30, 5 )
array([10, 15, 20, 25])

>>> np.linspace( 0, 9, 10)
array([0., 1., 2., 3., 4., 5., 6., 7., 8., 9.])
```

- 生成随机数random：

```
>>> np.random.random((2,3))
array([[0.41604856, 0.7216842 , 0.88832856],
       [0.42092882, 0.44241471, 0.07187805]])
```

## Shape与操作

根据已有数组进行相关的操作来产生一些新的数据结构

- reshape：根据已有数组和指定的shape，生成一个新的数组

```
>>> b = np.array([1,2,3,4,5,6,7,8,9])
>>> b.reshape((3,3))
array([[1, 2, 3],
       [4, 5, 6],
       [7, 8, 9]])
```

注意：形状变化的原则是数组元素不能发生改变，比如这样写就是错误的，因为数组元素发生了变化。

```
>>> b.reshape((4,3))
Traceback (most recent call last):
  File "<input>", line 1, in <module>
ValueError: cannot reshape array of size 10 into shape (4,3)
```

- vstack：用来将多个数组在垂直（v代表vertical）方向拼接（数组的维度必须匹配）

```
>>> a1 = [1,2,3]
>>> a2 = [4,5,6]
>>> a3 = [7,8,9]
>>> np.vstack((a1,a2,a3))
array([[1, 2, 3],
       [4, 5, 6],
       [7, 8, 9]])
```

- hstack：用来将多个数组在水平（h代表horizontal）方向拼接（数组的维度必须匹配）

```
np.hstack((a1,a2,a3))
array([1, 2, 3, 4, 5, 6, 7, 8, 9])
```

- hsplit：用来将数组在水平方向拆分

```
>>> b1 = np.vstack((a1,a2,a3))
>>> np.hsplit(b1,3)
[array([[1],
       [4],
       [7]]), array([[2],
       [5],
       [8]]), array([[3],
       [6],
       [9]])]
```

- vsplit：用来将数组在垂直方向拆分

```
>>> np.vsplit(b1,3)
[array([[1, 2, 3]]), array([[4, 5, 6]]), array([[7, 8, 9]])]
```

## 相关运算

- 基本运算

```
>>> a = np.array( [20,30,40,50] )
>>> b = np.arange( 4 )
>>> b
array([0, 1, 2, 3])
>>> c = a-b
>>> c
array([20, 29, 38, 47])
>>> b**2
array([0, 1, 4, 9])
>>> a > 35
array([False, False,  True,  True])
```

- 数组相乘，对应位置相乘

```
>>> ab1 = np.array([[1,2],[3,4]])
>>> ab2 = np.array([[5,6],[7,8]])
>>> ab1 * ab2
array([[ 5, 12],
       [21, 32]])
```

- 矩阵乘法，使用dot

```
>>> ab1.dot(ab2)
array([[19, 22],
       [43, 50]])
```

- 内置函数（min,max,sum)，同时可以使用axis指定对哪一维进行操作

```
>>> b = np.arange(12).reshape(3,4)
>>> b
array([[ 0,  1,  2,  3],
       [ 4,  5,  6,  7],
       [ 8,  9, 10, 11]])
>>>
>>> b.sum(axis=0)
array([12, 15, 18, 21])
>>>
>>> b.min(axis=1)
array([0, 4, 8])
>>>
>>> b.cumsum(axis=1)
array([[ 0,  1,  3,  6],
       [ 4,  9, 15, 22],
       [ 8, 17, 27, 38]])
```

## 书中案例

---
- 1000个硬币累计结果和
![1000个硬币累计结果和](https://upload-images.jianshu.io/upload_images/5207977-1cc74304a56779c9.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

## 参考资料

---
1、[SciPy.org](https://docs.scipy.org/doc/numpy/)
2、[利用python进行数据分析](https://pan.baidu.com/s/10f5Ma5IRQARS9WzizeLHTg) 密码: s8wx