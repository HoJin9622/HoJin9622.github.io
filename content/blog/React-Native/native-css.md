---
title: Native CSS
date: 2020-06-03 19:06:27
category: React Native
draft: true
---

## Shadow & Platform

Shadow는 ios/android 플랫폼마다 약간 다르다.

따라서 platform-specific code를 작성해야한다.

```js
shadowColor:
shadowOffset:
shadowOpacity:
shadowRadius:
```

ios에서는 그림자의 color, offset, opacity, radius를 지정해줄 수 있다.

```js
elevation: 5
```

안드로이드는 elevation을 사용한다.

elevation은 0부터 5까지 있으며 숫자가 커질수록 shadow가 커진다.

```js
import { Platform } from 'react-native'
```

Platform을 확인하려면 Platform을 improt한다.

```js
    ...Platform.select({
      ios: {
        shadowColor: "rgb(50, 50, 50)",
        shadowOpacity: 0.5,
        shadowRadius: 5,
        shadowOffset: {
          height: -1,
          width: 0,
        },
      },
      android: {
        elevation: 3,
      },
    })
```

style에 `...Platform.select`을 사용하여 ios/android에 따라 스타일을 지정해줄 수 있다.

## Cirlce

```js
circle: {
  width: 30,
  height: 30,
  borderRadius: 15,
  backgroundColor: "red",
}
```

원 만들기, borderRadius는 항상 width와 height의 절반이어야함.

그리고 상위 컨테이너에 `alignItems: "center"`를 지정해주면 원이 중간에 온다.
