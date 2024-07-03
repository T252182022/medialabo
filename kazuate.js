let kotae = Math.floor(Math.random() * 10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

// 入力回数（予想回数）
let kaisu = 0;

// 予想を4回実行する
// 将来以下の hantei(); の4回の呼び出しを全て削除する
// 代わりにここでは，ボタンを押したら hantei() を呼び出すイベント処理をする
hantei();//回数を1回に変更済み


// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {
    // 将来ここでは 4 ではなくテキストボックスに指定された数値を yoso に代入する
    let yoso = 4;
    kaisu++;
    console.log(kaisu + "回目の予想:" + yoso);
    let s5 = document.querySelector('span#kaisu');
    s5.textContent=kaisu 
    let s6 = document.querySelector('span#answer');
    s6.textContent=kotae 
    let s7 =document.querySelector('p#result');
    if (yoso === kotae) {
        s7.textContent='正解です．おめでとう!';
    } else if (yoso !== kotae && yoso < kotae && kaisu <= 2) {
        s7.textContent='まちがい．答えはもっと大きいですよ';
    } else if (yoso !== kotae && yoso > kotae && kaisu <= 2) {
        s7.textContent='まちがい．答えはもっと小さいですよ';
    } else if (kaisu == 3) {
        s7.textContent='まちがい．残念でした答えは" + kotae + "です．';
    } else if (kaisu >= 4) {
        s7.textContent='答えは" + kotae + "でした．すでにゲームは終わっています';
    }



    // 課題3-1: 正解判定する
    // kotae と yoso が一致するかどうか調べて結果を出力
    // 課題3-1における出力先はコンソール
}

