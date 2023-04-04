
const $button1 = document.getElementById('btn1');
const $button2 = document.getElementById('btn2');

$button1.addEventListener('click', () => {
    var playerLv1 = document.getElementById('playerlv-1');
    var playerLv2 = document.getElementById('playerlv-2');
        var playerCalc = 500*((Number(playerLv1.value)-1)**2+(Number(playerLv2.value)-1)**2);
        document.getElementById("player-XP").textContent = playerResult;
        var playerResult = document.getElementById('player-XP');
        playerResult.textContent = playerCalc;
    console.log(playerResult)
    })



$button2.addEventListener('click', () => {
    var clanLv1 = document.getElementById('clanlv-1');
    var clanLv2 = document.getElementById('clanlv-2');
        var clanCalc = 500*((Number(clanLv1.value)-1)**4+(Number(clanLv2.value)-1)**4);
        document.getElementById("clan-XP").textContent = clanResult;
        var clanResult = document.getElementById('clan-XP');
        clanResult.textContent = clanCalc;
    console.log(clanResult)
})

