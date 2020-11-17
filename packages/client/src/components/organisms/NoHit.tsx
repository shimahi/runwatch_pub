import React, { useState, useEffect } from 'react'
import 'twin.macro'
import todoImage from 'assets/tsurai_todo.png'
import ashikaImage from 'assets/animal_ashika.png'
import azarashiImage from 'assets/animal_gomafu_azarashi.png'
import ottoseiImage from 'assets/animal_ottosei.png'
import otariaImage from 'assets/animal_otaria.png'

export const NoHit = () => {
  const [isNoHit, setIsNohit] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsNohit(true), 1000)

    return () => clearTimeout(timer)
  })

  useEffect(() => {
    return () => {
      sessionStorage.clear()
    }
  })

  if (!isNoHit) return <></>

  return (
    <section tw="text-white p-16 px-6">
      <img src={todoImage} alt="" tw="mt-8 w-5/6 mx-auto max-w-md" />
      <h2 tw="text-3xl mt-6 text-center">Sorry...</h2>
      <p tw="mt-6 mx-auto sm:text-lg sm:text-center">
        残念ながら、指定の条件に一致する作品は見当たりませんでした。
        <br />
        検索条件を変更して、もう一度お試しください。
      </p>
      <h4 tw="mt-16 mx-auto sm:text-lg max-w-4xl">トド [海馬] Eumetopias jubatus; Steller sea lion</h4>
      <p tw="mx-auto sm:text-lg max-w-4xl">
        <br />
        食肉目鰭脚亜目アシカ科トド属。最大体長は雄約 3.3m，雌約 2.5m。体重は雄約 1t，雌約
        273kgに達する。出生直後の幼獣は平均して体長約 1m，体重は
        18～22kgである。アシカ科で最も大きい。体色は淡黄褐色で胸部から腹部にかけて濃くなる。雌は一般にやや淡色で，幼獣は黒茶色を呈する。体型は太い紡錘形である。雄は成長すると首にたてがみ状の長い毛が生える。下毛
        (綿毛) がない。吻はやや細長く，頭頂は少しくぼみ，耳介は約
        5cmに達する。門歯は上顎6本，下顎4本，犬歯は上顎と下顎に各2本，頬歯は上顎と下顎に各
        10本である。上顎の後方にある4番目と5番目の頬歯が離れている。繁殖場では 1000頭以上の群れをなすが，海上では
        15頭以下の群れで回遊する。キタオットセイに比べ上陸して休息することが多い。繁殖期は晩春から夏にかけてである。成熟した雄は，雌が繁殖場を回遊する前に上陸してなわばりをつくり，そのうちの
        10～15頭の雌と交尾する。1産1仔。食性範囲は広く，おもに魚類やスルメイカ類を捕食している。北太平洋の，東はカリフォルニア中部から西はカムチャツカ半島まで，北はベーリング海から南は日本北部までに分布し，海上では沿岸や大陸棚に出現する。絶滅危惧種。
        <br />
        <small tw="block text-right">出典 ブリタニカ国際大百科事典 小項目事典</small>
      </p>

      <img src={ashikaImage} alt="" tw="mt-24 w-5/6 mx-auto max-w-md" />
      <h4 tw="mt-16 mx-auto sm:text-lg max-w-4xl">アシカ [海驢] Otariidae; sea lion</h4>
      <p tw="mx-auto sm:text-lg max-w-4xl mt-4">
        食肉目鰭脚亜目アシカ科の水生哺乳類の総称。トド，カリフォルニアアシカ，キタオットセイなど7属
        14種ほどから成る。性的二形が著しく，雌は雄より小型。雄は成熟すると頭部に盛上がりができる。前後肢とも鰭 (ひれ)
        状。頸 (くび) が長く，耳介がある点でアザラシと区別できる。群れをつくって回遊し，イカや魚類を食べる <br />
        <small tw="block text-right">出典 ブリタニカ国際大百科事典 小項目事典</small>
      </p>

      <img src={ottoseiImage} alt="" tw="mt-24 w-5/6 mx-auto max-w-md" />
      <h4 tw="mt-16 mx-auto sm:text-lg max-w-4xl">オットセイ [海狗] Callorhinus ursinus; fur seal</h4>
      <p tw="mx-auto sm:text-lg max-w-4xl mt-4">
        キタオットセイとも。食肉目アシカ科。平均体長は雄2.1m，雌は1.4m。体色はぬれているときは黒く見えるが，乾くと若い個体は銀灰色，成老獣では灰赤褐色。北太平洋に分布する。夏〜秋にコマンドルスキー諸島，プリビロフ諸島およびサハリン沖のチュレニイ島（旧海豹島）に上陸。雄は15〜60頭の雌を従えてハレムをつくり繁殖する。妊娠期間は約１年。１腹１子。秋に島を離れて南方を回遊。一部は房総付近まで南下する。主として明け方にイカ，魚を食べる。毛皮は良質で高価だったため乱獲され一時は絶滅に瀕した。
        <br />
        <small tw="block text-right">出典 ブリタニカ国際大百科事典 小項目事典</small>
      </p>

      <img src={otariaImage} alt="" tw="mt-24 w-5/6 mx-auto max-w-md" />
      <h4 tw="mt-16 mx-auto sm:text-lg max-w-4xl">オタリア Otaria flavescens; South American sea lion</h4>
      <p tw="mx-auto sm:text-lg max-w-4xl mt-4">
        食肉目鰭脚亜目アシカ科オタリア属。雄は体長約 2.8m，体重約 350kg，雌は体長約 2.2m，体重約
        144kgに達する。出生直後の幼獣は体長 78～85cm，体重
        11～15kgである。毛色は黄色がかった橙色。成獣の雄は成長するに従い毛色が濃くなり茶色がかった橙色を呈し，後頭部や胸部に生えるたてがみ状の長い毛はやや淡い色をしている。出生時は上毛が黒色，下毛が灰色がかった橙色である。性的成熟に達した雄は，頭部から肩部までが太く，がんじょうである。吻部は幅広く，やや上方にそり返っており，鼻口部が長い。門歯は上顎6本，下顎4本，犬歯は上顎と下顎に2本ずつ，頬歯は上顎
        12本，下顎
        10本である。繁殖期は生息場所によって異なり，早いもので9月，遅いもので3月である。繁殖場は特定され，継続して利用される。雄は繁殖場から広範囲に回遊すると推測される。洋上では単独あるいは群れをなして漂う。食性範囲は広く，おもに表層性および底生性魚類やイセエビ類，スルメイカ類，タコ類やクラゲ類などの無脊椎動物を捕食する。フォークランド諸島および南アメリカ大陸南端から西側ではペルー北部まで，東側ではブラジル南部までの沿岸に分布する。沿岸性で，海上では大陸棚やその斜面に出現する。また淡水域や氷河に迷入することがある。野生のカリフォルニアアシカの輸出入が禁じられたため，その代替で飼育調教されている。
        <br />
        <small tw="block text-right">出典 ブリタニカ国際大百科事典 小項目事典</small>
      </p>

      <img src={azarashiImage} alt="" tw="mt-24 w-5/6 mx-auto max-w-md" />
      <h4 tw="mt-16 mx-auto sm:text-lg max-w-4xl">アザラシ [海豹] Phocidae; earless seal</h4>
      <p tw="mx-auto sm:text-lg max-w-4xl mt-4">
        食肉目鰭脚亜目アザラシ科の水生哺乳類の総称。タテゴトアザラシ，ハワイモンクアザラシ，ヒョウアザラシなど 10属
        19種から成る。最大種はミナミゾウアザラシで雄は体長約
        5.8m，体重は推定3～5tに達する。耳介がない点でアシカと区別される。前後肢は鰭 (ひれ)
        状。前肢は短くて体の前方についており，後肢は後方に向いていて前方に動かすことができないため，陸上での移動は芋虫のような動作による。一部淡水にすむものもあるが，大部分は海生。魚類，甲殻類，イカ，タコなどを食する
        <br />
        <small tw="block text-right">出典 ブリタニカ国際大百科事典 小項目事典</small>
      </p>
    </section>
  )
}
