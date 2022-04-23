/**
 * @description 生成唯一随机数
 * @param range 
 */
 export function randomId(range: number = 5) {
    let result = '',
      config = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
        'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n',
        'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
        'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N',
        'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
      ];
    for (let i = 0; i < range; i++) {
      let pos = Math.round(Math.random() * (config.length - 1));
      result += config[pos];
    }
    return result;
  }

  /**
	 * 生成范围随机数
	 * @Min 最小值
	 * @Max 最大值
	 */
	export function GetRandomNum(Min, Max):Number {
		var Range = Max - Min;
		var Rand = Math.random();
		return (Min + Math.round(Rand * Range));
	}
