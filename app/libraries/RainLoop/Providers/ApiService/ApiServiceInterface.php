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

	// vip类型
	public function vipPlans();

	/**
	 * vip方案
	 * @params childPlans 选填(true/false)
	 */
	public function vipPlan($planCd, $childPlans);

	/**
	 * 读取指定vip方案应付价格
	 * @params ticketCode 可选
	 */
	public function vipCoupon($userCd, $planCd, $ticketCode);
}
