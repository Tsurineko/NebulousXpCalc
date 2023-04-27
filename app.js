// 計算
const $button1 = document.getElementById('btn1');
const $button2 = document.getElementById('btn2');
const $radio = document.getelementsby

$button1.addEventListener('click', () => {
    var playerLv1 = document.getElementById('playerlv-1');
    var playerLv2 = document.getElementById('playerlv-2');
        var playerCalc = 500*((Number(playerLv1.value)-1)**2+(Number(playerLv2.value)-1)**2);
        document.getElementById("player-XP").textContent = playerCalc;
    })



$button2.addEventListener('click', () => {
    var clanLv1 = document.getElementById('clanlv-1');
    var clanLv2 = document.getElementById('clanlv-2');
        var clanCalc = 500*((Number(clanLv1.value)-1)**4+(Number(clanLv2.value)-1)**4);
        document.getElementById("clan-XP").textContent = clanCalc;
})

// 言語設定
const LangJa = document.getElementById('lang-ja');
const LangEn = document.getElementById('lang-en');

LangJa.addEventListener('change',() => {
    var CelectorName = ['.lang-current-lv','.lang-to','.lang-target-lv','.lang-required-XP','.lang-run','.lang-theme'];
    var ConstName = ['LangCurrentLv','LangTo','LangTargetLv','LangRequiredXp','LangRun','LangTheme'];
    var ClassTextContentJa = ['現在のレベル','から','目標レベル','必要経験値','計算','テーマ'];
    for (var i = 0; i < CelectorName.length; i++ ){
        ConstName[i] = document.querySelectorAll(CelectorName[i]);
        ConstName[i].forEach(element => {
            element.textContent = ClassTextContentJa[i];
        })
    }     
})

LangEn.addEventListener('change',() => {
    var CelectorName = ['.lang-current-lv','.lang-to','.lang-target-lv','.lang-required-XP','.lang-run','.lang-theme'];
    var ConstName = ['LangCurrentLv','LangTo','LangTargetLv','LangRequiredXp','LangRun','LangTheme'];
    var ClassTextContentEn = ['Current Lv','To','Target Lv','Required Xp','Run','Theme'];
    for (var i = 0; i < CelectorName.length; i++ ){
        ConstName[i] = document.querySelectorAll(CelectorName[i]);
        ConstName[i].forEach(element => {
            element.textContent = ClassTextContentEn[i];
        })
    }
})

// 背景色
const ChangeTheme= document.getElementById('change-theme');
var Theme = document.querySelector('body');
ChangeTheme.addEventListener('click',() => {
   
console.log(Theme.className);

    if(Theme.className == 'theme-dark'){          
        Theme.className = 'theme-light';
        console.log(Theme.className);
    }else{
        Theme.className = 'theme-dark';
        console.log(Theme.className);
}
})



// formの要素が最大値最小値を超えたとき、目標レベルと現在のレベルの関係が崩れたときの処理を記述。
// $button1.addEventListener('change',function(){
// if()else{}

// })