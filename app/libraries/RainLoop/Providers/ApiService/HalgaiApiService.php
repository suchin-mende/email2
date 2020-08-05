<?php

namespace RainLoop\Providers\ApiService;

use \RainLoop\Providers\AddressBook\Enumerations\PropertyType;

class HalgaiApiService
extends \RainLoop\Providers\ApiService\AbstractApiService
implements \RainLoop\Providers\ApiService\ApiServiceInterface
{
	public function __construct()
	{
	}

	public function register($sUserCd, $sUserTx,$sPassword, $sTel, $authCd, $vipPlanCd)
	{
		return $this->post(APP_API_PATH, $this->makeRoute(array($this->getLanguage(), APP_API_VERSION, APP_API_COMPANY, 'user')), array(
			'userCd' => $sUserCd,
			'userTx' => $sUserTx,
			'passwordTx' => $sPassword,
			'serviceId' => APP_API_SERVICE_ID,
			'tel' => $sTel,
			'ruleId' => '',
			'authCd' => $authCd,
			'vipPlanCd' => $vipPlanCd

		));
	}
	public function sendRegisterSms($sUserCd, $sTel)
	{
		return $this->post(APP_API_PATH, $this->makeRoute(array($this->getLanguage(), APP_API_VERSION, APP_API_COMPANY, 'authcd')), array(
			'serviceId' => APP_API_SERVICE_ID,
			'userCd' => $sUserCd,
			'tel' => $sTel
		));
	}
	public function sendFindPasswordSms($sUserCd)
	{
		return $this->post(APP_API_PATH, $this->makeRoute(array($this->getLanguage(), APP_API_VERSION, APP_API_COMPANY, 'authcd')), array(
			'serviceId' => APP_API_SERVICE_ID,
			'userCd' => $sUserCd,
			'tel' => '99999'
		));
	}
	public function findPassword($sUserCd, $authCd, $sPassword)
	{
		return $this->post(APP_API_PATH, $this->makeRoute(array($this->getLanguage(), APP_API_VERSION, APP_API_COMPANY, APP_API_USER, 'forgotpw')), array(
			'userCd' => $sUserCd,
			'authCd' => $authCd,
			'newPW' => $sPassword
		));
	}

	public function getLanguage()
	{
		return APP_DEV_DIR == 'halgai/v/' ? 'mn' : 'cn';
	}
}
