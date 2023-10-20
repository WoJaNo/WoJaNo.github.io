function doStuff() {
    var flag=0;
    try{
        ap=aplayers[0];
        ap.list;
        flag=1;
    }catch{
        setTimeout(doStuff, 50);
        return;
    }
    if(flag){
        ap.list.add([
            {
            name: "防止不加载第一首 爱歌 的歌词",
            artist: "0",
            url: "0",
            cover: "0",
            lrc: "0",
                },
            {
            name: "I Really Want to Stay at Your House",
            artist: "Cyberpunk",
            url: "https://jsd.onmicrosoft.cn/npm/datawoojano@1.0.8/music/I%20Really%20Want%20to%20Stay%20at%20Your%20House.mp3",
            cover: "https://jsd.onmicrosoft.cn/npm/datawoojano@1.0.8/pic/I%20Really%20Want%20to%20Stay%20at%20Your%20House.jpg",
            lrc: "https://jsd.onmicrosoft.cn/npm/datawoojano@1.0.8/lyric/I%20Really%20Want%20to%20Stay%20at%20Your%20House.lrc",
            },
            {
            name: "白山茶（翻自 陈雪凝）",
            artist: "马越敏",
            url: "https://jsd.onmicrosoft.cn/npm/datawoojano@1.0.8/music/%E7%99%BD%E5%B1%B1%E8%8C%B6%EF%BC%88%E7%BF%BB%E8%87%AA%20%E9%99%88%E9%9B%AA%E5%87%9D%EF%BC%89.mp3",
            cover: "https://jsd.onmicrosoft.cn/npm/datawoojano@1.0.8/pic/%E7%99%BD%E5%B1%B1%E8%8C%B6%EF%BC%88%E7%BF%BB%E8%87%AA%20%E9%99%88%E9%9B%AA%E5%87%9D%EF%BC%89.jpg",
            lrc: "https://jsd.onmicrosoft.cn/npm/datawoojano@1.0.8/lyric/%E7%99%BD%E5%B1%B1%E8%8C%B6%EF%BC%88%E7%BF%BB%E8%87%AA%20%E9%99%88%E9%9B%AA%E5%87%9D%EF%BC%89.lrc",
            },
            {
            name: "鱼",
            artist: "冯政FireDrippin / 李铭辰 / FAKE持续输出 / 巴鲁斯",
            url: "https://jsd.onmicrosoft.cn/npm/datawoojano@1.0.8/music/%E9%B1%BC.mp3",
            cover: "https://jsd.onmicrosoft.cn/npm/datawoojano@1.0.8/pic/%E9%B1%BC.jpg",
            lrc: "https://jsd.onmicrosoft.cn/npm/datawoojano@1.0.8/lyric/%E9%B1%BC.lrc",
            },
            {
            name: "悬溺（女生版）",
            artist: "旺仔小乔",
            url: "https://jsd.onmicrosoft.cn/npm/datawoojano@1.0.8/music/%E6%82%AC%E6%BA%BA%EF%BC%88%E5%A5%B3%E7%94%9F%E7%89%88%EF%BC%89.mp3",
            cover: "https://jsd.onmicrosoft.cn/npm/datawoojano@1.0.8/pic/%E6%82%AC%E6%BA%BA%EF%BC%88%E5%A5%B3%E7%94%9F%E7%89%88%EF%BC%89.jpg",
            lrc: "https://jsd.onmicrosoft.cn/npm/datawoojano@1.0.8/lyric/%E6%82%AC%E6%BA%BA%EF%BC%88%E5%A5%B3%E7%94%9F%E7%89%88%EF%BC%89.lrc",
            },
            {
            name: "走马",
            artist: "江意间",
            url: "https://jsd.onmicrosoft.cn/npm/datawoojano@1.0.8/music/%E8%B5%B0%E9%A9%AC.mp3",
            cover: "https://jsd.onmicrosoft.cn/npm/datawoojano@1.0.8/pic/%E8%B5%B0%E9%A9%AC.jpg",
            lrc: "https://jsd.onmicrosoft.cn/npm/datawoojano@1.0.8/lyric/%E8%B5%B0%E9%A9%AC.lrc",
            },
            {
            name: "给你呀（又名：for ya）",
            artist: "蒋小呢",
            url: "https://jsd.onmicrosoft.cn/npm/datawoojano@1.0.8/music/%E7%BB%99%E4%BD%A0%E5%91%80%EF%BC%88%E5%8F%88%E5%90%8D%EF%BC%9Afor%20ya%EF%BC%89.mp3",
            cover: "https://jsd.onmicrosoft.cn/npm/datawoojano@1.0.8/pic/%E7%BB%99%E4%BD%A0%E5%91%80%EF%BC%88%E5%8F%88%E5%90%8D%EF%BC%9Afor%20ya%EF%BC%89.jpg",
            lrc: "https://jsd.onmicrosoft.cn/npm/datawoojano@1.0.8/lyric/%E7%BB%99%E4%BD%A0%E5%91%80%EF%BC%88%E5%8F%88%E5%90%8D%EF%BC%9Afor%20ya%EF%BC%89.lrc",
            },
            {
            name: "最甜情歌 (女生版)",
            artist: "一玟",
            url: "https://jsd.onmicrosoft.cn/npm/datawoojano@1.0.8/music/%E6%9C%80%E7%94%9C%E6%83%85%E6%AD%8C%20%28%E5%A5%B3%E7%94%9F%E7%89%88%29.mp3",
            cover: "https://jsd.onmicrosoft.cn/npm/datawoojano@1.0.8/pic/%E6%9C%80%E7%94%9C%E6%83%85%E6%AD%8C%20%28%E5%A5%B3%E7%94%9F%E7%89%88%29.jpg",
            lrc: "https://jsd.onmicrosoft.cn/npm/datawoojano@1.0.8/lyric/%E6%9C%80%E7%94%9C%E6%83%85%E6%AD%8C%20%28%E5%A5%B3%E7%94%9F%E7%89%88%29.lrc",
            },
            {
            name: "东西",
            artist: "很美味",
            url: "https://jsd.onmicrosoft.cn/npm/datawoojano@1.0.8/music/%E4%B8%9C%E8%A5%BF.mp3",
            cover: "https://jsd.onmicrosoft.cn/npm/datawoojano@1.0.8/pic/%E4%B8%9C%E8%A5%BF.jpg",
            lrc: "https://jsd.onmicrosoft.cn/npm/datawoojano@1.0.8/lyric/%E4%B8%9C%E8%A5%BF.lrc",
            },
            {
            name: "Daylight",
            artist: "Seredris",
            url: "https://jsd.onmicrosoft.cn/npm/datawoojano@1.0.8/music/Daylight.mp3",
            cover: "https://jsd.onmicrosoft.cn/npm/datawoojano@1.0.8/pic/Daylight.jpg",
            lrc: "https://jsd.onmicrosoft.cn/npm/datawoojano@1.0.8/lyric/Daylight.lrc",
            },
            {
            name: "他不懂",
            artist: "A你的优质网友雨巷",
            url: "https://jsd.onmicrosoft.cn/npm/datawoojano@1.0.8/music/%E4%BB%96%E4%B8%8D%E6%87%82.mp3",
            cover: "https://jsd.onmicrosoft.cn/npm/datawoojano@1.0.8/pic/%E4%BB%96%E4%B8%8D%E6%87%82.jpg",
            lrc: "https://jsd.onmicrosoft.cn/npm/datawoojano@1.0.8/lyric/%E4%BB%96%E4%B8%8D%E6%87%82.lrc",
            },
            {
            name: "越来越不懂",
            artist: "蔡健雅",
            url: "https://jsd.onmicrosoft.cn/npm/datawoojano@1.0.8/music/%E8%B6%8A%E6%9D%A5%E8%B6%8A%E4%B8%8D%E6%87%82.mp3",
            cover: "https://jsd.onmicrosoft.cn/npm/datawoojano@1.0.8/pic/%E8%B6%8A%E6%9D%A5%E8%B6%8A%E4%B8%8D%E6%87%82.jpg",
            lrc: "https://jsd.onmicrosoft.cn/npm/datawoojano@1.0.8/lyric/%E8%B6%8A%E6%9D%A5%E8%B6%8A%E4%B8%8D%E6%87%82.lrc",
            },
            {
            name: "Shootout (Slowed + Reverb)",
            artist: "Izzamuzzic / Julien Marchal",
            url: "https://jsd.onmicrosoft.cn/npm/datawoojano@1.0.8/music/Shootout%20%28Slowed%20%2B%20Reverb%29.mp3",
            cover: "https://jsd.onmicrosoft.cn/npm/datawoojano@1.0.8/pic/Shootout%20%28Slowed%20%2B%20Reverb%29.jpg",
            lrc: "https://jsd.onmicrosoft.cn/npm/datawoojano@1.0.8/lyric/Shootout%20%28Slowed%20%2B%20Reverb%29.lrc",
            },
            {
            name: "坏女孩(0.8x)",
            artist: "薇薇",
            url: "https://jsd.onmicrosoft.cn/npm/datawoojano@1.0.8/music/%E5%9D%8F%E5%A5%B3%E5%AD%A9%280.8x%29.mp3",
            cover: "https://jsd.onmicrosoft.cn/npm/datawoojano@1.0.8/pic/%E5%9D%8F%E5%A5%B3%E5%AD%A9%280.8x%29.jpg",
            lrc: "https://jsd.onmicrosoft.cn/npm/datawoojano@1.0.8/lyric/%E5%9D%8F%E5%A5%B3%E5%AD%A9%280.8x%29.lrc",
            },
            {
            name: "夏天的风",
            artist: "火羊瞌睡了",
            url: "https://jsd.onmicrosoft.cn/npm/datawoojano@1.0.8/music/%E5%A4%8F%E5%A4%A9%E7%9A%84%E9%A3%8E.mp3",
            cover: "https://jsd.onmicrosoft.cn/npm/datawoojano@1.0.8/pic/%E5%A4%8F%E5%A4%A9%E7%9A%84%E9%A3%8E.jpg",
            lrc: "https://jsd.onmicrosoft.cn/npm/datawoojano@1.0.8/lyric/%E5%A4%8F%E5%A4%A9%E7%9A%84%E9%A3%8E.lrc",
            },
            {
            name: "最后一页",
            artist: "江语晨",
            url: "https://jsd.onmicrosoft.cn/npm/datawoojano@1.0.8/music/%E6%9C%80%E5%90%8E%E4%B8%80%E9%A1%B5.mp3",
            cover: "https://jsd.onmicrosoft.cn/npm/datawoojano@1.0.8/pic/%E6%9C%80%E5%90%8E%E4%B8%80%E9%A1%B5.jpg",
            lrc: "https://jsd.onmicrosoft.cn/npm/datawoojano@1.0.8/lyric/%E6%9C%80%E5%90%8E%E4%B8%80%E9%A1%B5.lrc",
            },
            {
            name: "淋雨一直走",
            artist: "张韶涵",
            url: "https://jsd.onmicrosoft.cn/npm/datawoojano@1.0.8/music/%E6%B7%8B%E9%9B%A8%E4%B8%80%E7%9B%B4%E8%B5%B0.mp3",
            cover: "https://jsd.onmicrosoft.cn/npm/datawoojano@1.0.8/pic/%E6%B7%8B%E9%9B%A8%E4%B8%80%E7%9B%B4%E8%B5%B0.jpg",
            lrc: "https://jsd.onmicrosoft.cn/npm/datawoojano@1.0.8/lyric/%E6%B7%8B%E9%9B%A8%E4%B8%80%E7%9B%B4%E8%B5%B0.lrc",
            },
            {
            name: "I'll Do It",
            artist: "Heidi Montag",
            url: "https://jsd.onmicrosoft.cn/npm/datawoojano@1.0.8/music/I%27ll%20Do%20It.mp3",
            cover: "https://jsd.onmicrosoft.cn/npm/datawoojano@1.0.8/pic/I%27ll%20Do%20It.jpg",
            lrc: "https://jsd.onmicrosoft.cn/npm/datawoojano@1.0.8/lyric/I%27ll%20Do%20It.lrc",
            },
            {
            name: "Baby don't cry（原唱：EXO M）",
            artist: "金渽耶",
            url: "https://jsd.onmicrosoft.cn/npm/datawoojano@1.0.8/music/Baby%C2%A0don%27t%C2%A0cry%EF%BC%88%E5%8E%9F%E5%94%B1%EF%BC%9AEXO%C2%A0M%EF%BC%89.mp3",
            cover: "https://jsd.onmicrosoft.cn/npm/datawoojano@1.0.8/pic/Baby%C2%A0don%27t%C2%A0cry%EF%BC%88%E5%8E%9F%E5%94%B1%EF%BC%9AEXO%C2%A0M%EF%BC%89.jpg",
            lrc: "https://jsd.onmicrosoft.cn/npm/datawoojano@1.0.8/lyric/Baby%C2%A0don%27t%C2%A0cry%EF%BC%88%E5%8E%9F%E5%94%B1%EF%BC%9AEXO%C2%A0M%EF%BC%89.lrc",
            },
            {
            name: "怎么了（女声版）",
            artist: "Sasablue",
            url: "https://jsd.onmicrosoft.cn/npm/datawoojano@1.0.8/music/%E6%80%8E%E4%B9%88%E4%BA%86%EF%BC%88%E5%A5%B3%E5%A3%B0%E7%89%88%EF%BC%89.mp3",
            cover: "https://jsd.onmicrosoft.cn/npm/datawoojano@1.0.8/pic/%E6%80%8E%E4%B9%88%E4%BA%86%EF%BC%88%E5%A5%B3%E5%A3%B0%E7%89%88%EF%BC%89.jpg",
            lrc: "https://jsd.onmicrosoft.cn/npm/datawoojano@1.0.8/lyric/%E6%80%8E%E4%B9%88%E4%BA%86%EF%BC%88%E5%A5%B3%E5%A3%B0%E7%89%88%EF%BC%89.lrc",
            },
            {
            name: "恶作剧",
            artist: "Sasablue",
            url: "https://jsd.onmicrosoft.cn/npm/datawoojano@1.0.8/music/%E6%81%B6%E4%BD%9C%E5%89%A7.mp3",
            cover: "https://jsd.onmicrosoft.cn/npm/datawoojano@1.0.8/pic/%E6%81%B6%E4%BD%9C%E5%89%A7.jpg",
            lrc: "https://jsd.onmicrosoft.cn/npm/datawoojano@1.0.8/lyric/%E6%81%B6%E4%BD%9C%E5%89%A7.lrc",
            },
            {
            name: "Letting Go",
            artist: "蔡健雅",
            url: "https://jsd.onmicrosoft.cn/npm/datawoojano@1.0.8/music/Letting%20Go.mp3",
            cover: "https://jsd.onmicrosoft.cn/npm/datawoojano@1.0.8/pic/Letting%20Go.jpg",
            lrc: "https://jsd.onmicrosoft.cn/npm/datawoojano@1.0.8/lyric/Letting%20Go.lrc",
            },
            {
            name: "侧脸",
            artist: "于果",
            url: "https://jsd.onmicrosoft.cn/npm/datawoojano@1.0.8/music/%E4%BE%A7%E8%84%B8.mp3",
            cover: "https://jsd.onmicrosoft.cn/npm/datawoojano@1.0.8/pic/%E4%BE%A7%E8%84%B8.jpg",
            lrc: "https://jsd.onmicrosoft.cn/npm/datawoojano@1.0.8/lyric/%E4%BE%A7%E8%84%B8.lrc",
            },
            {
            name: "越来越不懂",
            artist: "蔡健雅",
            url: "https://jsd.onmicrosoft.cn/npm/datawoojano@1.0.8/music/%E8%B6%8A%E6%9D%A5%E8%B6%8A%E4%B8%8D%E6%87%82.mp3",
            cover: "https://jsd.onmicrosoft.cn/npm/datawoojano@1.0.8/pic/%E8%B6%8A%E6%9D%A5%E8%B6%8A%E4%B8%8D%E6%87%82.jpg",
            lrc: "https://jsd.onmicrosoft.cn/npm/datawoojano@1.0.8/lyric/%E8%B6%8A%E6%9D%A5%E8%B6%8A%E4%B8%8D%E6%87%82.lrc",
            },
            {
            name: "疑心病0.8x",
            artist: "防",
            url: "https://jsd.onmicrosoft.cn/npm/datawoojano@1.0.8/music/%E7%96%91%E5%BF%83%E7%97%850.8x.mp3",
            cover: "https://jsd.onmicrosoft.cn/npm/datawoojano@1.0.8/pic/%E7%96%91%E5%BF%83%E7%97%850.8x.jpg",
            lrc: "https://jsd.onmicrosoft.cn/npm/datawoojano@1.0.8/lyric/%E7%96%91%E5%BF%83%E7%97%850.8x.lrc",
            },
            {
            name: "三葉のテーマ（0.8x）",
            artist: "Kris潘",
            url: "https://jsd.onmicrosoft.cn/npm/datawoojano@1.0.8/music/%E4%B8%89%E8%91%89%E3%81%AE%E3%83%86%E3%83%BC%E3%83%9E%EF%BC%880.8x%EF%BC%89.mp3",
            cover: "https://jsd.onmicrosoft.cn/npm/datawoojano@1.0.8/pic/%E4%B8%89%E8%91%89%E3%81%AE%E3%83%86%E3%83%BC%E3%83%9E%EF%BC%880.8x%EF%BC%89.jpg",
            lrc: "https://jsd.onmicrosoft.cn/npm/datawoojano@1.0.8/lyric/%E4%B8%89%E8%91%89%E3%81%AE%E3%83%86%E3%83%BC%E3%83%9E%EF%BC%880.8x%EF%BC%89.lrc",
            },
            {
            name: "Rain",
            artist: "Shmily",
            url: "https://jsd.onmicrosoft.cn/npm/datawoojano@1.0.8/music/Rain.mp3",
            cover: "https://jsd.onmicrosoft.cn/npm/datawoojano@1.0.8/pic/Rain.jpg",
            lrc: "https://jsd.onmicrosoft.cn/npm/datawoojano@1.0.8/lyric/Rain.lrc",
            },
            {
            name: "Shadow of the Sun",
            artist: "离の离",
            url: "https://jsd.onmicrosoft.cn/npm/datawoojano@1.0.8/music/Shadow%20of%20the%20Sun.mp3",
            cover: "https://jsd.onmicrosoft.cn/npm/datawoojano@1.0.8/pic/Shadow%20of%20the%20Sun.jpg",
            lrc: "https://jsd.onmicrosoft.cn/npm/datawoojano@1.0.8/lyric/Shadow%20of%20the%20Sun.lrc",
            },
            {
            name: "月亮之矢",
            artist: "孤矢 / 虞娱",
            url: "https://jsd.onmicrosoft.cn/npm/datawoojano@1.0.8/music/%E6%9C%88%E4%BA%AE%E4%B9%8B%E7%9F%A2.mp3",
            cover: "https://jsd.onmicrosoft.cn/npm/datawoojano@1.0.8/pic/%E6%9C%88%E4%BA%AE%E4%B9%8B%E7%9F%A2.jpg",
            lrc: "https://jsd.onmicrosoft.cn/npm/datawoojano@1.0.8/lyric/%E6%9C%88%E4%BA%AE%E4%B9%8B%E7%9F%A2.lrc",
            },
            {
            name: "溯 (Reverse) feat. 马吟吟",
            artist: "77",
            url: "https://jsd.onmicrosoft.cn/npm/datawoojano@1.0.8/music/%E6%BA%AF%20%28Reverse%29%20feat.%20%E9%A9%AC%E5%90%9F%E5%90%9F.mp3",
            cover: "https://jsd.onmicrosoft.cn/npm/datawoojano@1.0.8/pic/%E6%BA%AF%20%28Reverse%29%20feat.%20%E9%A9%AC%E5%90%9F%E5%90%9F.jpg",
            lrc: "https://jsd.onmicrosoft.cn/npm/datawoojano@1.0.8/lyric/%E6%BA%AF%20%28Reverse%29%20feat.%20%E9%A9%AC%E5%90%9F%E5%90%9F.lrc",
            },
            {
            name: "爸爸妈妈",
            artist: "李荣浩",
            url: "https://jsd.onmicrosoft.cn/npm/datawoojano@1.0.8/music/%E7%88%B8%E7%88%B8%E5%A6%88%E5%A6%88.mp3",
            cover: "https://jsd.onmicrosoft.cn/npm/datawoojano@1.0.8/pic/%E7%88%B8%E7%88%B8%E5%A6%88%E5%A6%88.jpg",
            lrc: "https://jsd.onmicrosoft.cn/npm/datawoojano@1.0.8/lyric/%E7%88%B8%E7%88%B8%E5%A6%88%E5%A6%88.lrc",
            },
            {
            name: "致你",
            artist: "yihuik苡慧",
            url: "https://jsd.onmicrosoft.cn/npm/datawoojano@1.0.8/music/%E8%87%B4%E4%BD%A0.mp3",
            cover: "https://jsd.onmicrosoft.cn/npm/datawoojano@1.0.8/pic/%E8%87%B4%E4%BD%A0.jpg",
            lrc: "https://jsd.onmicrosoft.cn/npm/datawoojano@1.0.8/lyric/%E8%87%B4%E4%BD%A0.lrc",
            },
            {
            name: "Duvet (纯音乐)",
            artist: "从和文",
            url: "https://jsd.onmicrosoft.cn/npm/datawoojano@1.0.8/music/Duvet%20%28%E7%BA%AF%E9%9F%B3%E4%B9%90%29.mp3",
            cover: "https://jsd.onmicrosoft.cn/npm/datawoojano@1.0.8/pic/Duvet%20%28%E7%BA%AF%E9%9F%B3%E4%B9%90%29.jpg",
            lrc: "https://jsd.onmicrosoft.cn/npm/datawoojano@1.0.8/lyric/Duvet%20%28%E7%BA%AF%E9%9F%B3%E4%B9%90%29.lrc",
            },
        ])
        
        
        ap.list.remove(0);
        ap.lrc.hide();
        ap.setMode("normal");
        document.getElementsByClassName("aplayer-icon-menu")[0].click()
        if(localStorage.getItem("musicIndex")!=null){
            musicIndex = localStorage.getItem("musicIndex");
            ap.list.switch(musicIndex);
            //歌曲可以本地储存
        }
        if(sessionStorage.getItem("musicTime") != null){
            window.musict = sessionStorage.getItem("musicTime");
            ap.setMode(sessionStorage.getItem("musicMode"));
            if(sessionStorage.getItem("musicPaused")!='1'){
                ap.play();
            }
            var g=true;
            ap.on("canplay",function(){
                if(g){
                    ap.seek(window.musict);
                    g=false;
                }
            });
        }else{
            sessionStorage.setItem("musicPaused",1);
            ap.setMode("normal");
        }
        if(sessionStorage.getItem("musicVolume") != null){
            ap.audio.volume=Number(sessionStorage.getItem("musicVolume"));
        }
        ap.on("pause",function(){sessionStorage.setItem("musicPaused",1);ap.lrc.hide()});
        ap.on("play",function(){sessionStorage.setItem("musicPaused",0);ap.lrc.show()});
        ap.audio.onvolumechange=function(){sessionStorage.setItem("musicVolume",ap.audio.volume);};
        setInterval(function(){
            musicIndex = ap.list.index;
            musicTime = ap.audio.currentTime;
            localStorage.setItem("musicIndex",musicIndex);
            sessionStorage.setItem("musicTime",musicTime);
            sessionStorage.setItem("musicMode",ap.mode);
        },200);
    }
}
document.addEventListener('DOMContentLoaded', (e) => {
    doStuff();
})
