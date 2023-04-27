export type FogInfo = {
  authority_spki: string;
  report_url: string;
  report_id: '';
};

export type FogConstant = {
  mainnet: FogInfo;
  testnet: FogInfo;
};

export const MOBILECOIN_FOG: FogConstant = {
  mainnet: {
    authority_spki:
      'MIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEAyr/99fvxi104MLgDgvWPVt01TuTJ+rN4qcNBUbF5i3EMM5zDZlugFHKPYPv7flCh5yDDYyLQHfWkxPQqCBAqlhSrCakvQH3HqDSpbM5FJg7pt0k5w+UQGWvP079iSEO5fMRhjE/lORkvk3/UKr2yIXjZ19iEgP8hlhk9xkI42DSg0iIhk59k3wEYPMGSkVarqlPoKBzx2+11CieXnbCkRvoNwLvdzLceY8QNoLc6h2/nht4bcjDCdB0MKNSKFLVp6XNHkVF66jC7QWTZRA/d4pgI5xa+GmkQ90zDZC2sBc+xfquVIVtk0nEvqSkUDZjv7AcJaq/VdPu4uj773ojrZz094PI4Q6sdbg7mfWrcq3ZQG8t9RDXD+6cgugCTFx2Cq/vJhDAPbQHmCEaMoXv2sRSfOhRjtMP1KmKUw5zXmAZa7s88+e7UXRQC+SS77V8s3hinE/I5Gqa/lzl73smhXx8l4CwGnXzlQ5h1lgEHnYLRFnIenNw/mdMGKlWH5HwHLX3hIujERCPAnGLDt+4MjcUiU0spDH3hC9mjPVA3ltaA3+Mk2lDw0kLrZ4Gv3/Ik9WPlYetOuWteMkR1fz6VOc13+WoTJPz0dVrJsK2bUz+YvdBsoHQBbUpCkmnQ5Ok+yiuWa5vYikEJ24SEr8wUiZ4Oe12KVEcjyDIxp6QoE8kCAwEAAQ==',
    report_id: '',
    report_url: 'fog.prod.mobilecoinww.com',
  },
  testnet: {
    authority_spki:
      'MIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEAvnB9wTbTOT5uoizRYaYbw7XIEkInl8E7MGOAQj+xnC+F1rIXiCnc/t1+5IIWjbRGhWzo7RAwI5sRajn2sT4rRn9NXbOzZMvIqE4hmhmEzy1YQNDnfALAWNQ+WBbYGW+Vqm3IlQvAFFjVN1YYIdYhbLjAPdkgeVsWfcLDforHn6rR3QBZYZIlSBQSKRMY/tywTxeTCvK2zWcS0kbbFPtBcVth7VFFVPAZXhPi9yy1AvnldO6n7KLiupVmojlEMtv4FQkk604nal+j/dOplTATV8a9AJBbPRBZ/yQg57EG2Y2MRiHOQifJx0S5VbNyMm9bkS8TD7Goi59aCW6OT1gyeotWwLg60JRZTfyJ7lYWBSOzh0OnaCytRpSWtNZ6barPUeOnftbnJtE8rFhF7M4F66et0LI/cuvXYecwVwykovEVBKRF4HOK9GgSm17mQMtzrD7c558TbaucOWabYR04uhdAc3s10MkuONWG0wIQhgIChYVAGnFLvSpp2/aQEq3xrRSETxsixUIjsZyWWROkuA0IFnc8d7AmcnUBvRW7FT/5thWyk5agdYUGZ+7C1o69ihR1YxmoGh69fLMPIEOhYh572+3ckgl2SaV4uo9Gvkz8MMGRBcMIMlRirSwhCfozV2RyT5Wn1NgPpyc8zJL7QdOhL7Qxb+5WjnCVrQYHI2cCAwEAAQ==',
    report_id: '',
    report_url: 'fog.test.mobilecoin.com',
  },
};

export const SIGNAL_FOG: FogConstant = {
  mainnet: {
    authority_spki:
      'MIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEAxaNIOgcoQtq0S64dFVha6rn0hDv/ec+W0cKRdFKygiyp5xuWdW3YKVAkK1PPgSDD2dwmMN/1xcGWrPMqezx1h1xCzbr7HL7XvLyFyoiMB2JYd7aoIuGIbHpCOlpm8ulVnkOX7BNuo0Hi2F0AAHyTPwmtVMt6RZmae1Z/Pl2I06+GgWN6vufV7jcjiLT3yQPsn1kVSj+DYCf3zq+1sCknKIvoRPMdQh9Vi3I/fqNXz00DSB7lt3v5/FQ6sPbjljqdGD/qUl4xKRW+EoDLlAUfzahomQOLXVAlxcws3Ua5cZUhaJi6U5jVfw5Ng2N7FwX/D5oX82r9o3xcFqhWpGnfSxSrAudv1X7WskXomKhUzMl/0exWpcJbdrQWB/qshzi9Et7HEDNY+xEDiwGiikj5f0Lb+QA4mBMlAhY/cmWec8NKi1gf3Dmubh6c3sNteb9OpZ/irA3AfE8jI37K1rvezDI8kbNtmYgvyhfz0lZzRT2WAfffiTe565rJglvKa8rh8eszKk2HC9DyxUb/TcyL/OjGhe2fDYO2t6brAXCqjPZAEkVJq3I30NmnPdE19SQeP7wuaUIb3U7MGxoZC/NuJoxZh8svvZ8cyqVjG+dOQ6/UfrFY0jiswT8AsrfqBis/ZV5EFukZr+zbPtg2MH0H3tSJ14BCLduvc7FY6lAZmOcCAwEAAQ==',
    report_id: '',
    report_url: 'fog-rpt-prd.namda.net',
  },
  testnet: {
    authority_spki:
      'MIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEAxaNIOgcoQtq0S64dFVha6rn0hDv/ec+W0cKRdFKygiyp5xuWdW3YKVAkK1PPgSDD2dwmMN/1xcGWrPMqezx1h1xCzbr7HL7XvLyFyoiMB2JYd7aoIuGIbHpCOlpm8ulVnkOX7BNuo0Hi2F0AAHyTPwmtVMt6RZmae1Z/Pl2I06+GgWN6vufV7jcjiLT3yQPsn1kVSj+DYCf3zq+1sCknKIvoRPMdQh9Vi3I/fqNXz00DSB7lt3v5/FQ6sPbjljqdGD/qUl4xKRW+EoDLlAUfzahomQOLXVAlxcws3Ua5cZUhaJi6U5jVfw5Ng2N7FwX/D5oX82r9o3xcFqhWpGnfSxSrAudv1X7WskXomKhUzMl/0exWpcJbdrQWB/qshzi9Et7HEDNY+xEDiwGiikj5f0Lb+QA4mBMlAhY/cmWec8NKi1gf3Dmubh6c3sNteb9OpZ/irA3AfE8jI37K1rvezDI8kbNtmYgvyhfz0lZzRT2WAfffiTe565rJglvKa8rh8eszKk2HC9DyxUb/TcyL/OjGhe2fDYO2t6brAXCqjPZAEkVJq3I30NmnPdE19SQeP7wuaUIb3U7MGxoZC/NuJoxZh8svvZ8cyqVjG+dOQ6/UfrFY0jiswT8AsrfqBis/ZV5EFukZr+zbPtg2MH0H3tSJ14BCLduvc7FY6lAZmOcCAwEAAQ==',
    report_id: '',
    report_url: 'fog-rpt-stg.namda.net',
  },
};
