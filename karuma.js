'use strict'
const userNameInput = document.getElementById('user-name');
userNameInput.onkeydown = event => {
    if (event.key === 'Enter') {
      assessmentButton.onclick();
    }
  };
const assessmentButton = document.getElementById('assessment');
const resultDivided = document.getElementById('result-area');
const tweetDivided = document.getElementById('tweet-area');
assessmentButton.onclick = () =>{
    const userName = userNameInput.value;
    if (userName.length === 0) {
        // 名前が空の時は処理を終了する
        return;
      }
    console.log(userName);
    //診断結果表示エリアの作成
    resultDivided.innerText = "";
    const header = document.createElement('h3');
  header.innerText = '診断結果';
  resultDivided.appendChild(header);

  const paragraph = document.createElement('p');
  const result = assessment(userName);
  paragraph.innerText = result;
  resultDivided.appendChild(paragraph);
    
  //ツイートエリアの作成
    tweetDivided.innerText = "";
    const anchor = document.createElement('a');
const hrefValue =
'https://twitter.com/intent/tweet?button_hashtag=' +
encodeURIComponent('2022年度逃れられぬ業') +
'&ref_src=twsrc%5Etfw';
anchor.setAttribute('href', hrefValue);
anchor.className = 'twitter-hashtag-button';
anchor.setAttribute('data-text', result);
anchor.innerText = 'Tweet #2022年度逃れられぬ業';
tweetDivided.appendChild(anchor);
　　// widgets.js の設定
const script = document.createElement('script');
script.setAttribute('src', 'https://platform.twitter.com/widgets.js');
tweetDivided.appendChild(script);
  };
const answers =[
'{userName}は1年間お酒禁止です。{userName}は健康になっちゃうね、ハッピー！',
'{userName}は顔ハメパネル見たら写真を撮らないといけません。{userName}はハメハメ王を目指しましょう。',
'{userName}は1年間缶ジュース禁止です。{userName}はペットボトル飲料だけ飲んで、地球温暖化に貢献しよう',
'{userName}は1年間落単禁止です。大学生の本分は勉強なのに落単？ふざけるな！勉強しろ！。',
'{userName}は1年間就活禁止です。博識な{userName}は就活なんて不要です！不労所得で生きていこう！。',
'{userName}は1年間終電禁止です。{userName}だけわんちゃん終電ができません。かわいそうに……',
'{userName}は1年間「おんな」という事が禁止です。女性に優しい社会を一緒に作りましょう。',
'{userName}は毎日エスペラント語を5個暗記します。内側から溢れ出る{userName}の知性に皆が気を惹かれます。',
'{userName}は起床時に天気予報を投稿します。{userName}がする天気予報にいつも助けられる人がいます。',
'{userName}は1日1個豆知識を投稿（嘘豆知識もOK）します。ありのままの{userName}自身がいいところなのです。',
'{userName}は毎日日記を書いて投稿します。{userName}が感じたことに皆が共感し、わかりあうことができます。',
'{userName}は3日に1回パソコンの壁紙変更します。{userName}の素敵な壁紙に皆が感動しています。',
'{userName}は1年間1時までに就寝します。早寝早起きする{userName}の心構えが多くの人に魅力的に映ります。',
'{userName}は1年間返事が「あい」になります。{userName}の素敵な返事に多くの人が感銘を受けます。',
'{userName}は1年間に50作品（映画・本）に触れます。感受性豊かな{userName}が素敵なのです。',
'{userName}は毎日Instagramにストーリーを投稿します。素敵な{userName}の日常に触れられることに皆が歓喜しています。',
]

/**
 * 名前の文字列を渡すと診断結果を返す関数
 * @param{string}username ユーザーの名前
 * @return{string}診断結果
 */
 function assessment(userName) {
    // 全文字のコード番号を取得してそれを足し合わせる
    let sumOfCharCode = 0;
    for (let i = 0; i < userName.length; i++) {
      sumOfCharCode = sumOfCharCode + userName.charCodeAt(i);
    }
  
    // 文字のコード番号の合計を回答の数で割って添字の数値を求める
    const index = sumOfCharCode % answers.length;
    let result = answers[index];
    result=result.replaceAll('{userName}',userName);
    return result;
}
console.assert(
    assessment('太郎') ===
      '太郎のいいところは決断力です。太郎がする決断にいつも助けられる人がいます。',
    '診断結果の文言の特定の部分を名前に置き換える処理が正しくありません。'
  );
