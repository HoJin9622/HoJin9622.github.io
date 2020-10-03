---
title: '[Next.js] Data Fetching'
date: 2020-10-04 01:10:84
category: JavaScript
draft: false
---

# Data Fetching

cra로 프로젝트를 만들어 데이터를 가져오는 방식

useEffect를 사용하고 axios를 이용하여 get을 한 후 데이터를 가져와 사이트의 페이지소스보기를 확인하면

불러온 데이터가 표시되지 않는 것을 볼 수 있다.

이러한 부분 때문에 그 데이터가 검색엔진에 노출되어야 한다, 서버사이드로 동작해야한다면 다른 방식으로 구현해야한다.

# getInitialProps

```js
import Link from 'next/link'
import axios from 'axios'

function GetUuid(props) {
  return (
    <div className="h-screen v-full flex flex-col justify-center items-center">
      {props.uuid}
      <div className="mt-4">
        <Link href="/">
          <a>돌아가기</a>
        </Link>
      </div>
    </div>
  )
}

// getInitialProps
GetUuid.getInitialProps = async function() {
  // 반드시 async function 으로 작성
  const response = await axios.get('http://localhost:1234' + '/api/uuid')
  return {
    uuid: response.data.uuid,
  }
}

export default GetUuid
```

GetUuid 컴포넌트에 getInitialProps를 추가해준다.

getInitialProps 함수는 반드시 async-await 으로 작성해주어야 한다.

그 후 return 한 객체를 props로 사용할 수 있다.

getInitialProps는 프론트단에서 render 되기전에 동작하게 된다.(새로고침 할때)

홈페이지에서 getInitialProps가 있는 페이지로 갈 경우 프론트에서 동작함.(즉슨 양쪽에서 동작)

getInitialProps는 pages 폴더 밑에서만 동작한다.(사용자가 생성한 component 폴더에서는 불가)
