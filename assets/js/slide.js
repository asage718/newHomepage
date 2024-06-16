$(document).ready(function(){
    $('.slider').slick({
        autoplay: true,//自動的に動き出すか。初期値はfalse。
        autoplaySpeed: 3000,//スライドの表示時間を6秒に設定
        infinite: true,//スライドをループさせるかどうか。初期値はtrue。
        speed: 1000,//スライドのスピード。初期値は300。
        slidesToShow: 3,//スライドを画面に3枚見せる
        slidesToScroll: 1,//1回のスクロールで1枚の写真を移動して見せる
        prevArrow: '#prevImage',//矢印部分PreviewのHTMLを変更
        nextArrow: '#nextImage',//矢印部分NextのHTMLを変更
        centerMode: true,//要素を中央ぞろえにする
        variableWidth: true,//幅の違う画像の高さを揃えて表示
        dots: true,//下部ドットナビゲーションの表示
    });
});
