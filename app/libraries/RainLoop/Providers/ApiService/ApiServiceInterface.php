<?php

namespace RainLoop\Providers\ApiService;

interface ApiServiceInterface
{

	public function login($sUserCd, $sPassword);
	public function register($sUserCd, $sUserTx, $sPassword, $sTel, $authCd, $vipPlanCd);
	public function getLanguage();
	public function sendRegisterSms($sUserCd, $stel);
	public function sendFindPasswordSms($sUserCd);
	public function findPassword($sUserCd, $authCd, $sPassword);
}
