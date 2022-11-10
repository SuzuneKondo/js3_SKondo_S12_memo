//接続かくにん
// console.log("接続OK")
// alert("www")

$("#save").on('click', function () {

    let key = $("#key").val();
    let shop = $("#shop").val();
    let puname = $("#puname").val();
    let address = $("#address").val();
    let price = $("#price").val();
    let memo = $("#memo").val();

    console.log(key, '1データが取れてるかチェック')
    console.log(shop, '2データが取れてるかチェック')
    console.log(puname, '3データが取れてるかチェック')
    console.log(address, '4データが取れてるかチェック')
    console.log(price, '5データが取れてるかチェック')
    console.log(memo, '6データが取れてるかチェック')

    const puddingData = {
      key: key,
      shop: shop,
      puname: puname,
      address: address,
      price: price,
      memo: memo
    }

    // console.log(puddingData)

    // 書き込み ※JavaScriptオブジェクト -> JSON文字列に変換
    const allData = JSON.stringify(puddingData);
    
    //ストレージに保存
    localStorage.setItem("dataList",allData); 

    // 読み込み ※JSON文字列 -> JavaScriptオブジェクトに変換
    JSON.parse(localStorage.getItem("dataList")) 
    
    //ストレージからデータ引っ張る→表示
    const val = localStorage.getItem("dataList");
    const obj = JSON.parse(val);
    console.log(obj)

    // 削除 ※変わらず
    // localStorage.removeItem("allData");

    const html=`
    <div class="record">
    <dl class="dl-text">
        <dt class="dt-text">題名：</dt>
        <dd class="dd-text">${obj.key}</dd>
        <dt class="dt-text">店名：</dt>
        <dd class="dd-text">${obj.shop}</dd>
        <dt class="dt-text">🍮名：</dt>
        <dd class="dd-text">${obj.puname}</dd>
        <dt class="dt-text">地域：</dt>
        <dd class="dd-text">${obj.address}</dd>
        <dt class="dt-text">価格：</dt>
        <dd class="dd-text">${obj.price}</dd>
        <dt class="dt-text">その他記録：</dt>
        <dd class="dd-text">${obj.memo}</dd>
    </dl>
    </div>
    `;
        $("#list").append(html);

});

//2.clear クリックイベント

$("#clear").on("click",function(){
    localStorage.clear();
    $(".list").empty();
});


// 3.ページ読み込み：保存データ取得表示
for (let i = 0; i < localStorage.length; i++) {
            const dataKey = localStorage.key(i);
            const dKey = localStorage.getItem(dataKey);
            const OBJ = JSON.parse(dKey);
            const key =OBJ.key
            const shop=OBJ.shop
            const puname=OBJ.puname
            const address=OBJ.address
            const price=OBJ.price
            const memo=OBJ.memo
            
            const html = `
            <div class="record">
            <dl class="dl-text">
                <dt class="dt-text">題名：</dt>
                <dd class="dd-text">${key}</dd>
                <dt class="dt-text">店名：</dt>
                <dd class="dd-text">${shop}</dd>
                <dt class="dt-text">🍮名：</dt>
                <dd class="dd-text">${puname}</dd>
                <dt class="dt-text">地域：</dt>
                <dd class="dd-text">${address}</dd>
                <dt class="dt-text">価格：</dt>
                <dd class="dd-text">${price}</dd>
                <dt class="dt-text">その他記録：</dt>
                <dd class="dd-text">${memo}</dd>
            </dl>
            </div>
            `

            // 画面上に埋め込み
            $("#list").append(html)
            }


// //元のデータ
// //1.Save クリックイベント

// // saveのボタンが押されたら、実行したい🤗
// $("#save").on('click', function () {
//     // jQueryでinputのhtmlの記述された文字を取得する方法
//     // val();
//     // $("#xx").val(); inputタグにしか使えない
//     // input text email textarea tel


//     let key = $("#key").val();
//     let shop = $("#shop").val();
//     let puname = $("#puname").val();
//     let address = $("#address").val();
//     let price = $("#price").val();
//     let memo = $("#memo").val();

//     console.log(key, '1データが取れてるかチェック')
//     console.log(shop, '2データが取れてるかチェック')
//     console.log(puname, '3データが取れてるかチェック')
//     console.log(address, '4データが取れてるかチェック')
//     console.log(price, '5データが取れてるかチェック')
//     console.log(memo, '6データが取れてるかチェック')

//     const html=`
//     <div class="record">
//     <dl class="dl-text">
//         <dt class="dt-text">題名：</dt>
//         <dd class="dd-text">${key}</dd>
//         <dt class="dt-text">店名：</dt>
//         <dd class="dd-text">${shop}</dd>
//         <dt class="dt-text">🍮名：</dt>
//         <dd class="dd-text">${puname}</dd>
//         <dt class="dt-text">地域：</dt>
//         <dd class="dd-text">${address}</dd>
//         <dt class="dt-text">価格：</dt>
//         <dd class="dd-text">${price}</dd>
//         <dt class="dt-text">その他記録：</dt>
//         <dd class="dd-text">${memo}</dd>
//     </dl>
//     </div>
//     `;

//     $("#list").append(html);

//     localStorage.setItem(key,shop,puname,address)
// });

// // 各inputのidを配列に入れて管理
// const puddingData = ["key", "shop", "puname"];

// // ローカルストレージに入れる用のオブジェクト変数
// let obj = {};

// const pData = document.getElementById("save");
//         save.addEventListener("click", function () {
//             let ppp = [];

//             // テキストを入れる
//             const allText = document.getElementsByClassName("dd-item");
//             console.log(puddingData);
//             let ddLength = allText.length;

//             obj["ddTextLength"] = allText.length;
//             // console.log({ allText });
//             // console.log(allText.shop.value);
//             // console.log(allText[0].value);
//         })
