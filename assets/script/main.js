//ハンバーガーメニュー
var hamburger = $('.header-nav');

// OPEN/CLOSEボタンをクリックしたら
$('.hamburger-button').on('click', function () {
    // .hamburgerの表示・非表示を繰り返す
    hamburger.toggleClass('header-nav-active');

});

// 画面幅のサイズが変わったら
$(window).on('resize', function () {

    // ハンバーガーメニューを閉じる
    hamburger.removeClass('header-nav-active');
});

// タブ
$('#smarttab').smartTab({
    enableUrlHash: false, // タブidにもとづいたURLハッシュの付与を無効
    autoAdjustHeight: false
});

