<?php
//数据库连接 公共引用
	header('content-type:text/html;charset=utf-8');
	$conn=mysql_connect('localhost','root');//本地主机，用户名
	if(!$conn){
		die('连接数据库连接失败'.mysql_error());
	}
	mysql_select_db('shoping');
	mysql_query('SET NAMES UTF8');
	//require "conn.php";



//---------------------login的 登录界面
	if(isset($_POST['user'])){
		$username=$_POST['username'];
		$password=md5($_POST['password']);
	}else{
		exit('非法操作');
	}


	$result=mysql_query("select * from user where username='$username' and password='$password' ");
	if(mysql_fetch_array($result)){//有值，登陆通过
		echo true;
	}else{
		echo false;
	}
	
	
	
	?>








