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
        ap.list.add([{
            {
            name: "防止不加载第一首 爱歌 的歌词",
            artist: "0",
            url: "0",
            cover: "0",
            lrc: "0",
            },
            {
            name: "他只是经过",
            artist: "h3R3、高旭",
            url: "https://jsd.onmicrosoft.cn/npm/woojanoaplayer@1.0.1/music/h3R3%E3%80%81%E9%AB%98%E6%97%AD%20-%20%E4%BB%96%E5%8F%AA%E6%98%AF%E7%BB%8F%E8%BF%87.mp3",
            cover: "https://jsd.onmicrosoft.cn/npm/woojanoaplayer@1.0.1/pic/h3R3%E3%80%81%E9%AB%98%E6%97%AD%20-%20%E4%BB%96%E5%8F%AA%E6%98%AF%E7%BB%8F%E8%BF%87.jpg",
            lrc: "https://jsd.onmicrosoft.cn/npm/woojanoaplayer@1.0.1/lyric/h3R3%E3%80%81%E9%AB%98%E6%97%AD%20-%20%E4%BB%96%E5%8F%AA%E6%98%AF%E7%BB%8F%E8%BF%87.lrc",
            },
            {
            name: "magnolia",
            artist: "keshi",
            url: "https://jsd.onmicrosoft.cn/npm/woojanoaplayer@1.0.1/music/keshi%20-%20magnolia.mp3",
            cover: "https://jsd.onmicrosoft.cn/npm/woojanoaplayer@1.0.1/pic/keshi%20-%20magnolia.jpg",
            lrc: "https://jsd.onmicrosoft.cn/npm/woojanoaplayer@1.0.1/lyric/keshi%20-%20magnolia.lrc",
            },
            {
            name: "记·念",
            artist: "不是花火呀",
            url: "https://jsd.onmicrosoft.cn/npm/woojanoaplayer@1.0.1/music/%E4%B8%8D%E6%98%AF%E8%8A%B1%E7%81%AB%E5%91%80%20-%20%E8%AE%B0%C2%B7%E5%BF%B5.mp3",
            cover: "https://jsd.onmicrosoft.cn/npm/woojanoaplayer@1.0.1/pic/%E4%B8%8D%E6%98%AF%E8%8A%B1%E7%81%AB%E5%91%80%20-%20%E8%AE%B0%C2%B7%E5%BF%B5.jpg",
            lrc: "https://jsd.onmicrosoft.cn/npm/woojanoaplayer@1.0.1/lyric/%E4%B8%8D%E6%98%AF%E8%8A%B1%E7%81%AB%E5%91%80%20-%20%E8%AE%B0%C2%B7%E5%BF%B5.lrc",
            },
            {
            name: "还是会想你.mp3",
            artist: "林达浪、h3R3",
            url: "https://jsd.onmicrosoft.cn/npm/woojanoaplayer@1.0.1/music/%E6%9E%97%E8%BE%BE%E6%B5%AA%E3%80%81h3R3%20-%20%E8%BF%98%E6%98%AF%E4%BC%9A%E6%83%B3%E4%BD%A0.mp3",
            cover: "https://jsd.onmicrosoft.cn/npm/woojanoaplayer@1.0.1/pic/%E6%9E%97%E8%BE%BE%E6%B5%AA%E3%80%81h3R3%20-%20%E8%BF%98%E6%98%AF%E4%BC%9A%E6%83%B3%E4%BD%A0.jpg",
            lrc: "https://jsd.onmicrosoft.cn/npm/woojanoaplayer@1.0.1/lyric/%E6%9E%97%E8%BE%BE%E6%B5%AA%E3%80%81h3R3%20-%20%E8%BF%98%E6%98%AF%E4%BC%9A%E6%83%B3%E4%BD%A0.lrc",
            },
            {
            name: "沉溺（你让我的心不再结冰）",
            artist: "邹沛沛、Pank ",
            url: "https://jsd.onmicrosoft.cn/npm/woojanoaplayer@1.0.1/music/%E9%82%B9%E6%B2%9B%E6%B2%9B%E3%80%81Pank%20-%20%E6%B2%89%E6%BA%BA%EF%BC%88%E4%BD%A0%E8%AE%A9%E6%88%91%E7%9A%84%E5%BF%83%E4%B8%8D%E5%86%8D%E7%BB%93%E5%86%B0%EF%BC%89.mp3",
            cover: "https://jsd.onmicrosoft.cn/npm/woojanoaplayer@1.0.1/pic/%E9%82%B9%E6%B2%9B%E6%B2%9B%E3%80%81Pank%20-%20%E6%B2%89%E6%BA%BA%EF%BC%88%E4%BD%A0%E8%AE%A9%E6%88%91%E7%9A%84%E5%BF%83%E4%B8%8D%E5%86%8D%E7%BB%93%E5%86%B0%EF%BC%89.jpg",
            lrc: "https://jsd.onmicrosoft.cn/npm/woojanoaplayer@1.0.1/lyric/%E9%82%B9%E6%B2%9B%E6%B2%9B%E3%80%81Pank%20-%20%E6%B2%89%E6%BA%BA%EF%BC%88%E4%BD%A0%E8%AE%A9%E6%88%91%E7%9A%84%E5%BF%83%E4%B8%8D%E5%86%8D%E7%BB%93%E5%86%B0%EF%BC%89.lrc",
            },            
            {
            name: "冬眠.mp3",
            artist: "阿YueYue、刘兆宇",
            url: "https://jsd.onmicrosoft.cn/npm/datawoojano@1.0.8/music/%E9%98%BFYueYue%E3%80%81%E5%88%98%E5%85%86%E5%AE%87%20-%20%E5%86%AC%E7%9C%A0.mp3",
            cover: "https://jsd.onmicrosoft.cn/npm/datawoojano@1.0.8/pic/%E9%98%BFYueYue%E3%80%81%E5%88%98%E5%85%86%E5%AE%87%20-%20%E5%86%AC%E7%9C%A0.jpg",
            lrc: "https://jsd.onmicrosoft.cn/npm/datawoojano@1.0.8/lyric/%E9%98%BFYueYue%E3%80%81%E5%88%98%E5%85%86%E5%AE%87%20-%20%E5%86%AC%E7%9C%A0.lrc",
            },
        ]);
    }
}
document.addEventListener('DOMContentLoaded', (e) => {
    doStuff();
})
      
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
