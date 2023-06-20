const routes = [
    {
      name: '业财转换配置',
      path: '/businessFinance',
      children: [
        {
          name: '业财转换规则',
          path: '/businessFinance/voucffffher',
        },
        {
          name: '渠道科目映射',
          path: '/businessFinance/bankDeposit',
        },
      ],
    },
    {
      name: '财务凭证管理',
      path: '/voucherManage',
      children: [
        {
          name: '汇总凭证查询-收款',
          path: '/voucherManage/summary-gather',
        },
        {
          name: '汇总凭证查询-付款',
          path: '/voucherManage/summary-payment',
        },
        {
          name: '汇总凭证查询-收入',
          path: '/voucherManage/income',
          iframeUrl:
            '//sso-qbi.ximalaya.com/integration/cas/server/login?redirectUrl=https%3A%2F%2Fqbi.ximalaya.com%2Fdashboard%2Fview%2Fpc.htm%3FpageId%3D2e7efe9f-0cd0-473f-8698-6c79f4eed3d3%26dd_orientation%3Dauto',
        },
        {
          name: '汇总凭证查询-成本',
          path: '/voucherManage/cost',
          iframeUrl:
            '//sso-qbi.ximalaya.com/integration/cas/server/login?redirectUrl=https%3A%2F%2Fqbi.ximalaya.com%2Fdashboard%2Fview%2Fpc.htm%3FpageId%3D8f20841f-920c-4295-bf46-68ae8bb84df0%26dd_orientation%3Dauto',
        },
      ],
    },
    {
      name: 'IAP产品配置',
      path: '/iapProduct',
    },
    {
      name: '钱包配置管理',
      path: '/Wallet',
      children: [
        {
          name: '钱包页配置管理',
          path: '/Wallet/wallet',
        },
      ],
    },
  ];


  const authority = [
    "/businessFinance/voucher",
    "/Wallet/wallet",
    "/businessFinance/bankDeposit",
    "/voucherManage/summary-gather",
    "/voucherManage/summary-payment",
    "/voucherManage/income",
    "/voucherManage/cost",
    "/iapProduct"
]

const accessibleRoutes = [];

function traverse(routes) {
  for (const route of routes) {
    if (authority.includes(route.path)) {
      accessibleRoutes.push(route);
    } else if (route.children) {
      traverse(route.children);
    }
  }
}

traverse(routes);

console.log(accessibleRoutes);
