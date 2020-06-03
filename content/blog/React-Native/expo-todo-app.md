---
title: React-Native Component
date: 2020-06-03 20:00:35
category: React Native
draft: false
---

## StatueBar

```js
import { StatusBar } from 'react-native'
```

StatusBar는 휴대폰 상단의 상태바를 바꿀 수 있게 해준다.

react-native에서 import하여 사용한다.

```js
<StatusBar barStyle="light-content" />
```

`<View>` 태그 속 제일 상단에 위 코드를 작성하면 상태바가 흰색으로 변경된다.

## TextInput

```js
import { TextInput } from 'react-native'
```

TextInput은 Web에서의 input과 같은 역할을 가진다.

사용자가 텍스트를 입력할 수 있는 박스를 생성한다.

react-native에서 import하여 사용한다.

TextInput은 기본적으로 높이가 있어야한다.

```js
<TextInput
  style={styles.input}
  placeholder={'New To Do'}
  placeholderTextColor={'#999'}
  onChangeText={this._controlNewToDo}
  value={newToDo}
  returnKeyType={'done'}
  autoCorrect={false}
  multiline={true}
  onBlur={_finishEditing}
  onSubmitEditing={this._addToDo}
  underlineColorAndroid={'transparent'}
/>
```

TextInput의 속성에는 placeholder, placeholderTextColor, value, onChnageText, returnKeyType, autoCorrect, underlineColorAndroid, multiline, onBlur 등이 있다.

1. placeholder 속성은 web input의 placeholder와 같이 input 박스 위에 텍스트를 적기 전에 원하는 텍스트를 미리 보여준다.

2. placeholderTextColor 속성은 placeholder의 색상을 지정해줄 수 있다.

3. onChangeText 속성은 텍스트가 변경될때 지정된 함수를 실행한다.

4. value 속성은 현재 state를 나타낸다.

5. returnKeyType 속성을 done으로 지정해주면 키보드의 엔터를 done으로 바꿔준다.

6. autoCorrect 속성은 자동완성 기능을 가능, 불가능하게 해준다.

7. multiline 속성은 true, false로되며 true로하면 여러줄 작성할 수 있다.

8. onBlur 속성은 TextInput 말고 다른 곳을 클릭하면 지정된 함수를 실행한다.

9. onSubmitEditing 속성은 완료를 클릭할때 함수를 실행한다.

10. underlineColorAndroid 속성을 transparent로 지정하면 안드로이드의 TextInput 밑줄을 없애준다.

## Dimensions

```js
import { Dimensions } from 'react-native'
```

Dimensions은 현재 이 어플을 실행하고 있는 휴대폰의 width와 height를 구할 수 있게 해준다.

react-native에서 import하여 사용한다.

```js
const { height, width } = Dimensions.get('window')
```

위 코드로 휴대폰 화면의 width, height를 가져올 수 있다.

```js
card: {
    backgroundColor: "white",
    flex: 1,
    width: width - 25,
},
```

가져온 width를 위와 같이 활용이 가능하다.

## ScrollView

```js
import { ScrollView } from 'react-native'
```

ScrollView를 import 해준다.

ScrollView는 스크롤이 있는 View를 생성해준다.

```js
<ScrollView contentContainerStyle={styles.toDos}>
  <ToDo />
</ScrollView>
```

contentContainerStyle 속성은 스타일을 모든 하위 Component에 적용한다.

## TouchableOpacity

```js
import { TouchableOpacity } from 'react-native'
```

TouchableOpacity는 클릭 가능한 공간을 만들어 주는 것 같다.

문서 : https://reactnative.dev/docs/touchableopacity

```js
<TouchableOpacity onPress={_toggleComplete}>
  <View
    style={[
      styles.circle,
      isCompleted ? styles.completedCircle : styles.uncompletedCircle,
    ]}
  />
</TouchableOpacity>
```

onPress 속성이 있는데 onPress 속성은

`onPress={this._toggleComplete}` 에 함수를 넣어줘서 클릭 시 실행 할 함수를 넣어준다.

## AsyncStorage

```js
import { AsyncStorage } from 'react-native'
```

AsyncStorage는 휴대폰에 정보를 저장하기 위한 것이다.

```js
const saveToDos = AsyncStorage.setItem('toDos', newToDos)
```

local storage에 정보를 저장하기 위한 코드이다.

toDos는 key이고, newToDos는 item이다.

AsyncStorage에는 object를 저장하면 안되고 string의 형태로 저장해야한다.

그러므로 글로벌 객체 JSON의 stringify 함수를 이용하여 string 형태로 변환해준다.

`JSON.stringify(newToDos)`

```js
const parsedToDos = JSON.parse(toDos)
```

string으로 변환한 object를 다시 object를 만드려면 parse 함수를 사용한다.

## Splash screen

```js
import { AppLoading } from 'expo'

if (!loadedToDos) {
  return <AppLoading />
}
```

AppLoading Component는 expo에서 제공된다.

AppLoading Component를 import 후 로딩이 되기전에 return하여 사용한다.

```json
    "icon": "./assets/icon.png",
    "splash": {
      "image": "./assets/splash.png",
      "resizeMode": "contain",
      "backgroundColor": "#F23657"
    },
```

로딩화면을 변경하려면 app.json의 icon과 splash 부분을 변경한다.
