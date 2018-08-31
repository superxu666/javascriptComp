/**
 * 全局的API 模块
 */
(function (window, undefined) {


    //var host = 'https://127.0.0.1:50002', // 本地
    var host = 'https://sp.wit-learn.com', // 发布
        // var host = 'https://wx.wit-learn.com', // 生产
        cdn = 'https://cdn.wit-learn.com', // 视频CDN
        global = {
            api: { // api对象
                signIn: host + '/subProgStudentApi/student/userLogin', // 登录
                signOut: host + '/subProgStudentApi/private/userLogout', // 登出
                modifyInfo: host + '/subProgStudentApi/private/student/updateInfo', // 修改个人信息
                QRCodeLoginToken: host + '/subProgStudentApi/generateStudentQRCodeLoginToken', // 获取二维码登录令牌token
                QRCodeLogin: host + '/subProgStudentApi/studentQRCodeLogin', // 拼接token, 生成二维码url
                detectionStudentQRCodeLogin: host + '/subProgStudentApi/detectionStudentQRCodeLogin',
                myworks: host + '/subProgStudentApi/private/work/myWork', // 我的作品
                excellentworks: host + '/subProgStudentApi/private/work/selectionWork', // 精选作品
                currentCourse: host + '/subProgStudentApi/private/course/currentCourse', // 当前的课程
                subCourseList: host + '/subProgStudentApi/private/course/subCourseList', // 课次列表
                lastSubCourseInfo: host + '/subProgStudentApi/private/course/lastSubCourseInfo', // 最新课次信息
                subCourseStatus: host + '/subProgStudentApi/private/course/subCourseStatus', // 课次状态
                subCourseDetail: host + '/subProgStudentApi/private/course/subCourseDetail', // 课次详情
                updateSubCourseStatus: host + '/subProgStudentApi/private/course/updateSubCourseStatus', // 更新指定课次的状态
                subCourseInfo: host + '/subProgStudentApi/private/teachPlatform/subCourseInfo', // 课次信息
                getCourseMapInitCourseId: host + '/subProgStudentApi/private/course/getCourseMapInitCourseId', // 获取初始化课程地图的courseId
                courseSelection: host + '/subProgStudentApi/private/course/courseSelection', // 课程选择
                getServerTime: host + '/subProgStudentApi/private/serverTime', // 获取服务器时间等接口
                courseCertificateList: host + '/subProgStudentApi/private/course/courseCertificateList', // 获取课程证书列表
                getCourseCertificate: host + '/subProgStudentApi/private/course/getCourseCertificate', // 获取课程证书
                updateUserSubCourseActualAttendTime: host + '/subProgStudentApi/private/course/updateUserSubCourseActualAttendTime', // 修改用户课次实际上课时间
                getCourseProgress: host + '/subProgStudentApi/private/course/getCourseProgress', // 获取课程完成进度
                querySubCourseTeachPlatFormInfo: host + '/subProgStudentApi/private/teachPlatform/querySubCourseTeachPlatFormInfo', // 动态获取课程课次授课平台信息 
                queryTeacherStatus: host + '/subProgStudentApi/private/teacher/queryTeacherStatus', //查询老师状态
                queryTeacherCount: host + '/subProgStudentApi/private/answerQuestion/searchTeacherMessageCount',
            },
            customAlert: { // 弹框对象
                count: 0,
                getHtmlStr: function (mes, btnName) {

                    switch (arguments.length) {
                        case 1:
                            return '<div class="alert-layer">' +
                                '<div class="alert-box">' +
                                '<p class="alert-content">' + (mes || '第1节课，将于5月30日晚上8点开课。') + '</p>' +
                                '<div class="alert-btn">' +
                                '<a class="alert-confirm">确定</a>' +
                                '</div>' +
                                '</div>' +
                                '</div>';
                            break;
                        case 2:
                            return '<div class="alert-layer">' +
                                '<div class="alert-box">' +
                                '<p class="alert-content">' + (mes || '第1节课，将于5月30日晚上8点开课。') + '</p>' +
                                '<div class="alert-btn">' +
                                '<a class="alert-confirm">' + btnName + '</a>' +
                                '<a class="alert-cancel">取消</a>' +
                                '</div>' +
                                '</div>' +
                                '</div>';
                            break;
                    }
                },
                showMessage: function (mes, btnName, func) {

                    if (btnName && typeof btnName !== 'function') { // 按钮不为函数

                        $(document.body).append(this.getHtmlStr(mes, btnName));
                    } else {

                        $(document.body).append(this.getHtmlStr(mes));
                        func = btnName;
                    }

                    $('.alert-confirm').on('click', function () { // 绑定确认按钮事件

                        func && func();
                        $('.alert-layer').remove();
                    });
                    $('.alert-cancel').on('click', function () { // 绑定取消按钮事件

                        $('.alert-layer').remove();
                    });
                }

            },
            mesText: {
                noOpeningOfTheCourse: '您没有报名该课程',
            }
        };

    window.theHost = host;
    window.cdnUrl = cdn;

    if (typeof module === 'object' && module && typeof module.exports === 'object') {
        module.exports = global;
    } else {
        window.global = global;
        if (typeof define === 'function' && define.amd) {
            define('global', [], function () {
                return global;
            });
        }
    }

}(window));