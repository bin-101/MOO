
const num_input=document.getElementById('input');
const num_button=document.getElementById('button');
const result_area=document.getElementById('result_area');

let count=0;
let answer;

function click(){
    const num=num_input.value;
    num_input.value='';

    if(num.length!=4) return;
    for(let i=0;i<4;i++){
        if(num[i]<'0' || num[i]>'9') return;
        for(let j=0;j<i;j++){
            if(num[i]==num[j]) return;
        }
    }

    count++;
    
    let bull=0,cow=0;
    for(let i=0;i<4;i++){
        for(let j=0;j<4;j++){
            if(num[i]==answer[j]){
                if(i==j) bull++;
                else cow++;
            }
        }
    }
    //console.log(bull);
    //console.log(cow);

    const result=document.createElement('p');
    if(count<10) result.innerText='_';
    result.innerText+=count+'  '+num+'　'+bull+'　'+cow;
    result_area.appendChild(result);
    
    if(bull!==4) return;
    const message=document.createElement('p');
    if(count<=6) message.innerText='すごい！';
    else if(count<=10) message.innerText='まあまあ';
    else message.innerText='もっと頑張ろう！';
    
    result_area.appendChild(message);
    const loop=document.createElement('button');
    loop.innerHTML='<button id="loop_button">もう一度遊ぶ</button>';
    result_area.appendChild(loop);

    //loop_button
    loop_button.onclick=()=>{
        init();
    }
}

function init(){
    while (result_area.firstChild) { // 子どもの要素があるかぎり除去
        result_area.removeChild(result_area.firstChild);
    }
    count=0;
    while(true){
        answer=[];
        for(let i=0;i<4;i++){
            answer.push(Math.floor(Math.random()*10)-'0');
    
        }
        let flag=true;
        for(let i=0;i<4;i++){
            for(let j=0;j<i;j++){
                if(answer[i]==answer[j]) flag=false;
            }
        }
        if(flag) break;
    }
    console.log(answer);
    const header=document.createElement('p');
    const t='1';
    header.innerText='　数字　bull　cow';
    result_area.appendChild(header);    
}

init();

num_button.onclick=()=>{
    click();
}
function Key_on(e){
    console.log(e);
    if(e=='13') click();
}
