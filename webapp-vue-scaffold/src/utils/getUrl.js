/**
 * Created by zhangyang18 on 2017/8/22.
 */
export default{
       getUrlKey:function(name){
           return decodeURIComponent((new RegExp('[?|&]'+name+'='+'([^&;]+?)(&|#|;|$)').exec(location.href)||[,""])[1].replace(/\+/g,'%20'))||null;
       }
 }
