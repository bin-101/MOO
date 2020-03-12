
const num_input=document.getElementById('input');
const num_button=document.getElementById('button');
const result_area=document.getElementById('result_area');

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
    result.innerText=num+'　'+bull+'　'+cow;
    result_area.appendChild(result);
    
    if(bull!==4) return;
    const message=document.createElement('p');
    message.innerText='おめでとう！\nもう一度遊ぶ場合はF5を押してね！';
    result_area.appendChild(message);

}


let answer;
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
num_button.onclick=()=>{
    click();
}
function Key_on(e){
    console.log(e);
    if(e=='13') click();
}
console.log(answer);
const header=document.createElement('p');
const t='1';
header.innerText='数字　bull　cow';
result_area.appendChild(header);
