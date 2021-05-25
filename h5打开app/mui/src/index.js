//https://www.php.cn/blog/detail/25616.html

mui.init()
console.log('mui', mui);
mui.plusReady(function() {
    console.log(111);
    //传入包名，检查手机上是否安装了这个应用
    function isInstall(packageName) { //
        try {
            var main = plus.android.runtimeMainActivity();
            var packageManager = main.getPackageManager();
            var PackageManager = plus.android.importClass(packageManager);
            var packageinfo = packageManager.getPackageInfo(packageName, PackageManager.GET_ACTIVITIES)
            if (packageinfo) {
                return true;
            } else {
                return false;
            }
        } catch (e) {
            return false;
        }
    }
    //批量传入包名，检查一系列应用是否安装，如果有任意一个安装了，就执行success，否认执行fail
    function operationAfterCheckInstall(mapsPackageNames, success, fail) {
        var res = mapsPackageNames.map(function(item) {
            return isInstall(item);
        })
        if (eval(res.join("||"))) {
            success();
        } else {
            fail();
        }
    }
    //可以在这里写业务逻辑了
    document.getElementById("nav").onclick = function() {
        //如果还知道其他地图的包名，也可以放这个数组里
        var mapsPackageNames = ['com.baidu.BaiduMap', 'com.autonavi.minimap', 'com.tencent.map'];
        operationAfterCheckInstall(mapsPackageNames, function() {
            var dst = new plus.maps.Point(46.1757500000,129.4252800000); // 目的地 
            var src = new plus.maps.Point(116.335, 39.966); // 起始地 可以不填
            plus.maps.openSysMap(dst, "达连河", src);
        }, function() {
            alert("您未安装百度地图、高德地图、腾讯地图,请前往应用市场下载");
        })
    }
})