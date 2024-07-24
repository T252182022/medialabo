///////////検索結果を元にページに結果を表示するJSコード
const resultDiv = document.querySelector("div#result");
let table;
let tbody;
let shopName;
function print(data) {
  let count = 1;
  for (let shop of data.results.shop) {
    shopName = document.createElement("h3");
    shopName.innerHTML = `<em>⭐️検索結果${count++}件目⭐️</em>`;
    resultDiv.insertAdjacentElement('beforeend', shopName);

    table = document.createElement("table");

    tbody = document.createElement("tbody");

    let info = [
      { label: "店名", value: shop.name },
      { label: "住所", value: shop.address },
      // { label: "ジャンル", value: shop.genre.name },
      { label: "予算", value: shop.budget.name },
      { label: "営業時間", value: shop.open },
      { label: "最寄駅", value: shop.station_name }
    ];

    for (let row of info) {
      let tr = document.createElement("tr");

      let th = document.createElement("th");
      th.scope = "row";
      th.textContent = row.label;
      tr.insertAdjacentElement('beforeend', th);

      let td = document.createElement("td");
      td.textContent = row.value;
      tr.insertAdjacentElement('beforeend', td);

      tbody.insertAdjacentElement('beforeend', tr);
    }

    table.insertAdjacentElement('beforeend', tbody);
    resultDiv.insertAdjacentElement('beforeend', table);
  }
}
///////////検索結果を元にページに結果を表示するJSコード

///////////イベントハンドラー
let b = document.querySelector('button#btn');
b.addEventListener('click', sendRequest);
///////////イベントハンドラー

///////////サーバーとの通信を行うJS
let skey;
function sendRequest() {
  let i = document.querySelector('select#keyword');
  let idx =i.selectedIndex;
  let os = i.querySelectorAll('option');
  let o = os.item(idx); 
    // URL を設定
  let url = 'https://www.nishita-lab.org/web-contents/jsons/hotpepper/' +o.getAttribute('value')+ '.json';//Value=G001-G017

  // 通信開始
  axios.get(url)
    .then(showResult)
    .catch(showError)
    .then(finish);
}

// 通信が成功した時の処理
function showResult(resp) {
  let ps1 = document.querySelectorAll('tbody');//1回目に表示していたお店の情報を消去
  for (let t of ps1) {
    t.remove();
  }
  let ps2 = document.querySelectorAll('h3');//「検索結果n件目]」と表示するh3要素を消去
  for (let s of ps2) {
    s.remove();
  }
  // サーバから送られてきたデータを出力
  let data = resp.data;

  // data が文字列型なら，オブジェクトに変換する
  if (typeof data === 'string') {
    data = JSON.parse(data);
  }
  print(data);//画面上に情報表示
}

// 通信エラーが発生した時の処理
function showError(err) {
  console.log(err);
}

// 通信の最後にいつも実行する処理
function finish() {
  console.log('サーバーとの通信完了！');
}
///////////サーバーとの通信を行うJS


// let b = document.querySelector('#print');
// b.addEventListener('click', search);

// function search() {
//   let i = document.querySelector('input');
//   let skey = i.value;      
//   console.log('検索キー：' + skey);
// }

// const resultDiv = document.querySelector("div#result");
// let count = 1;
// for (let shop of data.results.shop) {
//   let shopName = document.createElement("h3");
//   shopName.innerHTML = `<em>⭐️検索結果${count++}件目⭐️</em>`;
//   resultDiv.insertAdjacentElement('beforeend', shopName);

//   let table = document.createElement("table");

//   let tbody = document.createElement("tbody");

//   let info = [
//     { label: "店名", value: shop.name },
//     { label: "ジャンル", value: shop.genre.name },
//     { label: "住所", value: shop.address },
//     { label: "予算", value: shop.budget.name },
//     { label: "営業時間", value: shop.open },
//     { label: "最寄駅", value: shop.station_name }
//   ];

//   for (let row of info) {
//   let tr = document.createElement("tr");

//     let th = document.createElement("th");
//     th.scope = "row";
//     th.textContent = row.label;
//     tr.insertAdjacentElement('beforeend', th);

//     let td = document.createElement("td");
//     td.textContent = row.value;
//     tr.insertAdjacentElement('beforeend', td);

//     tbody.insertAdjacentElement('beforeend', tr);
//   }

//   table.insertAdjacentElement('beforeend', tbody);
//   resultDiv.insertAdjacentElement('beforeend', table);
// }






/////テキストフィールドで検索を行う方法（バックアップ）//////////

// const resultDiv = document.querySelector("div#result");
// let table;
// let tbody;
// let shopName;
// function print(data) {
//   let count = 1;
//   for (let shop of data.results.shop) {
//     shopName = document.createElement("h3");
//     shopName.innerHTML = `<em>⭐️検索結果${count++}件目⭐️</em>`;
//     resultDiv.insertAdjacentElement('beforeend', shopName);

//     table = document.createElement("table");

//     tbody = document.createElement("tbody");

//     let info = [
//       { label: "店名", value: shop.name },
//       { label: "ジャンル", value: shop.genre.name },
//       { label: "住所", value: shop.address },
//       { label: "予算", value: shop.budget.name },
//       { label: "営業時間", value: shop.open },
//       { label: "最寄駅", value: shop.station_name }
//     ];

//     for (let row of info) {
//       let tr = document.createElement("tr");

//       let th = document.createElement("th");
//       th.scope = "row";
//       th.textContent = row.label;
//       tr.insertAdjacentElement('beforeend', th);

//       let td = document.createElement("td");
//       td.textContent = row.value;
//       tr.insertAdjacentElement('beforeend', td);

//       tbody.insertAdjacentElement('beforeend', tr);
//     }

//     table.insertAdjacentElement('beforeend', tbody);
//     resultDiv.insertAdjacentElement('beforeend', table);
//   }
// }
// let b = document.querySelector('#sendRequest');
// b.addEventListener('click', sendRequest);
// let skey;
// function sendRequest() {
//   // URL を設定
//   let i = document.querySelector('input');
//   switch (i.value) {
//     case "居酒屋":
//       skey = "G001";
//       break;
//     case "ダイニングバー・バル":
//       skey = "G002";
//       break;
//     case "創作料理":
//       skey = "G003";
//       break;
//     case "和食":
//       skey = "G004";
//       break;
//     case "洋食":
//       skey = "G005";
//       break;
//     case "イタリアン・フレンチ":
//       skey = "G006";
//       break;
//     case "中華":
//       skey = "G007";
//       break;
//     case "焼肉・ホルモン":
//       skey = "G008";
//       break;
//     case "アジア・エスニック料理":
//       skey = "G009";
//       break;
//     case "各国料理":
//       skey = "G010";
//       break;
//     case "カラオケ・パーティ":
//       skey = "G011";
//       break;
//     case "バー・カクテル":
//       skey = "G012";
//       break;
//     case "ラーメン":
//       skey = "G013";
//       break;
//     case "カフェ・スイーツ":
//       skey = "G014";
//       break;
//     case "その他グルメ":
//       skey = "G015";
//       break;
//     case "お好み焼き・もんじゃ":
//       skey = "G016";
//       break;
//     case "韓国料理":
//       skey = "G017";
//       break;
//     default:
//       break;
//   }
//   let url = 'https://www.nishita-lab.org/web-contents/jsons/hotpepper/' + skey + '.json';

//   // 通信開始
//   axios.get(url)
//     .then(showResult)
//     .catch(showError)
//     .then(finish);
// }

// // 通信が成功した時の処理
// function showResult(resp) {
//   let ps1 = document.querySelectorAll('tbody');//1回目に表示していたお店の情報を消去
//   for (let t of ps1) {
//     t.remove();
//   }
//   let ps2 = document.querySelectorAll('h3');//検索結果n件目を消去
//   for (let s of ps2) {
//     s.remove();
//   }
//   // サーバから送られてきたデータを出力
//   let data = resp.data;

//   // data が文字列型なら，オブジェクトに変換する
//   if (typeof data === 'string') {
//     data = JSON.parse(data);
//   }
//   print(data);//画面上に情報表示
// }

// // 通信エラーが発生した時の処理
// function showError(err) {
//   console.log(err);
// }

// // 通信の最後にいつも実行する処理
// function finish() {
//   console.log('サーバーとの通信完了！');
// }