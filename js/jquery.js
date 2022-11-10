//接続かくにん
// console.log("接続OK")
// alert("www")



//1.Save クリックイベント

// saveのボタンが押されたら、実行したい🤗
$("#save").on('click', function () {(
    // jQueryでinputのhtmlの記述された文字を取得する方法
    // val();
    // $("#xx").val(); inputタグにしか使えない
    // input text email textarea tel
    let key = {ここ変
        $("#key").val();
        $("#shop").val();
        $("#puname").val();
        $("#address").val();
        $("#price").val();
        $("#memo").val();
    }

    // let key = $("#key").val();
    // let shop = $("#shop").val();
    // let puname = $("#puname").val();
    // let address = $("#address").val();
    // let price = $("#price").val();
    // let memo = $("#memo").val();

    console.log(key, '1データが取れてるかチェック')
    console.log(memo, '2データが取れてるかチェック')
    console.log(shop, '3データが取れてるかチェック')

    const html=`
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
    `;

    $("#list").append(html);


    // if (key === '') {
    // alert('文字入れろよ！！！！')
    // }

    localStorage.setItem(key,shop)
});


//2.clear クリックイベント

$("#clear").on("click",function(){
    localStorage.clear();
    $(".list").empty();
});



//3.ページ読み込み：保存データ取得表示
for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            const value = localStorage.getItem(key);
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