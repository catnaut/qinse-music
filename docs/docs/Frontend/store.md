# Store 设计

## PlayerStore

- time 进度条拖拽时的时间, 用于显示, 与 progress 不同
- progress 音乐播放进度
- duration 音乐总时长
- volume 音量
- state 播放状态 (playing, paused) 这个状态不会持久化保存，进入网页默认为 paused
- song 当前播放的歌曲
- playlist 播放列表
