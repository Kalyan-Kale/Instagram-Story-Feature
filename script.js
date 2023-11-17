var arr = [
    {
        dp:"https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG1vZGVsfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",story:"https://images.unsplash.com/photo-1533929736458-ca588d08c8be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bG9uZG9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
    },
    {
        dp:"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",story:"https://images.unsplash.com/photo-1529655683826-aba9b3e77383?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bG9uZG9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
    },
    {
        dp:"https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",story:"https://images.unsplash.com/photo-1534374950034-3644ddb72710?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGxvbmRvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
        dp:"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHBvcnRyYWl0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",story:"https://images.unsplash.com/photo-1500380804539-4e1e8c1e7118?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGxvbmRvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
        dp:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHBvcnRyYWl0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",story:"https://images.unsplash.com/photo-1549483249-f0b359d1e289?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGxvbmRvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
        dp:"https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fHBvcnRyYWl0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",story:"https://images.unsplash.com/photo-1526129318478-62ed807ebdf9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bG9uZG9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
    }
];
var storiyan = document.querySelector("#storiyan");
var fullscreen = document.querySelector("#full-screen");
var clutter = "";
arr.forEach(function(elem,idx){
    clutter += `<div class="story">
    <img id="${idx}" src="${elem.dp}" alt="">
</div>`
})

storiyan.innerHTML = clutter;
storiyan.addEventListener("click",function(dets){
    fullscreen.style.display = "block";
    fullscreen.style.backgroundImage = `url(${arr[dets.target.id].story})`;

    setTimeout(function(){
        fullscreen.style.display = "none";
    },3000)
});

