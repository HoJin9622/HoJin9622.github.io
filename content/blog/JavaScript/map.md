---
title: '[JavaScript]map 함수'
date: 2020-06-03 19:06:47
category: JavaScript
draft: false
---

## reverse().map()

```js
<ScrollView contentContainerStyle={styles.toDos}>
  {Object.values(toDos)
    .reverse()
    .map(toDo => (
      <ToDo
        key={toDo.id}
        deleteToDo={this._deleteToDo}
        uncompleteToDo={this._uncompleteToDo}
        completeToDo={this._completeToDo}
        updateToDo={this._updateToDo}
        {...toDo}
      />
    ))}
</ScrollView>
```

reverse를 사용하면 새로 추가되는 component를 제일 위에 위치하게 할 수 있다.
