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

// 섹션2 스크롤 애니
const index_wrapper = document.querySelector('.index_wrapper');
const video1 = document.querySelector('.section2 video')
const sec2_video_wrap = document.querySelector('.sec2_video_wrap')
const sec2_txt_wrap_li = document.querySelectorAll('.sec2_txt_wrap ul li');
const sec2_skill = document.querySelector('.sec2_skill');
const sec2_career = document.querySelector('.sec2_career');
index_wrapper.addEventListener('scroll',()=>{
    var scrollY = index_wrapper.scrollTop;
    var innerHeight = window.innerHeight;
    var scrollHeight = document.body.offsetHeight;
    let sec2_txt_wrap_ul = document.querySelector('.sec2_txt_wrap ul').offsetTop;
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
        // const itemBottom = itemTop + item.clientHeight;
        const itemBottom = item.getBoundingClientRect().bottom + window.scrollY;
        
        if (itemTop <= middleOfViewport + item.clientHeight && itemBottom >= middleOfViewport) {
            item.style.opacity = "1";
        } else {
            item.style.opacity = "0.3";
        }
    });
    // sec2_career
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

// // sec02 끝
// sec03 project
let projects =[
    {
        date:'2023.07',
        name:'경기도장애인생산품',
        pos: 'start',
        infor:'퍼블리싱 기여도 100%/HTML/scss/jquery/php',
        img: 'https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&q=80&w=2370&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D.jpg',
    },
]
const createProject = () => {
    projects.forEach(project =>{
        let panel = document.createElement('div');
        panel.classList.add('project',`${project.pos}`);

        let imageContainer = document.createElement('div');
        imageContainer.className = `imge_container`;

        let image = document.createElement('img');
        image.classList.add('sec03_img');
        image.src = project.img;

        let projectDetail = document.createElement('div');
        projectDetail.classList.add('sec03_detail');

        let projectInfor = document.createElement('p');
        projectInfor.innerText = project.infor;

        let projectName = document.createElement('h4');
        projectName.innerText = project.name;

        let projectDate = document.createElement('span');
        projectDate.innerText = project.date;

        // imageContainer.appendChild(img);
        panel.appendChild(imageContainer, projectDetail);

        document.querySelector('.sec03_slider').appendChild(panel);
    });
}

createProject();




