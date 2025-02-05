---
title: 数组去重
category: javascript
---

### 双重循环

```javascript
function doubleLoopUniq(arr) {
  var result = [],
    //定义一个变量表示当前元素在result中是否存在
    isExist = false;
  for (var i = 0, len = arr.length; i < len; i++) {
    isExist = false;
    for (var j = 0, rLen = result.length; j < rLen; j++) {
      if (result[j] === arr[i]) {
        //依次对result中的元素 和 原数组元素进行比对
        isExist = true;
        break;
      }
    }
    //最后判断如果不存在，则将此元素插入result
    !isExist && result.push(arr[i]);
  }
  return result;
}
```

### 借助 js 内置的 indexOf

```javascript
function indexOfUniq(arr) {
  var result = [];
  for (var i = 0, len = arr.length; i < len; i++) {
    //数组查询（indexOf）没有的值返回 -1 ，用indexOf简化了内层循环
    if (result.indexOf(arr[i]) === -1) result.push(arr[i]);
  }
  return result;
}
```

### 排序后前后比对去重

```javascript
function sortUniq(arr) {
  let result = [],
    // 避免修改原数组
    _array = [...arr],
    //上一次加入result的值
    last;
  _array
    .sort((x, y) => x - y)
    .forEach((item) => {
      if (item != last) {
        result.push(item);
        last = item;
      }
    });
  return result;
}
```

### ES6 的 Set

```javascript
function toSetUniq(arr) {
  return Array.from(new Set(arr));
  //return [...new Set(arr)]
}
```

### 利用对象属性名的唯一性

```javascript
function toObjUniq(arr) {
  let obj = {},
    result = [];
  arr.forEach((val) => {
    if (!obj[val]) {
      //对象设置属性，key为数组值
      obj[val] = "temporary";
      result.push(val);
    }
  });
  return result;
}
```

### splice 去重

```javascript
function spliceUniq(arr) {
  // 避免修改原数组
  let _array = [...arr];
  for (let i = 0; i < _array.length; i++) {
    for (let j = i + 1; j < _array.length; j++) {
      if (_array[i] === _array[j]) {
        _array.splice(j, 1);
      }
    }
  }
  return _array;
}
```
