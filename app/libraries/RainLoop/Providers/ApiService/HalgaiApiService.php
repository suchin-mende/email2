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

	public function login($sUserCd, $sPassword)
	{
		return $this->post(APP_API_PATH, $this->makeRoute(array($this->getLanguage(), APP_API_VERSION, APP_API_COMPANY, 'auth/login')), array(
			'userCd' => $sUserCd,
			'password' => $sPassword
		));
	}

	public function register($sUserCd, $sUserTx,$sPassword, $sTel, $authCd, $vipPlanCd)
	{
		return $this->post(APP_API_PATH, $this->makeRoute(array($this->getLanguage(), APP_API_VERSION, APP_API_COMPANY, 'user')), array(
			'userCd' => $sUserCd,
			'userTx' => $sUserTx,
			'passwordTx' => $sPassword,
			'serviceId' => APP_API_SERVICE_ID,
			'tel' => $sTel,
			'roleId' => 1,
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

	public function vipPlans()
	{
		return $this->get(APP_API_PATH, $this->makeRoute(array($this->getLanguage(), APP_API_VERSION, APP_API_COMPANY, 'vip/plans')));
	}

	public function vipPlan($planCd, $childPlans)
	{
		$params = array(
			$this->getLanguage(), 
			APP_API_VERSION, 
			APP_API_COMPANY, 
			'vip/plan',
			$planCd
		);
		if ($childPlans != null)
			array_push($params, $childPlans);
		return $this->get(
			APP_API_PATH,
			$this->makeRoute($params)
		);
	}

	public function vipCoupon($userCd, $planCd, $ticketCode)
	{
		$params = array(
			$this->getLanguage(), 
			APP_API_VERSION, 
			APP_API_COMPANY, 
			'vip/coupon',
			$userCd,
			$planCd
		);
		if ($ticketCode != null)
			array_push($params, $ticketCode);
		return $this->get(
			APP_API_PATH,
			$this->makeRoute($params)
		);
	}

	public function perSonal($uid)
	{
		$params = array(
			$this->getLanguage(), 
			APP_API_VERSION, 
			APP_API_COMPANY, 
			'user/profile',
			$uid
		);

		return $this->get(
			APP_API_PATH,
			$this->makeRoute($params)
		);
	}
}
