<?php

namespace RainLoop\Providers;

class ApiService extends \RainLoop\Providers\AbstractProvider
{
	/**
	 * @var \RainLoop\Providers\ApiService\ApiServiceInterface
	 */
	private $oDriver;

	/**
	 * @param \RainLoop\Providers\ApiService\Interface $oDriver
	 *
	 * @return void
	 */
	public function __construct($oDriver)
	{
		$this->oDriver = null;
		if ($oDriver instanceof \RainLoop\Providers\ApiService\ApiServiceInterface) {
			$this->oDriver = $oDriver;
		}
	}

	/**
	 * @param string $sEmail
	 * @param string $sUrl
	 * @param string $sUser
	 * @param string $sPassword
	 *
	 * @return bool
	 */
	public function login($sUserCd, $sPassword)
	{
		return $this->oDriver->login($sUserCd, $sPassword);
	}

	public function register($sUserCd, $sEmailSuffix, $sPassword, $phoneNumber, $smsCode, $vipPlanCd)
	{
		return $this->oDriver->register($sUserCd, $sEmailSuffix, $sPassword, $phoneNumber, $smsCode, $vipPlanCd);
	}

	public function sendRegisterSms($sUserCd, $sTel)
	{
		return $this->oDriver->sendRegisterSms($sUserCd, $sTel);
	}
	public function sendFindPasswordSms($sUserCd)
	{
		return $this->oDriver->sendFindPasswordSms($sUserCd);
	}

	public function findPassword($sUserCd, $smsCode, $sPassword)
	{
		return $this->oDriver->findPassword($sUserCd, $smsCode, $sPassword);
	}

}
