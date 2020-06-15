import Mock from 'mockjs'
const Random = Mock.Random
export const getFaceList = {
    code: 200,
    message: "操作成功",
    totalCount: Random.natural(0,100),
    "data|9": [ //生成|num个如下格式名字的数据
      {
        "id|+1":1,  //数字从当前数开始后续依次加一
        "faceID": Random.word(),
        faceAppearTime: '2020-05-16 17:07:34',
        similaritydegree: 0, // 0-1
        deviceID: '33070452991210060401',
        img: Random.image('300x200'),
        //address: 'ssssssssssss',
        //time: '2020-2-3 10:50',
        //"state|1": ["进入","离开"],    //数组中的一个，随机的
        //similarity: 90, // 相似度
      }
    ]
}

export const getFaceDetail = {
  code: 200,
  message: "操作成功",
  data: {
    img1: Random.image('480x390'),
    img2: Random.image('480x390'),
    "info": {
      "name": "张慧",
      "isSuspectedTerrorist": "2",
      "isVictim": "2",
      "isDriver": "-1",
      "isForeigner": "2",
      "isCriminalInvolved": "2",
      "isDetainees": "2",
      "isSuspiciousPerson": "2"
    }
  }
}
export const FaceToFaceInfo = {
  code: 200,
  message: "操作成功",
  "data": {
    "data": {
      "total": 5,
      "pageSize": 20,
      "pageNo": 1,
      "list": [
        {
          "glass": "no",
          "glassName": "否",
          "gender": "male",
          "genderName": "男",
          "cameraIndexCode": "33070200011210200076",
          "cameraName": "柳湖花园南门2",
          "id": "202005020002_33070200011210200076_1_2a57f45a13279a6a507475d562624bad_1",
          "name": "unknown",
          "facePicUrl": "http://172.18.248.95:9000/PhotoRS/showfile?fileType=picUrlProxy&xwPicUrl=http://172.18.239.4:81/24-0-0-1-1.jpg?p=aa1100f700bfa054f6745210f0f382c9",
          "bkgUrl": "http://172.18.248.95:9000/PhotoRS/showfile?fileType=picUrlProxy&xwPicUrl=http://172.18.239.4:81/24-0-0-1-1.Jpeg?p=aa1100c700bfa05435904f1017ce5ba2",
          "ageGroup": "unknown",
          "ageGroupName": "未知",
          "certificateNumber": "unknown",
          "faceRect": "{\"x\":0.432385,\"width\":0.319440,\"y\":0.396608,\"height\":0.329484}",
          "linkFaceBodyId": "unknown",
          "linkFaceVehicleId": "unknown",
          "plateNo": "unknown",
          "similarity": "0.73",
          "captureTime": "2020-05-19T18:06:24.000+08:00"
        },
        {
          "glass": "no",
          "glassName": "否",
          "gender": "female",
          "genderName": "女",
          "cameraIndexCode": "33070255001319607135",
          "cameraName": "柳湖花园东北门2",
          "id": "202005020000_33070255001319607135_1_e40baab14b2aecfd3a1119da7c498c1d_1",
          "name": "unknown",
          "facePicUrl": "http://172.18.247.19:6120/pic?=d2=i839z8aacs502-a90115m9ep=t8i8d*=*2pdi=*1s4i5=51b0i8df0*6090275e4-b5de703-1256*e-61i1dfd7ef9",
          "bkgUrl": "http://172.18.247.19:6120/pic?=d92i838e*aaci232-a65d1b-0e572050640f78i9b1*=5d4s0*=5dpi*=1d9i8t2pe*m5i10=-1905ee-96z2dfs=366fd9",
          "ageGroup": "unknown",
          "ageGroupName": "未知",
          "certificateNumber": "unknown",
          "faceRect": "{\"x\":0.335800,\"width\":0.340174,\"y\":0.337972,\"height\":0.340174}",
          "linkFaceBodyId": "unknown",
          "linkFaceVehicleId": "unknown",
          "plateNo": "unknown",
          "similarity": "0.71",
          "captureTime": "2020-05-21T16:40:45.000+08:00"
        },
        {
          "glass": "no",
          "glassName": "否",
          "gender": "female",
          "genderName": "女",
          "cameraIndexCode": "33078263001311545116",
          "cameraName": "月白塘社区一区7幢3单元人脸",
          "id": "202005020001_33078263001311545116_1_5a304df3d95cb2f57ed12fc9210784df_1",
          "name": "unknown",
          "facePicUrl": "http://172.18.247.19:6120/pic?=d7=i830z0aacs822-a70115m9ep=t0i2d*=*3pdi=*1s3i9=31b0i8df0*6090275e4-b5de701-1234*e-69i2dfd0ef7",
          "bkgUrl": "http://172.18.247.19:6120/pic?=d92i830e*aaci912-a43d1b-0e572050640f78i9b1*=9d3s0*=3dpi*=1d3i0t3pe*m5i10=-1928ee-79z2dfs=166fd6",
          "ageGroup": "unknown",
          "ageGroupName": "未知",
          "certificateNumber": "unknown",
          "faceRect": "{\"x\":0.353299,\"width\":0.262168,\"y\":0.398267,\"height\":0.286072}",
          "linkFaceBodyId": "unknown",
          "linkFaceVehicleId": "unknown",
          "plateNo": "unknown",
          "similarity": "0.71",
          "captureTime": "2020-05-21T11:36:48.000+08:00"
        },
        {
          "glass": "no",
          "glassName": "否",
          "gender": "male",
          "genderName": "男",
          "cameraIndexCode": "33070255001318289486",
          "cameraName": "柳湖花园西门1",
          "id": "202005020000_33070255001318289486_1_ac61b32a39c29dfb59abd389c760494c_1",
          "name": "unknown",
          "facePicUrl": "http://172.18.247.19:6120/pic?=d1=i832z2aacs252-a50115m9ep=t3i2d*=*1pdi=*1s4i8=41b0i8df0*6090275e4-b5de704-1254*e-62i1dfd3ef0",
          "bkgUrl": "http://172.18.247.19:6120/pic?=d72i838e*aaci242-a45d1b-0e572050640f78i9b1*=8d4s0*=4dpi*=1d3i3t1pe*m5i10=-1952ee-59z2dfs=067fd7",
          "ageGroup": "unknown",
          "ageGroupName": "未知",
          "certificateNumber": "unknown",
          "faceRect": "{\"x\":0.343207,\"width\":0.324912,\"y\":0.414311,\"height\":0.326288}",
          "linkFaceBodyId": "unknown",
          "linkFaceVehicleId": "unknown",
          "plateNo": "unknown",
          "similarity": "0.68",
          "captureTime": "2020-05-21T18:05:04.000+08:00"
        },
        {
          "glass": "no",
          "glassName": "否",
          "gender": "female",
          "genderName": "女",
          "cameraIndexCode": "33070255001319607135",
          "cameraName": "柳湖花园东北门2",
          "id": "202005020000_33070255001319607135_1_193387166b69ac2c52fad4cbeb93a6f4_1",
          "name": "unknown",
          "facePicUrl": "http://172.18.247.19:6120/pic?=d8=i832z9aacs502-a40115m9ep=t9i4d*=*2pdi=*1s4i6=51b0i8df0*6090275e4-b5de706-1256*e-67i3dfd6ef4",
          "bkgUrl": "http://172.18.247.19:6120/pic?=d42i834e*aaci962-a65d1b-0e572050640f78i9b1*=6d4s0*=5dpi*=1d5i9t2pe*m5i10=-1905ee-40z2dfs=963fd8",
          "ageGroup": "unknown",
          "ageGroupName": "未知",
          "certificateNumber": "unknown",
          "faceRect": "{\"x\":0.323639,\"width\":0.313705,\"y\":0.372102,\"height\":0.324140}",
          "linkFaceBodyId": "unknown",
          "linkFaceVehicleId": "unknown",
          "plateNo": "unknown",
          "similarity": "0.66",
          "captureTime": "2020-05-21T16:44:54.000+08:00"
        }
      ]
    }
  }
}

export const getFaceSearchDetail = {
  code: 200,
  message: "操作成功",
  data: {
    img1: Random.image('480x390'),
    img2: Random.image('480x390'),
    "srcImg|4": [{
      key: "设备名称",
      value: "donghuayuandsd",
    }],
    "targetImg|6": [{
      key: "设备名称",
      value: "donghuayuandsd",
    }]
  }
}

export const getLibraryList = {
  code: 200,
  message: "操作成功",
  "data|12": [
    {
      name: '库1',
      "tag|1": ['涉毒人员库', '涉黄人员库', '涉赌人员库'],
      creator: '张三',
      time: '2020-05-11 15:49',
      count: 20,
      "id|+1":1,  //数字从当前数开始后续依次加一
    }
  ]
}

export const getTaskList = {
  code: 200,
  message: "操作成功",
  totalCount: Random.natural(0,100),
  "data|12": [
    {
      name: '人员库1',
      "target|1": ['涉毒人员库', '涉黄人员库', '涉赌人员库'],
      range: '重点监控人员',
      time: '2020-05-11 15:49 ~ 2020-05-12 15:49',
      percent: '90% ~ 100%',
      "id|+1":1,  //数字从当前数开始后续依次加一
    }
  ]
}

export const deleteTask = {
  code: 200,
  message: "操作成功"
}

export const getPeopleList = {
  code: 200,
  message: "操作成功",
  totalCount: Random.natural(0,100),
  "data|8": [
    {
      img: Random.image('300x250'),
      name: '张三',
      lib: ['涉毒人员库'],
      id: '325320145615963210'
    }
  ]
}

export const createLib = {
  code: 200,
  message: "操作成功"
}

export const addPeople = {
  code: 200,
  message: "操作成功"
}

export const delLib = {
  code: 200,
  message: "操作成功"
}

export const delPeople = {
  code: 200,
  message: "操作成功"
}

export const togetherList = {
  code: 200,
  message: "操作成功",
  totalCount: Random.natural(0,100),
  "data|10": [
    {
      photo: Random.image('30x30'),
      name: '同行分析1',
      similarity: '80%',
      minCount: 20,
      time: '2020-05-11 15:49 ~ 2020-05-12 15:49',
      range: '全部',
      id: '325320145615963210'
    }
  ]
}

export const deleteTogetherTask = {
  code: 200,
  message: "操作成功"
}

export const addTask = {
  code: 200,
  message: "操作成功"
}

export const resultList = {
  code: 200,
  message: "操作成功",
  totalCount: Random.natural(0,100),
  "data|5": [
    {
      img1: Random.image('300x300'),
      img2: Random.image('300x300'),
      address: '月秀花园东大门',
      time: '2020-05-11 15:49:46'
    }
  ]
}

export const statTasks = {
  code: 200,
  message: "操作成功",
  totalCount: Random.natural(0,100),
  "data|10": [
    {
      name: '频繁过人',
      similarity: '80%',
      minCount: 20,
      time: '2020-05-11 15:49 ~ 2020-05-12 15:49',
      range: '全部',
      tid: '325320145615963210'
    }
  ]
}

export const addStatTask = {
  code: 200,
  message: "操作成功"
}

export const deleteStatTask = {
  code: 200,
  message: "操作成功"
}

export const statResultList = {
  code: 200,
  message: "操作成功",
  totalCount: Random.natural(0,100),
  "data|5": [
    {
      img: Random.image('300x300'),
      count: Random.natural(10, 100),
      "rid|+1": 1
    }
  ]
}

export const statDetailList = {
  code: 200,
  message: "操作成功",
  totalCount: Random.natural(0,100),
  "data|9": [ //生成|num个如下格式名字的数据
    {
      "id|+1":1,  //数字从当前数开始后续依次加一
      img: Random.image('300x200'),
      address: '杜翠路',
      time: '2020-2-3 10:50',
      "state|1": ["进入","离开"],    //数组中的一个，随机的
    }
  ]
}
