## category

server

## titles

VAPID
Voluntary Application Server Identification

## description

1. アプリケーションサーバーで鍵ペアを作成
1. ブラウザはアプリケーションサーバーから公開鍵を受け取る
1. ブラウザでプッシュサーバーからのプッシュ通知の購読を登録する際にプッシュサービの SDK 等を使って公開鍵を渡す
1. アプリケーションサーバーがプッシュサーバーへプッシュ通知を送信する、この際に秘密鍵を使って生成した`JWT形式の署名トークン`と`公開鍵`を渡す
1. プッシュサーバーは公開鍵を使って JWT を検証し、問題なければプッシュ通知をブラウザに送信する