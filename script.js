
for (var i = 0; i < 5; i++) { // 5개의 세트로 구성
    for (var j = 0; j < 6; j++) { // 1세트당 6개의 숫자
        var lotto = [];
        while (lotto.length < 6) {
            var num = parseInt(Math.random() * 45 + 1);
            if (lotto.indexOf(num) == -1) {
                lotto.push(num);
            }
        }
        lotto.sort((a, b) => a - b);

        document.write("<div class='ball ball" + (j + 1) + "'>" + lotto[j] + "</div>");
    }
    document.write("<br><br><br><br>"); // 한 줄 끝나면 줄바꿈
}