Page(
    {
        data:{
            text:["点击开始以开始游戏"],
            visibility:["visible"],
            visibility2:["hidden"],
            visibility3:["hidden"],
            visibility4:["hidden"],
            visibility5:["hidden"],
            visibility6:["hidden"],
            visibility7:["hidden"],
            visibility8:["hidden"],
            visibility9:["hidden"],
            visibility10:["hidden"],
            visibility11:["hidden"],
            visibility12:["hidden"],
            visibility13:["hidden"],
            visibility14:["hidden"],
            visibility15:["hidden"],
            visibilitydoor:["hidden"],
        },
        start:function(){
            this.setData({
                text:"今天是考试周后的第一个周末，\n你准备睡个懒觉",
                visibility:"hidden",
                visibility2:"visible",
                visibility15:["hidden"],
            })
        },
        btn_next1:function(){
            this.setData({
                text:"丁铃铃铃铃铃铃铃……",
                visibility2:"hidden",
                visibility3:"visible",
                top:-50
            })
        },
        btn_next2:function(){
            this.setData({
                text:"奇怪，昨天晚上没有定闹钟啊...",
                visibility3:"hidden",
                visibility4:"visible"
            })
        },
        btn_next3:function(){
            this.setData({
                text:"看看手机...",
                visibility4:"hidden",
                visibility5:"visible"
            })
        },
        btn_next4:function(){
            this.setData({
                text:"哦，原来是昨天（划掉",
                visibility5:"hidden",
                visibility6:"visible"
            })
        },
        btn_next5:function(){
            this.setData({
                text:"寝室里怎么一个人都没有了？得下床康康...",
                visibility6:"hidden",
                visibility7:"visible"
            })
        },
        btn_next6:function(){
            this.setData({
                text:"先去哪里看看呢？",
                visibility7:"hidden",
                visibility8:"visible",
                visibility9:"visible"
            })
        },
        btn_next7:function(){
            this.setData({
                text:"为什么不先出门看看呢？",
                visibility8:"hidden",
                visibility9:"hidden",
                visibilitydoor:"visible"
            })
        },
        btn_next8:function(){
            this.setData({
                text:"这门不讲武德，怎么打不开了？这好吗？只能去阳台康康",
                visibilitydoor:"hidden",
                visibility8:"hidden",
                visibility9:"hidden",
                visibility10:"visible",
            })
        },
        btn_next9:function(){
            this.setData({
                text:"这里也没什么好看的，快溜吧...",
                visibility10:"hidden",
                visibility11:"visible",
            })
        },
        btn_next10:function(){
            this.setData({
                text:"撤硕里好像有些奇怪的东西...这是一把钥匙？赶紧去门口试试！",
                visibility11:"hidden",
                visibility12:"visible",
            })
        },
        btn_next11:function(){
            this.setData({
                text:"绝了，门把手上居然可以插钥匙...",
                visibility12:"hidden",
                visibility13:"visible",
            })
        },
        btn_next12:function(){
            this.setData({
                text:"门开了！爷可以出去了！",
                visibility13:"hidden",
                visibility14:"visible",
            })
        },
        btn_next13:function(){
            this.setData({
                text:"游戏结束",
                visibility14:"hidden",
                visibility15:"visible",
            })
        },
    }
)
