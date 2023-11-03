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
        image:'img/sec03_img3.png',
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
        image:'img/sec03_img13.png',
        link:'http://jdcomponent.com/'
    },
    {
        date:'2023.03',
        name:'양현미술상',
        pos: 'mid',
        infor:'퍼블리싱 기여도 100% / HTML / scss / jqeury / php',
        image:'img/sec03_img6.png',
        link:'http://yanghyunprize.org/'
    },
    {
        date:'2022.11',
        name:'레몬헬스케어',
        pos: 'start',
        infor:'퍼블리싱 기여도 100% / HTML / CSS3 / jqeury / php',
        image:'img/sec03_img7.png',
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

        let projectDetail = document.createElement('div');
        projectDetail.classList.add('sec03_detail');

        let projectInfor = document.createElement('p');
        projectInfor.innerText = project.infor;

        let projectName = document.createElement('h4');
        projectName.innerText = project.name;

        let projectDate = document.createElement('span');
        projectDate.innerText = project.date;

        projectDetail.append(projectDate, projectName ,projectInfor);

        imageContainer.appendChild(image);
        panel.append(imageContainer, projectDetail);

        document.querySelector('.sec03_slider').appendChild(panel);
    });
}

function lerp(start, end, t){
    return start * ( 1 - t ) + end * t ;
}

export {
    createProject,lerp
}