// import {createProject , lerp} from "./project.js";
document.addEventListener("DOMContentLoaded", function () {
    // 로딩시 텍스트 효과
    const sec1_cont = document.querySelectorAll(".sec1_cont h1 span");
    // 텍스트 애니메이션
    sec1_cont.forEach((textElement, index) => {
        setTimeout(function () {
            textElement.style.transform = "translateY(0) translateZ(0px)";
        }, index * 150); 
    });
});

// 섹션2 
const index_wrapper = document.querySelector('.index_wrapper');
const video1 = document.querySelector('.section2 video')
const sec2_video_wrap = document.querySelector('.sec2_video_wrap')
const sec2_txt_wrap_li = document.querySelectorAll('.sec2_txt_wrap ul li');
const sec2_skill = document.querySelector('.sec2_skill');
const sec2_career = document.querySelector('.sec2_career');

// 탑버튼
let lastScrollPos = window.pageYOffset;
let topButton = document.querySelector('.go_top');
// 스크롤 애니
index_wrapper.addEventListener('scroll',()=>{
    let scrollY = index_wrapper.scrollTop;
    let innerHeight = window.innerHeight;
    let scrollHeight = document.body.offsetHeight;
    let sec2_txt_wrap_ul = document.querySelector('.sec2_txt_wrap ul').offsetTop;
    const middleOfViewport = window.innerHeight / 2 + window.scrollY;
    let currentScrollPos = window.pageYOffset;
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
        // const itemBottom = itemTop + item.clientHeight;
        const itemBottom = item.getBoundingClientRect().bottom + window.scrollY;
        
        if (itemTop <= middleOfViewport + item.clientHeight && itemBottom >= middleOfViewport) {
            item.style.opacity = "1";
        } else {
            item.style.opacity = "0.3";
        }
    });
    // sec2_career / sec2_skill_top 글자 애니메이션
    let sec2_career_top = sec2_career.getBoundingClientRect().top - 900 ;
    let sec2_skill_top = sec2_skill.getBoundingClientRect().top - 900 ;
    if(sec2_career_top <= 200){
        sec2_career.style.transform = "scale(1)";
        sec2_career.style.opacity = "1";
    }else{
        sec2_career.style.transform = "scale(0)";
        sec2_career.style.opacity = "0";
    }
    if(sec2_skill_top <= 500){
        sec2_skill.style.transform = "scale(1)";
        sec2_skill.style.opacity = "1";
    }else{
        sec2_skill.style.transform = "scale(0)";
        sec2_skill.style.opacity = "0";
    }
});
// 탑버튼 노출 비노출
index_wrapper.addEventListener("wheel",function(e){
    let scrollUp = e.deltaY;

    if (scrollUp <= 0){
        topButton.style.bottom = '3rem';
    }else{
        topButton.style.bottom = '-10rem';
    }

})

// 탑버튼 클릭시 최상단 이동
topButton.addEventListener('click', function() {
    index_wrapper.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

const sec2_text1 = document.querySelector('.sec2_video_txt1');
const sec2_video_ul = document.querySelector('.sec2_video_ul');
function animateV(){
    // 비디오 크기
    let {bottom} = sec2_video_wrap.getBoundingClientRect();
    let scale = 1 - ((bottom - window.innerHeight) * .0005)
    scale = scale < .2 ? .2 : scale > .97 ? 1 : scale;
    video1.style.transform = `scale(${scale})`;
    // about 텍스트 좌우 
    let textTrans = bottom - window.innerHeight;
    textTrans = textTrans < 0 ? 0 : textTrans;
    sec2_text1.style.transform = `translateX(${-textTrans}px)`;
    // about 
    let scale2 = 1 - ((bottom - window.innerHeight) * .0005)
    scale2 = scale2 < 0 ? 0 : scale2 > 1 ? 1 : scale2;
    sec2_video_ul.style.transform = `scale(${scale})`;
}

// // 섹션2 끝

// 섹션3 프로젝트
const sec03_sticky = document.querySelector('.sec03_sticky');
const sec03_slider = document.querySelector('.sec03_slider');

let projectTargetX = 0;
let projectCurrentX = 0;
// 화면 너비값에 따라 너비 지정
let percentages = {
    small: 1350,
    medium: 580,
    large: 260
}
// 이미지 개수 지정을 위해 화면 너비 지정
let limit = window.innerWidth <= 500 ? percentages.small :
            window.innerWidth <= 1100 ? percentages.medium :
            percentages.large

function setLimit(){
    limit = window.innerWidth <= 500 ? percentages.small :
            window.innerWidth <= 1100 ? percentages.medium :
            percentages.large
}
// 리사이징시 함수 실행
window.addEventListener('resize', setLimit);

function lerp(start, end, t){
    return start * ( 1 - t ) + end * t ;
}

function animateProjects(){
    let offsetTop = sec03_sticky.parentElement.offsetTop;
    let percentage = ((index_wrapper.scrollTop - offsetTop) / window.innerHeight) * 270;
    percentage = percentage < 0 ? 0 : percentage > limit ?  limit : percentage;
    projectTargetX = percentage;
    projectCurrentX = lerp(projectCurrentX, projectTargetX, .1);
    sec03_slider.style.transform = `translate3d(${-(projectCurrentX)}vw, 0 , 0)`;
}

function animate1(){
    animateProjects();
    requestAnimationFrame(animate1)
}
animate1();

// 섹션3 project 
let projects =[
    {
        date:'2023.07',
        name:'경기도장애인생산품',
        pos: 'start',
        infor:'퍼블리싱 기여도 100%/HTML/scss/jquery/php',
        image:'img/sec03_img1.jpg',
        link:'https://www.gom.or.kr/'
    },
    {
        date:'2023.06',
        name:'아마존타이어',
        pos: 'mid',
        infor:'퍼블리싱 기여도 100% / HTML / scss / jqeury / php',
        image:'img/sec03_img2.png',
        link:'http://93amazon.com/'
    },
    {
        date:'2023.05',
        name:'네오아이즈',
        pos: 'end',
        infor:'퍼블리싱 기여도 100% / HTML / scss / jqeury / php',
        image:'img/sec03_img5.jpg',
        link:'https://www.neodisc.co.kr/'
    },
    {
        date:'2023.05',
        name:'스튜디오버드',
        pos: 'mid',
        infor:'퍼블리싱 기여도 100% / HTML / scss / jqeury / php',
        image:'img/sec03_img3.PNG',
        link:'https://vird.co.kr/'
    },
    {
        date:'2023.04',
        name:'주식회사 머다',
        pos: 'end',
        infor:'퍼블리싱 기여도 100% / HTML / scss / jqeury / php',
        image:'img/sec03_img4.jpg',
        link:'https://meoda.kr/'
    },
    {
        date:'2022.06',
        name:'제이디컴포넌트',
        pos: 'start',
        infor:'퍼블리싱 기여도 100% / HTML / scss / jqeury / php',
        image:'img/sec03_img13.PNG',
        link:'http://jdcomponent.com/'
    },
    {
        date:'2023.03',
        name:'양현미술상',
        pos: 'mid',
        infor:'퍼블리싱 기여도 100% / HTML / scss / jqeury / php',
        image:'img/sec03_img6.PNG',
        link:'http://yanghyunprize.org/'
    },
    {
        date:'2022.11',
        name:'레몬헬스케어',
        pos: 'start',
        infor:'퍼블리싱 기여도 100% / HTML / CSS3 / jqeury / php',
        image:'img/sec03_img7.PNG',
        link:'https://www.lemonhealthcare.com/'
    },
    {
        date:'2022.08',
        name:'세종전통문화체험관',
        pos: 'end',
        infor:'퍼블리싱 기여도 100% / HTML / CSS3 / jqeury / php',
        image:'img/sec03_img8.jpg',
        link:'http://jtchehum.com/'
    },
    {
        date:'2023.02',
        name:'벨루나',
        pos: 'mid',
        infor:'퍼블리싱 기여도 100% / HTML / scss / jqeury / php',
        image:'img/sec03_img9.jpg',
        link:'https://beluna.kr/'
    },
    {
        date:'2023.02',
        name:'더미디어컨시어지',
        pos: 'end',
        infor:'퍼블리싱 기여도 100% / HTML / CSS3 / jqeury / php',
        image:'img/sec03_img10.png',
        link:'http://themediaconcierge.co.kr/'
    },
    {
        date:'2023.01',
        name:'줄앤줄',
        pos: 'start',
        infor:'퍼블리싱 기여도 100% / HTML / scss / jqeury / php',
        image:'img/sec03_img11.jpg',
        link:'https://zoolnzool.com/'
    },
    {
        date:'2022.06',
        name:'서울IR네트워크',
        pos: 'end',
        infor:'퍼블리싱 기여도 100% / HTML / CSS3 / jqeury / php',
        image:'img/sec03_img15.jpg',
        link:'http://www.seoulir.co.kr/'
    }
]
// 섹션3 프로젝트 태그 삽입
const createProject = () => {
    projects.forEach(project =>{
        let panel = document.createElement('div');
        panel.classList.add('project',`${project.pos}`);

        let imageContainer = document.createElement('a');
        imageContainer.className = 'imge_container';
        imageContainer.href = project.link;
        imageContainer.target = "_blank"

        let image = document.createElement('img');
        image.classList.add('sec03_img');
        image.src = project.image;

        let porjectDetailWrap = document.createElement('div');
        porjectDetailWrap.classList.add('sec03_detail_wrap');

        let projectDetail = document.createElement('div');
        projectDetail.classList.add('sec03_detail');


        let projectInfor = document.createElement('p');
        projectInfor.innerText = project.infor;

        let projectName = document.createElement('h4');
        projectName.innerText = project.name;

        let projectDate = document.createElement('span');
        projectDate.innerText = project.date;

        porjectDetailWrap.append(projectDetail,projectInfor);
        projectDetail.append(projectDate,projectName)

        imageContainer.appendChild(image);
        panel.append(imageContainer, porjectDetailWrap);

        document.querySelector('.sec03_slider').appendChild(panel);
    });
}
// 섹션3 프로젝트 함수 실행
createProject();


// 섹션4 
const sec04 = document.querySelector('.section4');
const sec04_circle = document.querySelector('.sec04_circle');
// 섹션4 텍스트 배경 크기
function scrollCircle(){
    let {top} = sec04.getBoundingClientRect();
    let scaleTop = Math.abs(top);
    let scale = (scaleTop / window.innerHeight);
    scale = scale < 0 ? 0 : scale > 1 ? 1 : scale;
    let sec04_top = top - window.innerHeight;
    sec04_top = sec04_top < 0 ? 0 : sec04_top 

    if(top <= 0){
        sec04_circle.style.transform = `translate(-50%,-50%) scale(${scale})`;
    }else{
        sec04_circle.style.transform = `translate(-50%,-50%) scale(0)`;
    }
    if(sec04_top<=0  && scale ==1){
        index_wrapper.style.backgroundColor = `#000`;
    }else{
        index_wrapper.style.backgroundColor = `#fff`;
    }
}

// 섹션5
const sec05_inner = document.querySelector('.sec05_inner');
const sec05_left = document.querySelector('.sec05_left_txt');
const sec05_right = document.querySelector('.sec05_right_txt');

function scrollSec05(){
    let {bottom} = sec05_inner.getBoundingClientRect();
    let textTrans = bottom - window.innerHeight;
    textTrans = textTrans < 0 ? 0 : textTrans 
    // 좌측
    sec05_left.style.transform = `translateX(${-textTrans}px)`;
    // 우측
    sec05_right.style.transform = `translateX(${textTrans}px)`;
};
// 섹션4, 섹션5 스크롤 애니 실행
index_wrapper.addEventListener('scroll',()=>{
    scrollCircle();
    scrollSec05();
    scrollSec06();
});

// 섹션6

// 텍스트 애니메이션
const sec06_cont_span = document.querySelectorAll('.sec6_cont h1 span');
const sec06_cont = document.querySelector('.sec6_cont');

function scrollSec06 (){
    let {top} = sec06_cont.getBoundingClientRect();
    let scrollTop = Math.abs(top);
    let scroll = (scrollTop / window.innerHeight);
    scroll = scroll < 1.1 ? 1.1 : scroll ;
    if(scroll<=1.1){
        sec06_cont_span.forEach((textElement, index) => {
            setTimeout(function () {
                textElement.style.transform = "translateY(0) translateZ(0px)";
            }, index * 150); 
        });
    }else{
        sec06_cont_span.forEach((textElement, index) => {
            setTimeout(function () {
                textElement.style.transform = "translateY(100%) translateZ(0px)";
            }, index * 150); 
        });
    }
}

