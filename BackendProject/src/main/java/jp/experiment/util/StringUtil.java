package jp.experiment.util;

public class StringUtil {
	
	private static final String HALF_CHARACTERS =
			"!\"#$%&\'()*+,-./0123456789:;<=>?@" +
	        "ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`" +
			"abcdefghijklmnopqrstuvwxyz{|}~" +
	        "｡｢｣､･ｧｨｩｪｫｬｭｮｯｰｱｲｴｵﾅﾆﾇﾈﾉﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾝﾞﾟ ";
	
	private static final String FULL_CHARACTERS = 
			"！”＃＄％＆’（）＊＋，－．／０１２３４５６７８９：；＜＝＞？＠" +
			"ＡＢＣＤＥＦＧＨＩＪＫＬＭＮＯＰＱＲＳＴＵＶＷＸＹＺ［￥］＾＿｀" +
			"ａｂｃｄｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚ ｛｜｝￣" +
			"。「」、・ァィゥェォャュョッーアイエオナニヌネノマミムメモヤユヨラリルレロン゛゜　";
	
	private static final String HAS_VOICING_DIACRITIC_HALF_CHARACTERS =
			"ｳｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾊﾋﾌﾍﾎ";
	
	private static final String VOICING_DIACRITIC_FULL_CHARACTERS =
			"ヴガギグゲゴザジズゼゾダヂヅデドバビブベボ";
	
	private static final String DEVOICING_DIACRITIC_HALF_CHARACTERS =
			"ﾊﾋﾌﾍﾎ";
	
	private static final String DEVOICING_DIACRITIC_FULL_CHARACTERS =
			"パピプペポ";

	public static String rtrim(String str) {
		if (str == null) {
			return null;
		}
		
		int pos = str.length();
		while ((pos > 0) && isHalfWhitespace(str.charAt(pos - 1))) {
			pos--;
		}
		
		return pos < str.length() ? str.substring(0, pos) : str;
	}
	
	public static String ltrim(String str) {
		if (str == null) {
			return null;
		}
		
		int length = str.length();
		int pos = 0;
		while ((length > pos) && isHalfWhitespace(str.charAt(pos))) {
			pos++;
		}
		
		return pos > 0 ? str.substring(pos, length) : str;
	}
	
	public static String rtrimN(String str) {
		if (str == null) {
			return null;
		}
		
		int pos = str.length();
		while ((pos > 0) && isFullOrHalfWhitespace(str.charAt(pos - 1))) {
			pos--;
		}
		
		return pos < str.length() ? str.substring(0, pos) : str;
	}
	
	public static String ltrimN(String str) {
		if (str == null) {
			return null;
		}
		
		int pos = 0;
		int length = str.length();
		while ((length > pos) && isFullOrHalfWhitespace(str.charAt(pos))) {
			pos++;
		}
		
		return pos > 0 ? str.substring(pos, length) : str;
	}
	
	public static String trimN(String str) {
		return ltrimN(rtrimN(str));
	}
	
	public static String ToFullWidthString(String str) {
		if (str == null) {
			return null;
		}
		
		char[] chrs = str.toCharArray();
		int len = chrs.length;
		Character chr, convertedChr, nextChr;
		var sb = new StringBuilder();

		for (int idx = 0; idx < chrs.length; idx++) {
			chr = chrs[idx];

			if (idx == (len - 1)) {
				convertedChr = toFullWidthCharacter(chrs[idx]);
			}
			else {
				nextChr = chrs[idx + 1];
				if (nextChr == 'ﾞ' && hasVoicingDiacriticHalfCharacter(chr)) {
					convertedChr = toVoicingDiacriticFullCharacter(chr);
					idx++;
				} else if (nextChr == 'ﾟ' && hasDevoicingDiacriticHalfCharacter(chr)) {
					convertedChr = toDevoicingDiacrticFullCharacter(chr);
					idx++;
				}
				else 
				{
					convertedChr = toFullWidthCharacter(chrs[idx]);
				}
			}
			
			sb.append(convertedChr);
		}
		
		return sb.toString();
	}
	
	public static String ToHalfWidthString(String str) {
		if (str == null) {
			return null;
		}
		
		char[] chrs = str.toCharArray();
		int len = chrs.length;
		var sb = new StringBuilder();
		
		for (int idx = 0; idx < chrs.length; idx++) {
			Character chr = chrs[idx];
			
			if (String.valueOf(chr).getBytes().length < 2) {
				sb.append(chr);
				continue;
			}
			
			int pos;
			
			pos = VOICING_DIACRITIC_FULL_CHARACTERS.indexOf(chr);
			if (pos >= 0) {
				sb.append(HAS_VOICING_DIACRITIC_HALF_CHARACTERS.charAt(pos));
				sb.append('ﾞ');
				continue;
			}
			
			pos = DEVOICING_DIACRITIC_FULL_CHARACTERS.indexOf(chr);
			if (pos >= 0) {
				sb.append(DEVOICING_DIACRITIC_HALF_CHARACTERS.charAt(pos));
				sb.append('ﾟ');
				continue;
			}
			
			sb.append(chr);
		}
		
		return sb.toString();
	}
	
	private static boolean isHalfWhitespace(char chr) {
		return chr == ' ';
	}
	
	private static boolean isFullOrHalfWhitespace(char chr) {
		return (chr == ' ' || chr == '　');
	}

	private static Character toFullWidthCharacter(Character chr) {
		if (String.valueOf(chr).getBytes().length > 1) {
			return chr;
		}
		
		int pos = HALF_CHARACTERS.indexOf(chr);
		
		return (pos >= 0) ? Character.valueOf(FULL_CHARACTERS.charAt(pos)) : null;
	}
		
	private static boolean hasVoicingDiacriticHalfCharacter(Character chr) {
		int pos = HAS_VOICING_DIACRITIC_HALF_CHARACTERS.indexOf(chr);
		
		return (pos >= 0);
	}
	
	private static Character toVoicingDiacriticFullCharacter(Character chr) {
		int pos = HAS_VOICING_DIACRITIC_HALF_CHARACTERS.indexOf(chr);
		
		return (pos >= 0) ? Character.valueOf(VOICING_DIACRITIC_FULL_CHARACTERS.charAt(pos)) : null;
	}
	
	private static boolean hasDevoicingDiacriticHalfCharacter(Character chr) {
		int pos = DEVOICING_DIACRITIC_HALF_CHARACTERS.indexOf(chr);
		
		return (pos >= 0);
	}
	
	private static Character toDevoicingDiacrticFullCharacter(Character chr) {
		int pos = DEVOICING_DIACRITIC_HALF_CHARACTERS.indexOf(chr);
		
		return (pos >= 0) ? Character.valueOf(DEVOICING_DIACRITIC_FULL_CHARACTERS.charAt(pos)) : null;
	}
}
