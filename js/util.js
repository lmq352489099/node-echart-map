let proviceList = {
  '北京': 'BeiJing',
  '上海': 'ShangHai',
  '天津': 'TianJin',
  '重庆': 'ChongQing',
  '香港': 'XiangGang',
  '澳门': 'Aomen',
  '安徽': 'AnHui',
  '福建': 'FuJian',
  '广东': 'GuangDong',
  '广西': 'GuangXi',
  '贵州': 'GuiZhou',
  '甘肃': 'GanSu',
  '海南': 'HaiNan',
  '河北': 'HeBei',
  '河南': 'HeNan',
  '黑龙江': 'HeiLongJiang',
  '湖北': 'HuBei',
  '湖南': 'HuNan',
  '吉林': 'JiLin',
  '江苏': 'JiangSu',
  '江西': 'JiangXi',
  '辽宁': 'LiaoNing',
  '内蒙古': 'NeiMengGu',
  '宁夏': 'NingXia',
  '青海': 'QingHai',
  '陕西': 'ShanXi1',
  '山西': 'ShanXi',
  '山东': 'ShanDong',
  '四川': 'SiChuan',
  '台湾': 'TaiWan',
  '西藏': 'XiZang',
  '新疆': 'XinJiang',
  '云南': 'YunNan',
  '浙江': 'ZheJiang',
}

function converrCN2En(cname) {
  return proviceList[cname]
}

let spcialCutyList = {
  "恩施州": '恩施土家族苗族自治州',
  "神农架林区": "神农架林区",
  "海北州": "海北藏族自治州",
  "伊犁": "伊犁哈萨克自治州",
  "巴州": "巴音郭楞蒙古自治州",
  "吐鲁番": '吐鲁番'
}

function fmtCityName(cname) {
  // console.log(cname);
  let realNmae = spcialCutyList[cname]

  return realNmae || cname + '市'
}