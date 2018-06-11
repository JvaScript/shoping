<?php
	//数据库连接 公共引用
	header('content-type:text/html;charset=utf-8');
	$conn=mysql_connect('localhost','root');//本地主机，用户名
	if(!$conn){
		die('连接数据库连接失败'.mysql_error());
	}
	mysql_select_db('shoping');
	mysql_query('SET NAMES UTF8');
	
	//banner图
	$result=mysql_query("select*from index_lunbo");
	$banner=array();
	for($i=0;$i<mysql_num_rows($result);$i++){
		$banner[$i]=mysql_fetch_array($result,MYSQLI_ASSOC);
	}
	//main图
	$result1=mysql_query("select*from index_main_img");
	$recommend=array();
	for($i=0;$i<mysql_num_rows($result1);$i++){
		$recommend[$i]=mysql_fetch_array($result1,MYSQLI_ASSOC);
	}
	
	class indexdata{
		
	}
	$index=new indexdata();
	$index->lunbo=$banner;
	$index->rec=$recommend;
	
	echo json_encode($index);
?>
