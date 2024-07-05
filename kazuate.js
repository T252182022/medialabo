let kotae = Math.floor(Math.random() * 10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

// 入力回数（予想回数）
let kaisu = 0;
let count = 0;

// ボタンを押すとhanteiメソッドを実行する
let b1 = document.querySelector('#print');
b1.addEventListener('click', hantei);


// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {
    kaisu++;
    //テキストボックスから入力した値を代入→Stringからintへ変換
    let i = document.querySelector('input');
    let n1 = Number(i.value);
    let yoso = n1;
    //コンソールに画面と同じ内容を出力
    console.log(kaisu + "回目の予想:" + yoso);
    //ページ上に回数、答え、結果を表示する
    let s5 = document.querySelector('span#kaisu');
    s5.textContent = kaisu
    let s6 = document.querySelector('span#answer');
    s6.textContent = yoso
    let s7 = document.querySelector('p#result');
    //入力された予想と答えを比較する
    if (kaisu < 4 && count != 1) {
        if (yoso === kotae) {
            s7.textContent = '正解です．おめでとう!';
            count = 1;
        } else if (yoso !== kotae && yoso < kotae && kaisu <= 2) {
            s7.textContent = 'まちがい．答えはもっと大きいですよ';
        } else if (yoso !== kotae && yoso > kotae && kaisu <= 2) {
            s7.textContent = 'まちがい．答えはもっと小さいですよ';
        } else if (kaisu == 3) {
            s7.textContent = 'まちがい．残念でした答えは' + kotae + 'です．';
        }
    } else {
        s7.textContent = '答えは' + kotae + 'でした．すでにゲームは終わっています';
    }
    // 課題3-1: 正解判定する
    // kotae と yoso が一致するかどうか調べて結果を出力
    // 課題3-1における出力先はコンソール
}

