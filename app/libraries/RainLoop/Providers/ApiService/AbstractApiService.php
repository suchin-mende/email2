<?php

namespace RainLoop\Providers\ApiService;

abstract class AbstractApiService
{
	protected function curl($url, $method, $data = '')
	{
		$curl = curl_init();
		//  CURLOPT_URL: 用PHP取回的URL地址。你也可以在用curl_init()函数初始化时设置这个选项
		//  当进行HTTP请求时，传递一个字符被GET或HEAD使用
		curl_setopt($curl, CURLOPT_URL, $url);
		curl_setopt($curl, CURLOPT_CUSTOMREQUEST, $method);
		curl_setopt($curl, CURLOPT_HTTPHEADER, $this->makeHeaders());

		if ($method == "POST") {
			// CURLOPT_POST : PHP去做一个正规的HTTP POST，设置这个选项为一个非零值。这个POST是普通的 application/x-www-from-urlencoded 类型，多数被HTML表单使用。
			//  CURLOPT_POSTFIELDS : 传递一个作为HTTP “POST”操作的所有数据的字符串。
			curl_setopt($curl, CURLOPT_POST, TRUE);
			curl_setopt($curl, CURLOPT_POSTFIELDS, $data);
		}
		// 为保证第三方服务器与微信服务器之间数据传输的安全性，所有微信接口采用https方式调用，必须使用下面2行代码打开ssl安全校验。
		// 使用PHP curl获取页面内容或提交数据，有时候希望返回的内容作为变量储存，而不是直接输出。这个时候就必需设置curl的CURLOPT_RETURNTRANSFER选项为1或true。
		curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, FALSE);
		curl_setopt($curl,  CURLOPT_SSL_VERIFYHOST, FALSE);
		curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
		$retVal = curl_exec($curl);
		// 抓取URL并把它传递给浏览器
		if (curl_errno($curl))
			return curl_error($curl);
		curl_close($curl);
		return $retVal;
	}

	protected function get($url, $route)
	{
		return $this->curl($url . $route, 'GET');
	}

	protected function post($url, $route, $data)
	{
		return $this->curl($url . $route, 'POST', $data);
	}

	protected function makeHeaders() {
		$mobileType = \RainLoop\Utils::GetCookie(\RainLoop\Actions::RL_MOBILE_TYPE, 'desktop');
		$appTx = $mobileType == 'desktop' ? 'Email-PC-' : 'Email-SP-';
		$appTx .= APP_DEV_DIR == 'halgai/v/' ? 'MN' : 'CN';

		return array(
			'H_SERVICE_ID:' . APP_API_SERVICE_ID,
			'H_API_KEY_TX:' . APP_API_KEY_TX,
			'H_APP_TX:' . $appTx
		);
	}


	/**
	 * 构建路由路径
	 */
	protected function makeRoute($paramArray)
	{
		$result = '';
		foreach ($paramArray as $param) {
			if (strlen($result) > 0)
				$result .= '/';
			$result .= $param;
		}
		return $result;
	}
}
