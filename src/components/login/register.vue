<template>
    <div class="register">
        <div class="fast-register">
            <div>快速注册</div>
            <div >
                <form action="" class="registerForm" id="registerForm" v-if="showuser">
                    <div>
                        <label for="acccount">账号</label>
                        <input type="text"  @blur="checkin($event,'acconut-unexist-desc','acconut-unpass')" id="acccount" class="inp" placeholder="账号仅由英文字母和数字组成，开头为英文字母">
                        <p id='acconut-unexist-desc' class="hide">该账号可用</p>
                        <p id='acconut-unpass' class="hide">该账号不可用</p>
                    </div>
                    <div>
                        <label for="password">密码</label>
                        <input type="password"  @blur="checkin($event,'password-unexist-desc','password-unpass')" id="password" class="inp" placeholder="密码仅由英文字母和数字组成，开头为英文字母">
                        <p id='password-unexist-desc' class="hide">该密码可用</p>
                        <p id='password-unpass' class="hide">该密码不可用</p>
                    </div>
                    <div>
                        <label for="repeat-password">确认密码</label>
                        <input type="password" @blur="surepassword($event,'password')" id="repeat-password" class="inp" placeholder="重复输入密码">
                        <p class="hide" id="pass-unsure">该密码与预设密码不符</p> 
                    </div>
                    <div>
                        <input type="checkbox" @click='ensureSubmit($event,"submitAccount")'>我已经阅读凤凰网房产用户注册协议
                    </div>
                    <button disabled=true id="submitAccount" class="SubmitButton" @click="register()"></button>
                </form>
                <div v-else id="successrRegister">{{registeruser}}您已成功注册</div>
            </div>
        </div>
    </div>
</template>
<script>
import $ from 'jquery';
export default {
    data(){
        return{
            showuser:true,
            registeruser:$('#acccount').val()
        }
    },
    methods:{
        checkin:function(event,param1,param2,param3){
            var checkrExp=new RegExp(/^(?=.*[a-zA-Z]+)(?=.*[0-9]+)[a-zA-Z0-9]+$/);
            if(checkrExp.test(event.currentTarget.value)){
                document.getElementById(param2).classList.add('hide');
                document.getElementById(param1).classList.remove('hide');
            }else{
                document.getElementById(param2).classList.remove("hide");
                document.getElementById(param1).classList.add('hide')
            };
        },
    surepassword:function($event,param){
            if(event.currentTarget.value!=document.getElementById(param).value){
                document.getElementById('pass-unsure').classList.remove('hide');
            }else{
                document.getElementById('pass-unsure').classList.add('hide');
            }
        },
    ensureSubmit:function($event,param){
        if(document.getElementById(param).disabled){
            document.getElementById(param).disabled=false;
            $('#submitAccount').addClass('SubmitButtonRed');
            $('#submitAccount').removeClass('SubmitButton');
        }else{
            document.getElementById(param).disabled=true;
            $('#submitAccount').addClass('SubmitButton');
            $('#submitAccount').removeClass('SubmitButtonRed');
        }
        }
    },
    // 注册用户
    register:function(){
        $.post(
            '../../../../task/login.php',
            {
                username:$('#acccount').val(),
                userpassword:$('#password').val()
            },
            function(){
                console.log("恭喜");
            }
        );
        showuser=false;
    }
}
</script>
<style>
.SubmitButton{
    background-image: url('../../img/提交注册灰.jpg');
    background-repeat: no-repeat;
    width: 210px;
    height:40px;
}
.SubmitButtonRed{
    background-image: url('../../img/提交注册.jpg');
    background-repeat: no-repeat;
    width: 210px;
    height:40px;
}
.register{
    text-align: center;
    margin-top: 50px;
    margin-bottom: 20px;
}
.fast-register{
    text-align: left;
    width: 610px;
    display: inline-block;
    margin: 0 auto;
}
.fast-register>div:first-child{
    border: 1px solid #dcdcdc;
    text-align: center;
    border-bottom-color: #fff;
    background: #fff;
    color: #343434;
    font-size: 18px;
    border-radius: 5px 5px 0 0;
    z-index: 0;
    width: 158px;
    height: 38px;
    line-height: 38px;
    z-index: 3;
}
.fast-register>div:last-child{
    width: 610px;
    text-align: center;
    height:522px;
    border: 1px solid #dcdcdc;
}
.fast-register form{
    height: 424px;
    padding-top: 50px;
}
.registerForm>div{
    height:70px;
    padding-top: 25px;
}
.inp{
    border: 1px solid #dcdcdc;
    height: 34px;
    line-height: 34px;
    width: 204px;
    margin-left: 20px;
    margin-right: 20px;
    padding: 0 12px;
}
.registerForm>div:nth-child(3)>input{
    margin-right: 48px;
}
.registerForm>div:last-child{
    vertical-align: middle;
    color: #797979;
}
.fast-register p{
    color: #f54343;
    margin: 4px 0 0 0px;
    font-size: 12px;
}
hide{
    display: none;
}
</style>