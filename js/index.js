document.addEventListener("DOMContentLoaded", function () {
    // 로딩시 텍스트 효과
    const sec1_cont = document.querySelectorAll(".sec1_cont h1 span");
     // 10초 후에 overlay 사라짐
    //  setTimeout(function () {
    //     index_wrapper.style.opacity = "1"; 
    //     sec01_h1_span.style.transform = "translateY(0)";
    //     sec01_h1_span.classList.add('active');
    //     document.body.classList.remove("overlay-active"); 
    // }, 3500); // 10초 후에 함수 실행
    // 텍스트 애니메이션
    sec1_cont.forEach((textElement, index) => {
        setTimeout(function () {
            textElement.style.transform = "translateY(0) translateZ(0px)";
        }, index * 150); 
    });
});

// 섹션2 스크롤 애니
const index_wrapper = document.querySelector('.index_wrapper');
const video1 = document.querySelector('.section2 video')
const sec2_video_wrap = document.querySelector('.sec2_video_wrap')
const sec2_txt_wrap_li = document.querySelectorAll('.sec2_txt_wrap ul li');
index_wrapper.addEventListener('scroll',()=>{
    var scrollY = index_wrapper.scrollTop;
    var innerHeight = window.innerHeight;
    var scrollHeight = document.body.offsetHeight;
    var sec2_txt_wrap_ul = document.querySelector('.sec2_txt_wrap ul').offsetTop;
    const middleOfViewport = window.innerHeight / 2 + window.scrollY;
    // 동영상 크기 함수
    animateV();

    // index_wrapper 안의 위치값기준으로 스크롤값 구함
    const sec2_video_wrap_s = sec2_video_wrap.getBoundingClientRect();
    const sec2_video_wrap_s2 = sec2_video_wrap_s.top;
    if(sec2_video_wrap_s2 <= 130){
        document.querySelector('.sec2_txt_wrap').classList.add("ani");
    }else{
        document.querySelector('.sec2_txt_wrap').classList.remove("ani");
    }
    // 스크롤시 색상 진해짐
    sec2_txt_wrap_li.forEach(function(item, index) {
        const itemTop = item.getBoundingClientRect().top + window.scrollY;
        const itemBottom = itemTop + item.clientHeight;
        
        if (itemTop <= middleOfViewport + item.clientHeight && itemBottom >= middleOfViewport) {
            item.classList.add('opacity');
        } else {
            item.classList.remove('opacity');
        }
    });
    
});

const sec2_text1 = document.querySelector('.sec2_video_txt1');
function animateV(){
    // 비디오 크기
    let {bottom} = sec2_video_wrap.getBoundingClientRect();
    let scale = 1 - ((bottom - window.innerHeight) * .0005)
    scale = scale < .2 ? .2 : scale > 1 ? 1 : scale;
    video1.style.transform = `scale(${scale})`;

    // 텍스트 
    let textTrans = bottom - window.innerHeight;
    textTrans = textTrans < 0 ? 0 : textTrans;
    sec2_text1.style.transform = `translateX(${-textTrans}px)`;
}

