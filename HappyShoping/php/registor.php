<?php  
	header('content-type:text/html;charset=utf-8');
	$conn=mysql_connect('localhost','root');//本地主机，用户名
	if(!$conn){
		die('连接数据库连接失败'.mysql_error());
	}
	mysql_select_db('shoping');
	mysql_query('SET NAMES UTF8');


	//检测用户名是否存在
	if(isset($_POST['repeatname']) || isset($_POST['submit'])){
		$name=@$_POST['repeatname'];
	}else{
		exit('非法操作');//不允许直接预览验证页面。
	}

	//如果result有结果，代码用户名出现重复。
	$result=mysql_query("select * from user where username='$name'");

	if(mysql_fetch_array($result)){//满足条件有重复
		echo true;
	}else{//没有重复
		echo false;
	}

	//点击了submit注册按钮。提交注册数据到数据库
	if(isset($_POST['submit'])){
		$username=$_POST['username'];//表单的name值获取
		$password=md5($_POST['password']);//表单的password值获取
		$email=$_POST['email'];//表单的email值获取
		$query="insert user value(default,'$username','$password','$email')";
		mysql_query($query);
		header('location:../src/html/login.html');//php的跳转
	}

?>